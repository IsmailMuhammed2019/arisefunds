"use client";

import React from "react";
import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div className="bg-[#0b1928] border-b border-amber-400/30 py-3.5 px-6 relative flex flex-col md:flex-row items-center justify-center gap-3 z-10 text-slate-350 text-xs md:text-sm font-sans">
      {/* Update Pill indicator */}
      <span className="bg-amber-950/40 border border-amber-400/30 text-amber-400 text-[9px] font-mono tracking-[0.18em] uppercase px-3 py-1 rounded shrink-0 select-none">
        New · Update
      </span>
      
      {/* Announcement Message Container */}
      <span className="flex flex-col sm:flex-row items-center gap-x-2 gap-y-1 text-center sm:text-left leading-relaxed">
        <strong className="text-white font-semibold">
          Aisha Saaka Lewis presented the Workforce Capital model at WACC 2026
        </strong>
        <span className="hidden sm:inline text-slate-500">&mdash;</span>
        <span>
          demonstrating how localized talent infrastructure drives digital economic growth across West Africa.
        </span>
        <Link 
          href="/wacc-speech" 
          className="text-cyan-400 hover:text-cyan-300 font-bold ml-1 transition-colors select-none cursor-pointer inline-flex items-center"
        >
          Read the address &rarr;
        </Link>
      </span>
    </div>
  );
}
