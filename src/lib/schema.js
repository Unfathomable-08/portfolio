const siteUrl = "https://dev-muhammad.vercel.app";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Muhammad Portfolio | Fullstack Web & Applied AI Developer",
      description:
        "Muhammad's professional portfolio, featuring full-stack projects, AI tools, services, and modern web applications.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      about: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: { "@id": `${siteUrl}/#profile-image` },
      inLanguage: "en",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Muhammad Portfolio",
      alternateName: [
        "Unfathomable",
        "Unfathomable-08",
        "Unfathomable_08",
        "Unfathomable08",
      ],
      description:
        "Portfolio of Muhammad, a full-stack web and applied AI developer.",
      publisher: { "@id": `${siteUrl}/#person` },
      author: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Muhammad",
      alternateName: [
        "Unfathomable",
        "Unfathomable-08",
        "Unfathomable_08",
        "Unfathomable08",
      ],
      identifier: "Unfathomable-08",
      url: siteUrl,
      image: { "@id": `${siteUrl}/#profile-image` },
      jobTitle: ["Fullstack Web Developer", "Applied AI Developer"],
      description:
        "Full-stack web and app developer specializing in modern user interfaces, scalable back-end systems, and applied AI solutions.",
      email: "mailto:muhammad124711@gmail.com",
      telephone: "+92 328 2279743",
      sameAs: [
        "https://github.com/Unfathomable-08",
        "https://x.com/unfathomable_08",
        "https://instagram.com/unfathomable_08",
        "https://linkedin.com/in/muhammad-abasi-6b6884350",
      ],
      knowsAbout: [
        "Full-stack web development",
        "Applied artificial intelligence",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "Python",
        "MongoDB",
        "SQL",
        "Progressive web applications",
        "React Native",
        "AI agents",
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "TechDxon",
          url: "https://techdxon.com",
        },
        {
          "@type": "Organization",
          name: "Techno Rivals",
          url: "https://techno-rivals.com",
        },
      ],
      hasOfferCatalog: { "@id": `${siteUrl}/#services` },
    },
    {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#profile-image`,
      url: `${siteUrl}/og-square.png`,
      contentUrl: `${siteUrl}/og-square.png`,
      width: 1200,
      height: 1200,
      caption: "Muhammad Portfolio",
    },
    {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/#services`,
      name: "Development services",
      url: `${siteUrl}/services`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${siteUrl}/#web-development`,
            name: "Enterprise-Grade Web Development",
            serviceType: "Full-stack web development",
            description:
              "High-performance, scalable websites built with React, Next.js, and robust back-end architectures.",
            provider: { "@id": `${siteUrl}/#person` },
            url: `${siteUrl}/services`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${siteUrl}/#desktop-development`,
            name: "Desktop Software Development",
            serviceType: "Cross-platform desktop software development",
            description:
              "Desktop software development for Windows, macOS, and Linux.",
            provider: { "@id": `${siteUrl}/#person` },
            url: `${siteUrl}/services`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${siteUrl}/#pwa-development`,
            name: "Progressive Web Apps (PWAs)",
            serviceType: "Progressive web application development",
            description:
              "App-like web experiences with offline support, push notifications, and responsive performance across devices.",
            provider: { "@id": `${siteUrl}/#person` },
            url: `${siteUrl}/services`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${siteUrl}/#ai-agents`,
            name: "AI Agents",
            serviceType: "AI agent development and automation",
            description:
              "AI agents that automate tasks, process data, and handle repetitive work using AI tools, APIs, and custom scripts.",
            provider: { "@id": `${siteUrl}/#person` },
            url: `${siteUrl}/services`,
          },
        },
      ],
    },
  ],
};
