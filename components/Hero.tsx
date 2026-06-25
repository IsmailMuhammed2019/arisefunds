"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGlow, MagneticWrapper, ParallaxElement } from "./AdvancedEffects";
import { useModal } from "@/context/ModalContext";

const slides = [
  {
    tag: "Impact-led infrastructure",
    title: (
      <>
        Investing in the Infrastructure of <span className="text-cyan-400 font-bold">Work</span>
      </>
    ),
    description:
      "Arise Funds is an impact investment firm. We deploy blended capital and operational infrastructure into workforce development and technology companies – building the institutional systems that generate returns and create employment at scale.",
    image: "/slider1_image.png",
    imageAlt: "Investing in the Infrastructure of Work",
  },
  {
    tag: "Capital & Operations",
    title: (
      <>
        Upgrading <span className="text-cyan-400 font-bold">Work</span> Infrastructure
      </>
    ),
    description:
      "Arise Funds invests in workforce development and tech companies, providing capital and operational support to build scalable businesses that generate returns and create jobs.",
    image: "/slider2_image.png",
    imageAlt: "Upgrading Work Infrastructure",
  },
  {
    tag: "Sustainable Scaling",
    title: (
      <>
        Building a Stronger Work <span className="text-cyan-400 font-bold">Foundation</span>
      </>
    ),
    description:
      "Arise Funds is an impact investment firm that combines capital and operational expertise to drive growth in workforce development and tech companies. We build the institutional systems that generate returns and create employment at scale.",
    image: "/slider3_image.png",
    imageAlt: "Building a Stronger Work Foundation",
  },
  {
    tag: "Conference Event",
    title: (
      <>
        West Africa Convergence <span className="text-cyan-400 font-bold">Conference</span>
      </>
    ),
    description:
      "Arise Funds presented the Workforce Capital investment model at WACC, demonstrating how localized talent infrastructure acts as the primary engine for sustainable digital economic growth.",
    image: "/wacc_slider.jpg",
    imageAlt: "West Africa Convergence Conference",
    extraImages: [
      { src: "/News-Pics-WACC.png", alt: "WACC News Pictures" },
      { src: "/aisha-portrait.png", alt: "Aisha Saaka Lewis Portrait" },
    ],
  },
];

export default function Hero() {
  const { openContactModal } = useModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay: cycles slides every 3 seconds (3000ms)
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [nextSlide, isHovered]);

  // Framer Motion variants for slide text transitions
  const textVariants = {
    enter: {
      y: 20,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring" as const, stiffness: 200, damping: 25 },
        opacity: { duration: 0.5 },
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        y: { type: "spring" as const, stiffness: 200, damping: 25 },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-[#04122c] w-full h-[calc(100vh-80px)] min-h-[620px] flex items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Full-Bleed Background Image Slider */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].imageAlt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Dark Vignette / Gradient Overlays (Guarantees AAA accessibility contrast) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#04122c] via-[#04122c]/70 to-[#04122c]/10 z-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#04122c]/60 to-transparent z-10 pointer-events-none" />

      {/* 3. Subtle Parallax Decorative Lines layered over overlay but behind content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15 opacity-30">
        <ParallaxElement offset={60} className="absolute inset-0">
          <img
            src="/heroBacground.png"
            alt=""
            className="w-[380px] h-[380px] object-cover absolute left-[15%] top-1/4 -translate-x-1/2 pointer-events-none"
          />
        </ParallaxElement>
        <ParallaxElement offset={-30} className="absolute inset-0">
          <img
            src="/heroBackground2.png"
            alt=""
            className="w-[380px] h-[380px] object-cover absolute right-[10%] bottom-1/4 pointer-events-none"
          />
        </ParallaxElement>
      </div>

      {/* Background Glow effects */}
      <div className="absolute inset-0 z-12 pointer-events-none">
        <BackgroundGlow />
        <div className="absolute left-1/4 bottom-12 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-24 h-72 w-72 rounded-full bg-sky-400/8 blur-3xl" />
      </div>

      {/* 4. Bottom-Aligned Slide Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="w-full">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial="enter"
              animate="center"
              exit="exit"
              variants={textVariants}
              className={`grid gap-10 items-center w-full ${
                slides[currentIndex].extraImages
                  ? "lg:grid-cols-[1.1fr_0.9fr]"
                  : "max-w-3xl"
              }`}
            >
              {/* Left Column: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-300 shadow-lg shadow-cyan-500/10">
                  {slides[currentIndex].tag}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                  {slides[currentIndex].title}
                </h1>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                  {slides[currentIndex].description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4 pt-2">
                  <MagneticWrapper>
                    <button
                      onClick={openContactModal}
                      className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 cursor-pointer"
                    >
                      Get In Touch
                    </button>
                  </MagneticWrapper>
                  <span className="text-sm text-slate-300">
                    Schedule a conversation with the team.
                  </span>
                </div>
              </div>

              {/* Right Column: Extra Images (only if present) */}
              {slides[currentIndex].extraImages && (
                <div className="flex gap-4 md:gap-6 justify-center lg:justify-end items-center mt-6 lg:mt-0 relative select-none">
                  {/* First Card: News Pics WACC */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[-4deg] hover:rotate-0 hover:scale-105 transition-all duration-300 bg-slate-950">
                    <img
                      src={slides[currentIndex].extraImages![0].src}
                      alt={slides[currentIndex].extraImages![0].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Second Card: Aisha Portrait */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-300 -ml-12 sm:-ml-16 md:-ml-20 z-10 bg-slate-950">
                    <img
                      src={slides[currentIndex].extraImages![1].src}
                      alt={slides[currentIndex].extraImages![1].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 5. Minimal Slide Dashboard Indicators (Bottom-Right aligned) */}
      <div className="absolute bottom-16 right-6 sm:right-12 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentIndex
                ? "w-12 bg-cyan-400 opacity-100 shadow-[0_0_8px_#22d3ee]"
                : "w-6 bg-white/20 hover:bg-white/40 opacity-60 hover:opacity-100"
            }`}
          />
        ))}
      </div>

      {/* 6. Premium Glassmorphic Left/Right Navigation Arrows (Desktop overlay only) */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 hidden md:flex justify-between pointer-events-none z-30">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/25 hover:bg-black/45 border border-white/10 text-white/70 hover:text-cyan-400 hover:border-cyan-400/30 transition-all pointer-events-auto backdrop-blur-md cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/25 hover:bg-black/45 border border-white/10 text-white/70 hover:text-cyan-400 hover:border-cyan-400/30 transition-all pointer-events-auto backdrop-blur-md cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 7. Mobile Arrow Controls */}
      <div className="absolute bottom-6 left-6 z-30 flex gap-2 md:hidden">
        <button
          onClick={prevSlide}
          className="p-2.5 rounded-full bg-black/30 border border-white/10 text-white/70 hover:text-cyan-400 transition-all backdrop-blur-md cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2.5 rounded-full bg-black/30 border border-white/10 text-white/70 hover:text-cyan-400 transition-all backdrop-blur-md cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
