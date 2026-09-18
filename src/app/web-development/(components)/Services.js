"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function WebDevServices({
  title,
  subtitle,
  services,
  ctaText,
  ctaLink,
  id,
}) {

  return (
    <section id={id} className="w-full bg-black py-20! px-4! sm:px-8! md:px-16! lg:px-20! relative border-t border-zinc-900">
      {/* Header */}
      <motion.div
        className="text-center mb-10!"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="font-semibold text-xs tracking-[2px] uppercase text-[var(--secondary)]! mb-2!">
          {subtitle}
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          {title}
        </h2>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6! mt-12!">
        {services?.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
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
                    {service.id}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white mt-4! group-hover:text-[var(--secondary)]! transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--tertiary)] leading-relaxed mt-1.5!">
                  {service.description}
                </p>
              </div>

              {/* Tags / Deliverables */}
              <div className="flex flex-wrap gap-2! pt-3! mt-3! border-t border-zinc-700">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[var(--secondary)]/15 text-xs border py-[3px]! px-3! border-[var(--secondary)]/60 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-12! text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Link
          href={ctaLink}
          className="inline-flex items-center gap-2! px-6! py-2.5! rounded-full font-semibold text-sm bg-[var(--secondary)]! hover:bg-[var(--hover)] transition-all duration-300 text-[var(--primary)]! shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:scale-105"
        >
          <span>{ctaText}</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </motion.div>
    </section>
  );
}

