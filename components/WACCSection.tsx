"use client";

import React from "react";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";
import { ArrowRight } from "lucide-react";

export default function WACCSection() {
  return (
    <section className="relative bg-[#021526] overflow-hidden py-20 px-6 sm:px-8 lg:px-12">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image cards */}
          <AnimatedWrapper type="scale" delay={0.1} className="flex gap-5 select-none">
            <div className="flex-1 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
              <img
                src="/wacc_slider.jpg"
                alt="West Africa Convergence Conference"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 mt-8">
              <img
                src="/News-Pics-WACC.png"
                alt="WACC Conference Highlights"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedWrapper>

          {/* Right: Content */}
          <div className="space-y-6">
            <AnimatedWrapper type="fade-up" delay={0.15}>
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 shadow-lg">
                Conference Event
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                West Africa Convergence{" "}
                <span className="text-cyan-400">Conference</span>
              </h2>
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" delay={0.25}>
              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                Arise Funds presented the Workforce Capital investment model at
                WACC, demonstrating how localized talent infrastructure acts as
                the primary engine for sustainable digital economic growth.
              </p>
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/wacc-speech"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-7 py-3.5 text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Read Conference Address
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-xs text-slate-500 self-center">
                  Keynote by Aisha Saaka · Arise Funds
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
