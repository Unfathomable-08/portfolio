// Central metadata for all blogs
// To add a new blog, simply create a new .md file in /public/blogs/ and add its metadata below.
export const blogs = [
  {
    name: "October 2026 Security Bugs: PHP, Node.js, Go, and eMudhra",
    description: "PHP2Shell, Node2Shell, Next.js, Go, and eMudhra broke in October 2026. Here is the exact version to install, what a WordPress update does not fix, and what to ask your host in Pakistan.",
    tags: ["Security Bugs", "Cyber Security"],
    url: "october-2026-php-node-nextjs-golang-emudhra-security-patches",
    image: "/blogs/thumbnails/04.jpg",
    date: "2026-10-28",
    lastModified: "2026-10-28",
    readTime: 22,
    file: "/blogs/04.md"
  },
  {
    name: "Why Facebook Ads Fail for Pakistani Small Businesses",
    description: "Ads send people to a Facebook page or a WhatsApp number. They forget you. Why the click dies in Pakistan, and what actually turns ads into repeat orders.",
    tags: ["Ads", "Marketing", "Business"],
    url: "why-facebook-ads-fails-in-pakistan-without-website",
    image: "/blogs/thumbnails/03.png",
    date: "2026-10-03",
    lastModified: "2026-10-13",
    readTime: 20,
    file: "/blogs/03.md"
  },
  {
    name: "How Much Does a Website Cost in Pakistan in 2026?",
    description: "A detailed breakdown of website development costs in Pakistan for 2026. Custom websites, WordPress, Shopify, domain, hosting, maintenance and hidden costs.",
    tags: ["Cost Analysis", "Cost Breakdown", "Web Development", "Business"],
    url: "how-much-does-a-website-cost-in-pakistan",
    image: "/blogs/thumbnails/02.png",
    date: "2026-09-23",
    lastModified: "2026-10-13",
    readTime: 16,
    file: "/blogs/02.md"
  },
  {
    name: "11 Things to Check Before You Hire a Web Developer in Pakistan",
    description: "Most Pakistani businesses lose money on the first website. Use this 11-point checklist before you pay anyone | portfolio, ownership, contract, and red flags.",
    tags: ["Hiring Guide", "Tech Advice", "Web Development", "Business"],
    url: "things-to-check-before-hiring-web-developer-pakistan",
    image: "/blogs/thumbnails/01.png",
    date: "2026-09-23",
    lastModified: "2026-10-13",
    readTime: 20,
    file: "/blogs/01.md"
  },
];

// Helper to fetch the raw markdown content for a given blog .md file
export async function fetchBlogContent(fileUrl) {
  if (!fileUrl) return "";
  try {
    const res = await fetch(fileUrl);
    if (!res.ok) throw new Error(`Failed to load markdown: ${fileUrl}`);
    return await res.text();
  } catch (err) {
    console.error("Error fetching blog markdown:", err);
    return "";
  }
}

export async function fetchAllBlogs() {
  return blogs;
}
