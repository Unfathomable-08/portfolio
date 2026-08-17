"use client";

import { useScreenSize } from "@/app/ScreenContext";
import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function DotsBg() {
  const { screenSize } = useScreenSize();

  const THRESHOLD = 150;
  const NUM_DOTS = screenSize == "xs" ? 25 : screenSize == "sm" ? 55 : 70;

  const generateDots = () => {
    console.log(NUM_DOTS, screenSize);
    // Only access window inside useEffect or client-side context
    return Array.from({ length: NUM_DOTS }, (_, i) => ({
      id: i,
      top:
        typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
      left:
        typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
      duration: 5 + Math.random() * 5,
      xTarget: Math.random() * 100 - 25,
      yTarget: Math.random() * 100 - 25,
    }));
  };

  const [dots, setDots] = useState([]);
  const positionsRef = useRef(
    dots.map((dot) => ({
      id: dot.id,
      x: 0, // Replace useMotionValue with plain number
      y: 0,
      top: dot.top,
      left: dot.left,
    }))
  );
  const [lines, setLines] = useState([]);

  // Generate dots on client-side mount
  useEffect(() => {
    setDots(generateDots());
  }, [screenSize]);

  // Update positionsRef when dots change
  useEffect(() => {
    positionsRef.current = dots.map((dot) => ({
      id: dot.id,
      x: 0,
      y: 0,
      top: dot.top,
      left: dot.left,
    }));
  }, [dots]);

  // Manual animation loop to update x, y positions
  useAnimationFrame((time) => {
    const newLines = [];
    const positions = positionsRef.current;

    // Update positions manually based on animation progress
    positions.forEach((pos, i) => {
      const dot = dots[i];
      if (!dot) return;

      // Calculate progress (0 to 1) based on time and duration
      const progress = ((time / 1000) % dot.duration) / dot.duration;
      const easedProgress = easeInOut(progress); // Custom easing function
      const x = dot.xTarget * easedProgress;
      const y = dot.yTarget * easedProgress;

      pos.x = x;
      pos.y = y;
    });

    // Calculate lines
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const xi = positions[i].left + positions[i].x;
        const yi = positions[i].top + positions[i].y;
        const xj = positions[j].left + positions[j].x;
        const yj = positions[j].top + positions[j].y;

        const dx = xj - xi;
        const dy = yj - yi;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < THRESHOLD) {
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          newLines.push({
            id: `${i}-${j}`,
            x: xi,
            y: yi,
            length: distance,
            angle,
          });
        }
      }
    }

    setLines(newLines);
  });

  // Custom easeInOut function to mimic Framer Motion's easeInOut
  const easeInOut = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
      {/* Dynamic Lines */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute bg-[var(--secondary)] opacity-40"
          style={{
            top: `${line.y}px`,
            left: `${line.x}px`,
            width: `${line.length}px`,
            height: "1px",
            transform: `rotate(${line.angle}deg)`,
            transformOrigin: "0 0",
          }}
        />
      ))}

      {/* Animated Dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-[var(--secondary)] opacity-50"
          style={{
            top: `${dot.top}px`,
            left: `${dot.left}px`,
            width: "4px",
            height: "4px",
            x: positionsRef.current[i]?.x || 0,
            y: positionsRef.current[i]?.y || 0,
          }}
          // Use manual x, y from positionsRef instead of animate
        />
      ))}
    </div>
  );
}
