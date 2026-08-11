"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Sable Build",
    desc: "A drag-and-drop website builder that lets users create apps visually and export production-ready frontend and backend code in preffered frameworks with preffered database. Includes AI assistance for code generation and suggestions.",
    tech: "20+ technologies, MERN, Python, Golang, etc",
    img: "/project/sable.png",
    repo: "Not Available",
    link: "https://sablebuild.vercel.app"
  },
  {
    id: 2,
    title: "Ember & Oak",
    desc: "A full-stack restaurant platform with dynamic menu management, table reservations, event booking, and online ordering. Includes a complete admin system for managing operations in real time.",
    tech: "Next.js, Tailwind CSS, MongoDB, Stripe",
    img: "/project/emberoak.png",
    repo: "Not Available",
    link: "https://emberoak-two.vercel.app"
  },
  {
    id: 3,
    title: "Awaza",
    desc: "A fully functional social media PWA built with Next.js, firebase and mongodb. It has features like live push notifications, real-time chat, follow system, and full post interactions. Built for a smooth, app-like experience across devices with modern scalable architecture.",
    tech: "Next.js, Firebase, MongoDB",
    img: "/project/awaza.png",
    repo: "https://github.com/Unfathomable-08/Awaza-web-app",
    link: "https://awaza-social.vercel.app"
  },
  {
    id: 4,
    title: "Fluentyx",
    desc: "An Arabic learning platform built with Next.js featuring leaderboard, lesson revision algorithm, AI tutor chatbot, translation marking system, and pytorch built CNN-based handwritten alphabet classification.",
    tech: "Next.js, PyTorch, LangChain, Hugging Face, Tailwind CSS",
    img: "/project/fluentyx.JPG",
    repo: "https://github.com/unfathomable-08/fluentyx",
    link: "https://fluentyx.vercel.app"
  },
  {
    id: 5,
    title: "Sparkio Store",
    desc: "Sparkio is a modern e-commerce platform with all essential features, a clean shopping experience, and an eye-catching UI. Includes a powerful admin dashboard and is fully responsive across devices.",
    tech: "Next.js, Tailwind CSS, MongoDB, MUI",
    img: "/project/sparkio.webp",
    repo: 'Not Available',
    link: 'https://sparkio.store'
  },
  {
    id: 6,
    title: "Glowfarm",
    desc: "GlowFarm showcases ethereal lighting products through jaw-dropping animations: theme switching, dynamic light effects, and interactive hover effects that feel alive. Developed with Next.js and Framer Motion.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    img: "/project/glowfarm.png",
    repo: 'Not Available',
    link: 'https://glowfarm.vercel.app'
  },
  {
    id: 7,
    title: "Rag Agent",
    desc: "A Retrieval-Augmented Generation (RAG) agent built using LangChain and Hugging Face models. It allows users to ask questions about a specific document or dataset, leveraging vector databases for efficient retrieval and LLMs for generating accurate responses.",
    tech: "Python, LangChain, Hugging Face, FAISS",
    img: "/project/rag.png",
    repo: 'https://huggingface.co/spaces/TechDxon/Chatbot/tree/main',
    link: 'https://techdxon.com/ai'
  },
  {
    id: 8,
    title: "SkyTech Official Website",
    desc: "An official business website developed for a software house during my internship. This project involved building a multi-section React site with animations using AOS, styled manually with vanilla CSS, and integrated with EmailJS for contact form submissions. The site is fully responsive and production-ready.",
    tech: "React, Vanilla CSS, EmailJS, AOS",
    img: "/project/skyteck.JPG",
    repo: 'Not Available',
    link: 'https://skytech.com.pk'
  },
];

export default function Projects() {
  return (
    <div id="projects" className="min-h-svh w-full bg-[var(--primary)] px-5! md:px-20!">
      <h2 className="sm:text-2xl text-xl md:text-3xl font-bold text-white py-15! transform max-md:translate-y-8 text-center">My Projects</h2>
      <div className="grid gap-x-12 gap-y-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="rounded-xl shadow-lg overflow-hidden bg-[#1e1e1e] grid sm:grid-cols-2 p-4! items-center sm:gap-4"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={150}
              className="w-full aspect-video border border-white/60 object-cover rounded-lg max-md:scale-90"
            />
            <div className="p-4! flex flex-col justify-between h-full">
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
                <a
                  href={project.link && project.link !== "Not Available" ? project.link : "/"}
                  disabled={project.link === "Not Available"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm rounded-sm ${project.link && project.link !== "Not Available"
                    ? "max-sm:text-sm border py-1.5! px-3! border-[var(--secondary)] text-[var(--secondary)] bg-[var(--hover)] hover:bg-[var(--secondary)] transition"
                    : "max-sm:text-smborder py-1.5! px-3! border-gray-600 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  {project.link && project.link !== "Not Available" ? "Live Link" : "Not Available"}
                </a>
                <a
                  href={project.repo !== "Not Available" && project.repo}
                  disabled={project.repo === "Not Available"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-sm rounded-sm ${project.repo !== "Not Available" 
                    ? "max-sm:text-sm border py-1.5! px-3! border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--hover)] transition"
                    : "max-sm:text-sm border py-1.5! px-3! border-gray-600 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  {project.repo && project.repo !== "Not Available" ? "Repository" : "No Repository"}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
