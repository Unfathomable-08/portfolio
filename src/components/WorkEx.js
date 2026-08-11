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
        "Built numerous websites across e-commerce, corporate, portfolio, and agency niches",
        "Developed and integrated AI chatbots for multiple client-facing web platforms",
        "Delivered full-stack solutions using React.js, Node.js, and Python"
      ]
    },
    {
      role: "Frontend Web Developer Intern",
      company: "Skytech",
      dates: "Jan 2025 - Mar 2025",
      description: "Contributed to frontend development during a dynamic internship, honing skills in responsive design and interactive UIs. Gained hands-on experience in agile environments, delivering polished components for client-facing web applications.",
      icon: "fa-solid fa-palette",
      achievements: [
        "Built an e-commerce frontend SkyMart, using React.js and Bootstrap during internship",
        "Developed official business website SkyTech, with animations and EmailJS integration",
        "Created responsive, production-ready UIs with optimized layouts and smooth UX"
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
    <section
      id="experience"
      ref={containerRef}
      className="min-h-svh w-full bg-[var(--primary)] px-5! md:px-20! py-20! relative overflow-hidden"
    >
      <motion.h2
        className="text-2xl sm:text-3xl pb-3! mb-3! md:text-4xl font-bold text-white! text-center relative z-5"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ marginTop: "16px" }}
      >
        Experience That Ships Results
      </motion.h2>
      <motion.p
        className="text-[var(--tertiary)] flex mb-3! pb-3! justify-center text-center relative z-5"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="max-w-md pb-3! mb-3!">
          Journey through roles where I transformed ideas into production-grade digital products.
        </span>
      </motion.p>

      <div className="flex justify-center relative z-5">
        <motion.ul
          className="relative max-w-5xl"
          style={{ paddingLeft: "0px" }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div
            className="max-md:hidden"
            style={{
              position: "absolute",
              left: "31px",
              top: "14px",
              bottom: "20px",
              width: "2px",
              background:
                "linear-gradient(180deg, rgba(0,194,255,0.8) 0%, rgba(0,194,255,0.08) 100%)",
            }}
          />
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="relative flex mb-12! flex-col md:flex-row items-start gap-4 md:gap-8"
            >
              <motion.div
                className="flex flex-col items-center w-16 flex-shrink-0 md:w-16"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
              >
                <div
                  className="relative rounded-full flex border-[var(--secondary)]/50 border bg-[var(--primary)] justify-center items-center"
                  style={{
                    width: "52px",
                    height: "52px",
                    boxShadow: "0 0 25px rgba(0,194,255,0.2)",
                  }}
                >
                  <span className="text-[var(--secondary)] text-lg z-5">
                    <i className={exp.icon}></i>
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="rounded-xl bg-[var(--primary)] px-1! md:px-4! py-4! md:py-6! w-full"
                style={{
                  border: "1px solid rgba(0, 194, 255, 0.28)",
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col p-4! sm:flex-row justify-between items-start sm:items-center">
                  <h2 className="text-xl pb-3! md:text-2xl font-bold text-white">
                    {exp.role}
                  </h2>
                  <span
                    className="text-sm font-medium rounded"
                    style={{
                      border: "1px solid rgba(0, 194, 255, 0.4)",
                      padding: "4px 10px",
                      background: "rgba(0,0,0,0.35)",
                    }}
                  >
                    {exp.dates}
                  </span>
                </div>

                <h3 className="text-lg pb-3! px-2! py-1! font-semibold text-white">
                  {exp.company}
                </h3>

                <p className="text-[var(--tertiary)] px-2! py-1! pb-3! leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>

                <ul className="px-2! py-1!" style={{ display: "grid", gap: "10px" }}>
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2 px-2! py-1! text-sm rounded"
                      style={{
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        color: "rgb(209, 213, 219)",
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.5 + idx * 0.1, duration: 0.4 }}
                    >
                      <span
                        className="text-xs font-medium rounded-full"
                        style={{
                          color: "var(--secondary)",
                          border: "1px solid rgba(0, 194, 255, 0.45)",
                          width: "22px",
                          height: "22px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        ✓
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
    </section>
  );
}
