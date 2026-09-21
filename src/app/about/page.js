import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NeonTrail from "@/components/ui/NeonTrail";
import AboutHero from "@/app/about/(components)/Hero";
import AboutJourney from "@/app/about/(components)/Journey";
import AboutPhilosophy from "@/app/about/(components)/Philosophy";

export default function AboutPage() {
  return (
    <main className="w-screen overflow-x-hidden bg-[var(--primary)] text-white">
      <NeonTrail />
      <Navbar />
      <AboutHero />
      <AboutJourney />
      <AboutPhilosophy />
      <Contact />
      <Footer />
    </main>
  );
}
