"use client";
import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const constantVariable = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Skill() {
  return (
    <div className="container mx-auto" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title "
      >
        Skills
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={constantVariable}
        className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="mb-8 flex items-center justify-between"
          >
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6 text-xl lg:text-3xl">{skill.name}</h3>
            </div>
            <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skill;
