import Navbar from "@/components/Navbar";
import Projects from "@/app/(components)/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NeonTrail from "@/components/ui/NeonTrail";
import PortfolioHero from "@/app/portfolio/(components)/Hero";
import PortfolioCTA from "@/app/portfolio/(components)/CTA";

export default function PortfolioPage() {
  return (
    <main className="w-screen overflow-x-hidden bg-[var(--primary)] text-white">
      <NeonTrail />
      <Navbar />
      <PortfolioHero />
      <Projects showTabs={true} defaultTab="All" />
      <PortfolioCTA />
      <Contact />
      <Footer />
    </main>
  );
}
