"use client";
import React from "react";
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
      <div className="overflow-x-hidden scroll-smooth bg-black tracking-tighter text-gray-200 antialiased">
        <UpperScroller />
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Project />
        <Certificate />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
