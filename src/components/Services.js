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
      title: "Mobile App Development",
      description:
      "Cross-platform apps with React Native offering native look and smooth performance.",
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
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-md:translate-y-18 transform text-center">My Services</h1>
      <div className="grid md:grid-cols-[3fr_2fr] gap-x-16 md:items-center">
        <div className="grid sm:grid-cols-2 gap-8 transform max-md:scale-80">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-services h-56 rounded-lg flex flex-col justify-center gap-y-2 items-center text-center p-4"
            >
              <div className="w-10 h-10 border-1 rounded-full flex justify-center items-center">
                <Image src={service.img} width={30} height={30} alt={service.title}/>
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
            </div>
          ))}
        </div>

        <div className="max-md:hidden">
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
        </div>
      </div>
    </div>
  );
}
