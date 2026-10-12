import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { getBlogContent } from "@/lib/blogServer";
import Hero from "@/app/blogs/(components)/Hero";
import MarkdownRenderer from "@/app/blogs/(components)/Renderer";
import AuthorBio from "@/app/blogs/(components)/AuthorBio";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.url === slug);

  if (!blog) {
    notFound();
  }

  const content = getBlogContent(blog.file);

  return (
    <main className="w-screen overflow-x-hidden bg-[var(--primary)] text-white">
      <Navbar />

      {/* Hero Section */}
      <Hero blog={blog} />

      {/* Main Article Section */}
      <article id="article-content" className="max-w-6xl mx-auto! px-4! sm:px-8! md:px-12! py-16!">
        {/* Main Content Body: Server-rendered markdown directly in HTML */}
        <div className="bg-[#212121] border border-white/10 rounded-2xl px-4! sm:px-8! md:px-10! py-6! sm:py-12! md:py-14! backdrop-blur-md shadow-2xl min-h-[300px]">
          <MarkdownRenderer content={content} />
        </div>

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
