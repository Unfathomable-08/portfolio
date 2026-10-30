"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

function StepLayout({
  title,
  subtitle,
  items = [],
  selectedId,
  onSelect,
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
        <h2 className="text-lg sm:text-xl font-bold text-white mb-1!">{title}</h2>
        <p className="text-xs text-zinc-400">{subtitle}</p>
      </div>

      <div className="space-y-2.5!">
        {items.map((item) => {
          const isSelected = selectedId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => onSelect(item)}
              className={`rounded-lg border px-3! py-2.5! transition-all duration-200 flex gap-3.5 items-center ${
                isSelected
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
                  {item.label}
                </h3>
                <p className="text-xs text-zinc-400 leading-normal mt-0.5!">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function Step2Subcategory({
  subcategory,
  selectedCategoryObj,
  currentSubcategories = [],
  handleSubcategorySelect,
  goTo,
  variants,
}) {
  return (
    <StepLayout
      title={`Select ${selectedCategoryObj?.label || ""} Category`}
      subtitle={`Choose what kind of ${selectedCategoryObj?.label?.toLowerCase() || "project"} you want to build.`}
      items={currentSubcategories}
      selectedId={subcategory}
      onSelect={handleSubcategorySelect}
      variants={variants}
    />
  );
}

export function Step3Variant({
  variant,
  selectedSubcategoryObj,
  currentVariants = [],
  handleVariantSelect,
  goTo,
  variants,
}) {
  return (
    <StepLayout
      title={`Select Scope for ${selectedSubcategoryObj?.label || ""}`}
      subtitle="Choose the deployment scale and architecture tier that fits your requirements."
      items={currentVariants}
      selectedId={variant}
      onSelect={handleVariantSelect}
      variants={variants}
    />
  );
}
