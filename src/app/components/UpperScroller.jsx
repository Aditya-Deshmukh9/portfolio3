"use client";

import { motion, useSpring, useScroll } from "motion/react";
import React from "react";

function UpperScroller() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        zIndex: 100,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        originX: 0,
        backgroundColor: "#52DA4F",
      }}
    />
  );
}

export default UpperScroller;
