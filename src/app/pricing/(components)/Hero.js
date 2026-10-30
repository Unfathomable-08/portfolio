"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

export default function PricingHero() {
  const handleScrollDown = () => {
    const el = document.getElementById("pricing-explorer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-svh w-full bg-[var(--primary)] flex flex-col items-center justify-center overflow-hidden px-5!">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dots opacity-70 pointer-events-none" />

      {/* Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(0, 194, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto! text-center flex flex-col items-center"
      >
        <p className="font-semibold text-xs tracking-[2px] uppercase text-[var(--secondary)]! mb-3!">
          Pricing Explorer
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6!">
          Transparent Pricing.
          <br />
          <span className="text-[var(--secondary)]!">Built Around Your Project.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto! leading-relaxed mb-8!">
          Select your project type, pick your features, and get an instant estimate. No hidden fees, no forms, no guessing.
        </p>
      </motion.div>

      {/* Subtle Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        onClick={handleScrollDown}
        className="absolute bottom-6! left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 group"
      >
        <span className="text-[10px] tracking-widest uppercase text-zinc-500 font-medium group-hover:text-[var(--secondary)]! transition-colors duration-200">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-[var(--secondary)]! text-sm"
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
}

