"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Certificate from "./components/Certificates";
import Contact from "./components/Contact";
import LoaderSimple from "./components/LoaderSimple";
import dynamic from "next/dynamic";
const Project = dynamic(() => import("./components/Project"));

function page() {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoaderSimple onFinish={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="antialiased overflow-x-hidden bg-black text-gray-200 tracking-tighter">
          <Navbar />
          <HeroSection onLoad={onLoad} />
          <About />
          <Skills />
          <Project />
          <Certificate />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default page;
