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

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { screenSize } = useScreenSize();

  const breakpoints = screenSize == 'xs' ? [0, 4, 9, 14] : [0, 6, 13];

  return (
    <div className="min-h-[400px] md:min-h-screen max-md:py-15 bg-[var(--primary)] text-white flex flex-col items-center justify-center gap-y-8 px-20 relative bg-dots">
        {/* Soft blurred circles */}
        <div className="absolute top-10 left-10 w-20 h-20 md:w-40 md:h-40 rounded-full bg-white opacity-40 blur-3xl pointer-events-none z-15"></div>
        <div className="absolute bottom-20 right-20 md:w-56 md:h-56 w-28 h-28 rounded-full bg-[#ffffffaa] opacity-40 blur-3xl pointer-events-none z-15"></div>

      <div className="max-sm:scale-75 transform w-full h-full flex flex-col justify-center items-center gap-y-8">
        {breakpoints.map((start, rowIndex) => (
          <div className="flex gap-x-3 sm:gap-x-4 md:gap-x-6 relative " key={rowIndex}>
            {logos
              .slice(start, start + (rowIndex === 1 ? breakpoints[1]+1 : (rowIndex === 2 && screenSize === 'xs') ? breakpoints[1]+1 : breakpoints[1]))
              .map(({ src, name }, idx) => {
                const globalIndex = start + idx;
                const isHovered = hoveredIndex === globalIndex;
                return (
                  <div key={globalIndex} className="relative">
                    <div
                      className="bg-skills w-18 h-24 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(globalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
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
                    </div>

                    {isHovered && (
                      <div
                        className="absolute top-[2px] left-[2px] h-23 w-17 rounded flex justify-center items-end bg-skills-hover z-10 whitespace-nowrap pointer-events-none"
                        role="tooltip"
                        aria-label={name}
                      >
                        {name}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
