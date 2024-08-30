import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function LoaderSimple({ onFinish }) {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish(); // Notify parent when loading is finished
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  useEffect(() => {
    if (loading) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [loading, controls]);

  if (!loading) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <span className="loader"></span>;
    </div>
  );
}

export default LoaderSimple;
