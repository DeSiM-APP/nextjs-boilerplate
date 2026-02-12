import { SectionStagger } from "@/components/anim/SectionStagger";
import { TiltCard } from "@/components/anim/TiltCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import type { LandingContent } from "@/lib/types";

type ProblemOpportunitySectionProps = {
  content: LandingContent;
  flush?: boolean;
};

export function ProblemOpportunitySection({ content, flush = false }: ProblemOpportunitySectionProps) {
  return (
    <SectionShell id="problem" flush={flush}>
      <SectionHeader
        kicker="Problem & Opportunity"
        title={content.problemOpportunity.heading}
        subtitle={content.problemOpportunity.narrative}
      />

      <div className="mt-8 grid gap-5 laptop:grid-cols-[1.15fr_0.85fr]">
        <SectionStagger className="grid gap-4">
          {content.problemOpportunity.problems.map((item) => (
            <TiltCard key={item.title} className="surface-card p-5 tablet:p-6">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-text-muted">{item.detail}</p>
            </TiltCard>
          ))}
        </SectionStagger>

        <SectionStagger className="grid gap-4">
          {content.problemOpportunity.metrics.map((metric) => (
            <TiltCard key={metric.label} className="surface-card p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-text-muted">{metric.label}</p>
              <p className="mt-2 font-display text-4xl">{metric.value}</p>
            </TiltCard>
          ))}
        </SectionStagger>
      </div>
    </SectionShell>
  );
}
