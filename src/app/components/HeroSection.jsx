"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Terminal } from "lucide-react";

import { SOCIAL_MEDIA_LINKS } from "../constants";
import { constantVariable, itemVariants } from "./Footer";
import { MorphingText } from "./magicui";
import useDisableInspect from "../hooks/useDisableInspect";

// ----------------------------------------------------
// HERO SECTION
// ----------------------------------------------------
function HeroSection() {
  useDisableInspect();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const frameRef = useRef(0);

useEffect(() => {
  const handleMove = (e) => {
    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      x.set((e.clientX - window.innerWidth / 2) / 30);
      y.set((e.clientY - window.innerHeight / 2) / 30);

      frameRef.current = 0; // reset properly
    });
  };

  window.addEventListener("mousemove", handleMove);

  return () => {
    window.removeEventListener("mousemove", handleMove);
    cancelAnimationFrame(frameRef.current);
  };
}, [x, y]);

  const rotateX = useTransform(y, (val) => val * 2);
  const rotateY = useTransform(x, (val) => val * 2);

  // ---------------------- RENDER ----------------------
  return (
    <section
      id="Hero"
      className="
        relative w-full h-[800px] flex flex-col justify-center items-center 
        px-4 md:px-10 lg:px-20
      "
    >
      <SocialMediaIcon />

      <div
        className="
          flex flex-col-reverse 
          md:flex-row md:justify-between md:items-center 
          w-full max-w-7xl gap-10 md:gap-0
        "
      >
        {/* ---------- LEFT SIDE TEXT ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col text-left w-full md:w-1/2"
        >
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-Oswald font-semibold tracking-wide
            "
          >
            Hii ! 👋
          </h2>

          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl 
              font-Oswald font-semibold tracking-wide mt-2
            "
          >
            I am <span className="text-cyan-400">ADITYA DESHMUKH</span>
          </h2>

          <div
            className="
              flex text-3xl sm:text-4xl md:text-5xl 
              font-sans items-start gap-x-2 mt-4
            "
          >
            THE
            <MorphingText texts={["DEVELOPER", "FREELANCER"]} />
          </div>
        </motion.div>

        {/* ---------- RIGHT SIDE ANIMATION ---------- */}
      <div className="
    w-full md:w-1/2 
    flex justify-center md:justify-end items-center
    mt-10 md:mt-0 
    px-4 sm:px-0
">
  <motion.div
    style={{ rotateX, rotateY }}
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="
      relative 
      w-[260px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[550px]
      aspect-square preserve-3d
    "
  >
    <SVGCore />

    {/* Floating Code Card */}
    <motion.div
      className="
        absolute 
        top-[55%] sm:top-[60%] 
        -right-4 sm:-right-8 md:-right-6 lg:-right-10
        bg-black/70 backdrop-blur-xl 
        border border-white/10 
        p-3 sm:p-4 
        rounded-xl sm:rounded-2xl shadow-2xl 
        flex flex-col gap-2 
        origin-top-right
        scale-75 sm:scale-90 lg:scale-100
        z-20
      "
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Card Header */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
        <Terminal size={14} className="text-cyan-400" />
        <span className="text-[10px] font-mono text-neutral-400">terminal</span>
      </div>

      {/* Card Body */}
      <div className="font-mono text-[10px] sm:text-xs text-green-400">
        $ npm install success
      </div>
      <div className="font-mono text-[10px] sm:text-xs text-white/60">
        [====================] 100%
      </div>
    </motion.div>
  </motion.div>
</div>
      </div>
    </section>
  );
}

// ----------------------------------------------------
// SVG CORE AS SEPARATE CLEAN COMPONENT
// ----------------------------------------------------
function SVGCore() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full drop-shadow-[0_0_80px_rgba(34,211,238,0.15)]"
    >
      <defs>
        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>

        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer Orbit */}
      <motion.circle
        cx="200"
        cy="200"
        r="180"
        stroke="url(#coreGrad)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        strokeDasharray="2 10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Middle Ring */}
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="200"
          cy="200"
          r="140"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="340" cy="200" r="4" fill="#22d3ee" filter="url(#neonGlow)" />
        <circle cx="60" cy="200" r="4" fill="#a855f7" filter="url(#neonGlow)" />
      </motion.g>

      {/* Outer Hexagon */}
      <motion.path
        d="M200,60 L321,130 L321,270 L200,340 L79,270 L79,130 Z"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        strokeOpacity="0.5"
        animate={{ rotate: 360, scale: [0.9, 1, 0.9] }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity },
        }}
      />

      {/* Inner Core */}
      <motion.path
        d="M200,100 L286,150 L286,250 L200,300 L114,250 L114,150 Z"
        fill="rgba(34,211,238,0.05)"
        stroke="url(#coreGrad)"
        strokeWidth="2"
        filter="url(#neonGlow)"
        animate={{ rotate: -360 }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Pulse */}
      <motion.circle
        cx="200"
        cy="200"
        r="30"
        fill="url(#coreGrad)"
        filter="url(#neonGlow)"
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
}

// ----------------------------------------------------
// SOCIAL MEDIA
// ----------------------------------------------------
export function SocialMediaIcon() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={constantVariable}
      className="
        absolute right-4 top-1/3 z-30 flex flex-col gap-6 
        md:right-10 lg:right-24
      "
    >
      {SOCIAL_MEDIA_LINKS.map((link, i) => (
        <motion.a
          key={i}
          variants={itemVariants}
          whileHover={{ scaleY: 1.2, transition: { duration: 1 } }}
          target="_blank"
          href={link.href}
          aria-label={link.ariaLabel}
          rel="noopener noreferrer"
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default HeroSection;
