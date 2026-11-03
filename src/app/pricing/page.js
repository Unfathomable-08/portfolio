import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/app/(components)/FAQ";
import { pricingFAQs } from "@/data/faqs";
import PricingHero from "./(components)/Hero";
import PricingExplorer from "./(components)/PricingExplorer";

export default function PricingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[var(--primary)] text-white">
      <Navbar />
      <PricingHero />
      <PricingExplorer />
      <FAQ
        data={pricingFAQs}
        title="Frequently Asked Questions About Pricing"
        subtitle="Transparent Rates"
        id="pricing-faq"
      />
      <Contact />
      <Footer />
    </main>
  );
}
