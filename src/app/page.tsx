import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MapsExportSection } from "@/components/sections/MapsExportSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { WorkflowPlaybookSection } from "@/components/sections/WorkflowPlaybookSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { landingContent } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="pb-16 tablet:pb-20 laptop:pb-24">
      <div className="page-shell">
        <HeroSection content={landingContent} />
      </div>
      <WorkflowSection content={landingContent} />
      <MapsExportSection content={landingContent} />
      <WorkflowPlaybookSection content={landingContent} />

      <div className="page-shell">
        <PricingSection content={landingContent} />
        <FinalCtaSection content={landingContent} />

        <footer className="section-block border-t pt-6 text-sm text-text-muted" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex flex-col gap-1 tablet:flex-row tablet:items-center tablet:justify-between">
            <p>TravelMuse AI · Business Plan Narrative Landing</p>
            <a href="mailto:team@travelmuse.ai" className="underline decoration-dotted underline-offset-4">
              team@travelmuse.ai
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
