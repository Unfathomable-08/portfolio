import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Responsive websites and web apps using React, Next.js, Node.js, Express, and MongoDB/MySQL.",
      img: "/web.png"
    },
    {
      title: "On-Page & Technical SEO",
      description:
      "Helping your site rank higher with keyword research, better content and structure, and google indexing.",
      img: "/app.png"
    },
    {
      title: "Automation & Bots",
      description:
      "Custom automation bots for scraping, tasks, and scheduling using Python or Node.js.",
      img: "/bot.png"
    },
    {
      title: "AI & ML (Basic Models)",
      description:
      "Simple ML models with scikit-learn and basic chatbots using NLP & cosine similarity.",
      img: "/ai.png"
    },
  ];

  return (
    <div className="bg-[var(--primary)] min-h-screen items-center justify-center flex-col flex px-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-md:translate-y-18 py-15 transform text-center">My Services</h1>
      <div className="grid lg:grid-cols-[3fr_2fr] gap-x-10 md:items-center">
        <div className="grid sm:grid-cols-2 gap-6 transform max-lg:scale-80">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-services h-60 rounded-lg flex flex-col justify-center gap-y-2 items-center text-center p-4"
              initial={{ rotateY: -90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              <div className="w-10 h-10 border-1 rounded-full flex justify-center items-center">
                <Image
                  src={service.img}
                  width={30}
                  height={30}
                  alt={service.title}
                />
              </div>
              <h1 className="font-medium">{service.title}</h1>
              <p className="text-sm">{service.description}</p>
              <div>
                <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">
                  View Details
                </button>
                <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="max-lg:hidden"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.5,
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1
            className="font-bold text-[var(--secondary)] text-2xl"
            style={{ padding: "0 0 20px 0" }}
          >
            What I Do
          </h1>
          <p className="leading-relaxed">
            I specialize in building efficient, user-friendly digital products
            that scale. Whether it is a powerful full-stack web app, a
            high-performance mobile app, intelligent automation, or basic AI
            models — I turn your ideas into reality with modern tools and
            technologies.
          </p>
          <button
            className="bg-[var(--secondary)] hover:bg-[var(--hover)] rounded p-btn font-medium"
            style={{ margin: "25px 10px" }}
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
}
