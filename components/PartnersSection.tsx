"use client";

import React from "react";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-[#04122c] py-24 px-6 sm:px-8 lg:px-12 border-t border-cyan-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedWrapper type="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-6">
            Our Partners
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Institutional <span className="text-cyan-400">Relationships</span>
          </h2>
          <p className="text-slate-350 text-base leading-relaxed mt-4 max-w-2xl mx-auto font-light">
            Arise Funds works alongside globally recognised institutions to
            deploy capital, build infrastructure, and deliver measurable
            workforce outcomes.
          </p>
        </AnimatedWrapper>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Partner Cards: Two Column Grid */}
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
                SBTS Group is implementing a specialized cybersecurity capacity-building programme under the US$50 million World Bank-supported Sierra Leone Digital Transformation Programme (SLDTP). Arise Funds provides the catalytic funding and digital infrastructure that support programme delivery through the ICBM and Nexus LMS platforms, preparing professionals for globally recognized cybersecurity certifications while strengthening Sierra Leone's national cyber resilience.
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
                Arise Funds provides the catalytic capital behind the Intelligent Capacity Building Model (ICBM), supporting SBTS Group's partnership with the Digital Bridge Institute to train 50,000 Nigerians for high-demand digital careers. By de-risking early programme delivery and investing in workforce infrastructure, Arise Funds helps unlock larger institutional investment for national-scale skills development.
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
              <Link href="/#portfolio" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold inline-flex items-center gap-1">
                Portfolio &rarr;
              </Link>
            </p>
          </AnimatedWrapper>
        </div>

      </div>
    </section>
  );
}
