"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getPath = (item) => {
    return item === "Home" ? "/" : `/#${item.toLowerCase()}`;
  };

  return (
    <div className="fixed w-full z-30 top-0 left-0 right-0">
      <div className="backdrop-blur bg-[var(--primary)]/60 border-b border-[var(--tertiary)] w-full rounded-2xl h-16 flex items-center justify-between px-5! md:px-20! z-30">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Dev Muhammad Logo"
            width={60}
            height={60}
            className="w-12 h-12 md:w-15 md:h-15 object-contain"
            priority
          />
          <span className="sr-only">Dev Muhammad (Unfathomable-08 | unfathomable_08)</span>
        </Link>

        {/* Desktop Menu - pure CSS responsive to avoid hydration blink */}
        <ul className="hidden md:flex items-center gap-x-8">
          {navItems.map((item) => (
            <li key={item} className="navbar-item cursor-pointer">
              <Link
                href={getPath(item)}
                className="text-gray-200 text-sm font-medium hover:text-[var(--secondary)]! transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon - pure CSS responsive */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex md:hidden text-xl z-50 text-white hover:text-[var(--secondary)]! transition-colors duration-200 p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-[var(--primary)]/95 backdrop-blur-md border border-[var(--tertiary)]/50 rounded-2xl shadow-2xl p-5! z-40"
          >
            <ul className="flex flex-col gap-4 text-base font-medium">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={getPath(item)}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-200 hover:text-[var(--secondary)]! transition duration-300 py-1"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
