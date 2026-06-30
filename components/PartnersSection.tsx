"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const PARTNERS = [
  {
    name: "World Bank / SLDTP",
    description:
      "The Sierra Leone Digital Transformation Programme (SLDTP), supported by the World Bank, provides the policy and funding framework within which the ICBM model operates — connecting institutional capital with on-the-ground workforce delivery.",
    bg: "#002244",
    accent: "#2BB0ED",
    abbr: "WB",
  },
  {
    name: "Digital Bridge Institute",
    description:
      "DBI is Nigeria's premier ICT training institution under the Federal Ministry of Communications. Arise Funds works alongside DBI to align curriculum standards, certification pathways, and employment pipelines at national scale.",
    bg: "#003A1A",
    accent: "#22c55e",
    abbr: "DBI",
  },
  {
    name: "C1WT",
    description:
      "C1WT (Cohort 1 Workforce Technology) is an Arise Funds portfolio company operating the ICBM delivery infrastructure — managing cohort intake, training delivery, employment placement, and outcome verification across Nigeria.",
    bg: "#1a0a2e",
    accent: "#a78bfa",
    abbr: "C1WT",
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-[#04122c] py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedWrapper type="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-6">
            Our Partners
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Institutional{" "}
            <span className="text-cyan-400">Relationships</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            Arise Funds works alongside globally recognised institutions to
            deploy capital, build infrastructure, and deliver measurable
            workforce outcomes.
          </p>
        </AnimatedWrapper>

        {/* Partner Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {PARTNERS.map((partner, i) => (
            <AnimatedWrapper
              key={i}
              type="fade-up"
              delay={0.15 + i * 0.1}
              hover
              className="rounded-2xl overflow-hidden border border-white/5"
            >
              <div
                className="flex flex-col h-full"
                style={{ backgroundColor: partner.bg }}
              >
              {/* Card Header Band */}
              <div
                className="px-6 py-5 flex items-center gap-4"
                style={{ borderBottom: `1px solid ${partner.accent}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xs tracking-tight shrink-0"
                  style={{
                    backgroundColor: `${partner.accent}20`,
                    border: `1px solid ${partner.accent}40`,
                    color: partner.accent,
                  }}
                >
                  {partner.abbr}
                </div>
                <h3 className="text-white font-bold text-base leading-tight">
                  {partner.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="px-6 py-5 flex-1">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {/* Accent footer line */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(to right, ${partner.accent}60, transparent)`,
                }}
              />
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
