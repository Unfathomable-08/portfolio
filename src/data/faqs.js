export const homeFAQs = [
  {
    question: "What types of projects do you build and deliver?",
    answer:
      "I engineer custom full-stack web applications, cross-platform mobile apps, autonomous AI agents & automations, and desktop software. This includes high-converting landing pages, multi-variant e-commerce stores with payment gateways (like Meezan Bank), SaaS platforms, enterprise POS and CRM systems, internal business tools, and custom RAG knowledge base assistants.",
    srOnly: "web development services, mobile app development, ai agents automation, custom software",
  },
  {
    question: "How long does a website or application take to build?",
    answer:
      "Timelines depend directly on project scope and technical complexity. Standard websites and landing pages typically take 2 to 3 weeks to complete. For complex full-stack web applications, custom SaaS platforms, e-commerce stores, or mobile apps, delivery can take 6 to 8 weeks depending on custom backend architecture, third-party integrations, and testing requirements.",
    srOnly: "website delivery timeline, how long to build web application",
  },
  {
    question: "Do I receive 100% full ownership of the source code?",
    answer:
      "Deliverable rights and access are granted upon full invoice settlement and depend on what is explicitly agreed in the initial contract. Full raw source code repository transfers (such as a direct GitHub repository handover) are provided for custom code packages, while other packages include managed platform deployment, CMS administration, and domain ownership. All terms are defined upfront before kickoff with zero unexpected vendor lock-in.",
    srOnly: "source code ownership, github repository transfer, code handover",
  },
  {
    question: "How does the deposit and payment schedule work?",
    answer:
      "A 20% to 25% advance deposit is standard to confirm scheduling and initiate development. The remaining balance is payable upon project completion and verification of agreed features before final handover of files or live production access. For large or enterprise projects, the remaining balance can be divided across clear milestone deliverables.",
    srOnly: "payment terms, advance deposit, milestone payments freelance developer",
  },
  {
    question: "What warranty and bug-fix support is included after delivery?",
    answer:
      "We provide complimentary bug fixes and error corrections for any issues originating on our end for 14 days on small projects and 21 days on large projects following the official delivery date. Once the warranty period expires, any subsequent maintenance, new features, or modifications are estimated separately as billable updates.",
    srOnly: "bug fix warranty, post launch support, maintenance",
  },
];

export const webDevFAQs = [
  {
    question: "How does the advance deposit and payment schedule work?",
    answer:
      "A 20% to 25% advance deposit is standard to confirm scheduling and initiate development. The remaining balance is payable upon project completion and verification of agreed features before final file handover or live production access.",
  },
  {
    question: "How long does a website project take to deliver?",
    answer:
      "Delivery estimates are set at kickoff based on your scope (typically 1 to 2 weeks for revamps and standard websites; 3 to 6 weeks for full-stack apps, e-commerce, or SaaS). Timely delivery relies on prompt provision of your content, branding, and required API credentials.",
  },
  {
    question: "Can I preview and test the website during development?",
    answer:
      "Yes. A live staging preview link is provided early in development so you can observe progress in real time, test features, and request minor adjustments within the agreed scope before final delivery.",
  },
  {
    question: "Do I receive full ownership and source code handover?",
    answer:
      "Upon full invoice settlement, you receive your agreed deliverables and access. Full source code repository transfer is provided according to our project agreement (e.g. direct GitHub repository transfer vs. managed hosting and CMS access).",
  },
  {
    question: "What warranty and bug-fix support is included after delivery?",
    answer:
      "We provide complimentary bug fixes and error corrections for 14 days on small projects and 21 days on large projects following the official delivery date. Once the warranty period expires, subsequent maintenance or modifications become billable.",
  },
  {
    question: "Can I request changes or new features after delivery?",
    answer:
      "Minor UI adjustments within the agreed scope must be requested before final delivery. Any new features outside the initial signed scope, or modifications requested after the delivery date, are estimated separately and billed as extra updates.",
  },
];

export const appDevFAQs = [
  {
    question: "Will the mobile app work on both iOS and Android?",
    answer:
      "Yes! Using React Native and Expo, I build a unified, high-performance codebase that compiles into native iOS and Android apps. This ensures native performance, device capabilities, and platform-specific styling while cutting development time and ongoing maintenance costs in half.",
  },
  {
    question: "How does the advance deposit and payment milestone schedule work?",
    answer:
      "A 20% to 25% advance deposit confirms scheduling and begins architecture and UI prototyping. The remaining balance is distributed across clear milestone deliverables (such as core screen completion, API integration, and final testing) before final store submission or repository transfer.",
  },
  {
    question: "Do you help publish the app to the Google Play Store and Apple App Store?",
    answer:
      "Yes. I provide end-to-end guidance for store submission: configuring app icons, splash screens, generating production signing keys (AAB and IPA builds via Expo EAS), preparing store metadata, and guiding submission through Google Play Console and Apple App Store Connect.",
  },
  {
    question: "Can I test the app on my physical smartphone during development?",
    answer:
      "Absolutely. You can test live preview builds directly on your own smartphone using Expo Go or by installing private staging APKs (for Android) and TestFlight builds (for iOS) throughout the development cycle.",
  },
  {
    question: "Do I receive full ownership and source code handover?",
    answer:
      "Upon full invoice settlement, you receive your agreed deliverables and access. Full source code repository transfer is provided according to our project agreement (e.g. direct GitHub repository transfer vs. managed app store & cloud deployment access).",
  },
  {
    question: "What post-launch support and warranty are included?",
    answer:
      "Every project includes 14 to 21 days of complimentary warranty support following official delivery to quickly resolve any unexpected bugs, device compatibility issues, or edge cases.",
  },
];

export const aiDevFAQs = [
  {
    question: "What are AI agents and how do they differ from basic chatbots?",
    answer:
      "Unlike simple question-and-answer chatbots, AI agents are autonomous goal-oriented programs. They break high-level objectives into tasks, reason through intermediate steps, call external APIs, query live databases, and execute actions automatically without continuous human supervision.",
  },
  {
    question: "How does RAG (Retrieval-Augmented Generation) keep company data secure and hallucination-free?",
    answer:
      "RAG connects LLMs to your private proprietary documents (PDFs, docs, databases) by indexing them into secure vector embeddings. When a question is asked, the system retrieves only relevant verified excerpts and forces the LLM to formulate answers strictly from those cited facts, preventing fabricated information.",
  },
  {
    question: "Which AI models and providers do you support?",
    answer:
      "I work with premier cloud models (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini) as well as open-source, locally hosted LLMs (Llama 3, Mistral, DeepSeek) running privately via Ollama or vLLM to maintain full data sovereignty and eliminate recurring API token fees.",
  },
  {
    question: "Can AI agents connect to my existing software, database, or CRM?",
    answer:
      "Yes. AI agents are built to interact with existing REST APIs, SQL/NoSQL databases (PostgreSQL, MongoDB), enterprise CRMs (HubSpot, Salesforce, custom CRMs like Velto), and messaging platforms (WhatsApp, Slack, Telegram) via structured function and tool calling.",
  },
  {
    question: "How do you optimize LLM latency and monthly token costs?",
    answer:
      "I apply semantic response caching, optimized system prompt engineering, token-budgeted context windows, and smart model routing (directing simpler requests to lighter, ultra-fast models and reserving high-tier models only for complex reasoning).",
  },
  {
    question: "Do I receive full ownership and source code handover?",
    answer:
      "Upon full invoice settlement, you receive your agreed deliverables and access. Full source code repository transfer is provided according to our project agreement (e.g. direct GitHub repository transfer vs. managed API deployment & server access).",
  },
  {
    question: "What warranty and post-launch evaluation support is provided?",
    answer:
      "I provide 14 to 21 days of post-deployment evaluation support to monitor live performance, tune system prompts, eliminate any edge cases, and ensure deterministic, reliable tool execution.",
  },
];

export const softwareDevFAQs = [
  {
    question: "Which operating systems do your software applications support?",
    answer:
      "I engineer cross-platform desktop applications that run reliably across Windows (10/11), macOS (Intel & Apple Silicon), and Linux distributions using Electron and modern desktop runtimes.",
  },
  {
    question: "Can the software work completely offline without an internet connection?",
    answer:
      "Yes. Using local embedded database engines like SQLite and IndexedDB, your software functions 100% offline with zero latency, and can automatically synchronize with cloud databases once network connectivity is restored.",
  },
  {
    question: "Can you connect desktop software to hardware peripherals (printers, scanners)?",
    answer:
      "Yes. Desktop software built with Electron and Node.js can directly interface with USB, serial, and local network devices including ESC/POS thermal receipt printers, barcode/QR scanners, cash drawers, and industrial weighing scales.",
  },
  {
    question: "How does the advance deposit and payment milestone schedule work?",
    answer:
      "A 20% to 25% advance deposit confirms scheduling and initiates architecture planning and UI prototyping. The balance is tied to clear deliverable milestones (core modules, hardware testing, installer creation) before final release handover.",
  },
  {
    question: "Do I receive full ownership and source code handover?",
    answer:
      "Upon full invoice settlement, you receive complete deliverables including full source code repository transfer, production installer builds (exe, dmg, deb), database scripts, and deployment instructions.",
  },
  {
    question: "What warranty and bug-fix support is included after delivery?",
    answer:
      "Every project includes 14 to 21 days of complimentary warranty support following the delivery date to swiftly resolve any edge cases, OS-specific quirks, or performance adjustments.",
  },
];

export const pricingFAQs = [
  {
    question: "How is pricing calculated in the Pricing Explorer?",
    answer:
      "Pricing is 100% transparent and project-based. Costs are calculated from the selected project category (Website, Mobile App, Internal System), the specific architectural scope (e.g. Single-Vendor Store, Multi-Vendor Marketplace, Cross-Platform App, POS, CRM, ERP), and whichever optional add-on features (such as payment gateways, automated email, PWA, 3D animations, or source code ownership) you toggle. There are zero surprise costs.",
    srOnly: "website cost calculator, app development cost calculator, pricing calculation",
  },
  {
    question: "Are there any hidden fees, monthly platform subscriptions, or surprise costs?",
    answer:
      "None. You only pay for the scope and features you select. All standard website packages include lifetime free hosting on modern cloud architectures (e.g. Vercel, Netlify) with zero recurring hosting costs from our end. Optional 1-year custom domain registration (.com) can be bundled or you can bring your own existing domain.",
    srOnly: "hidden costs web development, free hosting, no recurring developer fees",
  },
  {
    question: "How does the deposit and payment milestone schedule work?",
    answer:
      "A 20% to 25% advance deposit is standard to confirm scheduling and initiate architecture, design, and development. The remaining balance is payable upon project completion and verification of agreed features before final deployment or repository handover. For large multi-module projects (such as ERPs or multi-branch POS), milestones can be structured across clear deliverable phases.",
    srOnly: "advance deposit web development, payment schedule milestones freelance developer",
  },
  {
    question: "What payment methods do you accept (local in Pakistan & international)?",
    answer:
      "For clients in Pakistan, we accept direct bank transfers (Meezan Bank, HBL, etc.), Raast, JazzCash, and EasyPaisa. For international clients, we support direct international wire/IBAN bank transfers, Payoneer, Wise, and remittance services.",
    srOnly: "payment methods freelance developer pakistan, meezan bank jazzcash easypaisa wise payoneer",
  },
  {
    question: "Do I receive full ownership and raw source code handover?",
    answer:
      "Yes. Full deliverable rights and access are granted upon full invoice settlement. Full raw source code repository transfers (such as a clean GitHub repository transfer with documentation) are available as an add-on or standard deliverable depending on your chosen package, so your team has 100% intellectual property ownership with zero vendor lock-in.",
    srOnly: "source code ownership, github repository transfer, developer intellectual property handover",
  },
  {
    question: "What happens if my project needs custom requirements not listed in the explorer?",
    answer:
      "For desktop software (Electron), autonomous AI agents (LangChain/LangGraph, RAG knowledge bases), or specialized enterprise architectures, we offer tailored scoping. You can click 'Send on WhatsApp' or submit the contact form with your specific requirements, and we will prepare a detailed scope of work and fixed quotation within 24 hours.",
    srOnly: "custom software estimate, ai agent development pricing, contact for quote",
  },
  {
    question: "What post-launch warranty and bug-fix support is included with my project?",
    answer:
      "All projects include complimentary warranty support (14 days for standard websites, 21 days for complex web apps, mobile apps, and systems) post-launch to quickly diagnose and fix any unexpected edge cases, layout glitches, or code bugs at zero additional charge.",
    srOnly: "free warranty support web developer, post launch bug fixes",
  },
  {
    question: "Can I upgrade features or add more functionality after development starts?",
    answer:
      "Yes. If you decide to add features or expand scope during or after development, we simply review the additional requirements together and provide a transparent add-on quote without disrupting ongoing sprint timelines.",
    srOnly: "scope change web project, add new features to website",
  },
];




