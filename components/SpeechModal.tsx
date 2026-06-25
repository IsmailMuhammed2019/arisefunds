"use client";

import React, { useEffect, useRef } from "react";
import { X, Clock, FileText, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export default function SpeechModal() {
  const { isSpeechModalOpen, closeSpeechModal } = useModal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isSpeechModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSpeechModalOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSpeechModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeSpeechModal]);

  // Reset scroll to top on open
  useEffect(() => {
    if (isSpeechModalOpen && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [isSpeechModalOpen]);

  const PauseCue = ({ text = "pause" }: { text?: string }) => (
    <span className="inline-flex items-center mx-1 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-widest text-cyan-400/70 bg-cyan-400/10 select-none uppercase font-semibold">
      {text}
    </span>
  );

  return (
    <AnimatePresence>
      {isSpeechModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSpeechModal}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative w-full max-w-4xl bg-[#011424] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
          >
            {/* Close Button */}
            <button
              onClick={closeSpeechModal}
              className="absolute top-6 right-6 z-25 p-2.5 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md border border-white/5"
              aria-label="Close speech modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Brand Banner */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-cyan-950/60 to-blue-950/80 border-b border-white/10 flex flex-col justify-between shrink-0 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <img src="/ariseFunds_logoCircle.png" alt="Logo" className="w-8 h-8" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold font-mono">
                    Keynote Address
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight uppercase font-sans">
                  Workforce Capital
                </h2>
                <p className="text-sm md:text-base text-slate-300 font-medium tracking-wide mt-1 font-sans">
                  A New Investment Framework for Digital Economic Growth
                </p>
              </div>

              {/* Metadata Badges */}
              <div className="relative z-10 flex flex-wrap gap-4 mt-6 text-xs text-slate-400 border-t border-white/10 pt-4 font-sans">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Aisha Saaka (Arise Funds)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>8 - 10 min read</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>West Africa Convergence Conference</span>
                </div>
              </div>

              {/* Background abstract circles */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Scrollable Speech Text Container */}
            <div
              ref={scrollContainerRef}
              className="overflow-y-auto px-8 md:px-12 py-8 flex-1 text-slate-300 leading-relaxed font-sans scrollbar-thin scrollbar-thumb-white/10"
            >
              <div className="max-w-3xl mx-auto space-y-6">
                
                {/* Speaker guidance */}
                <div className="p-4 bg-cyan-950/20 border border-cyan-500/25 rounded-2xl text-xs text-cyan-300 leading-relaxed select-none mb-8">
                  <strong>Speaker Guidance:</strong> The small <PauseCue text="pause" /> badges represent pause and delivery cues. They are intended for reference and do not need to be read aloud.
                </div>

                {/* Speech Body */}
                <p>
                  Good morning, distinguished Ministers, policymakers, industry leaders, investors, development partners, technology decision makers, members of the private sector, ladies and gentlemen.
                </p>

                <p>
                  It is a great honour to stand before you this morning at a time when Nigeria, West Africa, and the wider developing world are asking one of the most consequential questions of our generation:
                </p>

                <p className="font-semibold text-white text-lg">
                  How do we build economies that are not only digital in ambition, but productive in reality?
                  <PauseCue />
                </p>

                <p>
                  Across Nigeria today, we are speaking with increasing confidence about artificial intelligence, cybersecurity, cloud computing, digital infrastructure, innovation, entrepreneurship, and global services.
                </p>

                <p>
                  These are the right conversations. They reflect the urgency of the moment and the seriousness of the opportunity before us.
                </p>

                <p>
                  We should also acknowledge that the Federal Government of Nigeria has begun to put important building blocks in place. Initiatives such as the 3 Million Technical Talent programme, the expanding digital economy agenda, and student financing efforts such as NELFUND demonstrate that skills, access, and youth opportunity are now part of the national development conversation.
                </p>

                <p>
                  These are important steps. They should be recognized. They should be strengthened. And they should be connected to a wider system that produces measurable employment, entrepreneurship, and export outcomes.
                  <PauseCue />
                </p>

                <p>
                  This morning, I would like to focus on one idea that sits at the heart of that system.
                </p>

                {/* Core Callout */}
                <div className="my-8 py-6 border-l-4 border-cyan-400 bg-white/5 pl-6 pr-4 rounded-r-2xl">
                  <span className="block text-xs uppercase font-mono tracking-widest text-cyan-400 mb-2 font-bold select-none">
                    Core Thesis
                  </span>
                  <blockquote className="text-xl font-bold text-white leading-normal">
                    "Talent is infrastructure."
                  </blockquote>
                  <PauseCue text="pause for emphasis" />
                </div>

                <p>
                  In the industrial age, nations competed through roads, ports, power stations, factories, and railways.
                </p>

                <p>
                  In the digital age, nations compete through the productive capacity of their people.
                </p>

                <ul className="space-y-4 my-6 pl-4 border-l-2 border-white/5">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 select-none">•</span>
                    <span>A cybersecurity analyst protecting critical systems is infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 select-none">•</span>
                    <span>A software engineer building products for global markets is infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 select-none">•</span>
                    <span>An AI-enabled worker improving productivity is infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 select-none">•</span>
                    <span>A contact centre professional serving international clients from Lagos, Abuja, Enugu, Freetown, Accra, or Monrovia is infrastructure.</span>
                  </li>
                </ul>

                <p>
                  If Nigeria is to compete in the next economy, we must finance human capacity with the same seriousness with which we finance physical infrastructure.
                  <PauseCue text="applause - pause" />
                </p>

                <p>
                  But let us also face a practical truth.
                </p>

                <p className="font-semibold text-white">
                  The challenge is not that Nigeria lacks talent.
                </p>

                <p className="font-semibold text-white">
                  The challenge is not that Africa lacks ambition.
                </p>

                <p>
                  The challenge is that workforce development has not yet been properly structured as an investable asset class.
                </p>

                <p>
                  Too often, we finance education without financing employability. We finance buildings without financing institutional transformation. We finance technology without financing the people capable of using it productively. We finance training without financing the pathway to work. And then we are surprised when training alone does not create jobs.
                  <PauseCue />
                </p>

                <p>
                  At Arise Funds, we believe the future requires a different framework.
                </p>

                <p className="text-xl font-bold text-cyan-300">
                  We call it Workforce Capital.
                </p>

                <p>
                  Workforce Capital is the investment framework that connects skills, infrastructure, institutions, technology, and productive employment into one coherent ecosystem.
                </p>

                <p>
                  It is not charity. It is not simply student loans. It is not only training. It is the financing of productive capacity.
                  <PauseCue />
                </p>

                <p>
                  This matters because the scale of the opportunity is enormous. IFC and World Bank research has estimated that by 2030, more than 230 million jobs in Sub-Saharan Africa will require digital skills, creating roughly 650 million training opportunities and an estimated 130 billion dollar investment opportunity in digital skilling.
                </p>

                <p>
                  That is not a small training gap. It is a continental investment challenge. It is also a generational opportunity.
                  <PauseCue text="applause - pause" />
                </p>

                <p>
                  For Nigeria, the implications are profound. If just 100,000 digitally skilled Nigerians earn an average of 5,000 dollars annually through local and international work, that represents half a billion dollars in annual economic activity.
                </p>

                <p>
                  Now imagine one million. Imagine the foreign exchange. Imagine the tax base. Imagine the innovation. Imagine the dignity restored to young people who no longer see talent as something they must leave Nigeria to express, but something they can use from Nigeria to serve the world.
                  <PauseCue />
                </p>

                <p>
                  That is why the real issue before us is not only how to train more people.
                </p>

                <p className="font-semibold text-white text-lg">
                  The more important question is: how do we finance employability at scale?
                  <PauseCue text="pause for emphasis" />
                </p>

                <p>
                  At Arise Funds, we see Workforce Capital as having five connected layers.
                </p>

                {/* The 5 Layers Grid */}
                <div className="grid gap-5 md:grid-cols-2 my-8">
                  <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <span className="text-xs font-mono text-cyan-400 font-bold">01</span>
                    <h4 className="text-white font-bold text-base mt-1 mb-2">Institutional Capital</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Training organisations must become stronger. They need governance, HR systems, SOPs, employer engagement, quality assurance, and modern curricula to assess whether learners are employable, not merely present.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <span className="text-xs font-mono text-cyan-400 font-bold">02</span>
                    <h4 className="text-white font-bold text-base mt-1 mb-2">Infrastructure Capital</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Underutilised buildings, dormant campuses, and old facilities can be revitalized with the right capital and operating model to become digital workforce hubs, BPO centers, and AI/Cybersecurity labs.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <span className="text-xs font-mono text-cyan-400 font-bold">03</span>
                    <h4 className="text-white font-bold text-base mt-1 mb-2">Human Capital</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Removing the basic micro-barriers for young people—laptops, internet access, certification fees, or stipends—serving as the bridge to a lifetime of productivity.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <span className="text-xs font-mono text-cyan-400 font-bold">04</span>
                    <h4 className="text-white font-bold text-base mt-1 mb-2">Employment Capital</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Creating productive environments where learners transition into real work, managed services, remote delivery, entrepreneurship, and global service pipelines.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-cyan-500/10 bg-cyan-950/5 max-w-xl">
                  <span className="text-xs font-mono text-cyan-400 font-bold">05</span>
                  <h4 className="text-white font-bold text-base mt-1 mb-2">Product Capital</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Developing countries should build our own platforms, products, and services. Platforms such as <strong>Aegis360AI</strong> demonstrate what emerges when local talent, cybersecurity, AI, and institutional investment unite around a real product.
                  </p>
                </div>

                <p className="pt-4">
                  The old model was simple: train, issue a certificate, and release the graduate.
                </p>

                <p className="font-semibold text-white">
                  The new model must be different: train, assess, employ, build, export, reinvest, and scale.
                  <PauseCue />
                </p>

                <p>
                  This is the model Arise Funds is working to support.
                </p>

                <p>
                  Through the Arise Funds Family Office, we have committed well over one million dollars in direct catalytic support, including physical capital, advisory capability, specialist talent, institutional development, and operational assistance.
                </p>

                <p>
                  Beyond that, more than four million dollars of digital architecture, platforms, systems, and enabling technology have been deployed across the broader ecosystem to support workforce transformation.
                </p>

                <p>
                  I share these figures not to boast, but to make one point clear.
                </p>

                <p className="text-lg font-bold text-white">
                  This is not theory. This is not another conference concept. This is early risk capital being deployed to demonstrate that workforce development can be structured, de-risked, and scaled.
                  <PauseCue />
                </p>

                <p>
                  But we are also clear-eyed about the size of the challenge. A family office can demonstrate a model. It cannot finance a continent alone.
                </p>

                <p>
                  That is why we need a <strong>blended capital architecture</strong>.
                </p>

                <p className="text-slate-300">
                  Government, development finance, commercial banks, pension funds, philanthropy, private companies, and training institutions all have a role. The point is not to force one type of capital to do everything, but to design a capital stack where each form of capital does what it is best suited to do.
                  <PauseCue />
                </p>

                <p>
                  This is also why de-risking is so important. Many financial institutions hesitate to finance talent or transformation because they don't fit neat traditional collateral models. But without those investments, the talent pipeline remains weak.
                </p>

                <p className="font-semibold text-white">
                  Catalytic capital exists to unlock what traditional capital cannot yet see.
                  <PauseCue text="applause - pause" />
                </p>

                <p>
                  One of the lessons we have learned is that training institutions must not depend only on tuition. If an institution earns only from training, its incentive is to enrol more people.
                </p>

                <p>
                  But if an institution earns from the success of the people it trains - through employment, outsourcing, and long-term value creation - then its incentives change. It begins to care deeply about outcomes and whether industry will consume the skills produced.
                </p>

                <p className="font-semibold text-cyan-300">
                  That is how education becomes productivity. That is how training becomes enterprise. That is how human potential becomes Workforce Capital.
                  <PauseCue />
                </p>

                <p>
                  This morning, I am pleased to share that Arise Funds is developing a fuller policy publication titled <em>Workforce Capital: A New Investment Framework for Digital Economic Growth</em>.
                </p>

                <p>
                  Today, I have shared only the core of that thinking. The publication will set out the framework in greater detail and will invite collaboration across government, development finance, philanthropy, commercial capital, family offices, training institutions, employers, and technology companies.
                </p>

                <p className="font-semibold text-white">
                  Our goal is simple: to help make workforce development investable. Because when workforce development becomes investable, talent becomes scalable. And when talent becomes scalable, economies become more competitive.
                  <PauseCue />
                </p>

                <p>
                  Nigeria, Africa, and developing economies everywhere have a unique, generation-defining opportunity. We need accelerated, practical, industry-aligned pathways that match the speed of technology and the urgency of unemployment.
                  <PauseCue />
                </p>

                <p>
                  Every generation is remembered by the infrastructure it built. Previous generations built roads, bridges, ports, and power stations.
                </p>

                <p className="text-xl font-bold text-white">
                  Our generation has the opportunity to build something just as important, and perhaps even more enduring. We can build Workforce Capital.
                  <PauseCue text="pause for applause" />
                </p>

                <p>
                  Because when nations invest in the productive capacity of their people, they create more than jobs. They create confidence, innovation, resilience, exports, and prosperity.
                  <PauseCue text="final pause" />
                </p>

                <p className="text-lg font-semibold text-slate-100">
                  The question before us is no longer whether Nigeria has talent. The world already knows that we do.
                </p>

                <p>
                  The question is whether we can finance that talent into productivity. Whether we can turn dormant infrastructure into productive hubs. Whether we can help institutions become globally competitive. Whether we can build products from our own capability.
                </p>

                <p className="font-bold text-white text-xl font-sans">
                  Whether we can make Workforce Capital one of the defining investment frameworks of Nigeria, Africa, and the developing world.
                </p>

                <p className="text-cyan-400 font-semibold">
                  At Arise Funds, we believe the answer is yes. And we invite all of you to help build it with us.
                </p>

                <p className="text-white font-bold pt-4 text-lg">
                  Thank you.
                </p>

                {/* Reference Notes Section */}
                <div className="mt-16 pt-8 border-t border-white/10 text-xs text-slate-400 space-y-4 font-sans">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs">
                    Reference Notes for Publication Team
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                      <span className="text-cyan-400 font-semibold block font-sans">IFC / World Bank estimate</span>
                      <p className="leading-relaxed font-sans">
                        Over 230 million jobs in Sub-Saharan Africa will require digital skills by 2030, creating ~650M training opportunities and a $130B investment opportunity.
                      </p>
                    </div>
                    <div className="space-y-1 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                      <span className="text-cyan-400 font-semibold block font-sans">Nigeria 3MTT</span>
                      <p className="leading-relaxed font-sans">
                        The 3 Million Technical Talent programme is positioned by the Federal Ministry of Communications to build the nation's technical backbone.
                      </p>
                    </div>
                    <div className="space-y-1 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                      <span className="text-cyan-400 font-semibold block font-sans">NELFUND</span>
                      <p className="leading-relaxed font-sans">
                        Interest-free student loan initiative for eligible Nigerian tertiary students to increase access to education.
                      </p>
                    </div>
                    <div className="space-y-1 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                      <span className="text-cyan-400 font-semibold block font-sans">Arise Funds investment figures</span>
                      <p className="leading-relaxed font-sans">
                        Arise Funds Family Office has committed over $1M in direct catalytic support, with over $4M in digital architecture and enabling technology deployed.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
