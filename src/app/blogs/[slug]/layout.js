import { blogs } from "@/data/blogs";
import { siteUrl, createBlogDetailStructuredData } from "@/lib/schema";

const getBlog = (slug) => blogs.find((b) => b.url === slug);

export function generateStaticParams() {
  return blogs.map(({ url }) => ({ slug: url }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) {
    return {
      title: "Article Not Found | Dev Muhammad",
      robots: { index: false, follow: false },
    };
  }

  const pageUrl = `${siteUrl}/blogs/${blog.url}`;
  const imageUrl = blog.image?.startsWith("http")
    ? blog.image
    : `${siteUrl}${blog.image || "/og.png"}`;

  return {
    title: `${blog.name} | Dev Muhammad`,
    description: blog.description,
    keywords: blog.tags || [
      "Web Development",
      "Next.js",
      "Dev Muhammad Blog",
      "Software Engineering",
    ],
    authors: [{ name: "Muhammad", url: siteUrl }],
    creator: "Muhammad",
    publisher: "Muhammad",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${blog.name} | Dev Muhammad`,
      description: blog.description,
      url: pageUrl,
      siteName: "Muhammad Portfolio",
      type: "article",
      publishedTime: blog.date,
      authors: ["Muhammad"],
      tags: blog.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.name} | Dev Muhammad`,
      description: blog.description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogDetailLayout({ children, params }) {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) return children;

  const jsonLd = createBlogDetailStructuredData(blog);

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
