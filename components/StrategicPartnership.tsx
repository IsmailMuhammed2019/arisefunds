"use client";

import { ShieldCheck, Code2, Database, Play } from "lucide-react";
import AnimatedWrapper from "./AnimatedWrapper";
import { ParallaxImage } from "./AdvancedEffects";
import VideoModal from "./VideoModal";
import { useState } from "react";

const StrategicPartnerships = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const categories = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      iconBg: "bg-[#f59e0b]", // Amber/Orange
      title: "Cybersecurity · SOC Operations",
      description: "Replace with: mixed-ethnicity SOC team at monitors",
      subtext: 'Suggested search: "diverse cybersecurity analysts SOC"',
    },
    {
      icon: <Code2 className="w-5 h-5 text-white" />,
      iconBg: "bg-[#22c55e]", // Green",
      title: "Software Development · Global Teams",
      description: "Replace with: South/East Asian professionals, mixed group",
      subtext:
        'Suggested search: "diverse international tech team collaboration"',
    },
    {
      icon: <Database className="w-5 h-5 text-white" />,
      iconBg: "bg-[#0ea5e9]", // Blue
      title: "Data Science · AI & Machine Learning",
      description:
        "Replace with: Latina/South Asian woman presenting, mixed audience",
      subtext: 'Suggested search: "woman presenting analytics diverse team"',
    },
  ];

  return (
    <section className="bg-[#011627] text-white py-20 px-6 md:px-20 font-sans relative overflow-hidden">
      {/* Topographic Background Detail (Top-Left) */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full stroke-white fill-none"
        >
          <path d="M0,20 Q50,0 100,20 T150,20" strokeWidth="0.5" />
          <path d="M0,35 Q50,15 100,35 T150,35" strokeWidth="0.5" />
          <path d="M0,50 Q50,30 100,50 T150,50" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Header */}
      <AnimatedWrapper
        type="fade-up"
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Strategic <span className="text-[#4FB3E8]">Partnerships</span>
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          We collaborate with leading institutions to create a comprehensive
          <br className="hidden md:block" />
          ecosystem for student success
        </p>
      </AnimatedWrapper>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
        {/* Left: Video Placeholder with Play Button */}
        <AnimatedWrapper
          type="slide-in"
          delay={0.2}
          className="w-full lg:w-1/2 relative group"
        >
          <div className="relative rounded-[40px] overflow-hidden aspect-video shadow-2xl overflow-hidden">
            <ParallaxImage
              src="/classroom-placeholder.jpg" // The computer lab image
              alt="Arise Funds Lab"
              className="aspect-video"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Central Play Button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-10"
            >
              <Play className="w-8 h-8 text-[#011627] fill-current ml-1" />
            </button>
          </div>
        </AnimatedWrapper>

        {/* Right: Text and Features */}
        <div className="w-full lg:w-1/2 space-y-8">
          <AnimatedWrapper type="fade-up" delay={0.4}>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Where talent meets <br />
                <span className="text-[#4FB3E8]">work infrastructure</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                From security operations centers to data analytics labs — across
                Nigeria, Sierra Leone, the United States and beyond — Arise
                Funds portfolio companies build the environments where real
                careers begin.
              </p>
            </div>
          </AnimatedWrapper>

          {/* Icon List */}
          <div className="space-y-6 pt-4">
            {categories.map((item, idx) => (
              <AnimatedWrapper
                key={idx}
                type="fade-up"
                delay={0.5 + idx * 0.1}
                hover
                tap
                className="flex items-start gap-4"
              >
                <div
                  className={`${item.iconBg} p-2.5 rounded-full flex-shrink-0 shadow-lg`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    {item.description}
                  </p>
                  <p className="text-slate-500 text-[10px] italic mt-0.5">
                    {item.subtext}
                  </p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/strategic-partnerships.mp4"
      />
    </section>
  );
};

export default StrategicPartnerships;
