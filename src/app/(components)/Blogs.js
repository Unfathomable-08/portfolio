"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";

export default function Blogs() {
  return (
    <section id="blogs" className="w-full bg-[var(--primary)] px-4! sm:px-8! md:px-20! py-20! relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-14!"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="font-semibold text-xs tracking-[2px] uppercase text-[var(--secondary)]! mb-2!">
          Articles &amp; Insights
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          Latest from the Blog
        </h2>
      </motion.div>

      {/* Blog Cards Grid (4 Blogs) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {blogs?.slice(0, 3).map((blog, index) => {
          const blogUrl = `/blogs/${blog.url}`;

          return (
            <motion.article
              key={blog.url || index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: false, amount: 0.15 }}
              className="relative z-1 group rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 hover:border-[var(--secondary)]/40 transition-all duration-300 flex flex-col justify-between p-4! sm:p-5! shadow-lg hover:shadow-[0_0_25px_rgba(0,194,255,0.12)]"
            >
              <div>
                {/* Blog Cover Image */}
                <Link
                  href={blogUrl}
                  className="block relative w-full aspect-video rounded-lg overflow-hidden mb-4! border border-white/10 bg-black/40"
                  aria-label={`Read ${blog.name}`}
                >
                  <Image
                    src={blog.image || "/project/sable.png"}
                    alt={blog.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </Link>

                {/* Metadata Row: Date & Tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3!">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <i className="far fa-calendar-alt text-[var(--secondary)] text-xs" />
                    <time dateTime={blog.date}>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {blog.tags?.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/30 text-[10px] font-medium px-2! py-0.5! rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[var(--secondary)]! transition-colors duration-200 line-clamp-2 mb-2!">
                  <Link href={blogUrl}>
                    {blog.name}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--tertiary)] line-clamp-3 leading-relaxed mb-4!">
                  {blog.description}
                </p>
              </div>

              {/* Read Article CTA */}
              <div className="pt-3! border-t border-white/5 flex items-center justify-between">
                <Link
                  href={blogUrl}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--secondary)] hover:text-white transition-colors duration-200 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <i className="fas fa-arrow-right text-[10px]" />
                </Link>

                <span className="text-[11px] text-gray-400">
                  {Math.max(2, Math.ceil((blog.content?.length || 500) / 450))} min read
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* View All Button */}
      <motion.div
        className="text-center mt-12!"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Link
          href="/blogs"
          className="border py-2.5! px-6! text-sm rounded-sm border-[var(--secondary)] bg-[var(--hover)] hover:bg-[var(--secondary)] hover:text-[#071014] font-medium transition inline-flex items-center gap-2 shadow-[0_0_20px_rgba(0,194,255,0.15)]"
        >
          <span>Explore All Articles</span>
          <i className="fas fa-arrow-right text-xs" />
        </Link>
      </motion.div>
    </section>
  );
}
