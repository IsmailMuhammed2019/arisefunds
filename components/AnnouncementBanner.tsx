"use client";

import React from "react";
import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div className="bg-[#0b1928] border-b border-amber-400/30 py-3 px-6 overflow-hidden relative flex flex-col md:flex-row items-center gap-4 relative z-10">
      {/* Update Pill indicator */}
      <span className="bg-amber-950/40 border border-amber-400/30 text-amber-400 text-[9px] font-mono tracking-[0.18em] uppercase px-3 py-1 rounded shrink-0 select-none">
        New · Update
      </span>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden w-full text-slate-300 text-xs md:text-sm">
        <div className="animate-marquee whitespace-nowrap flex gap-12 font-medium">
          <span className="flex items-center gap-2">
            <strong className="text-white font-semibold">Aisha Saaka Lewis presented the Workforce Capital model at WACC 2026</strong>
            — demonstrating how localized talent infrastructure drives digital economic growth across West Africa.
            <Link href="/wacc-speech" className="text-cyan-400 hover:text-cyan-300 ml-2 font-bold select-none cursor-pointer">
              Read the address &rarr;
            </Link>
          </span>
          <span className="flex items-center gap-2">
            <strong className="text-white font-semibold">Aisha Saaka Lewis presented the Workforce Capital model at WACC 2026</strong>
            — demonstrating how localized talent infrastructure drives digital economic growth across West Africa.
            <Link href="/wacc-speech" className="text-cyan-400 hover:text-cyan-300 ml-2 font-bold select-none cursor-pointer">
              Read the address &rarr;
            </Link>
          </span>
        </div>
      </div>

      <style>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
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
