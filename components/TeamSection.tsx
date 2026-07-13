"use client";

import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import Breadcrumbs from "./Breadcrumbs";
import { X } from "lucide-react";

interface TeamMember {
  role: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  creds: string[];
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    role: "Arise Funds Inc.",
    name: "Aisha Saaka Lewis",
    title: "Chief Executive Officer",
    image: "/aisha-portrait.png",
    bio: "Most impact investors come from finance. Aisha Saaka Lewis comes from technology. As a Data & AI Strategist at Accenture Federal Services — where she led analytics transformation for public sector clients, including enterprise reporting oversight for PEPFAR — and a management consultant at Booz Allen Hamilton, she spent her career applying data and analytics to the hardest problems in government and global development. What she kept seeing was a gap: the infrastructure to connect capital, technology, and workforce development existed in pieces, but never as a coherent investment thesis. Arise Funds is her response to that gap — and the Harvard Kennedy School MPP she holds is why the policy architecture matches the investment one. Born in Ghana and based in Washington, D.C., she leads a firm built on the conviction that the infrastructure of work — and the capital to finance it — must reach every market where talent exists.",
    creds: [
      "MPP · Harvard Kennedy School",
      "Data & AI · Accenture Federal",
      "PEPFAR",
      "Booz Allen Hamilton",
    ],
    linkedin: "https://linkedin.com",
  },
  {
    role: "Arise Funds Inc.",
    name: "LaTonya Blakes",
    title: "Vice President, Human Resources",
    image: "/latonya.png",
    bio: "When Arise Funds deploys capital into a portfolio company, LaTonya Blakes is the person who goes in to build it. Seconded from Arise Funds to SBTS Group LLC, she leads the HR infrastructure, compliance frameworks, talent systems, and organizational design that turn an operating company into an institutionally investable one — the people side of the active-investor model in practice. Her career spans more than three decades in human capital leadership, including a decade at Booz Allen Hamilton, where she directed HR supporting the National Defense University, led the firmwide Veterans Recruiting program, and built early-career talent pipelines across the DMV region. A George Mason University alumna with certifications in Human Capital Strategy, she leads people strategy, governance, and workforce compliance across Arise Funds' multi-country portfolio operations.",
    creds: [
      "30+ Years HR Leadership",
      "Booz Allen Hamilton",
      "National Defense University",
      "George Mason University",
    ],
    linkedin: "https://linkedin.com",
  },
];

export default function TeamSection() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const closeModal = () => setSelected(null);

  return (
    <section id="team" className="bg-[#04112a] text-white py-24 px-6 relative overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none">
          <path d="M0,20 Q50,0 100,20 T150,20" strokeWidth="0.5" />
          <path d="M0,30 Q50,10 100,30 T150,30" strokeWidth="0.5" />
          <path d="M0,40 Q50,20 100,40 T150,40" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedWrapper type="fade-up" className="text-left max-w-4xl mb-16 relative z-10">
          <Breadcrumbs items={[{ label: "About" }, { label: "Team" }]} />
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-6">
            The Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Built by practitioners,<br />
            <span className="text-cyan-400">not theorists.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
            The Arise Funds team brings together impact investment strategy,
            federal systems expertise, and 30+ years of human capital leadership.
          </p>
        </AnimatedWrapper>

        {/* Team Grid — minimal cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 relative z-10">
          {teamMembers.map((member, index) => (
            <AnimatedWrapper key={index} type="fade-up" delay={0.1 * index}>
              <button
                onClick={() => setSelected(member)}
                className="group w-full text-left bg-[#071428] hover:bg-[#0c1f3d] border border-cyan-900/20 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 hover:shadow-xl cursor-pointer"
              >
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[4/5] bg-[#050e22]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04112a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                      View Profile →
                    </span>
                  </div>
                </div>

                {/* Minimal info */}
                <div className="p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-cyan-400 mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-sm font-bold text-white leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {member.title}
                  </p>
                </div>
              </button>
            </AnimatedWrapper>
          ))}
        </div>
      </div>

      {/* ── MODAL / RIGHT DRAWER ── */}
      {selected && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={closeModal}
          />

          {/* Drawer panel */}
          <div className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#04112a] border-l border-cyan-900/30 shadow-2xl z-50 overflow-y-auto flex flex-col animate-slide-in-right">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Drawer content */}
            <div className="p-8 pt-16 flex flex-col gap-6">
              {/* Avatar + Name header */}
              <div className="flex items-center gap-5">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-20 h-20 rounded-full object-cover object-top border-2 border-cyan-500/40 shrink-0"
                />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 mb-1">
                    {selected.role}
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {selected.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {selected.title}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-cyan-900/30" />

              {/* Bio */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {selected.bio}
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2">
                {selected.creds.map((cred, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-slate-400 border border-slate-700/60 px-2.5 py-1 rounded uppercase tracking-wider"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              {/* LinkedIn button */}
              {selected.linkedin && (
                <a
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 w-fit"
                >
                  LinkedIn →
                </a>
              )}
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.35s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </section>
  );
}
