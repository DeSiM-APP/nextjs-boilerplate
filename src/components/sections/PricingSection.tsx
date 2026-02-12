import { MagneticCTA } from "@/components/anim/MagneticCTA";
import { SectionStagger } from "@/components/anim/SectionStagger";
import { TiltCard } from "@/components/anim/TiltCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import { ctaLinks } from "@/lib/links";
import type { LandingContent } from "@/lib/types";

type PricingSectionProps = {
  content: LandingContent;
  flush?: boolean;
};

export function PricingSection({ content, flush = false }: PricingSectionProps) {
  return (
    <SectionShell id="pricing" flush={flush}>
      <SectionHeader kicker="Pricing" title={content.pricing.heading} />

      <SectionStagger className="mt-8 grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
        {content.pricing.tiers.map((tier) => (
          <TiltCard
            key={tier.name}
            className="surface-card flex h-full flex-col p-6"
            style={tier.featured ? { boxShadow: "var(--shadow-glow)" } : undefined}
          >
            <p className="text-xs uppercase tracking-[0.16em] text-text-muted">{tier.tag}</p>
            <h3 className="mt-2 font-display text-3xl">{tier.name}</h3>
            <p className="mt-1 text-2xl font-semibold">{tier.price}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-text-muted">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-pill" style={{ background: "var(--color-brand)" }} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <MagneticCTA href={ctaLinks.creatorPrimary} className="mt-6 cta-link-primary">
              Choose {tier.name}
            </MagneticCTA>
          </TiltCard>
        ))}
      </SectionStagger>
    </SectionShell>
  );
}
