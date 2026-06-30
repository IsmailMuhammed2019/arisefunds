"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const teamMembers = [
  {
    role: "Arise Funds Inc.",
    name: "Aisha Saaka Lewis",
    title: "Chief Executive Officer",
    image: "/aisha-portrait.png",
    bio: "Most impact investors come from finance. Aisha Saaka Lewis comes from AI. As a Data & AI Strategist at Accenture Federal Services — where she led analytics transformation for public sector clients including enterprise reporting oversight for PEPFAR — and a management consultant at Booz Allen Hamilton, she spent her career applying technology and data to the hardest problems in government and global development. What she kept seeing was a gap: the infrastructure to connect capital, technology, and workforce development existed in pieces but never as a coherent investment thesis. Arise Funds is the answer to that gap — and the Harvard Kennedy School MPP she holds ensures the policy architecture matches the investment one. Born in Ghana and based in Washington D.C., she leads a firm built on the conviction that the infrastructure of work — and the capital to finance it — must reach every market where talent exists.",
    creds: [
      "MPP · Harvard Kennedy School",
      "Data & AI · Accenture Federal",
      "PEPFAR",
      "Booz Allen Hamilton",
    ],
  },
  {
    role: "Arise Funds Inc.",
    name: "LaTonya Blakes",
    title: "Vice President, Human Resources",
    image: "/latonya.png",
    bio: "When Arise Funds deploys capital into a portfolio company, LaTonya Blakes is the person who goes in to build it. Seconded from Arise Funds to SBTS Group LLC, she leads the HR infrastructure, compliance frameworks, talent systems, and organizational design that turn an operating company into an institutionally investable one — the human side of the active investor model in practice. Her career spans more than three decades in human capital leadership, including a decade at Booz Allen Hamilton where she directed HR for the National Defense University, led the firmwide Veterans Recruiting program, and built early-career talent pipelines across the DMV region. A George Mason University alumna with certifications in Human Capital Strategy, she leads people strategy, governance, and workforce compliance across Arise Funds' multi-country portfolio operations.",
    creds: [
      "30+ Years HR Leadership",
      "Booz Allen Hamilton",
      "National Defense University",
      "George Mason University",
    ],
  },
  /* {
    role: "Board Advisor · Arise Funds Inc.",
    name: "Laura C. Rudert",
    title: "Global Strategy & Delivery Leader",
    image: "/laura.png",
    bio: "Laura C. Rudert has spent more than 20 years deploying over $4 billion across climate, infrastructure, and development programs in 30+ countries. As Resident Country Director at the Millennium Challenge Corporation, she led a $525M compact in Côte d'Ivoire and helped design Power Africa. At the Bill & Melinda Gates Foundation, she served as Deputy Director of Strategy & Management across 280 staff and 8 global offices. An HKS MPP alumna — she has operated on both sides of the capital table.",
    creds: [
      "MPP · Harvard Kennedy School",
      "Millennium Challenge Corporation",
      "Bill & Melinda Gates Foundation",
      "$4B+ · 30+ Countries",
      "Power Africa",
      "Blended Finance",
    ],
  }, */
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#04112a] text-white py-24 px-6 relative overflow-hidden">
      {/* Decorative SVG Topography */}
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

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedWrapper
          type="fade-up"
          className="text-left max-w-4xl mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-6">
            The Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Built by practitioners,<br />
            <span className="text-cyan-400">not theorists.</span>
          </h2>
          <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-3xl">
            The Arise Funds team brings together impact investment strategy,
            federal systems expertise, and 30+ years of human capital leadership.
          </p>
        </AnimatedWrapper>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch relative z-10">
          {teamMembers.map((member, index) => (
            <AnimatedWrapper
              key={index}
              type="fade-up"
              delay={0.1 * index}
              className="bg-[#071428] hover:bg-[#0a1f3a] p-8 md:p-10 flex flex-col justify-between border-t-2 border-t-cyan-500 border border-cyan-900/20 rounded-xl transition-all duration-300 shadow-xl shadow-black/10"
            >
              <div>
                {/* Image + Header Row */}
                <div className="flex flex-row items-center gap-4 mb-6">
                  {/* Photo avatar */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0 border border-cyan-800/30 filter grayscale-[10%] contrast-[1.05] hover:grayscale-0 transition-all duration-350"
                  />
                  <div className="flex flex-col">
                    {/* Role tag */}
                    <span className="text-cyan-400 text-[10px] font-mono tracking-[0.15em] uppercase mb-1">
                      {member.role}
                    </span>
                    {/* Name */}
                    <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Job Title */}
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4 border-b border-cyan-900/20 pb-3">
                  {member.title}
                </div>

                {/* Bio text */}
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Credentials tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cyan-900/10">
                {member.creds.map((cred, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono text-slate-400 border border-slate-700/50 px-2 py-0.5 rounded uppercase tracking-wider"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
