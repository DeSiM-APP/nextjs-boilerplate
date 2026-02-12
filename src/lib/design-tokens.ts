import type { BreakpointId, ThemeId } from "@/lib/types";

export const THEMES: ThemeId[] = ["atlas-light", "midnight-route", "sunrise-postcard"];

export const BREAKPOINTS: Record<BreakpointId, number> = {
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1440,
  wide: 1920
};
