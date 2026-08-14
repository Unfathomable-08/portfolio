"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = ["Website", "Mobile Apps", "AI Agents", "Management Systems"];

const projects = [
  {
    id: 1,
    category: ["Website"],
    title: "Sable Build",
    caseStudy: "sablebuild",
    desc: "A drag-and-drop website builder that lets users create apps visually and export production-ready frontend and backend code in preffered frameworks with preffered database. Includes AI assistance for code generation and suggestions.",
    tech: "20+ technologies, MERN, Python, Golang, etc",
    img: "/project/sable.png",
    link: "https://sablebuild.vercel.app",
    apk: null
  },
  {
    id: 2,
    category: ["Website", "Management Systems"],
    title: "Ember & Oak",
    caseStudy: "emberoak",
    desc: "A full-stack restaurant platform with dynamic menu management, table reservations, event booking, and online ordering. Includes a complete admin system for managing operations in real time.",
    tech: "Next.js, Tailwind CSS, MongoDB, Stripe",
    img: "/project/emberoak.png",
    link: "https://emberoak-two.vercel.app",
    apk: null
  },
  {
    id: 3,
    category: ["Website", "Mobile Apps"],
    title: "Awaza",
    caseStudy: "awaza",
    desc: "A fully functional social media PWA built with Next.js, firebase and mongodb. It has features like live push notifications, real-time chat, follow system, and full post interactions. Built for a smooth, app-like experience across devices with modern scalable architecture.",
    tech: "Next.js, Firebase, MongoDB",
    img: "/project/awaza.png",
    link: "https://awaza-social.vercel.app",
    apk: null
  },
  {
    id: 4,
    category: ["Website", "Mobile Apps", "AI Agents"],
    title: "Fluentyx",
    caseStudy: "fluentyx",
    desc: "An Arabic learning platform built with Next.js featuring leaderboard, lesson revision algorithm, AI tutor chatbot, translation marking system, and pytorch built CNN-based handwritten alphabet classification.",
    tech: "Next.js, PyTorch, LangChain, Hugging Face, Tailwind CSS",
    img: "/project/fluentyx.JPG",
    link: "https://fluentyx.vercel.app",
    apk: null
  },
  {
    id: 5,
    category: ["Website"],
    title: "Sparkio Store",
    caseStudy: "sparkio",
    desc: "Sparkio is a modern e-commerce platform with all essential features, a clean shopping experience, and an eye-catching UI. Includes a powerful admin dashboard and is fully responsive across devices.",
    tech: "Next.js, Tailwind CSS, MongoDB, MUI",
    img: "/project/sparkio.webp",
    link: 'https://sparkio.store',
    apk: null
  },
  {
    id: 6,
    category: ["Website"],
    title: "Glowfarm",
    caseStudy: "glowfarm",
    desc: "GlowFarm showcases ethereal lighting products through jaw-dropping animations: theme switching, dynamic light effects, and interactive hover effects that feel alive. Developed with Next.js and Framer Motion.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    img: "/project/glowfarm.png",
    link: 'https://glowfarm.vercel.app',
    apk: null
  },
  {
    id: 7,
    category: ["AI Agents"],
    title: "Rag Agent",
    caseStudy: "rag",
    desc: "A Retrieval-Augmented Generation (RAG) agent built using LangChain and Hugging Face models. It allows users to ask questions about a specific document or dataset, leveraging vector databases for efficient retrieval and LLMs for generating accurate responses.",
    tech: "Python, LangChain, Hugging Face, FAISS",
    img: "/project/rag.png",
    link: 'https://techdxon.com/ai',
    apk: null
  },
  {
    id: 8,
    category: ["Website"],
    title: "SkyTech Official Website",
    caseStudy: "skytech",
    desc: "An official business website developed for a software house during my internship. This project involved building a multi-section React site with animations using AOS, styled manually with vanilla CSS, and integrated with EmailJS for contact form submissions. The site is fully responsive and production-ready.",
    tech: "React, Vanilla CSS, EmailJS, AOS",
    img: "/project/skyteck.JPG",
    link: 'https://skytech.com.pk',
    apk: null
  },
  {
    id: 9,
    category: ["Mobile Apps"],
    title: "Expense Tracker",
    caseStudy: "expense-tracker",
    desc: "A simple mobile finance app for recording income and expenses, organizing transactions by wallet, and reviewing spending through weekly, monthly, and yearly charts.",
    tech: "React Native, Expo, Firebase, Cloudinary",
    img: "/project/expense-tracker.png",
    link: null,
    apk: "https://github.com/Unfathomable-08/Expense-Tracker-React-Native/releases/download/v1.0.0/expense-tracker.apk"
  },
  {
    id: 10,
    category: ["Mobile Apps"],
    title: "Macrozone",
    caseStudy: "macrozone",
    desc: "A lightweight nutrition tracker built while learning React Native. It records meals, totals daily calories and macros, and supports reminders and sharing.",
    tech: "React Native, Expo, AsyncStorage, Expo APIs",
    img: "/project/macrozone.png",
    link: null,
    apk: "https://github.com/Unfathomable-08/Macrozone/releases/download/v1.0.0/macrozone.apk"
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const visibleProjects = projects.filter(
    (project) => project.category.includes(activeCategory)
  );

  return (
    <div id="projects" className="min-h-svh w-full bg-[var(--primary)] px-5! pb-16! md:px-20!">
      <h2 className="sm:text-2xl text-xl md:text-3xl font-bold text-white pt-15! pb-8! text-center">My Projects</h2>

      <div
        role="tablist"
        aria-label="Project categories"
        className="mx-auto mb-10! flex w-fit max-w-full gap-1 overflow-x-auto rounded-lg border border-white/35 bg-black/30 p-1.5! shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const projectCount = projects.filter(
            (project) => project.category.includes(category)
          ).length;

          return (
            <button
              key={category}
              id={`projects-tab-${category.toLowerCase().replaceAll(" ", "-")}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="projects-panel"
              onClick={() => setActiveCategory(category)}
              className={`group cursor-pointer z-5 flex shrink-0 items-center gap-2 rounded-md px-3! py-2.5! text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--secondary)] sm:px-4! ${
                isActive
                  ? "bg-[var(--secondary)] text-[#071014] shadow-[0_0_24px_rgba(0,194,255,0.18)]"
                  : "text-gray-300 bg-[var(--primary)] border border-white/0 hover:border-[var(--secondary)]/35 hover:text-white"
              }`}
            >
              <span className={isActive ? "text-[#071014]" : "text-inherit"}>{category}</span>
              <span
                aria-hidden="true"
                className={`rounded-full w-4 h-4 flex justify-center items-center text-[10px] leading-none ${
                  isActive ? "bg-[#071014]/25 text-[#071014]" : "bg-white/25 text-gray-400"
                }`}
              >
                {projectCount}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        id="projects-panel"
        role="tabpanel"
        aria-labelledby={`projects-tab-${activeCategory.toLowerCase().replaceAll(" ", "-")}`}
        className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
        {visibleProjects.map((project, index) => (
          <motion.div
            layout
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="rounded-xl shadow-lg overflow-hidden bg-[#1e1e1e] grid sm:grid-cols-2 p-4! items-center sm:gap-4"
          >
            <Link
              href={`/case-study/${project.caseStudy}`}
              aria-label={`View ${project.title} case study`}
              className="block z-5 cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--secondary)]"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={150}
                className="w-full cursor-pointer aspect-video border border-white/60 object-cover rounded-lg max-md:scale-90"
              />
            </Link>
            <div className="p-4! z-5 flex flex-col justify-between h-full">
              <div>
                <h2 className="sm:text-xl font-semibold text-white mb-3!">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-3!">{project.desc}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3!">
                  {project.tech.split(',').map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[var(--secondary)]/20 border py-[3px]! px-3! border-[var(--secondary)] text-[var(--secondary)] rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3! font-medium">
                <Link
                  href={`/case-study/${project.caseStudy}`}
                  className="max-sm:text-sm border py-1.5! px-2.5! text-sm rounded-sm border-[var(--secondary)] text-[var(--secondary)] bg-[var(--hover)] hover:bg-[var(--secondary)] hover:text-[#071014] transition"
                >
                  Case Study
                </Link>
                {project.link && project.link !== null && <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm rounded-sm border py-1.5! px-2.5! border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--hover)] transition`}
                >
                  Live Demo
                </a>}
                {project.apk && project.apk !== null && <a
                  href={project.apk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm rounded-sm border py-1.5! px-2! border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--hover)] transition`}
                >
                  Download APK
                </a>}
              </div>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
