"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="home" className="relative w-full bg-[var(--primary)] h-svh flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)]/20 to-[var(--primary)]"></div>

      {/* Glowing Pulse Ring */}
      <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-3xl animate-pulse z-0" />


      {/* Hero Content */}
      <div className="relative z-5 text-center text-white max-w-4xl space-y-6 px-4">
      </div>

      {/* Gradient Overlays */}
      <div className="absolute bg-gradient-to-b from-transparent to-[var(--primary)] h-36 bottom-0 w-full z-5" />
      <div className="absolute bg-gradient-to-b from-[var(--primary)] to-transparent h-36 top-0 w-full z-5" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-18 left-1/2 transform -translate-x-1/2 cursor-pointer z-0"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-6 h-6 text-[var(--tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}
