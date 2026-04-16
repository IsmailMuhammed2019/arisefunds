"use client";

import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import { ParallaxImage } from "./AdvancedEffects";

export default function PartnerTop() {
  return (
    <section className="w-full bg-[#042133] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <AnimatedWrapper type="fade-up" className="text-center mb-30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            For <span className="text-blue-400">Investors</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            We bring Capital Infrastructure, and the institutional readiness,
            Our partners bring the scale
          </p>
        </AnimatedWrapper>

        {/* Investment Opportunity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <AnimatedWrapper type="slide-in" delay={0.2} className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              The investment <span className="text-blue-400">opportunity.</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-base md:text-lg leading-relaxed">
                Arise Funds is actively deploying blended capital into workforce
                development and technology companies globally. If you are a DFI,
                impact foundation, family office, or government body with a
                mandate in workforce, technology, or economic development - this
                is what engagement looks like.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We invest in early-stage workforce development operators and
                technology platforms in high-growth markets - typically at
                pre-institutional-capital stage, with active operations and an
                employer-integrated model.
              </p>
            </div>
            <AnimatedWrapper hover tap type="scale" delay={0.4}>
              <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 md:py-4 md:px-8 transition-colors duration-200 text-sm md:text-base cursor-pointer">
                Request the Investor Brief
              </button>
            </AnimatedWrapper>
          </AnimatedWrapper>

          {/* Right side - Image */}
          <AnimatedWrapper
            type="fade-in"
            delay={0.5}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className=" rounded-2xl p-2 shadow-2xl">
                <div className="rounded-xl overflow-hidden">
                  <ParallaxImage
                    src="/partner-images/image1.jpg"
                    alt="Investment opportunity handshake with cityscape"
                    className="aspect-square lg:aspect-video"
                  />
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
