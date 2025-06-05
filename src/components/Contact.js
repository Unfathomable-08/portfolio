"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData
      )
      .then(() => {
        alert("Message Sent!");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message.");
      });

    setFormData({ name: "", email: "", message: "" });
  };

  const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[var(--primary)] flex items-center justify-center px-4 sm:px-10 md:px-20 overflow-x-hidden">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <motion.div
          className="text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <motion.h1
            className="text-3xl font-bold mb-3 text-center lg:text-left"
            variants={fadeVariant}
            custom={0.2}
          >
            Get in <span className="text-[var(--secondary)]">Touch</span>
          </motion.h1>
          <motion.p
            className="mb-3 text-gray-300"
            variants={fadeVariant}
            custom={0.3}
          >
            I am excited to connect! Whether you have a project idea, need
            assistance, or just want to chat about tech, feel free to reach out.
          </motion.p>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div className="flex items-center gap-3" variants={fadeVariant}>
              <i className="fas fa-envelope text-xl mb-3" />
              <a
                href="mailto:muhammad124711@gmail.com"
                className="text-gray-300 hover:underline text-sm"
              >
                muhammad124711@gmail.com
              </a>
            </motion.div>
            <motion.div className="flex items-center gap-3" variants={fadeVariant}>
              <i className="fab fa-github text-xl" />
              <a
                href="https://github.com/unfathomable-08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline text-sm mb-3"
              >
                @Unfathomable-08
              </a>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mt-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              ["twitter", "https://twitter.com/unfathomable_08"],
              ["instagram", "https://instagram.com/unfathomable_08"],
              ["facebook-f", ""],
              ["linkedin-in", ""],
            ].map(([icon, link], i) => (
              <motion.a
                key={icon}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeVariant}
                custom={i}
                className="text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-gray-900 w-[28px] flex justify-center items-center aspect-square rounded-full border border-cyan-400 transition-all duration-300 transform hover:scale-110"
              >
                <i className={`fab fa-${icon} text-lg`} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="p-4 rounded-xl shadow-2xl bg-laptop"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
              },
            },
          }}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Your Name"
              className="bg-primary border-b border-gray-500 w-full h-10 p-btn focus:outline-none focus:border-[var(--secondary)]"
              required
              variants={fadeVariant}
              custom={0.1}
            />
            <motion.input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Your Email"
              className="bg-primary border-b border-gray-500 w-full h-10 px-2 focus:outline-none focus:border-[var(--secondary)]"
              required
              variants={fadeVariant}
              custom={0.2}
            />
            <motion.textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              placeholder="Your Message"
              className="bg-primary border border-gray-500 w-full h-36 p-btn px-4 focus:outline-none focus:border-[var(--secondary)] focus:rounded-xl transition ease-in-out"
              required
              variants={fadeVariant}
              custom={0.3}
            />
            <motion.button
              type="submit"
              className="w-full text-sm p-btn bg-[var(--secondary)] text-gray-900 font-semibold rounded-lg hover:bg-[var(--hover)] transition-all duration-300 transform hover:scale-105"
              variants={fadeVariant}
              custom={0.4}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}