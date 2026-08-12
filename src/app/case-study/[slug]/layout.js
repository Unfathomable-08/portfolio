import { createProjectSchema, projects } from "@/lib/schema";

const getProject = (slug) => projects.find((project) => project.slug === slug);

export function generateStaticParams() {
    return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        return {
            title: "Case Study Not Found | Muhammad Portfolio",
            robots: { index: false, follow: false },
        };
    };

    return {
        title: project.seoTitle,
        description: project.description,
        keywords: project.keywords,
        authors: [{ name: "Muhammad", url: "https://dev-muhammad.vercel.app" }],
        creator: "Muhammad",
        publisher: "Muhammad",
        alternates: { canonical: `https://dev-muhammad.vercel.app/case-study/${project.slug}` },
        openGraph: {
            type: "website",
            url: `https://dev-muhammad.vercel.app/case-study/${project.slug}`,
            title: project.seoTitle,
            description: project.description,
            siteName: "Muhammad Portfolio",
            images: [{ url: `https://dev-muhammad.vercel.app${project.image}`, alt: `${project.name} case study` }],
        },
        twitter: {
            card: "summary_large_image",
            title: project.seoTitle,
            description: project.description,
            images: [`https://dev-muhammad.vercel.app${project.image}`],
        },
        robots: { index: true, follow: true },
    };
}

export default async function CaseStudyLayout({ children, params }) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) return children;

    const pageUrl = `https://dev-muhammad.vercel.app/case-study/${project.slug}`;
    const breadcrumbId = `${pageUrl}#breadcrumb`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name: project.seoTitle,
                description: project.description,
                isPartOf: { "@id": `https://dev-muhammad.vercel.app/#website` },
                breadcrumb: { "@id": breadcrumbId },
                primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
                mainEntity: { "@id": `${pageUrl}#project` },
                about: { "@id": `${pageUrl}#project` },
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
                        item: "https://dev-muhammad.vercel.app",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Projects",
                        item: `https://dev-muhammad.vercel.app/projects`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: project.name,
                        item: pageUrl,
                    },
                ],
            },
            {
                "@type": "ImageObject",
                "@id": `${pageUrl}#primaryimage`,
                url: `https://dev-muhammad.vercel.app${project.image}`,
                contentUrl: `https://dev-muhammad.vercel.app${project.image}`,
                caption: `${project.name} case study`,
            },
            createProjectSchema(project),
        ],
    };

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
