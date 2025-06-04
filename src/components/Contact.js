"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[var(--primary)] flex items-center justify-center px-20 overflow-x-hidden">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 items-center sm:grid-cols-2 md:gap-12 gap-y-12">
        {/* Contact Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-2xl font-bold mb-3 text-center lg:text-left">
            Get in <span>Touch</span>
          </h1>
          <p className="mb-3 pb-3 text-gray-300">
            I am excited to connect! Whether you have a project idea, need assistance, or just want to chat about tech, feel free to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-envelope text-xl" />
              <a 
                href="mailto:muhammad124711@gmail.com" 
                className="text-gray-300 hover:underline text-sm transition-colors underline"
              >
                muhammad124711@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 mb-3 pb-3">
              <i className="fab fa-github text-xl" />
              <a 
                href="https://github.com/unfathomable-08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline text-sm transition-colors underline"
              >
                @Unfathomable-08
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            {['twitter', 'instagram', 'facebook-f', 'linkedin-in'].map((platform) => (
              <a 
                key={platform}
                href={`https://${platform}.com`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-gray-900 w-[28px] flex justify-center items-center aspect-square rounded-full border border-cyan-400 transition-all duration-300 transform hover:scale-110"
              >
                <i className={`fab fa-${platform} text-lg hover:text-white text-[var(--secondary)]`} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-4 rounded-xl shadow-2xl bg-laptop flex flex-col justify-center items-center"
        >
          <h2 className="text-md md:text-lg font-semibold text-white text-center max-md:hidden">Send a Message</h2>
          <div className='w-[80%]'>
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full text-sm md:mb-3 p-btn text-white border border-[var(--tertiary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full text-sm md:mb-3 p-btn text-white border border-[var(--tertiary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full text-sm md:mb-3 p-btn text-white border border-[var(--tertiary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all h-12 md:h-20 resize-none"
                required
              />
              <button
                onClick={handleSubmit}
                className="w-full text-sm p-btn bg-[var(--secondary)] text-gray-900 font-semibold rounded-lg hover:bg-[var(--hover)] transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}