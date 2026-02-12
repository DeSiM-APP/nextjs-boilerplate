"use client";

import { useEffect, useState } from "react";

import { THEMES } from "@/lib/design-tokens";
import { cn } from "@/lib/cn";
import { getTheme, setTheme } from "@/lib/theme";
import type { ThemeId } from "@/lib/types";

const themeLabel: Record<ThemeId, string> = {
  "atlas-light": "Atlas",
  "midnight-route": "Midnight",
  "sunrise-postcard": "Sunrise"
};

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("atlas-light");

  useEffect(() => {
    const current = getTheme(document.documentElement.dataset.theme);
    setActiveTheme(current);
  }, []);

  return (
    <div className="inline-flex items-center rounded-pill border p-1 backdrop-blur-sm" style={{ borderColor: "var(--color-border)", background: "color-mix(in srgb, var(--color-surface) 86%, transparent)" }}>
      {THEMES.map((theme) => (
        <button
          key={theme}
          type="button"
          onClick={() => {
            setActiveTheme(theme);
            setTheme(theme);
          }}
          className={cn(
            "w-[6.25rem] rounded-pill px-3 py-1 text-center text-xs tablet:text-sm font-medium transition-all duration-fast ease-standard",
            activeTheme === theme ? "font-semibold" : "text-text-muted"
          )}
          style={
            activeTheme === theme
              ? {
                  background: "var(--color-brand)",
                  color: "var(--color-brand-contrast)"
                }
              : undefined
          }
        >
          {themeLabel[theme]}
        </button>
      ))}
    </div>
  );
}
