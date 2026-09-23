import { blogsStructuredData, siteUrl } from "@/lib/schema";

export const metadata = {
  title: "Engineering Blog & Tech Insights | Dev Muhammad",
  description:
    "Deep-dive technical articles, architectural guides, and actionable checklists on full-stack web development, Next.js, AI workflows, and software engineering by Dev Muhammad.",
  keywords: [
    "Dev Muhammad Blog",
    "Web Development Blog",
    "Full Stack Developer Blog",
    "Next.js Development Tutorials",
    "AI Agent Workflows",
    "Web Developer Checklist Pakistan",
    "Hire Web Developer Guide",
    "Tech Insights Karachi",
    "Software Engineering Articles",
    "Muhammad Portfolio Blog",
  ],
  authors: [{ name: "Muhammad", url: siteUrl }],
  creator: "Muhammad",
  publisher: "Muhammad",
  alternates: {
    canonical: `${siteUrl}/blogs`,
  },
  openGraph: {
    title: "Engineering Blog & Tech Insights | Dev Muhammad",
    description:
      "Deep-dive technical articles, architectural guides, and actionable checklists on full-stack web development, Next.js, AI workflows, and software engineering by Dev Muhammad.",
    url: `${siteUrl}/blogs`,
    siteName: "Muhammad Portfolio",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Dev Muhammad Blog — Engineering & Tech Insights",
      },
      {
        url: `${siteUrl}/og-square.png`,
        width: 1200,
        height: 1200,
        alt: "Dev Muhammad Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog & Tech Insights | Dev Muhammad",
    description:
      "Deep-dive technical articles, architectural guides, and actionable checklists on full-stack web development, Next.js, AI workflows, and software engineering by Dev Muhammad.",
    images: [`${siteUrl}/twitter.png`],
  },
  robots: { index: true, follow: true },
};

export default function BlogsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogsStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
