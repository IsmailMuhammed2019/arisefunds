"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col font-sans">
      <NavBar />

      <main className="flex-grow py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle background glows */}
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <AnimatedWrapper type="fade-up">
              <div className="flex justify-start mb-2">
                <Breadcrumbs items={[{ label: "About" }, { label: "Partners" }]} />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper type="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300">
                Our Partners
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper type="fade-up" delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Institutional <span className="text-cyan-400">Relationships</span>
              </h1>
            </AnimatedWrapper>
            <AnimatedWrapper type="fade-up" delay={0.2}>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                Arise Funds works alongside globally recognized institutions to deploy capital, build infrastructure, and deliver measurable workforce outcomes.
              </p>
            </AnimatedWrapper>
          </div>

          {/* Cards: Two Column Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Card 1: World Bank / SLDTP */}
            <AnimatedWrapper
              type="fade-up"
              delay={0.15}
              className="bg-[#071428] hover:bg-[#0a1f3a] p-8 md:p-10 rounded-2xl border border-cyan-900/20 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-start"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#2BB0ED] font-bold mb-3 block">
                Government / Multilateral
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                World Bank / SLDTP
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                SBTS Group is implementing a specialized cybersecurity capacity-building program under the US$50 million World Bank-supported Sierra Leone Digital Transformation Program (SLDTP). Arise Funds provides the catalytic funding and digital infrastructure that support program delivery through the ICBM and Nexus LMS platforms, preparing professionals for globally recognized cybersecurity certifications while strengthening Sierra Leone&apos;s national cyber resilience.
              </p>
            </AnimatedWrapper>

            {/* Card 2: Digital Bridge Institute */}
            <AnimatedWrapper
              type="fade-up"
              delay={0.25}
              className="bg-[#071428] hover:bg-[#0a1f3a] p-8 md:p-10 rounded-2xl border border-cyan-900/20 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-start"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 font-bold mb-3 block">
                Training Institution
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                Digital Bridge Institute
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Arise Funds provides the catalytic capital behind the Intelligent Capacity Building Model (ICBM), supporting SBTS Group&apos;s partnership with the Digital Bridge Institute to train 50,000 Nigerians for high-demand digital careers. By de-risking early program delivery and investing in workforce infrastructure, Arise Funds helps unlock larger institutional investment for national-scale skills development.
              </p>
            </AnimatedWrapper>

          </div>

          {/* Bottom Clarification Banner: Partners vs. Portfolio */}
          <AnimatedWrapper
            type="fade-up"
            delay={0.35}
            className="bg-[#071428] hover:bg-[#0a1f3a] p-8 rounded-2xl border border-cyan-900/20 hover:border-cyan-500/20 transition-all duration-300"
          >
            <h4 className="text-base font-bold text-white mb-2">
              Partners vs. portfolio
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              These are independent institutions Arise Funds works alongside. The companies and products SBTS Group LLC has built with Arise Funds capital &mdash; including Vultcore, Kallmania, ICBM Nexus, Aegis360AI, and C1WT &mdash; are shown separately under{" "}
              <Link href="/portfolio" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold inline-flex items-center gap-1">
                Portfolio &rarr;
              </Link>
            </p>
          </AnimatedWrapper>

        </div>
      </main>

      <Footer />
    </div>
  );
}
