"use client";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className="">
      <div className="mx-auto container max-w-2xl py-10 px-3">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Contact Us
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          action={process.env.NEXT_PUBLIC_ACCESS_LINK}
          method="POST"
        >
          <div className="mb-4 mt-8">
            <input
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_ACCESS_KEY}
            />
            <label
              htmlFor="username"
              className="block text-gray-600 dark:text-white mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              autoComplete="on"
              aria-required="true"
              className="w-full p-2 border-grey border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 dark:text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              autoComplete="on"
              required
              placeholder="Email"
              aria-required="true"
              className="w-full p-3 border-grey border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-3 text-gray-600 dark:text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              autoComplete="off"
              required
              cols={30}
              rows={6}
              placeholder="Type Message here 🫡"
              aria-required="true"
              className="w-full p-3 border-2 border-grey rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 border mt-4 border-indigo-600 text-indigo-600 hover:bg-indigo-700 hover:text-white dark:text-white"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
