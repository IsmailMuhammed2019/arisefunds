"use client";

import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import ContactSection from "@/components/contact";
import Footer from "@/components/Footer";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    num: "01",
    title: "Institutional Capital",
    sub: "Governance, standards & quality systems",
    detail:
      "Training organisations must themselves become stronger. They need governance, human resource systems, standard operating procedures, employer engagement, quality assurance, and modern curricula. The measure of success is not enrolment — it is employability. The new model must be: train, assess, employ, build, export, reinvest, and scale.",
  },
  {
    num: "02",
    title: "Infrastructure Capital",
    sub: "Dormant assets → productive digital hubs",
    detail:
      "Across Nigeria and Africa there are underutilised buildings, dormant campuses, old training facilities, and abandoned spaces. With the right capital and operating model, these spaces can become digital workforce hubs, cybersecurity centres, AI laboratories, BPO facilities, and innovation campuses. The building is not the outcome — the productivity inside the building is.",
  },
  {
    num: "03",
    title: "Human Capital",
    sub: "Removing micro-barriers to opportunity",
    detail:
      "For many young people, the gap between unemployment and opportunity may be a laptop, reliable connectivity, a certification exam, a stipend, or the chance to learn in an environment that mirrors the workplace they are being prepared for. To a large institution that may look like a small request. To that young person, it may be the bridge to a lifetime of productivity.",
  },
  {
    num: "04",
    title: "Employment Capital",
    sub: "Training centres become service pipelines",
    detail:
      "The most powerful workforce systems do not simply train people and send them away. They create productive environments where learners transition into real work — managed services, remote delivery, entrepreneurship, and export-oriented digital services. A training centre can also become an employment centre. A campus can become a production hub. A classroom can become the beginning of a global service pipeline.",
  },
  {
    num: "05",
    title: "Product Capital",
    sub: "Building platforms & IP from local talent",
    detail:
      "Developing countries should not only train workers for global companies — we should build our own platforms, products, services, and intellectual property. Platforms such as Aegis360AI demonstrate what can emerge when Nigerian talent, global collaboration, cybersecurity capability, AI thinking, and institutional investment come together around a real product. Nigeria can be globally conscious and locally grounded at the same time.",
  },
];

const STATS = [
  { value: "230M+", label: "Jobs in Sub-Saharan Africa requiring digital skills by 2030", source: "IFC / World Bank" },
  { value: "$130B", label: "Estimated investment opportunity in digital skilling", source: "IFC / World Bank" },
  { value: "$1M+", label: "Committed by Arise Funds Family Office in catalytic support", source: "Arise Funds" },
];

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function WaccSpeechPage() {
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const today = formatDate(new Date());

  const togglePillar = (index: number) => {
    setActivePillar((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

      <NavBar />

      <main className="flex-grow max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative z-10">
        {/* Back to Home / Tag */}
        <AnimatedWrapper type="fade-up" className="mb-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 shadow-lg shadow-cyan-500/10">
            WACC Panel Address
          </div>
        </AnimatedWrapper>

        {/* Hero Header */}
        <AnimatedWrapper type="fade-up" delay={0.1} className="max-w-4xl mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
            Workforce <span className="text-cyan-400 font-bold">Capital</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light mt-4 leading-relaxed">
            A New Investment Framework for Digital Economic Growth
          </p>
        </AnimatedWrapper>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
          {/* Left Column: Media & Metadata */}
          <div className="space-y-8 lg:sticky lg:top-28">
            {/* Gallery Cards */}
            <AnimatedWrapper type="scale" delay={0.2} className="flex gap-4 select-none">
              <div className="flex-1 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
                <img
                  src="/aisha-portrait.png"
                  alt="Aisha Saaka Lewis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
                <img
                  src="/News-Pics-WACC.png"
                  alt="WACC Conference"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedWrapper>

            {/* Metadata Card */}
            <AnimatedWrapper type="fade-up" delay={0.3} className="p-6 rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-md space-y-6">
              <div className="space-y-4 text-sm text-slate-350">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                    <span className="text-cyan-400 text-sm font-bold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Aisha Saaka</p>
                    <p className="text-xs text-slate-500">Arise Funds</p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400/60 shrink-0 mt-0.5" />
                  <span>West Africa Convergence Conference</span>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-cyan-400/60 shrink-0 mt-0.5" />
                  <div>
                    <p>{today}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Read time: 8 – 10 minutes</p>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Core Thesis Card */}
            <AnimatedWrapper type="fade-up" delay={0.4} className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/20">
              <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold select-none">
                Core Thesis
              </p>
              <p className="text-white font-bold text-lg leading-snug">
                "Talent is infrastructure."
              </p>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Nations that finance human capacity the way they finance physical infrastructure will define the next era of competitiveness.
              </p>
            </AnimatedWrapper>
          </div>

          {/* Right Column: Content, Accordion & Stats */}
          <div className="space-y-10">
            {/* Stats row */}
            <div className="space-y-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 font-semibold">
                The Opportunity
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {STATS.map((s, i) => (
                  <AnimatedWrapper
                    key={i}
                    type="fade-up"
                    delay={0.2 + i * 0.08}
                    className="p-5 rounded-2xl border border-white/5 bg-slate-950/30 backdrop-blur-sm space-y-2"
                  >
                    <p className="text-3xl font-extrabold text-cyan-300 tracking-tight">{s.value}</p>
                    <p className="text-xs text-slate-350 leading-normal">{s.label}</p>
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-1">{s.source}</p>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 font-semibold">
                The Five Layers of Workforce Capital
              </p>
              <div className="space-y-3">
                {PILLARS.map((p, i) => {
                  const isOpen = activePillar === i;
                  return (
                    <AnimatedWrapper
                      key={i}
                      type="fade-up"
                      delay={0.25 + i * 0.05}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "border-cyan-500/30 bg-cyan-950/20"
                          : "border-white/5 bg-slate-950/30 hover:bg-slate-950/50 hover:border-white/10"
                      }`}
                    >
                      <button
                        onClick={() => togglePillar(i)}
                        className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`text-xs font-mono font-bold w-6 shrink-0 transition-colors ${
                            isOpen ? "text-cyan-400" : "text-cyan-500/60"
                          }`}
                        >
                          {p.num}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-base font-semibold transition-colors ${
                              isOpen ? "text-white" : "text-slate-200"
                            }`}
                          >
                            {p.title}
                          </p>
                          {!isOpen && (
                            <p className="text-xs text-slate-500 truncate mt-0.5">{p.sub}</p>
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="shrink-0"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-colors ${
                              isOpen ? "text-cyan-400" : "text-white/20"
                            }`}
                          />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 pt-2 border-t border-cyan-500/15 bg-cyan-950/5">
                              <p className="text-xs text-cyan-400 uppercase tracking-widest font-mono font-semibold mb-3">
                                {p.sub}
                              </p>
                              <p className="text-sm text-slate-300 leading-relaxed">
                                {p.detail}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </AnimatedWrapper>
                  );
                })}
              </div>
            </div>

            {/* Closing Quote */}
            <AnimatedWrapper
              type="fade-up"
              delay={0.5}
              className="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-950/50 to-transparent backdrop-blur-sm"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 mb-3 font-semibold">
                The Call
              </p>
              <p className="text-base text-slate-200 leading-relaxed font-light italic">
                "When workforce development becomes investable, talent becomes scalable. And when talent becomes scalable, economies become more competitive. At Arise Funds, we believe the answer is yes — and we invite all of you to help build it with us."
              </p>
              <p className="text-xs text-slate-500 mt-4 font-mono">— Aisha Saaka, Arise Funds</p>
            </AnimatedWrapper>
          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
