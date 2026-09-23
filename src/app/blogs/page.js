"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set(["All"]);
    blogs.forEach((b) => {
      if (Array.isArray(b.tags)) {
        b.tags.forEach((t) => tagsSet.add(t));
      }
    });
    return Array.from(tagsSet);
  }, []);

  // Filter blogs based on search query and selected tag
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesTag =
        selectedTag === "All" ||
        (Array.isArray(blog.tags) && blog.tags.includes(selectedTag));

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        blog.name?.toLowerCase().includes(query) ||
        blog.description?.toLowerCase().includes(query) ||
        (Array.isArray(blog.tags) &&
          blog.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery]);

  return (
    <main className="w-screen overflow-x-hidden bg-[var(--primary)] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32! pb-14! px-4! sm:px-8! md:px-20! text-center max-w-5xl mx-auto!">
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-semibold text-xs tracking-[4px] uppercase text-[var(--secondary)]! mb-3!"
        >
          Articles &amp; Engineering Notes
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6!"
        >
          Insights on <span className="text-[var(--secondary)]">Code</span>, AI &amp; Architecture
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-[var(--tertiary)] max-w-2xl mx-auto! leading-relaxed"
        >
          Deep dives into modern full-stack development, autonomous AI workflows, state architecture, and building production-ready applications.
        </motion.p>
      </section>

      {/* Controls: Search Bar & Tag Filter Pills */}
      <section className="max-w-7xl mx-auto! px-4! sm:px-8! md:px-12! mb-12!">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Tag Filter Pills */}
          <div
            role="tablist"
            aria-label="Blog categories"
            className="flex flex-wrap w-fit max-w-full gap-1 rounded-lg border border-white/20 bg-black/30 p-1.5! shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
          >
            {allTags.map((tag) => {
              const isActive = selectedTag === tag;
              const count =
                tag === "All"
                  ? blogs.length
                  : blogs.filter((b) => b.tags?.includes(tag)).length;

              return (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedTag(tag)}
                  className={`cursor-pointer flex shrink-0 items-center gap-2 rounded-sm md:rounded-md px-3! py-1.5! md:py-2! text-xs sm:text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[var(--secondary)] ${
                    isActive
                      ? "bg-[var(--secondary)] text-[#071014] shadow-[0_0_24px_rgba(0,194,255,0.18)]"
                      : "text-gray-300 bg-[var(--primary)] border border-white/0 hover:border-[var(--secondary)]/35 hover:text-white"
                  }`}
                >
                  <span className={isActive ? "text-[#071014] font-semibold" : "text-inherit"}>
                    {tag}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`rounded-full w-4 h-4 flex justify-center items-center text-[10px] leading-none ${
                      isActive ? "bg-[#071014]/25 text-[#071014]" : "bg-white/25 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1e1e1e] border border-white/20 focus:border-[var(--secondary)] rounded-md pl-9! pr-4! py-2! text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs cursor-pointer"
                aria-label="Clear search"
              >
                <i className="fas fa-times" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto! px-4! sm:px-8! md:px-12! pb-24!">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20! bg-[#1e1e1e]/40 rounded-xl border border-white/10">
            <i className="fas fa-newspaper text-4xl text-gray-500 mb-3!" />
            <p className="text-lg font-semibold text-white mb-1!">No articles found</p>
            <p className="text-xs text-[var(--tertiary)] mb-4!">
              Try changing your search terms or filter tag.
            </p>
            <button
              onClick={() => {
                setSelectedTag("All");
                setSearchQuery("");
              }}
              className="text-xs font-semibold text-[var(--secondary)] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog, index) => {
                const blogUrl = `/blogs/${blog.url}`;

                return (
                  <motion.article
                    layout
                    key={blog.url || index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 hover:border-[var(--secondary)]/40 transition-all duration-300 flex flex-col justify-between p-4! sm:p-6! shadow-lg hover:shadow-[0_0_25px_rgba(0,194,255,0.12)]"
                  >
                    <div>
                      {/* Thumbnail */}
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

                      {/* Meta */}
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
                          {blog.tags?.slice(0, 3).map((tag, idx) => (
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
                      <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[var(--secondary)]! transition-colors duration-200 line-clamp-2 mb-2!">
                        <Link href={blogUrl}>
                          {blog.name}
                        </Link>
                      </h2>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[var(--tertiary)] line-clamp-3 leading-relaxed mb-4!">
                        {blog.description}
                      </p>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4! border-t border-white/5 flex items-center justify-between">
                      <Link
                        href={blogUrl}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--secondary)] hover:text-white transition-colors duration-200 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read Article</span>
                        <i className="fas fa-arrow-right text-[10px]" />
                      </Link>

                      <span className="text-[11px] text-gray-400">
                        {blog.readTime ? `${blog.readTime} min read` : "5 min read"}
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
