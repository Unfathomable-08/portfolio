import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { ScreenSizeProvider, useScreenSize } from "./ScreenContext";
import NeonTrail from "@/components/ui/NeonTrail";
import { structuredData } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Muhammad | Fullstack Web & Applied AI Developer in Karachi, Pakistan",
  description: "From building high-performance web apps to training custom AI models and autonomous agents, Developer Muhammad is a Full-Stack Web & Applied AI Developer based in Karachi, Pakistan.",
  keywords: [
    "Dev Muhammad",
    "dev Muhammad",
    "developer muhammad",
    "Muhammad",
    "developer in pakistan",
    "developer in karachi",
    "Fullstack Developer Karachi",
    "AI Developer Pakistan",
    "Unfathomable-08",
    "Unfathomable_08",
    "unfathomable08",
    "Portfolio",
    "Next.js Developer",
    "React Developer",
    "AI Projects",
    "Full Stack Projects"
  ],
  authors: [{ name: "Muhammad", url: "https://dev-muhammad.vercel.app" }],
  creator: "Muhammad",
  publisher: "Muhammad",
  openGraph: {
    title: "Dev Muhammad | Fullstack Web & Applied AI Developer in Karachi, Pakistan",
    description: "From building high-performance web apps to training custom AI models and autonomous agents, Developer Muhammad is a Full-Stack Web & Applied AI Developer based in Karachi, Pakistan.",
    type: "website",
    url: "https://dev-muhammad.vercel.app",
    siteName: "Muhammad Portfolio",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Dev Muhammad Portfolio",
      },
      {
        url: "https://dev-muhammad.vercel.app/og-square.png",
        width: 1200,
        height: 1200,
        alt: "Dev Muhammad Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Muhammad | Fullstack Web & Applied AI Developer in Karachi, Pakistan",
    description: "From building high-performance web apps to training custom AI models and autonomous agents, Developer Muhammad is a Full-Stack Web & Applied AI Developer based in Karachi, Pakistan.",
    images: ["https://dev-muhammad.vercel.app/twitter.png"],
  },
  alternates: {
    canonical: "https://dev-muhammad.vercel.app",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XLRTPWED97"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XLRTPWED97');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="Y7EkvICXUQUp40MdDpDtw1lN_Pwn1rHZK_K5ZG1SKeo" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScreenSizeProvider>
          <NeonTrail />
          {children}
        </ScreenSizeProvider>
        <Analytics />
      </body>
    </html>
  );
}
