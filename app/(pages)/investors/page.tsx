"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function InvestorsPage() {
  const { openContactModal } = useModal();

  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col font-sans">
      <NavBar />

      <main className="flex-grow py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle background glows */}
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-8 relative z-10">
          
          {/* Badge & Title Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left Side: Badge, Title & Paragraphs */}
            <div className="space-y-6">
              <AnimatedWrapper type="fade-up">
                <Breadcrumbs items={[{ label: "About" }, { label: "Investors" }]} />
              </AnimatedWrapper>

              <AnimatedWrapper type="fade-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-2">
                  For Investors
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper type="fade-up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  The investment <span className="text-cyan-400 italic font-normal">opportunity.</span>
                </h1>
              </AnimatedWrapper>

              <AnimatedWrapper type="fade-up" delay={0.2} className="space-y-4 text-slate-300 font-light leading-relaxed text-sm sm:text-base">
                <p>
                  Arise Funds deploys blended capital into workforce development and technology companies globally. If you are a DFI, impact foundation, family office, or government body with a mandate in workforce, technology, or economic development, this is what engagement looks like.
                </p>
                <p>
                  We invest in early-stage workforce development operators and technology platforms in high-growth markets — typically at the pre-institutional-capital stage, with active operations and an employer-integrated model.
                </p>
              </AnimatedWrapper>
            </div>

            {/* Right Side: Instrument Card */}
            <AnimatedWrapper type="fade-up" delay={0.3} className="h-full">
              <div className="bg-[#05162e]/70 border border-cyan-900/30 p-8 rounded-2xl shadow-xl h-full space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                  The Instrument
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Blended Capital Facility
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  We structure blended capital vehicles combining concessional first-loss capital, income-linked human capital financing, and equity. Capital is patient — structured around employer pipeline depth and verified employment outcomes, not arbitrary program timelines.
                </p>
              </div>
            </AnimatedWrapper>

          </div>

          {/* Cards Stack */}
          <div className="space-y-6">
            
            {/* Card 1: Seeking Aligned Capital Partners */}
            <AnimatedWrapper type="fade-up" delay={0.1}>
              <div className="bg-[#05162e]/50 border border-cyan-900/25 p-8 rounded-2xl shadow-lg space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                  Current Raise
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Seeking Aligned Capital Partners
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Arise Funds is in active conversation with DFIs, impact foundations, and family offices. We are building a blended capital facility to accelerate the ICBM Nigeria deployment and fund expansion into new markets. Minimum commitment and terms are discussed directly — get in touch to begin that conversation.
                </p>
              </div>
            </AnimatedWrapper>

            {/* Card 2 & 3: Two-Column Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Current Focus */}
              <AnimatedWrapper type="fade-up" delay={0.15}>
                <div className="bg-[#05162e]/50 border border-cyan-900/25 p-8 rounded-2xl shadow-lg space-y-3 h-full">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                    Current Focus
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    ICBM Nigeria &middot; 50,000 Employment Target
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Our flagship deployment — currently operating across Abuja and Enugu — is the proof-of-model that anchors our institutional capital raise. Cohort 1: Phase 1 employment confirmed, Phase 2 in progress. Cohort 2 active. 50,000 target by 2029.
                  </p>
                </div>
              </AnimatedWrapper>

              {/* Right: For Family Offices */}
              <AnimatedWrapper type="fade-up" delay={0.2}>
                <div className="bg-[#05162e]/50 border border-cyan-900/25 p-8 rounded-2xl shadow-lg space-y-3 h-full">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                    For Family Offices
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    A Founder-Led Fund with a Proven Model
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    If you are a family office looking for impact that is measurable, a founder you can meet, and a model you can visit — Arise Funds is built for that conversation. You can see the campuses, meet the graduates, and review the outcomes data directly. Capital is patient, terms are discussed directly, and every inquiry is answered personally.
                  </p>
                </div>
              </AnimatedWrapper>
            </div>

            {/* Card 4: The National Economic Case */}
            <AnimatedWrapper type="fade-up" delay={0.25}>
              <div className="bg-[#05162e]/50 border border-cyan-900/25 p-8 rounded-2xl shadow-lg space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                  For Sovereign & Government Capital
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  The National Economic Case
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  ICBM graduates enter formal, tax-contributing employment. At 50,000 graduates, the model generates measurable GDP contribution, reduces youth unemployment, and builds a nationally competitive digital workforce. For sovereign wealth funds and government bodies with a national development mandate — this is workforce infrastructure as economic policy.
                </p>
              </div>
            </AnimatedWrapper>

            {/* Card 5: Aligned Capital Partners CTA */}
            <AnimatedWrapper type="fade-up" delay={0.3}>
              <div className="bg-[#05162e]/50 border border-cyan-900/25 p-8 rounded-2xl shadow-lg space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                  What We Look For
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Aligned Capital Partners
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  We are building toward long-term institutional partnerships with DFIs, development banks, and sovereign wealth funds. If you deploy patient capital with an impact mandate — and want verified employment outcomes alongside financial return — let&apos;s talk.
                </p>
                <div className="pt-2">
                  <button
                    onClick={openContactModal}
                    className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 shadow-lg shadow-cyan-500/15 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-sm"
                  >
                    Get in touch &rarr;
                  </button>
                </div>
              </div>
            </AnimatedWrapper>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
