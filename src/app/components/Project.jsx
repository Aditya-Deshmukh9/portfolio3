
import React from "react";
import Card from "./Card";
import { projectData } from "../constants";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotateX: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
};

const backgroundVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" }
  },
};

function Project() {
  return (
    <section id="projects" className="relative pb-4 lg:pb-4 overflow-hidden">
      {/* Background gradient */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={backgroundVariants}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10"
      />



      <div className="relative z-10">
        {/* Enhanced title section */}
        <SectionHeader title={"Projects"} />


        {/* Enhanced grid container */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 lg:gap-12 xl:gap-8"
          >
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card container */}
                <div className="relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden h-full">
                  <Card
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                    category={project.category}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Project;