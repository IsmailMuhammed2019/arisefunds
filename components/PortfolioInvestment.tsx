"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const outcomes = [
  { icon: "/young.png", text: "50K Youth Employment Target" },
  { icon: "/countries.png", text: "8 Countries – Current Footprint" },
  { icon: "/stage.png", text: "7 Stage Talent Economy Flywheel" },
  { icon: "/sdk.png", text: "50% young women target – Every Cohort" },
];

export default function PortfolioInvestment() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused);
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch((err) => console.log(err));
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <section className="py-24 bg-[#03112c] text-white relative overflow-hidden">
      {/* Decorative vertical lines on the right (matching screenshot detail) */}
      <div className="absolute top-0 bottom-0 right-[22%] w-[1px] border-r border-dashed border-cyan-500/10 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <AnimatedWrapper type="fade-up" className="text-center mb-16 max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            First Portfolio <span className="text-cyan-400 font-semibold">Investment</span>
          </h2>
          <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Arise Funds builds the employer network that hires ICBM graduates.
          </p>
        </AnimatedWrapper>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center relative z-10">
          {/* Left Column: Bio Details and Outcomes */}
          <div className="space-y-6">
            <AnimatedWrapper type="fade-up" delay={0.2}>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                The model, <span className="text-cyan-400">proven.</span>
              </h3>
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" delay={0.3}>
              <div className="space-y-6 text-slate-300 text-base leading-relaxed mb-8 font-light">
                <p>
                  SBTS Group LLC is the first company financed and operationally
                  supported by Arise Funds &mdash; and the live demonstration that
                  Workforce Infrastructure Investing works. In January 2026, the first
                  cohort of ICBM graduates began earning income in verified digital
                  economy roles.
                </p>
              </div>
            </AnimatedWrapper>

            {/* Outcomes Row Icons */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {outcomes.map((item, idx) => (
                <AnimatedWrapper
                  key={idx}
                  type="fade-up"
                  delay={0.4 + idx * 0.1}
                  hover
                  tap
                  className="flex items-center gap-3.5"
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="h-10 w-10 object-contain flex-shrink-0"
                  />
                  <span className="text-slate-300 text-sm font-medium leading-snug">
                    {item.text}
                  </span>
                </AnimatedWrapper>
              ))}
            </div>
          </div>

          {/* Right Column: HTML5 Video Player Container */}
          <AnimatedWrapper type="scale" delay={0.4} className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)] shadow-cyan-950/20 group">
              <video
                ref={videoRef}
                src="/test.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-300 z-10 animate-fade-in"
                >
                  <button className="h-20 w-20 flex items-center justify-center rounded-full bg-cyan-500/80 hover:bg-cyan-400 text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 border border-white/20 backdrop-blur-sm">
                    <svg
                      className="w-8 h-8 fill-current text-white translate-x-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
