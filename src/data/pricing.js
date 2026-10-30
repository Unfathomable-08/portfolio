export const pricingCategories = [
  { "id": "website", "label": "Website", "description": "From simple portfolios to full-scale e-commerce, websites that work 24/7.", "iconName": "FaGlobe", "disabled": false },
  { "id": "mobile-app", "label": "Mobile App", "description": "Android & iOS apps built with React Native for seamless cross-platform performance.", "iconName": "FaMobileScreen", "disabled": false },
  { "id": "desktop", "label": "Desktop Software", "description": "Windows applications for business operations, POS, inventory, and more.", "iconName": "FaDesktop", "disabled": false },
  { "id": "internal", "label": "Internal System", "description": "Custom ERP, CRM, and dashboards built for your team's workflows.", "iconName": "FaGears", "disabled": false },
  { "id": "ai", "label": "AI & Automation", "description": "Always custom-scoped, CONTACT FOR PRICING.", "iconName": "FaRobot", "disabled": true, "customOnly": true  }
];

export const pricingSubcategories = {
  "website": [
    { "id": "ecommerce", "label": "E-Commerce Store", "description": "Online stores with product catalogs, shopping cart, and payment gateway." },
    { "id": "business", "label": "Business / Agency", "description": "Professional websites to establish authority, generate leads, and showcase services." },
    { "id": "restaurant", "label": "Restaurant", "description": "Showcase menus, enable table reservations, or accept direct online food orders." },
    { "id": "portfolio", "label": "Portfolio", "description": "Highlight personal work, creative media, photography, or agency case studies." },
    { "id": "landing-page", "label": "Landing Page", "description": "High-conversion single-page sites built to capture leads or drive product sales." },
  ],
  "mobile-app": [
    { "id": "ecommerce-app", "label": "E-Commerce App", "description": "Mobile shopping apps with fast checkout, push alerts, and order tracking." },
    { "id": "business-app", "label": "Business App", "description": "Dedicated apps for client booking, company services, and customer portals." },
    { "id": "booking-app", "label": "Booking & Appointment", "description": "Scheduling apps for clinics, salons, fitness studios, and consultants." },
    { "id": "food-app", "label": "Food Delivery App", "description": "Food ordering apps with real-time delivery tracking and menu catalogs." },
    { "id": "custom-app", "label": "Custom App", "description": "Bespoke mobile applications tailored to your specific product or business logic."  }
  ],
  "desktop": [
    { "id": "pos", "label": "POS System", "description": "Point of Sale software for retail, supermarkets, and restaurants." },
    { "id": "inventory", "label": "Inventory Management", "description": "Warehouse and stock tracking with low-stock alerts and purchase orders." },
    { "id": "custom-desktop", "label": "Custom Desktop App", "description": "Bespoke Windows or cross-platform utility and operational desktop software."  }
  ],
  "internal": [
    { "id": "erp", "label": "ERP System", "description": "Comprehensive enterprise resource planning covering HR, payroll, accounting, and sales." },
    { "id": "crm", "label": "CRM System", "description": "Customer relationship management to track leads, pipeline stages, and communications." },
    { "id": "management", "label": "Management Dashboard", "description": "Centralized analytical dashboards with real-time reporting and role-based metrics."  }
  ]
};

export const pricingVariants = {
  "website.ecommerce": [
    { "id": "single-vendor", "label": "Single Vendor Store", "description": "Get a professional online store with modern design and powerful features. Everything you need to start selling." },
    { "id": "multi-vendor", "label": "Multi-Vendor Marketplace", "description": "Platform enabling multiple independent vendors with merchant dashboards."  }
  ],
  "website.business": [
    { "id": "informational", "label": "Informational", "description": "Company profile, service catalog, about company, and lead inquiry forms." },
    { "id": "with-booking", "label": "With Booking System", "description": "Integrates scheduling calendars, appointments, and client confirmations." },
    { "id": "with-portal", "label": "With Client Portal", "description": "Secure customer dashboard with project progress, invoices, and file sharing."  }
  ],
  "website.restaurant": [
    { "id": "menu-only", "label": "Menu Showcase", "description": "Digital food menu showcase with photos, hours, and location maps  (without online ordering option)." },
    { "id": "with-ordering", "label": "With Online Ordering", "description": "Complete online cart, checkout, delivery/pickup, and kitchen alerts." },
    { "id": "full-system", "label": "Full Restaurant System", "description": "Online ordering plus table reservations, loyalty programs, and branch analytics."  }
  ],
  "website.portfolio": [
    { "id": "personal", "label": "Portfolio Website", "description": "High-impact developer, designer, or personal branding portfolio with project & case study showcases." }
  ],
  "website.landing-page": [
    { "id": "simple", "label": "Simple", "description": "Focused single-page hero, features, social proof, and direct lead capture." },
    { "id": "advanced", "label": "Advanced", "description": "High-impact sales page with video hero, countdowns, payment CTA, and heatmaps."  }
  ],
  "mobile-app.ecommerce-app": [
    { "id": "android", "label": "Android Only", "description": "Native Android application distributed via Google Play Store." },
    { "id": "both-platforms", "label": "Android + iOS", "description": "Unified cross-platform React Native app for both Android and Apple devices."  }
  ],
  "mobile-app.business-app": [
    { "id": "android", "label": "Android Only", "description": "Dedicated Android app for company services and client interactions." },
    { "id": "both-platforms", "label": "Android + iOS", "description": "Cross-platform app targeting both Google Play and Apple App Store."  }
  ],
  "mobile-app.booking-app": [
    { "id": "android", "label": "Android Only", "description": "Android-focused client appointment booking and calendar management." },
    { "id": "both-platforms", "label": "Android + iOS", "description": "Complete Android + iOS appointment scheduling and payment app."  }
  ],
  "mobile-app.food-app": [
    { "id": "single-restaurant", "label": "Single Restaurant", "description": "Exclusive branded mobile ordering app for a single restaurant or brand." },
    { "id": "multi-restaurant", "label": "Multi-Restaurant Platform", "description": "Delivery aggregator platform connecting customers, restaurants, and riders."  }
  ],
  "mobile-app.custom-app": [
    { "id": "android", "label": "Android Only", "description": "Custom Android application built to your technical specifications." },
    { "id": "both-platforms", "label": "Android + iOS", "description": "Cross-platform React Native solution running natively on iOS and Android."  }
  ],
  "desktop.pos": [
    { "id": "single-terminal", "label": "Single Terminal", "description": "Standalone cash counter software with local database and thermal printing." },
    { "id": "multi-terminal", "label": "Multi-Terminal / Branch", "description": "Multi-counter networked POS synced with central cloud database."  }
  ],
  "desktop.inventory": [
    { "id": "basic", "label": "Basic", "description": "Single-store stock tracking, barcode support, and low-inventory alerts." },
    { "id": "advanced", "label": "Advanced", "description": "Multi-location inventory tracking, purchase orders, and supplier workflows."  }
  ],
  "desktop.custom-desktop": [
    { "id": "windows", "label": "Windows", "description": "High-performance native Windows software (.NET / Electron / Tauri)." },
    { "id": "cross-platform", "label": "Cross-Platform", "description": "Runs identically across Windows, macOS, and Linux distributions."  }
  ],
  "internal.erp": [
    { "id": "small", "label": "Small Business (up to 20 users)", "description": "Core modules: inventory, HR & payroll, sales, and accounts for small teams." },
    { "id": "medium", "label": "Medium Enterprise (20-100 users)", "description": "Enterprise-grade system with multi-location management, approval chains, and audits."  }
  ],
  "internal.crm": [
    { "id": "basic", "label": "Basic CRM", "description": "Lead tracking, pipeline visualizer, contact records, and scheduled follow-ups." },
    { "id": "advanced", "label": "Advanced CRM", "description": "Multi-stage pipeline, automated emails, WhatsApp integration, and sales forecasting."  }
  ],
  "internal.management": [
    { "id": "basic", "label": "Basic Dashboard", "description": "Centralized KPI dashboards, standard charts, user auth, and CSV exports." },
    { "id": "advanced", "label": "Advanced Dashboard", "description": "Real-time websockets, granular RBAC, custom workflow automation, and scheduled reports."  }
  ]
};

export const pricingFeatures = {
  "website.ecommerce.single-vendor": [
    { "id": "modern-store", "label": "Modern Online Store", "price": 10000, "required": true },
    { "id": "admin-portal", "label": "Easy-to-Use Admin Portal", "price": 8000, "required": true },
    { "id": "free-domain", "label": "1-Year Domain", "price": 3000, "required": false },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false },
    { "id": "cart-checkout", "label": "Shopping Cart & Checkout", "price": 4000, "required": true },
    { "id": "cod", "label": "Cash On Delivery (COD)", "price": 0, "required": true },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat Integration", "price": 0, "required": false },
    { "id": "pages-10", "label": "Upto 10-20 pages of your choice", "price": 0, "required": true },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false },
    { "id": "animations-3d", "label": "3D Look & Advance Animations", "price": 2000, "required": false },
    { "id": "online-payments", "label": "Payment Integrations (Jazzcash, Easypaisa & Bank Merchants)", "price": 4000, "required": false },
    { "id": "source-code-ownership", "label": "Full Source Code Ownership", "price": 4000, "required": false },
    { "id": "basic-seo", "label": "Technical & Local SEO", "price": 2500, "required": false },
    { "id": "cust-login", "label": "Customer Login & Signup", "price": 2500, "required": false },
    { "id": "pwa-app", "label": "Installable App (PWA)", "price": 2500, "required": false },
    { "id": "email-automation", "label": "Email Automation", "price": 1500, "required": false },
    { "id": "google-business", "label": "Google Business Profile Setup", "price": 1000, "required": false },
  ],

  "website.ecommerce.multi-vendor": [
    { "id": "marketplace-storefront", "label": "Complete Multi-Vendor Marketplace Storefront", "price": 20000, "required": true },
    { "id": "vendor-portals", "label": "Dedicated Merchant / Vendor Portals", "price": 15000, "required": true },
    { "id": "marketplace-core", "label": "Super Admin Portal & Core Marketplace Engine", "price": 15000, "required": true },
    { "id": "payment-integrations", "label": "Payment Gateways (JazzCash, EasyPaisa & Bank Merchants)", "price": 8000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 7000, "required": false },
    { "id": "auto-payouts", "label": "Automated Vendor Payout System", "price": 10000, "required": false },
    { "id": "pwa-app", "label": "Installable Marketplace App (PWA)", "price": 5000, "required": false },
    { "id": "analytics-suite", "label": "Advanced Sales & Revenue Analytics", "price": 5000, "required": false },
    { "id": "seo-optimization", "label": "Complete Marketplace SEO & Search Optimization", "price": 7000, "required": false },
    { "id": "domain", "label": "1-Year Custom Domain", "price": 3000, "required": false },
    { "id": "notifications-email", "label": "Automated Email & Push Notifications", "price": 5000, "required": false  }
  ],

  "website.business.informational": [
    { "id": "res-design", "label": "Modern Responsive Business Website", "price": 15000, "required": true, "description": "Professional brand-aligned responsive corporate identity website." },
    { "id": "core-pages", "label": "Core Pages (Home, About, Services, Contact)", "price": 5000, "required": true, "description": "Complete set of high-impact foundational company pages." },
    { "id": "contact-form", "label": "Interactive Lead Capture & Contact Form", "price": 0, "required": true, "description": "Interactive lead inquiry form with spam protection and inbox alerts." },
    { "id": "pages-choice", "label": "Upto 7-15 Pages of Your Choice", "price": 0, "required": true, "description": "Tailored page structure designed specifically around your business offerings." },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true, "description": "Fluid adaptive design delivering pixel-perfect layout on all screen sizes." },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false, "description": "1 year custom .com domain registration with DNS setup and SSL." },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false, "description": "Reliable high-speed lifetime cloud hosting included." },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false, "description": "100% full domain ownership registered in your name." },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false, "description": "Clean, optimized, and maintainable production-grade code repository." },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat & Direct Inquiry Button", "price": 0, "required": false, "description": "Direct WhatsApp widget for instant customer inquiries." },
    { "id": "social-media", "label": "Social Media Links & Feed Integration", "price": 0, "required": false, "description": "Embed corporate social handles and profile links." },
    { "id": "google-maps", "label": "Interactive Google Map & Location Pins", "price": 0, "required": false, "description": "Embedded interactive map showing physical office locations." },
    { "id": "animations-3d", "label": "3D Look & Advance Animations", "price": 5000, "required": false, "description": "Modern 3D visual depth, interactive hover effects, and Framer Motion micro-interactions." },
    { "id": "elite-animations", "label": "Extraordinary 3D Look & Exceptional Animations", "price": 12000, "required": false, "description": "Bespoke high-end 3D immersion, custom shaders/WebGL, and state-of-the-art cinematic UI animations." },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 5000, "required": false, "description": "Full clean source repository ownership with documentation." },
    { "id": "basic-seo", "label": "On-Page SEO & Google Indexing", "price": 3500, "required": false, "description": "Local business structured schema and target keyword optimization." },
    { "id": "google-business", "label": "Google Business Profile Setup", "price": 1500, "required": false, "description": "Official Google Business profile creation and map verification." }
  ],

  "website.business.with-booking": [
    { "id": "res-design", "label": "Modern Responsive Business Website", "price": 15000, "required": true, "description": "Professional brand-aligned responsive corporate identity website." },
    { "id": "core-pages", "label": "Core Pages (Home, About, Services, Contact)", "price": 5000, "required": true, "description": "Complete set of high-impact foundational company pages." },
    { "id": "booking-sys", "label": "Interactive Booking & Appointment System", "price": 5000, "required": true, "description": "Interactive appointment scheduling engine with time slot management." },
    { "id": "contact-form", "label": "Interactive Lead Capture & Contact Form", "price": 0, "required": true, "description": "Inquiry form with instant email alerts and notifications." },
    { "id": "pages-choice", "label": "Upto 7-15 Pages of Your Choice", "price": 0, "required": true, "description": "Tailored page structure designed specifically around your business offerings." },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true, "description": "Fluid adaptive design delivering pixel-perfect layout on all screen sizes." },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false, "description": "1 year custom .com domain registration with DNS setup and SSL." },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false, "description": "Reliable high-speed lifetime cloud hosting included." },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false, "description": "100% full domain ownership registered in your name." },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false, "description": "Clean, optimized, and maintainable production-grade code repository." },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat & Direct Inquiry Button", "price": 0, "required": false, "description": "Direct WhatsApp widget for instant customer inquiries." },
    { "id": "social-media", "label": "Social Media Links & Feed Integration", "price": 0, "required": false, "description": "Embed corporate social handles and profile links." },
    { "id": "google-maps", "label": "Interactive Google Map & Location Pins", "price": 0, "required": false, "description": "Embedded interactive map showing physical office locations." },
    { "id": "animations-3d", "label": "3D Look & Advance Animations", "price": 5000, "required": false, "description": "Modern 3D visual depth, interactive hover effects, and Framer Motion micro-interactions." },
    { "id": "elite-animations", "label": "Extraordinary 3D Look & Exceptional Animations", "price": 12000, "required": false, "description": "Bespoke high-end 3D immersion, custom shaders/WebGL, and state-of-the-art cinematic UI animations." },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 5000, "required": false, "description": "Full clean source repository ownership with documentation." },
    { "id": "basic-seo", "label": "On-Page SEO & Google Indexing", "price": 3500, "required": false, "description": "Local business structured schema and target keyword optimization." },
    { "id": "google-business", "label": "Google Business Profile Setup & Optimization", "price": 1500, "required": false, "description": "Official Google Business profile creation and map verification." }
  ],

  "website.business.with-portal": [
    { "id": "res-design", "label": "Executive Corporate Website", "price": 15000, "required": true, "description": "Executive responsive agency website with private portal gateway." },
    { "id": "portal-dash", "label": "Client Portal Login & Secure Dashboard", "price": 15000, "required": true, "description": "Password-protected client area with tailored project status dashboard." },
    { "id": "core-pages", "label": "Core Pages (Home, Services, Case Studies, Contact)", "price": 5000, "required": true, "description": "Public corporate pages for brand positioning and sales pitch." },
    { "id": "progress-track", "label": "Project Progress & Milestone Tracking", "price": 5000, "required": true, "description": "Interactive milestone timeline and status bar per client project." },
    { "id": "pages-choice", "label": "Upto 10-20 Pages of Your Choice", "price": 0, "required": true, "description": "Extended website and portal architecture tailored to your service structure." },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true, "description": "Flawless mobile and desktop responsiveness across the public site and portal." },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false, "description": "1-year custom .com domain registration with SSL." },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false, "description": "Dedicated cloud setup to reliably power website and portal authentication." },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false, "description": "100% full domain ownership registered in your name." },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false, "description": "Clean, optimized, and maintainable production-grade code repository." },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat & Direct Inquiry Button", "price": 0, "required": false, "description": "Direct WhatsApp contact for quick customer support and inquiries." },
    { "id": "social-media", "label": "Social Media Links & Feed Integration", "price": 0, "required": false, "description": "Embed corporate social handles and profile links." },
    { "id": "google-maps", "label": "Interactive Google Map & Location Pins", "price": 0, "required": false, "description": "Embedded interactive map showing office locations." },
    { "id": "animations-3d", "label": "3D Look & Advance Animations", "price": 5000, "required": false, "description": "Modern 3D visual depth, interactive hover effects, and Framer Motion micro-interactions." },
    { "id": "elite-animations", "label": "Extraordinary 3D Look & Exceptional Animations", "price": 10000, "required": false, "description": "Bespoke high-end 3D immersion, custom shaders/WebGL, and state-of-the-art cinematic UI animations." },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 5000, "required": false, "description": "Complete proprietary repository codebase with full commercial license." },
    { "id": "file-sharing", "label": "Secure Cloud File Sharing & Document Hub", "price": 4000, "required": false, "description": "Secure bidirectional file uploads, deliverables, and brief attachments." },
    { "id": "inv-mgmt", "label": "Client Invoicing & Payment Status Tracking", "price": 4000, "required": false, "description": "Generate, view, and download PDF client invoices and payment records." },
    { "id": "seo", "label": "On-Page & Technical Business SEO", "price": 2500, "required": false, "description": "Corporate structured data schema, sitemaps, and search engine optimization." },
    { "id": "google-business", "label": "Google Business Profile Setup & Optimization", "price": 1500, "required": false, "description": "Official Google Business Profile setup and local map optimization." }
  ],

  "website.restaurant.menu-only": [
    { "id": "res-showcase", "label": "Modern Restaurant Showcase Website", "price": 10000, "required": true, "description": "Appetizing responsive layout showcasing your restaurant's story, ambiance, and food highlights." },
    { "id": "digital-menu", "label": "Interactive Categorized Digital Food Menu", "price": 5000, "required": true, "description": "Clean categorized food menu with photos, descriptions, portion sizes, and clear pricing." },
    { "id": "pages-food", "label": "Upto 5-10 Pages of Your Choice", "price": 0, "required": true, "description": "Custom designed pages (Home, Story, Menu categories, Ambience, Contact)." },
    { "id": "contact-hours", "label": "Contact, Opening Hours & Location Info", "price": 0, "required": true, "description": "Clear opening hours, phone numbers, table reservation contact, and address details." },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true, "description": "Fast-loading mobile-first user experience for on-the-go food browsing." },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat & Direct Order/Inquiry Button", "price": 0, "required": false },
    { "id": "social-media", "label": "Social Media & Instagram Feed Integration", "price": 0, "required": false },
    { "id": "google-maps", "label": "Interactive Google Map & Location Pins", "price": 0, "required": false },
    { "id": "qr-menu", "label": "Print-Ready Scannable Dine-In QR Code Menu", "price": 2500, "required": false },
    { "id": "photo-gallery", "label": "High-Resolution Food & Ambiance Gallery", "price": 1500, "required": false },
    { "id": "basic-seo", "label": "Technical & Local SEO", "price": 4500, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 2000, "required": false },
    { "id": "google-business", "label": "Google Business Profile Setup", "price": 1500, "required": false,  }
  ],

  "website.restaurant.with-ordering": [
    { "id": "ordering-storefront", "label": "Modern Food Ordering Storefront", "price": 10000, "required": true },
    { "id": "admin-kitchen", "label": "Easy-to-Use Kitchen & Order Admin Portal", "price": 8000, "required": true },
    { "id": "cart-checkout", "label": "Online Food Cart & Checkout Flow", "price": 4000, "required": true },
    { "id": "cod", "label": "Cash On Delivery (COD) & Pay at Pickup", "price": 0, "required": true },
    { "id": "digital-menu", "label": "Digital Menu with Size & Item Customizations", "price": 3000, "required": true },
    { "id": "pages-ordering", "label": "Upto 10-20 Pages of Your Choice", "price": 0, "required": true },
    { "id": "mobile-responsive", "label": "100% Mobile Ordering Optimized", "price": 0, "required": true },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat & Order Alerts Integration", "price": 0, "required": false },
    { "id": "social-media", "label": "Social Media & Instagram Feed Integration", "price": 0, "required": false },
    { "id": "google-maps", "label": "Interactive Google Map & Delivery Radius Pin", "price": 0, "required": false },
    { "id": "online-payments", "label": "Payment Integrations (Jazzcash, Easypaisa & Bank Merchants)", "price": 5000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 5000, "required": false },
    { "id": "animations-3d", "label": "3D Look & Advance Animations", "price": 2000, "required": false },
    { "id": "pwa-app", "label": "Installable Restaurant App (PWA)", "price": 2500, "required": false },
    { "id": "cust-login", "label": "Customer Login & Order History", "price": 2500, "required": false },
    { "id": "qr-menu", "label": "Dine-In Table QR Code Ordering System", "price": 1500, "required": false },
    { "id": "basic-seo", "label": "Technical & Local SEO", "price": 2500, "required": false },
    { "id": "google-business", "label": "Google Business Profile Setup", "price": 1000, "required": false }
  ],

  "website.restaurant.full-system": [
    { "id": "enterprise-platform", "label": "Multi-Branch Online Ordering & Table Booking Platform", "price": 20000, "required": true },
    { "id": "admin-kds", "label": "Central Operations Portal & Kitchen Display System (KDS)", "price": 15000, "required": true },
    { "id": "branch-mgmt", "label": "Multi-Branch Management & Routing Engine", "price": 15000, "required": true },
    { "id": "online-payments", "label": "Payment Gateways (JazzCash, EasyPaisa, Cards & Bank Merchants)", "price": 10000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 10000, "required": false },
    { "id": "loyalty-system", "label": "Customer Loyalty Program & Points Reward Engine", "price": 8000, "required": false },
    { "id": "pwa-app", "label": "Installable Mobile App for Customers & Staff (PWA)", "price": 5000, "required": false },
    { "id": "analytics-suite", "label": "Sales, Branch & Peak-Hour Analytics Dashboard", "price": 7000, "required": false },
    { "id": "qr-ordering", "label": "Contactless Dine-In QR Table Ordering System", "price": 5000, "required": false },
    { "id": "domain", "label": "1-Year Custom Domain", "price": 3000, "required": false },
    { "id": "notifications-sms", "label": "Automated SMS & WhatsApp Order Status Alerts", "price": 2000, "required": false  }
  ],

  "website.portfolio.personal": [
    { "id": "res-design", "label": "Modern Responsive Portfolio UI", "price": 7000, "required": true, "description": "Pixel-perfect bespoke portfolio design highlighting your skills, bio, and experience." },
    { "id": "project-showcase", "label": "Projects Showcase with Live Links & Tags", "price": 3000, "required": true, "description": "Interactive project gallery with live demo links, tech stack badges, and github repos." },
    { "id": "core-sections", "label": "About, Skills, Experience & CV Download", "price": 0, "required": true, "description": "Dedicated sections for your journey, career timeline, tech stack, and downloadable resume." },
    { "id": "contact-form", "label": "Interactive Contact & Collaboration Form", "price": 0, "required": true, "description": "Direct inquiry form for freelance clients, recruiters, and collaborators." },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true, "description": "Fast-loading mobile-first user experience optimized for recruiter review." },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false, "description": "Custom personal .com domain registration with DNS setup and SSL." },
    { "id": "case-studies", "label": "Separate Case Study Detail Pages", "price": 3000, "required": false, "description": "In-depth dedicated case study pages detailing problem, solution, architecture, and live results." },
    { "id": "advance-animations", "label": "3D Look, Micro-Interactions & Advance Animations", "price": 2500, "required": false, "description": "Smooth scroll, magnetic cursor effects, dynamic 3D cards, and fluid Framer Motion transitions." },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 1500, "required": false, "description": "Complete clean Next.js/React GitHub repository handoff." },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false, "description": "Zero-cost lifetime hosting setup with global CDN and automated CI/CD deployments." },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false, "description": "100% full personal domain ownership registered in your name." },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false, "description": "Clean, performant, and SEO-optimized code ready for high traffic." },
    { "id": "whatsapp-chat", "label": "WhatsApp Direct Chat & Outreach Button", "price": 0, "required": false, "description": "Direct WhatsApp contact link for instant hiring and client outreach." },
    { "id": "social-media", "label": "Social Links (GitHub, LinkedIn, Twitter/X, Dribbble)", "price": 0, "required": false, "description": "Connected social profile badges and portfolio cross-links." },
    { "id": "seo", "label": "Personal Branding SEO & Google Search Indexing", "price": 0, "required": false, "description": "Search engine optimization and structured metadata to rank your personal brand on Google." }
  ],
  "website.landing-page.simple": [
    { "id": "landing-design", "label": "Landing Page Design", "price": 6000, "required": true },
    { "id": "hero-cta", "label": "Hero + CTA", "price": 2000, "required": true },
    { "id": "feat-sec", "label": "Features Section", "price": 2000, "required": false },
    { "id": "faq", "label": "FAQ", "price": 2000, "required": false },
    { "id": "testimonials", "label": "Testimonials", "price": 2000, "required": false },
    { "id": "email-lead", "label": "Email Lead Form", "price": 3000, "required": false },
    { "id": "analytics", "label": "Analytics Setup", "price": 2000, "required": false },
    { "id": "seo", "label": "SEO", "price": 5000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 5000, "required": false },
    { "id": "domain", "label": "Domain", "price": 3000, "required": false },
    { "id": "shared-host", "label": "Shared Hosting", "price": 8000, "required": false  }
  ],
  "website.landing-page.advanced": [
    { "id": "landing-design", "label": "Landing Page Design", "price": 6000, "required": true },
    { "id": "hero-feat-test", "label": "Hero+Features+Testimonials", "price": 5000, "required": true },
    { "id": "video-sec", "label": "Video Section", "price": 4000, "required": false },
    { "id": "countdown", "label": "Countdown Timer", "price": 3000, "required": false },
    { "id": "pay-int", "label": "Payment Integration", "price": 8000, "required": false },
    { "id": "lead-form", "label": "Lead Capture Form", "price": 3000, "required": false },
    { "id": "exit-intent", "label": "Popup/Exit Intent", "price": 4000, "required": false },
    { "id": "heatmap", "label": "Analytics & Heatmap", "price": 3000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 5000, "required": false },
    { "id": "domain", "label": "Domain", "price": 3000, "required": false },
    { "id": "shared-host", "label": "Shared Hosting", "price": 8000, "required": false  }
  ],
  "mobile-app.ecommerce-app.android": [
    { "id": "app-design", "label": "App Design & Navigation", "price": 20000, "required": true },
    { "id": "prod-cat", "label": "Product Catalog", "price": 8000, "required": true },
    { "id": "cart-checkout", "label": "Cart & Checkout", "price": 6000, "required": true },
    { "id": "admin-web", "label": "Admin Web Panel", "price": 12000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 6000, "required": false },
    { "id": "pay-int", "label": "Payment Integration", "price": 10000, "required": false },
    { "id": "user-acc", "label": "User Accounts", "price": 8000, "required": false },
    { "id": "order-track", "label": "Order Tracking", "price": 6000, "required": false },
    { "id": "wishlist", "label": "Wishlist", "price": 4000, "required": false },
    { "id": "search-filt", "label": "Search & Filters", "price": 6000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 15000, "required": false },
    { "id": "play-store", "label": "Play Store Publishing", "price": 3000, "required": false  }
  ],
  "mobile-app.ecommerce-app.both-platforms": [
    { "id": "cross-plat-app", "label": "Cross-Platform App (React Native)", "price": 35000, "required": true },
    { "id": "prod-cat", "label": "Product Catalog", "price": 10000, "required": true },
    { "id": "cart-checkout", "label": "Cart & Checkout", "price": 8000, "required": true },
    { "id": "admin-web", "label": "Admin Web Panel", "price": 12000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 8000, "required": false },
    { "id": "pay-int", "label": "Payment Integration", "price": 12000, "required": false },
    { "id": "user-acc", "label": "User Accounts", "price": 10000, "required": false },
    { "id": "order-track", "label": "Order Tracking", "price": 8000, "required": false },
    { "id": "search-filt", "label": "Search & Filters", "price": 6000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 20000, "required": false },
    { "id": "play-store", "label": "Play Store Publishing", "price": 3000, "required": false },
    { "id": "app-store", "label": "App Store Publishing", "price": 5000, "required": false  }
  ],
  "mobile-app.business-app.android": [
    { "id": "app-design", "label": "App Design & Navigation", "price": 15000, "required": true },
    { "id": "comp-info", "label": "Company Info & Services", "price": 5000, "required": true },
    { "id": "contact-loc", "label": "Contact & Location", "price": 3000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 5000, "required": false },
    { "id": "appointment", "label": "Appointment/Booking", "price": 10000, "required": false },
    { "id": "client-portal", "label": "Client Portal", "price": 12000, "required": false },
    { "id": "live-chat", "label": "Live Chat", "price": 6000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 12000, "required": false },
    { "id": "play-store", "label": "Play Store Publishing", "price": 3000, "required": false  }
  ],
  "mobile-app.business-app.both-platforms": [
    { "id": "cross-plat", "label": "Cross-Platform App", "price": 25000, "required": true },
    { "id": "comp-info", "label": "Company Info & Services", "price": 6000, "required": true },
    { "id": "contact-loc", "label": "Contact & Location", "price": 3000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 7000, "required": false },
    { "id": "booking-sys", "label": "Booking System", "price": 12000, "required": false },
    { "id": "client-portal", "label": "Client Portal", "price": 15000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 15000, "required": false },
    { "id": "play-store", "label": "Play Store", "price": 3000, "required": false },
    { "id": "app-store", "label": "App Store", "price": 5000, "required": false  }
  ],
  "mobile-app.booking-app.android": [
    { "id": "app-design", "label": "App Design", "price": 15000, "required": true },
    { "id": "service-list", "label": "Service Listing", "price": 5000, "required": true },
    { "id": "booking-cal", "label": "Booking & Calendar System", "price": 12000, "required": true },
    { "id": "book-notif", "label": "Booking Notifications", "price": 5000, "required": false },
    { "id": "adv-payment", "label": "Advance Payment", "price": 8000, "required": false },
    { "id": "staff-mgmt", "label": "Staff Management", "price": 8000, "required": false },
    { "id": "reviews", "label": "Reviews", "price": 4000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 12000, "required": false },
    { "id": "play-store", "label": "Play Store", "price": 3000, "required": false  }
  ],
  "mobile-app.booking-app.both-platforms": [
    { "id": "cross-plat", "label": "Cross-Platform App", "price": 25000, "required": true },
    { "id": "service-list", "label": "Service Listing", "price": 6000, "required": true },
    { "id": "booking-cal", "label": "Booking & Calendar", "price": 15000, "required": true },
    { "id": "notif", "label": "Notifications", "price": 7000, "required": false },
    { "id": "adv-payment", "label": "Advance Payment", "price": 10000, "required": false },
    { "id": "staff-mgmt", "label": "Staff Management", "price": 10000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 15000, "required": false },
    { "id": "play-store", "label": "Play Store", "price": 3000, "required": false },
    { "id": "app-store", "label": "App Store", "price": 5000, "required": false  }
  ],
  "mobile-app.food-app.single-restaurant": [
    { "id": "app-design", "label": "App Design", "price": 20000, "required": true },
    { "id": "dig-menu", "label": "Digital Menu", "price": 6000, "required": true },
    { "id": "cart-ordering", "label": "Cart & Ordering", "price": 10000, "required": true },
    { "id": "admin-panel", "label": "Admin Panel", "price": 10000, "required": true },
    { "id": "order-notif", "label": "Order Notifications", "price": 5000, "required": false },
    { "id": "online-pay", "label": "Online Payment", "price": 8000, "required": false },
    { "id": "tracking", "label": "Real-Time Order Tracking", "price": 8000, "required": false },
    { "id": "loyalty", "label": "Loyalty Points", "price": 6000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 15000, "required": false },
    { "id": "play-store", "label": "Play Store", "price": 3000, "required": false  }
  ],
  "mobile-app.food-app.multi-restaurant": [
    { "id": "app-design", "label": "App Design", "price": 35000, "required": true },
    { "id": "rest-list", "label": "Restaurant Listing", "price": 10000, "required": true },
    { "id": "dyn-menus", "label": "Dynamic Menus", "price": 8000, "required": true },
    { "id": "cart-multi", "label": "Cart & Multi-Restaurant Orders", "price": 12000, "required": true },
    { "id": "super-admin", "label": "Super Admin Panel", "price": 15000, "required": true },
    { "id": "rest-panel", "label": "Restaurant Panel", "price": 10000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 8000, "required": false },
    { "id": "online-pay", "label": "Online Payment", "price": 10000, "required": false },
    { "id": "delivery-track", "label": "Delivery Tracking", "price": 12000, "required": false },
    { "id": "comm-mgmt", "label": "Commission Management", "price": 8000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 25000, "required": false },
    { "id": "play-store", "label": "Play Store", "price": 3000, "required": false  }
  ],
  "mobile-app.custom-app.android": [
    { "id": "custom-design", "label": "Custom App Design & Architecture", "price": 25000, "required": true },
    { "id": "core-dev", "label": "Core Feature Development", "price": 15000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 6000, "required": false },
    { "id": "user-auth", "label": "User Auth", "price": 6000, "required": false },
    { "id": "pay-int", "label": "Payment Integration", "price": 10000, "required": false },
    { "id": "api-int", "label": "API Integration", "price": 8000, "required": false },
    { "id": "analytics", "label": "Analytics", "price": 6000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 15000, "required": false },
    { "id": "play-store", "label": "Play Store", "price": 3000, "required": false  }
  ],
  "mobile-app.custom-app.both-platforms": [
    { "id": "cross-plat-app", "label": "Cross-Platform App (React Native)", "price": 40000, "required": true },
    { "id": "core-dev", "label": "Core Feature Development", "price": 20000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 8000, "required": false },
    { "id": "user-auth", "label": "User Auth", "price": 8000, "required": false },
    { "id": "pay-int", "label": "Payment Integration", "price": 12000, "required": false },
    { "id": "api-int", "label": "API Integration", "price": 10000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 20000, "required": false },
    { "id": "play-store", "label": "Play Store", "price": 3000, "required": false },
    { "id": "app-store", "label": "App Store", "price": 5000, "required": false  }
  ],
  "desktop.pos.single-terminal": [
    { "id": "pos-win", "label": "POS Application Windows", "price": 25000, "required": true },
    { "id": "prod-inv", "label": "Product & Inventory Management", "price": 10000, "required": true },
    { "id": "sales-bill", "label": "Sales & Billing", "price": 8000, "required": true },
    { "id": "cust-mgmt", "label": "Customer Management", "price": 6000, "required": false },
    { "id": "printer", "label": "Thermal Printer Support", "price": 5000, "required": false },
    { "id": "scanner", "label": "Barcode Scanner", "price": 5000, "required": false },
    { "id": "reports", "label": "Daily/Weekly Reports", "price": 6000, "required": false },
    { "id": "discount-tax", "label": "Discount & Tax Management", "price": 4000, "required": false },
    { "id": "multi-pay", "label": "Multiple Payment Methods", "price": 5000, "required": false },
    { "id": "data-export", "label": "Data Export Excel/PDF", "price": 4000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 15000, "required": false  }
  ],
  "desktop.pos.multi-terminal": [
    { "id": "pos-app", "label": "POS Application", "price": 25000, "required": true },
    { "id": "inv-mgmt", "label": "Inventory Management", "price": 10000, "required": true },
    { "id": "sales-bill", "label": "Sales & Billing", "price": 8000, "required": true },
    { "id": "term-sync", "label": "Multi-Terminal Sync", "price": 15000, "required": true },
    { "id": "cloud-db", "label": "Cloud Database", "price": 10000, "required": true },
    { "id": "central-console", "label": "Central Management Console", "price": 12000, "required": true },
    { "id": "printer", "label": "Thermal Printer", "price": 5000, "required": false },
    { "id": "scanner", "label": "Barcode Scanner", "price": 5000, "required": false },
    { "id": "branch-reports", "label": "Branch Reports", "price": 8000, "required": false },
    { "id": "data-export", "label": "Data Export", "price": 4000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 20000, "required": false  }
  ],
  "desktop.inventory.basic": [
    { "id": "inv-win", "label": "Inventory Application Windows", "price": 20000, "required": true },
    { "id": "prod-cat", "label": "Product & Category Management", "price": 8000, "required": true },
    { "id": "stock-track", "label": "Stock In/Out Tracking", "price": 6000, "required": true },
    { "id": "low-stock", "label": "Low Stock Alerts", "price": 4000, "required": false },
    { "id": "supp-mgmt", "label": "Supplier Management", "price": 6000, "required": false },
    { "id": "rep-anal", "label": "Reports & Analytics", "price": 8000, "required": false },
    { "id": "export", "label": "Export Excel/PDF", "price": 4000, "required": false },
    { "id": "barcode", "label": "Barcode Support", "price": 5000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 12000, "required": false  }
  ],
  "desktop.inventory.advanced": [
    { "id": "adv-inv", "label": "Advanced Inventory App", "price": 20000, "required": true },
    { "id": "prod-cat", "label": "Product & Category Management", "price": 8000, "required": true },
    { "id": "stock-track", "label": "Stock Tracking", "price": 6000, "required": true },
    { "id": "multi-loc", "label": "Multi-Location Inventory", "price": 10000, "required": true },
    { "id": "supp-mgmt", "label": "Supplier Management", "price": 6000, "required": false },
    { "id": "po-sys", "label": "Purchase Orders", "price": 6000, "required": false },
    { "id": "adv-reports", "label": "Advanced Reports", "price": 10000, "required": false },
    { "id": "barcode", "label": "Barcode Support", "price": 5000, "required": false },
    { "id": "export", "label": "Export", "price": 4000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 15000, "required": false  }
  ],
  "desktop.custom-desktop.windows": [
    { "id": "win-dev", "label": "Windows App Development", "price": 25000, "required": true },
    { "id": "core-dev", "label": "Core Feature Development", "price": 15000, "required": true },
    { "id": "custom-ui", "label": "Custom UI Design", "price": 8000, "required": true },
    { "id": "db-int", "label": "Database Integration", "price": 8000, "required": false },
    { "id": "rep-sys", "label": "Reporting System", "price": 8000, "required": false },
    { "id": "user-auth", "label": "User Auth & Roles", "price": 6000, "required": false },
    { "id": "data-export", "label": "Data Export", "price": 4000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 15000, "required": false },
    { "id": "installer", "label": "Installer Package", "price": 3000, "required": false  }
  ],
  "desktop.custom-desktop.cross-platform": [
    { "id": "cross-plat-dev", "label": "Cross-Platform App", "price": 35000, "required": true },
    { "id": "core-dev", "label": "Core Feature Development", "price": 18000, "required": true },
    { "id": "custom-ui", "label": "Custom UI Design", "price": 10000, "required": true },
    { "id": "db-int", "label": "Database Integration", "price": 8000, "required": false },
    { "id": "rep-sys", "label": "Reporting System", "price": 8000, "required": false },
    { "id": "user-auth", "label": "User Auth & Roles", "price": 6000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 20000, "required": false },
    { "id": "installer-both", "label": "Installer Win+Mac", "price": 5000, "required": false  }
  ],
  "internal.erp.small": [
    { "id": "erp-plat", "label": "ERP Platform & Architecture", "price": 30000, "required": true },
    { "id": "user-mgmt", "label": "User Management & Roles", "price": 10000, "required": true },
    { "id": "main-dash", "label": "Main Dashboard", "price": 8000, "required": true },
    { "id": "inv-mod", "label": "Inventory Module", "price": 12000, "required": false },
    { "id": "hr-mod", "label": "HR & Payroll Module", "price": 15000, "required": false },
    { "id": "acc-mod", "label": "Accounting/Finance", "price": 20000, "required": false },
    { "id": "sales-mod", "label": "Sales & CRM Module", "price": 15000, "required": false },
    { "id": "purchase-mod", "label": "Purchase & Supplier", "price": 12000, "required": false },
    { "id": "rep-anal", "label": "Reporting & Analytics", "price": 10000, "required": false },
    { "id": "doc-mgmt", "label": "Document Management", "price": 8000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 25000, "required": false },
    { "id": "vps-host", "label": "1 Year VPS Hosting", "price": 25000, "required": false  }
  ],
  "internal.erp.medium": [
    { "id": "ent-erp", "label": "Enterprise ERP Platform", "price": 50000, "required": true },
    { "id": "adv-users", "label": "Advanced User Management", "price": 15000, "required": true },
    { "id": "exec-dash", "label": "Executive Dashboard", "price": 12000, "required": true },
    { "id": "multi-inv", "label": "Multi-Location Inventory", "price": 20000, "required": false },
    { "id": "hr-payroll", "label": "HR Attendance & Payroll", "price": 25000, "required": false },
    { "id": "acc-fin", "label": "Accounting/Finance", "price": 25000, "required": false },
    { "id": "sales-crm", "label": "Sales & CRM", "price": 20000, "required": false },
    { "id": "purchase-supp", "label": "Purchase & Supplier", "price": 15000, "required": false },
    { "id": "adv-rep", "label": "Advanced Reporting", "price": 15000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 35000, "required": false },
    { "id": "vps-host", "label": "1 Year VPS Hosting", "price": 25000, "required": false  }
  ],
  "internal.crm.basic": [
    { "id": "crm-plat", "label": "CRM Platform", "price": 20000, "required": true },
    { "id": "lead-mgmt", "label": "Contact & Lead Management", "price": 8000, "required": true },
    { "id": "sales-pipe", "label": "Sales Pipeline", "price": 8000, "required": true },
    { "id": "reminders", "label": "Task & Follow-up Reminders", "price": 6000, "required": false },
    { "id": "activity-log", "label": "Notes & Activity Log", "price": 4000, "required": false },
    { "id": "reports", "label": "Reports", "price": 8000, "required": false },
    { "id": "rbac", "label": "Role-Based Access", "price": 6000, "required": false },
    { "id": "source-code", "label": "Source Code", "price": 15000, "required": false },
    { "id": "vps-host", "label": "VPS Hosting", "price": 25000, "required": false  }
  ],
  "internal.crm.advanced": [
    { "id": "adv-crm", "label": "Advanced CRM Platform", "price": 25000, "required": true },
    { "id": "lead-mgmt", "label": "Contact & Lead Management", "price": 10000, "required": true },
    { "id": "multi-pipe", "label": "Multi-Stage Pipeline", "price": 10000, "required": true },
    { "id": "email-int", "label": "Email Integration", "price": 8000, "required": false },
    { "id": "workflow-auto", "label": "Workflow Automation", "price": 12000, "required": false },
    { "id": "whatsapp-follow", "label": "WhatsApp Follow-up", "price": 10000, "required": false },
    { "id": "adv-reports", "label": "Advanced Reports & Forecasting", "price": 10000, "required": false, "description": "Predictive revenue forecasts and rep performance scorecards." },
    { "id": "rbac", "label": "Role-Based Access", "price": 6000, "required": false, "description": "Departmental and territorial hierarchy permissions." },
    { "id": "source-code", "label": "Source Code", "price": 20000, "required": false, "description": "Full enterprise CRM repository." },
    { "id": "vps-host", "label": "VPS Hosting", "price": 25000, "required": false, "description": "1-year high performance cloud VPS."  }
  ],
  "internal.management.basic": [
    { "id": "dash-design", "label": "Dashboard Design & Architecture", "price": 15000, "required": true, "description": "Clean modern administrative interface built with React/Next.js." },
    { "id": "core-data", "label": "Core Data Management", "price": 8000, "required": true, "description": "CRUD data tables with search, sorting, and pagination." },
    { "id": "user-auth", "label": "User Authentication", "price": 5000, "required": true, "description": "Secure credential authentication and password reset." },
    { "id": "rep-charts", "label": "Reports & Charts", "price": 8000, "required": false, "description": "Interactive bar, line, and donut charts visualizing business KPIs." },
    { "id": "data-export", "label": "Data Export", "price": 4000, "required": false, "description": "Export table views to CSV and Excel." },
    { "id": "notif-sys", "label": "Notifications System", "price": 5000, "required": false, "description": "In-app notification bell and toast updates." },
    { "id": "source-code", "label": "Source Code", "price": 12000, "required": false, "description": "Clean Next.js dashboard repository." },
    { "id": "vps-host", "label": "VPS Hosting", "price": 25000, "required": false, "description": "1-year cloud hosting server."  }
  ],
  "internal.management.advanced": [
    { "id": "adv-dash", "label": "Advanced Dashboard", "price": 20000, "required": true, "description": "High-scale control center engineered for operations & monitoring." },
    { "id": "complex-data", "label": "Complex Data Management", "price": 12000, "required": true, "description": "Relational data tables with inline editing, batch actions, and filters." },
    { "id": "rbac", "label": "Role-Based Access Control", "price": 8000, "required": true, "description": "Custom role permissions restricting sensitive tabs and actions." },
    { "id": "realtime-data", "label": "Real-Time Data Updates", "price": 10000, "required": true, "description": "Websocket or polling live data feeds with real-time UI updates." },
    { "id": "adv-analytics", "label": "Advanced Analytics & Charts", "price": 12000, "required": false, "description": "Drill-down charts, custom date filters, and predictive projections." },
    { "id": "workflow-auto", "label": "Custom Workflow Automation", "price": 15000, "required": false, "description": "Custom rule builder triggering Webhooks and third-party tasks." },
    { "id": "api-int", "label": "API Integrations", "price": 10000, "required": false, "description": "Bi-directional connections with external payment, shipping, or ERP APIs." },
    { "id": "export-sched", "label": "Data Export & Scheduling", "price": 6000, "required": false, "description": "Automated recurring PDF / Excel email reports to managers." },
    { "id": "source-code", "label": "Source Code", "price": 18000, "required": false, "description": "Full proprietary dashboard code handoff." },
    { "id": "vps-host", "label": "VPS Hosting", "price": 25000, "required": false, "description": "Dedicated cloud VPS with SSL and monitoring."  }
  ]
};
