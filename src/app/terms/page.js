import PolicyPage from "@/components/PolicyPage";
import { termsData } from "@/data/policies";

export const metadata = {
  title: "Terms & Conditions | Dev Muhammad",
  description: "Read the Terms & Conditions governing freelance software development, client engagements, deliverables, and service scopes with Dev Muhammad.",
  keywords: ["Terms and Conditions", "Terms of Service", "Client Agreement", "Dev Muhammad", "Software Development Contracts"],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Dev Muhammad",
    description: "Read the Terms & Conditions governing software development and engineering contracts with Dev Muhammad.",
    url: "https://dev-muhammad.vercel.app/terms",
    siteName: "Muhammad Portfolio",
    type: "website",
  },
};

export default function TermsPage() {
  return <PolicyPage data={termsData} />;
}
