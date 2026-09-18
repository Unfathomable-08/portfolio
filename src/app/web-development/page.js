import WebDevHero from "@/app/web-development/(components)/Hero";
import WebDevServices from "@/app/web-development/(components)/Services";
import Projects from "@/app/(components)/Projects";
import WebDevPackages from "@/app/web-development/(components)/Packages";
import WhyChooseMe from "@/app/web-development/(components)/WhyChooseMe";
import FAQ from "@/app/(components)/FAQ";
import { webDevFAQs } from "@/data/faqs";
import Contact from "@/components/Contact";

export default function WebDevelopmentPage() {
  return (
    <main className="w-full overflow-x-clip">
      <WebDevHero />
      <WebDevServices />
      <Projects showTabs={false} defaultTab="Website" />
      <WebDevPackages />
      <WhyChooseMe />
      <FAQ data={webDevFAQs} />
      <Contact />
    </main>
  );
}

