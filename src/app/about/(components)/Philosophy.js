"use client";

import { motion } from "framer-motion";

export default function AboutPhilosophy() {
  return (
    <section id="philosophy" className="relative w-full bg-[#080d11] py-10! px-4! sm:px-8! md:px-16! border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[550px] max-w-full rounded-full bg-[var(--secondary)]/10 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto!">
        {/* Header */}
        <div className="text-center mb-10!">
          <div className="inline-flex items-center gap-1.5! rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 px-3! py-0.5! text-[11px] font-medium uppercase tracking-[2px] text-[var(--secondary)] mb-2.5!">
            <i className="fas fa-bullseye text-[10px]" />
            <span>The End Goal &amp; Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Not Corporate Buzzwords.
            <br />
            <span className="text-[var(--secondary)]">An Uncompromising Standard.</span>
          </h2>
        </div>

        {/* Big manifesto quote card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[var(--secondary)]/30 bg-gradient-to-br from-[#0e161c] via-[#090e12] to-[#06090c] p-5! sm:p-7! md:p-8! shadow-[0_0_40px_rgba(0,194,255,0.08)] mb-8!"
        >
          {/* Top highlight glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent" />

          {/* Quote Mark */}
          <div className="text-3xl sm:text-4xl text-[var(--secondary)]/30 font-serif leading-none select-none mb-2!">
            “
          </div>

          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-100 leading-relaxed mb-5!">
            "I don't just learn for the sake of knowing theory. I learn relentlessly to build scalable, production-grade solutions. My goal is to reach a level of technical depth and versatility so extreme that no one can compete, and AI can never ever replace me."
          </p>

          <div className="flex items-center gap-3! pt-4! border-t border-white/10">
            <div className="h-8 w-8 rounded-full bg-[var(--secondary)] flex items-center justify-center font-bold text-[#071014] text-xs shadow-[0_0_12px_rgba(0,194,255,0.4)]">
              M
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">Muhammad</p>
              <p className="text-[11px] text-[var(--secondary)]">Fullstack Web &amp; Applied AI Developer</p>
            </div>
          </div>
        </motion.div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4!">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4! sm:p-5! hover:border-[var(--secondary)]/40 transition-colors"
          >
            <div className="h-8 w-8 rounded-lg bg-[var(--secondary)]/10 text-[var(--secondary)] flex items-center justify-center mb-3! border border-[var(--secondary)]/20">
              <i className="fas fa-rocket text-xs" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5!">
              35+ Real-World Deployments
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
              No generic clone tutorials or toy demo code. Every project in my portfolio is delivered for real businesses, real users, and real operational constraints — built to withstand real production traffic.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4! sm:p-5! hover:border-[var(--secondary)]/40 transition-colors"
          >
            <div className="h-8 w-8 rounded-lg bg-[var(--secondary)]/10 text-[var(--secondary)] flex items-center justify-center mb-3! border border-[var(--secondary)]/20">
              <i className="fas fa-graduation-cap text-xs" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5!">
              Continuous, Aggressive Growth
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
              In under two years, I expanded from zero knowledge to web, apps, backend systems, machine learning, agentic swarms, and SEO. I master tools faster than trends shift, keeping my stack at the bleeding edge.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4! sm:p-5! hover:border-[var(--secondary)]/40 transition-colors"
          >
            <div className="h-8 w-8 rounded-lg bg-[var(--secondary)]/10 text-[var(--secondary)] flex items-center justify-center mb-3! border border-[var(--secondary)]/20">
              <i className="fas fa-shield-halved text-xs" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5!">
              Irreplaceable by AI
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
              AI replaces rote coders who follow instructions blindly. It cannot replace an Applied AI engineer who understands system architecture, orchestrates multi-agent intelligence, and executes with human taste, intuition, and grit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
