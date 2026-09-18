"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { homeFAQs } from "@/data/faqs";

export default function FAQ({
  data = homeFAQs,
  title = "Frequently Asked Questions",
  subtitle = "Questions",
  id = "faq",
} = {}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id={id}
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
          className="font-semibold text-xs tracking-[2px] uppercase text-[var(--secondary)]! mb-2!"
        >
          {subtitle}
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          {title}
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto! space-y-3!">
        {data.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              className="rounded-xl relative z-1 border bg-[var(--primary)] transition-colors duration-200"
              style={{
                borderColor: isOpen
                  ? "rgba(0, 194, 255, 0.55)"
                  : "rgba(0, 194, 255, 0.25)",
              }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.15 }}
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
                  className={`text-xs transition-transform duration-300 ${
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
