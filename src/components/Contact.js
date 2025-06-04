"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY); 
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formData
        ).then(
            alert('Message Sent!')
        ).catch((error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send message.');
        });

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
            {[['twitter', 'twitter.com/unfathomable_08'], ['instagram', 'instagram.com/unfathomable_08'], ['facebook-f', ''], ['linkedin-in', '']].map((platform) => (
              <a 
                key={platform[0]}
                href={platform[1]} 
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
        <div className="">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 rounded-xl shadow-2xl bg-laptop  flex-col justify-center items-center"
          >
            <div className="">
                <form>
                    <input 
                      type="text" 
                      name="user_name" 
                      onChange={handleChange}
                      className="bg-primary border-b border-gray-500 w-full h-10 mb-3 focus:outline-none  focus:border-gray-300" 
                      required
                      placeholder="Your Name"/><br/>
                    <input 
                      type="text" 
                      onChange={handleChange}
                      name="user_email" 
                      className="bg-primary border-b border-gray-500 w-full h-10 mb-3 focus:outline-none focus:border-gray-300" 
                      required
                      placeholder="Your Email"/><br/>
                    <textarea 
                      type="text" 
                      onChange={handleChange}
                      name="message" 
                      className="bg-primary border border-gray-500 w-full h-36 p-btn px-4 mb-3 focus:outline-none focus:border-gray-300 focus:rounded-xl transition ease-in-out" 
                      required
                      placeholder="Your Message"/><br/>
                  <button
                    onClick={handleSubmit}
                    className="w-full text-sm p-btn bg-[var(--secondary)] text-gray-900 font-semibold rounded-lg hover:bg-[var(--hover)] transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}