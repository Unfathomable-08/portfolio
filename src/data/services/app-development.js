import { SiExpo, SiFirebase } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import {
  FaReact,
  FaNodeJs,
  FaMobileScreenButton,
  FaSliders,
  FaPalette,
  FaDatabase,
  FaBell,
  FaRocket,
  FaComments,
  FaBoltLightning,
  FaLayerGroup,
  FaCode,
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
    title: "Cross-Platform iOS & Android Apps",
    description:
      "Single-codebase mobile applications engineered with React Native and Expo that run flawlessly on both Apple iOS and Android devices.",
    icon: FaMobileScreenButton,
    tags: ["React Native", "Expo", "iOS & Android", "Single Codebase"],
  },
  {
    id: "02",
    title: "Native Device Features & Hardware",
    description:
      "Direct integration with device hardware including Camera, GPS/Location, Biometric Authentication, Accelerometer, and Local Storage.",
    icon: FaSliders,
    tags: ["Camera API", "GPS & Maps", "Biometrics", "Device Storage"],
  },
  {
    id: "03",
    title: "Fluid UI/UX & Mobile Animations",
    description:
      "Modern mobile UI design with 60 FPS gesture handling, haptic feedback, theme switching (dark/light), and smooth screen transitions.",
    icon: FaPalette,
    tags: ["Gesture Handler", "60 FPS Animations", "Dark/Light Mode", "Responsive Layouts"],
  },
  {
    id: "04",
    title: "Offline-First & Cloud Synchronization",
    description:
      "Robust local data storage with offline caching and background synchronization when network connectivity is restored.",
    icon: FaDatabase,
    tags: ["AsyncStorage", "SQLite / Realm", "Offline Cache", "Background Sync"],
  },
  {
    id: "05",
    title: "Push Notifications & Real-Time Sync",
    description:
      "Targeted push notifications, instant messaging, and real-time live events using Firebase Cloud Messaging (FCM) and WebSockets.",
    icon: FaBell,
    tags: ["FCM Push Notifications", "Real-Time Chat", "Live Events", "In-App Alerts"],
  },
  {
    id: "06",
    title: "App Store & Play Store Deployment",
    description:
      "Full assistance with release builds, signing certificates, store compliance, screenshots, and publishing to Google Play & Apple App Store.",
    icon: FaRocket,
    tags: ["Google Play Store", "Apple App Store", "EAS Build", "Release Management"],
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
