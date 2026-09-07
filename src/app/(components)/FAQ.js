"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who is Dev Muhammad?",
    answer:
      "Muhammad (known online as Dev Muhammad and Unfathomable-08) is a Full-Stack Web & Applied AI Developer based in Karachi, Pakistan. With over 2 years of professional experience and 35+ delivered projects, he builds high-performance Next.js web applications, scalable backend architectures, and intelligent AI automation agents for businesses worldwide.",
    srOnly: "dev Muhammad, developer muhammad, Unfathomable-08, unfathomable_08",
  },
  {
    question: "What technical stack does developer Muhammad specialize in?",
    answer:
      "He specializes in full-stack web and AI engineering: React, Next.js, Node.js, Express, Python (Flask, FastAPI), MongoDB, SQL, and Tailwind CSS, paired with modern AI frameworks including PyTorch, LangChain, FAISS, and vector database integrations.",
    srOnly: "full stack developer in pakistan, next.js developer karachi",
  },
  {
    question: "Can I hire developer Muhammad for freelance or remote contract roles?",
    answer:
      "Yes, Dev Muhammad is actively available for freelance contracts, custom web application development, AI agent integration, and full-time remote engineering positions worldwide.",
    srOnly: "hire developer in pakistan, freelance web developer karachi",
  },
  {
    question: "Where is developer Muhammad located?",
    answer:
      "Dev Muhammad is based in Karachi, Sindh, Pakistan, and collaborates seamlessly with remote teams, startups, and enterprise clients across Pakistan, the United States, the UK, the UAE, and internationally.",
    srOnly: "developer in karachi, developer in pakistan",
  },
  {
    question: "What notable full-stack and AI projects has Muhammad delivered?",
    answer:
      "Key projects include Sable Build (visual website builder with multi-stack code export), Fluentyx (AI-powered language learning platform), Vendra (multi-branch retail POS system), Sparkio (e-commerce store with fuzzy search), and Rag Agent (LangChain RAG assistant).",
    srOnly: "Unfathomable-08 projects, dev muhammad portfolio projects",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-[var(--primary)] px-5! md:px-20! py-16! relative"
    >
      <motion.div
        className="text-center mb-10!"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p
          className="font-semibold text-xs tracking-[2px] uppercase text-[var(--secondary)] mb-2!"
        >
          Questions
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto! space-y-3!">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl relative z-1 border bg-[var(--primary)] transition-colors duration-200"
              style={{
                borderColor: isOpen
                  ? "rgba(0, 194, 255, 0.55)"
                  : "rgba(0, 194, 255, 0.25)",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4! py-3.5! sm:px-5! sm:py-4! flex items-center justify-between gap-3 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-white font-medium text-xs sm:text-sm">
                  {faq.question}
                  {faq.srOnly && <span className="sr-only"> ({faq.srOnly})</span>}
                </span>
                <span
                  className={`text-[var(--secondary)] text-xs transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <i className="fa-solid fa-chevron-down" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4! sm:px-5! pb-4! text-[var(--tertiary)] text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-2.5!">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
