"use client";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { ArrowBigUpDash } from "lucide-react";
import { motion } from "framer-motion";

const constantVariable = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:px-32 mt-20 px-5  p-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={constantVariable}
        className="flex gap-10"
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            variants={itemVariants}
            key={index}
            target="_blank"
            href={link.href}
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
      <div className="group flex flex-row items-center cursor-pointer mt-5 lg:mt-0 relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-indigo-500 font-semibold"
        >
          Aditya Deshmukh.
        </motion.h1>
        <span
          onClick={scrollToTop}
          className="group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 px-2 py-1 text-sm
         text-gray-100 rounded-md flex items-center justify-center absolute -top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0"
        >
          <ArrowBigUpDash className="mr-1" />
          Go Top
        </span>
      </div>
    </div>
  );
}

export default Footer;
