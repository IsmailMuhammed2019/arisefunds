"use client";

import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";

interface CardProps {
  logoSrc: string;
  fallbackText: string;
  gradient: string;
  title: string;
  desc: string;
  linkText: string;
  linkHref: string;
  videoTrigger?: boolean;
  onVideoClick?: () => void;
}

const TileIcon = ({ src, fallbackText, gradient }: { src: string; fallbackText: string; gradient: string }) => {
  const [hasError, setHasError] = useState(false);
  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md ${gradient} relative overflow-hidden`}>
      {!hasError ? (
        <img
          src={src}
          alt={fallbackText}
          onError={() => setHasError(true)}
          className="w-8 h-8 object-contain filter brightness-100"
        />
      ) : (
        <span className="text-white font-bold text-xs tracking-tight font-mono">{fallbackText}</span>
      )}
    </div>
  );
};

const PortfolioCard = ({
  logoSrc,
  fallbackText,
  gradient,
  title,
  desc,
  linkText,
  linkHref,
  videoTrigger,
  onVideoClick,
}: CardProps) => {
  return (
    <AnimatedWrapper
      type="fade-up"
      className="bg-[#071428] hover:bg-[#0a1f3a] p-6 md:p-8 rounded-2xl border border-cyan-900/20 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Logo Tile & Title */}
        <div className="flex items-center gap-4 mb-4">
          <TileIcon src={logoSrc} fallbackText={fallbackText} gradient={gradient} />
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
          {desc}
        </p>
      </div>

      {/* Links Row */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center"
        >
          {linkText} &rarr;
        </a>
        {videoTrigger && onVideoClick && (
          <button
            onClick={onVideoClick}
            className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-1 border-l border-cyan-900/40 pl-6"
          >
            See it in action &rarr;
          </button>
        )}
      </div>
    </AnimatedWrapper>
  );
};

export default function PortfolioInvestment() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-24 bg-[#03112c] text-white relative overflow-hidden border-t border-cyan-950/20">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Section Card */}
        <div className="bg-[#05162e]/50 border border-cyan-900/10 p-8 md:p-12 rounded-3xl shadow-2xl relative z-10">
          
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-bold font-mono block mb-3">
              Built with Arise Funds Capital
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-200 leading-relaxed font-light max-w-4xl">
              The companies and platforms <strong className="text-white font-semibold">SBTS Group LLC</strong> has built with Arise Funds capital &mdash; real, operating products that generate revenue and hire ICBM graduates.
            </h2>
          </div>

          {/* Grid Layout Container */}
          <div className="space-y-6">
            {/* Row 1: Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PortfolioCard
                logoSrc="/vultcore.png"
                fallbackText="VC"
                gradient="bg-gradient-to-tr from-blue-600 to-indigo-500"
                title="Vultcore"
                desc="Security operations (SOC) platform — where ICBM cybersecurity graduates are placed into live enterprise and government security roles."
                linkText="vultcore.com"
                linkHref="https://vultcore.com"
              />
              <PortfolioCard
                logoSrc="/kalmania.png"
                fallbackText="KM"
                gradient="bg-gradient-to-tr from-teal-500 to-emerald-400"
                title="Kallmania"
                desc="BPO operations company — hiring ICBM graduates into live business-process and customer-operations roles."
                linkText="kallmania.com"
                linkHref="https://kallmania.com"
                videoTrigger={true}
                onVideoClick={() => setIsVideoOpen(true)}
              />
            </div>

            {/* Row 2: Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PortfolioCard
                logoSrc="/nexus.png"
                fallbackText="NX"
                gradient="bg-gradient-to-tr from-blue-500 to-cyan-400"
                title="ICBM Nexus"
                desc="The operational platform behind ICBM — 850+ courses plus exams, assessments, and full campus operations. In operational use by the World Bank–supported SLDTP in Sierra Leone."
                linkText="icbm.training"
                linkHref="https://icbm.training"
              />
              <PortfolioCard
                logoSrc="/aegis360.png"
                fallbackText="A360"
                gradient="bg-gradient-to-tr from-indigo-500 to-purple-500"
                title="Aegis360AI"
                desc="An automated GRC suite that integrates with SOC and GRC teams, turning static compliance into real-time operational resilience."
                linkText="aegis360ai.com"
                linkHref="https://aegis360ai.com"
              />
              <PortfolioCard
                logoSrc="/c1wt.svg"
                fallbackText="C1WT"
                gradient="bg-gradient-to-tr from-purple-500 to-pink-500"
                title="C1WT"
                desc="Connect One Million Women in Technology — a platform expanding digital skills, career pathways, and employment for women across the global digital economy."
                linkText="connectonemillionwomen.com"
                linkHref="https://connectonemillionwomen.com"
              />
            </div>
          </div>

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
            <video
              src="/test.mp4"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
