import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aiDevStructuredData } from "@/lib/schema";

export const metadata = {
  title: "AI Development & Autonomous AI Agents in Karachi & Pakistan by Dev Muhammad",
  description:
    "Professional AI agent development, RAG knowledge retrieval systems, and LLM automation services in Karachi and worldwide by Dev Muhammad. High-performance LangChain & LangGraph intelligent solutions.",
  keywords: [
    "AI Development",
    "AI Agents",
    "AI Agent Development",
    "LangChain Developer",
    "LangGraph Developer",
    "RAG Systems",
    "AI Development Services in Karachi",
    "AI Developer in Pakistan",
    "Autonomous AI Agents",
    "LLM Integration",
    "Dev Muhammad",
    "Developer Muhammad",
  ],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/ai-development",
  },
  openGraph: {
    title: "AI Development & Autonomous AI Agents in Karachi & Pakistan by Dev Muhammad",
    description:
      "Professional AI agent development, RAG knowledge retrieval systems, and LLM automation services in Karachi and worldwide by Dev Muhammad. High-performance LangChain & LangGraph intelligent solutions.",
    url: "https://dev-muhammad.vercel.app/ai-development",
    siteName: "Muhammad Portfolio",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "AI Development & Autonomous AI Agents in Karachi & Pakistan — Dev Muhammad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development & Autonomous AI Agents in Karachi & Pakistan by Dev Muhammad",
    description:
      "Professional AI agent development, RAG knowledge retrieval systems, and LLM automation services in Karachi and worldwide by Dev Muhammad. High-performance LangChain & LangGraph intelligent solutions.",
    images: ["https://dev-muhammad.vercel.app/twitter.png"],
  },
};

export default function AiDevelopmentLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiDevStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
