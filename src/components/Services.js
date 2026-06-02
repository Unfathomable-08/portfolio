import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLaptop, FaMobile, FaRobot } from "react-icons/fa";
import { GiAutomaticSas } from "react-icons/gi";

export default function Services() {
  const services = [
    {
      title: "Enterprise-Grade Web Development",
      description:
        "High-performance, scalable websites built with modern technologies like React, Next.js, and robust backend architectures.",
      icon: FaLaptop,
      accent: "Build",
      outcome: "Fast, stable, SEO-ready products",
    },
    {
      title: "Progressive Web Apps (PWAs)",
      description:
        "Fast, app-like experiences with offline support, push notifications, and seamless performance on mobile and desktop.",
      icon: FaMobile,
      accent: "Launch",
      outcome: "Installable experiences across devices",
    },
    {
      title: "AI-Powered Automation",
      description:
        "Smart automation solutions for workflows, data processing, and repetitive tasks using AI tools, APIs, and custom scripts.",
      icon: GiAutomaticSas,
      accent: "Automate",
      outcome: "Less manual effort, more scale",
    },
    {
      title: "Applied AI & Machine Learning",
      description:
        "Practical AI solutions like recommendation systems, text analysis, and lightweight ML models tailored to real business use-cases.",
      icon: FaRobot,
      accent: "Optimize",
      outcome: "Data-driven experiences that convert",
    },
    
  ];

  return (
    <section
      id="services"
      className="bg-[var(--primary)] w-full overflow-x-hidden min-h-screen px-20"
      style={{ paddingTop: "40px", paddingBottom: "60px" }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p
          className="font-semibold"
          style={{
            color: "var(--secondary)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          Services
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white py-15">
          Extraordinary solutions, built for real impact
        </h1>
      </motion.div>

      <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:items-start">
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-xl border p-4"
              style={{
                borderColor: "rgba(0, 194, 255, 0.35)",
                background:
                  "linear-gradient(165deg, rgba(0,0,0,0.8) 0%, rgba(0,59,77,0.35) 55%, rgba(0,194,255,0.22) 100%)",
                boxShadow: "0 14px 35px rgba(0, 0, 0, 0.35)",
                minHeight: "280px",
              }}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex justify-between items-center">
                <span
                  className="font-semibold"
                  style={{ color: "var(--secondary)", fontSize: "12px" }}
                >
                  0{index + 1} . {service.accent}
                </span>
                <div
                  className="rounded-full flex justify-center items-center"
                  style={{
                    width: "42px",
                    height: "42px",
                    border: "1px solid rgba(0, 194, 255, 0.5)",
                    background: "rgba(18,18,18,0.8)",
                  }}
                >
                  <service.icon size={20} />
                </div>
              </div>

              <h2
                className="font-bold"
                style={{ marginTop: "16px", marginBottom: "8px", fontSize: "18px" }}
              >
                {service.title}
              </h2>
              <p className="text-sm" style={{ color: "var(--tertiary)", lineHeight: "1.7" }}>
                {service.description}
              </p>

              <div
                className="rounded"
                style={{
                  marginTop: "8px",
                  padding: "10px 12px",
                }}
              >
                <p className="text-sm" style={{ color: "white" }}>
                  {service.outcome}
                </p>
              </div>

              <div style={{ marginTop: "16px" }}>
                <Link
                  href="/contact"
                  className="bg-[var(--secondary)] hover:bg-[var(--hover)] rounded font-medium p-btn-md"
                  style={{
                    border: "1px solid rgba(0, 194, 255, 0.45)",
                    display: "inline-block",
                  }}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-xl border max-md:hidden max-lg:mt-4"
          style={{
            borderColor: "rgba(0, 194, 255, 0.35)",
            background:
              "radial-gradient(circle at top right, rgba(0,194,255,0.28), rgba(18,18,18,0.96) 52%)",
            padding: "24px",
            position: "sticky",
            top: "90px",
          }}
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="font-bold text-2xl" style={{ color: "var(--secondary)" }}>
            Service Blueprint
          </h3>
          <p className="leading-relaxed" style={{ marginTop: "14px", color: "var(--tertiary)" }}>
            I specialize in building efficient, user-friendly digital products
            that scale. Whether it is a powerful full-stack web app, a
            high-performance mobile app, intelligent automation, or basic AI
            models, I turn your ideas into reality with modern tools and
            technologies.
          </p>

          <div style={{ marginTop: "20px" }}>
            {[
              "Discovery & strategy",
              "Design + rapid prototyping",
              "Build, test, optimize, launch",
            ].map((step, idx) => (
              <div
                key={step}
                className="rounded"
                style={{
                  marginBottom: "10px",
                  padding: "10px 12px",
                }}
              >
                <span className="font-medium" style={{ color: "white" }}>
                  0{idx + 1}
                </span>
                <span style={{ marginLeft: "10px", color: "var(--tertiary)" }}>{step}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="bg-[var(--secondary)] hover:bg-[var(--hover)] text-white rounded p-btn-md font-medium"
            style={{ marginTop: "18px", display: "inline-block" }}
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
