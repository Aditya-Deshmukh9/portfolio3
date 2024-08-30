"use client";
import { CERTIFICATES } from "../constants/index.jsx";
import { motion } from "framer-motion";
import Image from "./Image.jsx";

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
            path={CERTIFICATES.image}
            alt={CERTIFICATES.title}
            height={952}
            width={1280}
            className="rounded-md object-cover"
          />
          <h2 className="text-center p-4">{CERTIFICATES.title}</h2>
        </motion.div>
      </div>
    </div>
  );
}

export default Certificate;
