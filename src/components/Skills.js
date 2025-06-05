"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useScreenSize } from "../app/ScreenContext";

const logos = [
  { src: "/html.png", name: "HTML" },
  { src: "/css.png", name: "CSS" },
  { src: "/javascript.png", name: "JavaScript" },
  { src: "/bootstrap.png", name: "Bootstrap" },
  { src: "/tailwind.png", name: "Tailwind CSS" },
  { src: "/react.png", name: "React" },
  { src: "/next.png", name: "Next.js" },
  { src: "/alpine.png", name: "Alpine.js" },
  { src: "/node.png", name: "Node.js" },
  { src: "/express.png", name: "Express.js" },
  { src: "/mysql.png", name: "MySQL" },
  { src: "/mongodb.png", name: "MongoDB" },
  { src: "/postgresql.png", name: "PostgreSQL" },
  { src: "/python.png", name: "Python" },
  { src: "/socket.png", name: "Socket.io" },
  { src: "/redis.png", name: "Redis" },
  { src: "/php.svg", name: "PHP" },
  { src: "/sklearn.png", name: "Scikit-Learn" },
  { src: "/pytorch.png", name: "Pytorch" },
];

// Get tilt rotation from mouse position
function getTilt(x, y, rect) {
  const rotateX = ((y - rect.top) / rect.height - 0.5) * 10; // vertical tilt
  const rotateY = ((x - rect.left) / rect.width - 0.5) * -10; // horizontal tilt
  return { rotateX, rotateY };
}

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { screenSize } = useScreenSize();

  const breakpoints = screenSize == 'xs' ? [0, 4, 9, 14] : [0, 6, 13];

  return (
    <div className="min-h-screen max-md:py-15 bg-[var(--primary)] text-white flex flex-col items-center justify-center gap-y-8 px-20 relative bg-dots">
        {/* Soft blurred circles */}
        <div className="absolute top-10 left-10 w-20 h-20 md:w-40 md:h-40 rounded-full bg-white opacity-40 blur-3xl pointer-events-none z-15"></div>
        <div className="absolute bottom-20 right-20 md:w-56 md:h-56 w-28 h-28 rounded-full bg-[#ffffffaa] opacity-40 blur-3xl pointer-events-none z-15"></div>

      <div className="max-sm:scale-75 transform w-full h-full flex flex-col justify-center items-center gap-y-8">
        {breakpoints.map((start, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-x-3 sm:gap-x-4 md:gap-x-6 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: rowIndex * 0.3, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {logos
              .slice(start, start + (rowIndex === 1 ? breakpoints[1]+1 : (rowIndex === 2 && screenSize === 'xs') ? breakpoints[1]+1 : breakpoints[1]))
              .map(({ src, name }, idx) => {
                const globalIndex = start + idx;
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
                        const { rotateX, rotateY } = getTilt(e.clientX, e.clientY, card.getBoundingClientRect());
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
                          width={name !== "Node.js" && name !== "Pytorch" ? 48 : 32}
                          height={name !== "Node.js" && name !== "Pytorch" ? 48 : 32}
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
