import { homeFAQs, webDevFAQs, appDevFAQs } from "@/data/faqs";

export const siteUrl = "https://dev-muhammad.vercel.app";

export const projects = [
  {
    slug: "sablebuild",
    name: "Sable Build",
    seoTitle: "Sable Build | Visual Builder With Multi-Stack Export",
    description: "An in-progress visual website and application builder with multi-stack code export.",
    image: "/case-studies/sable/home.png",
    liveUrl: "https://sablebuild.vercel.app",
    keywords: ["Next.js", "Zustand", "MongoDB", "Visual website builder", "Code export"],
  },
  {
    slug: "emberoak",
    name: "Ember Oak",
    seoTitle: "Ember Oak | Modern Restaurant Operations & Ordering",
    description: "A restaurant management demo with ordering, reservations, catering, reviews, and admin tools.",
    image: "/case-studies/emberoak/home.png",
    liveUrl: "https://emberoak-two.vercel.app",
    keywords: ["Next.js", "MongoDB", "Stripe", "Restaurant management"],
  },
  {
    slug: "awaza",
    name: "Awaza",
    seoTitle: "Awaza | Real-Time Social Web & Mobile App for Messaging & Sharing",
    description: "A social media web and mobile application with real-time chat, notifications, and social interactions.",
    image: "/case-studies/awaza/home.png",
    liveUrl: "https://awaza-social.vercel.app",
    keywords: ["Next.js", "Firebase", "MongoDB", "React", "Mobile application"],
  },
  {
    slug: "fluentyx",
    name: "Fluentyx",
    seoTitle: "Fluentyx | AI Arabic Learning, Practice & Revision",
    description: "An Arabic learning platform with interactive exercises, revision tools, an AI tutor, and handwriting classification.",
    image: "/case-studies/fluentyx/home.png",
    liveUrl: "https://fluentyx.vercel.app",
    keywords: ["Next.js", "PyTorch", "LangChain", "Arabic learning", "Artificial intelligence"],
  },
  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    seoTitle: "Expense Tracker | React Native Personal Finance App",
    description: "A React Native mobile app for tracking income, expenses, wallets, and spending statistics.",
    image: "/case-studies/expense/home.jpeg",
    keywords: ["React Native", "Expo", "Firebase", "Cloudinary", "Expense tracking"],
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android, iOS",
  },
  {
    slug: "macrozone",
    name: "Macrozone",
    seoTitle: "Macrozone | Simple React Native Macro Tracker",
    description: "A lightweight React Native learning project for recording meals and tracking daily calories and macronutrients.",
    image: "/case-studies/macrozone/home.jpeg",
    keywords: ["React Native", "Expo", "AsyncStorage", "Nutrition tracking", "Mobile app"],
    applicationCategory: "HealthApplication",
    operatingSystem: "Android, iOS",
  },
  {
    slug: "tebre",
    name: "TeBre",
    seoTitle: "TeBre | AI-Assisted Ebook Production Desktop Software",
    description: "An Electron desktop workspace that helps ebook agencies manage, write, polish, design, and export KDP-ready books.",
    image: "/case-studies/tebre/dashboard.png",
    keywords: ["Electron", "React", "SQLite", "AI writing", "Ebook production", "Amazon KDP"],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Desktop",
  },
  {
    slug: "mmselections",
    name: "M&M Selections",
    seoTitle: "M&M Selections | Full-Stack Ecommerce & CMS With Wholesale & Meezan Gateway",
    description: "A modern full-stack e-commerce store and admin CMS with multi-variant products, wholesale pricing, dynamic delivery settings, order tracking, and Meezan Bank payment gateway.",
    image: "/case-studies/mm/home.png",
    liveUrl: "https://mmselections.com",
    keywords: ["Next.js", "MongoDB", "Zustand", "Meezan Bank", "Ecommerce CMS", "Wholesale Pricing", "Order Tracking"],
  },
  {
    slug: "glowfarm",
    name: "GlowFarm",
    seoTitle: "GlowFarm | Cinematic Lighting Website Built With Motion",
    description: "An animation-focused concept website for a fictional lighting brand.",
    image: "/case-studies/glowfarm/hero.png",
    liveUrl: "https://glowfarm.vercel.app",
    keywords: ["Next.js", "Framer Motion", "Tailwind CSS", "Web animation"],
  },
  {
    slug: "rag",
    name: "RAG Agent",
    seoTitle: "RAG Agent | Grounded AI Answers With LangChain & FAISS",
    description: "A retrieval-augmented generation assistant that answers questions using indexed knowledge and relevant context.",
    image: "/case-studies/rag-agent/rag-agent.png",
    liveUrl: "https://techdxon.com/ai",
    keywords: ["Python", "LangChain", "Hugging Face", "FAISS", "Retrieval-augmented generation"],
  },
  {
    slug: "vendra",
    name: "Vendra",
    seoTitle: "Vendra | Multi-Branch Retail POS & Inventory System",
    description: "A retail operations platform connecting point-of-sale, inventory, purchasing, customers, staff, branches, and performance reporting.",
    image: "/case-studies/vendra/dashboard.png",
    liveUrl: "https://vendra-pos.vercel.app/",
    keywords: ["Next.js", "React", "Tailwind CSS", "Retail POS", "Inventory management", "Multi-branch retail"],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
  },
  {
    slug: "velto",
    name: "Velto – CRM",
    seoTitle: "Velto | Enterprise Sales CRM & Pipeline Platform",
    description: "A professional sales CRM platform featuring lead scoring, visual pipeline Kanban, multi-channel communication, task automation, and revenue forecasting.",
    image: "/case-studies/velto/dashboard.png",
    liveUrl: "https://veltos-crm.vercel.app/",
    keywords: ["Next.js", "React", "Zustand", "IndexedDB", "Tailwind CSS", "CRM", "Sales Pipeline", "Lead Management", "Kanban"],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
  },
  {
    slug: "skytech",
    name: "SkyTech Official Website",
    seoTitle: "SkyTech | Responsive Software Agency Website Experience",
    description: "A responsive company website presenting software services, packages, careers, and contact options.",
    image: "/case-studies/skytech/home.png",
    liveUrl: "https://skytech.com.pk",
    keywords: ["React", "Vanilla CSS", "EmailJS", "AOS", "Business website"],
  },
];

export const createProjectSchema = (project) => ({
  "@type": ["Project", "SoftwareApplication"],
  "@id": `${siteUrl}/case-study/${project.slug}#project`,
  name: project.name,
  description: project.description,
  url: `${siteUrl}/case-study/${project.slug}`,
  mainEntityOfPage: `${siteUrl}/case-study/${project.slug}#webpage`,
  image: `${siteUrl}${project.image}`,
  ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  applicationCategory: project.applicationCategory || "WebApplication",
  operatingSystem: project.operatingSystem || "Web",
  author: { "@id": `${siteUrl}/#person` },
  creator: { "@id": `${siteUrl}/#person` },
  founder: { "@id": `${siteUrl}/#person` },
  keywords: project.keywords.join(", "),
  inLanguage: "en",
});

export const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Dev Muhammad Portfolio",
  alternateName: [
    "Dev Muhammad",
    "dev Muhammad",
    "developer muhammad",
    "Muhammad Portfolio",
    "Unfathomable",
    "Unfathomable-08",
    "Unfathomable_08",
    "unfathomable08",
  ],
  description:
    "Portfolio of Dev Muhammad, a full-stack web and applied AI developer based in Karachi, Pakistan.",
  publisher: { "@id": `${siteUrl}/#person` },
  author: { "@id": `${siteUrl}/#person` },
  inLanguage: "en",
};

export const personSchema = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Muhammad",
  alternateName: [
    "Dev Muhammad",
    "dev Muhammad",
    "developer muhammad",
    "Unfathomable",
    "Unfathomable-08",
    "Unfathomable_08",
    "unfathomable08",
    "Muhammad Abasi",
  ],
  identifier: "Unfathomable-08",
  url: siteUrl,
  image: [
    `${siteUrl}/og-square.png`,
    `${siteUrl}/og.png`,
    `${siteUrl}/boy.png`,
  ],
  jobTitle: [
    "Fullstack Web Developer",
    "Applied AI Developer",
    "AI Researcher",
    "Full Stack Developer in Pakistan",
    "Full Stack Developer in Karachi",
    "Next.js & React Specialist",
  ],
  description:
    "From building modern full-stack web applications to training intelligent AI models and autonomous agents, Dev Muhammad (Unfathomable-08) is a Full-Stack Web & Applied AI Developer based in Karachi, Pakistan. Available for freelance contracts, custom web applications, and full-time remote roles.",
  email: "mailto:muhammad124711@gmail.com",
  telephone: "+92 328 2279743",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "Pakistan",
  },
  seeks: {
    "@type": "Demand",
    name: "Freelance Full-Stack Web Development, AI Integration, and Remote Engineering Roles",
    description:
      "Available for hire for full-stack web applications, AI agent integration, Next.js development, and contract engineering.",
    areaServed: [
      "Worldwide",
      "Pakistan",
      "United States",
      "United Kingdom",
      "United Arab Emirates",
    ],
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Web & AI Developer",
    occupationalCategory: "15-1254.00",
    skills:
      "Next.js, React, React Native, Node.js, Express.js, Python, Applied AI, MongoDB, SQL, Mobile App Development",
  },
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
    "React Native",
    "Mobile app development",
    "Applied AI research",
    "AI agents",
    "UI/UX Design",
    "REST APIs",
    "Tailwind CSS",
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
};

export const homeFAQSchema = {
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: homeFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const webDevFAQSchema = {
  "@type": "FAQPage",
  "@id": `${siteUrl}/web-development#faq`,
  mainEntity: webDevFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const appDevFAQSchema = {
  "@type": "FAQPage",
  "@id": `${siteUrl}/app-development#faq`,
  mainEntity: appDevFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

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
    webSiteSchema,
    personSchema,
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
            url: `${siteUrl}/web-development`,
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
            "@id": `${siteUrl}/#mobile-app-development`,
            name: "Mobile App Development",
            serviceType: "Cross-platform mobile app development",
            description:
              "Cross-platform iOS and Android mobile apps engineered with React Native and Expo, featuring offline support, notifications, and native device performance.",
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
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/projects#project-list`,
      url: `${siteUrl}/projects`,
      name: "Featured development projects",
      description: "Full-stack applications, AI tools, ecommerce platforms, and animated web experiences created by Muhammad.",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: { "@id": `${siteUrl}/case-study/${project.slug}#project` },
      })),
    },
    homeFAQSchema,
    ...projects.map(createProjectSchema),
  ],
};

export const webDevStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/web-development#webpage`,
      url: `${siteUrl}/web-development`,
      name: "Web Development Services in Karachi & Pakistan by Dev Muhammad",
      description:
        "Affordable and professional web development services in Karachi and across Pakistan by Dev Muhammad. High-speed business websites, e-commerce stores, and custom web applications.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/web-development#breadcrumb`,
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
          name: "Web Development Services",
          item: `${siteUrl}/web-development`,
        },
      ],
    },
    webSiteSchema,
    personSchema,
    {
      "@type": "Service",
      "@id": `${siteUrl}/web-development#service`,
      name: "Web Development Services in Karachi & Pakistan",
      serviceType: "Web Development",
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: [
        {
          "@type": "City",
          name: "Karachi",
        },
        {
          "@type": "Country",
          name: "Pakistan",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
      description:
        "Affordable and professional web development services in Karachi and across Pakistan by Dev Muhammad. High-speed business websites, e-commerce stores, and custom web applications.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Development",
              description:
                "Custom online stores with product catalogs, shopping cart, checkout, payment integrations, and order management.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business & Corporate Websites",
              description:
                "Professional websites designed to showcase your company, build trust, generate leads, and establish your brand online.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Revamp of Existing Websites",
              description:
                "Redesigning outdated sites with modern UI/UX, mobile responsiveness, clean code, and faster page load speeds.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Web Applications",
              description:
                "Custom dynamic web applications built with modern frontend, backend APIs, user authentication, and databases.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS & Dashboard Development",
              description:
                "Web software, administrative portals, analytics dashboards, and subscription platforms with role-based access.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI-Powered Web Applications",
              description:
                "Integrating AI features into web apps, including conversational chatbots, smart automations, and LLM APIs.",
            },
          },
        ],
      },
    },
    webDevFAQSchema,
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/web-development#project-list`,
      url: `${siteUrl}/web-development`,
      name: "Featured Web Development Projects",
      description: "Full-stack web applications, e-commerce platforms, and websites created by Muhammad.",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: { "@id": `${siteUrl}/case-study/${project.slug}#project` },
      })),
    },
    ...projects.map(createProjectSchema),
  ],
};

export const appDevStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/app-development#webpage`,
      url: `${siteUrl}/app-development`,
      name: "Mobile App Development Services in Karachi & Pakistan by Dev Muhammad",
      description:
        "Affordable and professional iOS and Android mobile app development services in Karachi and across Pakistan by Dev Muhammad. Cross-platform React Native & Expo mobile apps.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/app-development#breadcrumb`,
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
          name: "Mobile App Development Services",
          item: `${siteUrl}/app-development`,
        },
      ],
    },
    webSiteSchema,
    personSchema,
    {
      "@type": "Service",
      "@id": `${siteUrl}/app-development#service`,
      name: "Mobile App Development Services in Karachi & Pakistan",
      serviceType: "Mobile App Development",
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: [
        {
          "@type": "City",
          name: "Karachi",
        },
        {
          "@type": "Country",
          name: "Pakistan",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
      description:
        "Affordable and professional mobile app development services in Karachi and across Pakistan by Dev Muhammad. High-performance cross-platform iOS & Android mobile applications.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mobile App Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Android App for Play Store",
              description:
                "Native-feel Android applications tailored for Google Play Store compliance, high performance, Material Design standards, and smooth compatibility across various Android devices and screen sizes.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "iOS App for App Store",
              description:
                "Premium iOS applications built in accordance with Apple's Human Interface Guidelines and App Store submission standards, with smooth animations, TestFlight beta testing, and App Store launch support.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cross-Platform Apps",
              description:
                "High-performance cross-platform mobile apps built with React Native and Expo, delivering single-codebase efficiency, fast loading, and uniform native performance across both iOS and Android.",
            },
          },
        ],
      },
    },
    appDevFAQSchema,
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/app-development#project-list`,
      url: `${siteUrl}/app-development`,
      name: "Featured Mobile App Development Projects",
      description: "Cross-platform mobile applications created with React Native and modern mobile tools by Muhammad.",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: { "@id": `${siteUrl}/case-study/${project.slug}#project` },
      })),
    },
    ...projects.map(createProjectSchema),
  ],
};

