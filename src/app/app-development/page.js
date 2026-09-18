"use client";

import Hero from "@/app/web-development/(components)/Hero";
import Services from "@/app/web-development/(components)/Services";
import Projects from "@/app/(components)/Projects";
// import Packages from "@/app/web-development/(components)/Packages";
import WhyChooseMe from "@/app/web-development/(components)/WhyChooseMe";
import FAQ from "@/app/(components)/FAQ";
import Contact from "@/components/Contact";
import {
  appDevTechStack,
  appDevStats,
  appDevServices,
  // appDevPackages,
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
      {/* Packages section commented out for now */}
      {/* <Packages
        id="packages"
        title="Estimated Packages"
        subtitle="Packages"
        note="* Note: These are estimated prices for typical client requirements. The final price depends on your specific requirements, project scope, and features."
        packages={appDevPackages}
        ctaText="Get a Quote"
        ctaLink="/#contact"
      /> */}

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
