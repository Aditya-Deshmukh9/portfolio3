"use client";
import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants/index.jsx";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image.js";

function Navbar() {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setisMobileMenuOpen(false);
    }
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Deskstop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-md lg:flex">
          <div className="flex items-center justify-center gap-6">
            <div className="">
              <Link href="/">
                <Image
                  src="/ani-logo.gif"
                  alt="logo"
                  width={90}
                  height={100}
                  priority={true}
                  style={{ width: "120px", height: "auto" }}
                />
              </Link>
            </div>
            <div className="">
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <Link
                    key={index}
                    className="text-sm hover:text-indigo-400"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-xl backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div className="">
              <Link href="#">
                <Image
                  src="/ani-logo.gif"
                  alt="logo"
                  width={90}
                  height={100}
                  priority="true"
                  style={{ width: "120px", height: "auto" }}
                  className="m-2"
                />
              </Link>
            </div>
            <div className="flex items-end">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMenuOpen}
                aria-label="Open Menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="block w-full text-xl font-semibold hover:text-yellow-400"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
