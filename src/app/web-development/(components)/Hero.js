"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaNodeJs, FaGolang } from "react-icons/fa6";
import { SiNextdotjs, SiMongodb } from "react-icons/si";


const TOTAL_FRAMES = 150;

function getFrameUrl(index) {
  const pad = String(index).padStart(3, "0");
  return `/laptop-frames/ezgif-frame-${pad}.jpg`;
}

const techStack = [
  { label: "React", icon: FaReact, color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { label: "Node.js", icon: FaNodeJs, color: "#6BCB77" },
  { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { label: "Python", img: "/skills/python.png" },
  { label: "GoLang", icon: FaGolang, color: "#00ADD8" },
];

export default function WebDevHero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef({});
  const lastDrawnFrameRef = useRef(1);
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const animFrameIdRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // Responsive check for desktop transform calculation
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Render a specific frame image directly onto the canvas
  const renderFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Try target frame, fallback to last drawn or frame 1
    const img =
      imagesRef.current[frameIndex] ||
      imagesRef.current[lastDrawnFrameRef.current] ||
      imagesRef.current[1];

    if (!img || !img.complete || img.naturalWidth === 0) {
      if (!imagesRef.current[frameIndex]) {
        const priorityImg = new window.Image();
        priorityImg.src = getFrameUrl(frameIndex);
        priorityImg.onload = () => {
          imagesRef.current[frameIndex] = priorityImg;
          if (Math.round(currentFrameRef.current) === frameIndex) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(priorityImg, 0, 0, canvas.width, canvas.height);
            lastDrawnFrameRef.current = frameIndex;
          }
        };
      }
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    lastDrawnFrameRef.current = frameIndex;
  }, []);

  // Preload frames progressively
  useEffect(() => {
    let isCancelled = false;

    // 1. Immediately load frame 1 for instant display
    const firstImg = new window.Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[1] = firstImg;
      if (canvasRef.current) {
        canvasRef.current.width = 1920;
        canvasRef.current.height = 1080;
      }
      renderFrame(1);
    };

    // 2. Load remaining frames with a batch queue to avoid overwhelming network
    let batchIndex = 2;
    const batchSize = 16;

    const loadNextBatch = () => {
      if (isCancelled || batchIndex > TOTAL_FRAMES) return;

      const end = Math.min(batchIndex + batchSize, TOTAL_FRAMES + 1);
      for (let i = batchIndex; i < end; i++) {
        const img = new window.Image();
        img.src = getFrameUrl(i);
        const onDone = () => {
          if (isCancelled) return;
          imagesRef.current[i] = img;
        };
        img.onload = onDone;
        img.onerror = onDone;
      }
      batchIndex = end;

      if (batchIndex <= TOTAL_FRAMES) {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(loadNextBatch);
        } else {
          setTimeout(loadNextBatch, 30);
        }
      }
    };

    setTimeout(loadNextBatch, 40);

    return () => {
      isCancelled = true;
    };
  }, [renderFrame]);

  // Setup canvas high-res dimensions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasResolution = () => {
      canvas.width = 1920;
      canvas.height = 1080;
      renderFrame(Math.round(currentFrameRef.current));
    };

    updateCanvasResolution();
    window.addEventListener("resize", updateCanvasResolution);
    return () => window.removeEventListener("resize", updateCanvasResolution);
  }, [renderFrame]);

  // RAF render loop with smooth dampening
  useEffect(() => {
    const loop = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;

      const diff = target - current;
      if (Math.abs(diff) > 0.04) {
        currentFrameRef.current = current + diff * 0.22;
        const frameToRender = Math.round(currentFrameRef.current);
        renderFrame(frameToRender);
      } else if (current !== target) {
        currentFrameRef.current = target;
        renderFrame(target);
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [renderFrame]);

  // Scroll handler tracking container position
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = container.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      setScrollProgress(progress);

      const targetIndex = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1)
      );

      targetFrameRef.current = targetIndex;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute scroll transitions:
  // 1. Initial frames (0 -> 0.15): Left content slides off to the left and fades out
  const introProgress = Math.min(1, Math.max(0, scrollProgress / 0.15));
  const easedIntro =
    introProgress < 0.5
      ? 2 * introProgress * introProgress
      : 1 - Math.pow(-2 * introProgress + 2, 2) / 2;

  // Left Content exit
  const leftTranslateX = -(easedIntro * 110);
  const leftOpacity = Math.max(0, 1 - introProgress * 1.25);
  const leftPointerEvents = introProgress > 0.3 ? "none" : "auto";

  // 2. Image centers (0 -> 0.18)
  const centerProgress = Math.min(1, Math.max(0, scrollProgress / 0.18));
  const easedCenter =
    centerProgress < 0.5
      ? 2 * centerProgress * centerProgress
      : 1 - Math.pow(-2 * centerProgress + 2, 2) / 2;

  // 3. Stats cards reveal when laptop reaches center (0.16 -> 0.28)
  const statsProgress = Math.min(1, Math.max(0, (scrollProgress - 0.16) / 0.12));
  const statsEased =
    statsProgress < 0.5
      ? 2 * statsProgress * statsProgress
      : 1 - Math.pow(-2 * statsProgress + 2, 2) / 2;
  const statsOpacity = statsEased;
  const statsScale = 0.9 + statsEased * 0.1;
  const statsPointerEvents = statsProgress > 0.5 ? "auto" : "none";

  return (
    <div
      ref={containerRef}
      id="wd-hero"
      className="relative w-full bg-black text-white"
      style={{ height: "420vh" }}
    >
      {/* Sticky Frame Viewer */}
      <div className="sticky top-0 h-svh w-full flex items-center overflow-hidden bg-black">
        {/* Main grid */}
        <div className="relative z-20 w-full px-5! md:px-16! lg:px-20! grid md:grid-cols-2 items-center gap-12! pt-24! pb-16!">
          {/* LEFT — Text content (slides left and fades out on initial scroll) */}
          <div
            className="flex flex-col gap-5! will-change-transform"
            style={{
              transform: `translateX(${leftTranslateX}%)`,
              opacity: leftOpacity,
              pointerEvents: leftPointerEvents,
              transition: "transform 0.05s ease-out, opacity 0.05s ease-out",
            }}
          >
            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Crafting{" "}
              <span className="text-[var(--secondary)]!">
                Exceptional
              </span>
              <br />
              Web Experiences
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[var(--tertiary)] leading-relaxed max-w-xl">
              From pixel-perfect UIs to robust full-stack architectures — I build
              fast, scalable, SEO-optimised web products using the modern
              JavaScript ecosystem.
            </p>

            {/* Tech icons only */}
            <div className="flex items-center flex-wrap gap-4! pt-1!">
              {techStack.map((t) => {
                if (t.img) {
                  return (
                    <Image
                      key={t.label}
                      src={t.img}
                      alt={t.label}
                      width={32}
                      height={32}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform hover:scale-110"
                      title={t.label}
                    />
                  );
                }
                const Icon = t.icon;
                return (
                  <Icon
                    key={t.label}
                    className="text-2xl sm:text-3xl transition-transform hover:scale-110 [&_path]:[fill:inherit!important] [&_path]:[color:inherit!important]"
                    style={{ color: t.color, fill: t.color }}
                    title={t.label}
                  />
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4! pt-2!">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2! px-6! py-2.5! rounded-full font-semibold text-sm bg-[var(--secondary)] hover:bg-[var(--hover)] transition-all duration-300 text-[var(--primary)] shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:scale-105"
              >
                Start a Project
              </Link>

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2! px-6! py-2! rounded-full font-semibold text-sm border border-[var(--secondary)] text-white hover:border-[var(--secondary)] hover:bg-[var(--secondary)]/10 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>

            {/* Real Proof Metrics (Instant Conversion on Landing) */}
            <div className="flex items-center flex-wrap gap-5! sm:gap-7! pt-3! border-t border-white/10 mt-1!">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  2+ <span className="text-[var(--secondary)] text-sm font-bold">Years</span>
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">Experience</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  35+ <span className="text-[var(--secondary)] text-sm font-bold">Delivered</span>
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">Projects Done</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  20+ <span className="text-[var(--secondary)] text-sm font-bold">Tech</span>
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">Stacks Mastered</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Laptop 300 Frames Canvas (Transitions to center on scroll) */}
          <div
            className="relative flex items-center justify-center transition-transform duration-75 ease-out will-change-transform z-30"
            style={{
              transform: isDesktop
                ? `translateX(calc(-${easedCenter * 50}% - ${easedCenter * 1.5}rem)) scale(${1 + easedCenter * 0.14})`
                : `translateY(-${easedCenter * 14}vh) scale(${1 + easedCenter * 0.10})`,
            }}
          >
            {/* Stats — positioned organically using inline style with raw values
                so each one sits in a genuinely different spot, not a mirrored grid */}

            {/* STAT 1 — top-left area, slightly above and to the left, smaller number */}
            <div
              className="absolute z-40 select-none transition-all duration-150 ease-out"
              style={{
                top: "10%",
                left: "-14%",
                opacity: statsOpacity,
                transform: `translate(${(1 - statsEased) * -32}px, ${(1 - statsEased) * -20}px) scale(${statsScale})`,
                pointerEvents: statsPointerEvents,
              }}
            >
              <p className="text-[11px]! font-semibold tracking-[0.18em]! uppercase text-[var(--secondary)] mb-0.5!">Experience</p>
              <p className="text-5xl! sm:text-6xl! font-black text-white leading-none tracking-tight" style={{ textShadow: "0 0 40px rgba(0,194,255,0.25)" }}>
                2+
              </p>
              <p className="text-[13px]! text-zinc-300 font-medium mt-1!">Years in production</p>
            </div>

            {/* STAT 2 — upper-right, higher up, biggest number — most prominent */}
            <div
              className="absolute z-40 select-none transition-all duration-150 ease-out text-right"
              style={{
                top: "-12%",
                right: "-8%",
                opacity: statsOpacity,
                transform: `translate(${(1 - statsEased) * 28}px, ${(1 - statsEased) * -26}px) scale(${statsScale})`,
                pointerEvents: statsPointerEvents,
              }}
            >
              <p className="text-[11px]! font-semibold tracking-[0.18em]! uppercase text-emerald-400 mb-0.5!">Projects</p>
              <p className="text-6xl! sm:text-7xl! font-black text-white leading-none tracking-tight" style={{ textShadow: "0 0 40px rgba(52,211,153,0.2)" }}>
                35+
              </p>
              <p className="text-[13px]! text-zinc-300 font-medium mt-1!">Delivered globally</p>
            </div>

            {/* STAT 3 — bottom-left, pushed further left, mid-size */}
            <div
              className="absolute z-40 select-none transition-all duration-150 ease-out"
              style={{
                bottom: "8%",
                left: "-18%",
                opacity: statsOpacity,
                transform: `translate(${(1 - statsEased) * -24}px, ${(1 - statsEased) * 22}px) scale(${statsScale})`,
                pointerEvents: statsPointerEvents,
              }}
            >
              <p className="text-[11px]! font-semibold tracking-[0.18em]! uppercase text-violet-400 mb-0.5!">Tech Stack</p>
              <p className="text-5xl! sm:text-6xl! font-black text-white leading-none tracking-tight" style={{ textShadow: "0 0 40px rgba(167,139,250,0.2)" }}>
                20+
              </p>
              <p className="text-[13px]! text-zinc-300 font-medium mt-1!">Tools mastered</p>
            </div>

            {/* STAT 4 — bottom-right, not mirroring stat 3, sits closer to center-bottom */}
            <div
              className="absolute z-40 select-none transition-all duration-150 ease-out text-right"
              style={{
                bottom: "-10%",
                right: "-4%",
                opacity: statsOpacity,
                transform: `translate(${(1 - statsEased) * 20}px, ${(1 - statsEased) * 28}px) scale(${statsScale})`,
                pointerEvents: statsPointerEvents,
              }}
            >
              <p className="text-[11px]! font-semibold tracking-[0.18em]! uppercase text-[var(--secondary)] mb-0.5!">Reliability</p>
              <p className="text-4xl! sm:text-5xl! font-black text-white leading-none tracking-tight" style={{ textShadow: "0 0 40px rgba(0,194,255,0.2)" }}>
                100%
              </p>
              <p className="text-[13px]! text-zinc-300 font-medium mt-1!">On-time delivery</p>
            </div>

            {/* Canvas */}
            <div className="relative w-full max-w-[720px] lg:max-w-[780px] aspect-[16/9] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain block drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] drop-shadow-[0_0_35px_rgba(0,194,255,0.12)]"
                aria-label="3D Laptop Showcase"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
