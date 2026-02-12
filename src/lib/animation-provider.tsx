"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

import type { AnimationMode } from "@/lib/types";

type AnimationContextValue = {
  mode: AnimationMode;
  reducedMotion: boolean;
};

const AnimationContext = createContext<AnimationContextValue>({
  mode: "react-bits",
  reducedMotion: false
});

async function tryDynamicImport(path: string): Promise<boolean> {
  try {
    const dynamicImporter = new Function("modulePath", "return import(modulePath);") as (
      modulePath: string
    ) => Promise<unknown>;
    await dynamicImporter(path);
    return true;
  } catch {
    return false;
  }
}

async function hasReactBitsRuntime(): Promise<boolean> {
  if (typeof window === "undefined") {
    return false;
  }

  if ((window as Window & { __REACT_BITS_AVAILABLE__?: boolean }).__REACT_BITS_AVAILABLE__) {
    return true;
  }

  const candidates = [
    "@/components/react-bits/runtime",
    "react-bits",
    "@react-bits/core",
    "reactbits"
  ];

  for (const candidate of candidates) {
    const imported = await tryDynamicImport(candidate);
    if (imported) {
      return true;
    }
  }

  return false;
}

export function AnimationModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AnimationMode>("react-bits");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    let active = true;
    hasReactBitsRuntime().then((available) => {
      if (!active) {
        return;
      }

      setMode(available ? "react-bits" : "framer-fallback");
    });

    return () => {
      active = false;
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const value = useMemo(
    () => ({
      mode,
      reducedMotion
    }),
    [mode, reducedMotion]
  );

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
}

export function useAnimationMode() {
  return useContext(AnimationContext);
}
