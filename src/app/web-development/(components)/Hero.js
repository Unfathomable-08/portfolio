"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
const TOTAL_FRAMES = 150;

export default function WebDevHero({
  headline,
  subheadline,
  techStack,
  stats,
  primaryCta,
  secondaryCta,
  totalFrames = TOTAL_FRAMES,
  framesFolder = "laptop-frames",
  getFrameUrl,
  canvasAlt,
  id,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef({});
  const lastDrawnFrameRef = useRef(1);
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const animFrameIdRef = useRef(null);

  const resolveFrameUrl = useCallback(
    (index) => {
      if (getFrameUrl) return getFrameUrl(index);
      const pad = String(index).padStart(3, "0");
      return `/${framesFolder}/ezgif-frame-${pad}.jpg`;
    },
    [getFrameUrl, framesFolder]
  );


  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // Responsive check for desktop transform calculation
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
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
        priorityImg.src = resolveFrameUrl(frameIndex);
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
  }, [resolveFrameUrl]);

  // Preload frames progressively
  useEffect(() => {
    let isCancelled = false;

    // 1. Immediately load frame 1 for instant display
    const firstImg = new window.Image();
    firstImg.src = resolveFrameUrl(1);
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
      if (isCancelled || batchIndex > totalFrames) return;

      const end = Math.min(batchIndex + batchSize, totalFrames + 1);
      for (let i = batchIndex; i < end; i++) {
        const img = new window.Image();
        img.src = resolveFrameUrl(i);
        const onDone = () => {
          if (isCancelled) return;
          imagesRef.current[i] = img;
        };
        img.onload = onDone;
        img.onerror = onDone;
      }
      batchIndex = end;

      if (batchIndex <= totalFrames) {
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
  }, [renderFrame, resolveFrameUrl, totalFrames]);


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
        totalFrames,
        Math.max(1, Math.round(progress * (totalFrames - 1)) + 1)
      );

      targetFrameRef.current = targetIndex;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames]);

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
      id={id}
      className="relative h-[280svh] sm:h-[350svh] md:h-[420svh] w-full bg-black text-white"
    >
      {/* Sticky Frame Viewer */}
      <div className="sticky top-0 h-svh w-full flex items-center overflow-hidden bg-black">
        {/* Main grid */}
        <div className="relative z-20 w-full px-3! sm:px-8! md:px-16! lg:px-20! grid md:grid-cols-2 items-center gap-6! md:gap-12! pt-24! pb-16!">
          {/* LEFT - Text content */}
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
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
              {headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-[var(--tertiary)] leading-relaxed max-w-xl">
              {subheadline}
            </p>

            {/* Tech icons */}
            <div className="flex items-center flex-wrap gap-4! pt-1!">
              {techStack?.map((t) => {
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
              {primaryCta && (
                <Link
                  href={primaryCta.href || "/#contact"}
                  className="inline-flex items-center gap-2! px-6! py-2.5! rounded-full font-semibold text-sm bg-[var(--secondary)] hover:bg-[var(--hover)] transition-all duration-300 text-[var(--primary)] shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:scale-105"
                >
                  {primaryCta.text || "Start a Project"}
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href || "/#projects"}
                  className="inline-flex items-center gap-2! px-6! py-2! rounded-full font-semibold text-sm border border-[var(--secondary)] text-white hover:border-[var(--secondary)] hover:bg-[var(--secondary)]/10 transition-all duration-300"
                >
                  {secondaryCta.text || "View Portfolio"}
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT - 3D Frames Canvas*/}
          <div
            className="relative flex items-center justify-center transition-transform duration-75 ease-out will-change-transform z-30"
            style={{
              transform: isDesktop
                ? `translateX(calc(-${easedCenter * 50}% - ${easedCenter * 1.5}rem)) scale(${1 + easedCenter * 0.15})`
                : `translateY(-${easedCenter * 25}vh) scale(${1 + easedCenter * 0.35})`,
            }}
          >
            {/* Canvas */}
            <div className="relative w-full max-w-[720px] lg:max-w-[780px] aspect-[16/9] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain block drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] drop-shadow-[0_0_35px_rgba(0,194,255,0.12)]"
                aria-label={canvasAlt}
              />
              {/* Edge & Corner Vignette*/}
              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 45%, rgba(0, 0, 0, 0.45) 70%, #000000 95%), linear-gradient(to right, #000000 0%, transparent 12%, transparent 88%, #000000 100%), linear-gradient(to bottom, #000000 0%, transparent 12%, transparent 88%, #000000 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* FULLSCREEN STATS OVERLAY */}
        <div className="absolute inset-0 pointer-events-none z-40 w-full h-full">
          {stats?.map((stat) => (

            <div
              key={stat.id}
              className={`absolute select-none transition-all duration-150 ease-out max-w-[155px] sm:max-w-[200px] md:max-w-[240px] ${stat.align}`}
              style={{
                ...(isDesktop ? stat.desktopPosition : stat.mobilePosition),
                opacity: statsOpacity,
                transform: `translate(${(1 - statsEased) * (isDesktop ? stat.desktopDelta.x : stat.mobileDelta.x)}px, ${(1 - statsEased) * (isDesktop ? stat.desktopDelta.y : stat.mobileDelta.y)}px) scale(${statsScale})`,
                pointerEvents: statsPointerEvents,
              }}
            >
              <p className={`text-[10px]! sm:text-[11px]! font-semibold tracking-wider uppercase ${stat.labelColor} mb-0.5!`}>
                {stat.label}
              </p>
              <p
                className="text-2xl! sm:text-4xl! md:text-5xl! font-bold text-[var(--secondary)]! leading-none tracking-tighter"
                style={{ textShadow: stat.shadow }}
              >
                {stat.value}
              </p>
              <p className="text-[10px]! sm:text-[12px]! text-zinc-300 mt-1! leading-snug line-clamp-2 sm:line-clamp-none">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

