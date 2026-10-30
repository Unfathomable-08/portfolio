import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "./(components)/Hero";
import PricingExplorer from "./(components)/PricingExplorer";

export default function PricingPage() {
  return (
    <main className="w-full bg-[var(--primary)]">
      <Navbar />
      <PricingHero />
      <PricingExplorer />
      <Footer />
    </main>
  );
}

