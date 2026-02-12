import { HeroReveal } from "@/components/anim/HeroReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import type { LandingContent } from "@/lib/types";

type CompetitionSectionProps = {
  content: LandingContent;
  flush?: boolean;
};

export function CompetitionSection({ content, flush = false }: CompetitionSectionProps) {
  return (
    <SectionShell id="comparison" flush={flush}>
      <HeroReveal>
        <SectionHeader kicker="Differentiation" title={content.comparison.heading} />
      </HeroReveal>

      <div className="table-shell mt-8 overflow-x-auto">
        <div className="min-w-[760px]">
          <div className="table-row grid-cols-[1.2fr_repeat(4,0.9fr)] border-none bg-surface-2 text-xs uppercase tracking-[0.16em] text-text-muted">
            <p>Dimension</p>
            <p>TravelMuse AI</p>
            <p>Gamma</p>
            <p>Notion AI</p>
            <p>Canva</p>
          </div>
          {content.comparison.rows.map((row) => (
            <div key={row.dimension} className="table-row grid-cols-[1.2fr_repeat(4,0.9fr)]">
              <p className="font-semibold">{row.dimension}</p>
              <p className="font-semibold" style={{ color: "var(--color-brand)" }}>
                {row.travelMuse}
              </p>
              <p className="text-text-muted">{row.gamma}</p>
              <p className="text-text-muted">{row.notionAi}</p>
              <p className="text-text-muted">{row.canva}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
