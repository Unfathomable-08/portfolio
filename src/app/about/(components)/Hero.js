"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBolt } from "react-icons/fa6";

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative min-h-svh w-full bg-[var(--primary)] flex items-center justify-center px-4! sm:px-8! md:px-16! pt-20! pb-10! overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto! grid grid-cols-1 lg:grid-cols-12 gap-8! lg:gap-10! items-center">

        {/* LEFT COLUMN: Narrative & Identity */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-2.5! leading-tight"
          >
            Driven by Curiosity.
            <br />
            <span className="text-[var(--secondary)]">Forged in Production.</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-16 bg-[var(--secondary)] mb-4!"
          />

          {/* Story hook */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-[15px] text-[var(--tertiary)] leading-relaxed max-w-xl mb-5!"
          >
            I'm <span className="text-white font-medium">Muhammad</span>. In July 2024, I started from zero with one conviction: to learn relentlessly and build solutions that actually run in the real world. Today, I architect full-stack platforms, autonomous AI agents, machine learning pipelines, and mobile apps, with <span className="text-white font-medium">35+ real delivered projects</span>.
          </motion.p>

          {/* Identity tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-1.5! mb-6!"
          >
            <span className="inline-flex items-center gap-1.5! rounded-md bg-white/5 border border-white/10 px-2.5! py-1! text-[11px] text-gray-300">
              <i className="fas fa-building text-[var(--secondary)] text-[10px]" />
              <span>Full-Time at Techno Rivals</span>
            </span>
            <span className="inline-flex items-center gap-1.5! rounded-md bg-white/5 border border-white/10 px-2.5! py-1! text-[11px] text-gray-300">
              <i className="fas fa-bolt text-[var(--secondary)] text-[10px]" />
              <span>35+ Shipped Projects</span>
            </span>
            <span className="inline-flex items-center gap-1.5! rounded-md bg-white/5 border border-white/10 px-2.5! py-1! text-[11px] text-gray-300">
              <i className="fas fa-robot text-[var(--secondary)] text-[10px]" />
              <span>Always here for Freelancing</span>
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3!"
          >
            <a
              id="about-hero-journey-btn"
              href="#journey"
              className="inline-flex items-center gap-2! bg-[var(--secondary)] text-[#071014] px-5! py-2.5! rounded-md font-semibold text-xs sm:text-sm hover:bg-[var(--hover)] hover:shadow-[0_0_20px_rgba(0,194,255,0.35)] transition-all duration-300"
            >
              <span>Explore My Journey</span>
              <i className="fas fa-arrow-down text-[10px]" />
            </a>
            <a
              id="about-hero-contact-btn"
              href="#contact"
              className="inline-flex items-center gap-2! border border-white/20 bg-white/5 text-white px-5! py-2.5! rounded-md font-medium text-xs sm:text-sm hover:border-[var(--secondary)] hover:text-[var(--secondary)] hover:bg-white/10 transition-all duration-300"
            >
              <span>Let's Talk</span>
              <i className="fas fa-arrow-right text-[10px]" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Minimal Developer Dossier Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-xl border border-[var(--secondary)]/30 bg-[#0a0f13] p-4! sm:p-5! shadow-[0_0_30px_rgba(0,194,255,0.06)] backdrop-blur-md">

            {/* Top accent bar with terminal dots */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3! mb-4!">
              <div className="flex items-center gap-1.5!">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[11px] text-gray-400">developer_muhammad.json</span>
            </div>

            {/* Header snippet with Avatar */}
            <div className="flex items-center gap-3.5! mb-4!">
              <div className="relative h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br from-[var(--secondary)]/20 to-transparent border border-[var(--secondary)]/40 p-1! flex items-center justify-center overflow-hidden">
                <Image
                  src="/boy.png"
                  alt="Dev Muhammad"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">Muhammad</h3>
                <p className="text-[11px] text-[var(--secondary)] font-mono">Fullstack Web &amp; Applied AI</p>
                <p className="text-[10px] text-gray-400">Karachi, Pakistan (UTC+5)</p>
              </div>
            </div>

            {/* Structured specs list */}
            <div className="space-y-2! font-mono text-[11px] border-t border-white/5 pt-3! mb-4!">
              {[
                { label: "Current Role", value: "Techno Rivals" },
                { label: "Genesis", value: "July 2024 (2+ Yrs)" },
                { label: "Delivered", value: "35+ Real Projects" },
                { label: "Domains", value: "8+ Core Disciplines" },
                { label: "Core Stack", value: "Next.js, Python, Agents, Mobile" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center text-gray-300">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Bottom highlight pill */}
            <div className="rounded-md bg-[var(--secondary)]/10 border border-[var(--secondary)]/25 p-2! text-center">
              <p className="text-[11px] font-medium text-[var(--secondary)] flex items-center justify-center gap-1.5!">
                <FaBolt className="text-[10px] shrink-0" />
                <span>35+ Production Solutions Delivered</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
