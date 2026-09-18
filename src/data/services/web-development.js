import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import {
  FaCartShopping,
  FaBuilding,
  FaArrowsRotate,
  FaLaptopCode,
  FaLayerGroup,
  FaRobot,
  FaComments,
  FaBoltLightning,
  FaCode,
  FaClock,
  FaShieldHalved,
} from "react-icons/fa6";

export const webDevTechStack = [
  { label: "React", icon: FaReact, color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { label: "Node.js", icon: FaNodeJs, color: "#6BCB77" },
  { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { label: "Python", img: "/skills/python.png" },
];

export const webDevStats = [
  {
    id: "experience",
    label: "Experience",
    value: "2+",
    sublabel: "Years building full-stack web applications and digital products.",
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
    sublabel: "Client websites and production web applications successfully delivered.",
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
    value: "20+",
    sublabel: "Technologies and modern tech stacks mastered across frontend and backend.",
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
    label: "Trust",
    value: "100%",
    sublabel: "On-time milestone delivery with transparent communication and clean code.",
    labelColor: "text-[var(--secondary)]",
    shadow: "0 0 40px rgba(0,194,255,0.2)",
    align: "text-right",
    desktopPosition: { bottom: "16%", right: "6%" },
    mobilePosition: { bottom: "11%", right: "5%" },
    desktopDelta: { x: 28, y: 0 },
    mobileDelta: { x: 0, y: 16 },
  },
];

export const webDevServices = [
  {
    id: "01",
    title: "E-Commerce Development",
    description:
      "Custom online stores with product catalogs, shopping cart, checkout, payment integrations, and order management.",
    icon: FaCartShopping,
    tags: ["Payment Gateway", "Admin Portal", "Shopping Cart", "Discount & Coupons"],
  },
  {
    id: "02",
    title: "Business & Corporate Websites",
    description:
      "Professional websites designed to showcase your company, build trust, generate leads, and establish your brand online.",
    icon: FaBuilding,
    tags: ["Company Profile", "Appointment Booking", "Portfolio & Case Studies", "CRM Integration"],
  },
  {
    id: "03",
    title: "Revamp of Existing Websites",
    description:
      "Redesigning outdated sites with modern UI/UX, mobile responsiveness, clean code, and faster page load speeds.",
    icon: FaArrowsRotate,
    tags: ["UI/UX Redesign", "Speed Improvement", "Modern UI", "Feature Upgrades"],
  },
  {
    id: "04",
    title: "Full-Stack Web Applications",
    description:
      "Custom dynamic web applications built with modern frontend, backend APIs, user authentication, and databases.",
    icon: FaLaptopCode,
    tags: ["Custom Workflows", "Database Integration", "Real-Time Features", "Third-Party Integrations"],
  },
  {
    id: "05",
    title: "SaaS & Dashboard Development",
    description:
      "Web software, administrative portals, analytics dashboards, and subscription platforms with role-based access.",
    icon: FaLayerGroup,
    tags: ["Admin Portal", "Role-Based Access", "Analytics Dashboard", "Subscriptions"],
  },
  {
    id: "06",
    title: "AI-Powered Web Applications",
    description:
      "Integrating AI features into web apps, including conversational chatbots, smart automations, and LLM APIs.",
    icon: FaRobot,
    tags: ["LLM Integration", "AI Automation", "AI Agents", "Smart Workflows"],
  },
];

export const webDevPackages = [
  {
    id: "fullstack-and-ai",
    name: "Web Apps & AI",
    price: "40k – 150k",
    currency: "PKR",
    description: "For dynamic web platforms, custom backend architectures, and AI integrations.",
    services: [
      { name: "AI-Powered Web Applications", range: "40k – 140k" },
      { name: "Full-Stack Web Applications", range: "50k – 150k" },
    ],
    popular: false,
  },
  {
    id: "websites-and-stores",
    name: "Websites & Stores",
    price: "15k – 80k",
    currency: "PKR",
    description: "For corporate websites, revamping existing sites, and custom online stores.",
    services: [
      { name: "Revamp of Existing Websites", range: "15k – 50k" },
      { name: "Business & Corporate Websites", range: "25k – 70k" },
      { name: "E-Commerce Development", range: "35k – 80k" },
    ],
    popular: true,
  },
  {
    id: "saas-and-dashboards",
    name: "SaaS & Dashboards",
    price: "100k – 300k",
    currency: "PKR",
    description: "For custom cloud software, multi-tenant SaaS, and data analytics dashboards.",
    services: [
      { name: "Admin & Analytics Dashboards", range: "100k – 150k" },
      { name: "Multi-Tenant SaaS Web Applications", range: "100k – 300k" },
    ],
    popular: false,
  },
];

export const webDevReasons = [
  {
    id: "01",
    title: "Direct Developer Contact",
    description:
      "You communicate directly with the developer building your project, ensuring fast feedback, zero miscommunication, and prompt changes.",
    icon: FaComments,
  },
  {
    id: "02",
    title: "High Speed & Performance",
    description:
      "Clean, lightweight code optimized for fast load times, mobile performance, and high Google PageSpeed scores.",
    icon: FaBoltLightning,
  },
  {
    id: "03",
    title: "Full Deliverables Handover",
    description:
      "Agreed source code repository transfer, hosting setup, and database access delivered upon full invoice settlement.",
    icon: FaCode,
  },
  {
    id: "04",
    title: "Modern Tech Stack",
    description:
      "Built with scalable, reliable technologies like React, Next.js, Node.js, and modern databases for long-term stability.",
    icon: FaLayerGroup,
  },
  {
    id: "05",
    title: "On-Time Delivery",
    description:
      "Structured milestones and regular progress updates ensure your web product is delivered on time according to the agreed plan.",
    icon: FaClock,
  },
  {
    id: "06",
    title: "Warranty & Bug-Fix Support",
    description:
      "Free bug fixes and error corrections for 14 to 21 days following the delivery date to guarantee everything runs as agreed.",
    icon: FaShieldHalved,
  },
];
