import { siteUrl, webSiteSchema, personSchema } from "@/lib/schema";

const pageUrl = `${siteUrl}/about`;
const breadcrumbId = `${pageUrl}#breadcrumb`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "About Muhammad | Applied AI Developer & Full-Stack Engineer",
      description:
        "The authentic journey, multidisciplinary skillset, and engineering philosophy of Muhammad — an Applied AI Developer and Full-Stack Engineer who has shipped 35+ production projects.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": breadcrumbId },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: pageUrl,
        },
      ],
    },
    webSiteSchema,
    personSchema,
  ],
};

export const metadata = {
  title: "About Muhammad | Applied AI Developer & Full-Stack Engineer",
  description:
    "The journey, multidisciplinary skillset, and engineering philosophy of Muhammad — an Applied AI Developer and Full-Stack Engineer who has shipped 35+ real-world production projects across Web, AI, Agents, and Mobile.",
  keywords: [
    "About Muhammad",
    "Applied AI Developer",
    "Full Stack Developer Journey",
    "AI Automation Engineer",
    "Agentic AI Developer",
    "Techno Rivals Developer",
    "Karachi AI Developer",
    "Pakistan Web Developer",
    "Muhammad Portfolio Story",
  ],
  authors: [{ name: "Muhammad", url: siteUrl }],
  creator: "Muhammad",
  publisher: "Muhammad",
  openGraph: {
    title: "About Muhammad | Applied AI Developer & Full-Stack Engineer",
    description:
      "From learning web development in July 2024 to engineering autonomous AI agents, machine learning pipelines, and full-stack systems — shipping 35+ real production projects.",
    url: pageUrl,
    siteName: "Muhammad Portfolio",
    type: "profile",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "About Muhammad - Applied AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muhammad | Applied AI Developer & Full-Stack Engineer",
    description:
      "From learning web development in July 2024 to engineering autonomous AI agents, machine learning pipelines, and full-stack systems — shipping 35+ real production projects.",
    images: [`${siteUrl}/twitter.png`],
  },
  alternates: {
    canonical: pageUrl,
  },
  robots: { index: true, follow: true },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
