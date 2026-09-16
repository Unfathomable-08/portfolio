import PolicyPage from "@/components/PolicyPage";
import { copyrightPolicyData } from "@/data/policies";

export const metadata = {
  title: "Copyright Policy | Dev Muhammad",
  description: "Read the Copyright and Intellectual Property Policy for Dev Muhammad. Learn about source code ownership, licenses, and DMCA procedures.",
  keywords: ["Copyright Policy", "Intellectual Property", "Source Code Ownership", "Dev Muhammad", "DMCA"],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/copyright-policy",
  },
  authors: [{ name: "Muhammad", url: "https://dev-muhammad.vercel.app" }],
  creator: "Muhammad",
  publisher: "Muhammad",
  openGraph: {
    title: "Copyright Policy | Dev Muhammad",
    description: "Read the Copyright and Intellectual Property Policy for Dev Muhammad. Learn about source code ownership, licenses, and DMCA procedures.",
    url: "https://dev-muhammad.vercel.app/copyright-policy",
    siteName: "Muhammad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Copyright Policy - Dev Muhammad Portfolio",
      },
      {
        url: "https://dev-muhammad.vercel.app/og-square.png",
        width: 1200,
        height: 1200,
        alt: "Copyright Policy - Dev Muhammad Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Copyright Policy | Dev Muhammad",
    description: "Read the Copyright and Intellectual Property Policy for Dev Muhammad.",
    images: ["https://dev-muhammad.vercel.app/twitter.png"],
  },
};

export default function CopyrightPolicyPage() {
  return <PolicyPage data={copyrightPolicyData} />;
}
