"use client";

import { motion } from "framer-motion";
import {
  FaBoltLightning,
  FaComments,
  FaCode,
  FaShieldHalved,
  FaLayerGroup,
  FaClock,
} from "react-icons/fa6";

const reasons = [
  {
    id: "01",
    title: "Direct Developer Contact",
    description:
      "You communicate directly with the developer building your project, ensuring fast feedback, zero miscommunication, and prompt changes.",
    icon: FaComments,
  },
  {
    id: "02",
    title: "High Speed & Performance",
    description:
      "Clean, lightweight code optimized for fast load times, mobile performance, and high Google PageSpeed scores.",
    icon: FaBoltLightning,
  },
  {
    id: "03",
    title: "Full Deliverables Handover",
    description:
      "Agreed source code repository transfer, hosting setup, and database access delivered upon full invoice settlement.",
    icon: FaCode,
  },
  {
    id: "04",
    title: "Modern Tech Stack",
    description:
      "Built with scalable, reliable technologies like React, Next.js, Node.js, and modern databases for long-term stability.",
    icon: FaLayerGroup,
  },
  {
    id: "05",
    title: "On-Time Delivery",
    description:
      "Structured milestones and regular progress updates ensure your web product is delivered on time according to the agreed plan.",
    icon: FaClock,
  },
  {
    id: "06",
    title: "Warranty & Bug-Fix Support",
    description:
      "Free bug fixes and error corrections for 14 to 21 days following the delivery date to guarantee everything runs as agreed.",
    icon: FaShieldHalved,
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="w-full bg-black py-20! px-4! sm:px-8! md:px-16! lg:px-20! relative border-t border-zinc-900">
      {/* Header */}
      <motion.div
        className="text-center mb-10!"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="font-semibold text-xs tracking-[2px] uppercase text-[var(--secondary)]! mb-2!">
          Why Choose Me
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          Quality & Reliability
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4! sm:gap-6! max-w-7xl mx-auto!">
        {reasons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              className="group relative rounded-2xl border bg-[#121212]/60 p-4! sm:p-6! border-[var(--secondary)]/50 hover:bg-[#121212] transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div>
                {/* Top bar: Icon & Number */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[var(--secondary)]/20 text-[var(--secondary)]! flex items-center justify-center text-lg group-hover:scale-105 group-hover:bg-[var(--secondary)]/50 transition-all duration-300">
                    <Icon />
                  </div>
                  <span className="font-mono text-xs text-zinc-500 group-hover:text-[var(--secondary)]! transition-colors">
                    {item.id}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-bold text-white mt-4! group-hover:text-[var(--secondary)]! transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--tertiary)] leading-relaxed mt-1.5!">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
