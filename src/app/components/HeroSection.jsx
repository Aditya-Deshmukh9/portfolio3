"use client";
import { PROFILE, SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";
import profilepic from "@/public/profilepic.webp";
import useDisableInspect from "../hooks/useDisableInspect";
import { constantVariable, itemVariants } from "./Footer";

function HeroSection() {
  if (process.env.NEXT_PUBLIC_ACCESS_PERMISSION === "production") {
    useDisableInspect();
  }

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
        className="z-20 mx-4 max-w-3xl pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
          {PROFILE.name}
        </h2>
        <p className="pt-2 text-[14px] font-semibold tracking-normal">
          {PROFILE.info}
        </p>
      </motion.div>
    </div>
  );
}

export default HeroSection;
