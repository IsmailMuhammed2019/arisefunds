"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const outcomes = [
  { icon: "/young.png", text: "50K Youth Employment Target" },
  { icon: "/countries.png", text: "8 Countries – Current Footprint" },
  { icon: "/stage.png", text: "7 Stage Talent Economy Flywheel" },
  { icon: "/sdk.png", text: "Young Women – Every Cohort" },
];

export default function PortfolioInvestment() {
  return (
    <section className="py-24 bg-[#03112c] text-white relative overflow-hidden">
      {/* Decorative vertical lines on the right (matching screenshot detail) */}
      <div className="absolute top-0 bottom-0 right-[22%] w-[1px] border-r border-dashed border-cyan-500/10 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <AnimatedWrapper type="fade-up" className="text-center mb-16 max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            First Portfolio <span className="text-cyan-400 font-semibold">Investment</span>
          </h2>
          <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Arise Funds actively builds and expands the employer network that
            absorbs ICBM graduates
          </p>
        </AnimatedWrapper>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center relative z-10">
          {/* Left Column: Bio Details and Outcomes */}
          <div className="space-y-6">
            <AnimatedWrapper type="fade-up" delay={0.2}>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                The model, <span className="text-cyan-400">proven.</span>
              </h3>
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" delay={0.3}>
              <div className="space-y-6 text-slate-300 text-base leading-relaxed mb-8 font-light">
                <p>
                  SBTS Group LLC is the first company financed and operationally
                  supported by Arise Funds &mdash; and the live demonstration that
                  Workforce Infrastructure Investing works. In January 2026, the first
                  cohort of ICBM graduates began earning income in verified digital
                  economy roles.
                </p>
                <p>
                  SBTS Group LLC is the first company financed and operationally
                  supported by Arise Funds &mdash; and the live demonstration that
                  Workforce Infrastructure Investing works. In January 2026, the first
                  cohort of ICBM graduates began earning income in verified digital
                  economy roles.
                </p>
              </div>
            </AnimatedWrapper>

            {/* Outcomes Row Icons */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {outcomes.map((item, idx) => (
                <AnimatedWrapper
                  key={idx}
                  type="fade-up"
                  delay={0.4 + idx * 0.1}
                  hover
                  tap
                  className="flex items-center gap-3.5"
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="h-10 w-10 object-contain flex-shrink-0"
                  />
                  <span className="text-slate-300 text-sm font-medium leading-snug">
                    {item.text}
                  </span>
                </AnimatedWrapper>
              ))}
            </div>
          </div>

          {/* Right Column: Facebook Reel Video Iframe Mockup Container */}
          <AnimatedWrapper type="scale" delay={0.4} className="w-full flex justify-center lg:justify-end">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-950/80 shadow-[0_30px_70px_rgba(0,0,0,0.5)] shadow-cyan-950/20 p-4 max-w-[300px] w-full flex justify-center">
              {/* Smartphone Inner Screen Border wrapper */}
              <div className="w-[267px] h-[476px] rounded-[1.25rem] overflow-hidden relative bg-black border border-white/5 shadow-inner">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F565839646459950%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
