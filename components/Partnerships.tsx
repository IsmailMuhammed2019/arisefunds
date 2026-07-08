"use client";

import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import VideoModal from "./VideoModal";

const items = [
  {
    icon: "/security.png",
    title: "Cybersecurity · SOC Operations",
    description:
      "Building secure digital environments with trained analysts operating across enterprise and government-grade security operations centers.",
  },
  {
    icon: "/software.png",
    title: "Software Development · Global Teams",
    description:
      "Cross-border engineering teams delivering scalable software products and managed technology services from West Africa to the world.",
  },
  {
    icon: "/data.png",
    title: "Data Science · AI & Machine Learning",
    description:
      "Applying machine learning and AI tools to workforce intelligence, service delivery optimization, and product development pipelines.",
  },
];

export default function Partnerships() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#04122c] text-white relative overflow-hidden border-t border-cyan-950/20">
      {/* Topographic Background Details */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full stroke-white fill-none"
        >
          <path d="M0,20 Q50,0 100,20 T150,20" strokeWidth="0.5" />
          <path d="M0,35 Q50,15 100,35 T150,35" strokeWidth="0.5" />
          <path d="M0,50 Q50,30 100,50 T150,50" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedWrapper type="fade-up" className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-6">
            Focus Sectors
          </AnimatedWrapper>
          <AnimatedWrapper type="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Where Talent Meets <span className="text-cyan-400">Infrastructure</span>
            </h2>
          </AnimatedWrapper>
          <AnimatedWrapper type="fade-up" delay={0.2}>
            <p className="text-slate-350 text-base leading-relaxed font-light">
              From security operations centers to data analytics labs &mdash; across
              Nigeria, Sierra Leone, the United States and beyond &mdash; Arise
              Funds portfolio companies build the environments where real careers begin.
            </p>
          </AnimatedWrapper>
        </div>

        {/* Sectors Grid: Three Column Layout (Text-Only, No stock image) */}
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mt-12">
          {items.map((item, idx) => (
            <AnimatedWrapper
              key={idx}
              type="fade-up"
              delay={0.3 + idx * 0.1}
              className="bg-[#071428] hover:bg-[#0a1f3a] p-8 rounded-2xl border border-cyan-900/20 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-cyan-500/60 text-xs tracking-widest uppercase font-bold">
                    Sector 0{idx + 1}
                  </span>
                  <div className="p-2.5 bg-cyan-950/40 rounded-xl border border-cyan-900/30 group-hover:border-cyan-500/30 transition-colors">
                    <img src={item.icon} alt="" className="w-5 h-5 object-contain filter brightness-100 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/strategic-partnerships.mp4"
      />
    </section>
  );
}
