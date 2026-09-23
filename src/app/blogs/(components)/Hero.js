"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative w-full h-svh flex flex-col justify-between pt-20! pb-12! px-4! sm:px-8! md:px-16! overflow-hidden">
      {/* Background Image with Dark Glassmorphism Overlay */}
      {blog?.image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.name || "Blog cover"}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Multi-layered gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071014]/90 via-[#071014]/80 to-[var(--primary)]" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#071014]/50 to-[#071014]/95" />
        </div>
      )}

      {/* Hero Center / Content */}
      <div className="max-w-7xl mx-auto! w-full my-auto! py-8!">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4!">
            {blog?.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[var(--secondary)]/15 text-[var(--secondary)]! border border-[var(--secondary)]/40 text-xs font-semibold px-3.5! py-1! rounded-full backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6! drop-shadow-lg">
            {blog?.name}
          </h1>

          {/* Description Subtitle */}
          {blog?.description && (
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6! max-w-3xl">
              {blog.description}
            </p>
          )}

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4! border border-white/35 text-xs text-gray-300 bg-black/30 backdrop-blur-md px-4! rounded-xl">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt="Dev Muhammad"
                  width={28}
                  height={28}
                  className="rounded-full bg-black border border-[var(--secondary)]/40"
                />
                <span className="text-white font-medium">Dev Muhammad</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <i className="far fa-calendar-alt text-[var(--secondary)]!" />
                <time dateTime={blog?.date}>
                  {blog?.date
                    ? new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <i className="far fa-clock text-[var(--secondary)]!" />
                <span>{blog?.readTime} min read</span>
              </div>
            </div>

            {/* Share / Copy button */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-[var(--secondary)]! transition-colors cursor-pointer border border-white/15 hover:border-[var(--secondary)]/40 px-3.5! py-1.5! rounded-md bg-white/5 hover:bg-white/10"
            >
              <i className={`fas ${copied ? "fa-check text-green-400" : "fa-link"}`} />
              <span>{copied ? "Link Copied!" : "Share Article"}</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-7xl mx-auto! w-full flex justify-center pt-4!">
        <a
          href="#article-content"
          className="inline-flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-[var(--secondary)]! transition group"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase opacity-75 group-hover:opacity-100">
            Read Article
          </span>
          <i className="fas fa-chevron-down animate-bounce text-sm text-[var(--secondary)]!" />
        </a>
      </div>
    </section>
  );
}
