"use client";

import React from "react";
import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div className="bg-[#0b1928] border-b border-amber-400/30 py-3.5 px-6 overflow-hidden relative flex items-center gap-4 z-10">
      {/* Update Pill indicator (Fixed on left) */}
      <span className="bg-amber-950/40 border border-amber-400/30 text-amber-400 text-[9px] font-mono tracking-[0.18em] uppercase px-3 py-1 rounded shrink-0 select-none relative z-20">
        New · Update
      </span>

      {/* Marquee Container (Fills remaining space and masks overflow) */}
      <div className="relative flex-grow overflow-hidden whitespace-nowrap text-slate-350 text-xs md:text-sm font-sans">
        <div className="animate-marquee inline-flex gap-16 font-medium">
          {/* First copy */}
          <span className="inline-flex items-center gap-2">
            <strong className="text-white font-semibold">
              Aisha Saaka Lewis presented the Workforce Capital model at WACC 2026
            </strong>
            <span className="text-slate-500">—</span>
            <span>
              demonstrating how localized talent infrastructure drives digital economic growth across West Africa.
            </span>
            <Link 
              href="/wacc-speech" 
              className="text-cyan-400 hover:text-cyan-300 font-bold ml-2 transition-colors select-none cursor-pointer inline-flex items-center"
            >
              Read the address &rarr;
            </Link>
          </span>

          {/* Duplicate copy for seamless looping */}
          <span className="inline-flex items-center gap-2" aria-hidden="true">
            <strong className="text-white font-semibold">
              Aisha Saaka Lewis presented the Workforce Capital model at WACC 2026
            </strong>
            <span className="text-slate-500">—</span>
            <span>
              demonstrating how localized talent infrastructure drives digital economic growth across West Africa.
            </span>
            <Link 
              href="/wacc-speech" 
              className="text-cyan-400 hover:text-cyan-300 font-bold ml-2 transition-colors select-none cursor-pointer inline-flex items-center"
            >
              Read the address &rarr;
            </Link>
          </span>
        </div>
      </div>

      {/* Linear gradients on the edges for a fading/blur mask effect */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0b1928] to-transparent pointer-events-none z-20" />

      <style>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
