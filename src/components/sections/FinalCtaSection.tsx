import { MagneticCTA } from "@/components/anim/MagneticCTA";
import { HeroReveal } from "@/components/anim/HeroReveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { ctaLinks } from "@/lib/links";
import type { LandingContent } from "@/lib/types";

type FinalCtaSectionProps = {
  content: LandingContent;
};

export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  return (
    <SectionShell>
      <HeroReveal>
        <div className="surface-card px-6 py-8 tablet:px-8 laptop:px-12 laptop:py-10">
          <span className="section-kicker">Vision & Call to Action</span>
          <h2 className="mt-4 font-display text-3xl leading-tight tablet:text-4xl laptop:text-5xl">
            {content.finalCta.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-text-muted tablet:text-lg">{content.finalCta.body}</p>

          <div className="mt-7 flex flex-col gap-3 tablet:flex-row">
            <MagneticCTA href={ctaLinks.creatorPrimary} className="cta-link-primary">
              Join Creator Momentum
            </MagneticCTA>
            <MagneticCTA href={ctaLinks.investorPrimary} className="cta-link-secondary">
              Connect as Investor
            </MagneticCTA>
          </div>
        </div>
      </HeroReveal>
    </SectionShell>
  );
}
