"use client";
import {  SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import { constantVariable, itemVariants } from "./Footer";
import useDisableInspect from "../hooks/useDisableInspect";
import { MorphingText } from "./magicui";


function HeroSection() {
  useDisableInspect()
  return (
    <div
      className="relative flex container mx-auto min-h-[700px] max-h-[100vh] items-end justify-center"
      id="Hero"
    >
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
      ></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={constantVariable}
        className="absolute right-4 top-1/3 z-30 flex flex-col gap-6 md:right-24"
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            variants={itemVariants}
            whileHover={{
              scaleY: 1.2,
              transition: { duration: 1 },
            }}
            key={index}
            target="_blank"
            href={link.href}
            aria-label={link.ariaLabel}
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
      <motion.div
        className="z-20 mx-4 pb-20 max-w-3xl absolute sm:left-[5%] md:left-[15%] lg:left-[20%] top-[40%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-4xl font-Oswald font-semibold tracking-wide md:text-7xl">
          Hii ! 👋
        </h2>
        <h2 className="text-4xl font-Oswald font-semibold tracking-wide">
          I am <span>ADITYA DESHMUKH</span>
        </h2>

        <div className="flex text-4xl font-sans justify-start items-start gap-x-2">
          THE
          <MorphingText texts={[ "DEVELOPER", "FREELANCER"]} />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
