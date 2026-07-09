"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";

/* ── Capital-to-Employment 4-step flow ── */
const flow = [
  {
    num: "01",
    label: "Fund",
    body: "Arise Funds deploys blended, catalytic capital.",
  },
  {
    num: "02",
    label: "Build",
    body: "SBTS builds operating companies and platforms — Vultcore, Kallmania, ICBM Nexus.",
  },
  {
    num: "03",
    label: "Operate",
    body: "Those companies run live operations and generate revenue.",
  },
  {
    num: "04",
    label: "Hire",
    body: "ICBM graduates are hired into real, income-generating roles.",
  },
];

/* ── Investor model 3-step cards ── */
const steps = [
  {
    id: "01 — CAPITAL",
    title: (
      <>
        Structured entry into{" "}
        <em className="text-cyan-400 not-italic">blended capital</em> vehicles.
      </>
    ),
    description:
      "We structure and deploy blended capital — combining concessional funding, income-linked financing, and equity — calibrated to the institution's stage and risk profile.",
  },
  {
    id: "02 — INFRASTRUCTURE",
    title: (
      <>
        Operational build-out that creates{" "}
        <em className="text-cyan-400 not-italic">investable companies.</em>
      </>
    ),
    description:
      "Alongside capital, we second talent directly into portfolio companies to build the institutional infrastructure that larger investors require.",
  },
  {
    id: "03 — SCALE",
    title: (
      <>
        Transition to{" "}
        <em className="text-cyan-400 not-italic">institutional capital</em> at scale.
      </>
    ),
    description:
      "We position portfolio companies for DFIs, development banks, and sovereign wealth funds by building the governance and verified outcome infrastructure they require.",
  },
];

export default function HowWeWork() {
  const [isPlayClicked, setIsPlayClicked] = useState(false);

  return (
    <div className="bg-[#04112a] text-white font-sans">

      {/* ══════════════════════════════════════════════════
          BLOCK 1 — HERO: The model, in operation
      ══════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">

          {/* Badge */}
          <AnimatedWrapper type="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-5 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300">
              How It Works
            </div>
          </AnimatedWrapper>

          {/* Heading */}
          <AnimatedWrapper type="fade-up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              The Model,{" "}
              <span className="text-cyan-400">In Operation</span>
            </h1>
          </AnimatedWrapper>

          {/* Cyan subtitle */}
          <AnimatedWrapper type="fade-up" delay={0.15}>
            <p className="text-cyan-400 font-semibold text-base md:text-lg">
              An Active Investor Model Built For Global Markets.
            </p>
          </AnimatedWrapper>

          {/* Body text */}
          <AnimatedWrapper type="fade-up" delay={0.2}>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              The ICBM model isn&apos;t a projection. Arise Funds capital builds real companies that generate revenue and hire graduates — here&apos;s what that looks like on the ground.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BLOCK 2 — VIDEO EMBED
      ══════════════════════════════════════════════════ */}
      <section className="px-6 sm:px-8 lg:px-12 pb-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedWrapper type="fade-up">
            {/* Video card */}
            <div className="relative w-full aspect-video bg-slate-950/80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
              {!isPlayClicked ? (
                <div
                  onClick={() => setIsPlayClicked(true)}
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4"
                >
                  <img
                    src="https://img.youtube.com/vi/cppiNLI4eiM/maxresdefault.jpg"
                    alt="Kallmania video preview"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex flex-col items-center justify-center gap-3">
                    <svg
                      viewBox="0 0 68 48"
                      className="w-16 h-auto fill-current text-cyan-400 drop-shadow-md transition-transform duration-300 hover:scale-110"
                    >
                      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.15,34,0.15,34,0.15s-21.79,0-27.1,1.4c-2.93,0.78-4.64,3.26-5.42,6.19C0.08,13.05,0.08,24,0.08,24s0,10.95,1.4,16.26c0.78,2.93,2.49,5.41,5.42,6.19C12.21,47.85,34,47.85,34,47.85s21.79,0,27.1-1.4c2.93-0.78,4.64-3.26,5.42-6.19C67.92,34.95,67.92,24,67.92,24S67.92,13.05,66.52,7.74z" fill="#0e7490" />
                      <polygon points="27.38,34.25 45.08,24 27.38,13.75" fill="#FFF" />
                    </svg>
                    <div className="text-center">
                      <p className="font-bold text-white text-sm md:text-base">Inside Kallmania — Where ICBM Graduates Go To Work</p>
                      <p className="text-slate-300 text-xs mt-1">Real BPO Operations · Real Employees · A Portfolio Company In Action</p>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/cppiNLI4eiM?si=SG63WngAFiNxLGwJ&autoplay=1"
                  title="Inside Kallmania — YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
            </div>

            {/* Caption under video */}
          </AnimatedWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BLOCK 3 — FROM CAPITAL TO EMPLOYMENT (4 steps)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* Section label */}
          <AnimatedWrapper type="fade-up">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold">
              From Capital to Employment
            </span>
          </AnimatedWrapper>

          {/* 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {flow.map((step, idx) => (
              <AnimatedWrapper
                key={idx}
                type="fade-up"
                delay={0.1 * idx}
                className="bg-[#071428] border border-cyan-900/20 rounded-xl p-6 space-y-3 hover:bg-[#0a1f3a] transition-all duration-300"
              >
                <span className="text-cyan-400 text-xs font-mono font-bold block">{step.num}</span>
                <h3 className="text-white font-bold text-lg">{step.label}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{step.body}</p>
              </AnimatedWrapper>
            ))}
          </div>

          {/* Explanatory note */}
          <AnimatedWrapper type="fade-up" delay={0.3}>
            <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
              The video above is step 04, live: Kallmania is a portfolio company built with Arise Funds capital, and the people in it are the graduates the model trains.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BLOCK 4 — AN ACTIVE INVESTOR MODEL (3 cards)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 border-t border-cyan-900/20">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Header */}
          <AnimatedWrapper type="fade-up" className="space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              An Active Investor Model Built For{" "}
              <span className="text-cyan-400">Global Markets</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              We don&apos;t write checks and wait. We deploy capital and operational infrastructure together — because in workforce markets anywhere in the world, one without the other rarely works.
            </p>
          </AnimatedWrapper>

          {/* 3 step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {steps.map((step, index) => (
              <AnimatedWrapper
                key={index}
                type="fade-up"
                delay={0.1 * index}
                className="bg-[#071428] hover:bg-[#0a1f3a] p-8 md:p-10 flex flex-col justify-start border-t-2 border-t-cyan-500 border border-cyan-900/20 rounded-xl transition-all duration-300 shadow-xl shadow-black/10 min-h-[280px]"
              >
                <span className="text-cyan-400 text-xs font-mono tracking-[0.15em] mb-4 block">
                  {step.id}
                </span>
                <h3 className="text-xl font-bold mb-4 leading-snug text-white">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </AnimatedWrapper>
            ))}
          </div>

          {/* ── CTA: Want the full talent journey? ── */}
          <AnimatedWrapper
            type="fade-up"
            delay={0.2}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-[#071428] border border-cyan-900/25 rounded-2xl p-8"
          >
            <div className="space-y-1">
              <h4 className="text-white font-bold text-lg md:text-xl">
                Want The Full Talent Journey?
              </h4>
              <p className="text-slate-400 text-sm">
                See all 7 stages and the investor signal behind each one.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/icbm"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-sm whitespace-nowrap"
              >
                The ICBM Model &rarr;
              </Link>
            </div>
          </AnimatedWrapper>

        </div>
      </section>

    </div>
  );
}
