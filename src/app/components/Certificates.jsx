"use client";
import React from "react";
import { CERTIFICATES } from "../constants/index.jsx";
import { motion } from "framer-motion";
import Image from "next/image.js";

const constantVariable = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

function Certificate() {
  return (
    <div id="certificates">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>
      <div className="mx-auto flex items-center justify-center py-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={constantVariable}
          className="w-full sm:w-1/2 shadow-xl flex flex-col items-center  justify-center"
        >
          <Image
            src={CERTIFICATES.image}
            alt={CERTIFICATES.title}
            height={500}
            width={500}
            className="rounded-md"
            loading="lazy"
          />
          <h2 className="text-center p-4">{CERTIFICATES.title}</h2>
        </motion.div>
      </div>
    </div>
  );
}

export default Certificate;
