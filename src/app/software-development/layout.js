import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { softwareDevStructuredData } from "@/lib/schema";

export const metadata = {
  title: "Desktop Software Development & Management Systems in Karachi & Pakistan by Dev Muhammad",
  description:
    "Professional desktop software development, custom POS systems, enterprise CRM platforms, and cross-platform Electron applications in Karachi and worldwide by Dev Muhammad.",
  keywords: [
    "Software Development",
    "Desktop Software Development",
    "Desktop Application Developer",
    "Electron Developer",
    "Custom POS Development",
    "CRM Development",
    "Enterprise Software Solutions",
    "Software Development Services in Karachi",
    "Software Developer in Pakistan",
    "Offline-First Software",
    "Cross-Platform Software",
    "Dev Muhammad",
    "Developer Muhammad",
  ],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/software-development",
  },
  openGraph: {
    title: "Desktop Software Development & Management Systems in Karachi & Pakistan by Dev Muhammad",
    description:
      "Professional desktop software development, custom POS systems, enterprise CRM platforms, and cross-platform Electron applications in Karachi and worldwide by Dev Muhammad.",
    url: "https://dev-muhammad.vercel.app/software-development",
    siteName: "Muhammad Portfolio",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Desktop Software Development & Management Systems in Karachi & Pakistan — Dev Muhammad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desktop Software Development & Management Systems in Karachi & Pakistan by Dev Muhammad",
    description:
      "Professional desktop software development, custom POS systems, enterprise CRM platforms, and cross-platform Electron applications in Karachi and worldwide by Dev Muhammad.",
    images: ["https://dev-muhammad.vercel.app/twitter.png"],
  },
};

export default function SoftwareDevelopmentLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareDevStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
