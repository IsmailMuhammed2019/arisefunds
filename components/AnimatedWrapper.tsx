"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?:
    | "fade-up"
    | "fade-in"
    | "scale"
    | "slide-in"
    | "slide-right"
    | "perspective-up";
  delay?: number;
  hover?: boolean;
  tap?: boolean;
  className?: string;
}

export default function AnimatedWrapper({
  children,
  type = "fade-up",
  delay = 0,
  hover = false,
  tap = false,
  className,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  // 1. Entrance & Scroll Animations (Subtle 300-600ms)
  const variants = {
    hidden: {
      opacity: 0,
      y: type === "fade-up" ? 20 : 0,
      x: type === "slide-in" ? -20 : type === "slide-right" ? 20 : 0,
      scale: type === "scale" ? 0.9 : 1,
      rotateX: type === "perspective-up" ? -20 : 0,
      perspective: 1000,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] as any, // Custom "Expo" easing for smoother deceleration
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      // 2. Hover & 8. Performance-Friendly Enhancements (GPU accelerated by default in Framer)
      whileHover={
        hover && !shouldReduceMotion
          ? {
              y: -8,
              scale: 1.03,
              rotateY: 2,
              rotateX: -2,
              transition: { duration: 0.2 },
            }
          : {}
      }
      // 3. Micro-Interactions (Click/Tap)
      whileTap={tap && !shouldReduceMotion ? { scale: 0.98 } : {}}
      className={`gpu-accelerated ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

// 9. Typography Animations (Reveal effect)
export const AnimatedText = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-hidden flex flex-wrap"
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: "120%", opacity: 0, rotate: 5 },
            visible: { y: 0, opacity: 1, rotate: 0 },
          }}
          transition={{
            delay: i * 0.08,
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1] as any,
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
