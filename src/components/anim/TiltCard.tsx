"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

import { useAnimationMode } from "@/lib/animation-provider";
import { cn } from "@/lib/cn";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  onMouseMove?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
};

export function TiltCard({ children, className, onMouseMove, onMouseLeave, style }: TiltCardProps) {
  const { mode, reducedMotion } = useAnimationMode();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 180, damping: 20, mass: 0.25 });
  const springY = useSpring(rawY, { stiffness: 180, damping: 20, mass: 0.25 });
  const subtleGlow = useMotionTemplate`0 24px 40px -30px color-mix(in srgb, var(--color-brand) 26%, transparent)`;

  const multiplier = mode === "react-bits" ? 0.018 : 0.012;

  return (
    <motion.div
      className={cn(className)}
      onMouseMove={(event) => {
        onMouseMove?.(event);
        if (reducedMotion) {
          return;
        }

        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left - bounds.width / 2;
        const y = event.clientY - bounds.top - bounds.height / 2;
        rawX.set(x * multiplier);
        rawY.set(y * multiplier);
      }}
      onMouseLeave={(event) => {
        onMouseLeave?.(event);
        rawX.set(0);
        rawY.set(0);
      }}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      style={
        reducedMotion
          ? style
          : {
              ...style,
              x: springX,
              y: springY,
              boxShadow: subtleGlow
            }
      }
      transition={{ duration: 0.25, ease: [0.2, 0.75, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
