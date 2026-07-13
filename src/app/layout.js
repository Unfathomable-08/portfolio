import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { ScreenSizeProvider } from "./ScreenContext";
import NeonTrail from "@/sub-components/NeonTrail";
import "./globals.css";
import "./missing.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad",
  url: "https://dev-muhammad.vercel.app",
  image: "https://dev-muhammad.vercel.app/og-square.png",
  sameAs: [
    "https://github.com/Unfathomable-08",
    "https://x.com/unfathomable_08",
    "https://instagram.com/unfathomable_08",
    "https://linkedin.com/in/muhammad-abasi-6b6884350"
  ]
};

export const metadata = {
  title: "Muhammad Portfolio | Fullstack Web & Applied AI Developer",
  description: "Explore My professional portfolio, featuring full-stack projects, AI tools, and modern web apps. Built with Next.js and passion.",
  keywords: ["Muhammad", "Portfolio", "Unfathomable-08", "Unfathomable_08", "Unfathomable 08", "unfathomable08", "unfathomable", "GitHub Muhammad", "Fullstack Developer", "AI Developer", "React Developer", "Web Developer Portfolio", "AI Projects", "Full Stack Projects", "Web Developer"],
  openGraph: {
    title: "Muhammad Portfolio | Fullstack Web & Applied AI Developer",
    description: "Explore My professional portfolio, featuring full-stack projects, AI tools, and modern web apps. Built with Next.js and passion.",
    type: "website",
    url: "https://dev-muhammad.vercel.app",
    siteName: "Muhammad Portfolio",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Portfolio",
      },
      {
        url: "https://dev-muhammad.vercel.app/og-square.png",
        width: 1200,
        height: 1200,
        alt: "Muhammad Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Portfolio | Fullstack Web & Applied AI Developer",
    description: "Explore My professional portfolio, featuring full-stack projects, AI tools, and modern web apps. Built with Next.js and passion.",
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
            __html: JSON.stringify(personSchema),
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
