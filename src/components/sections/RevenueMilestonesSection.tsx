import { HeroReveal } from "@/components/anim/HeroReveal";
import { SectionStagger } from "@/components/anim/SectionStagger";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import type { LandingContent } from "@/lib/types";

type RevenueMilestonesSectionProps = {
  content: LandingContent;
  flush?: boolean;
};

export function RevenueMilestonesSection({ content, flush = false }: RevenueMilestonesSectionProps) {
  return (
    <SectionShell id="traction" flush={flush}>
      <HeroReveal>
        <SectionHeader kicker="Traction Path" title={content.traction.heading} />
      </HeroReveal>

      <div className="mt-8 grid gap-5 laptop:grid-cols-[1.1fr_0.9fr]">
        <div className="table-shell">
          <div className="table-row grid-cols-[1.1fr_repeat(3,0.8fr)] border-none bg-surface-2 text-xs uppercase tracking-[0.16em] text-text-muted">
            <p>Metric</p>
            <p>Year 1</p>
            <p>Year 2</p>
            <p>Year 3</p>
          </div>
          {content.traction.revenueRows.map((row) => (
            <div key={row.metric} className="table-row grid-cols-[1.1fr_repeat(3,0.8fr)]">
              <p className="font-semibold">{row.metric}</p>
              <p>{row.year1}</p>
              <p>{row.year2}</p>
              <p>{row.year3}</p>
            </div>
          ))}
        </div>

        <SectionStagger className="surface-card p-5 tablet:p-6">
          {content.traction.milestones.map((milestone) => (
            <div
              key={milestone.quarter}
              className="relative border-l pl-5 pb-5 last:pb-0"
              style={{ borderColor: "color-mix(in srgb, var(--color-border) 70%, transparent)" }}
            >
              <span
                className="absolute left-[-0.4rem] top-[0.32rem] inline-block h-3 w-3 rounded-pill"
                style={{ background: "var(--color-brand)" }}
              />
              <p className="font-semibold">{milestone.quarter}</p>
              <p className="text-sm text-text-muted">{milestone.target}</p>
            </div>
          ))}
        </SectionStagger>
      </div>
    </SectionShell>
  );
}
