"use client";
import React, { Suspense } from "react";
import Skills from "./components/Skills";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Certificate from "./components/Certificates";
import Contact from "./components/Contact";
import dynamic from "next/dynamic";

const Project = dynamic(() => import("./components/Project"), { ssr: false });

function Homepage() {
  return (
    <>

      <HeroSection />
      <About />
      <Skills />
      <Suspense fallback={<div>Loading</div>}>
        <Project />
      </Suspense>
      <Certificate />
      <Contact />

    </>
  );
}

export default Homepage;
