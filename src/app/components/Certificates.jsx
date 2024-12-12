"use client";
import { CERTIFICATES } from "../constants/index.jsx";
import { motion } from "framer-motion";
import Image from "./Image.jsx";
import Carousel from "./Carousel.jsx";

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={constantVariable}
        className="h-full w-full"
      >
        <Carousel />
      </motion.div>
    </div>
  );
}

export default Certificate;
