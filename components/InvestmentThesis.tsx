"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";
import { useModal } from "@/context/ModalContext";

const portfolioItems = [
  { name: "Vultcore", href: "https://vultcore.com" },
  { name: "Kallmania", href: "https://kallmania.com" },
  { name: "ICBM Nexus", href: "https://icbm.training" },
  { name: "Aegis360AI", href: "https://aegis360ai.com" },
  { name: "C1WT", href: "https://connectonemillionwomen.com" },
];

export default function InvestmentThesis() {
  const [isPlayClicked, setIsPlayClicked] = useState(false);
  const { openContactModal } = useModal();

  return (
    <section
      id="investment-thesis"
      className="bg-[#04122c] text-white px-6 sm:px-8 lg:px-12 font-sans relative overflow-hidden"
    >
      {/* Subtle background glows */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── OUR THESIS headline block ── */}
        <div className="py-24 text-center max-w-4xl mx-auto space-y-6">
          <AnimatedWrapper type="fade-up">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold">
              Our Thesis
            </span>
          </AnimatedWrapper>
          <AnimatedWrapper type="fade-up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Talent is <span className="text-cyan-400">infrastructure.</span>
            </h2>
          </AnimatedWrapper>
          <AnimatedWrapper type="fade-up" delay={0.2}>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
              Nations that finance human capacity the way they finance physical infrastructure will define the next era of competitiveness.
            </p>
          </AnimatedWrapper>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-900/25" />

        {/* ── THE MODEL, IN OPERATION (left text + right video) ── */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <AnimatedWrapper type="slide-in" className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                The Model, In Operation
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Proof you can watch
              </h3>
            </div>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              The ICBM model isn&apos;t a projection. Arise Funds capital builds real companies that generate revenue and hire graduates. Watch inside Kallmania — a portfolio company where ICBM graduates go to work.
            </p>
            <div>
              <Link
                href="/how-it-works"
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                See how it works &rarr;
              </Link>
            </div>
          </AnimatedWrapper>

          {/* Right Video */}
          <AnimatedWrapper type="fade-in" delay={0.2}>
            <div className="relative w-full aspect-[16/10] bg-slate-950/80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
              {!isPlayClicked ? (
                <div
                  onClick={() => setIsPlayClicked(true)}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  <img
                    src="https://img.youtube.com/vi/cppiNLI4eiM/maxresdefault.jpg"
                    alt="Video Preview"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25 flex items-center justify-center">
                    <svg
                      viewBox="0 0 68 48"
                      className="w-16 h-auto text-[#FF0000] fill-current drop-shadow-md transition-transform duration-300 hover:scale-110"
                    >
                      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.15,34,0.15,34,0.15s-21.79,0-27.1,1.4c-2.93,0.78-4.64,3.26-5.42,6.19C0.08,13.05,0.08,24,0.08,24s0,10.95,1.4,16.26c0.78,2.93,2.49,5.41,5.42,6.19C12.21,47.85,34,47.85,34,47.85s21.79,0,27.1-1.4c2.93-0.78,4.64-3.26,5.42-6.19C67.92,34.95,67.92,24,67.92,24S67.92,13.05,66.52,7.74z" />
                      <polygon points="27.38,34.25 45.08,24 27.38,13.75" fill="#FFF" />
                    </svg>
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/cppiNLI4eiM?si=SG63WngAFiNxLGwJ&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
            </div>
          </AnimatedWrapper>
        </div>

        {/* ── PROVEN DEPLOYMENT (left text + right 5-button grid) ── */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <AnimatedWrapper type="slide-in" className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                Proven Deployment
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                The model, proven — first portfolio investment
              </h3>
            </div>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              SBTS Group LLC is the first company financed by Arise Funds. Its companies and platforms — Vultcore, Kallmania, ICBM Nexus, Aegis360AI, and C1WT — are real, operating, and hiring ICBM graduates.
            </p>
            <div>
              <Link
                href="/portfolio"
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                See the portfolio &rarr;
              </Link>
            </div>
          </AnimatedWrapper>

          {/* Right 5-Button Grid */}
          <AnimatedWrapper type="fade-in" delay={0.2} className="w-full">
            <div className="grid grid-cols-2 gap-4">
              {portfolioItems.slice(0, 4).map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#071428] hover:bg-[#0a1f3a] p-5 text-center rounded-xl border border-cyan-900/30 hover:border-cyan-500/40 text-sm font-bold text-white transition-all duration-300 block tracking-wide hover:scale-[1.02]"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={portfolioItems[4].href}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 bg-[#071428] hover:bg-[#0a1f3a] p-5 text-center rounded-xl border border-cyan-900/30 hover:border-cyan-500/40 text-sm font-bold text-white transition-all duration-300 block tracking-wide hover:scale-[1.02]"
              >
                {portfolioItems[4].name}
              </a>
            </div>
          </AnimatedWrapper>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-900/25" />

        {/* ── INSTITUTIONAL RELATIONSHIPS bar ── */}
        <div className="py-8">
          <AnimatedWrapper
            type="fade-up"
            className="flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold whitespace-nowrap">
                Institutional Relationships
              </span>
              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-bold text-white">
                <span>World Bank / SLDTP</span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span>Digital Bridge Institute</span>
              </div>
            </div>
            <div>
              <Link
                href="/partners"
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                Meet our partners &rarr;
              </Link>
            </div>
          </AnimatedWrapper>
        </div>

        {/* ── CONTACT CTA Card ── */}
        <div className="pb-24">
          <AnimatedWrapper
            type="fade-up"
            className="border border-cyan-900/30 p-10 rounded-2xl relative overflow-hidden text-center space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Let&apos;s talk about building workforce infrastructure
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto font-light">
              For impact investors, development finance institutions, government bodies, and like-minded partners financing the future of work.
            </p>
            <div className="pt-2">
              <button
                onClick={openContactModal}
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 shadow-lg shadow-cyan-500/15 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-sm"
              >
                Get in touch &rarr;
              </button>
            </div>
          </AnimatedWrapper>
        </div>

      </div>
    </section>
  );
}
