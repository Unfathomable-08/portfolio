"use client";

import Hero from "@/components/services/Hero";
import Services from "@/components/services/Services";
import Projects from "@/app/(components)/Projects";
import WhyChooseMe from "@/components/services/WhyChooseMe";
import FAQ from "@/app/(components)/FAQ";
import Contact from "@/components/Contact";
import {
  aiDevTechStack,
  aiDevStats,
  aiDevServices,
  aiDevReasons,
} from "@/data/services/ai-development";
import { aiDevFAQs } from "@/data/faqs";

export default function AiDevelopmentPage() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero
        id="ai-hero"
        headline={
          <>
            Engineering{" "}
            <span className="text-[var(--secondary)]!">
              Autonomous AI Agents
            </span>
            <br />
            & Intelligent Workflows
          </>
        }
        subheadline="From grounded RAG knowledge retrieval systems to autonomous multi-agent tool orchestration, I build production-ready AI solutions that automate workflows and eliminate manual effort."
        techStack={aiDevTechStack}
        stats={aiDevStats}
        framesFolder="robot-frames"
        totalFrames={150}
        canvasAlt="3D AI & Agent Systems Showcase"
        primaryCta={{ text: "Start an AI Project", href: "/#contact" }}
        secondaryCta={{ text: "View AI Projects", href: "/#projects" }}
      />
      <Services
        id="services"
        title="AI Agents & Development Services"
        subtitle="Services"
        services={aiDevServices}
        ctaText="Start an AI Project"
        ctaLink="/#contact"
      />
      <Projects showTabs={false} defaultTab="AI Agents" />
      <WhyChooseMe
        id="why-choose-me"
        title="Quality & Reliability"
        subtitle="Why Choose Me"
        reasons={aiDevReasons}
      />
      <FAQ data={aiDevFAQs} />
      <Contact />
    </main>
  );
}
