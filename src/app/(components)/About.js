"use client";
import Image from "next/image";
import DotsBg from "@/components/ui/Dots-bg.js";
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.div
      id="about"
      className="min-h-svh bg-[var(--primary)] grid md:grid-cols-[1fr_1fr] items-center px-5! md:px-20! relative"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h4 className="font-medium text-2xl pb-4!">Hi, I’m Muhammad,</h4>
        <p className="text-md max-lg:text-sm">
          I am a Full-Stack Web & Applied AI Developer with 2 years of experience
          crafting modern digital applications and intelligent systems. From building
          responsive websites and cross-platform mobile apps to training AI models and
          engineering autonomous AI agents, I deliver scalable end-to-end solutions.
          My core web stack includes React, Next.js, Node.js, Express, Flask, FastAPI,
          and Alpine.js, paired with React Native and Expo for mobile development. For AI
          engineering, I leverage Python, PyTorch, TensorFlow, and Keras, backended by
          SQL, MongoDB, Firebase, and vector databases. Passionate about tackling complex
          technical challenges and creating high-impact software!
        </p>
        <motion.a
          href="https://wa.me/923282279743"
          target="_blank"
          className="bg-[var(--secondary)] inline-block hover:bg-[var(--hover)] rounded py-1.5! px-5! mt-5! z-2 relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Connect Now
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex justify-center items-center relative z-5 transform -translate-y-10 max-md:scale-70 max-lg:scale-90"
      >
        <Image src="/boy.png" alt="Hacker Illustration" width={400} height={400} />
      </motion.div>

      <DotsBg />
    </motion.div>
  );
}
