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
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-amber-300 mb-4">
              In the Field
            </div> */}
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

        {/* News Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 lg:gap-8 items-stretch">
          {/* FEATURED: Left Column (both rows on large screen) */}
          <AnimatedWrapper
            type="fade-up"
            className="bg-[#071428] hover:bg-[#0a1f3a] rounded-xl overflow-hidden border border-cyan-900/20 shadow-xl shadow-black/10 transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Photo Area */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0a1526] border-b border-cyan-900/25">
                <img
                  src="/News-Pics-WACC.png"
                  alt="Aisha Saaka Lewis WACC Address"
                  className="w-full h-full object-cover filter grayscale-[15%] contrast-[1.05]"
                />
              </div>
              <div className="p-8 md:p-10">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                  <span className="bg-amber-950/40 border border-amber-400/30 text-amber-400 px-2.5 py-1 rounded font-semibold uppercase tracking-wider">
                    Address
                  </span>
                  <span className="text-slate-400 font-mono">Feb 2026</span>
                  <span className="text-slate-500 before:content-['·'] before:mr-2">
                    Accra, Ghana
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug text-white hover:text-cyan-400 transition-colors">
                  Workforce Capital model presented at WACC 2026
                </h3>
                {/* Desc */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Aisha Saaka Lewis addressed the West African Capital Conference, outlining Arise Funds&apos; model for pre-financed training, employer integration, and structural risk-sharing.
                </p>
              </div>
            </div>

            <div className="px-8 pb-8 md:px-10 md:pb-10">
              <Link
                href="/wacc-speech"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm uppercase tracking-wider transition-colors"
              >
                Read Conference Address &rarr;
              </Link>
            </div>
          </AnimatedWrapper>

        </div>
      </div>
    </section>
  );
}
