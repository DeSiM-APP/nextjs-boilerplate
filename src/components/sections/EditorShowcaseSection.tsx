import { HeroReveal } from "@/components/anim/HeroReveal";
import { SectionStagger } from "@/components/anim/SectionStagger";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import type { LandingContent } from "@/lib/types";

type EditorShowcaseSectionProps = {
  content: LandingContent;
  flush?: boolean;
};

export function EditorShowcaseSection({ content, flush = false }: EditorShowcaseSectionProps) {
  return (
    <SectionShell id="editor" flush={flush}>
      <HeroReveal>
        <SectionHeader
          kicker="Gamma-style Editor"
          title={content.editorShowcase.heading}
          subtitle={content.editorShowcase.blurb}
        />
      </HeroReveal>

      <SectionStagger className="mt-8 grid gap-4 laptop:grid-cols-[0.24fr_1fr_0.34fr]">
        <div className="surface-card p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Block Library</p>
          <div className="mt-3 space-y-2">
            {content.editorShowcase.leftRail.map((item) => (
              <button
                key={item}
                type="button"
                className="w-full rounded-sm border px-3 py-2 text-left text-sm"
                style={{
                  borderColor: "var(--color-border)",
                  background: "color-mix(in srgb, var(--color-surface-2) 70%, transparent)"
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="surface-card atlas-grid relative p-4 tablet:p-5">
          <div className="relative z-10 space-y-3">
            {content.editorShowcase.canvasCards.map((card) => (
              <article
                key={card.title}
                className="rounded-md border px-4 py-4"
                style={{
                  borderColor: "var(--color-border)",
                  background: "color-mix(in srgb, var(--color-surface) 90%, transparent)"
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl">{card.title}</h3>
                  <span
                    className="rounded-pill px-2 py-1 text-xs uppercase tracking-[0.14em]"
                    style={{
                      color: "var(--color-brand-contrast)",
                      background: "var(--color-brand)"
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm tablet:text-base text-text-muted">{card.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="surface-card p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Style Panel</p>
          <div className="mt-3 space-y-3">
            {content.editorShowcase.rightRail.map((control) => (
              <div
                key={control.label}
                className="rounded-sm border px-3 py-3"
                style={{
                  borderColor: "var(--color-border)",
                  background: "color-mix(in srgb, var(--color-surface-2) 65%, transparent)"
                }}
              >
                <p className="text-xs uppercase tracking-[0.14em] text-text-muted">{control.label}</p>
                <p className="mt-1 text-sm font-medium">{control.value}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionStagger>
    </SectionShell>
  );
}
