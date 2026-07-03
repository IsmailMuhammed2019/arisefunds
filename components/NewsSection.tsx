"use client";

import React from "react";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";

export default function NewsSection() {
  return (
    <section id="news" className="bg-[#04122c] text-white py-24 px-6 md:px-12 lg:px-24 border-t border-cyan-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-cyan-900/30 pb-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              News
            </h2>
          </div>
          <Link
            href="/news"
            className="text-cyan-400 font-semibold text-sm uppercase tracking-wider hover:text-cyan-300 transition-colors border-b border-cyan-400/30 pb-1 mt-4 sm:mt-0"
          >
            View all &rarr;
          </Link>
        </div>

        {/* News Card: One Row, Two Columns Layout */}
        <AnimatedWrapper
          type="fade-up"
          className="bg-[#071428] hover:bg-[#0a1f3a] rounded-xl overflow-hidden border border-cyan-900/20 shadow-xl shadow-black/10 transition-colors duration-300 flex flex-col md:flex-row items-stretch"
        >
          {/* Left Column: Image Area */}
          <div className="relative w-full md:w-1/2 overflow-hidden bg-[#0a1526] border-b md:border-b-0 md:border-r border-cyan-900/25 min-h-[320px]">
            <img
              src="/News-Pics-WACC.png"
              alt="Aisha Saaka Lewis WACC Address"
              className="w-full h-full object-cover filter grayscale-[15%] contrast-[1.05]"
            />
          </div>

          {/* Right Column: Content Area */}
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
            <div>
              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                <span className="bg-amber-950/40 border border-amber-400/30 text-amber-400 px-2.5 py-1 rounded font-semibold uppercase tracking-wider">
                  Address
                </span>
                <span className="text-slate-400 font-mono">June 2026</span>
                <span className="text-slate-500 before:content-['·'] before:mr-2">
                  Lagos, Nigeria
                </span>
              </div>
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug text-white hover:text-cyan-400 transition-colors">
                Workforce Capital model presented at WACC 2026
              </h3>
              {/* Desc */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Aisha Saaka Lewis addressed the West African Capital Conference, outlining Arise Funds&apos; model for pre-financed training, employer integration, and structural risk-sharing.
              </p>
            </div>

            <div>
              <Link
                href="/wacc-speech"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm uppercase tracking-wider transition-colors"
              >
                Read Conference Address &rarr;
              </Link>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
