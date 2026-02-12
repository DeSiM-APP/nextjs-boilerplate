import { MagneticCTA } from "@/components/anim/MagneticCTA";
import { SectionStagger } from "@/components/anim/SectionStagger";
import { TiltCard } from "@/components/anim/TiltCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import { ctaLinks } from "@/lib/links";
import type { LandingContent } from "@/lib/types";

type B2BSectionProps = {
  content: LandingContent;
  flush?: boolean;
};

export function B2BSection({ content, flush = false }: B2BSectionProps) {
  return (
    <SectionShell id="b2b" flush={flush}>
      <SectionHeader
        kicker="Enterprise API"
        title={content.b2b.heading}
        subtitle={content.b2b.blurb}
      />

      <div className="mt-8 grid gap-5 laptop:grid-cols-[1.2fr_0.8fr]">
        <SectionStagger className="grid gap-4 tablet:grid-cols-2">
          {content.b2b.useCases.map((useCase) => (
            <TiltCard key={useCase.segment} className="surface-card p-5 tablet:p-6">
              <h3 className="font-display text-2xl">{useCase.segment}</h3>
              <p className="mt-2 text-text-muted">{useCase.impact}</p>
            </TiltCard>
          ))}
        </SectionStagger>

        <div className="surface-card p-5 tablet:p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Commercial Models</p>
          <div className="mt-4 space-y-4">
            {content.b2b.plans.map((plan) => (
              <div
                key={plan.plan}
                className="rounded-md border px-4 py-3"
                style={{ borderColor: "var(--color-border)", background: "color-mix(in srgb, var(--color-surface-2) 70%, transparent)" }}
              >
                <p className="font-semibold">{plan.plan}</p>
                <p className="text-sm text-text-muted">{plan.pricing}</p>
                <p className="text-sm text-text-muted">{plan.fit}</p>
              </div>
            ))}
          </div>
          <MagneticCTA href={ctaLinks.partnerPrimary} className="mt-6 cta-link-secondary">
            Explore Enterprise Capability
          </MagneticCTA>
        </div>
      </div>
    </SectionShell>
  );
}
