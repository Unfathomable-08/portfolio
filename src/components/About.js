"use client";
import Gear from "../sub-components/Gear.js";
import DotsBg from "../sub-components/Dots-bg.js";
import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";
import { useScreenSize } from "../app/ScreenContext";

export default function About() {
  const [direction, cycleDirection] = useCycle(1, -1); // 1 for clockwise, -1 for counter-clockwise
  const { screenSize } = useScreenSize();

  useEffect(() => {
    const interval = setInterval(() => {
      cycleDirection(); // Flip direction every 18s
    }, 18000); // Match the duration

    return () => clearInterval(interval);
  }, [cycleDirection]);

  return (
    <motion.div
      id="about"
      className="min-h-screen bg-[var(--primary)] grid sm:grid-cols-[1fr_1fr] items-center px-20 relative"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h4 className="font-medium text-xl pb-3">Hi, I’m Muhammad,</h4>
        <p className="text-md max-lg:text-sm">
          A full-stack web and app developer focused on building intuitive,
          responsive web apps. I specialize in React and Next for dynamic UIs
          and use Node.js and Express for scalable back-end systems. I’m also
          experienced with Flask and PHP, and work with both SQL and MongoDB.
          I’m passionate about creating solutions that solve real-world
          problems and improve user experiences. Whether designing with Tailwind
          CSS for custom layouts or using Bootstrap for quick, responsive
          designs, my goal is to create user-friendly applications. Beyond
          coding, I’m fascinated by physics and mathematics—fields that
          challenge my problem-solving skills and inspire my work in
          development. If you’re looking for someone who loves to solve complex
          problems, I’d love to collaborate on your next project!
        </p>
        <motion.button
          className="bg-[var(--secondary)] hover:bg-[var(--hover)] rounded p-btn m-btn z-2 relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Connect Now
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className={`flex justify-center transform md:translate-x-4 max-sm:h-48 sm:-translate-y-12 gap-x-6 ${
          screenSize == "md"
            ? "scale-80"
            : screenSize == "sm"
            ? "scale-70"
            : screenSize == "xs"
            ? "scale-70 translate-x-12 -translate-y-20 opacity-40"
            : ""
        }`}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 * direction }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="transform h-38 w-auto"
        >
          <Gear />
        </motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 * direction }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="transform rotate-36 scale-75 translate-y-22 gear-2 h-38 w-auto"
        >
          <Gear />
        </motion.div>
      </motion.div>

      <DotsBg />
    </motion.div>
  );
}