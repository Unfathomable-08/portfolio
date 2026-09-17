import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Web Development Services | Dev Muhammad — Next.js & React Expert",
  description:
    "Professional web development services by Dev Muhammad. High-performance, SEO-optimised websites and full-stack applications built with React, Next.js, Node.js and more.",
  keywords: [
    "Web Development",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Dev Muhammad",
    "Web Developer Karachi",
    "Web Developer Pakistan",
  ],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/web-development",
  },
  openGraph: {
    title: "Web Development Services | Dev Muhammad",
    description:
      "Professional web development services — fast, scalable, SEO-optimised web products.",
    url: "https://dev-muhammad.vercel.app/web-development",
    siteName: "Muhammad Portfolio",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Web Development Services — Dev Muhammad",
      },
    ],
  },
};

export default function WebDevelopmentLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

