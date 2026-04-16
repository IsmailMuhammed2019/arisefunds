"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { ReactNode, useRef } from "react";

/**
 * Parallax Wrapper for general elements
 */
export function ParallaxElement({
  children,
  offset = 50,
  className = "",
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * 4. Scroll-Based Effects (Parallax for images)
 * 7. Advanced / "Wow Factor"
 */
export function ParallaxImage({
  src,
  alt,
  className = "h-[400px]",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className={`relative overflow-hidden w-full rounded-xl ${className}`}>
      <motion.img
        style={{ y, scale: 1.2 }}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

/**
 * Magnetic Wrapper: Makes CTAs feel intelligent and reactive
 */
export function MagneticWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: dx, y: dy }}
    >
      {children}
    </motion.div>
  );
}

/**
 * 10. Optional (Background Glow)
 * High impact, low performance cost using CSS gradients.
 */
export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-20 blur-[120px] bg-blue-500 animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] rounded-full opacity-10 blur-[100px] bg-purple-500" />
    </div>
  );
}
