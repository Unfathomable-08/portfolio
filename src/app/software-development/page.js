"use client";

import Hero from "@/components/services/Hero";
import Services from "@/components/services/Services";
import Projects from "@/app/(components)/Projects";
import WhyChooseMe from "@/components/services/WhyChooseMe";
import FAQ from "@/app/(components)/FAQ";
import Contact from "@/components/Contact";
import {
  softwareDevTechStack,
  softwareDevStats,
  softwareDevServices,
  softwareDevReasons,
} from "@/data/services/software-development";
import { softwareDevFAQs } from "@/data/faqs";

export default function SoftwareDevelopmentPage() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero
        id="software-hero"
        headline={
          <>
            Engineering{" "}
            <span className="text-[var(--secondary)]!">
              Scalable Software
            </span>
            <br />
            & Management Systems
          </>
        }
        subheadline="From cross-platform desktop applications to multi-branch POS and enterprise CRM systems, I build fast, offline-first, production-ready software solutions that empower business operations."
        techStack={softwareDevTechStack}
        stats={softwareDevStats}
        framesFolder="pc-frames"
        totalFrames={300}
        canvasAlt="3D Software & Desktop Systems Showcase"
        primaryCta={{ text: "Start a Software Project", href: "/#contact" }}
        secondaryCta={{ text: "View Software Projects", href: "/#projects" }}
      />
      <Services
        id="services"
        title="Desktop Software & System Services"
        subtitle="Services"
        services={softwareDevServices}
        ctaText="Start a Software Project"
        ctaLink="/#contact"
      />
      <Projects showTabs={false} defaultTab="Software" />
      <WhyChooseMe
        id="why-choose-me"
        title="Quality & Reliability"
        subtitle="Why Choose Me"
        reasons={softwareDevReasons}
      />
      <FAQ data={softwareDevFAQs} />
      <Contact />
    </main>
  );
}
