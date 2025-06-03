"use client"

import { useState } from "react";
import { useScreenSize } from "../app/ScreenContext";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const { screenSize } = useScreenSize();
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = screenSize === "xs" || screenSize === "sm";

  return (
    <div className="fixed w-full z-10">
      <div className="backdrop-blur bg-[var(--primary)]/60 border-b border-[var(--tertiary)] w-full rounded-2xl h-16 flex items-center justify-between px-20 z-30">
        <h1 className="font-bold text-xl">Portfolio.</h1>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="flex gap-x-6">
            {navItems.map((item) => (
              <li key={item} className="navbar-item cursor-pointer">
                <a href={`#${item.toLowerCase()}`} className="hover:text-[var(--tertiary)] transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-xl z-50"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[var(--primary)]/90 backdrop-blur border border-[var(--tertiary)] rounded-2xl shadow-xl p-4 z-40"
          >
            <ul className="flex flex-col gap-4 text-lg font-medium">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileTap={{ scale: 0.97 }}
                  className="hover:text-[var(--tertiary)] transition duration-300"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)} // Close on click
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
