import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { appDevStructuredData } from "@/lib/schema";

export const metadata = {
  title: "Mobile App Development Services in Karachi & Pakistan by Dev Muhammad",
  description:
    "Affordable and professional iOS and Android mobile app development services in Karachi and across Pakistan by Dev Muhammad. High-performance cross-platform React Native & Expo mobile apps.",
  keywords: [
    "Mobile App Development",
    "App Development Services",
    "Mobile App Development in Karachi",
    "App Developer in Pakistan",
    "React Native Developer Pakistan",
    "Expo App Developer Karachi",
    "iOS App Development Pakistan",
    "Android App Developer Karachi",
    "Dev Muhammad",
    "Developer Muhammad",
    "Cross-Platform Mobile Apps",
  ],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/app-development",
  },
  openGraph: {
    title: "Mobile App Development Services in Karachi & Pakistan by Dev Muhammad",
    description:
      "Affordable and professional iOS and Android mobile app development services in Karachi and across Pakistan by Dev Muhammad. High-performance cross-platform React Native & Expo mobile apps.",
    url: "https://dev-muhammad.vercel.app/app-development",
    siteName: "Muhammad Portfolio",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services in Karachi & Pakistan — Dev Muhammad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services in Karachi & Pakistan by Dev Muhammad",
    description:
      "Affordable and professional iOS and Android mobile app development services in Karachi and across Pakistan by Dev Muhammad. High-performance cross-platform React Native & Expo mobile apps.",
    images: ["https://dev-muhammad.vercel.app/twitter.png"],
  },
};

export default function AppDevelopmentLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appDevStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
