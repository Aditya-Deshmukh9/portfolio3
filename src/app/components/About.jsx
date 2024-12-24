"use client";
import React from "react";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";
import Link from "next/link";

function About() {
  return (
    <div className="container mx-auto" id="about">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="p-1 text-6xl uppercase lg:p-4 lg:text-[8rem]"
      >
        <HighlightText text={ABOUT.text1} />
      </motion.h3>
      <motion.h3
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mr-24 pl-2 text-lg capitalize leading-loose tracking-normal lg:pl-4"
      >
        <HighlightText text={ABOUT.text2} />
      </motion.h3>
      <div className="flex items-center justify-center p-5">
        <Link
          href={process.env.NEXT_PUBLIC_RESUME_LINK}
          target="_blank"
          className="group relative flex h-auto w-[170px] cursor-pointer items-center justify-center overflow-hidden border-0 bg-transparent p-5 text-xl font-normal text-indigo-500 transition-all duration-100"
        >
          <span className="absolute left-0 h-full w-5 border-y border-l border-indigo-500 transition-all duration-500 group-hover:w-full"></span>

          <p className="absolute translate-x-0 transition-all duration-200 group-hover:translate-x-[-100%] group-hover:opacity-0">
            Resume
          </p>

          <span className="absolute w-full translate-x-full bg-indigo-400 p-5 text-center text-white opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            Thank you!
          </span>

          <span className="absolute right-0 h-full w-5 border-y border-r border-indigo-500 transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
}

const HighlightText = ({ text }) => {
  return (
    <span className="relative">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="relative inline-block transition-colors duration-300 hover:text-yellow-300"
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
};

export default About;
