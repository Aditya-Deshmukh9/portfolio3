"use client";
import React, { Suspense } from "react";
import Skills from "./components/Skills";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import dynamic from "next/dynamic";
import { BiLoader } from "react-icons/bi";

const Project = dynamic(() => import("./components/Project"));
const ContactSection = dynamic(() => import("./components/ContactSection"));
const Certificate = dynamic(() => import("./components/Certificates"));

function Homepage() {
  return (
    <div className="relative">
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-green-500/40 filter blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-pink-400/30 filter blur-3xl" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-purple-500/40 filter blur-3xl" />

        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
      </div>
      <HeroSection />
      <About />
      <Skills />

      <Suspense fallback={<div className="flex items-center justify-center"><BiLoader className="animate-spin" /></div>}>
        <Project />
      </Suspense>

      <Suspense fallback={<div className="flex items-center justify-center"><BiLoader className="animate-spin" /></div>}>
      <Certificate />
      </Suspense>

      <Suspense fallback={<div className="flex items-center justify-center"><BiLoader className="animate-spin" /></div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}

export default Homepage;
