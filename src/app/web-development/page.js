"use client";

import WebDevHero from "@/components/services/Hero";
import WebDevServices from "@/components/services/Services";
import Projects from "@/app/(components)/Projects";
import WhyChooseMe from "@/components/services/WhyChooseMe";
import FAQ from "@/app/(components)/FAQ";
import Contact from "@/components/Contact";
import {
  webDevTechStack,
  webDevStats,
  webDevServices,
  webDevReasons,
} from "@/data/services/web-development";
import { webDevFAQs } from "@/data/faqs";

export default function WebDevelopmentPage() {
  return (
    <main className="w-full overflow-x-clip">
      <WebDevHero
        id="wd-hero"
        headline={
          <>
            Crafting{" "}
            <span className="text-[var(--secondary)]!">
              Exceptional
            </span>
            <br />
            Web Experiences
          </>
        }
        subheadline="From pixel-perfect UIs to robust full-stack architectures, I build fast, scalable, SEO-optimised web products using the modern JavaScript ecosystem."
        techStack={webDevTechStack}
        stats={webDevStats}
        framesFolder="laptop-frames"
        totalFrames={150}
        canvasAlt="3D Laptop Showcase"
        primaryCta={{ text: "Start a Project", href: "/#contact" }}
        secondaryCta={{ text: "View Portfolio", href: "/#projects" }}
      />
      <WebDevServices
        id="services"
        title="Web Development Services"
        subtitle="Services"
        services={webDevServices}
        ctaText="Start a Project"
        ctaLink="/#contact"
      />
      <Projects showTabs={false} defaultTab="Website" />
      <WhyChooseMe
        id="why-choose-me"
        title="Quality & Reliability"
        subtitle="Why Choose Me"
        reasons={webDevReasons}
      />
      <FAQ data={webDevFAQs} />
      <Contact />
    </main>
  );
}


