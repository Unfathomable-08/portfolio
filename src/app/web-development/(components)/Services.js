"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCartShopping,
  FaBuilding,
  FaArrowsRotate,
  FaLaptopCode,
  FaLayerGroup,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa6";

const services = [
  {
    id: "01",
    title: "E-Commerce Development",
    description:
      "Custom online stores with product catalogs, shopping cart, checkout, payment integrations, and order management.",
    icon: FaCartShopping,
    tags: ["Payment Gateway", "Admin Portal", "Shopping Cart", "Discount & Coupons"],
  },
  {
    id: "02",
    title: "Business & Corporate Websites",
    description:
      "Professional websites designed to showcase your company, build trust, generate leads, and establish your brand online.",
    icon: FaBuilding,
    tags: ["Company Profile", "Appointment Booking", "Portfolio & Case Studies", "CRM Integration"],
  },
  {
    id: "03",
    title: "Revamp of Existing Websites",
    description:
      "Redesigning outdated sites with modern UI/UX, mobile responsiveness, clean code, and faster page load speeds.",
    icon: FaArrowsRotate,
    tags: ["UI/UX Redesign", "Speed Improvement", "Modern UI", "Feature Upgrades"],
  },
  {
    id: "04",
    title: "Full-Stack Web Applications",
    description:
      "Custom dynamic web applications built with modern frontend, backend APIs, user authentication, and databases.",
    icon: FaLaptopCode,
    tags: ["Custom Workflows", "Database Integration", "Real-Time Features", "Third-Party Integrations"],
  },
  {
    id: "05",
    title: "SaaS & Dashboard Development",
    description:
      "Web software, administrative portals, analytics dashboards, and subscription platforms with role-based access.",
    icon: FaLayerGroup,
    tags: ["Admin Portal", "Role-Based Access", "Analytics Dashboard", "Subscriptions"],
  },
  {
    id: "06",
    title: "AI-Powered Web Applications",
    description:
      "Integrating AI features into web apps, including conversational chatbots, smart automations, and LLM APIs.",
    icon: FaRobot,
    tags: ["LLM Integration", "AI Automation", "AI Agents", "Smart Workflows"],
  },
];

export default function WebDevServices() {
  return (
    <section id="services" className="w-full bg-black py-20! px-4! sm:px-8! md:px-16! lg:px-20! relative border-t border-zinc-900">
      {/* Header */}
      <motion.div
        className="text-center mb-10!"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="font-semibold text-xs tracking-[2px] uppercase text-[var(--secondary)]! mb-2!">
          Services
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          Web Development Services
        </h2>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6! mt-12!">
        {services.map((service, index) => {
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
          href="/#contact"
          className="inline-flex items-center gap-2! px-6! py-2.5! rounded-full font-semibold text-sm bg-[var(--secondary)]! hover:bg-[var(--hover)] transition-all duration-300 text-[var(--primary)]! shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:scale-105"
        >
          <span>Start a Project</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </motion.div>
    </section>
  );
}
