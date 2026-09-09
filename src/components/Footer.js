"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  const caseStudies = [
    { name: "SableBuild", href: "/case-study/sablebuild" },
    { name: "Ember & Oak", href: "/case-study/emberoak" },
    { name: "Awaza", href: "/case-study/awaza" },
    { name: "TeBre AI", href: "/case-study/tebre" },
    { name: "Fluentyx", href: "/case-study/fluentyx" },
    { name: "Sparkio Store", href: "/case-study/sparkio" },
    { name: "GlowFarm", href: "/case-study/glowfarm" },
    { name: "RAG Agent", href: "/case-study/rag" },
    { name: "SkyTech", href: "/case-study/skytech" },
    { name: "Vendra", href: "/case-study/vendra" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Copyright Policy", href: "/copyright-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  const socialLinks = [
    { name: "WhatsApp", icon: "whatsapp", href: "https://wa.me/+923282279743" },
    { name: "Instagram", icon: "instagram", href: "https://instagram.com/unfathomable_08" },
    { name: "Facebook", icon: "facebook-f", href: "https://facebook.com/unfathomable08" },
    { name: "Twitter", icon: "x-twitter", href: "https://twitter.com/unfathomable_08" },
    { name: "LinkedIn", icon: "linkedin-in", href: "https://linkedin.com/in/muhammad-abasi-6b6884350" }
  ];

  return (
    <footer className="w-full bg-[var(--primary)] text-white border-t border-white/10 pt-16! pb-10! px-5! sm:px-10! md:px-20! relative overflow-hidden">
      <div className="max-w-7xl mx-auto! grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-10 lg:gap-12 mb-8! md:mb-14!">
        {/* Col 1: Brand / Logo */}
        <div className="lg:col-span-3">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
            />
            <span className="sr-only">(Unfathomable-08 | unfathomable_08)</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Fullstack Web & Applied AI Developer building scalable web applications, autonomous AI agents, and high-performance digital products.
          </p>
        </div>

        {/* Col 2: Main Navigation */}
        <div className="lg:col-span-2">
          <h4 className="text-[var(--secondary)]! text-xs font-semibold tracking-[2px] uppercase mb-4!">
            Navigation
          </h4>
          <ul className="space-y-2.5! text-sm">
            {mainLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-[var(--secondary)]! transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Case Studies & Legal */}
        <div className="lg:col-span-2">
          <h4 className="text-[var(--secondary)]! text-xs font-semibold tracking-[2px] uppercase mb-4!">
            Case Studies
          </h4>
          <div className="space-y-4!">
            <div>
              <ul className="space-y-2! text-sm">
                {caseStudies.map((cs) => (
                  <li key={cs.name}>
                    <Link
                      href={cs.href}
                      className="text-gray-300 hover:text-[var(--secondary)]! transition-colors duration-200"
                    >
                      {cs.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Col 4: Contact & Socials */}
        <div className="lg:col-span-2">
          <h4 className="text-[var(--secondary)]! text-xs font-semibold tracking-[2px] uppercase mb-4!">
            Get In Touch
          </h4>
          <div className="space-y-3! text-sm">
            <div className="flex items-center gap-3 text-gray-300">
              <i className="fab fa-whatsapp text-base shrink-0" />
              <a
                href="https://wa.me/+923282279743"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--secondary)]! hover:underline transition-colors duration-200"
              >
                +92 328 2279743
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <i className="fas fa-envelope text-sm shrink-0" />
              <a
                href="mailto:muhammad124711@gmail.com"
                className="hover:text-[var(--secondary)]! text-xs hover:underline transition-colors duration-200 break-all"
              >
                muhammad124711@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-400 text-xs">
              <i className="fas fa-location-dot text-sm shrink-0" />
              <span>Karachi, Pakistan (UTC+5)</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <i className="fab fa-github text-sm shrink-0" />
              <a
                href="https://github.com/unfathomable-08"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--secondary)]! text-xs hover:underline transition-colors duration-200 break-all"
              >
                @unfathomable-08
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-8!">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-3! font-medium">Connect Online</p>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:bg-[var(--secondary)] hover:text-gray-900 w-8 h-8 rounded-full border border-cyan-400/30 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <i className={`fab fa-${social.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8! border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Dev Muhammad. All rights reserved.</p>
        <div className="flex flex-wrap items-center max-sm:justify-center gap-x-6 gap-y-2">
          {legalLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[var(--secondary)]! transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
