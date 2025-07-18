'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stepData } from '../constants';

const ContactSection = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
    const containerRef = useRef(null);
    const inputRefs = useRef([]);

    // Memoized functions to prevent unnecessary re-renders
    const nextStep = useCallback(() => {
        if (step < 2) setStep(step + 1);
    }, [step]);

    const prevStep = useCallback(() => {
        if (step > 0) setStep(step - 1);
    }, [step]);

    const handleInputChange = useCallback((field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Create FormData object for form submission
            const formDataObj = new FormData();
            formDataObj.append('access_key', process.env.NEXT_PUBLIC_ACCESS_KEY);
            formDataObj.append('name', formData.name);
            formDataObj.append('email', formData.email);
            formDataObj.append('message', formData.message);

            const response = await fetch(process.env.NEXT_PUBLIC_ACCESS_LINK, {
                method: 'POST',
                body: formDataObj
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                // Reset form after successful submission
                setFormData({ name: '', email: '', message: '' });
                setStep(0);
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }, [formData]);

    // Auto-focus current input when step changes
    useEffect(() => {
        const timer = setTimeout(() => {
            inputRefs.current[step]?.focus();
        }, 350);

        return () => clearTimeout(timer);
    }, [step]);

    // Auto-hide status messages after 5 seconds
    useEffect(() => {
        if (submitStatus) {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!containerRef.current?.contains(document.activeElement)) return;
            if (isSubmitting) return;

            switch (e.key) {
                case 'Enter':
                    e.preventDefault();
                    if (step < 2) {
                        nextStep();
                    } else {
                        handleSubmit(e);
                    }
                    break;

                case 'Backspace':
                    const currentInput = inputRefs.current[step];
                    if (e.ctrlKey || (currentInput && currentInput.value === '')) {
                        e.preventDefault();
                        prevStep();
                    }
                    break;

                case 'ArrowRight':
                    e.preventDefault();
                    nextStep();
                    break;

                case 'ArrowLeft':
                    e.preventDefault();
                    prevStep();
                    break;

                case 'Escape':
                    setFormData({ name: '', email: '', message: '' });
                    setStep(0);
                    setSubmitStatus(null);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [step, isSubmitting, nextStep, prevStep, handleSubmit]);

    // Form validation
    const isStepValid = useCallback(() => {
        switch (step) {
            case 0: return formData.name.trim().length > 0;
            case 1: return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
            case 2: return formData.message.trim().length > 0;
            default: return false;
        }
    }, [step, formData]);

    const slideVariants = {
        enter: { opacity: 0, x: 50 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };


    return (
        <section id="contact" className='my-36'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                ref={containerRef}
                tabIndex={0}
                className="max-w-2xl mx-auto p-6 bg-white/10 rounded-lg shadow-2xl focus:outline-none focus:ring-3 focus:ring-purple-400"
            >
                {/* Success/Error Messages */}
                <AnimatePresence>
                    {submitStatus && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={`mb-6 p-4 rounded-lg ${submitStatus === 'success'
                                    ? 'bg-green-100 border border-green-400 text-green-700'
                                    : 'bg-red-100 border border-red-400 text-red-700'
                                }`}
                        >
                            {submitStatus === 'success' ? (
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Progress tabs */}
                <div className="flex mb-6">
                    {stepData.map((_, i) => (
                        <motion.div
                            key={i}
                            className={`flex-1 py-3 cursor-pointer text-center border-b-4 transition-all duration-300 ${step === i
                                    ? 'border-white text-white font-bold'
                                    : 'border-transparent text-gray-300 hover:text-white'
                                }`}
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === i ? 'bg-white text-purple-900' : 'bg-gray-600'
                                    }`}>
                                    {i + 1}
                                </span>
                                <span className="hidden sm:inline">
                                    {stepData[i].label.replace('Your ', '')}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Form container */}
                <div className="bg-white/20 p-6 rounded-md shadow-inner overflow-hidden">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Hidden fields for form service */}
                        <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_ACCESS_KEY} />
                        <input type="hidden" name="subject" value="New Contact Form Submission" />
                        <input type="hidden" name="from_name" value={formData.name} />
                        <input type="hidden" name="replyto" value={formData.email} />

                        <div className="relative h-40">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={step}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3 }}
                                    className="absolute w-full"
                                >
                                    <label className="block text-sm font-medium text-white mb-2">
                                        {stepData[step].label}
                                    </label>

                                    {stepData[step].type === 'textarea' ? (
                                        <textarea
                                            ref={el => inputRefs.current[step] = el}
                                            name={stepData[step].field}
                                            value={formData[stepData[step].field]}
                                            onChange={(e) => handleInputChange(stepData[step].field, e.target.value)}
                                            placeholder={stepData[step].placeholder}
                                            className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 ${stepData[step].focusColor} focus:border-transparent text-black resize-none transition-all duration-200`}
                                            rows="4"
                                            required
                                        />
                                    ) : (
                                        <input
                                            ref={el => inputRefs.current[step] = el}
                                            type={stepData[step].type}
                                            name={stepData[step].field}
                                            value={formData[stepData[step].field]}
                                            onChange={(e) => handleInputChange(stepData[step].field, e.target.value)}
                                            placeholder={stepData[step].placeholder}
                                            className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 ${stepData[step].focusColor} focus:border-transparent text-black transition-all duration-200`}
                                            required
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex justify-between items-center mt-6">
                            <motion.button
                                type="button"
                                onClick={prevStep}
                                disabled={step === 0}
                                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${step === 0
                                        ? 'invisible'
                                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:opacity-50'
                                    }`}
                                whileHover={step > 0 ? { scale: 1.05 } : {}}
                                whileTap={step > 0 ? { scale: 0.95 } : {}}
                            >
                                Previous
                            </motion.button>

                            {/* Progress indicators */}
                            <div className="flex space-x-2">
                                {stepData.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === step
                                                ? 'bg-purple-500 scale-125'
                                                : i < step
                                                    ? 'bg-green-500'
                                                    : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            {step < 2 ? (
                                <motion.button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!isStepValid()}
                                    className={`px-6 py-2 rounded-lg font-medium shadow-lg transition-all duration-200 ${isStepValid()
                                            ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                    whileHover={isStepValid() ? { scale: 1.05 } : {}}
                                    whileTap={isStepValid() ? { scale: 0.95 } : {}}
                                >
                                    Next
                                </motion.button>
                            ) : (
                                <motion.button
                                    type="submit"
                                    disabled={!isStepValid() || isSubmitting}
                                    className={`px-6 py-2 rounded-lg font-medium shadow-lg transition-all duration-200 ${isStepValid() && !isSubmitting
                                            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                    whileHover={isStepValid() && !isSubmitting ? { scale: 1.05 } : {}}
                                    whileTap={isStepValid() && !isSubmitting ? { scale: 0.95 } : {}}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
                            )}
                        </div>
                    </form>
                </div>

                {/* Keyboard shortcuts */}
                <div className="mt-4 text-xs text-gray-300 text-center">
                    <p>💡 Keyboard shortcuts: Enter (next) • Backspace (previous) • Arrow keys (navigate) • Escape (reset)</p>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
