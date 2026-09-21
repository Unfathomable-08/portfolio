"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section id="portfolio-hero" className="relative h-svh w-full overflow-hidden">

      {/* Full-bleed background image */}
      <Image
        src="/portfolio.jpg"
        alt="Portfolio showcase"
        fill
        className="object-cover object-center scale-105"
        priority
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-transparent to-transparent" />

      {/* Thin accent line on left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--secondary)] to-transparent opacity-60" />

      {/* Two-column content layout */}
      <div className="relative z-10 h-full w-full flex items-center">

        {/* LEFT text + CTAs */}
        <div className="flex flex-col justify-center px-6! sm:px-12! md:px-20! lg:px-28! w-full lg:w-[55%]">

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[var(--secondary)] text-xs font-semibold tracking-[4px] uppercase mb-4!"
          >
            Selected Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6!"
          >
            Built to
            <br />
            <span className="text-[var(--secondary)]">Ship.</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="h-[1px] w-16 bg-[var(--secondary)] mb-6!"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-[var(--tertiary)] max-w-md leading-relaxed mb-10!"
          >
            Web apps, AI agents, mobile apps &amp; enterprise systems,
            every project production-ready, scalable, and intentional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-5!"
          >
            <a
              id="hero-explore-btn"
              href="#projects"
              className="text-sm font-semibold text-[#071014] bg-[var(--secondary)] px-6! py-2.5! rounded-sm hover:bg-[var(--hover)] transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              id="hero-contact-btn"
              href="#contact"
              className="text-sm font-medium text-[var(--secondary)] hover:text-white transition-colors duration-200 flex items-center gap-2!"
            >
              Let's talk
              <i className="fas fa-arrow-right text-xs" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — randomly scattered stat cards (desktop only) */}
        <div className="hidden lg:block absolute right-0 top-0 w-[45%] h-full pointer-events-none select-none">

          {/* 13+ */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="absolute top-[13%] left-[5%] px-6! py-5! rounded-sm"
          >
            <p className="text-5xl font-black text-[var(--secondary)] leading-none mb-1!">13+</p>
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">Projects shipped</p>
          </motion.div>

          {/* 4+ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-[42%] left-[50%] px-6! py-5! rounded-sm"
          >
            <p className="text-5xl font-black text-[var(--secondary)] leading-none mb-1!">4+</p>
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">Domains</p>
          </motion.div>

          {/* 100% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="absolute bottom-[17%] left-[10%] px-6! py-5! rounded-sm"
          >
            <p className="text-5xl font-black text-[var(--secondary)] leading-none mb-1!">100%</p>
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">Production ready</p>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#projects"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="absolute bottom-8! left-1/2 -translate-x-1/2 z-10 text-gray-500 hover:text-[var(--secondary)] transition-colors"
        aria-label="Scroll to projects"
      >
        <i className="fas fa-chevron-down text-sm" />
      </motion.a>
    </section>
  );
}
