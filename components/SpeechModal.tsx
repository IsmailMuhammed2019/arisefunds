"use client";

import React, { useEffect, useState } from "react";
import { X, MapPin, Calendar, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

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

export default function SpeechModal() {
  const { isSpeechModalOpen, closeSpeechModal } = useModal();
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const today = formatDate(new Date());

  useEffect(() => {
    if (isSpeechModalOpen) {
      document.body.style.overflow = "hidden";
      setActivePillar(null);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isSpeechModalOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") closeSpeechModal(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeSpeechModal]);

  const togglePillar = (index: number) => {
    setActivePillar((prev) => (prev === index ? null : index));
  };

  return (
    <AnimatePresence>
      {isSpeechModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSpeechModal}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="relative w-full max-w-5xl bg-[#010f1f] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
          >
            {/* Close */}
            <button
              onClick={closeSpeechModal}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* ── LEFT PANEL ── */}
            <div className="lg:w-[38%] p-8 lg:p-10 bg-gradient-to-br from-[#032040] via-[#021530] to-[#010f1f] flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 shrink-0">
              {/* Glows */}
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Logo + tag */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <img src="/ariseFunds_logoCircle.png" alt="Arise Funds" className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-400 font-semibold">
                    Panel Address
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight uppercase mb-2">
                  Workforce<br />Capital
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed mb-8">
                  A New Investment Framework<br />for Digital Economic Growth
                </p>

                <div className="w-8 h-px bg-cyan-500/50 mb-8" />

                {/* Metadata */}
                <div className="space-y-4 text-xs text-slate-400">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <span className="text-cyan-400 text-[8px] font-bold">A</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Aisha Saaka</p>
                      <p className="text-slate-500">Arise Funds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-cyan-400/60 mt-0.5 shrink-0" />
                    <span>West Africa Convergence Conference</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-cyan-400/60 mt-0.5 shrink-0" />
                    <div>
                      <p>{today}</p>
                      <p className="text-slate-600">Delivery time: 8 – 10 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supporting Images Gallery */}
              <div className="relative z-10 flex gap-3 mt-6">
                <div className="flex-1 h-20 rounded-xl overflow-hidden border border-white/10 shadow-md">
                  <img
                    src="/aisha-portrait.png"
                    alt="Aisha Saaka Lewis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 h-20 rounded-xl overflow-hidden border border-white/10 shadow-md">
                  <img
                    src="/News-Pics-WACC.png"
                    alt="WACC Conference"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Core Thesis */}
              <div className="relative z-10 mt-8 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-950/20">
                <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold select-none">
                  Core Thesis
                </p>
                <p className="text-white font-bold text-base leading-snug">
                  "Talent is infrastructure."
                </p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Nations that finance human capacity the way they finance physical infrastructure will define the next era of competitiveness.
                </p>
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="flex-1 overflow-y-auto px-8 lg:px-10 py-8 space-y-8">

              {/* Stats */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 mb-4 font-semibold">
                  The Opportunity
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {STATS.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] space-y-1"
                    >
                      <p className="text-2xl font-extrabold text-cyan-300 tracking-tight">{s.value}</p>
                      <p className="text-xs text-slate-300 leading-snug">{s.label}</p>
                      <p className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">{s.source}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pillars Accordion */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 mb-4 font-semibold">
                  The Five Layers of Workforce Capital
                </p>
                <div className="space-y-2">
                  {PILLARS.map((p, i) => {
                    const isOpen = activePillar === i;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.18 + i * 0.06 }}
                        className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? "border-cyan-500/30 bg-cyan-950/20"
                            : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
                        }`}
                      >
                        {/* Pillar Header — clickable row */}
                        <button
                          onClick={() => togglePillar(i)}
                          className="w-full flex items-center gap-4 p-4 text-left cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span
                            className={`text-[11px] font-mono font-bold w-5 shrink-0 transition-colors ${
                              isOpen ? "text-cyan-400" : "text-cyan-500/60"
                            }`}
                          >
                            {p.num}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm font-semibold transition-colors ${
                                isOpen ? "text-white" : "text-slate-200"
                              }`}
                            >
                              {p.title}
                            </p>
                            {!isOpen && (
                              <p className="text-xs text-slate-500 truncate">{p.sub}</p>
                            )}
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="shrink-0"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-colors ${
                                isOpen ? "text-cyan-400" : "text-white/20"
                              }`}
                            />
                          </motion.div>
                        </button>

                        {/* Expanded Detail */}
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
                              <div className="px-4 pb-5 pt-1 border-t border-cyan-500/15">
                                <p className="text-xs text-cyan-400 uppercase tracking-widest font-mono font-semibold mb-2">
                                  {p.sub}
                                </p>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                  {p.detail}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Closing Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="p-5 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 mb-3 font-semibold">
                  The Call
                </p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  "When workforce development becomes investable, talent becomes scalable. And when talent becomes scalable, economies become more competitive. At Arise Funds, we believe the answer is yes — and we invite all of you to help build it with us."
                </p>
                <p className="text-[10px] text-slate-500 mt-3 font-mono">— Aisha Saaka, Arise Funds</p>
              </motion.div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-[10px] text-slate-600 font-mono uppercase tracking-wider">
                  Full transcript available upon request
                </p>
                <button
                  onClick={closeSpeechModal}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors px-5 py-2.5 rounded-full"
                >
                  Get In Touch
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
