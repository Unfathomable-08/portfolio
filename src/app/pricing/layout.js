import { pricingStructuredData, siteUrl } from "@/lib/schema";

const pageUrl = `${siteUrl}/pricing`;

export const metadata = {
  title: "Transparent Project Pricing & Cost Calculator | Dev Muhammad",
  description:
    "Explore transparent project-based pricing for websites, mobile apps, POS, and custom software in Karachi & worldwide. Calculate your instant quote with no hidden fees.",
  keywords: [
    "Web Development Pricing Pakistan",
    "Website Cost Calculator",
    "Mobile App Development Cost Karachi",
    "E-commerce Website Price Pakistan",
    "Custom Software Pricing",
    "POS System Price Karachi",
    "CRM Development Cost",
    "Full Stack Developer Rates Pakistan",
    "Next.js Developer Rates",
    "Dev Muhammad Pricing",
    "Transparent Freelance Rates",
    "Software Project Cost Estimator",
    "Pakistan App Developer Price",
    "Restaurant Website Cost Pakistan",
    "ERP Software Price Karachi",
    "Multi-Vendor Marketplace Cost",
  ],
  authors: [{ name: "Muhammad", url: siteUrl }],
  creator: "Muhammad",
  publisher: "Muhammad",
  openGraph: {
    title: "Transparent Project Pricing & Cost Calculator | Dev Muhammad",
    description:
      "Explore transparent project-based pricing for websites, mobile apps, POS, and custom software in Karachi & worldwide. Calculate your instant quote with no hidden fees.",
    url: pageUrl,
    siteName: "Muhammad Portfolio",
    type: "website",
    images: [
      {
        url: `${siteUrl}/pricing-og.png`,
        width: 1200,
        height: 630,
        alt: "Dev Muhammad - Transparent Project-Based Pricing & Cost Calculator",
      },
      {
        url: `${siteUrl}/og-square.png`,
        width: 1200,
        height: 1200,
        alt: "Dev Muhammad - Transparent Project Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Project Pricing & Cost Calculator | Dev Muhammad",
    description:
      "Explore transparent project-based pricing for websites, mobile apps, POS, and custom software in Karachi & worldwide. Calculate your instant quote with no hidden fees.",
    images: [`${siteUrl}/pricing-og.png`],
  },
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PricingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
