export const pricingCategories = [
  { "id": "website", "label": "Website", "description": "From simple portfolios to full-scale e-commerce, websites that work 24/7.", "iconName": "FaGlobe", "disabled": false },
  { "id": "mobile-app", "label": "Mobile App", "description": "Android & iOS apps built with React Native for seamless cross-platform performance.", "iconName": "FaMobileScreen", "disabled": false },
  { "id": "internal", "label": "Internal System", "description": "Custom ERP, CRM, and dashboards built for your team's workflows.", "iconName": "FaGears", "disabled": false },
  { "id": "desktop", "label": "Desktop Software", "description": "Always custom-scoped, CONTACT FOR PRICING.", "iconName": "FaDesktop", "disabled": true },
  { "id": "ai", "label": "AI & Automation", "description": "Always custom-scoped, CONTACT FOR PRICING.", "iconName": "FaRobot", "disabled": true, "customOnly": true }
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
  ],
  "internal": [
    { "id": "pos", "label": "POS System", "description": "Point of Sale software for retail, restaurants, pharmacies, and multi-counter setups." },
    { "id": "crm", "label": "CRM System", "description": "Customer relationship management to track leads, pipeline stages, and communications." },
    { "id": "erp", "label": "ERP System", "description": "Comprehensive enterprise resource planning covering inventory, HR, payroll, accounting, and sales." },
    { "id": "custom", "label": "Custom Management System", "description": "Tailored systems for car wash, school, clinic, warehouse, salon, or any specialized workflow." }
  ]
};

export const pricingVariants = {
  "website.ecommerce": [
    { "id": "single-vendor", "label": "Single Vendor Store", "description": "Get a professional online store with modern design and powerful features. Everything you need to start selling." },
    { "id": "multi-vendor", "label": "Multi-Vendor Marketplace", "description": "Platform enabling multiple independent vendors with merchant dashboards." }
  ],
  "website.business": [
    { "id": "informational", "label": "Informational", "description": "Company profile, service catalog, about company, and lead inquiry forms." },
    { "id": "with-booking", "label": "With Booking System", "description": "Integrates scheduling calendars, appointments, and client confirmations." },
    { "id": "with-portal", "label": "With Client Portal", "description": "Secure customer dashboard with project progress, invoices, and file sharing." }
  ],
  "website.restaurant": [
    { "id": "menu-only", "label": "Menu Showcase", "description": "Digital food menu showcase with photos, hours, and location maps  (without online ordering option)." },
    { "id": "with-ordering", "label": "With Online Ordering", "description": "Complete online cart, checkout, delivery/pickup, and kitchen alerts." },
    { "id": "full-system", "label": "Full Restaurant System", "description": "Online ordering plus table reservations, loyalty programs, and branch analytics." }
  ],
  "website.portfolio": [
    { "id": "personal", "label": "Portfolio Website", "description": "High-impact developer, designer, or personal branding portfolio with project & case study showcases." }
  ],
  "website.landing-page": [
    { "id": "simple", "label": "Simple", "description": "Focused single-page hero, features, social proof, and direct lead capture." },
    { "id": "advanced", "label": "Advanced", "description": "High-impact sales page with video hero, countdowns, payment CTA, and heatmaps." }
  ],
  "mobile-app.ecommerce-app": [
    { "id": "both-platforms", "label": "Android + iOS", "description": "Unified cross-platform React Native app for both Android and Apple devices." }
  ],
  "mobile-app.business-app": [
    { "id": "both-platforms", "label": "Android + iOS", "description": "Cross-platform app targeting both Google Play and Apple App Store." }
  ],
  "mobile-app.booking-app": [
    { "id": "both-platforms", "label": "Android + iOS", "description": "Complete Android + iOS appointment scheduling and payment app." }
  ],
  "mobile-app.food-app": [
    { "id": "single-restaurant", "label": "Single Restaurant", "description": "Exclusive branded mobile ordering app for a single restaurant or brand." },
    { "id": "multi-restaurant", "label": "Multi-Restaurant Platform", "description": "Delivery aggregator platform connecting customers, restaurants, and riders." }
  ],
  "internal.pos": [
    { "id": "standard", "label": "POS System", "description": "Complete Point of Sale solution with inventory, billing, and reporting." }
  ],
  "internal.crm": [
    { "id": "standard", "label": "CRM System", "description": "Lead tracking, pipeline management, and customer communication tools." }
  ],
  "internal.erp": [
    { "id": "standard", "label": "ERP System", "description": "Modular enterprise resource planning covering core business operations." }
  ],
  "internal.custom": [
    { "id": "standard", "label": "Custom Management System", "description": "Fully tailored system for specialized business workflows." }
  ]
};

export const pricingFeatures = {
  // min: 22K; max: 45K
  "website.ecommerce.single-vendor": [
    { "id": "modern-store", "label": "Modern Online Store", "price": 15000, "required": true },
    { "id": "admin-portal", "label": "Easy-to-Use Admin Portal", "price": 7000, "required": true },
    { "id": "free-domain", "label": "1-Year Domain", "price": 3000, "required": false },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false },
    { "id": "cart-checkout", "label": "Shopping Cart & Checkout", "price": 0, "required": true },
    { "id": "cod", "label": "Cash On Delivery (COD)", "price": 0, "required": true },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat Integration", "price": 0, "required": false },
    { "id": "pages-10", "label": "Upto 10-20 pages of your choice", "price": 0, "required": true },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false },
    { "id": "animations-3d", "label": "3D Look & Advance Animations", "price": 2000, "required": false },
    { "id": "online-payments", "label": "Payment Integrations (Jazzcash, Easypaisa & Bank Merchants)", "price": 5000, "required": false },
    { "id": "source-code-ownership", "label": "Full Source Code Ownership", "price": 5000, "required": false },
    { "id": "basic-seo", "label": "Technical & Local SEO", "price": 2500, "required": false },
    { "id": "cust-login", "label": "Customer Login & Signup", "price": 2500, "required": false },
    { "id": "pwa-app", "label": "Installable App (PWA)", "price": 2000, "required": false },
    { "id": "email-automation", "label": "Email Automation", "price": 1000, "required": false },
  ],

  // min: 45K; max: 90K
  "website.ecommerce.multi-vendor": [
    { "id": "marketplace-storefront", "label": "Complete Multi-Vendor Marketplace Storefront", "price": 20000, "required": true },
    { "id": "vendor-portals", "label": "Dedicated Merchant / Vendor Portals", "price": 10000, "required": true },
    { "id": "marketplace-core", "label": "Super Admin Portal & Core Marketplace Engine", "price": 12000, "required": true },
    { "id": "payment-integrations", "label": "Payment Gateways (JazzCash, EasyPaisa & Bank Merchants)", "price": 5000, "required": false },
    { "id": "cust-login", "label": "Customer Login & Signup", "price": 3000, "required": true },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 10000, "required": false },
    { "id": "auto-payouts", "label": "Automated Vendor Payout System", "price": 10000, "required": false },
    { "id": "pwa-app", "label": "Installable Marketplace App (PWA)", "price": 5000, "required": false },
    { "id": "analytics-suite", "label": "Advanced Sales & Revenue Analytics", "price": 5000, "required": false },
    { "id": "seo-optimization", "label": "Complete Marketplace SEO & Search Optimization", "price": 5000, "required": false },
    { "id": "domain", "label": "1-Year Custom Domain", "price": 3000, "required": false },
    { "id": "notifications-email", "label": "Automated Email & Push Notifications", "price": 2000, "required": false }
  ],

  // min: 20K; max: 50K
  "website.business.informational": [
    { "id": "res-design", "label": "Professional Website with Modern Animations", "price": 10000, "required": true },
    { "id": "core-pages", "label": "Core Pages (Home, About, Services, Contact)", "price": 10000, "required": true },
    { "id": "contact-form", "label": "Interactive Lead Capture & Contact Form", "price": 0, "required": true },
    { "id": "pages-choice", "label": "Upto 7-15 Pages of Your Choice", "price": 0, "required": true },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat & Direct Inquiry Button", "price": 0, "required": false },
    { "id": "social-media", "label": "Social Media Links & Feed Integration", "price": 0, "required": false },
    { "id": "google-maps", "label": "Interactive Google Map & Location Pins", "price": 0, "required": false },
    { "id": "animations-3d", "label": "3D Look & Advance Animations", "price": 5000, "required": false },
    { "id": "elite-animations", "label": "Extraordinary 3D Look & Exceptional Animations", "price": 12000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 5000, "required": false },
    { "id": "basic-seo", "label": "On-Page SEO & Google Indexing", "price": 3500, "required": false },
    { "id": "google-business", "label": "Google Business Profile Setup", "price": 1500, "required": false }
  ],

  // min: 25K; max: 55K
  "website.business.with-booking": [
    { "id": "res-design", "label": "Professional Website with Modern Animations", "price": 10000, "required": true },
    { "id": "core-pages", "label": "Core Pages (Home, About, Services, Contact)", "price": 10000, "required": true },
    { "id": "booking-sys", "label": "Interactive Booking & Appointment System", "price": 5000, "required": true },
    { "id": "contact-form", "label": "Interactive Lead Capture & Contact Form", "price": 0, "required": true },
    { "id": "pages-choice", "label": "Upto 7-15 Pages of Your Choice", "price": 0, "required": true },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat & Direct Inquiry Button", "price": 0, "required": false },
    { "id": "social-media", "label": "Social Media Links & Feed Integration", "price": 0, "required": false },
    { "id": "google-maps", "label": "Interactive Google Map & Location Pins", "price": 0, "required": false },
    { "id": "animations-3d", "label": "3D Look & Advance Animations", "price": 5000, "required": false },
    { "id": "elite-animations", "label": "Extraordinary 3D Look & Exceptional Animations", "price": 12000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 5000, "required": false },
    { "id": "basic-seo", "label": "On-Page SEO & Google Indexing", "price": 3500, "required": false },
    { "id": "google-business", "label": "Google Business Profile Setup & Optimization", "price": 1500, "required": false }
  ],

  // min: 40K; max: 75K
  "website.business.with-portal": [
    { "id": "res-design", "label": "Executive Corporate Website", "price": 15000, "required": true },
    { "id": "portal-dash", "label": "Client Portal Login & Secure Dashboard", "price": 15000, "required": true },
    { "id": "core-pages", "label": "Core Pages (Home, Services, Case Studies, Contact)", "price": 5000, "required": true },
    { "id": "progress-track", "label": "Project Progress & Milestone Tracking", "price": 5000, "required": true },
    { "id": "pages-choice", "label": "Upto 10-20 Pages of Your Choice", "price": 0, "required": true },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat & Direct Inquiry Button", "price": 0, "required": false },
    { "id": "social-media", "label": "Social Media Links & Feed Integration", "price": 0, "required": false },
    { "id": "google-maps", "label": "Interactive Google Map & Location Pins", "price": 0, "required": false },
    { "id": "animations-3d", "label": "3D Look & Advance Animations", "price": 5000, "required": false },
    { "id": "elite-animations", "label": "Extraordinary 3D Look & Exceptional Animations", "price": 12000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 5000, "required": false },
    { "id": "inv-mgmt", "label": "Client Invoicing & Payment Status Tracking", "price": 5000, "required": false },
    { "id": "seo", "label": "On-Page & Technical Business SEO", "price": 3500, "required": false },
    { "id": "google-business", "label": "Google Business Profile Setup & Optimization", "price": 1500, "required": false }
  ],

  // min: 15K; max: 30K
  "website.restaurant.menu-only": [
    { "id": "res-showcase", "label": "Modern Restaurant Showcase Website", "price": 10000, "required": true },
    { "id": "digital-menu", "label": "Interactive Categorized Digital Food Menu", "price": 5000, "required": true },
    { "id": "pages-food", "label": "Upto 5-10 Pages of Your Choice", "price": 0, "required": true },
    { "id": "contact-hours", "label": "Contact, Opening Hours & Location Info", "price": 0, "required": true },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false },
    { "id": "whatsapp-chat", "label": "WhatsApp Chat & Direct Order/Inquiry Button", "price": 0, "required": false },
    { "id": "social-media", "label": "Social Media & Instagram Feed Integration", "price": 0, "required": false },
    { "id": "google-maps", "label": "Interactive Google Map & Location Pins", "price": 0, "required": false },
    { "id": "food-gallery", "label": "Food & Dishes Photo Gallery", "price": 0, "required": false },
    { "id": "qr-menu", "label": "Print-Ready Scannable Dine-In QR Code Menu", "price": 2500, "required": false },
    { "id": "photo-gallery", "label": "High-Resolution Food & Ambiance Gallery", "price": 1500, "required": false },
    { "id": "basic-seo", "label": "Technical & Local SEO", "price": 4500, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 2000, "required": false },
    { "id": "google-business", "label": "Google Business Profile Setup", "price": 1500, "required": false }
  ],

  // min: 25K; max: 50K
  "website.restaurant.with-ordering": [
    { "id": "ordering-storefront", "label": "Modern Food Ordering Storefront", "price": 15000, "required": true },
    { "id": "admin-kitchen", "label": "Easy-to-Use Kitchen & Order Admin Portal", "price": 7000, "required": true },
    { "id": "cart-checkout", "label": "Online Food Cart & Checkout Flow", "price": 0, "required": true },
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

  // min: 50K; max: 100K
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
    { "id": "notifications-sms", "label": "Automated SMS & WhatsApp Order Status Alerts", "price": 2000, "required": false }
  ],

  // min: 10K; max: 20K
  "website.portfolio.personal": [
    { "id": "res-design", "label": "Modern Responsive Portfolio UI", "price": 10000, "required": true },
    { "id": "project-showcase", "label": "Projects Showcase with Live Links & Tags", "price": 0, "required": true },
    { "id": "core-sections", "label": "About, Skills, Experience & CV Download", "price": 0, "required": true },
    { "id": "contact-form", "label": "Interactive Contact & Collaboration Form", "price": 0, "required": true },
    { "id": "mobile-responsive", "label": "100% Mobile & Tablet Optimized", "price": 0, "required": true },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false },
    { "id": "case-studies", "label": "Separate Case Study Detail Pages", "price": 3000, "required": false },
    { "id": "advance-animations", "label": "3D Look, Micro-Interactions & Advance Animations", "price": 2500, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 1500, "required": false },
    { "id": "free-hosting", "label": "Lifetime FREE Hosting", "price": 0, "required": false },
    { "id": "domain-ownership", "label": "Domain Ownership", "price": 0, "required": false },
    { "id": "production-code", "label": "Production-Ready Codebase", "price": 0, "required": false },
    { "id": "whatsapp-chat", "label": "WhatsApp Direct Chat & Outreach Button", "price": 0, "required": false },
    { "id": "social-media", "label": "Social Links (GitHub, LinkedIn, Twitter/X, Dribbble)", "price": 0, "required": false },
    { "id": "seo", "label": "Personal Branding SEO & Google Search Indexing", "price": 0, "required": false }
  ],

  // min: 10K; max: 35K
  "website.landing-page.simple": [
    { "id": "landing-design", "label": "Custom Landing Page Design & Development", "price": 10000, "required": true },
    { "id": "conversion-sections", "label": "Up to 7 Custom Sections (Hero, Features, Benefits, FAQ, etc.)", "price": 0, "required": true },
    { "id": "responsive", "label": "Fully Responsive Desktop, Tablet & Mobile Layout", "price": 0, "required": true },
    { "id": "animations", "label": "Smooth Scroll Animations & Interactive Elements", "price": 0, "required": true },
    { "id": "lead-form", "label": "Custom Lead Generation & Inquiry Form", "price": 2500, "required": false },
    { "id": "whatsapp", "label": "WhatsApp Direct Inquiry Integration", "price": 0, "required": false },
    { "id": "newsletter", "label": "Newsletter & Email Subscription Integration", "price": 2000, "required": false },
    { "id": "popup", "label": "Promotional Popup & Exit-Intent Offers", "price": 2500, "required": false },
    { "id": "testimonials", "label": "Animated Testimonials & Reviews Carousel", "price": 1500, "required": false },
    { "id": "advanced-seo", "label": "On-Page SEO & Google Indexing Setup", "price": 3500, "required": false },
    { "id": "advanced-animations", "label": "Premium Animations, Parallax & Micro-Interactions", "price": 5000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 5000, "required": false },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false },
  ],

  // min: 20K; max: 50K
  "website.landing-page.advanced": [
    { "id": "premium-design", "label": "Premium Custom Landing Page Design & Development", "price": 15000, "required": true },
    { "id": "conversion-layout", "label": "Up to 10 Custom Conversion-Focused Sections", "price": 0, "required": true },
    { "id": "responsive", "label": "Fully Responsive Desktop, Tablet & Mobile Layout", "price": 0, "required": true },
    { "id": "animations", "label": "Advanced Scroll Animations & Interactive UI", "price": 5000, "required": true },
    { "id": "lead-funnel", "label": "Multi-Step Lead Capture & Conversion Funnel", "price": 5000, "required": false },
    { "id": "email-automation", "label": "Automated Email Notifications & Follow-Ups", "price": 3000, "required": false },
    { "id": "payment", "label": "Payment Gateway & Checkout Integration", "price": 8000, "required": false },
    { "id": "booking", "label": "Appointment & Consultation Booking System", "price": 5000, "required": false },
    { "id": "pricing", "label": "Interactive Pricing Plans & Comparison", "price": 2500, "required": false },
    { "id": "calculator", "label": "Interactive Pricing / ROI Calculator", "price": 5000, "required": false },
    { "id": "video", "label": "Background Video & Interactive Media Sections", "price": 3000, "required": false },
    { "id": "popup", "label": "Smart Promotional Popups & Exit-Intent Offers", "price": 3000, "required": false },
    { "id": "crm", "label": "CRM & Third-Party API Integrations", "price": 5000, "required": false },
    { "id": "premium-animations", "label": "Exceptional 3D Animations & Immersive Interactions", "price": 8000, "required": false },
    { "id": "seo", "label": "Advanced On-Page & Technical SEO", "price": 4500, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 5000, "required": false },
    { "id": "domain", "label": "1-Year Custom Domain (.com)", "price": 3000, "required": false },
  ],

  // min: 40K; max: 85K
  "mobile-app.ecommerce-app.both-platforms": [
    { "id": "cross-plat-app", "label": "Cross-Platform Shopping App", "price": 30000, "required": true },
    { "id": "prod-catalog", "label": "Product Catalog & Categories", "price": 0, "required": true },
    { "id": "cart-checkout", "label": "Cart, Checkout & Order Placement", "price": 0, "required": true },
    { "id": "admin-panel", "label": "Admin Panel (Orders, Products, Customers)", "price": 10000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 5000, "required": false },
    { "id": "online-payments", "label": "Payment Integrations (JazzCash, EasyPaisa, Bank)", "price": 7000, "required": false },
    { "id": "user-accounts", "label": "Customer Login, Signup & Order History", "price": 7000, "required": false },
    { "id": "order-tracking", "label": "Order Status Tracking", "price": 5000, "required": false },
    { "id": "search-filters", "label": "Search, Filters & Sorting", "price": 4000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 10000, "required": false },
    { "id": "play-store", "label": "Google Play Store Publishing", "price": 3500, "required": false },
    { "id": "app-store", "label": "Apple App Store Publishing", "price": 3500, "required": false }
  ],

  // min: 30K; max: 75K
  "mobile-app.business-app.both-platforms": [
    { "id": "cross-plat-app", "label": "Cross-Platform Business App", "price": 25000, "required": true },
    { "id": "company-info", "label": "Company Profile, Services & Info Screens", "price": 0, "required": true },
    { "id": "contact-location", "label": "Contact, Location & Inquiry Forms", "price": 5000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 5000, "required": false },
    { "id": "booking-system", "label": "Booking / Appointment System", "price": 12000, "required": false },
    { "id": "client-portal", "label": "Client Portal & Project Tracking", "price": 15000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 7000, "required": false },
    { "id": "play-store", "label": "Google Play Store Publishing", "price": 3000, "required": false },
    { "id": "app-store", "label": "Apple App Store Publishing", "price": 3000, "required": false }
  ],

  // min: 35K; max: 75K
  "mobile-app.booking-app.both-platforms": [
    { "id": "cross-plat-app", "label": "Cross-Platform Booking App", "price": 25000, "required": true },
    { "id": "service-listing", "label": "Service / Staff Listing", "price": 0, "required": true },
    { "id": "booking-calendar", "label": "Booking Calendar & Slot Management", "price": 10000, "required": true },
    { "id": "notifications", "label": "Push & In-App Notifications", "price": 5000, "required": false },
    { "id": "advance-payment", "label": "Advance / Partial Payment", "price": 9000, "required": false },
    { "id": "staff-mgmt", "label": "Staff Management & Availability", "price": 10000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 10000, "required": false },
    { "id": "play-store", "label": "Google Play Store Publishing", "price": 3000, "required": false },
    { "id": "app-store", "label": "Apple App Store Publishing", "price": 3000, "required": false }
  ],

  // min: 40K; max: 80K
  "mobile-app.food-app.single-restaurant": [
    { "id": "app-core", "label": "Branded Food Ordering App", "price": 25000, "required": true },
    { "id": "digital-menu", "label": "Digital Menu with Customizations", "price": 0, "required": true },
    { "id": "cart-ordering", "label": "Cart, Checkout & Order Placement", "price": 0, "required": true },
    { "id": "admin-panel", "label": "Kitchen / Order Admin Panel", "price": 15000, "required": true },
    { "id": "order-notif", "label": "Order Status Notifications", "price": 5000, "required": false },
    { "id": "online-payments", "label": "Payment Integrations (JazzCash, EasyPaisa, Bank)", "price": 7000, "required": false },
    { "id": "order-tracking", "label": "Real-Time Order Tracking", "price": 5000, "required": false },
    { "id": "loyalty", "label": "Loyalty / Points System", "price": 7000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 10000, "required": false },
    { "id": "play-store", "label": "Google Play Store Publishing", "price": 3000, "required": false },
    { "id": "app-store", "label": "Apple App Store Publishing", "price": 3000, "required": false }
  ],

  // min: 85K; max: 150K
  "mobile-app.food-app.multi-restaurant": [
    { "id": "app-core", "label": "Multi-Restaurant Delivery Platform", "price": 35000, "required": true },
    { "id": "restaurant-listing", "label": "Restaurant Listing & Discovery", "price": 10000, "required": true },
    { "id": "dynamic-menus", "label": "Dynamic Menus per Restaurant", "price": 5000, "required": true },
    { "id": "cart-multi", "label": "Cart & Multi-Restaurant Orders", "price": 10000, "required": true },
    { "id": "super-admin", "label": "Super Admin Panel", "price": 15000, "required": true },
    { "id": "restaurant-panel", "label": "Restaurant Partner Panel", "price": 10000, "required": true },
    { "id": "push-notif", "label": "Push Notifications", "price": 7000, "required": false },
    { "id": "online-payments", "label": "Payment Integrations", "price": 10000, "required": false },
    { "id": "delivery-tracking", "label": "Live Delivery Tracking", "price": 12000, "required": false },
    { "id": "commission-mgmt", "label": "Commission & Payout Management", "price": 8000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 20000, "required": false },
    { "id": "play-store", "label": "Google Play Store Publishing", "price": 3000, "required": false },
    { "id": "app-store", "label": "Apple App Store Publishing", "price": 5000, "required": false }
  ],

  // min: 50K; max: 105K
  "internal.pos.standard": [
    { "id": "pos-core", "label": "POS Application Core", "price": 30000, "required": true },
    { "id": "inventory", "label": "Product & Inventory Management", "price": 10000, "required": true },
    { "id": "billing", "label": "Sales, Billing & Invoicing", "price": 10000, "required": true },
    { "id": "customer-mgmt", "label": "Customer Management", "price": 5000, "required": false },
    { "id": "thermal-printer", "label": "Thermal Printer Support", "price": 5000, "required": false },
    { "id": "barcode", "label": "Barcode Scanner Support", "price": 3000, "required": false },
    { "id": "multi-terminal", "label": "Multi-Terminal / Multi-Counter Sync", "price": 10000, "required": false },
    { "id": "reports", "label": "Sales & Inventory Reports", "price": 7000, "required": false },
    { "id": "discounts-tax", "label": "Discount, Tax & Promo Management", "price": 5000, "required": false },
    { "id": "multi-payment", "label": "Multiple Payment Methods", "price": 5000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 15000, "required": false }
  ],

  // min: 50K; max: 115K
  "internal.crm.standard": [
    { "id": "crm-core", "label": "CRM Platform Core", "price": 30000, "required": true },
    { "id": "lead-mgmt", "label": "Contact & Lead Management", "price": 10000, "required": true },
    { "id": "pipeline", "label": "Sales Pipeline & Stages", "price": 10000, "required": true },
    { "id": "reminders", "label": "Tasks & Follow-up Reminders", "price": 5000, "required": false },
    { "id": "activity-log", "label": "Notes & Activity Log", "price": 5000, "required": false },
    { "id": "email-int", "label": "Email Integration", "price": 5000, "required": false },
    { "id": "whatsapp-int", "label": "WhatsApp Follow-up Integration", "price": 10000, "required": false },
    { "id": "automation", "label": "Workflow Automation", "price": 10000, "required": false },
    { "id": "reports", "label": "Reports & Forecasting", "price": 5000, "required": false },
    { "id": "rbac", "label": "Role-Based Access Control", "price": 10000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 15000, "required": false }
  ],

  // min: 70K; max: 200K
  "internal.erp.standard": [
    { "id": "erp-core", "label": "ERP Platform & Architecture", "price": 45000, "required": true },
    { "id": "user-mgmt", "label": "User Management & Roles", "price": 15000, "required": true },
    { "id": "dashboard", "label": "Main Dashboard", "price": 10000, "required": true },
    { "id": "inventory", "label": "Inventory Module", "price": 12000, "required": false },
    { "id": "hr-payroll", "label": "HR & Payroll Module", "price": 15000, "required": false },
    { "id": "accounting", "label": "Accounting / Finance Module", "price": 20000, "required": false },
    { "id": "sales-crm", "label": "Sales & CRM Module", "price": 15000, "required": false },
    { "id": "purchase", "label": "Purchase & Supplier Module", "price": 10000, "required": false },
    { "id": "reporting", "label": "Reporting & Analytics", "price": 10000, "required": false },
    { "id": "document-mgmt", "label": "Document Management", "price": 10000, "required": false },
    { "id": "multi-location", "label": "Multi-Location Support", "price": 13000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 25000, "required": false }
  ],

  // min: 65K; max: 150K
  "internal.custom.standard": [
    { "id": "custom-core", "label": "Custom System Architecture", "price": 40000, "required": true },
    { "id": "user-auth", "label": "User Authentication & Roles", "price": 10000, "required": true },
    { "id": "core-modules", "label": "Core Business Modules", "price": 15000, "required": true },
    { "id": "dashboard", "label": "Custom Dashboard & Reports", "price": 10000, "required": false },
    { "id": "workflow", "label": "Custom Workflows & Approvals", "price": 15000, "required": false },
    { "id": "notifications", "label": "Notifications (Email / WhatsApp / SMS)", "price": 10000, "required": false },
    { "id": "payments", "label": "Payment / Billing Integration", "price": 10000, "required": false },
    { "id": "api-integrations", "label": "Third-Party API Integrations", "price": 10000, "required": false },
    { "id": "mobile-access", "label": "Mobile / Tablet Friendly Access", "price": 10000, "required": false },
    { "id": "data-export", "label": "Data Export & Reporting", "price": 5000, "required": false },
    { "id": "source-code", "label": "Full Source Code Ownership", "price": 15000, "required": false }
  ]
};
