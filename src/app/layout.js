import { Geist, Geist_Mono } from "next/font/google";
import { ScreenSizeProvider } from "./ScreenContext";
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

export const metadata = {
  title: "Muhammad | Portfolio",
  description: "Explore My professional portfolio, featuring full-stack projects, AI tools, and modern web apps. Built with Next.js and passion.",
  keywords: [
    "Muhammad",
    "Portfolio",
    "Unfathomable-08",
    "Unfathomable_08",
    "Unfathomable 08",
    "unfathomable08",
    "unfathomable",
    "GitHub Muhammad",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "AI Projects",
    "Full Stack Projects",
    "Web Developer"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScreenSizeProvider>
          {children}
        </ScreenSizeProvider>
      </body>
    </html>
  );
}
