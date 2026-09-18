"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa6";

const packages = [
  {
    id: "fullstack-and-ai",
    name: "Web Apps & AI",
    price: "40k – 150k",
    currency: "PKR",
    description: "For dynamic web platforms, custom backend architectures, and AI integrations.",
    services: [
      { name: "AI-Powered Web Applications", range: "40k – 140k" },
      { name: "Full-Stack Web Applications", range: "50k – 150k" },
    ],
    features: [
      "Custom Frontend in React, Next or Alpine",
      "Custom Backend in Node, Python or Golang",
      "Database Integration (MySQL, PostgreSQL or MongoDB)",
      "User Authentication & Role Access",
      "Automated Workflows & Webhooks",
    ],
    popular: false,
  },
  {
    id: "websites-and-stores",
    name: "Websites & Stores",
    price: "15k – 80k",
    currency: "PKR",
    description: "For corporate websites, revamping existing sites, and custom online stores.",
    services: [
      { name: "Revamp of Existing Websites", range: "15k – 50k" },
      { name: "Business & Corporate Websites", range: "25k – 70k" },
      { name: "E-Commerce Development", range: "35k – 80k" },
    ],
    features: [
      "1 Year Free Domain",
      "Lifetime Free Hosting",
      "Payment Gateway Integration",
      "Custom Admin Portal",
      "Speed Optimization & Basic SEO",
    ],
    popular: true,
  },
  {
    id: "saas-and-dashboards",
    name: "SaaS & Dashboards",
    price: "100k – 300k",
    currency: "PKR",
    description: "For custom cloud software, multi-tenant SaaS, and data analytics dashboards.",
    services: [
      { name: "Admin & Analytics Dashboards", range: "100k – 150k" },
      { name: "Multi-Tenant SaaS Web Applications", range: "100k – 300k" },
    ],
    features: [
      "Custom Workflows Tailored to Your Requirements",
      "Subscription Billing & Payment Sync",
      "Role-Based Access & Permissions",
      "Real-Time Analytics & Data Views",
      "Automated Email & Webhook Sync",
    ],
    popular: false,
  },
];

export default function WebDevPackages() {
  return (
    <section id="packages" className="w-full bg-black py-20! px-4! sm:px-8! md:px-16! lg:px-20! relative border-t border-zinc-900">
      {/* Header */}
      <motion.div
        className="text-center mb-10!"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="font-semibold text-xs tracking-[2px] uppercase text-[var(--secondary)]! mb-2!">
          Packages
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          Estimated Packages
        </h2>
        <div className="mb-20! mt-4! text-center max-w-2xl mx-auto!">
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <span className="text-[var(--secondary)]! font-semibold text-base">* Note:</span> These are estimated prices for typical client requirements. The final price depends on your specific requirements, project scope, and features.
          </p>
        </div>
      </motion.div>

      {/* 3 Packages Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4! mt-10! max-w-7xl mx-auto!">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            className={`group relative rounded-2xl border bg-[#121212]/60 p-4! sm:p-6! transition-all duration-300 flex flex-col justify-between ${pkg.popular
                ? "border-[var(--secondary)]! shadow-[0_0_25px_rgba(0,194,255,0.15)] bg-[#141414]"
                : "border-[var(--secondary)]! hover:bg-[#121212] scale-85"
              }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={pkg.popular ? { y: -8, scale: 1.02 } : { y: -8, scale: 0.88 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
              delay: index * 0.12,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {pkg.popular && (
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
                <div className="mt-4! flex items-baseline gap-2!">
                  <span className="text-2xl sm:text-3xl font-bold text-[var(--secondary)]!">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">{pkg.currency}</span>
                </div>
              </div>

              {/* Individual Services Breakdown */}
              <div className="py-4! border-b border-zinc-800/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3!">
                  Included Services & Ranges
                </p>
                <div className="flex flex-col gap-2!">
                  {pkg.services.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between text-xs py-1.5! px-4! rounded-full bg-white/10 border border-white/5"
                    >
                      <span className="text-zinc-200">{s.name}</span>
                      <span className="font-mono text-[var(--secondary)]! font-semibold">
                        {s.range}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="pt-4!">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3!">
                  Deliverables
                </p>
                <ul className="flex flex-col gap-2.5!">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5! text-xs text-zinc-300">
                      <FaCheck className="text-[var(--secondary)]! text-xs shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8! pt-4! border-t border-zinc-800">
              <Link
                href="/#contact"
                className={`w-full inline-flex items-center justify-center gap-2! py-2.5! px-4! rounded-full font-semibold text-sm transition-all duration-300 ${pkg.popular
                    ? "bg-[var(--secondary)]! hover:bg-[var(--hover)] text-[var(--primary)]! shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:scale-102"
                    : "border border-[var(--secondary)]! text-white hover:bg-[var(--secondary)]/10"
                  }`}
              >
                <span>Get a Quote</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
