"use client";

import { motion } from "framer-motion";
import { Children, type ReactNode } from "react";

import { useAnimationMode } from "@/lib/animation-provider";
import { cn } from "@/lib/cn";

type SectionStaggerProps = {
  children: ReactNode;
  className?: string;
};

export function SectionStagger({ children, className }: SectionStaggerProps) {
  const { mode, reducedMotion } = useAnimationMode();
  const items = Children.toArray(children);

  if (reducedMotion) {
    return <div className={className}>{items}</div>;
  }

  const staggerChildren = mode === "react-bits" ? 0.12 : 0.08;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren
          }
        }
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 26 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: mode === "react-bits" ? 0.6 : 0.45,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
