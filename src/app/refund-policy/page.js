import PolicyPage from "@/components/PolicyPage";
import { refundPolicyData } from "@/data/policies";

export const metadata = {
  title: "Refund Policy | Dev Muhammad",
  description: "Read the Refund Policy for custom web development, mobile applications, and AI consulting services delivered by Dev Muhammad.",
  keywords: ["Refund Policy", "Milestone Payments", "Cancellation Terms", "Dev Muhammad", "Client Guarantee"],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/refund-policy",
  },
  authors: [{ name: "Muhammad", url: "https://dev-muhammad.vercel.app" }],
  creator: "Muhammad",
  publisher: "Muhammad",
  openGraph: {
    title: "Refund Policy | Dev Muhammad",
    description: "Read the Refund Policy for custom web development, mobile applications, and AI consulting services delivered by Dev Muhammad.",
    url: "https://dev-muhammad.vercel.app/refund-policy",
    siteName: "Muhammad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Refund Policy - Dev Muhammad Portfolio",
      },
      {
        url: "https://dev-muhammad.vercel.app/og-square.png",
        width: 1200,
        height: 1200,
        alt: "Refund Policy - Dev Muhammad Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Dev Muhammad",
    description: "Read the Refund Policy for software engineering and AI consulting services by Dev Muhammad.",
    images: ["https://dev-muhammad.vercel.app/twitter.png"],
  },
};

export default function RefundPolicyPage() {
  return <PolicyPage data={refundPolicyData} />;
}
