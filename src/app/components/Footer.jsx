"use client";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export const constantVariable = {
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
export const itemVariants = {
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
    <div className="mt-20 flex flex-col mx-auto container justify-between p-5 px-5 lg:flex-row lg:px-32">
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
      <div className="group relative mt-5 flex cursor-pointer flex-row items-center lg:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-indigo-500"
        >
          Aditya Deshmukh.
        </motion.h1>
        <span
          onClick={scrollToTop}
          className="absolute -top-full left-1/2 mt-2 flex -translate-x-1/2 transform items-center justify-center rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <FaArrowUp className="mr-1" />
          Go Top
        </span>
      </div>
    </div>
  );
}

export default Footer;
