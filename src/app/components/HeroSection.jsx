"use client";
import { PROFILE } from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";
import profilepic from "@/public/profilepic.webp";
import useDisableInspect from "../hooks/useDisableInspect";

function HeroSection() {
  // useDisableInspect();

  return (
    <div
      className="relative flex min-h-screen items-end justify-center"
      id="Hero"
    >
      <Image
        src={profilepic}
        alt={PROFILE.name}
        width={4000}
        height={2700}
        placeholder="blur"
        priority
        className="absolute inset-0 z-10 h-full w-full object-cover"
      />
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="z-20 mx-4 max-w-3xl pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/*<span
          className={`mb-3 text-center text-5xl font-extrabold italic text-white/70 sm:mb-0 sm:text-left md:text-7xl xl:text-[5rem]`}
        >
          <span className="relative">
            <div className="absolute -right-3 bottom-[1.1rem] hidden h-[4.5rem] w-3.5 rotate-[14deg] bg-gradient-to-r from-transparent from-60% via-[#f7d486] to-[#f27a7d] md:inline"></div>
            <div className="absolute -right-[3px] bottom-4 hidden h-1 w-full bg-gradient-to-r from-transparent from-20% via-[#f7d486] to-[#f27a7d] md:inline"></div>
            frontend
          </span>
        </span> */}
        <h2 className="font-protest bg-gradient-to-r from-[#c5f9d7] via-[#7ebf77] to-[#3ACD45] bg-clip-text text-5xl font-semibold uppercase tracking-wide text-transparent md:text-7xl">
          {PROFILE.name}
        </h2>
        <p className="pt-2 text-[14px] font-semibold tracking-normal text-[#7ebf77]">
          {PROFILE.info}
        </p>
      </motion.div>
    </div>
  );
}

export default HeroSection;
