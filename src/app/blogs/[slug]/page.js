"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { blogs, fetchBlogContent } from "@/data/blogs";
import Hero from "@/app/blogs/(components)/Hero";
import MarkdownRenderer from "@/app/blogs/(components)/Renderer";
import AuthorBio from "@/app/blogs/(components)/AuthorBio";

export default function BlogDetailPage({ params }) {
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug;

  const blog = blogs.find((b) => b.url === slug) || blogs[0];
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blog?.file) {
      setLoading(true);
      fetchBlogContent(blog.file).then((text) => {
        setContent(text);
        setLoading(false);
      });
    }
  }, [blog?.file]);

  if (!blog) {
    return (
      <main className="min-h-screen bg-[var(--primary)] text-white flex flex-col items-center justify-center p-4!">
        <h1 className="text-2xl font-bold mb-4!">Blog Post Not Found</h1>
        <Link
          href="/blogs"
          className="text-xs font-semibold text-[var(--secondary)]! hover:underline"
        >
          &larr; Back to all articles
        </Link>
      </main>
    );
  }

  return (
    <main className="w-screen overflow-x-hidden bg-[var(--primary)] text-white">
      <Navbar />

      {/* Hero Section */}
      <Hero blog={blog} />

      {/* Main Article Section */}
      <article id="article-content" className="max-w-6xl mx-auto! px-4! sm:px-8! md:px-12! py-16!">
        {/* Main Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#212121] border border-white/10 rounded-2xl px-4! sm:px-8! md:px-10! py-6! sm:py-12! md:py-14! backdrop-blur-md shadow-2xl min-h-[300px]"
        >
          {loading ? (
            <div className="space-y-4 py-8 animate-pulse">
              <div className="h-8 bg-white/10 rounded w-3/4" />
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-5/6" />
              <div className="h-32 bg-white/5 rounded-xl mt-6" />
              <div className="h-4 bg-white/10 rounded w-4/5" />
            </div>
          ) : (
            <MarkdownRenderer content={content} />
          )}
        </motion.div>

        {/* Author Bio Box */}
        <AuthorBio />

        {/* Bottom Back Button */}
        <div className="mt-12! text-center">
          <Link
            href="/blogs"
            className="border py-3! px-8! text-sm rounded-md border-[var(--secondary)] bg-[var(--hover)] hover:bg-[var(--secondary)] hover:text-[#071014] font-semibold transition inline-flex items-center gap-2 shadow-lg"
          >
            <i className="fas fa-arrow-left text-xs" />
            <span>Explore More Articles</span>
          </Link>
        </div>
      </article>

      <Contact />
      <Footer />
    </main>
  );
}
