"use client";
import Image from "next/image";
import DotsBg from "@/components/ui/Dots-bg.js";
import { motion } from "framer-motion";

export default function About() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      id="about"
      className="min-h-svh bg-[var(--primary)] grid md:grid-cols-[1fr_1fr] items-center px-5! md:px-20! relative"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="inline-flex items-center gap-2 px-3! py-1! mb-4! rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 text-xs font-medium">
          <span>Available for Freelance & Contracts ({currentYear})</span>
        </div>

        <h3 className="font-semibold text-2xl md:text-3xl pb-3! text-white">
          Hi, I'm Muhammad,
          <span className="sr-only"> (Unfathomable-08 / unfathomable_08)</span>
        </h3>

        <p className="text-md max-lg:text-sm text-[var(--tertiary)] mb-4!">
          Muhammad is a Full-Stack Web & Applied AI Developer based in Karachi, Pakistan, with over 2 years of professional experience and 35+ delivered projects. Specializing in React, Next.js, Node.js, Python, and autonomous AI agents, he engineers scalable, high-performance web applications and intelligent systems for clients worldwide.
        </p>

        <p className="text-md max-lg:text-sm text-[var(--tertiary)]">
          From building responsive web platforms and cross-platform mobile apps to training machine learning models and implementing RAG pipelines with LangChain, his focus is on shipping robust, production-grade software that drives measurable results.
        </p>
        <motion.a
          href="https://wa.me/923282279743"
          target="_blank"
          className="bg-[var(--secondary)] inline-block hover:bg-[var(--hover)] rounded py-1.5! px-5! mt-5!"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Connect Now
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex justify-center items-center relative z-1 transform -translate-y-10 max-md:scale-70 max-lg:scale-90"
      >
        <Image src="/boy.png" alt="Hacker Illustration" width={400} height={400} />
      </motion.div>

      <DotsBg />
    </motion.div>
  );
}
