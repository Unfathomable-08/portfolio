"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

export default function Step4QuoteBuilder({
  currentFeatureSet,
  selectedFeatures = {},
  toggleFeature,
  variants,
}) {
  const allFeatures = currentFeatureSet || [];

  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4! border-b border-zinc-700 pb-3!">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-1!">
          Customize Your Features
        </h2>
        <p className="text-xs text-zinc-400">
          Toggle optional modules to fine-tune your project package.
        </p>
      </div>

      <div className="space-y-2! bg-[#1e1e1e] rounded-lg py-6! px-5!">
        {allFeatures.map((feat) => {
          const isChecked = !!selectedFeatures[feat.id];

          return (
            <button
              key={feat.id}
              type="button"
              disabled={feat.required}
              onClick={() => toggleFeature(feat.id, feat.required)}
              className={`w-full text-left rounded-lg transition-all duration-200 flex items-start justify-between gap-3 ${feat.required ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              <div className="flex items-start gap-2.5 flex-1 min-w-0">
                <div
                  className={`w-3.5 h-3.5 rounded-xs flex items-center justify-center shrink-0 mt-0.5! transition-colors duration-200 ${
                    isChecked
                      ? "bg-[var(--secondary)] border border-[var(--secondary)] text-[var(--primary)]"
                      : "border border-zinc-500 bg-zinc-800"
                  }`}
                >
                  {isChecked && <FaCheck className="text-[8px]" />}
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-xs sm:text-sm font-medium text-white block">
                    {feat.label}
                  </span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-semibold text-[var(--secondary)]!">
                  {feat.price === 0 ? "FREE" : `PKR ${feat.price.toLocaleString()}`}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
