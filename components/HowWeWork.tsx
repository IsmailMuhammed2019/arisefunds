"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const steps = [
  {
    id: "01 — CAPITAL",
    title: (
      <>
        Structured entry into <em className="text-cyan-400 not-italic">blended capital</em> vehicles.
      </>
    ),
    description:
      "We structure and deploy blended capital — combining concessional funding, income-linked financing, and equity — calibrated to the institution's stage and risk profile.",
  },
  {
    id: "02 — INFRASTRUCTURE",
    title: (
      <>
        Operational build-out that creates <em className="text-cyan-400 not-italic">investable companies.</em>
      </>
    ),
    description:
      "Alongside capital, we second talent directly into portfolio companies to build the institutional infrastructure that larger investors require.",
  },
  {
    id: "03 — SCALE",
    title: (
      <>
        Transition to <em className="text-cyan-400 not-italic">institutional capital</em> at scale.
      </>
    ),
    description:
      "We position portfolio companies for DFIs, development banks, and sovereign wealth funds by building the governance and verified outcome infrastructure they require.",
  },
];

export default function HowWeWork() {
  return (
    <section id="work" className="bg-[#04112a] text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedWrapper
          type="fade-up"
          className="text-left max-w-4xl mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-6">
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            An active investor model<br />built for <span className="text-cyan-400">global markets.</span>
          </h2>
          <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-3xl">
            We don&apos;t write checks and wait. We deploy capital and operational
            infrastructure together — because in workforce markets anywhere in the
            world, one without the other rarely works.
          </p>
        </AnimatedWrapper>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {steps.map((step, index) => (
            <AnimatedWrapper
              key={index}
              type="fade-up"
              delay={0.1 * index}
              className="bg-[#071428] hover:bg-[#0a1f3a] p-8 md:p-10 flex flex-col justify-start border-t-2 border-t-cyan-500 border border-cyan-900/20 rounded-xl transition-all duration-300 shadow-xl shadow-black/10 min-h-[320px]"
            >
              {/* ID Tag */}
              <span className="text-cyan-400 text-xs font-mono tracking-[0.15em] mb-4 block">
                {step.id}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6 leading-snug text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
