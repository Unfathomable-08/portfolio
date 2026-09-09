"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Skytech",
    dates: "Jan 2025 – Mar 2025",
    accent: "FRONTEND & UI",
    description:
    "Contributed to client-facing web platforms, developing responsive components, interactive interfaces, and animation-rich user experiences to clients all around the world.",
    achievements: [
      "Built the SkyMart e-commerce frontend with React and Bootstrap",
      "Engineered SkyTech's official responsive website with custom animations and EmailJS",
      "Created production-ready UI components with smooth layouts and optimal UX",
    ],
  },
  {
    role: "Fullstack Web Developer",
    company: "Techno Rivals",
    dates: "Sep 2025 – Present",
    accent: "FULLSTACK & AI",
    description:
      "Crafting scalable full-stack applications, management software, and intelligent systems, focusing on smooth user experiences, robust backend architectures, and AI integrations.",
    achievements: [
      "Engineered web platforms across e-commerce, corporate, and agency domains",
      "Developed and integrated conversational AI chatbots and automated workflow agents",
      "Shipped end-to-end full-stack solutions using React, Next.js, Node.js, and Python",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[var(--primary)] w-full px-5! md:px-20! py-16! relative"
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
          Career
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          Work Experience
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto!">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="rounded-xl relative z-1 border bg-[var(--primary)] p-5! md:p-6! flex flex-col justify-between"
            style={{
              borderColor: "rgba(0, 194, 255, 0.25)",
            }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, borderColor: "rgba(0, 194, 255, 0.55)" }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3!">
                <span className="text-xs font-semibold tracking-wider">
                  0{index + 1} · {exp.company}
                </span>
                <span className="text-xs text-[var(--tertiary)] border border-white/10 px-2.5! py-0.5! rounded-full">
                  {exp.dates}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-2!">
                {exp.role}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--tertiary)] leading-relaxed mb-4!">
                {exp.description}
              </p>
            </div>

            <ul className="space-y-2 border-t border-white/5 pt-4!">
              {exp.achievements.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[var(--tertiary)]"
                >
                  <span className="text-[var(--secondary)]! text-sm mt-0.5 select-none">
                    ▸
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
