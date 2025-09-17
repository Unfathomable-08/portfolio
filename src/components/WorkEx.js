"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const experiences = [
    {
      role: "Fullstack Web Developer",
      company: "Techno Rivals",
      dates: "Sep 2025 - Present",
      description: "Crafting scalable full-stack applications with cutting-edge technologies, focusing on seamless user experiences and robust backend integrations. Collaborating on feature-rich projects that drive business growth and innovation.",
      icon: "fa-solid fa-laptop",
      achievements: [
        "Led development of real-time chat modules using Socket.io and MongoDB",
        "Optimized application performance, reducing load times by 40%",
        "Integrated AI-driven features with LangChain for enhanced user interactions"
      ]
    },
    {
      role: "Frontend Web Developer Intern",
      company: "Skytech",
      dates: "Jan 2025 - Mar 2025",
      description: "Contributed to frontend development during a dynamic internship, honing skills in responsive design and interactive UIs. Gained hands-on experience in agile environments, delivering polished components for client-facing web applications.",
      icon: "fa-solid fa-palette",
      achievements: [
        "Built responsive e-commerce interfaces using React and Bootstrap",
        "Implemented animations with AOS library for engaging user journeys",
        "Collaborated on team projects, ensuring cross-browser compatibility"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div
      id="experience"
      ref={containerRef}
      className="min-h-screen bg-[var(--primary)] p-20 relative overflow-hidden"
    >
      {/* Section Header */}
      <motion.h1
        className="text-2xl sm:text-3xl pb-3 mb-3 md:text-4xl font-bold text-white text-center relative z-5"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Work Experience
      </motion.h1>
      <motion.p
        className="text-[var(--tertiary)] flex mb-3 pb-3 justify-center text-center relative z-5"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="max-w-md pb-3 mb-3">
          Journey through professional roles where I've built impactful solutions and grown as a developer.
        </span>
      </motion.p>

      {/* Timeline Container */}
      <div className="flex justify-center">
        <motion.ul
          className="relative space-y-8 md:space-y-12 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12"
            >
              {/* Timeline dot and icon */}
              <motion.div
                className="flex flex-col items-center w-16 flex-shrink-0 lg:w-20"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
              >
                <div className="relative">
                  <span className="absolute -top-1 -right-1 text-[var(--secondary)] text-lg z-5">
                    <i className={exp.icon}></i>
                  </span>
                </div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[var(--secondary)]/20 rounded-xl p-4 w-full lg:flex-1 shadow-lg shadow-black/20 hover:shadow-[0_0_20px_var(--secondary)/10] transition-all duration-300 group"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Role and Company */}
                <div className="flex flex-col p-4 sm:flex-row justify-between items-start sm:items-center">
                  <h2 className="text-xl pb-3 md:text-2xl font-bold text-white transition-colors">
                    {exp.role}
                  </h2>
                  <span className="text-sm font-medium text-white">
                    {exp.dates}
                  </span>
                </div>

                <h3 className="text-lg pb-3 px-2 font-semibold  text-white transition-colors">
                  {exp.company}
                </h3>

                {/* Description */}
                <p className="text-[var(--tertiary)] px-2 pb-3 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2 px-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-300 pl-4 relative before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[var(--secondary)]/50 before:rounded-full"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.5 + idx * 0.1, duration: 0.4 }}
                    >
                      <span className="text-xs font-medium text-[var(--secondary)] min-w-[1rem]">
                        •
                      </span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
