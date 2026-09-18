"use client";

import Hero from "@/components/services/Hero";
import Services from "@/components/services/Services";
import Projects from "@/app/(components)/Projects";
import WhyChooseMe from "@/components/services/WhyChooseMe";
import FAQ from "@/app/(components)/FAQ";
import Contact from "@/components/Contact";
import {
  appDevTechStack,
  appDevStats,
  appDevServices,
  appDevReasons,
} from "@/data/services/app-development";
import { appDevFAQs } from "@/data/faqs";

export default function AppDevelopmentPage() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero
        id="app-hero"
        headline={
          <>
            Engineering{" "}
            <span className="text-[var(--secondary)]!">
              High-Performance
            </span>
            <br />
            Mobile Applications
          </>
        }
        subheadline="From intuitive, fluid mobile interfaces to production-grade mobile architectures, I build fast, cross-platform iOS & Android apps using React Native and Expo."
        techStack={appDevTechStack}
        stats={appDevStats}
        framesFolder="mobile-frames"
        totalFrames={70}
        canvasAlt="3D Mobile Showcase"
        primaryCta={{ text: "Start a Project", href: "/#contact" }}
        secondaryCta={{ text: "View Portfolio", href: "/#projects" }}
      />
      <Services
        id="services"
        title="Mobile App Development Services"
        subtitle="Services"
        services={appDevServices}
        ctaText="Start a Project"
        ctaLink="/#contact"
      />
      <Projects showTabs={false} defaultTab="Mobile Apps" />
      <WhyChooseMe
        id="why-choose-me"
        title="Quality & Reliability"
        subtitle="Why Choose Me"
        reasons={appDevReasons}
      />
      <FAQ data={appDevFAQs} />
      <Contact />
    </main>
  );
}
