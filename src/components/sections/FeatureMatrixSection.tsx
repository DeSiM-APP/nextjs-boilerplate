import { HeroReveal } from "@/components/anim/HeroReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import type { LandingContent } from "@/lib/types";

type FeatureMatrixSectionProps = {
  content: LandingContent;
  flush?: boolean;
};

export function FeatureMatrixSection({ content, flush = false }: FeatureMatrixSectionProps) {
  return (
    <SectionShell id="features" flush={flush}>
      <HeroReveal>
        <SectionHeader kicker="Feature Matrix" title={content.features.heading} />
      </HeroReveal>

      <div className="table-shell mt-8">
        <div className="table-row grid-cols-[1.1fr_1.6fr_0.7fr] border-none bg-surface-2 text-xs uppercase tracking-[0.16em] text-text-muted">
          <p>Module</p>
          <p>Detail</p>
          <p>Value</p>
        </div>
        {content.features.rows.map((row) => (
          <div key={row.module} className="table-row grid-cols-[1.1fr_1.6fr_0.7fr] items-start">
            <p className="font-semibold text-text">{row.module}</p>
            <p className="text-text-muted">{row.detail}</p>
            <p className="font-display text-xl tablet:text-2xl">{row.value}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
