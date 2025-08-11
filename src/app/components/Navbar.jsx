"use client";
import React, { useEffect, useState } from "react";
import { NAVIGATION_LINKS } from "../constants/index.jsx";
import { FaTimes, FaBars } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0)
  const [show, setShow] = useState(true)

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setShow(currentY < lastScrollY || currentY < 10)
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = window.innerWidth >= 1024 ? 80 : 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, '', href);
    }
  };

  return (
    <motion.header
      initial={{ y: -20 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
      className={`fixed left-0 right-0 z-50 sm:top-4 will-change-transform`}
    >
      {/* Desktop Menu */}
      <nav className="mx-auto hidden max-w-md items-center justify-center rounded-3xl bg-white/15 py-3 backdrop-blur-md lg:flex">
        <div className="flex items-center gap-6">
          <Link href="/" className='font-Oswald font-bold text-3xl'>
            AD 
          </Link>
          <ul className="flex items-center gap-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-sm hover:text-[#7ebf77] ${activeLink === item.href
                  ? "rounded-md bg-white px-2 text-gray-900"
                  : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`transition-all duration-75 lg:hidden ${isMobileMenuOpen ? "bg-black" : "backdrop-blur-md"
          }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className='font-Oswald font-bold text-3xl'>
            AD
          </Link>
          <button
            className="focus:outline-none"
            onClick={toggleMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="m-2 h-6 w-5" />
            ) : (
              <FaBars className="m-2 h-6 w-5" />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <section className="grid h-screen place-content-start gap-2 bg-black px-8 py-24 text-white">
            {NAVIGATION_LINKS.map((item, index) => (
              <FlipLink
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </FlipLink>
            ))}
          </section>
        )}
      </nav>
    </motion.header>
  );
}

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href, onClick }) => (
  <motion.a
    initial="initial"
    whileHover="hovered"
    href={href}
    onClick={onClick}
    className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
    style={{ lineHeight: 0.75 }}
  >
    <div>
      {children.split("").map((l, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
          className="inline-block"
        >
          {l}
        </motion.span>
      ))}
    </div>
    <div className="absolute inset-0">
      {children.split("").map((l, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
          className="inline-block"
        >
          {l}
        </motion.span>
      ))}
    </div>
  </motion.a>
);

export default Navbar;
