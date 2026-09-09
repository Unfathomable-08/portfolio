# Dev Muhammad | Portfolio & Case Studies

[![Live Demo](https://img.shields.io/badge/Live_Portfolio-dev--muhammad.vercel.app-00f2fe?style=for-the-badge&logo=vercel&logoColor=white)](https://dev-muhammad.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Personal portfolio and engineering showcase of Dev Muhammad (Unfathomable-08)** — Full-Stack Web & Applied AI Developer based in Karachi, Pakistan. Built with Next.js 16, React 19, Tailwind CSS v4, Framer Motion, and XYFlow.

---

## Live URL

* **Website**: [https://dev-muhammad.vercel.app](https://dev-muhammad.vercel.app)
* **LLM Context**: [https://dev-muhammad.vercel.app/llms.txt](https://dev-muhammad.vercel.app/llms.txt)

---

## Features & Architecture Highlights

- **Blazing Fast Architecture**: Built on Next.js 16 with Turbopack, App Router, and serverless edge delivery.
- **Premium Dark Aesthetic**: Custom neon glassmorphism design with fluid cursor neon trails, responsive micro-animations, and fluid typography.
- **Deep Interactive Case Studies**: Dedicated dynamic pages (`/case-study/[slug]`) featuring:
  - Interactive architecture flowmaps powered by `@xyflow/react`
  - High-fidelity desktop/mobile responsive mockup carousels with zoom preview modal
  - Comprehensive technical breakdowns, stack analysis, and key deliverable highlights
- **Complete Legal & Policy Suite**:
  - [Privacy Policy](https://dev-muhammad.vercel.app/privacy-policy)
  - [Terms & Conditions](https://dev-muhammad.vercel.app/terms)
  - [Copyright Policy](https://dev-muhammad.vercel.app/copyright-policy)
  - [Refund Policy](https://dev-muhammad.vercel.app/refund-policy)
- **Serverless Contact Form**: Direct client communication handled via EmailJS with zero database vulnerability.
- **Advanced SEO & GEO/AEO Optimization**:
  - Complete Schema.org JSON-LD Structured Data (Person, WebSite, Portfolio, Services, CreativeWork)
  - Dynamic OpenGraph & Twitter cards
  - Machine-readable `llms.txt` context file for AI search crawlers (ChatGPT, Claude, Perplexity)
  - Auto-generated `sitemap.xml` & `robots.txt`

---

## Project Structure

```bash
portfolio/
├── public/                     # Static assets (images, icons, case study previews, branding)
│   ├── case-studies/           # Mockups and screenshots for individual projects
│   ├── project/                # Featured project card covers
│   ├── favicon.ico             # App favicon
│   ├── logo.png                # Primary developer logo
│   └── llms.txt                # Machine-readable LLM context for search engines
│
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── (components)/       # Homepage sections
│   │   │   ├── About.js        # Personal bio & developer status
│   │   │   ├── FAQ.js          # Frequently asked questions with smooth accordion
│   │   │   ├── Hero.js         # Hero section with animated tagline & skill badges
│   │   │   ├── Projects.js     # Filterable projects grid with modal & case study links
│   │   │   ├── Services.js     # Core service offerings (Web, AI, Mobile, Systems)
│   │   │   ├── Skills.js       # Technology stack categorized by proficiency
│   │   │   └── WorkEx.js       # Career milestones & work experience timeline
│   │   │
│   │   ├── [section]/          # Dynamic section scroll route handler
│   │   ├── case-study/         # Dynamic case study engine
│   │   │   ├── [slug]/         # Individual case study page & SEO metadata layout
│   │   │   └── (components)/   # Case study components (FlowMap, Mockup, Info, CTA)
│   │   │
│   │   ├── privacy-policy/     # Privacy Policy route
│   │   ├── terms/              # Terms & Conditions route
│   │   ├── copyright-policy/   # Copyright & IP Policy route
│   │   ├── refund-policy/      # Refund & Milestone Policy route
│   │   │
│   │   ├── globals.css         # Design tokens, custom themes, and Tailwind CSS imports
│   │   ├── layout.js           # Root layout with font optimization, Schema.org, & GA
│   │   ├── page.js             # Portfolio landing page
│   │   ├── robots.txt          # Crawler instructions & AI bot permissions
│   │   ├── sitemap.xml         # Search engine sitemap index
│   │   └── ScreenContext.js    # Responsive screen size provider
│   │
│   ├── components/             # Reusable UI & layout components
│   │   ├── ui/
│   │   │   └── NeonTrail.js    # Custom glowing cursor trail canvas effect
│   │   ├── Contact.js          # EmailJS-powered interactive contact form
│   │   ├── Footer.js           # 4-column minimal footer with navigation & socials
│   │   ├── Navbar.js           # Sticky backdrop-blur header with mobile menu
│   │   └── PolicyPage.js       # Minimalist 3-column legal page layout template
│   │
│   ├── data/                   # Data sources & content models
│   │   ├── case-study.js       # Complete case study details, mockups & node maps
│   │   └── policies.js         # Text & structure for Privacy, Terms, Copyright, Refund
│   │
│   └── lib/                    # Helper utilities
│       └── schema.js           # Comprehensive Schema.org JSON-LD structured data
│
├── package.json                # Project dependencies and npm scripts
└── README.md                   # Repository documentation
```

---

## Tech Stack

| Domain | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Flow Maps & Nodes** | [@xyflow/react](https://reactflow.dev/) (React Flow) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) & [FontAwesome 6](https://fontawesome.com/) |
| **Form Handling** | [EmailJS](https://www.emailjs.com/) |
| **Analytics & Telemetry** | [Google Analytics (gtag)](https://analytics.google.com/) & [@vercel/analytics](https://vercel.com/analytics) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
* [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)

### 1. Clone the repository

```bash
git clone https://github.com/unfathomable-08/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add your EmailJS configuration:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Contact & Socials

* **Developer**: Dev Muhammad (*Unfathomable-08*)
* **Email**: [muhammad124711@gmail.com](mailto:muhammad124711@gmail.com)
* **WhatsApp**: [+92 328 2279743](https://wa.me/+923282279743)
* **GitHub**: [@unfathomable-08](https://github.com/unfathomable-08)
* **LinkedIn**: [Muhammad Abasi](https://linkedin.com/in/muhammad-abasi-6b6884350)
* **Twitter / X**: [@unfathomable_08](https://twitter.com/unfathomable_08)
* **Instagram**: [@unfathomable_08](https://instagram.com/unfathomable_08)

---

## License

This repository and its codebase are private / proprietary. Custom open-source components are subject to their respective licenses. See the [Copyright Policy](https://dev-muhammad.vercel.app/copyright-policy) for details.
