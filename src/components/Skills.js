"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useScreenSize } from "../app/ScreenContext";

const logos = [
  { src: "/skills/html.png", name: "HTML" },
  { src: "/skills/css.png", name: "CSS" },
  { src: "/skills/javascript.png", name: "JavaScript" },
  { src: "/skills/bootstrap.png", name: "Bootstrap" },
  { src: "/skills/tailwind.png", name: "Tailwind CSS" },
  { src: "/skills/git.png", name: "Git" },
  { src: "/skills/react.png", name: "React" },
  { src: "/skills/next.png", name: "Next.js" },
  { src: "/skills/alpine.png", name: "Alpine.js" },
  { src: "/skills/node.png", name: "Node.js" },
  { src: "/skills/express.png", name: "Express.js" },
  { src: "/skills/mysql.png", name: "MySQL" },
  { src: "/skills/mongodb.png", name: "MongoDB" },
  { src: "/skills/postgresql.png", name: "PostgreSQL" },
  { src: "/skills/python.png", name: "Python" },
  { src: "/skills/socket.png", name: "Socket.io" },
  { src: "/skills/redis.png", name: "Redis" },
  { src: "/skills/php.svg", name: "PHP" },
  { src: "/skills/docker.png", name: "Docker" },
  { src: "/skills/sklearn.png", name: "Scikit-Learn" },
  { src: "/skills/pytorch.png", name: "Pytorch" },
  { src: "/skills/tensorflow.png", name: "TensorFlow" },
  { src: "/skills/langchain.png", name: "LangChain" },
  { src: "/skills/langgraph.png", name: "LangGraph" },
  { src: "/skills/nlp.png", name: "NLP" },
  { src: "/skills/firebase.png", name: "Firebase" },
];

// Tilt helper
function getTilt(x, y, rect) {
  const rotateX = ((y - rect.top) / rect.height - 0.5) * 10;
  const rotateY = ((x - rect.left) / rect.width - 0.5) * -10;
  return { rotateX, rotateY };
}

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { screenSize } = useScreenSize();

  // Remove 3 items only for xs
  const filteredLogos =
    screenSize === "xs"
      ? logos.filter((_, i) => ![5, 13, 25].includes(i))
      : logos;

  // Row generation
  const getRows = () => {
    const itemsPerRow = screenSize === "xs" ? [4, 5, 5, 5, 4] : [6, 7, 7, 6];
    const rows = [];
    let start = 0;
    for (let count of itemsPerRow) {
      rows.push(filteredLogos.slice(start, start + count));
      start += count;
    }
    return rows;
  };

  const rows = getRows();

  return (
    <div
      id="skills"
      className="min-h-svh w-full max-md:py-12! bg-[var(--primary)] text-white flex flex-col items-center justify-center gap-y-6 sm:gap-y-4 px-5! md:px-20! relative bg-dots"
    >
      {/* Soft blurred circles */}
      <div className="absolute top-10 left-10 w-20 h-20 md:w-40 md:h-40 rounded-full bg-white opacity-40 blur-3xl pointer-events-none z-15"></div>
      <div className="absolute bottom-20 right-20 md:w-56 md:h-56 w-28 h-28 rounded-full bg-[#ffffffaa] opacity-40 blur-3xl pointer-events-none z-15"></div>

      <div className="max-sm:scale-75 transform w-full h-full flex flex-col justify-center items-center gap-y-8">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-x-3 sm:gap-x-4 md:gap-x-6 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: rowIndex * 0.3, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {row.map(({ src, name }, idx) => {
              const globalIndex = rowIndex * 10 + idx;
              const isHovered = hoveredIndex === globalIndex;

              return (
                <motion.div
                  key={globalIndex}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <motion.div
                    className="bg-skills w-18 h-24 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                    onMouseMove={(e) => {
                      const card = e.currentTarget;
                      const { rotateX, rotateY } = getTilt(
                        e.clientX,
                        e.clientY,
                        card.getBoundingClientRect()
                      );
                      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                    }}
                    onMouseLeave={(e) => {
                      const card = e.currentTarget;
                      card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
                      setHoveredIndex(null);
                    }}
                  >
                    <div className="h-23 w-17 flex rounded justify-center items-center bg-[var(--primary)]">
                      <Image
                        src={src}
                        width={
                          name !== "Node.js" && name !== "Pytorch" ? 48 : 32
                        }
                        height={
                          name !== "Node.js" && name !== "Pytorch" ? 48 : 32
                        }
                        alt={name}
                      />
                    </div>
                  </motion.div>

                  {isHovered && (
                    <div
                      className="absolute top-[2px] left-0 h-24 w-18 rounded flex justify-center items-end bg-skills-hover z-10 whitespace-nowrap pointer-events-none"
                      role="tooltip"
                      aria-label={name}
                    >
                      {name}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
