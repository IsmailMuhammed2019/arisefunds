import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import { ParallaxImage } from "./AdvancedEffects";

const InvestmentThesis = () => {
  return (
    <section id="investment-thesis" className="bg-[#021526] text-white py-20 px-6 md:px-20 font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      {/* Center vertical dashed line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] -translate-x-1/2 border-l border-dashed border-cyan-500/20 z-0 pointer-events-none" />

      {/* Header Section */}
      <AnimatedWrapper
        type="fade-up"
        className="text-center mb-16 max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Investment <span className="text-cyan-400 font-semibold">Thesis</span>
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed tracking-wide px-4 max-w-2xl mx-auto">
          Providing the capital, operational infrastructure, and institutional
          systems that make early-stage workforce companies investable
        </p>
      </AnimatedWrapper>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10">

        {/* Left: Image Column */}
        <AnimatedWrapper
          type="slide-in"
          delay={0.2}
          className="w-full md:w-1/2 relative"
        >
          {/* Horizontal dashed line extending to the left edge of the screen */}
          <div className="absolute right-full w-screen top-1/2 -translate-y-1/2 border-t border-dashed border-cyan-500/25 pointer-events-none hidden md:block" />

          {/* Image container with rounded corners and cyan border */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-cyan-950/20 group">
            <ParallaxImage
              src="/thesis-infrastructure.png"
              alt="Workforce Infrastructure"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </AnimatedWrapper>

        {/* Right: Text Content Column */}
        <AnimatedWrapper
          type="fade-up"
          delay={0.4}
          className="w-full md:w-1/2 space-y-6"
        >
          <h3 className="text-3xl lg:text-5xl font-bold leading-tight">
            We don&apos;t fund projects.{" "}
            <span className="text-cyan-400">We finance infrastructure.</span>
          </h3>

          <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              The global workforce crisis is not a talent problem. It is a
              systems coordination failure — training programs exist, employer
              demand exists, and worker motivation exists, but structural
              disconnects prevent people from accessing dignified,
              income-generating work at scale. This is true in Lagos. It is
              equally true in Louisville.
            </p>

            <p>
              Arise Funds finances the infrastructure that resolves this
              failure: workforce development and technology companies with
              employer-integrated models, AI-enabled operations, and capital
              structures designed to generate returns as employer revenue
              scales. These are not training programs. They are human capital
              enterprises.
            </p>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default InvestmentThesis;
