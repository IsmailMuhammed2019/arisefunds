"use client";

import AnimatedWrapper from "./AnimatedWrapper";
import { ParallaxImage } from "./AdvancedEffects";
import VideoModal from "./VideoModal";
import { useState } from "react";
import { ShieldCheck, Code2, Database, Play } from "lucide-react";

export default function Partnerships() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const items = [
    {
      title: "Cybersecurity + SOC Operations",
      description:
        "Employer-aligned security operations teams built for ongoing threat response and managed services.",
    },
    {
      title: "Software Development + Global Teams",
      description:
        "Distributed engineering teams that deliver product, scale operations, and connect talent with enterprise customers.",
    },
    {
      title: "Data Science + AI & Machine Learning",
      description:
        "Applied analytics and machine learning capabilities that power decision making across workforce and infrastructure operations.",
    },
  ];

  return (
    <section className="py-24 bg-[#04122c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper type="fade-up" className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80 mb-4">
            Strategic Partnerships
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The work, in practice.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-300 leading-8">
            We partner with employer networks and operating companies to build
            infrastructure that delivers measurable talent outcomes and
            investment returns.
          </p>
        </AnimatedWrapper>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <AnimatedWrapper
            type="slide-in"
            delay={0.2}
            className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950/50"
          >
            <ParallaxImage
              src="/partnership-video-thumb.png"
              alt="Partnership video thumbnail"
              className="aspect-16/10"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <button
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play partnership video"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/95 text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:bg-cyan-400 z-10"
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

          <div className="space-y-8">
            <AnimatedWrapper type="fade-up" delay={0.4}>
              <p className="text-slate-300 leading-8">
                Arise Funds builds partnerships across technology,
                cybersecurity, and AI to turn workforce infrastructure into
                operationally sustainable, investor-ready businesses.
              </p>
            </AnimatedWrapper>
            <div className="space-y-6">
              {items.map((item, index) => (
                <AnimatedWrapper
                  key={index}
                  type="fade-up"
                  delay={0.5 + index * 0.1}
                  hover
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/15 text-cyan-300 font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-300 leading-7">
                    {item.description}
                  </p>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/partnerships-practice.mp4"
      />
    </section>
  );
}
