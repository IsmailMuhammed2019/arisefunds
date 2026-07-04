"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const outcomes = [
  { icon: "/young.png", text: "50K Youth Employment Target" },
  { icon: "/countries.png", text: "8 Countries – Current Footprint" },
  { icon: "/stage.png", text: "7 Stage Talent Economy Flywheel" },
  { icon: "/sdk.png", text: "50% young women target – Every Cohort" },
];

export default function PortfolioInvestment() {
  return (
    <section className="py-24 bg-[#03112c] text-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <AnimatedWrapper type="fade-up" className="text-center mb-16 max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-6">
            Proven Deployment
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            First Portfolio <span className="text-cyan-400">Investment</span>
          </h2>
          <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Arise Funds builds the employer network that hires ICBM graduates.
          </p>
        </AnimatedWrapper>

        {/* Main Redesigned Showcase Card */}
        <AnimatedWrapper
          type="fade-up"
          delay={0.2}
          className="max-w-5xl mx-auto bg-[#071428] hover:bg-[#0a1f3a] border border-cyan-900/20 hover:border-cyan-500/20 p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/30 transition-all duration-300 relative z-10 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
            {/* Left side: Portfolio Company description */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center font-bold text-lg text-cyan-400 font-mono shadow-md">
                  SBTS
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold font-mono">Portfolio Case Study</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">SBTS Group LLC</h3>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-light">
                <p>
                  SBTS Group LLC is the first company financed and operationally
                  supported by Arise Funds &mdash; and the live demonstration that
                  Workforce Infrastructure Investing works.
                </p>
                <p>
                  In January 2026, the first cohort of ICBM graduates began earning income in verified digital economy roles, proving that localized talent infrastructure acts as the primary engine for sustainable digital economic growth.
                </p>
              </div>
            </div>

            {/* Right side: Key outcomes list */}
            <div className="bg-[#04122c]/50 border border-cyan-950/40 p-6 md:p-8 rounded-2xl space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-bold border-b border-cyan-900/20 pb-3">
                Key Outcomes & Milestones
              </h4>
              <div className="space-y-4">
                {outcomes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                      <img
                        src={item.icon}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-slate-200 text-sm font-semibold leading-snug">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
