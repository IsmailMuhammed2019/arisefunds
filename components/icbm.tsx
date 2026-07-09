"use client";

import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";

interface Stage {
  id: number;
  tag: string;
  title: string;
  desc: string;
  signal: {
    label: string;
    headline: string;
    body: string;
    metrics: { value: string; note: string }[];
  };
  featured?: boolean;
  reinvest?: boolean;
}

const ICBM_STAGES: Stage[] = [
  {
    id: 1,
    tag: "Entry Point",
    title: "Discover",
    desc: "AI-driven aptitude assessment and pathway matching — directing talent correctly before training begins.",
    signal: {
      label: "Investor Signal — Stage 01",
      headline: "Precise Talent Selection Reduces Dropout Risk",
      body:
        "AI-powered screening before enrollment eliminates misaligned candidates at zero cost. Every cohort that enters the model has already been validated for pathway fit — reducing training attrition to under 8% and protecting cohort completion rates.",
      metrics: [
        { value: "<8%", note: "Attrition Rate Goal" },
        { value: "AI", note: "Pathway Matching Engine" },
        { value: "Aptitude", note: "Zero-Cost Fit Filter" },
      ],
    },
  },
  {
    id: 2,
    tag: "Barrier Removal",
    title: "Prepare",
    desc: "Removing structural barriers to participation — devices, connectivity, financing — before training begins.",
    signal: {
      label: "Investor Signal — Stage 02",
      headline: "Infrastructure Access Unlocks Underserved Labor Markets",
      body:
        "By pre-financing devices and connectivity, the ICBM model reaches talent pools that institutional investors cannot access through conventional channels.",
      metrics: [
        { value: "8", note: "Countries Reached" },
        { value: "50%", note: "Young Women in Cohorts (Target)" },
        { value: "Pre-funded", note: "Device Access Model" },
      ],
    },
  },
  {
    id: 3,
    tag: "Skills Development",
    title: "Train",
    desc: "Competency-based training across five digital economy pathways — building job-ready skills, not theoretical credentials.",
    signal: {
      label: "Investor Signal — Stage 03",
      headline: "Five Revenue-Generating Pathways in One Infrastructure",
      body:
        "Training across Cybersecurity, Software Development, Data Science, AI & Machine Learning, and Program Management creates diversified revenue exposure within a single deployment. No single-pathway risk. Each track maps to verified employer demand secured in advance.",
      metrics: [
        { value: "5", note: "Digital Pathways" },
        { value: "800+", note: "Courses Delivered" },
        { value: "Verified", note: "Employer Demand" },
      ],
    },
  },
  {
    id: 4,
    tag: "Credentialing",
    title: "Certify",
    desc: "Globally recognized certifications that employers trust and that hold their value across borders.",
    signal: {
      label: "Investor Signal — Stage 04",
      headline: "Global Credentials Create Cross-Border Employment Pipeline",
      body:
        "Graduates hold internationally recognized certifications — CompTIA, ISC², PMI, and Microsoft — creating employment placement reach beyond Nigeria and Sierra Leone into US, UK, and Gulf markets. This extends the investable revenue geography significantly.",
      metrics: [
        { value: "Intl.", note: "Recognized Certifications" },
        { value: "Global", note: "Placement Geography" },
        { value: "Verified", note: "Employer Trust Layer" },
      ],
    },
  },
  {
    id: 5,
    tag: "Employment Creation",
    title: "Employ",
    desc: "Verified employment placement — into BPO and SOC operations, government contracts, and private sector partnerships. Training leads directly to income-generating work.",
    featured: true,
    signal: {
      label: "Investor Signal — Stage 05 · Primary Return Event",
      headline: "Employment Is the Revenue Trigger",
      body:
        "Verified placement activates income-linked repayments from graduates, triggers employer-side revenue from BPO and SOC contracts, and generates the outcome data required by DFIs and development banks for follow-on deployment",
      metrics: [
        { value: "50K+", note: "Employment Target by 2029" },
        { value: "Cohort 1", note: "Phase 1 Confirmed" },
        { value: "Cohort 2", note: "Active Now" },
      ],
    },
  },
  {
    id: 6,
    tag: "Career Progression",
    title: "Advance",
    desc: "Graduates advance into higher-value roles — analysts, engineers, managers, and entrepreneurs — building long-term career trajectories.",
    signal: {
      label: "Investor Signal — Stage 06",
      headline: "Career Advancement Increases Repayment Capacity Over Time",
      body:
        "As graduates move into senior roles, their income — and therefore repayment capacity — increases. The ICBM model tracks 12-month retention as its primary success metric, not training completion rates. This creates a long-duration income stream per graduate",
      metrics: [
        { value: "12-Month", note: "Retention KPI" },
        { value: "Progression", note: "Senior Role Advancement" },
        { value: "Stable Yield", note: "Income Stream Per Graduate" },
      ],
    },
  },
  {
    id: 7,
    tag: "The Flywheel Effect",
    title: "Reinvest",
    desc: "Graduate repayments and employer revenue fund the next cohort. The system becomes self-sustaining at scale.",
    reinvest: true,
    signal: {
      label: "Investor Signal — Stage 07 · The Return Loop",
      headline: "Self-Funding at Scale: The Infrastructure Case",
      body:
        "At 50,000 graduates, the ICBM model generates graduate repayments and employer revenue sufficient to fund the next cohort cycle without external capital injection. This is the infrastructure case for DFI investment — not a program. A self-sustaining economic system.",
      metrics: [
        { value: "Self-fund", note: "Target State at Scale" },
        { value: "GDP+", note: "National Economic Contribution" },
        { value: "Exit-ready", note: "DFI / Sovereign Capital" },
      ],
    },
  },
];

export default function ICBM() {
  const [activeId, setActiveId] = useState<number>(1);
  const active = ICBM_STAGES.find((s) => s.id === activeId)!;

  return (
    <section id="icbm" className="bg-[#04112a] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center mb-2">
            <Breadcrumbs items={[{ label: "About" }, { label: "ICBM" }]} />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-6">
            The ICBM Model
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            The ICBM <span className="text-cyan-400">Model</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            ICBM is a 7-stage talent economy flywheel — not a training program.
            Click each stage to see the investor signal.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
          {/* LEFT: 7-Stage Flywheel */}
          <div className="flex flex-col gap-0">
            {ICBM_STAGES.map((stage, i) => {
              const isActive = stage.id === activeId;
              const isLast = i === ICBM_STAGES.length - 1;
              return (
                <div key={stage.id} className="flex gap-0 group">
                  {/* Left: Number + connector */}
                  <div className="flex flex-col items-center w-14 shrink-0 pt-1">
                    <button
                      onClick={() => setActiveId(stage.id)}
                      aria-label={`Select stage ${stage.id}: ${stage.title}`}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center font-mono text-xs tracking-widest font-bold shrink-0 transition-all duration-200 cursor-pointer ${isActive
                        ? stage.featured
                          ? "bg-cyan-500 border-cyan-400 text-slate-900 shadow-[0_0_16px_rgba(34,211,238,0.4)]"
                          : stage.reinvest
                            ? "bg-cyan-900/60 border-cyan-400/60 text-cyan-300"
                            : "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                        : "bg-[#0a1f3a] border-cyan-900/50 text-slate-500 hover:border-cyan-500/40 hover:text-slate-300"
                        }`}
                    >
                      {String(stage.id).padStart(2, "0")}
                    </button>
                    {!isLast && (
                      <div
                        className={`flex-1 w-px mt-1 mb-1 min-h-[20px] transition-colors duration-200 ${stage.id < activeId
                          ? "bg-cyan-500/40"
                          : "bg-cyan-900/30"
                          } ${stage.reinvest ? "opacity-50" : ""}`}
                      />
                    )}
                  </div>

                  {/* Right: Card */}
                  <button
                    onClick={() => setActiveId(stage.id)}
                    className={`flex-1 text-left rounded-sm mb-0.5 ml-4 px-6 py-5 border-l-2 border transition-all duration-200 cursor-pointer ${isActive
                      ? stage.featured
                        ? "bg-cyan-950/40 border-cyan-400/50 border-l-cyan-400"
                        : stage.reinvest
                          ? "bg-[#0a1f3a]/80 border-cyan-700/40 border-l-cyan-600/50 border-dashed border-l-solid"
                          : "bg-[#0a1f3a] border-cyan-800/40 border-l-cyan-500"
                      : "bg-[#071428] border-cyan-900/20 border-l-cyan-900/30 hover:bg-[#0a1f3a] hover:border-l-cyan-700/50"
                      }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono">
                        {stage.tag}
                      </span>
                      {stage.featured && (
                        <span className="text-[9px] uppercase tracking-widest text-cyan-400 border border-cyan-400/40 px-1.5 py-0.5 rounded-sm font-mono">
                          Key Stage
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-lg font-bold tracking-tight mb-1 transition-colors duration-200 ${isActive ? "text-white" : "text-slate-300"
                        }`}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-200 ${isActive ? "text-slate-300" : "text-slate-500"
                        }`}
                    >
                      {stage.desc}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Investor Signal Panel */}
          <div className="lg:sticky lg:top-24 self-start">
            <div
              key={activeId}
              className="rounded-xl border border-cyan-900/40 bg-[#071428] overflow-hidden"
              style={{ animation: "fadeIn 0.25s ease" }}
            >
              {/* Panel Header */}
              <div className="bg-cyan-950/30 border-b border-cyan-900/30 px-6 py-4">
                <div className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-mono mb-1">
                  {active.signal.label}
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  {active.signal.headline}
                </h4>
              </div>

              {/* Panel Body */}
              <div className="px-6 py-6">
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {active.signal.body}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {active.signal.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="bg-[#0a1f3a] rounded-lg px-3 py-3 text-center border border-cyan-900/30"
                    >
                      <div className="text-lg font-extrabold text-cyan-300 tracking-tight leading-none mb-1">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-[0.12em] leading-snug">
                        {m.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Pathways list */}
            <div className="mt-4 border border-cyan-900/30 rounded-xl bg-[#071428] px-6 py-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-mono mb-3">
                Digital Economy Pathways
              </div>
              <ul className="space-y-2">
                {[
                  "Cybersecurity",
                  "Software Development",
                  "Program & Project Management",
                  "AI & Machine Learning",
                  "Data Science",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full-width Quote Card at the Bottom */}
        <div className="mt-12 border border-cyan-900/35 rounded-xl bg-[#05162e]/50 px-8 py-8 text-center max-w-7xl mx-auto">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic mb-4 font-light">
            &ldquo;Training doesn&apos;t cost — it pays. Every cohort generates
            employer revenue, graduate repayments, and tax contribution.
            That is not a program outcome. That is a return.&rdquo;
          </p>
          <p className="text-xs text-cyan-400 font-mono tracking-wider">
            &mdash; Aisha Saaka Lewis, Arise Funds
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
