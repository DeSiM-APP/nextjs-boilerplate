import { THEMES } from "@/lib/design-tokens";
import type { ThemeId } from "@/lib/types";

export const DEFAULT_THEME: ThemeId = "atlas-light";

export function getTheme(value?: string): ThemeId {
  if (!value) {
    return DEFAULT_THEME;
  }

  const normalized = value.toLowerCase();
  return (THEMES.find((theme) => theme === normalized) ?? DEFAULT_THEME) as ThemeId;
}

export function setTheme(theme: ThemeId): void {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.dataset.theme = theme;
}
