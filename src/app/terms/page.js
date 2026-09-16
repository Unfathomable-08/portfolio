import PolicyPage from "@/components/PolicyPage";
import { termsData } from "@/data/policies";

export const metadata = {
  title: "Terms & Conditions | Dev Muhammad",
  description: "Read the Terms & Conditions governing freelance software development, client engagements, deliverables, and service scopes with Dev Muhammad.",
  keywords: ["Terms and Conditions", "Terms of Service", "Client Agreement", "Dev Muhammad", "Software Development Contracts"],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/terms",
  },
  authors: [{ name: "Muhammad", url: "https://dev-muhammad.vercel.app" }],
  creator: "Muhammad",
  publisher: "Muhammad",
  openGraph: {
    title: "Terms & Conditions | Dev Muhammad",
    description: "Read the Terms & Conditions governing freelance software development, client engagements, deliverables, and service scopes with Dev Muhammad.",
    url: "https://dev-muhammad.vercel.app/terms",
    siteName: "Muhammad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions - Dev Muhammad Portfolio",
      },
      {
        url: "https://dev-muhammad.vercel.app/og-square.png",
        width: 1200,
        height: 1200,
        alt: "Terms & Conditions - Dev Muhammad Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Dev Muhammad",
    description: "Read the Terms & Conditions governing software development and engineering contracts with Dev Muhammad.",
    images: ["https://dev-muhammad.vercel.app/twitter.png"],
  },
};

export default function TermsPage() {
  return <PolicyPage data={termsData} />;
}
