"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { pricingCategories } from "@/data/pricing";

export default function Step1Category({
  category,
  handleCategorySelect,
  variants,
}) {
  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4!">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-1!">
          Select Your Project Type
        </h2>
        <p className="text-xs text-zinc-400 max-w-xl">
          Choose the digital platform you want to build. Each category has tailored architecture options.
        </p>
      </div>

      <div className="space-y-2.5!">
        {pricingCategories.map((cat) => {
          const isSelected = category === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => !cat.disabled && handleCategorySelect(cat)}
              className={`rounded-lg border px-3! py-2.5! transition-all duration-200 flex gap-3.5 items-center ${
                cat.disabled
                  ? "opacity-50 cursor-not-allowed border-zinc-700 bg-[#141414]"
                  : isSelected
                  ? "border-[var(--secondary)] bg-[var(--secondary)]/10 cursor-pointer shadow-sm shadow-cyan-500/10"
                  : "border-zinc-800 hover:border-zinc-600 bg-[#141414] hover:bg-zinc-900/60 cursor-pointer"
              }`}
            >
              <div
                className={`w-3.5 h-3.5 rounded-full border border-[var(--secondary)] flex items-center justify-center shrink-0 transition-colors ${
                  isSelected
                    ? "bg-[var(--secondary)] text-[var(--primary)]"
                    : "bg-transparent"
                }`}
              >
                {isSelected && <FaCheck className="text-[8px]" />}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-white">
                  {cat.label}
                </h3>
                <p className="text-xs text-zinc-400 leading-normal mt-0.5!">
                  {cat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
