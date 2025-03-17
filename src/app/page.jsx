"use client";
import React, { Suspense } from "react";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Certificate from "./components/Certificates";
import Contact from "./components/Contact";
import dynamic from "next/dynamic";
import UpperScroller from "./components/UpperScroller";

const Project = dynamic(() => import("./components/Project"), { ssr: true });


function Homepage() {
  return (
    <>
      <ReactLenis root>
        <div className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Suspense fallback={<div>Loading</div>}>
            <Project />
          </Suspense>
          <Certificate />
          <Contact />
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}

export default Homepage;
