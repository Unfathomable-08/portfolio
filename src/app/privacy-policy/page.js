import PolicyPage from "@/components/PolicyPage";
import { privacyPolicyData } from "@/data/policies";

export const metadata = {
  title: "Privacy Policy | Dev Muhammad",
  description: "Read the Privacy Policy for Dev Muhammad's portfolio and software engineering services. Learn how your information is collected, used, and protected.",
  keywords: ["Privacy Policy", "Data Protection", "Dev Muhammad", "Software Engineering Privacy"],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/privacy-policy",
  },
  authors: [{ name: "Muhammad", url: "https://dev-muhammad.vercel.app" }],
  creator: "Muhammad",
  publisher: "Muhammad",
  openGraph: {
    title: "Privacy Policy | Dev Muhammad",
    description: "Read the Privacy Policy for Dev Muhammad's portfolio and software engineering services. Learn how your information is collected, used, and protected.",
    url: "https://dev-muhammad.vercel.app/privacy-policy",
    siteName: "Muhammad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dev-muhammad.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Dev Muhammad Portfolio",
      },
      {
        url: "https://dev-muhammad.vercel.app/og-square.png",
        width: 1200,
        height: 1200,
        alt: "Privacy Policy - Dev Muhammad Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Dev Muhammad",
    description: "Read the Privacy Policy for Dev Muhammad's portfolio and software engineering services.",
    images: ["https://dev-muhammad.vercel.app/twitter.png"],
  },
};

export default function PrivacyPolicy() {
  return <PolicyPage data={privacyPolicyData} />;
}
