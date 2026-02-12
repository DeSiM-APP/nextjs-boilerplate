"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

import { useAnimationMode } from "@/lib/animation-provider";
import { cn } from "@/lib/cn";

type MagneticCTAProps = {
  href: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export function MagneticCTA({ href, className, children, target, rel }: MagneticCTAProps) {
  const { mode, reducedMotion } = useAnimationMode();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 280, damping: 26, mass: 0.35 });
  const ySpring = useSpring(y, { stiffness: 280, damping: 26, mass: 0.35 });

  const pull = mode === "react-bits" ? 0.1 : 0.06;

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={cn("cta-link", className)}
      style={reducedMotion ? undefined : { x: xSpring, y: ySpring }}
      whileHover={reducedMotion ? undefined : { scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={(event) => {
        if (reducedMotion) {
          return;
        }

        const bounds = event.currentTarget.getBoundingClientRect();
        const dx = event.clientX - (bounds.left + bounds.width / 2);
        const dy = event.clientY - (bounds.top + bounds.height / 2);
        x.set(dx * pull);
        y.set(dy * pull);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}
