"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useAnimationMode } from "@/lib/animation-provider";
import { cn } from "@/lib/cn";

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function HeroReveal({ children, className, delay = 0 }: HeroRevealProps) {
  const { mode, reducedMotion } = useAnimationMode();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition =
    mode === "react-bits"
      ? { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }
      : { duration: 0.65, delay, ease: [0.2, 0.75, 0.25, 1] };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
