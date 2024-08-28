"use client";
import React from "react";
import Card from "./Card";
import { projectData } from "../constants";
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

function Project() {
  return (
    <div id="projects">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={constantVariable}
        className="mt-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={constantVariable}
        className="flex flex-wrap justify-center py-8"
      >
        {projectData.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              category={project.category}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Project;
