"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    organization: "",
    message: "",
  });

  // Lock scroll when modal is open
  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isContactModalOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeContactModal]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Failed to send message. Please email us directly at info@arisefunds.com.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please email us directly at info@arisefunds.com.");
    } finally {
      setIsSubmitting(false);
    }
    
    // Close after delay on success
    setTimeout(() => {
      closeContactModal();
      // Reset state for next time
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          organization: "",
          message: "",
        });
      }, 500);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#011424] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={closeContactModal}
              className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Brand Info */}
            <div className="lg:w-2/5 p-8 lg:p-12 bg-gradient-to-br from-cyan-600 to-blue-700 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="inline-block p-3 bg-white rounded-2xl mb-8 shadow-sm">
                  <img src="/ariseFunds_logoCircle.png" alt="Logo" className="h-10 w-auto object-contain" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight leading-tight">
                  Arise Funds <br />
                  <span className="text-white/70">Institutional Inquiry</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  We are building the systems that generate returns and create employment at scale. If you’re an investor, institution, or partner financing the future of work, get in touch.
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/20">
                <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-2">Direct Channel</p>
                <a href="mailto:info@arisefunds.com" className="text-xl font-semibold hover:text-cyan-200 transition-colors">
                  info@arisefunds.com
                </a>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-3/5 p-8 lg:p-12 bg-[#011424] relative">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                >
                  <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received</h3>
                  <p className="text-slate-400 max-w-sm">
                    Thank you for reaching out. Our team will review your inquiry and get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">First Name</label>
                      <input
                        required
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Last Name</label>
                      <input
                        required
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@organization.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="role" className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">I'm reaching out as</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#011424]">Select one...</option>
                      <option value="dfi" className="bg-[#011424]">DFI / Development Bank</option>
                      <option value="impact-foundation" className="bg-[#011424]">Impact Foundation</option>
                      <option value="family-office" className="bg-[#011424]">Family Office / Individual Investor</option>
                      <option value="government" className="bg-[#011424]">Government / Multilateral</option>
                      <option value="portfolio-partner" className="bg-[#011424]">Prospective Portfolio Partner</option>
                      <option value="media-research" className="bg-[#011424]">Media / Research</option>
                      <option value="other" className="bg-[#011424]">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what you're working on..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-white text-slate-950 font-bold py-4 rounded-xl hover:bg-cyan-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-cyan-500/5"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-slate-950/20 border-t-slate-950 rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[9px] text-center text-slate-500 tracking-wider uppercase">
                    Your information is transmitted securely.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
