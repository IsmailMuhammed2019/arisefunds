"use client";
import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    organization: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link to actually send to monitored inbox
    const subject = encodeURIComponent(`Arise Funds Inquiry from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\n` +
      `Last Name: ${formData.lastName}\n` +
      `Email Address: ${formData.email}\n` +
      `Reaching out as: ${formData.role}\n` +
      `Organization: ${formData.organization}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@arisefunds.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#04122c] text-white font-sans border-t border-cyan-950/20">
      {/* Contact Form Container */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <AnimatedWrapper type="fade-up" className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Let's talk about building <span className="text-cyan-400">Workforce Infrastructure</span>
          </h1>
        </AnimatedWrapper>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Side: Info Box */}
          <AnimatedWrapper
            type="slide-in"
            delay={0.2}
            className="bg-[#071428] border border-cyan-900/20 hover:border-cyan-500/20 shadow-xl shadow-black/10 p-8 md:p-10 lg:w-3/5 rounded-2xl flex flex-col justify-center transition-all duration-300 relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
            
            <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-slate-200">
              Arise Funds is building partnerships with impact investors, development finance institutions, government bodies, and other like-minded entities to finance the future of work. If that describes you, we'd like to hear from you.
            </p>
            <div className="w-full h-px bg-cyan-500/10 mb-8" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-2">Or reach us directly</p>
              <a
                href="mailto:info@arisefunds.com"
                className="text-xl md:text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4"
              >
                info@arisefunds.com
              </a>
            </div>
          </AnimatedWrapper>

          {/* Right Side: Form */}
          <AnimatedWrapper
            type="fade-up"
            delay={0.4}
            className="p-8 md:p-10 lg:w-2/5 bg-[#071428] border border-cyan-900/20 hover:border-cyan-500/20 shadow-xl shadow-black/10 rounded-2xl flex flex-col justify-center transition-all duration-300 relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold mb-2 uppercase tracking-wider text-slate-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-cyan-400 transition-colors text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold mb-2 uppercase tracking-wider text-slate-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-cyan-400 transition-colors text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold mb-2 uppercase tracking-wider text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@organization.com"
                  aria-label="Email"
                  className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-cyan-400 transition-colors text-white"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold mb-2 uppercase tracking-wider text-slate-400">
                  I&apos;m reaching out as
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer text-white"
                  aria-label="Role"
                >
                  <option value="" className="bg-[#071428]">Select one...</option>
                  <option value="dfi" className="bg-[#071428]">DFI / Development Bank</option>
                  <option value="impact-foundation" className="bg-[#071428]">Impact Foundation</option>
                  <option value="family-office" className="bg-[#071428]">Family Office / Individual Investor</option>
                  <option value="government" className="bg-[#071428]">Government / Multilateral</option>
                  <option value="portfolio-partner" className="bg-[#071428]">Prospective Portfolio Partner</option>
                  <option value="media-research" className="bg-[#071428]">Media / Research</option>
                  <option value="other" className="bg-[#071428]">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold mb-2 uppercase tracking-wider text-slate-400">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Organization Name"
                  className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-cyan-400 transition-colors text-white"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold mb-2 uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..."
                  className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-cyan-400 transition-colors resize-none text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-955 font-bold px-12 py-3.5 rounded-full shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-slate-950"
              >
                Send Message
              </button>
            </form>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
