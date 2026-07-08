"use client";

import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import ContactSection from "@/components/contact";
import Footer from "@/components/Footer";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { MapPin, Calendar, ChevronDown, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    num: "01",
    title: "Institutional Capital",
    sub: "Governance, standards & quality systems",
    detail:
      "Training organizations must themselves become stronger. They need governance, human resource systems, standard operating procedures, employer engagement, quality assurance, and modern curricula. The measure of success is not enrollment — it is employability. The new model must be: train, assess, employ, build, export, reinvest, and scale.",
  },
  {
    num: "02",
    title: "Infrastructure Capital",
    sub: "Dormant assets → productive digital hubs",
    detail:
      "Across Nigeria and Africa there are underutilized buildings, dormant campuses, old training facilities, and abandoned spaces. With the right capital and operating model, these spaces can become digital workforce hubs, cybersecurity centers, AI laboratories, BPO facilities, and innovation campuses. The building is not the outcome — the productivity inside the building is.",
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
    sub: "Training centers become service pipelines",
    detail:
      "The most powerful workforce systems do not simply train people and send them away. They create productive environments where learners transition into real work — managed services, remote delivery, entrepreneurship, and export-oriented digital services. A training center can also become an employment center. A campus can become a production hub. A classroom can become the beginning of a global service pipeline.",
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Arise Funds WACC Speech.pdf";
    link.download = "Arise Funds WACC Speech.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* ── PRINT-ONLY FULL SPEECH DOCUMENT ── */}
      {/* This block is invisible on screen (display:none) but fully rendered when printing */}
      <div className="hidden print:block print:p-12 print:text-black print:bg-white">
        {/* Document Header */}
        <div className="border-b-2 border-slate-800 pb-6 mb-8">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Keynote Address</p>
              <h1 className="text-3xl font-extrabold uppercase tracking-tight text-slate-950 mt-1">Workforce Capital</h1>
              <p className="text-base text-slate-600 font-light mt-1">A New Investment Framework for Digital Economic Growth</p>
            </div>
            <div className="text-right text-[10px] text-slate-500 font-mono space-y-0.5">
              <p>Speaker: Aisha Saaka</p>
              <p>Publisher: Arise Funds</p>
              <p>Event: West Africa Convergence Conference</p>
              <p>Date: {today}</p>
              <p>Delivery time: 8–10 minutes</p>
            </div>
          </div>
        </div>

        {/* Full Speech Text */}
        <div className="space-y-4 text-sm text-slate-800 leading-relaxed">

          <p>Good morning, distinguished Ministers, policymakers, industry leaders, investors, development partners, technology decision makers, members of the private sector, ladies and gentlemen.</p>
          <p>It is a great honour to stand before you this morning at a time when Nigeria, West Africa, and the wider developing world are asking one of the most consequential questions of our generation:</p>
          <p className="font-bold text-slate-950">How do we build economies that are not only digital in ambition, but productive in reality?</p>
          <p>Across Nigeria today, we are speaking with increasing confidence about artificial intelligence, cybersecurity, cloud computing, digital infrastructure, innovation, entrepreneurship, and global services.</p>
          <p>These are the right conversations. They reflect the urgency of the moment and the seriousness of the opportunity before us.</p>
          <p>We should also acknowledge that the Federal Government of Nigeria has begun to put important building blocks in place. Initiatives such as the 3 Million Technical Talent program, the expanding digital economy agenda, and student financing efforts such as NELFUND demonstrate that skills, access, and youth opportunity are now part of the national development conversation.</p>
          <p>These are important steps. They should be recognized. They should be strengthened. And they should be connected to a wider system that produces measurable employment, entrepreneurship, and export outcomes.</p>
          <p>This morning, I would like to focus on one idea that sits at the heart of that system.</p>
          <p className="text-2xl font-extrabold text-slate-950 text-center my-4 border-y border-slate-300 py-4">Talent is infrastructure.</p>
          <p>In the industrial age, nations competed through roads, ports, power stations, factories, and railways.</p>
          <p className="font-semibold">In the digital age, nations compete through the productive capacity of their people.</p>
          <p>A cybersecurity analyst protecting critical systems is infrastructure. A software engineer building products for global markets is infrastructure. An AI-enabled worker improving productivity is infrastructure. A contact center professional serving international clients from Lagos, Abuja, Enugu, Freetown, Accra, or Monrovia is infrastructure.</p>
          <p>If Nigeria is to compete in the next economy, we must finance human capacity with the same seriousness with which we finance physical infrastructure.</p>
          <p>But let us also face a practical truth.</p>
          <p className="font-semibold">The challenge is not that Nigeria lacks talent. The challenge is not that Africa lacks ambition. The challenge is that workforce development has not yet been properly structured as an investable asset class.</p>
          <p>Too often, we finance education without financing employability. We finance buildings without financing institutional transformation. We finance technology without financing the people capable of using it productively. We finance training without financing the pathway to work.</p>
          <p className="font-bold">And then we are surprised when training alone does not create jobs.</p>
          <p>At Arise Funds, we believe the future requires a different framework. We call it Workforce Capital.</p>
          <p>Workforce Capital is the investment framework that connects skills, infrastructure, institutions, technology, and productive employment into one coherent ecosystem. It is not charity. It is not simply student loans. It is not only training. It is the financing of productive capacity.</p>
          <p>This matters because the scale of the opportunity is enormous. IFC and World Bank research has estimated that by 2030, more than 230 million jobs in Sub-Saharan Africa will require digital skills, creating roughly 650 million training opportunities and an estimated 130 billion dollar investment opportunity in digital skilling.</p>
          <p>That is not a small training gap. That is a continental investment challenge. It is also a generational opportunity.</p>
          <p>For Nigeria, the implications are profound. If just 100,000 digitally skilled Nigerians earn an average of 5,000 dollars annually through local and international work, that represents half a billion dollars in annual economic activity.</p>
          <p>Now imagine one million. Imagine the foreign exchange. Imagine the tax base. Imagine the innovation.</p>
          <p className="font-semibold">Imagine the dignity restored to young people who no longer see talent as something they must leave Nigeria to express, but something they can use from Nigeria to serve the world.</p>
          <p>That is why the real issue before us is not only how to train more people. The more important question is: <strong>How do we finance employability at scale?</strong></p>
          <p>At Arise Funds, we see Workforce Capital as having five connected layers.</p>
          <p><strong>First, institutional capital.</strong> Training organizations must themselves become stronger. They need governance. They need human resource systems. They need standard operating procedures. They need employer engagement. They need quality assurance. They need modern curricula. They need the capacity to assess whether learners are actually employable, not merely whether they attended class. The old model was simple: train, issue a certificate, and release the graduate. The new model must be different: train, assess, employ, build, export, reinvest, and scale.</p>
          <p><strong>Second, infrastructure capital.</strong> Across Nigeria and Africa, there are underutilized buildings, dormant campuses, old training facilities, and abandoned spaces that may not look immediately bankable to a traditional lender. But with the right capital and the right operating model, these spaces can become digital workforce hubs, cybersecurity centers, AI laboratories, BPO facilities, remote-work centers, and innovation campuses. The building is not the outcome. The productivity inside the building is the outcome.</p>
          <p><strong>Third, human capital.</strong> For many young people, the gap between unemployment and opportunity may be a laptop, reliable connectivity, a certification exam, a stipend, or the chance to learn in an environment that looks like the workplace they are being prepared for. To a large institution, that may look like a small request. To that young person, it may be the bridge to a lifetime of productivity.</p>
          <p><strong>Fourth, employment capital.</strong> The most powerful workforce systems do not simply train people and send them away. They create productive environments where learners can transition into real work, managed services, remote delivery, entrepreneurship, and export-oriented digital services. A training center can also become an employment center. A campus can become a production hub. A classroom can become the beginning of a global service pipeline.</p>
          <p><strong>Fifth, product capital.</strong> This is where the conversation becomes even more exciting. Developing countries should not only train workers for global companies. We should also build our own platforms, our own products, our own services, and our own intellectual property. This is why, within the broader ecosystem, platforms such as Aegis360AI matter. Aegis360AI is an example of what can emerge when Nigerian talent, global collaboration, cybersecurity capability, AI thinking, and institutional investment come together around a real product. Nigeria can be globally conscious and locally grounded at the same time.</p>
          <p>This is the model Arise Funds is working to support. Through the Arise Funds Family Office, we have committed well over one million dollars in direct catalytic support. Beyond that, more than four million dollars of digital architecture, platforms, systems, and enabling technology have been deployed across the broader ecosystem to support workforce transformation.</p>
          <p className="font-bold">This is not theory. This is not another conference concept. This is early risk capital being deployed to demonstrate that workforce development can be structured, de-risked, and scaled.</p>
          <p>But we are also clear-eyed about the size of the challenge. A family office can demonstrate a model. It cannot finance a continent alone. That is why we need a blended capital architecture.</p>
          <p>Government has a role. Development finance has a role. Commercial banks have a role. Pension funds have a role. Philanthropy and grant makers have a role. Private companies have a role. Training institutions and employers have a role.</p>
          <p>The point is not to force one type of capital to do everything. The point is to design a capital stack where each form of capital does what it is best suited to do.</p>
          <p>Many financial institutions hesitate to finance talent because the repayment path is not always immediate. But without those investments, the talent pipeline remains weak. Without those investments, infrastructure remains idle. Without those investments, institutions remain unable to compete globally. <strong>Catalytic capital exists to unlock what traditional capital cannot yet see.</strong></p>
          <p>One of the lessons we have learned is that training institutions must not depend only on tuition. If an institution earns from the success of the people it trains — through employment services, managed services, product development, outsourcing, entrepreneurship support, and long-term value creation — then its incentives change. It begins to care deeply about outcomes. That is how education becomes productivity. That is how training becomes enterprise. That is how human potential becomes Workforce Capital.</p>
          <p>This morning, I am pleased to share that Arise Funds is developing a fuller policy publication titled Workforce Capital: A New Investment Framework for Digital Economic Growth. The publication will set out the framework in greater detail and will invite collaboration across government, development finance, philanthropy, commercial capital, family offices, training institutions, employers, and technology companies.</p>
          <p className="font-bold">Our goal is simple: to help make workforce development investable. Because when workforce development becomes investable, talent becomes scalable. And when talent becomes scalable, economies become more competitive.</p>
          <p>Nigeria has a unique opportunity. Africa has a unique opportunity. Developing economies everywhere have a unique opportunity. Every generation is remembered by the infrastructure it built. Our generation has the opportunity to build something just as important, and perhaps even more enduring. <strong>We can build Workforce Capital.</strong></p>
          <p>Because when nations invest in the productive capacity of their people, they create more than jobs. They create confidence. They create innovation. They create resilience. They create exports. They create prosperity. And they build economies capable of competing for generations to come.</p>
          <p>The question before us is no longer whether Nigeria has talent. The world already knows that we do. The question is whether we can finance that talent into productivity. Whether we can make Workforce Capital one of the defining investment frameworks of Nigeria, Africa, and the developing world.</p>
          <p className="font-bold">At Arise Funds, we believe the answer is yes. And we invite all of you to help build it with us.</p>
          <p className="font-extrabold text-lg mt-4">Thank you.</p>

          {/* Reference Notes */}
          <div className="mt-10 pt-6 border-t border-slate-300">
            <p className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">Reference Notes</p>
            <div className="space-y-2 text-[10px] text-slate-500">
              <p><strong className="text-slate-700">IFC / World Bank:</strong> More than 230 million jobs in Sub-Saharan Africa will require digital skills by 2030, creating ~650 million training opportunities and a $130B investment opportunity in digital skilling.</p>
              <p><strong className="text-slate-700">Nigeria 3MTT:</strong> The 3 Million Technical Talent program is positioned by the Federal Ministry of Communications, Innovation and Digital Economy / NITDA to build Nigeria's technical talent backbone.</p>
              <p><strong className="text-slate-700">NELFUND:</strong> NELFUND provides interest-free loans for eligible Nigerian students.</p>
              <p><strong className="text-slate-700">Arise Funds Figures:</strong> Arise Funds Family Office has committed well over $1M in direct catalytic support, with more than $4M in digital architecture and enabling assets deployed across the broader ecosystem.</p>
              <p className="mt-2 italic">Workforce Capital: A New Investment Framework for Digital Economic Growth | Arise Funds</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCREEN-ONLY PAGE LAYOUT ── (hidden when printing) */}
      <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col relative overflow-hidden print:hidden">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

        <NavBar />

        <main className="flex-grow max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative z-10">
          {/* Tag + Download Button Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <AnimatedWrapper type="fade-up">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 shadow-lg shadow-cyan-500/10">
                WACC Panel Address
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" delay={0.15}>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download Speech (PDF)
              </button>
            </AnimatedWrapper>
          </div>

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
                  <img src="/aisha-portrait.png" alt="Aisha Saaka Lewis" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
                  <img src="/News-Pics-WACC.png" alt="WACC Conference" className="w-full h-full object-cover" />
                </div>
              </AnimatedWrapper>

              {/* Metadata Card */}
              <AnimatedWrapper type="fade-up" delay={0.3} className="p-6 rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-md space-y-5">
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
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="w-5 h-5 text-cyan-400/60 shrink-0 mt-0.5" />
                  <span>West Africa Convergence Conference</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <Calendar className="w-5 h-5 text-cyan-400/60 shrink-0 mt-0.5" />
                  <div>
                    <p>{today}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Read time: 8 – 10 minutes</p>
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Core Thesis Card */}
              <AnimatedWrapper type="fade-up" delay={0.4} className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/20">
                <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold select-none">Core Thesis</p>
                <p className="text-white font-bold text-lg leading-snug">&ldquo;Talent is infrastructure.&rdquo;</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Nations that finance human capacity the way they finance physical infrastructure will define the next era of competitiveness.
                </p>
              </AnimatedWrapper>
            </div>

            {/* Right Column: Stats + Accordion + Quote */}
            <div className="space-y-10">
              {/* Stats */}
              <div className="space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 font-semibold">The Opportunity</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {STATS.map((s, i) => (
                    <AnimatedWrapper key={i} type="fade-up" delay={0.2 + i * 0.08} className="p-5 rounded-2xl border border-white/5 bg-slate-950/30 backdrop-blur-sm space-y-2">
                      <p className="text-3xl font-extrabold text-cyan-300 tracking-tight">{s.value}</p>
                      <p className="text-xs text-slate-350 leading-normal">{s.label}</p>
                      <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-1">{s.source}</p>
                    </AnimatedWrapper>
                  ))}
                </div>
              </div>

              {/* Accordion */}
              <div className="space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 font-semibold">The Five Layers of Workforce Capital</p>
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
                          <span className={`text-xs font-mono font-bold w-6 shrink-0 transition-colors ${isOpen ? "text-cyan-400" : "text-cyan-500/60"}`}>
                            {p.num}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className={`text-base font-semibold transition-colors ${isOpen ? "text-white" : "text-slate-200"}`}>{p.title}</p>
                            {!isOpen && <p className="text-xs text-slate-500 truncate mt-0.5">{p.sub}</p>}
                          </div>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
                            <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-cyan-400" : "text-white/20"}`} />
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
                                <p className="text-xs text-cyan-400 uppercase tracking-widest font-mono font-semibold mb-3">{p.sub}</p>
                                <p className="text-sm text-slate-300 leading-relaxed">{p.detail}</p>
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
              <AnimatedWrapper type="fade-up" delay={0.5} className="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-950/50 to-transparent backdrop-blur-sm">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 mb-3 font-semibold">The Call</p>
                <p className="text-base text-slate-200 leading-relaxed font-light italic">
                  &ldquo;When workforce development becomes investable, talent becomes scalable. And when talent becomes scalable, economies become more competitive. At Arise Funds, we believe the answer is yes — and we invite all of you to help build it with us.&rdquo;
                </p>
                <p className="text-xs text-slate-500 mt-4 font-mono">— Aisha Saaka, Arise Funds</p>
              </AnimatedWrapper>
            </div>
          </div>
        </main>

        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
