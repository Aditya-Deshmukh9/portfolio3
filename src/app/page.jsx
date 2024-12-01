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
const Project = dynamic(() => import("./components/Project"), { ssr: false });

function page() {
  return (
    <>
      <div className="antialiased overflow-x-hidden bg-black text-gray-200 tracking-tighter">
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

export default page;
