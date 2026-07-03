"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

export default function PartnerBottom() {
  return (
    <section className="w-full bg-[#04122c] text-white py-16 px-6 md:px-12 border-t border-cyan-950/20">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* ROW 1 */}
        <Row
          label="The Instrument"
          title={
            <>
              Blended <span className="text-cyan-400">Capital</span> Facility
            </>
          }
          desc="We structure blended capital vehicles combining concessional first-loss capital, income-linked human capital financing, and equity. Capital is patient — structured around employer pipeline depth and verified employment outcomes, not arbitrary program timelines."
        />

        {/* ROW 2 */}
        <Row
          label="Current Raise"
          title={
            <>
              Seeking <span className="text-cyan-400">Aligned Capital</span> Partners
            </>
          }
          desc="Arise Funds is currently in active conversation with DFIs, impact foundations, and family offices. We are building a blended capital facility to accelerate the ICBM Nigeria deployment and fund expansion into new markets. Minimum commitment and terms are discussed directly — request the Investor Brief to begin that conversation."
        />

        {/* ROW 3 */}
        <Row
          label="Current Focus"
          title={
            <>
              ICBM Nigeria — <span className="text-cyan-400">50,000 Employment</span> Target
            </>
          }
          desc="Our flagship deployment — currently operating across Abuja and Enugu — is the proof-of-model that anchors our institutional capital raise. ICBM Nigeria — Cohort 1: Phase 1 employment confirmed, Phase 2 in progress. Cohort 2 active. 50,000 target by 2029."
        />

        {/* ROW 4 */}
        <Row
          label="For Family Offices"
          title={
            <>
              A Founder-Led Fund with a <span className="text-cyan-400">Proven Model</span>
            </>
          }
          desc="If you are a family office looking for impact that is measurable, a founder you can meet, and a model you can visit — Arise Funds is built for that conversation. You can see the campuses, meet the graduates, and review the outcomes data directly. Capital is patient, terms are discussed directly, and every inquiry is answered personally."
        />

        {/* ROW 5 */}
        <Row
          label="For Sovereign & Government Capital"
          title={
            <>
              The <span className="text-cyan-400">National Economic</span> Case
            </>
          }
          desc="ICBM graduates enter formal, tax-contributing employment. At 50,000 graduates, the model generates measurable GDP contribution, reduces youth unemployment, and builds a nationally competitive digital workforce. For sovereign wealth funds and government bodies with a national development mandate — this is workforce infrastructure as economic policy."
        />
      </div>
    </section>
  );
}

/* ROW COMPONENT */
interface RowProps {
  label: string;
  title: React.ReactNode;
  desc: string;
}

function Row({ label, title, desc }: RowProps) {
  return (
    <AnimatedWrapper
      type="fade-up"
      delay={0.1}
      className="bg-[#071428] hover:bg-[#0a1f3a] p-8 md:p-10 rounded-2xl border border-cyan-900/20 shadow-xl shadow-black/10 transition-colors duration-300 flex flex-col items-center text-center space-y-4"
    >
      <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold">{label}</p>

      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{title}</h2>

      <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">{desc}</p>
    </AnimatedWrapper>
  );
}
