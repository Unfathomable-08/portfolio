"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa6";

export default function WebDevPackages({
  title,
  subtitle,
  note,
  packages,
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
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="font-semibold text-xs tracking-[2px] uppercase text-[var(--secondary)]! mb-2!">
          {subtitle}
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          {title}
        </h2>
        {note && (
          <div className="mb-20! mt-4! text-center max-w-2xl mx-auto!">
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              <span className="text-[var(--secondary)]! font-semibold text-base">* Note:</span>{" "}
              {note.replace(/^\* Note:\s*/, "")}
            </p>
          </div>
        )}
      </motion.div>

      {/* 3 Packages Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6! lg:gap-4! mt-10! max-w-xl lg:max-w-7xl mx-auto!">
        {packages?.map((pkg, index) => {
          const isPopular = Boolean(pkg.popular);
          const orderClass = isPopular
            ? "order-1 lg:order-2"
            : index === 0
              ? "order-2 lg:order-1"
              : "order-3 lg:order-3";

          return (
            <motion.div
              key={pkg.id}
              className={`group relative rounded-2xl border p-4! sm:p-6! transition-all duration-300 flex flex-col justify-between ${orderClass} ${isPopular
                  ? "border-[var(--secondary)]! shadow-[0_0_25px_rgba(0,194,255,0.18)] bg-[#141414] scale-100 lg:scale-100 z-10"
                  : "border-[var(--secondary)]/40 hover:border-[var(--secondary)]! bg-[#121212]/60 hover:bg-[#121212] scale-100 lg:scale-90"
                }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {isPopular && (
                <div className="absolute -top-3.5! left-1/2 -translate-x-1/2 bg-[var(--secondary)]! text-[var(--primary)]! text-[11px] font-bold uppercase tracking-wider py-0.5! px-3! rounded-full shadow-[0_0_15px_rgba(0,194,255,0.4)]">
                  Most Popular
                </div>
              )}


              <div>
                {/* Package Name & Price */}
                <div className="border-b border-zinc-800 pb-5!">
                  <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                  <p className="text-sm text-[var(--tertiary)] mt-1! leading-relaxed">
                    {pkg.description}
                  </p>
                  <div className="mt-4! flex flex-col gap-0.5!">
                    <div className="flex items-baseline gap-2!">
                      <span className="text-2xl sm:text-3xl font-bold text-[var(--secondary)]!">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">{pkg.currency}</span>
                    </div>
                    <span className="text-[11px] text-zinc-400">
                      Category price range across options below
                    </span>
                  </div>
                </div>

                {/* Individual Services Breakdown */}
                <div className="py-4! border-b border-zinc-800/80">
                  <div className="flex items-center justify-between gap-2 mb-1!">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Select Your Project Type
                    </p>
                    <span className="text-[10px] font-medium text-[var(--secondary)]! bg-[var(--secondary)]/10 px-2! py-0.5! rounded-full border border-[var(--secondary)]/30 shrink-0">
                      Standalone Rates
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mb-3! leading-relaxed">
                    Choose one service option below. Each is a separate project with its own pricing (not bundled):
                  </p>

                  <div className="flex flex-col gap-2!">
                    {pkg.services.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center justify-between text-xs py-2! px-3.5! rounded-xl bg-white/5 border border-white/10 hover:border-[var(--secondary)]/40 transition-colors"
                      >
                        <span className="text-zinc-200 font-medium">{s.name}</span>
                        <span className="font-mono text-[var(--secondary)]! font-semibold shrink-0 ml-2">
                          {s.range}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="sm:mt-8! pt-4! border-t border-zinc-800">
                <Link
                  href={ctaLink}
                  className={`w-full inline-flex items-center justify-center gap-2! py-2.5! px-4! rounded-full font-semibold text-sm transition-all duration-300 ${pkg.popular
                    ? "bg-[var(--secondary)]! hover:bg-[var(--hover)] text-[var(--primary)]! shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:scale-102"
                    : "border border-[var(--secondary)]! text-white hover:bg-[var(--secondary)]/10"
                    }`}
                >
                  <span>{ctaText}</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </motion.div>
          )})}
      </div>
    </section>
  );
}

