"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    period: "July 2024",
    tag: "The Genesis",
    title: "The First Line of Code & The 6-Month Sprint",
    description:
      "In July 2024, I wrote my first line of web code with zero background. What followed was six months of relentless, head-down immersion. Day and night, I absorbed HTML, CSS, modern JavaScript, component architectures, and React. In just six months, I had built enough competence and completed multiple projects to apply for internships.",
    skills: ["HTML5 / CSS3", "Modern JavaScript (ES6+)", "React.js", "Component Architectures"],
    icon: "fa-seedling",
  },
  {
    period: "January 2025 - March 2025",
    tag: "First Crucible",
    title: "Stepping into Production: SkyTech Internship",
    description:
      "In January 2025, I joined SkyTech as a Frontend Developer Intern, delivering production React projects. This was my bridge from tutorial land to production reality. I developed responsive client interfaces, built the SkyMart e-commerce frontend, created animated company sites, and learned what it truly takes to write maintainable code for real stakeholders.",
    skills: ["React.js Projects", "Production UI/UX", "Interactive Animations", "Client Deliverables"],
    icon: "fa-briefcase",
  },
  {
    period: "March 2025",
    tag: "Independence",
    title: "Freelancing, Real Client Demands & Portfolio Expansion",
    description:
      "Completing the internship, I immediately stepped into independent freelancing and expanding my portfolio. No hand-holding, no textbook scenarios, just real clients, real deadlines, and complex custom requirements. This phase forged my speed, direct communication, and architectural discipline.",
    skills: ["Freelance Delivery", "Full-Stack Architecture", "Custom Client Solutions", "REST APIs"],
    icon: "fa-laptop-code",
  },
  {
    period: "Mid 2025",
    tag: "The AI Pivot",
    title: "Beyond Web Dev: Generative AI & AI Automation",
    description:
      "I refused to remain just another web developer in an AI-driven era. I dove headfirst into Generative AI, Large Language Models, prompt engineering, and automated workflow pipelines using Playwright, Selenium, and custom scripts. I began fusing web frontends with intelligent AI capabilities, building tools that think and automate repetitive tasks.",
    skills: ["Generative AI", "LLM APIs", "Playwright & Selenium", "Workflow Automation"],
    icon: "fa-brain",
  },
  {
    period: "September 2025 / 2026",
    tag: "Full-Time Milestone",
    title: "Full-Stack & AI Engineer at Techno Rivals",
    description:
      "Landmark career milestone: joining Techno Rivals as a full-time software and AI developer. Here, I took full ownership of enterprise management systems, point-of-sale software, customer portals, and conversational AI chatbots, proving my ability to architect robust full-stack platforms that run core business operations.",
    skills: ["Enterprise Systems", "Next.js & Node.js", "POS / CRM Platforms", "Full-Stack Architecture"],
    icon: "fa-building",
  },
  {
    period: "Late 2025 - Early 2026",
    tag: "Applied AI Developer",
    title: "Agentic AI, Machine Learning & Intelligent Agents",
    description:
      "I escalated from using AI APIs to building autonomous Agentic AI systems, multi-agent networks that reason, use tools, search the web, and execute end-to-end tasks autonomously. I also dove into foundational Machine Learning algorithms, predictive modeling, and RAG pipelines with vector databases. This is why today I proudly call myself an Applied AI Developer.",
    skills: ["Agentic AI", "Autonomous Tool Calling", "Machine Learning", "RAG & Vector Search"],
    icon: "fa-robot",
  },
  {
    period: "2026 & Beyond",
    tag: "Full-Spectrum Mastery",
    title: "Mobile App Development, Technical SEO & Full Ecosystem",
    description:
      "The drive never stopped. To command the entire software lifecycle, I expanded into cross-platform Mobile App Development (React Native / Expo) and deep Technical SEO with Schema markup and Core Web Vitals optimization. From native mobile devices and algorithmic AI brains to high-ranking web engines, I build end-to-end.",
    skills: ["Mobile App Dev (React Native)", "Technical SEO & Schema", "Complete Digital Stack", "High-Performance Delivery"],
    icon: "fa-infinity",
  },
];

export default function AboutJourney() {
  return (
    <section id="journey" className="relative w-full bg-[var(--primary)] py-10! px-4! sm:px-8! md:px-16! overflow-hidden">
      {/* Subtle accent glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-80 w-60 rounded-full bg-[var(--secondary)]/5 blur-[100px]" />

      <div className="max-w-4xl mx-auto!">
        {/* Section Header */}
        <div className="text-center mb-10!">
          <div className="inline-flex items-center gap-1.5! rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 px-3! py-0.5! text-[11px] font-medium uppercase text-[var(--secondary)] mb-2.5!">
            <i className="fas fa-route text-[11px]" />
            <span>The Timeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2.5!">
            How I Got Here: <span className="text-[var(--secondary)]">The Story</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--tertiary)] max-w-xl mx-auto leading-relaxed">
            No shortcuts, no corporate buzzwords. An honest look at every stage of the journey, from zero knowledge in July 2024 to an Applied AI Developer shipping 35+ production solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central spine line for desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[var(--secondary)] via-[var(--secondary)]/40 to-transparent" />

          {/* Left spine line for mobile */}
          <div className="md:hidden absolute left-3.5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[var(--secondary)] via-[var(--secondary)]/40 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-6! md:space-y-8!">
            {timelineEvents.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-4 md:gap-8!`}
                >
                  {/* Spine Center Node */}
                  <div className="absolute left-3.5 md:left-1/2 -translate-x-1/2 top-4 flex items-center justify-center h-7 w-7 rounded-full bg-[#0a1014] border-2 border-[var(--secondary)] shadow-[0_0_12px_rgba(0,194,255,0.35)] z-20 text-[var(--secondary)] text-[10px]">
                    <i className={`fas ${item.icon}`} />
                  </div>

                  {/* Date Column (Desktop side) */}
                  <div
                    className={`hidden md:flex w-1/2 flex-col pt-3! ${
                      isEven ? "items-end text-right pr-8!" : "items-start text-left pl-8!"
                    }`}
                  >
                    <span className="text-[11px] font-semibold uppercase text-[var(--secondary)]">
                      {item.tag}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white mt-0.5!">
                      {item.period}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-10! md:pl-0! ${
                      isEven ? "md:pl-8!" : "md:pr-8!"
                    }`}
                  >
                    <div className="group rounded-xl border border-white/10 bg-[#0d1217] p-4! sm:p-5! shadow-lg hover:border-[var(--secondary)]/40 hover:shadow-[0_0_25px_rgba(0,194,255,0.06)] transition-all duration-300">
                      {/* Mobile tag & period */}
                      <div className="flex md:hidden items-center justify-between gap-2! mb-2.5!">
                        <span className="text-[10px] font-semibold uppercase text-[var(--secondary)]">
                          {item.tag}
                        </span>
                        <span className="text-[11px] font-medium text-gray-400 border border-white/10 px-2! py-0.5! rounded-full">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-semibold text-white mb-2! group-hover:text-cyan-200 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed mb-3.5!">
                        {item.description}
                      </p>

                      {/* Skills/Tags */}
                      <div className="flex flex-wrap gap-1.5! pt-2.5! border-t border-white/5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center text-[10px] font-medium text-gray-300 bg-white/5 border border-white/10 px-2! py-0.5! rounded group-hover:border-[var(--secondary)]/25 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
