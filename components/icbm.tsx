import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const ICBM_STAGES = [
  {
    id: 1,
    title: "Discover",
    text: "AI-driven aptitude assessment and pathway matching — directing talent correctly before training begins.",
  },
  {
    id: 2,
    title: "Prepare",
    text: "Removing structural barriers to participation — devices, connectivity, financing — before training begins.",
  },
  {
    id: 3,
    title: "Train",
    text: "Competency-based training across five digital economy pathways — building job-ready skills.",
  },
  {
    id: 4,
    title: "Certify",
    text: "Globally recognized certifications that employers trust and that hold their value across borders.",
  },
  {
    id: 5,
    title: "Employ",
    text: "Verified employment placement — into BPO operations, government contracts, and private sector partnerships.",
  },
  {
    id: 6,
    title: "Advance",
    text: "Graduates advance into higher-value roles — analysts, engineers, managers, and entrepreneurs.",
  },
  {
    id: 7,
    title: "Reinvest",
    text: "Graduate repayments and employer revenue fund the next cohort. The system becomes self-sustaining at scale.",
  },
];

const ModelSection = () => {
  return (
    <section className="bg-[#001a2c] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedWrapper type="fade-up" className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The ICBM <span className="text-[#00a3ff]">Model</span>
          </h2>
          <p className="text-gray-400 text-lg">
            AppICBM is a 7-stage workforce development flywheel — not a training
            program.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-y-20 gap-x-4">
          {ICBM_STAGES.map((stage, index) => (
            <AnimatedWrapper
              key={stage.id}
              type="fade-up"
              delay={0.1 * index}
              className={`md:col-span-2 ${index === 0 ? "md:col-start-1" : ""} ${index === 6 ? "md:col-start-3" : ""}`}
            >
              <StageCard stage={stage} />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

const StageCard = ({ stage }: { stage: (typeof ICBM_STAGES)[0] }) => (
  <div className="flex gap-4 group cursor-default">
    {/* The Number Circle */}
    <div className="shrink-0 w-12 h-12 rounded-full bg-[#00a3ff] flex items-center justify-center font-bold text-white text-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,163,255,0.4)]">
      {stage.id}
    </div>

    {/* The Text Content */}
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold mb-2 tracking-tight transition-colors duration-300 group-hover:text-[#00a3ff]">
        {stage.title}
      </h3>
      <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-[280px]">
        {stage.text}
      </p>
    </div>
  </div>
);

export default ModelSection;
