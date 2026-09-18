import {
  FaRobot,
  FaBrain,
  FaNetworkWired,
  FaDatabase,
  FaMicrochip,
  FaLaptopCode,
  FaComments,
  FaBoltLightning,
  FaShieldHalved,
  FaCode,
  FaRocket,
  FaSliders,
} from "react-icons/fa6";

export const aiDevTechStack = [
  { label: "Python", img: "/skills/python.png" },
  { label: "LangChain", img: "/skills/langchain.png" },
  { label: "LangGraph", img: "/skills/langgraph.png" },
  { label: "PyTorch", img: "/skills/pytorch.png" },
  { label: "Tensorflow", img: "/skills/tensorflow.png" },
];

export const aiDevStats = [
  {
    id: "experience",
    label: "Experience",
    value: "2+",
    sublabel: "Years building intelligent LLM pipelines, autonomous agents, and RAG architectures.",
    labelColor: "text-[var(--secondary)]",
    shadow: "0 0 40px rgba(0,194,255,0.25)",
    align: "text-left",
    desktopPosition: { top: "20%", left: "6%" },
    mobilePosition: { top: "11%", left: "5%" },
    desktopDelta: { x: -28, y: 0 },
    mobileDelta: { x: 0, y: -16 },
  },
  {
    id: "projects",
    label: "Projects",
    value: "35+",
    sublabel: "AI agents, automated workflows, and production web systems deployed.",
    labelColor: "text-emerald-400",
    shadow: "0 0 40px rgba(52,211,153,0.2)",
    align: "text-right",
    desktopPosition: { top: "20%", right: "6%" },
    mobilePosition: { top: "24%", right: "5%" },
    desktopDelta: { x: 28, y: 0 },
    mobileDelta: { x: 0, y: -16 },
  },
  {
    id: "tech-stack",
    label: "Tech Stack",
    value: "15+",
    sublabel: "AI frameworks, vector stores, and orchestration toolchains mastered.",
    labelColor: "text-violet-400",
    shadow: "0 0 40px rgba(167,139,250,0.2)",
    align: "text-left",
    desktopPosition: { bottom: "16%", left: "6%" },
    mobilePosition: { bottom: "24%", left: "5%" },
    desktopDelta: { x: -28, y: 0 },
    mobileDelta: { x: 0, y: 16 },
  },
  {
    id: "reliability",
    label: "Trust & Precision",
    value: "100%",
    sublabel: "Strict evaluation, hallucination guardrails, and deterministic tool execution.",
    labelColor: "text-[var(--secondary)]",
    shadow: "0 0 40px rgba(0,194,255,0.2)",
    align: "text-right",
    desktopPosition: { bottom: "16%", right: "6%" },
    mobilePosition: { bottom: "11%", right: "5%" },
    desktopDelta: { x: 28, y: 0 },
    mobileDelta: { x: 0, y: 16 },
  },
];

export const aiDevServices = [
  {
    id: "01",
    title: "AI Automation Workflows",
    description:
      "Automating complex, repetitive tasks and manual business operations using intelligent AI pipelines, script orchestration, and automated triggers to save hundreds of operational hours and eliminate bottlenecks.",
    icon: FaBoltLightning,
    tags: ["Process Automation", "Manual Task Elimination", "Task Scheduling", "Time-Saving Workflows"],
  },
  {
    id: "02",
    title: "RAG Agents / AI Chatbot",
    description:
      "Retrieval-Augmented Generation (RAG) agents that connect LLMs directly to your private company documents, datasets, and knowledge bases using vector search (FAISS, Pinecone) to deliver verified, citation-backed answers with zero hallucinations.",
    icon: FaDatabase,
    tags: ["Private Document Q&A", "Vector Search", "FAISS & Pinecone", "Zero Hallucinations"],
  },
  {
    id: "03",
    title: "Enterprise AI Integration",
    description:
      "Integrating cutting-edge AI capabilities into your existing software ecosystems—including CRMs, ERPs, CMS platforms, operational dashboards, websites, and mobile apps to supercharge existing workflows.",
    icon: FaNetworkWired,
    tags: ["CRM & ERP Integration", "Websites & Mobile Apps", "CMS & Dashboards", "API Connectors"],
  },
  {
    id: "04",
    title: "AI Messaging & Social Media Agents",
    description:
      "Autonomous 24/7 engagement agents for WhatsApp, email, and social media platforms—automating direct messages, answering customer inquiries, auto-replying to post comments, and qualifying incoming leads.",
    icon: FaComments,
    tags: ["WhatsApp Automation", "Email Management", "Social Media DMs", "Comment Auto-Reply"],
  },
  {
    id: "05",
    title: "Multi-Agent Systems",
    description:
      "Collaborative multi-agent ecosystems built with LangGraph where specialized agents divide complex workflows into sub-tasks, cross-validate each other's outputs, and execute end-to-end projects with high accuracy.",
    icon: FaRobot,
    tags: ["LangGraph", "Multi-Agent Workflows", "Collaborative AI", "Complex Task Delegation"],
  },
  {
    id: "06",
    title: "AI-Powered Software & Workspaces",
    description:
      "Full-scale, standalone desktop workspaces and productivity software suites (like TeBre) powered by local databases, multi-provider AI, specialized editors, and automated file exports tailored to specific industries.",
    icon: FaLaptopCode,
    tags: ["Desktop Software", "Electron & React", "Specialized Workspaces", "Multi-Provider AI"],
  },
];

export const aiDevPackages = [
  {
    id: "ai-mvp-poc",
    name: "AI MVP & Prototype",
    price: "40k – 100k",
    currency: "PKR",
    description:
      "For startups and teams validating an AI concept, custom chatbot, or workflow automation prototype.",
    services: [
      { name: "Custom AI Chatbot or Assistant", range: "40k – 70k" },
      { name: "Prototype RAG or Tool-Calling Script", range: "60k – 100k" },
    ],
    popular: false,
  },
  {
    id: "production-rag-agents",
    name: "Production AI Agent & RAG",
    price: "80k – 200k",
    currency: "PKR",
    description:
      "For businesses needing grounded document intelligence, multi-step agent workflows, and API integrations.",
    services: [
      { name: "Full RAG Pipeline & Vector Indexing", range: "80k – 140k" },
      { name: "Autonomous Agent & Tool Integrations", range: "120k – 200k" },
    ],
    popular: true,
  },
  {
    id: "enterprise-multiagent",
    name: "Enterprise Multi-Agent Ecosystem",
    price: "180k – 450k",
    currency: "PKR",
    description:
      "For complex enterprise automation requiring multi-agent orchestration, custom local model deployment, and high-volume scalability.",
    services: [
      { name: "Multi-Agent System & LangGraph Workflows", range: "180k – 300k" },
      { name: "Full-Stack AI Platform & Local LLM Hosting", range: "250k – 450k" },
    ],
    popular: false,
  },
];

export const aiDevReasons = [
  {
    id: "01",
    title: "Direct AI Engineer Contact",
    description:
      "You collaborate directly with an engineer who understands both modern LLM architectures and production full-stack engineering, avoiding agency middlemen.",
    icon: FaComments,
  },
  {
    id: "02",
    title: "Grounded & Zero Hallucinations",
    description:
      "Strict retrieval thresholds, source citation verification, and schema validation guarantee answers are accurate, predictable, and fully grounded in your data.",
    icon: FaShieldHalved,
  },
  {
    id: "03",
    title: "Deterministic Tool Calling",
    description:
      "Agents are built with robust JSON schema validation, error retries, and fallback handling to execute real actions reliably across your databases and APIs.",
    icon: FaSliders,
  },
  {
    id: "04",
    title: "Full Deliverables Handover",
    description:
      "Agreed source code repository transfer, hosting setup, and database access delivered upon full invoice settlement.",
    icon: FaCode,
  },
  {
    id: "05",
    title: "Token & Latency Optimization",
    description:
      "Optimized prompt compression, smart semantic caching, streaming responses, and model routing keep your inference costs minimal and response times lightning-fast.",
    icon: FaBoltLightning,
  },
  {
    id: "06",
    title: "Warranty & Evaluation Support",
    description:
      "14 to 21 days of post-launch evaluation, prompt tuning, and bug fixes to ensure your AI agent operates flawlessly under real-world usage.",
    icon: FaRocket,
  },
];
