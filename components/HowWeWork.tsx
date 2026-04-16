import React from "react";
import { Briefcase, Coins, Users } from "lucide-react";
import AnimatedWrapper from "./AnimatedWrapper";

const HowWeWork = () => {
  const steps = [
    {
      id: "01 — Capital",
      title: "Structured entry into blended capital vehicles.",
      description:
        "We structure and deploy blended capital — combining concessional funding, income-linked financing, and equity — calibrated to the institution's stage and risk profile. Capital is patient, structured around employer pipeline depth, not arbitrary timelines.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      iconBg: "bg-[#3b52f6]", // Indigo/Blue
    },
    {
      id: "02 — Infrastructure",
      title: "Operational build-out that creates investable companies.",
      description:
        "Alongside capital, we second talent directly into portfolio companies to build the institutional infrastructure that larger investors require. HR, governance, compliance, financial controls, and M&E systems — built from the ground up, to institutional standard.",
      icon: <Coins className="w-6 h-6 text-white" />,
      iconBg: "bg-[#f59e0b]", // Amber/Orange
    },
    {
      id: "03 — Scale",
      title: "Transition to institutional capital at scale.",
      description:
        "We position portfolio companies for long-term institutional capital — DFIs, development banks, sovereign wealth funds — by building the data, governance, and verified outcome infrastructure they require. We de-risk the entry. They provide the scale.",
      icon: <Users className="w-6 h-6 text-white" />,
      iconBg: "bg-[#22d3ee]", // Cyan/Light Blue
    },
  ];

  return (
    <section className="bg-[#011627] text-white py-24 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <AnimatedWrapper
        type="fade-up"
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          How We <span className="text-[#4fb3e8]">Work</span>
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed font-medium">
          We don&apos;t write checks and wait. We deploy capital and operational
          infrastructure together — because in workforce markets anywhere in the
          world, one without the other rarely works.
        </p>
      </AnimatedWrapper>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch">
        {steps.map((step, index) => (
          <AnimatedWrapper
            key={index}
            type="scale"
            delay={0.2 + index * 0.1}
            hover
            tap
            className="relative bg-[#1a93d9] rounded-[40px] px-8 pt-16 pb-12 flex flex-col items-center text-center shadow-2xl"
          >
            {/* Floating Icon Holder */}
            <div
              className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center border-8 border-[#011627] shadow-lg ${step.iconBg}`}
            >
              {step.icon}
            </div>

            {/* Content */}
            <span className="text-white/70 text-sm font-medium mb-4 block">
              {step.id}
            </span>
            <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight min-h-[64px]">
              {step.title}
            </h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              {step.description}
            </p>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
