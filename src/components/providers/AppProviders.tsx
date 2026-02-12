"use client";

import type { ReactNode } from "react";

import { AnimationModeProvider } from "@/lib/animation-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return <AnimationModeProvider>{children}</AnimationModeProvider>;
}
