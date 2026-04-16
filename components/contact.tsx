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
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-[#001a2c] text-white font-sans">
      {/* Contact Form Container */}
      <section className="max-w-6xl mx-auto px-8 py-10">
        <AnimatedWrapper type="fade-up" className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            Get in <span className="text-[#00a3ff]">Touch</span>
          </h1>
          <p className="text-gray-400 mx-auto max-w-2xl">
            Ready to deploy capital into workforce infrastructure?
          </p>
        </AnimatedWrapper>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side: Info Box */}
          <AnimatedWrapper
            type="slide-in"
            delay={0.2}
            className="bg-[#00a3ff] p-10 lg:w-3/5 flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-medium leading-tight mb-8">
              Arise Funds is actively building partnerships with impact
              investors, development finance institutions, and government
              bodies. If that describes you we respond to every serious inquiry
              personally.
            </h2>
            <div className="w-full h-px bg-white/30 mb-8" />
            <div>
              <p className="text-lg opacity-90 mb-2">Or reach us directly</p>
              <a
                href="mailto:info@arisefunds.com"
                className="text-xl font-semibold underline underline-offset-4"
              >
                info@arisefunds.com
              </a>
            </div>
          </AnimatedWrapper>

          {/* Right Side: Form */}
          <AnimatedWrapper
            type="fade-up"
            delay={0.4}
            className="p-10 lg:w-2/5 bg-[#001a2c]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold mb-2 uppercase tracking-wider text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Jane"
                    className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#00a3ff] transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold mb-2 uppercase tracking-wider text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#00a3ff] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold mb-2 uppercase tracking-wider text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  aria-label="Email"
                  className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#00a3ff] transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold mb-2 uppercase tracking-wider text-gray-300">
                  I&apos;m reaching out as?
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#00a3ff] transition-colors appearance-none cursor-pointer"
                  aria-label="Role"
                >
                  <option className="bg-[#001a2c]">Select one</option>
                  <option className="bg-[#001a2c]">Investor</option>
                  <option className="bg-[#001a2c]">Partner</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold mb-2 uppercase tracking-wider text-gray-300">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Organization Name"
                  className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#00a3ff] transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold mb-2 uppercase tracking-wider text-gray-300">
                  Message
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..."
                  className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#00a3ff] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-[#00a3ff] hover:bg-[#0082cc] text-white px-12 py-3 rounded-md font-semibold transition-all duration-300"
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
