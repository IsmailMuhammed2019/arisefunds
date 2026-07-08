"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

export default function TalentInfrastructure() {
  return (
    <section className="bg-[#021526] py-20 px-6 md:px-20 text-center text-white relative overflow-hidden border-t border-cyan-950/20">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-4">
        <AnimatedWrapper type="fade-up">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold">
            Our Thesis
          </span>
        </AnimatedWrapper>

        <AnimatedWrapper type="fade-up" delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Talent is <span className="text-cyan-400">infrastructure.</span>
          </h2>
        </AnimatedWrapper>

        <AnimatedWrapper type="fade-up" delay={0.2}>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Nations that finance human capacity the way they finance physical infrastructure will define the next era of competitiveness.
          </p>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
