import { projects, siteUrl, webSiteSchema, personSchema } from "@/lib/schema";

const pageUrl = `${siteUrl}/portfolio`;
const breadcrumbId = `${pageUrl}#breadcrumb`;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            // CollectionPage is the correct type for a portfolio/gallery page
            "@type": "CollectionPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: "Portfolio | Muhammad - Full-Stack, AI & Mobile Projects Showcase",
            description:
                "Explore Muhammad's portfolio of production-ready web applications, autonomous AI agents, cross-platform mobile apps, and enterprise management systems.",
            isPartOf: { "@id": `${siteUrl}/#website` },
            breadcrumb: { "@id": breadcrumbId },
            about: { "@id": `${siteUrl}/#person` },
            mainEntity: { "@id": `${pageUrl}#project-list` },
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
                    name: "Portfolio",
                    item: pageUrl,
                },
            ],
        },
        {
            // ItemList lets Google index each project entry directly from this page
            "@type": "ItemList",
            "@id": `${pageUrl}#project-list`,
            url: pageUrl,
            name: "Muhammad's Portfolio of Shipped Projects",
            description:
                "Full-stack web apps, AI agents, cross-platform mobile apps, and enterprise management systems — each built and shipped by Muhammad.",
            numberOfItems: projects.length,
            itemListElement: projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: project.name,
                url: `${siteUrl}/case-study/${project.slug}`,
                item: { "@id": `${siteUrl}/case-study/${project.slug}#project` },
            })),
        },
        webSiteSchema,
        personSchema,
    ],
};

export const metadata = {
    title: "Portfolio | Muhammad - Full-Stack, AI & Mobile Projects Showcase",
    description:
        "Explore Muhammad's portfolio of production-ready web applications, autonomous AI agents, cross-platform mobile apps, and enterprise management systems.",
    keywords: [
        "Muhammad Portfolio",
        "Developer Portfolio",
        "Full Stack Projects",
        "React Projects",
        "Next.js Portfolio",
        "AI Agents",
        "Mobile Apps",
        "Vendra POS",
        "Velto CRM",
        "Sable Build",
        "Karachi Developer",
        "Pakistan Web Developer",
    ],
    authors: [{ name: "Muhammad", url: siteUrl }],
    creator: "Muhammad",
    publisher: "Muhammad",
    openGraph: {
        title: "Portfolio | Muhammad - Full-Stack, AI & Mobile Projects Showcase",
        description:
            "Explore Muhammad's portfolio of production-ready web applications, autonomous AI agents, cross-platform mobile apps, and enterprise management systems.",
        url: pageUrl,
        siteName: "Muhammad Portfolio",
        type: "website",
        images: [
            {
                url: `${siteUrl}/og.png`,
                width: 1200,
                height: 630,
                alt: "Dev Muhammad Portfolio Showcase",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Muhammad - Full-Stack, AI & Mobile Projects Showcase",
        description:
            "Explore Muhammad's portfolio of production-ready web applications, autonomous AI agents, cross-platform mobile apps, and enterprise management systems.",
        images: [`${siteUrl}/twitter.png`],
    },
    alternates: {
        canonical: pageUrl,
    },
    robots: { index: true, follow: true },
};

export default function PortfolioLayout({ children }) {
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
