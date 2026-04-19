"use client";

import AnimatedWrapper from "./AnimatedWrapper";
import { ParallaxImage } from "./AdvancedEffects";
import VideoModal from "./VideoModal";
import { useState } from "react";

export default function PortfolioInvestment() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#03112c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper type="fade-up" className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80 mb-4">
            First Portfolio Investment
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The model, proven.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300 leading-8">
            Arise Funds led, built, and expanded the employer network that
            anchors ICBM graduates and demonstrates the value of workforce
            infrastructure at scale.
          </p>
        </AnimatedWrapper>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <AnimatedWrapper type="slide-in" delay={0.2} className="space-y-8">
            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80 mb-4">
                Key outcomes
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { val: "250%", label: "Growth since launch" },
                  { val: "12+", label: "Employer partners" },
                  { val: "1,200+", label: "Learners onboarded" },
                  { val: "3x", label: "Average value creation" },
                ].map((stat, idx) => (
                  <AnimatedWrapper
                    key={idx}
                    type="fade-up"
                    delay={0.3 + idx * 0.1}
                    hover
                    className="rounded-3xl bg-slate-950/80 p-6 cursor-default"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {stat.val}
                    </p>
                    <p className="mt-2 text-slate-400">{stat.label}</p>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper
            type="scale"
            delay={0.4}
            className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950/50 shadow-2xl shadow-black/20"
          >
            <ParallaxImage
              src="/proven-model-thumb.png"
              alt="Proven model video thumbnail"
              className="aspect-16/10"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <button
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play investment video"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg shadow-slate-950/20 z-10"
            >
              <svg
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 8l6 4-6 4V8z" />
              </svg>
            </button>
          </AnimatedWrapper>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/proven-model.mp4"
      />
    </section>
  );
}
