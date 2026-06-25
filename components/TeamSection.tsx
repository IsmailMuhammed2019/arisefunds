"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamSection = () => {
  return (
    <div className="relative bg-[#011627] text-white min-h-screen py-16 px-6 md:px-20 font-sans selection:bg-[#4fb3e8]/30 overflow-hidden">
      {/* Decorative Top Left Topography */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full stroke-white fill-none"
        >
          <path d="M0,20 Q50,0 100,20 T150,20" strokeWidth="0.5" />
          <path d="M0,30 Q50,10 100,30 T150,30" strokeWidth="0.5" />
          <path d="M0,40 Q50,20 100,40 T150,40" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Header */}
      <AnimatedWrapper
        type="fade-up"
        className="text-center max-w-3xl mx-auto mb-20 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          The <span className="text-cyan-400 font-semibold">Team</span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          The Arise Funds team brings together impact investment strategy,
          federal systems expertise, and 30+ years of human capital leadership.
        </p>
      </AnimatedWrapper>

      <main className="max-w-6xl mx-auto space-y-20 relative z-10">
        {/* Aisha Saaka Lewis CEO Profile */}
        <AnimatedWrapper type="fade-up" delay={0.2}>
          <section className="flex flex-col md:flex-row items-start gap-10">
            {/* Aisha Portrait */}
            <div className="w-full md:w-4/12 flex justify-start">
              <img
                src="/aisha-portrait.png"
                alt="Aisha Saaka Lewis"
                className="rounded-2xl w-full h-80 object-cover aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-cyan-950/20 border border-white/5"
              />
            </div>

            {/* Aisha Bio Details */}
            <div className="w-full md:w-8/12 pt-1">
              <h2 className="text-3xl font-bold text-white">Aisha Saaka Lewis</h2>
              <p className="text-slate-400 font-medium mb-6 uppercase tracking-wider text-sm">
                Chief Executive Officer
              </p>

              <div className="text-slate-300 space-y-4 leading-relaxed text-base">
                <p>
                  Most impact investors come from finance. Aisha Saaka Lewis comes from AI.
                  As a Data & AI Strategist at Accenture Federal Services &mdash; where she
                  led analytics transformation for public sector clients including enterprise
                  reporting oversight for PEPFAR &mdash; and a management consultant at Booz
                  Allen Hamilton, she spent her career applying technology and data to the
                  hardest problems in government and global development.
                </p>
                <p>
                  What she kept seeing was a gap: the infrastructure to connect capital,
                  technology, and workforce development existed in pieces but never as a
                  coherent investment thesis.
                </p>
              </div>

              {/* Aisha Social Media Links */}
              <div className="flex gap-4 mt-6 text-slate-400">
                <AnimatedWrapper hover tap type="scale" delay={0.3}>
                  <a href="#" aria-label="Facebook">
                    <FaFacebookF className="hover:text-cyan-400 cursor-pointer transition-colors" />
                  </a>
                </AnimatedWrapper>
                <AnimatedWrapper hover tap type="scale" delay={0.35}>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedinIn className="hover:text-cyan-400 cursor-pointer transition-colors" />
                  </a>
                </AnimatedWrapper>
                <AnimatedWrapper hover tap type="scale" delay={0.4}>
                  <a href="#" aria-label="Twitter">
                    <FaTwitter className="hover:text-cyan-400 cursor-pointer transition-colors" />
                  </a>
                </AnimatedWrapper>
              </div>
            </div>
          </section>
        </AnimatedWrapper>

        {/* Lower Row: LaTonya and Laura Side-by-Side Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-16 border-t border-white/5">
          
          {/* LaTonya Blakes */}
          <AnimatedWrapper type="fade-up" delay={0.4}>
            <section className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <h2 className="text-2xl font-bold text-white">LaTonya Blakes</h2>
                <p className="text-slate-400 font-medium mb-4 text-xs uppercase tracking-widest">
                  Vice President, Human Resources
                </p>
                <div className="text-slate-350 text-sm space-y-3 leading-relaxed">
                  <p>
                    When Arise Funds deploys capital into a portfolio company,
                    LaTonya Blakes is the person who goes in to build it.
                    Seconded from Arise Funds to SBTS Group LLC, she leads the
                    HR infrastructure, compliance frameworks, talent systems,
                    and organizational design that turn an operating company
                    into an institutionally investable one &mdash; the human side
                    of the active investor model in practice.
                  </p>
                  <p>
                    Her career spans more than three decades in human capital
                    leadership, including a decade at Booz Allen Hamilton where
                    she directed HR for the National Defense University, led the
                    firmwide Veterans Recruiting program, and built early-career
                    talent pipelines across the DMV region.
                  </p>
                </div>
                <div className="flex gap-4 mt-6 text-slate-400">
                  <AnimatedWrapper hover tap type="scale" delay={0.5}>
                    <a href="#" aria-label="Facebook">
                      <FaFacebookF className="hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>
                  </AnimatedWrapper>
                  <AnimatedWrapper hover tap type="scale" delay={0.55}>
                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedinIn className="hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>
                  </AnimatedWrapper>
                  <AnimatedWrapper hover tap type="scale" delay={0.6}>
                    <a href="#" aria-label="Twitter">
                      <FaTwitter className="hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>
                  </AnimatedWrapper>
                </div>
              </div>
              <div className="w-full sm:w-1/3 order-1 sm:order-2 flex justify-start items-start">
                <img
                  src="/latonya.png"
                  alt="LaTonya Blakes"
                  className="rounded-2xl w-full aspect-square object-cover shadow-[0_15px_35px_rgba(0,0,0,0.3)] border border-white/5"
                />
              </div>
            </section>
          </AnimatedWrapper>

          {/* Laura C. Rudert */}
          <AnimatedWrapper type="fade-up" delay={0.6}>
            <section className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 order-2 sm:order-1">
                <h2 className="text-2xl font-bold text-white">Laura C. Rudert</h2>
                <p className="text-slate-400 font-medium mb-4 text-xs uppercase tracking-widest">
                  Global Strategy & Delivery Leader
                </p>
                <div className="text-slate-350 text-sm space-y-3 leading-relaxed">
                  <p>
                    Global Strategy & Delivery Leader Laura C. Rudert has spent
                    more than 20 years deploying over $4 billion across climate,
                    infrastructure, and development programs in 30+ countries.
                    As Resident Country Director at the Millennium Challenge
                    Corporation, she led a $525M compact in Côte d'Ivoire and
                    helped design Power Africa.
                  </p>
                  <p>
                    At the Bill & Melinda Gates Foundation, she served as Deputy
                    Director of Strategy & Management across 280 staff and 8
                    global offices. An HKS MPP alumna &mdash; she has operated on
                    both sides of the capital table.
                  </p>
                </div>
                <div className="flex gap-4 mt-6 text-slate-400">
                  <AnimatedWrapper hover tap type="scale" delay={0.7}>
                    <a href="#" aria-label="Facebook">
                      <FaFacebookF className="hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>
                  </AnimatedWrapper>
                  <AnimatedWrapper hover tap type="scale" delay={0.75}>
                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedinIn className="hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>
                  </AnimatedWrapper>
                  <AnimatedWrapper hover tap type="scale" delay={0.8}>
                    <a href="#" aria-label="Twitter">
                      <FaTwitter className="hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>
                  </AnimatedWrapper>
                </div>
              </div>
              <div className="w-full sm:w-1/3 order-1 sm:order-2 flex justify-start items-start">
                <img
                  src="/laura.png"
                  alt="Laura C. Rudert"
                  className="rounded-2xl w-full aspect-square object-cover shadow-[0_15px_35px_rgba(0,0,0,0.3)] border border-white/5"
                />
              </div>
            </section>
          </AnimatedWrapper>

        </div>
      </main>
    </div>
  );
};

export default TeamSection;
