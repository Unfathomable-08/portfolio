import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { webDevStructuredData } from "@/lib/schema";

export const metadata = {
  title: "Web Development Services in Karachi & Pakistan by Dev Muhammad",
  description:
    "Affordable and professional web development services in Karachi and across Pakistan by Dev Muhammad. High-speed business websites, e-commerce stores, and custom web applications.",
  keywords: [
    "Web Development Services",
    "Web Development in Karachi",
    "Web Development Pakistan",
    "Affordable Web Development",
    "Website Developer Karachi",
    "Web Developer in Pakistan",
    "Dev Muhammad",
    "Developer Muhammad",
    "Muhammad Web Developer",
    "E-commerce Website Karachi",
    "Custom Web Applications Pakistan",
  ],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/web-development",
  },
  openGraph: {
    title: "Web Development Services in Karachi & Pakistan by Dev Muhammad",
    description:
      "Affordable and professional web development services in Karachi and across Pakistan by Dev Muhammad. High-speed business websites, e-commerce stores, and custom web applications.",
    url: "https://dev-muhammad.vercel.app/web-development",
    siteName: "Muhammad Portfolio",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Web Development Services in Karachi & Pakistan — Dev Muhammad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services in Karachi & Pakistan by Dev Muhammad",
    description:
      "Affordable and professional web development services in Karachi and across Pakistan by Dev Muhammad. High-speed business websites, e-commerce stores, and custom web applications.",
    images: ["https://dev-muhammad.vercel.app/twitter.png"],
  },
};

export default function WebDevelopmentLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webDevStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

