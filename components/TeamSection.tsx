import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamSection = () => {
  return (
    <div className="bg-[#011627] text-white min-h-screen py-16 px-8 md:px-24 font-sans selection:bg-[#4fb3e8]/30">
      {/* Decorative Top Left Topography (Simplified) */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full stroke-white fill-none"
        >
          <path d="M0,20 Q50,0 100,20 T150,20" strokeWidth="0.5" />
          <path d="M0,30 Q50,10 100,30 T150,30" strokeWidth="0.5" />
          <path d="M0,40 Q50,20 100,40 T150,40" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Header */}
      <AnimatedWrapper
        type="fade-up"
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          The <span className="text-[#4fb3e8]">Team</span>
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          The Arise Funds team brings together impact investment strategy,
          federal systems expertise, and 30+ years of human capital leadership.
        </p>
      </AnimatedWrapper>

      <main className="max-w-6xl mx-auto space-y-24">
        {/* CEO SECTION: AISHA */}
        <AnimatedWrapper type="fade-up" delay={0.2}>
          <section className="flex flex-col md:flex-row items-start gap-10">
            {/* Image Container: Reduced width to 1/3 for a smaller profile look */}
            <div className="w-full md:w-4/12 flex justify-start">
              <img
                src="/aisha-portrait.png"
                alt="Aisha Saaka Lewis"
                /* Removed 'blur' and 'shadow-2xl'. Added 'w-full' to fit container. */
                className="rounded-2xl w-full h-80 object-cover aspect-[4/5]"
              />
            </div>

            {/* Text Content: Expanded to 8/12 to fill the remaining space */}
            <div className="w-full md:w-8/12 pt-1">
              <h2 className="text-3xl font-bold">Aisha Saaka Lewis</h2>
              <p className="text-slate-400 font-medium mb-6 uppercase tracking-wider text-sm">
                Chief Executive Officer
              </p>

              <div className="text-slate-300 space-y-4 leading-relaxed text-base">
                <p>
                  Most impact investors come from finance. Aisha Saaka Lewis
                  comes from AI. As a Data & AI Strategist at Accenture Federal
                  Services — where she led analytics transformation for public
                  sector clients including enterprise reporting oversight for
                  PEPFAR — and a management consultant at Booz Allen Hamilton,
                  she spent her career applying technology and data to the
                  hardest problems in government and global development.
                </p>
                <p>
                  What she kept seeing was a gap: the infrastructure to connect
                  capital, technology, and workforce development existed in
                  pieces but never as a coherent investment thesis.
                </p>
              </div>

              <div className="flex gap-5 mt-6 text-slate-400">
                {/* <AnimatedWrapper hover tap type="scale" delay={0.3}>
                  <FaFacebookF className="hover:text-[#4fb3e8] cursor-pointer transition-colors" />
                </AnimatedWrapper> */}
                <AnimatedWrapper hover tap type="scale" delay={0.35}>
                  <FaLinkedinIn className="hover:text-[#4fb3e8] cursor-pointer transition-colors" />
                </AnimatedWrapper>
                {/* <AnimatedWrapper hover tap type="scale" delay={0.4}>
                  <FaTwitter className="hover:text-[#4fb3e8] cursor-pointer transition-colors" />
                </AnimatedWrapper> */}
              </div>
            </div>
          </section>
        </AnimatedWrapper>

        {/* SECOND ROW: LATONYA */}
        <AnimatedWrapper type="fade-up" delay={0.4}>
          <section className="flex flex-col sm:flex-row gap-6 pt-12 border-t border-white/5">
            <div className="flex-1 order-2 sm:order-1">
              <h2 className="text-2xl font-bold">LaTonya Blakes</h2>
              <p className="text-slate-400 font-medium mb-4 text-xs uppercase tracking-widest">
                Vice President, Human Resources
              </p>
              <div className="text-slate-300 text-sm space-y-3 leading-relaxed">
                <p>
                  When Arise Funds deploys capital into a portfolio company,
                  LaTonya Blakes is the person who goes in to build it.
                  Seconded from Arise Funds to SBTS Group LLC, she leads the
                  HR infrastructure, compliance frameworks, talent systems,
                  and organizational design.
                </p>
                <p>
                  Her career spans more than three decades in human capital
                  leadership, including a decade at Booz Allen Hamilton where
                  she directed HR for the National Defense University.
                </p>
              </div>
              <div className="flex gap-4 mt-4 text-slate-400">
                <AnimatedWrapper hover tap type="scale" delay={0.55}>
                  <FaLinkedinIn className="hover:text-white cursor-pointer transition-colors" />
                </AnimatedWrapper>
              </div>
            </div>
            <div className="w-full sm:w-1/3 order-1 sm:order-2">
              <img
                src="/latonya.png"
                alt="LaTonya"
                className="rounded-xl w-full aspect-square object-cover"
              />
            </div>
          </section>
        </AnimatedWrapper>

        {/* ADVISORY HEADER */}
        <AnimatedWrapper
          type="fade-up"
          className="text-center max-w-3xl mx-auto pt-24 mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-[#4fb3e8]">Advisory</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Our advisors provide strategic guidance and deep industry expertise to 
            support Arise Funds' mission and global impact initiatives.
          </p>
        </AnimatedWrapper>

        {/* ADVISORY SECTION: LAURA */}
        <AnimatedWrapper type="fade-up" delay={0.2}>
          <section className="flex flex-col sm:flex-row gap-6 pt-12 border-t border-white/5">
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Laura C. Rudert</h2>
              <p className="text-slate-400 font-medium mb-4 text-xs uppercase tracking-widest">
                Global Strategy & Delivery Leader
              </p>
              <div className="text-slate-300 text-sm space-y-3 leading-relaxed">
                <p>
                  Laura C. Rudert has spent more than 20 years deploying over
                  $4 billion across climate, infrastructure, and development
                  programs in 30+ countries. She led a $525M compact in Côte
                  d&apos;Ivoire and helped design Power Africa.
                </p>
                <p>
                  At the Bill & Melinda Gates Foundation, she served as Deputy
                  Director of Strategy & Management. An HKS MPP alumna — she
                  has operated on both sides of the capital table.
                </p>
              </div>
              <div className="flex gap-4 mt-4 text-slate-400">
                <AnimatedWrapper hover tap type="scale" delay={0.35}>
                  <FaLinkedinIn className="hover:text-white cursor-pointer transition-colors" />
                </AnimatedWrapper>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <img
                src="/laura.png"
                alt="Laura"
                className="rounded-xl w-full aspect-square object-cover"
              />
            </div>
          </section>
        </AnimatedWrapper>

      </main>
    </div>
  );
};

export default TeamSection;
