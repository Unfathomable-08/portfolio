import PolicyPage from "@/components/PolicyPage";
import { privacyPolicyData } from "@/data/policies";

export const metadata = {
  title: "Privacy Policy | Dev Muhammad",
  description: "Read the Privacy Policy for Dev Muhammad's portfolio and software engineering services. Learn how your information is collected, used, and protected.",
  keywords: ["Privacy Policy", "Data Protection", "Dev Muhammad", "Software Engineering Privacy"],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Dev Muhammad",
    description: "Read the Privacy Policy for Dev Muhammad's portfolio and software engineering services.",
    url: "https://dev-muhammad.vercel.app/privacy-policy",
    siteName: "Muhammad Portfolio",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return <PolicyPage data={privacyPolicyData} />;
}
