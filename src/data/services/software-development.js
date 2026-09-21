import { SiElectron, SiSqlite, SiPostgresql } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import {
  FaDesktop,
  FaBuilding,
  FaGears,
  FaDatabase,
  FaRobot,
  FaServer,
  FaComments,
  FaBoltLightning,
  FaLayerGroup,
  FaCode,
  FaClock,
  FaShieldHalved,
} from "react-icons/fa6";

export const softwareDevTechStack = [
  { label: "Electron", icon: SiElectron, color: "#9FEAF9" },
  { label: "React", icon: FaReact, color: "#61DAFB" },
  { label: "Node.js", icon: FaNodeJs, color: "#6BCB77" },
  { label: "SQLite", icon: SiSqlite, color: "#003B57" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { label: "Python", img: "/skills/python.png" },
];

export const softwareDevStats = [
  {
    id: "experience",
    label: "Experience",
    value: "2+",
    sublabel: "Years engineering cross-platform software and enterprise management tools.",
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
    sublabel: "Custom software applications, retail POS, and enterprise CRM suites delivered.",
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
    value: "18+",
    sublabel: "Desktop runtimes, local storage engines, and system APIs mastered.",
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
    sublabel: "Milestone-driven software development with full source transfer and warranty.",
    labelColor: "text-[var(--secondary)]",
    shadow: "0 0 40px rgba(0,194,255,0.2)",
    align: "text-right",
    desktopPosition: { bottom: "16%", right: "6%" },
    mobilePosition: { bottom: "11%", right: "5%" },
    desktopDelta: { x: 28, y: 0 },
    mobileDelta: { x: 0, y: 16 },
  },
];

export const softwareDevServices = [
  {
    id: "01",
    title: "Cross-Platform Desktop Apps",
    description:
      "Native-feel desktop software for Windows, macOS, and Linux built using Electron, modern JavaScript, and local runtimes with rapid performance and auto-updates.",
    icon: FaDesktop,
    tags: ["Windows", "macOS", "Linux", "Electron", "Auto-Updates"],
  },
  {
    id: "02",
    title: "Enterprise Management Systems (POS & CRM)",
    description:
      "Custom retail POS, inventory control, and enterprise sales CRM platforms (like Vendra and Velto) with multi-branch synchronization and role-based workflows.",
    icon: FaBuilding,
    tags: ["POS Systems", "Custom CRM", "Inventory Control", "Multi-Branch"],
  },
  {
    id: "03",
    title: "Internal Tools & Automation Software",
    description:
      "Bespoke operational tools and workspaces that streamline administrative operations, file batch processing, employee reporting, and business automation.",
    icon: FaGears,
    tags: ["Workflow Automation", "Staff Portals", "Batch Processing", "Reporting"],
  },
  {
    id: "04",
    title: "Offline-First & Local Database Solutions",
    description:
      "Mission-critical desktop software built with local database engines (SQLite, IndexedDB) that remain 100% operational offline and sync seamlessly to the cloud.",
    icon: FaDatabase,
    tags: ["SQLite", "Offline-First", "Data Sync", "Zero Latency"],
  },
  {
    id: "05",
    title: "AI-Powered Desktop Workspaces",
    description:
      "Standalone desktop software infused with local and cloud AI models (like TeBre)—enabling intelligent manuscript editing, local document analysis, and smart file generation.",
    icon: FaRobot,
    tags: ["Local AI", "Document Processing", "Automated Exports", "API Integration"],
  },
  {
    id: "06",
    title: "Hardware Integration & System Migration",
    description:
      "Refactoring legacy software systems and connecting desktop applications to hardware peripherals including thermal receipt printers, barcode scanners, and external REST APIs.",
    icon: FaServer,
    tags: ["Hardware Integration", "Thermal Printers", "Barcode Scanners", "REST APIs"],
  },
];

export const softwareDevPackages = [
  {
    id: "mvp-software",
    name: "Desktop MVP & Tool",
    price: "30k – 90k",
    currency: "PKR",
    description: "For startups and businesses needing a focused desktop tool, utility, or offline operational MVP.",
    services: [
      { name: "Single-Platform Desktop Utility", range: "30k – 55k" },
      { name: "Cross-Platform Electron MVP", range: "55k – 90k" },
    ],
    popular: false,
  },
  {
    id: "management-systems",
    name: "POS & Business Systems",
    price: "60k – 160k",
    currency: "PKR",
    description: "For retail businesses, wholesale operations, and teams needing customized POS or CRM systems.",
    services: [
      { name: "POS & Inventory Management", range: "60k – 110k" },
      { name: "Enterprise CRM & Pipeline Platform", range: "80k – 160k" },
    ],
    popular: true,
  },
  {
    id: "enterprise-software",
    name: "Enterprise Software Suite",
    price: "120k – 350k",
    currency: "PKR",
    description: "For complex multi-branch systems, AI-powered desktop workspaces, and custom ecosystem integrations.",
    services: [
      { name: "Multi-Branch Sync & Offline-First Engine", range: "120k – 200k" },
      { name: "Full Custom Software Suite & Peripherals", range: "180k – 350k" },
    ],
    popular: false,
  },
];

export const softwareDevReasons = [
  {
    id: "01",
    title: "Direct Developer Contact",
    description:
      "You communicate directly with the software engineer developing your system, ensuring rapid implementation, zero communication gaps, and immediate adjustments.",
    icon: FaComments,
  },
  {
    id: "02",
    title: "High Performance & Low Resource Footprint",
    description:
      "Optimized architecture designed for instant startup, smooth user interactions, minimal CPU usage, and efficient memory management.",
    icon: FaBoltLightning,
  },
  {
    id: "03",
    title: "Cross-Platform Consistency",
    description:
      "Engineered to run natively on Windows, macOS, and Linux from a cohesive codebase, slashing long-term maintenance costs and deployment overhead.",
    icon: FaLayerGroup,
  },
  {
    id: "04",
    title: "Offline-First Reliability & Privacy",
    description:
      "Keep operations running even during network outages with embedded local databases (SQLite) that safeguard sensitive business data with zero lag.",
    icon: FaDatabase,
  },
  {
    id: "05",
    title: "Full Deliverables Handover",
    description:
      "Full source code repository transfer, production installers (exe, dmg, deb), database setup, and architecture documentation upon final invoice settlement.",
    icon: FaCode,
  },
  {
    id: "06",
    title: "Warranty & Bug-Fix Support",
    description:
      "Enjoy 14 to 21 days of complimentary post-deployment warranty support to guarantee smooth installation, hardware pairing, and error-free execution.",
    icon: FaShieldHalved,
  },
];
