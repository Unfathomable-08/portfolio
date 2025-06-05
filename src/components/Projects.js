"use client";

import { useScreenSize } from "@/app/ScreenContext";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Chat Application",
    desc: "A real-time chat application developed using Next.js for the frontend, Tailwind CSS for styling, Firebase for real-time messaging, and MySQL for authentication and storing user data. It includes features like user login/signup, chat rooms, and responsive design for mobile and desktop.",
    tech: "Next.js, Tailwind, Firebase, MySQL",
    img: "/chat.JPG",
    repo: 'https://github.com/Unfathomable-08/Chatapp-NextJS',
    link: 'http://talksky.vercel.app'
  },
  {
    title: "SkyMart",
    desc: "An e-commerce frontend project developed during my internship at a software company. I collaborated with a team to build the user interface using Next.js and Bootstrap. The design focused on responsiveness, product listings, filters, and clean UI layout. Only frontend code is available.",
    tech: "Next.js, Bootstrap",
    img: "/skymart.JPG",
    repo: 'Not Available',
    link: 'http://skytechmart.netlify.app'
  },
  {
    title: "SkyTech Official Website",
    desc: "An official business website developed for a software house during my internship. This project involved building a multi-section React site with animations using AOS, styled manually with vanilla CSS, and integrated with EmailJS for contact form submissions. The site is fully responsive and production-ready.",
    tech: "React, Vanilla CSS, EmailJS, AOS",
    img: "/skyteck.JPG",
    repo: 'Not Available',
    link: 'https://skytech.com.pk'
  },
  {
    title: "Disease Predicting System",
    desc: "A machine learning system that predicts possible diseases based on user-inputted symptoms. Developed using a Support Vector Classifier (SVC) with Scikit-learn, Flask for backend API, and a minimal yet modern frontend using Alpine.js and Tailwind CSS. It includes a symptom dropdown and result display.",
    tech: "Scikit-learn (SVC), Flask, Alpine.js, Tailwind",
    img: "/mrs.JPG",
    repo: 'https://github.com/Unfathomable-08/Medicine-Recommendation-System',
    link: 'https://unfathomable06.pythonanywhere.com'
  },
  {
    title: "Cosine Similarity AI",
    desc: "A simple AI Chatbot that calculates the similarity between two pieces of text using the cosine similarity method and gives response. The backend is powered by Flask and Scikit-learn's methods, while the frontend is lightweight using Alpine.js and styled with Tailwind. Good for NLP experiments and demos.",
    tech: "Scikit-learn, NLTK, Flask, Tailwind, Alpine.js",
    img: "/chatai.JPG",
    repo: 'https://github.com/Unfathomable-08/AI-Chatbot',
    link: 'https://chatai02.pythonanywhere.com'
  },
  {
    title: "Vizuflect",
    desc: "The most simplest data visualization app built using React that lets users generate a variety of graph types including bar, pie, and line charts. It supports mathematical equations, and manual data entry. The app is styled with Tailwind CSS and uses Chart.js or similar libraries for rendering.",
    tech: "React, Chart.js, Tailwind",
    img: "/Visu.JPG",
    repo: 'https://github.com/Unfathomable-08/Data-Visualization',
    link: 'http://vizuflect.netlify.app/'
  },
];

export default function Projects() {
    const { screenSize } = useScreenSize()

  return (
    <div className="min-h-screen bg-[var(--primary)] px-20">
      <h1 className="sm:text-2xl text-xl md:text-3xl font-bold text-white py-15 transform max-md:translate-y-8 text-center">My Projects</h1>
      <div className="grid gap-x-12 gap-y-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl shadow-lg overflow-hidden bg-[#1e1e1e] grid sm:grid-cols-2 p-4 items-center sm:gap-4"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={150}
              className="w-full aspect-video object-cover rounded-lg max-md:scale-90"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h2 className="sm:text-xl font-semibold text-white mb-3">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  {project.tech.split(',').map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[var(--secondary)]/20 border p-btn border-[var(--secondary)] text-[var(--secondary)] rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <a
                  href={project.link && project.link !== "Not Available" ? project.link : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm rounded-md ${
                    project.link && project.link !== "Not Available"
                      ? "max-sm:text-sm border p-btn border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--hover)] transition"
                      : "max-sm:text-smborder p-btn border-gray-600 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {project.link && project.link !== "Not Available" ? "Live Link" : "Not Available"}
                </a>
                <a
                  href={project.repo && project.repo !== "Not Available" ? project.repo : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-sm rounded-md ${
                    project.repo && project.repo !== "Not Available"
                      ? "max-sm:text-sm border p-btn border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--hover)] transition"
                      : "max-sm:text-sm border p-btn border-gray-600 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {project.repo && project.repo !== "Not Available" ? "Repository" : "Not Available"}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}