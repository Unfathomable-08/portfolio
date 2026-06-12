import Home from "../page";

const seoData = {
  about: {
    title: "About Muhammad | Full Stack Developer & AI Engineer",
    description: "Learn about Muhammad, a Full Stack Developer specializing in Next.js, React, Node.js, and AI-powered web applications with a focus on performance and scalability.",
    keywords: ["Muhammad", "Full Stack Developer", "AI Engineer", "Next.js Developer", "React Developer", "Node.js Developer"],
  },
  skills: {
    title: "Technical Skills | Next.js, React, Node.js & AI Development",
    description: "Explore Muhammad's technical expertise in JavaScript, TypeScript, React, Next.js, Node.js, databases, cloud technologies, and AI integrations.",
    keywords: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "AI Development"],
  },
  projects: {
    title: "Projects Portfolio | Full Stack & AI Web Applications",
    description: "Discover a collection of full-stack web applications, AI-powered tools, SaaS platforms, and modern digital experiences built by Muhammad Abasi.",
    keywords: ["Portfolio Projects", "Next.js Projects", "AI Applications", "Full Stack Projects", "Web Development Portfolio"],
  },
  services: {
    title: "Web, App, Desktop & AI Agents Development Services",
    description: "Professional web development, desktop software, mobile app and AI agents development services.",
    keywords: ["Web Development Services", "Full Stack Development", "AI Integration", "API Development", "Desktop Software Development", "Mobile App Development", "AI Agents Development", "Custom Websites"],
  },
  experience: {
    title: "Professional Experience | Full Stack Developer Journey",
    description: "Explore Muhammad's professional experience, technical achievements, client projects, and growth as a Full Stack Developer and AI enthusiast.",
    keywords: ["Developer Experience", "Work History", "Technical Experience", "Software Engineer", "Career Portfolio"],
  },
  contact: {
    title: "Contact Muhammad | Hire a Full Stack Developer",
    description: "Get in touch with Muhammad for freelance projects, business collaborations, web development services, or AI-powered software solutions.",
    keywords: ["Contact Muhammad", "Hire Developer", "Freelance Web Developer", "Business Collaboration", "Software Development"],
  },
};

export async function generateMetadata({ params }) {
  const section = await params.then(p => p.section.toLowerCase()).catch(() => params.section.toLowerCase());
  
  const data = seoData[section] || {
    title: `${section.charAt(0).toUpperCase() + section.slice(1)} | Muhammad`,
    description: `Explore the ${section} section of Muhammad's professional portfolio.`,
    keywords: [section, "Portfolio", "Muhammad"],
  };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://dev-muhammad.vercel.app/${section}`,
      siteName: "Muhammad Portfolio",
      type: "website",
      images: [
        {
          url: "https://dev-muhammad.vercel.app/og.png",
          width: 1200,
          height: 630,
          alt: "Og Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["https://dev-muhammad.vercel.app/twitter.png"],
    },
    alternates: {
      canonical: `https://dev-muhammad.vercel.app/${section}`,
    }
  };
}

export default function SectionPage() {
  return <Home />;
}
