"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="home" className="relative bg-[var(--primary)] h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)]/20 to-[var(--primary)]"></div>

      {/* Glowing Pulse Ring */}
      <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-3xl animate-pulse z-0" />

      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[
          { src: "/react.png", top: "15%", left: "20%", duration: 9 },
          { src: "/node.png", top: "30%", left: "60%", duration: 11 },
          { src: "/python.png", top: "70%", left: "25%", duration: 10 },
          { src: "/next.png", top: "50%", left: "40%", duration: 8 },
          { src: "/socket.png", top: "15%", left: "75%", duration: 9 },
          { src: "/redis.png", top: "80%", left: "60%", duration: 12 },
          { src: "/express.png", top: "35%", left: "10%", duration: 10 },
          { src: "/tailwind.png", top: "65%", left: "80%", duration: 11 },
        ].map((item, i) => (
          <motion.img
            key={i}
            src={item.src}
            alt=""
            className="absolute w-8 h-8 opacity-30"
            initial={{ y: -20, x: 0 }}
            animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
            transition={{ duration: item.duration, repeat: Infinity }}
            style={{ top: item.top, left: item.left }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-5 text-center text-white max-w-4xl space-y-6 px-4">
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold leading-tight pb-3 drop-shadow-[0_0_10px_var(--secondary)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-[var(--secondary)] animate-pulse">Muhammad</span>
        </motion.h1>

        <motion.p
          className="text-md sm:text-xl text-[var(--tertiary)] pb-3 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
         Creative Developer | AI Enthusiast | Tech Explorer 🚀
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {["React", "Next.js", "Node.js", "MongoDB", "Python"].map((skill, index) => (
            <span
              key={index}
              className="bg-[var(--secondary)]/20 border border-[var(--secondary)] text-[var(--secondary)] p-btn rounded-full text-sm font-medium mb-3"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="#projects"
          className="inline-block mt-3 p-btn text-sm font-semibold text-white bg-[var(--secondary)] rounded-full shadow-md hover:bg-[var(--hover)] transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          View My Work
        </motion.a>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute bg-gradient-to-b from-transparent to-[var(--primary)] h-36 bottom-0 w-full z-5" />
      <div className="absolute bg-gradient-to-b from-[var(--primary)] to-transparent h-36 top-0 w-full z-5" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-18 left-1/2 transform -translate-x-1/2 cursor-pointer z-0"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-6 h-6 text-[var(--tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}
