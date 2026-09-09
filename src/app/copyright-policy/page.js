import PolicyPage from "@/components/PolicyPage";
import { copyrightPolicyData } from "@/data/policies";

export const metadata = {
  title: "Copyright Policy | Dev Muhammad",
  description: "Read the Copyright and Intellectual Property Policy for Dev Muhammad. Learn about source code ownership, licenses, and DMCA procedures.",
  keywords: ["Copyright Policy", "Intellectual Property", "Source Code Ownership", "Dev Muhammad", "DMCA"],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/copyright-policy",
  },
  openGraph: {
    title: "Copyright Policy | Dev Muhammad",
    description: "Read the Copyright and Intellectual Property Policy for Dev Muhammad.",
    url: "https://dev-muhammad.vercel.app/copyright-policy",
    siteName: "Muhammad Portfolio",
    type: "website",
  },
};

export default function CopyrightPolicyPage() {
  return <PolicyPage data={copyrightPolicyData} />;
}
