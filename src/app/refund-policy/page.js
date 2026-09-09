import PolicyPage from "@/components/PolicyPage";
import { refundPolicyData } from "@/data/policies";

export const metadata = {
  title: "Refund Policy | Dev Muhammad",
  description: "Read the Refund Policy for custom web development, mobile applications, and AI consulting services delivered by Dev Muhammad.",
  keywords: ["Refund Policy", "Milestone Payments", "Cancellation Terms", "Dev Muhammad", "Client Guarantee"],
  alternates: {
    canonical: "https://dev-muhammad.vercel.app/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Dev Muhammad",
    description: "Read the Refund Policy for software engineering and AI consulting services by Dev Muhammad.",
    url: "https://dev-muhammad.vercel.app/refund-policy",
    siteName: "Muhammad Portfolio",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  return <PolicyPage data={refundPolicyData} />;
}
