"use client";
import React from "react";
import { skillCategories, SKILLS } from "../constants";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

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

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};


function Skill() {
  return (
    <div className="container  px-6 mx-auto" id="skills">
     <SectionHeader title={"Skills"}/>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-6 bg-neutral-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-neutral-900/50 transition-colors"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.gradient}`} />
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <SkillPill key={sIdx} {...skill} color={category.gradient} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
}

const SkillPill = ({ icon: Icon, name, color, delay }) => (


  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 overflow-hidden transition-all"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity`} />
    <Icon size={18} className={`text-neutral-400 group-hover:text-white transition-colors z-10`} />
    <span className="text-neutral-300 group-hover:text-white font-medium text-sm z-10">{name}</span>
  </motion.div>
);


export default Skill;
