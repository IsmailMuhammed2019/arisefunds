"use client";

import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import { ParallaxImage } from "./AdvancedEffects";
import VideoModal from "./VideoModal";

const items = [
  {
    icon: "/security.png",
    title: "Cybersecurity · SOC Operations",
    description:
      "Building secure digital environments with trained analysts operating across enterprise and government-grade security operations centres.",
    subtext: "",
  },
  {
    icon: "/software.png",
    title: "Software Development · Global Teams",
    description:
      "Cross-border engineering teams delivering scalable software products and managed technology services from West Africa to the world.",
    subtext: "",
  },
  {
    icon: "/data.png",
    title: "Data Science · AI & Machine Learning",
    description:
      "Applying machine learning and AI tools to workforce intelligence, service delivery optimisation, and product development pipelines.",
    subtext: "",
  },
];

export default function Partnerships() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#04122c] text-white relative overflow-hidden">
      {/* Topographic Background Detail (Top-Left) */}
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <AnimatedWrapper type="fade-up" className="text-center mb-16 max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Strategic <span className="text-cyan-400">Partnerships</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            We partner with employer networks and operating companies to build
            <br className="hidden md:block" />
            infrastructure that delivers measurable talent outcomes and investment returns.
          </p>
        </AnimatedWrapper>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center relative z-10">
          {/* Left Column: Image Card */}
          <AnimatedWrapper
            type="slide-in"
            delay={0.2}
            className="w-full relative group cursor-pointer"
          >
            <div 
              onClick={() => setIsVideoModalOpen(true)}
              className="relative overflow-hidden rounded-2xl border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-cyan-950/20 hover:scale-[1.01] transition-transform duration-300"
            >
              <ParallaxImage
                src="/strategic.png"
                alt="Strategic Partnerships"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </AnimatedWrapper>

          {/* Right Column: Content List */}
          <div className="space-y-8">
            <AnimatedWrapper type="fade-up" delay={0.4}>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Where talent meets <br />
                  <span className="text-cyan-400">infrastructure</span>
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                  From security operations centers to data analytics labs &mdash; across
                  Nigeria, Sierra Leone, the United States and beyond &mdash; Arise
                  Funds portfolio companies build the environments where real
                  careers begin.
                </p>
              </div>
            </AnimatedWrapper>

            {/* Icons List */}
            <div className="space-y-6">
              {items.map((item, idx) => (
                <AnimatedWrapper
                  key={idx}
                  type="fade-up"
                  delay={0.5 + idx * 0.1}
                  hover
                  tap
                  className="flex items-start gap-4"
                >
                  <span className="font-mono text-cyan-400 text-sm tracking-widest mt-1 shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-lg leading-tight text-white">
                      {item.title}
                    </h4>
                    <p className="text-slate-350 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
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
