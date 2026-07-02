"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import ContactSection from "@/components/contact";
import Footer from "@/components/Footer";
import AnimatedWrapper from "@/components/AnimatedWrapper";

const ARTICLES = [
  {
    tag: "Address",
    date: "Feb 2026",
    region: "Accra, Ghana",
    title: "Workforce Capital model presented at WACC 2026",
    desc: "Aisha Saaka Lewis addressed the West African Capital Conference, outlining Arise Funds' model for pre-financed training, employer integration, and structural risk-sharing. The keynote presented a shifting paradigm: treating talent development as an investable infrastructure asset class rather than public program spending.",
    link: "/wacc-speech",
    linkText: "Read Conference Address",
    isFeatured: true,
    image: "/News-Pics-WACC.png",
  },
  {
    tag: "Milestone",
    date: "Jan 2026",
    region: "Lagos, Nigeria",
    title: "First cohort placement begins in Lagos",
    desc: "Arise Funds portfolio company SBTS Group commences placement of the initial cybersecurity cohort into active enterprise SOC contracts. This milestone marks the first transition from assessment and competency-based training into income-generating tech roles within our verified employer partner network.",
    link: "#",
    linkText: "Read update",
    image: "/strategic.png",
  },
  {
    tag: "Footprint",
    date: "Dec 2025",
    region: "Freetown, Sierra Leone",
    title: "Operations expand to Freetown, Sierra Leone",
    desc: "Laying local infrastructure for the World Bank-supported digital economy pathways program in collaboration with SLDTP. This expansion sets the stage for scaling cybersecurity, software engineering, and digital support capacity in the country, building localized workforce hubs designed for export service pipelines.",
    link: "#",
    linkText: "Read update",
    image: "/map-footprint.png",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#04122c] text-slate-100 flex flex-col relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

      <NavBar />

      <main className="flex-grow max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative z-10 w-full">
        {/* Header */}
        <AnimatedWrapper type="fade-up" className="max-w-3xl mb-16">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-amber-300 mb-6">
            In the Field
          </div> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            News &amp; <span className="text-cyan-400 font-bold">Insights</span>
          </h1>
          <p className="text-lg text-slate-400 font-light mt-4 leading-relaxed max-w-2xl">
            Updates and research outcomes from Arise Funds portfolio deployments across West Africa and global markets.
          </p>
        </AnimatedWrapper>

        {/* Featured Article Card */}
        <div className="space-y-12">
          {ARTICLES.map((article, idx) => {
            return (
              <AnimatedWrapper
                key={idx}
                type="fade-up"
                delay={0.1 * idx}
                className={`bg-[#071428] hover:bg-[#0a1f3a] rounded-2xl overflow-hidden border border-cyan-900/20 shadow-2xl transition-all duration-350 flex flex-col ${article.isFeatured ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-stretch`}
              >
                {/* Photo Column */}
                <div className="lg:w-1/2 relative min-h-[260px] bg-[#0a1526] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover filter grayscale-[10%] contrast-[1.05] hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
                </div>

                {/* Content Column */}
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                      <span className="bg-cyan-950/40 border border-cyan-400/30 text-cyan-400 px-2.5 py-1 rounded font-semibold uppercase tracking-wider">
                        {article.tag}
                      </span>
                      <span className="text-slate-400 font-mono">{article.date}</span>
                      {article.region && (
                        <span className="text-slate-500 before:content-['·'] before:mr-2">
                          {article.region}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors leading-snug">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                      {article.desc}
                    </p>
                  </div>

                  <div>
                    <a
                      href={article.link}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm uppercase tracking-wider transition-colors border-b border-cyan-400/25 pb-1 cursor-pointer"
                    >
                      {article.linkText} &rarr;
                    </a>
                  </div>
                </div>
              </AnimatedWrapper>
            );
          })}
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
