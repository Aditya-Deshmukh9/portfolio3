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
        className="p-4 text-6xl uppercase lg:text-[8rem]"
      >
        {ABOUT.text1}
      </motion.h3>
      <motion.h3
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mr-24 pl-4 text-lg capitalize leading-loose tracking-normal"
      >
        {ABOUT.text2}
      </motion.h3>
      <div className="p-5 flex items-center justify-center">
        <Link
          href="https://drive.google.com/file/d/1e7NPwjcQLUJVumEgxkUCiUNcIg7PlyuB/view?usp=sharing"
          target="_blank"
          className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center
        bg-transparent text-indigo-500 h-auto w-[170px] overflow-hidden transition-all duration-100"
        >
          <span className="group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-indigo-500 transition-all duration-500"></span>

          <p
            className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
          duration-200"
          >
            Resume
          </p>

          <span
            className="group-hover:translate-x-0  group-hover:opacity-100 absolute bg-indigo-400
           translate-x-full opacity-0 text-white w-full p-5 transition-all duration-200"
          >
            Thank you!
          </span>

          <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-indigo-500 transition-all duration-500"></span>
        </Link>
      </div>
    </div>
  );
}

export default About;
