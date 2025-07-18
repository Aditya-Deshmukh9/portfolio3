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

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={constantVariable}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          >
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded overflow-hidden  flex flex-col shadow-white shadow-sm"
              >
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
      </div>

  );
}

export default Project;
