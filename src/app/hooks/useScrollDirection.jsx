"use client";
const { useState, useRef, useEffect } = require("react");

const useScrollDirection = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isScrollStoped, setIsScrollStoped] = useState(false);
  const lastScrollY = useRef(0); // Store scroll position in a ref to avoid re-renders
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      lastScrollY.current = currentScrollY;
      ticking = false;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Set a new scroll-stopped timer (300ms delay)
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrollStoped(true);
      }, 600);
    };

    const onScroll = () => {
      setIsScrollStoped(false);
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { isScrollingUp, isScrollStoped };
};

export default useScrollDirection;
