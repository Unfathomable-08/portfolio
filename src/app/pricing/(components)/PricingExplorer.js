"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaWhatsapp, FaRotateLeft } from "react-icons/fa6";
import {
  pricingCategories,
  pricingSubcategories,
  pricingVariants,
  pricingFeatures,
} from "@/data/pricing";

import Step1Category from "./steps/01";
import { Step2Subcategory, Step3Variant } from "./steps/02";
import Step4QuoteBuilder from "./steps/03";

const STEPS = [
  { step: 1, label: "Project Type" },
  { step: 2, label: "Category" },
  { step: 3, label: "Scope" },
  { step: 4, label: "Your Quote" },
];

const SLIDE_VARIANTS = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 30 : -30 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -30 : 30 }),
};

export default function PricingExplorer() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [variant, setVariant] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState({});

  const goTo = (nextStep) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  };

  const handleCategorySelect = (cat) => {
    if (cat.disabled) return;
    setCategory(cat.id);
    setSubcategory(null);
    setVariant(null);
    setSelectedFeatures({});
    goTo(2);
  };

  const handleSubcategorySelect = (sub) => {
    setSubcategory(sub.id);
    setVariant(null);
    setSelectedFeatures({});
    goTo(3);
  };

  const handleVariantSelect = (v) => {
    setVariant(v.id);
    const key = `${category}.${subcategory}.${v.id}`;
    const initial = {};
    const features = pricingFeatures[key] || [];

    features.forEach((f) => {
      if (f.required) initial[f.id] = true;
    });
    setSelectedFeatures(initial);
    goTo(4);
  };

  const toggleFeature = (id, required) => {
    if (required) return;
    setSelectedFeatures((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Direct lookups
  const selectedCategory = pricingCategories.find((c) => c.id === category);
  const currentSubcategories = category ? pricingSubcategories[category] || [] : [];
  const selectedSubcategory = currentSubcategories.find((s) => s.id === subcategory);
  const currentVariants = category && subcategory ? pricingVariants[`${category}.${subcategory}`] || [] : [];
  const selectedVariant = currentVariants.find((v) => v.id === variant);
  const currentFeatureSet =
    category && subcategory && variant
      ? pricingFeatures[`${category}.${subcategory}.${variant}`] || null
      : null;

  // Active features and total price
  const activeFeatures = useMemo(() => {
    if (!currentFeatureSet) return [];
    return currentFeatureSet.filter((f) => selectedFeatures[f.id]);
  }, [currentFeatureSet, selectedFeatures]);

  const total = useMemo(
    () => activeFeatures.reduce((sum, f) => sum + f.price, 0),
    [activeFeatures]
  );

  // WhatsApp link generator
  const whatsappLink = useMemo(() => {
    const featureLines = activeFeatures.length
      ? activeFeatures
        .map(
          (f) =>
            `• ${f.label} — ${f.price === 0 ? "Included" : `PKR ${f.price.toLocaleString()}`
            }`
        )
        .join("\n")
      : "• Base Project Scope Discussion";

    const message = `Hi! I've built a quote using your pricing explorer:
Project: ${selectedCategory?.label || "Custom Project"}
Type: ${selectedSubcategory?.label || "General"}
Scope: ${selectedVariant?.label || "Standard Scope"}

Selected Features:
${featureLines}

Total: PKR ${total.toLocaleString()}

Please confirm the final quote. Thank you!`;

    return `https://wa.me/923282279743?text=${encodeURIComponent(message)}`;
  }, [selectedCategory, selectedSubcategory, selectedVariant, activeFeatures, total]);

  return (
    <section
      id="pricing-explorer"
      className="w-full bg-[var(--primary)] py-12! px-4! md:px-10! lg:px-16! border-t border-zinc-900"
    >
      <div className="max-w-5xl mx-auto!">
        {/* Progress Stepper */}
        <div className="flex items-center justify-between w-full max-w-xl mx-auto! mb-8! px-2!">
          {STEPS.map((s, idx) => {
            const isCompleted = step > s.step;
            const isCurrent = step === s.step;
            return (
              <div key={s.step} className="flex-1 flex items-center last:flex-none">
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    disabled={s.step > step}
                    onClick={() => s.step < step && goTo(s.step)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 ${isCompleted || isCurrent
                      ? "bg-[var(--secondary)] text-[var(--primary)] shadow-sm shadow-cyan-500/20"
                      : "bg-zinc-800 border border-zinc-700 text-zinc-400"
                      } ${s.step < step ? "cursor-pointer hover:scale-105" : "cursor-default"}`}
                  >
                    {isCompleted ? <FaCheck className="text-[10px]" /> : s.step}
                  </button>
                  <span
                    className={`text-[9px] sm:text-[10px] uppercase tracking-wider mt-1.5! text-center whitespace-nowrap ${isCurrent
                      ? "text-[var(--secondary)]! font-bold"
                      : isCompleted
                        ? "text-zinc-300 font-medium"
                        : "text-zinc-500"
                      }`}
                  >
                    {s.label}
                  </span>
                </div>

                {idx < STEPS.length - 1 && (
                  <div className="flex-1 h-[2px] bg-zinc-800 mx-2! relative -top-2.5">
                    <motion.div
                      initial={false}
                      animate={{ width: step > s.step ? "100%" : "0%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="h-full bg-[var(--secondary)]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 12-Column Layout: 8 cols for Steps, 4 cols for Sticky Pricing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6!">
          <div className="lg:col-span-8 min-h-[380px]">
            <AnimatePresence mode="wait" custom={direction}>
              {step === 1 && (
                <Step1Category
                  key="step-1"
                  category={category}
                  handleCategorySelect={handleCategorySelect}
                  variants={SLIDE_VARIANTS}
                />
              )}

              {step === 2 && (
                <Step2Subcategory
                  key="step-2"
                  subcategory={subcategory}
                  selectedCategoryObj={selectedCategory}
                  currentSubcategories={currentSubcategories}
                  handleSubcategorySelect={handleSubcategorySelect}
                  variants={SLIDE_VARIANTS}
                />
              )}

              {step === 3 && (
                <Step3Variant
                  key="step-3"
                  variant={variant}
                  selectedSubcategoryObj={selectedSubcategory}
                  currentVariants={currentVariants}
                  handleVariantSelect={handleVariantSelect}
                  variants={SLIDE_VARIANTS}
                />
              )}

              {step === 4 && (
                <Step4QuoteBuilder
                  key="step-4"
                  currentFeatureSet={currentFeatureSet}
                  selectedFeatures={selectedFeatures}
                  toggleFeature={toggleFeature}
                  variants={SLIDE_VARIANTS}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Sticky Pricing Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start z-10">
            <div className="rounded-lg bg-[#1e1e1e] px-4! py-5! shadow-lg flex flex-col">
              <div className="pb-3! border-b border-zinc-800 mb-3!">
                <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">
                  Estimated Total
                </p>
                <p className="text-xl sm:text-2xl font-bold text-[var(--secondary)]! mt-0.5!">
                  PKR {total.toLocaleString()}
                </p>
              </div>

              {/* Scope & Progression Info */}
              <div className="border-b border-zinc-800 pb-3! mb-3! text-xs space-y-1.5!">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Project:</span>
                  <span className={selectedCategory ? "italic text-white" : "italic text-zinc-500"}>
                    {selectedCategory?.label || "Not selected yet"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Type:</span>
                  <span className={selectedSubcategory ? "italic text-white" : "italic text-zinc-500"}>
                    {selectedSubcategory?.label || "Pending selection"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Scope:</span>
                  <span className={selectedVariant ? "italic text-white" : "italic text-zinc-500"}>
                    {selectedVariant?.label || "Pending selection"}
                  </span>
                </div>
              </div>

              {/* Deliverables Section */}
              <div className="mb-4!">
                <div className="flex items-center justify-between mb-2!">
                  <h4 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider">
                    Deliverables
                  </h4>
                </div>

                {activeFeatures.length === 0 ? (
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="w-1 h-1 rounded-full bg-[var(--secondary)] mt-3! shrink-0 shadow-sm shadow-cyan-400/50" />
                    <p className="text-xs italic text-zinc-500 italic py-1.5!">
                      Select options and features to build your deliverables list.
                    </p>
                  </div>
                ) : (
                  <div className="max-h-48 overflow-y-auto custom-scrollbar pr-1.5! space-y-2! pb-2.5!">
                    {activeFeatures.map((f) => (
                      <div key={f.id} className="flex items-start justify-between text-xs gap-2">
                        <div className="flex items-start gap-2 min-w-0">
                          <span className="w-1 h-1 rounded-full bg-[var(--secondary)] mt-1.5! shrink-0 shadow-sm shadow-cyan-400/50" />
                          <span className="italic text-zinc-200 truncate">{f.label}</span>
                        </div>
                        <span className="text-[var(--secondary)]! shrink-0 font-medium text-[11px]">
                          {f.price === 0 ? "FREE" : `PKR ${f.price.toLocaleString()}`}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* WhatsApp CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[var(--secondary)] hover:bg-[#00a2da] text-gray-950 font-semibold py-2.5! px-3! rounded-md transition duration-200 mb-2! text-xs shadow-md hover:shadow-cyan-500/20 cursor-pointer"
              >
                <FaWhatsapp className="text-base" />
                Send on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
