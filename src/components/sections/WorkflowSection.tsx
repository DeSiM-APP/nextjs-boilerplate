import Image from "next/image";
import {
  CalendarDays,
  GripVertical,
  MapPin,
  Play,
  Route,
  Sparkles,
  UtensilsCrossed,
  WandSparkles
} from "lucide-react";

import { HeroReveal } from "@/components/anim/HeroReveal";
import { SectionStagger } from "@/components/anim/SectionStagger";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import type { LandingContent, WorkflowMapLabelTone } from "@/lib/types";

type WorkflowSectionProps = {
  content: LandingContent;
  flush?: boolean;
};

function getWorkflowTagIcon(tag: string) {
  const normalizedTag = tag.toLowerCase();

  if (normalizedTag.includes("ramen") || normalizedTag.includes("food") || normalizedTag.includes("eat")) {
    return UtensilsCrossed;
  }

  if (normalizedTag.includes("day") || normalizedTag.includes("plan") || normalizedTag.includes("itinerary")) {
    return CalendarDays;
  }

  return MapPin;
}

function getParsedStopTagMeta(category: string) {
  const normalizedCategory = category.toLowerCase();

  if (normalizedCategory.includes("food")) {
    return {
      Icon: UtensilsCrossed,
      color: "color-mix(in srgb, var(--color-accent) 88%, var(--color-text) 12%)"
    };
  }

  if (normalizedCategory.includes("route")) {
    return {
      Icon: Route,
      color: "color-mix(in srgb, var(--color-success) 88%, var(--color-text) 12%)"
    };
  }

  return {
    Icon: MapPin,
    color: "color-mix(in srgb, var(--color-brand) 88%, var(--color-text) 12%)"
  };
}

export function WorkflowSection({ content, flush = false }: WorkflowSectionProps) {
  const labelToneStyles: Record<WorkflowMapLabelTone, { background: string; color: string }> = {
    brand: {
      background: "var(--color-brand)",
      color: "var(--color-brand-contrast)"
    },
    accent: {
      background: "color-mix(in srgb, var(--color-accent) 90%, var(--color-surface) 10%)",
      color: "color-mix(in srgb, var(--color-surface) 92%, var(--color-text) 8%)"
    },
    success: {
      background: "color-mix(in srgb, var(--color-success) 90%, var(--color-surface) 10%)",
      color: "color-mix(in srgb, var(--color-surface) 92%, var(--color-text) 8%)"
    }
  };

  return (
    <SectionShell id="workflow" flush={flush} className="page-shell">
      <HeroReveal>
        <SectionHeader
          kicker="Workflow"
          title={content.workflow.heading}
          subtitle={content.workflow.blurb}
          className="[&_h2.section-title]:laptop:text-4xl [&_h2.section-title]:laptop:leading-tight"
        />
      </HeroReveal>

      <SectionStagger className="mt-7 grid gap-4 laptop:grid-cols-[1fr_1fr]">
        <div className="space-y-3">
          <article className="surface-card overflow-hidden">
            <div className="relative h-[220px] tablet:h-[280px] desktop:h-[312px]">
              <Image
                src={content.workflow.videoScreenshotUrl}
                alt="Travel video preview being parsed by TravelMuse AI"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, color-mix(in srgb, var(--color-bg) 30%, transparent), color-mix(in srgb, var(--color-brand) 28%, transparent))"
                }}
              />
              <span
                className="absolute left-4 top-4 inline-flex items-center rounded-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.11em]"
                style={{
                  background: "color-mix(in srgb, var(--color-brand) 88%, var(--color-surface) 12%)",
                  color: "var(--color-brand-contrast)"
                }}
              >
                {content.workflow.videoBadge}
              </span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill"
                style={{
                  background: "color-mix(in srgb, var(--color-surface) 28%, transparent)",
                  backdropFilter: "blur(3px)",
                  color: "var(--color-brand-contrast)",
                  border: "1px solid color-mix(in srgb, var(--color-brand-contrast) 40%, transparent)"
                }}
              >
                <Play className="h-6 w-6 translate-x-[1px]" fill="currentColor" />
              </span>
            </div>

            <div
              className="space-y-3 border-t px-4 py-4 tablet:px-5"
              style={{
                borderColor: "color-mix(in srgb, var(--color-border) 58%, transparent)",
                background:
                  "linear-gradient(95deg, color-mix(in srgb, var(--color-surface-2) 82%, transparent), color-mix(in srgb, var(--color-brand) 8%, transparent))"
              }}
            >
              <div className="flex items-center justify-between gap-4 text-xs tracking-[0.06em] text-text-muted">
                <div
                  className="h-1.5 w-full overflow-hidden rounded-pill"
                  style={{ background: "color-mix(in srgb, var(--color-border) 50%, transparent)" }}
                >
                  <span
                    className="block h-full rounded-pill"
                    style={{
                      width: `${content.workflow.videoProgressPercent}%`,
                      background: "color-mix(in srgb, var(--color-brand) 88%, transparent)"
                    }}
                  />
                </div>
                <span className="shrink-0 whitespace-nowrap">{content.workflow.videoProgressLabel}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {content.workflow.videoTags.map((tag) => {
                  const TagIcon = getWorkflowTagIcon(tag);

                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-pill border px-2.5 py-1 text-xs"
                      style={{
                        borderColor: "color-mix(in srgb, var(--color-border) 65%, transparent)",
                        color: "var(--color-text-muted)",
                        background: "color-mix(in srgb, var(--color-surface) 85%, transparent)"
                      }}
                    >
                      <TagIcon className="h-3 w-3" />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </article>

          <article
            className="surface-card px-4 py-3 tablet:px-5 tablet:py-4"
            style={{
              borderColor: "color-mix(in srgb, var(--color-border) 62%, transparent)",
              background:
                "linear-gradient(120deg, color-mix(in srgb, var(--color-surface) 86%, transparent), color-mix(in srgb, var(--color-brand) 8%, transparent))"
            }}
          >
            <p className="text-sm italic tablet:text-base">“{content.workflow.transcriptSnippet}”</p>
            <div
              className="mt-4 flex items-center justify-between border-t pt-3"
              style={{ borderColor: "color-mix(in srgb, var(--color-border) 52%, transparent)" }}
            >
              <p
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: "color-mix(in srgb, var(--color-brand) 90%, transparent)" }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Transcription Active
              </p>
              <WandSparkles
                className="h-4 w-4"
                style={{ color: "color-mix(in srgb, var(--color-brand) 84%, transparent)" }}
                aria-hidden="true"
              />
            </div>
          </article>
        </div>

        <div className="space-y-3">
          <article className="surface-card overflow-hidden">
            <header
              className="flex items-center justify-between border-b px-4 py-3 tablet:px-5"
              style={{
                borderColor: "color-mix(in srgb, var(--color-border) 60%, transparent)",
                background: "color-mix(in srgb, var(--color-surface-2) 68%, transparent)"
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.01em] text-text-muted">
                {content.workflow.mapCardTitle}
              </p>
              <Sparkles className="h-4 w-4 text-brand" />
            </header>
            <div
              className="relative h-[188px] overflow-hidden tablet:h-[254px] desktop:h-[252px]"
              style={{ background: "color-mix(in srgb, var(--color-surface) 76%, var(--color-bg) 24%)" }}
            >
              <Image
                src={content.workflow.mapImageUrl}
                alt="Map of Japan with parsed travel stops"
                width={1320}
                height={760}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="absolute left-0 top-1/2 block h-auto w-full -translate-y-1/2"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in srgb, var(--color-bg) 8%, transparent), color-mix(in srgb, var(--color-brand) 12%, transparent))"
                }}
              />

              {content.workflow.mapLabels.map((label) => {
                const isRightDirection = label.direction === "right";

                return (
                  <span
                    key={label.name}
                    className={`absolute inline-flex -translate-y-1/2 items-center gap-1.5 rounded-pill px-2.5 py-1 text-[11px] font-semibold tracking-[0.03em] ${
                      isRightDirection ? "-translate-x-full flex-row-reverse" : ""
                    }`}
                    style={{
                      top: label.top,
                      left: label.left,
                      boxShadow: "var(--shadow-sm)",
                      ...labelToneStyles[label.tone]
                    }}
                  >
                    <MapPin className="h-3 w-3" />
                    {label.name}
                  </span>
                );
              })}
            </div>
          </article>

          <article
            className="surface-card min-h-[264px] p-4 tablet:min-h-[294px] tablet:p-5"
            style={{
              background:
                "linear-gradient(120deg, color-mix(in srgb, var(--color-surface) 88%, transparent), color-mix(in srgb, var(--color-brand) 8%, transparent))"
            }}
          >
            <p className="text-sm font-semibold tablet:text-base">{content.workflow.parsedTitle}</p>
            <div className="relative mt-3 overflow-hidden">
              <div className="max-h-[220px] space-y-2.5 overflow-hidden tablet:max-h-[240px]">
                {content.workflow.parsedStops.map((stop) => {
                  const { Icon, ...tagStyle } = getParsedStopTagMeta(stop.category);

                  return (
                    <article
                      key={stop.title}
                      className="flex items-center gap-3 rounded-md border p-2.5 tablet:p-3"
                      style={{
                        borderColor: "color-mix(in srgb, var(--color-border) 64%, transparent)",
                        background: "color-mix(in srgb, var(--color-surface) 82%, transparent)"
                      }}
                    >
                      <div
                        className="inline-flex h-7 w-5 shrink-0 items-center justify-center"
                        style={{ color: "color-mix(in srgb, var(--color-text-muted) 88%, transparent)" }}
                      >
                        <GripVertical className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium leading-tight tablet:text-[0.94rem]">{stop.title}</p>
                        <p className="mt-1 truncate text-[11px] leading-tight text-text-muted tablet:text-xs">
                          {stop.subtitle}
                        </p>
                      </div>
                      <span
                        className="inline-flex h-6 w-6 shrink-0 items-center justify-center tablet:h-6 tablet:w-6"
                        style={{ color: tagStyle.color }}
                        aria-label={stop.category}
                        title={stop.category}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    </article>
                  );
                })}
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-14 tablet:h-16"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--color-surface) 86%, transparent) 72%, color-mix(in srgb, var(--color-surface) 92%, var(--color-brand) 8%) 100%)"
                }}
              />
            </div>
          </article>
        </div>
      </SectionStagger>
    </SectionShell>
  );
}
