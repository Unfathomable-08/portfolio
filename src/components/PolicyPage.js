"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PolicyPage({ data }) {
  const { title, lastUpdated, description, sections } = data;

  return (
    <main className="w-screen min-h-screen bg-[var(--primary)] text-white overflow-x-hidden">
      <Navbar />

      <div className="pt-28! pb-12! md:pb-24!">

        {/* Page Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-3! sm:px-8! md:px-20! mb-16! md:mb-20!"
        >
          <p className="text-[var(--secondary)]! text-[10px] md:text-xs font-semibold tracking-[3px] uppercase mb-4!">
            Legal Documentation
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-4!">
            {title}
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            {description}
          </p>
          {lastUpdated && (
            <p className="mt-5! text-sm text-gray-400!">
              Last updated: {lastUpdated}
            </p>
          )}
        </motion.header>

        {/* Sections */}
        {sections.map((section, idx) => {
          const num = `( ${idx + 1 < 10 ? `0${idx + 1}` : idx + 1} )`;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="grid gap-y-3 sm:gap-y-4 md:grid-cols-[100px_1fr_2fr] px-3! sm:px-8! md:px-20! mb-10! md:mb-14! relative"
            >
              {/* Count */}
              <div className="text-[var(--secondary)]! tracking-tighter text-lg sm:text-xl font-bold">
                {num}
              </div>

              {/* Section heading */}
              <div className="font-bold text-lg sm:text-xl drop-shadow-[0_0_10px_var(--secondary)]">
                {section.title}
              </div>

              {/* Content */}
              <div className="leading-relaxed text-xs sm:text-sm text-neutral-300">
                <p className="mb-3! whitespace-pre-line">{section.content}</p>

                {section.points && section.points.length > 0 && (
                  <ul className="mt-2! space-y-2.5!">
                    {section.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 mb-2!">
                        <span className="inline-block w-1 h-1 mt-2.5! rounded-full bg-[var(--secondary)] shrink-0"></span>
                        <p>{point}</p>
                      </div>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}

      </div>

      <Footer />
    </main>
  );
}
