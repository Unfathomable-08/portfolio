import { SiExpo, SiFirebase } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import {
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaApple,
  FaMobileScreenButton,
  FaComments,
  FaBoltLightning,
  FaLayerGroup,
  FaCode,
  FaRocket,
  FaShieldHalved,
} from "react-icons/fa6";

export const appDevTechStack = [
  { label: "React native", icon: FaReact, color: "#61DAFB" },
  { label: "Expo", icon: SiExpo, color: "#ffffff" },
  { label: "Node.js", icon: FaNodeJs, color: "#6BCB77" },
  { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { label: "Supabase", icon: RiSupabaseLine, color: "#22C55E" },
];

export const appDevStats = [
  {
    id: "experience",
    label: "Experience",
    value: "2+",
    sublabel: "Years building responsive, high-performance mobile applications.",
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
    sublabel: "Mobile applications, client portals, and digital tools delivered.",
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
    sublabel: "Mobile frameworks, state managers, and native device APIs mastered.",
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
    sublabel: "Milestone-driven delivery with clean architecture and tested releases.",
    labelColor: "text-[var(--secondary)]",
    shadow: "0 0 40px rgba(0,194,255,0.2)",
    align: "text-right",
    desktopPosition: { bottom: "16%", right: "6%" },
    mobilePosition: { bottom: "11%", right: "5%" },
    desktopDelta: { x: 28, y: 0 },
    mobileDelta: { x: 0, y: 16 },
  },
];

export const appDevServices = [
  {
    id: "01",
    title: "Android App for Play Store",
    description:
      "Native-feel Android applications tailored for Google Play Store compliance, high performance, Material Design standards, and smooth compatibility across various Android devices and screen sizes.",
    icon: FaAndroid,
    tags: ["Google Play Store", "Android SDK", "Material Design", "Release & Signing"],
  },
  {
    id: "02",
    title: "iOS App for App Store",
    description:
      "Premium iOS applications built in accordance with Apple's Human Interface Guidelines and App Store submission standards, with smooth animations, TestFlight beta testing, and App Store launch support.",
    icon: FaApple,
    tags: ["Apple App Store", "iOS Guidelines", "TestFlight", "App Store Connect"],
  },
  {
    id: "03",
    title: "Cross-Platform Apps",
    description:
      "High-performance cross-platform mobile apps built with React Native and Expo, delivering single-codebase efficiency, fast loading, and uniform native performance across both iOS and Android.",
    icon: FaMobileScreenButton,
    tags: ["React Native", "Expo", "Single Codebase", "iOS & Android"],
  },
];

export const appDevPackages = [
  {
    id: "mvp-app",
    name: "Mobile MVP & Prototype",
    price: "25k – 80k",
    currency: "PKR",
    description:
      "For startups and businesses needing a rapid, functional mobile prototype or MVP to validate their product concept.",
    services: [
      { name: "UI Prototyping & Flow Design", range: "25k – 45k" },
      { name: "Full MVP with Local Storage", range: "45k – 80k" },
    ],
    popular: false,
  },
  {
    id: "fullstack-mobile-app",
    name: "Full-Stack Mobile App",
    price: "50k – 120k",
    currency: "PKR",
    description:
      "For production-ready mobile apps requiring cloud databases, authentication, real-time sync, and backend API integration.",
    services: [
      { name: "Database, Auth & Cloud Sync", range: "50k – 80k" },
      { name: "Full-Stack Mobile Solution", range: "70k – 120k" },
    ],
    popular: true,
  },
  {
    id: "enterprise-mobile-app",
    name: "Enterprise & Custom Ecosystem",
    price: "100k – 300k",
    currency: "PKR",
    description:
      "For comprehensive mobile platforms with in-app payments, real-time chat, admin dashboard integration, and store publishing.",
    services: [
      { name: "Payments & In-App Purchases", range: "100k – 180k" },
      { name: "Full Ecosystem & Store Deployment", range: "150k – 300k" },
    ],
    popular: false,
  },
];

export const appDevReasons = [
  {
    id: "01",
    title: "Direct Developer Contact",
    description:
      "You collaborate directly with the mobile developer building your app, ensuring rapid feedback cycles, zero miscommunication, and fast iterations.",
    icon: FaComments,
  },
  {
    id: "02",
    title: "Fluid 60FPS Performance",
    description:
      "Optimized React Native and Expo architectures delivering smooth 60fps animations, fast render times, and efficient memory usage.",
    icon: FaBoltLightning,
  },
  {
    id: "03",
    title: "Single Codebase For iOS & Android",
    description:
      "Save 40%+ on development costs and timelines with clean, cross-platform code that runs natively across both iOS and Android devices.",
    icon: FaLayerGroup,
  },
  {
    id: "04",
    title: "Full Source Code Handover",
    description:
      "Complete Git repository transfer, configuration scripts, and documentation delivered to you upon full project settlement.",
    icon: FaCode,
  },
  {
    id: "05",
    title: "Store Submission & Compliance",
    description:
      "Hands-on guidance and assistance for preparing assets, complying with app store guidelines, and publishing to Google Play and Apple App Store.",
    icon: FaRocket,
  },
  {
    id: "06",
    title: "Warranty & Bug-Fix Support",
    description:
      "Free bug fixes and error corrections for 14 to 21 days following delivery to ensure your mobile launch runs smoothly.",
    icon: FaShieldHalved,
  },
];
