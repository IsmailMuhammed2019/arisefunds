"use client";

import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import Breadcrumbs from "./Breadcrumbs";

interface CardProps {
  logoSrc: string;
  fallbackText: string;
  gradient: string;
  title: string;
  desc: string;
  linkText: string;
  linkHref: string;
  hasPlayIcon?: boolean;
  onPlayClick?: () => void;
}

const TileIcon = ({ src, fallbackText, gradient }: { src: string; fallbackText: string; gradient: string }) => {
  const [hasError, setHasError] = useState(false);
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md ${gradient} relative overflow-hidden`}>
      {!hasError ? (
        <img
          src={src}
          alt={fallbackText}
          onError={() => setHasError(true)}
          className="w-6 h-6 object-contain filter brightness-100"
        />
      ) : (
        <span className="text-white font-bold text-xs tracking-tight font-mono">{fallbackText}</span>
      )}
    </div>
  );
};

const PortfolioGridCard = ({
  logoSrc,
  fallbackText,
  gradient,
  title,
  desc,
  linkText,
  linkHref,
  hasPlayIcon,
  onPlayClick,
}: CardProps) => {
  return (
    <AnimatedWrapper
      type="fade-up"
      className="bg-[#05162e]/50 hover:bg-[#071d3a] p-6 rounded-2xl border border-cyan-900/20 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <TileIcon src={logoSrc} fallbackText={fallbackText} gradient={gradient} />
          <h4 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
            {title}
            {hasPlayIcon && (
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onPlayClick) onPlayClick();
                }}
                className="inline-flex items-center justify-center text-xs text-cyan-400 hover:text-cyan-300 cursor-pointer transition-transform hover:scale-110"
              >
                &#9654;
              </span>
            )}
          </h4>
        </div>
        <p className="text-slate-300 text-xs leading-relaxed mb-4 font-light">
          {desc}
        </p>
      </div>
      <div>
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 text-[11px] font-semibold tracking-wider transition-colors inline-flex items-center"
        >
          {linkText} &rarr;
        </a>
      </div>
    </AnimatedWrapper>
  );
};

export default function PortfolioInvestment() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="portfolio" className="py-24 bg-[#04122c] text-white relative overflow-hidden border-t border-cyan-950/20">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">

        {/* Eyebrow & Title */}
        <div className="text-center space-y-4">
          <AnimatedWrapper type="fade-up">
            <div className="flex justify-center mb-2">
              <Breadcrumbs items={[{ label: "Portfolio" }]} />
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper type="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 mb-2">
              Proven Deployment
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper type="fade-up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              First Portfolio <span className="text-cyan-400">Investment</span>
            </h2>
          </AnimatedWrapper>
          <AnimatedWrapper type="fade-up" delay={0.2}>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light">
              Arise Funds builds the employer network that hires ICBM graduates.
            </p>
          </AnimatedWrapper>
        </div>

        {/* Section 1: Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-start">

          {/* Left Column: Portfolio Case Study Card */}
          <AnimatedWrapper type="slide-in" className="h-full">
            <div className="bg-[#05162e]/50 border border-cyan-900/20 p-8 rounded-2xl space-y-4 h-full">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                Portfolio Case Study
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                SBTS Group LLC
              </h3>
              <div className="text-slate-300 text-sm leading-relaxed font-light space-y-4">
                <p>
                  SBTS Group LLC is the first company financed and operationally supported by Arise Funds &mdash; and the live demonstration that Workforce Infrastructure Investing works.
                </p>
                <p>
                  In January 2026, the first ICBM graduates &mdash; Cohort 1, Phase 1 &mdash; began earning income in verified digital economy roles, with Phase 2 now in progress.
                </p>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Right Column: Built with Arise Capital Stack */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                Built with Arise Funds Capital
              </span>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                The companies and products SBTS Group LLC has built with Arise Funds capital &mdash; real, operating, and hiring ICBM graduates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PortfolioGridCard
                logoSrc="/vultcore.png"
                fallbackText="VC"
                gradient="bg-gradient-to-tr from-blue-600 to-indigo-500"
                title="Vultcore"
                desc="SOC platform — where cyber graduates are placed into live security roles."
                linkText="vultcore.com"
                linkHref="https://vultcore.com"
              />
              <PortfolioGridCard
                logoSrc="/kalmania.png"
                fallbackText="KM"
                gradient="bg-gradient-to-tr from-teal-500 to-emerald-400"
                title="Kallmania"
                desc="BPO operations hiring ICBM graduates. See It In Action."
                linkText="kallmania.com"
                linkHref="https://kallmania.com"
                hasPlayIcon={true}
                onPlayClick={() => setIsVideoOpen(true)}
              />
              <PortfolioGridCard
                logoSrc="/nexus.png"
                fallbackText="NX"
                gradient="bg-gradient-to-tr from-blue-500 to-cyan-400"
                title="ICBM Nexus"
                desc="The LMS — 850+ courses, in use by the SLDTP in Sierra Leone."
                linkText="icbm.training"
                linkHref="https://icbm.training"
              />
              <PortfolioGridCard
                logoSrc="/aegis360.png"
                fallbackText="A360"
                gradient="bg-gradient-to-tr from-indigo-500 to-purple-500"
                title="Aegis360AI"
                desc="Automated GRC suite integrating SOC and GRC teams."
                linkText="aegis360ai.com"
                linkHref="https://aegis360ai.com"
              />
              <div className="sm:col-span-2">
                <PortfolioGridCard
                  logoSrc="/c1wt.svg"
                  fallbackText="C1WT"
                  gradient="bg-gradient-to-tr from-purple-500 to-pink-500"
                  title="C1WT"
                  desc="Connect One Million Women in Technology — expanding digital skills, career pathways, and employment for women across the global digital economy."
                  linkText="connectonemillionwomen.com"
                  linkHref="https://connectonemillionwomen.com"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: Where Talent Meets Infrastructure */}
        <div className="border-t border-cyan-900/20 pt-16 space-y-10">
          <div className="space-y-4 max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Where Talent Meets <span className="text-cyan-400">Infrastructure</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              From security operations centers to data analytics labs &mdash; across Nigeria, Sierra Leone, the United States, and beyond &mdash; Arise Funds portfolio companies build the environments where real careers begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Column 1 */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-white block tracking-wide">
                <span className="text-cyan-400">01 </span> Cybersecurity &middot; SOC Operations
              </span>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                Secure digital environments with trained analysts across enterprise and government-grade security operations centers.
              </p>
            </div>
            {/* Column 2 */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-white block tracking-wide">
                <span className="text-cyan-400">02 </span> Software Development &middot; Global Teams
              </span>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                Cross-border engineering teams delivering scalable software products and managed technology services worldwide.
              </p>
            </div>
            {/* Column 3 */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-white block tracking-wide">
                <span className="text-cyan-400">03 </span> Data Science &middot; AI &amp; ML
              </span>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                Machine learning and AI applied to workforce intelligence, service delivery optimization, and product pipelines.
              </p>
            </div>
          </div>

          {/* Bottom Card CTA */}
          <AnimatedWrapper
            type="fade-up"
            className="bg-[#05162e]/40 border border-cyan-900/20 p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-6"
          >
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base md:text-lg">See The Model In Operation</h4>
              <p className="text-slate-400 text-xs font-light">Watch inside Kallmania &mdash; real graduates in real roles.</p>
            </div>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 text-xs shadow-lg shadow-cyan-500/15 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>&#9654;</span> How It Works
            </button>
          </AnimatedWrapper>
        </div>

      </div>

      {/* Video Modal popup for Kallmania */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white hover:text-cyan-400 transition-colors cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/cppiNLI4eiM?si=SG63WngAFiNxLGwJ&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
