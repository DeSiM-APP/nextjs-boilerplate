"use client";

import { useEffect, useRef, useState } from "react";
import { Check, CheckCircle2, Copy, ExternalLink, MapPin, Route, UtensilsCrossed } from "lucide-react";

import { HeroReveal } from "@/components/anim/HeroReveal";
import { SectionStagger } from "@/components/anim/SectionStagger";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import type { LandingContent, MapsExportPlaceType } from "@/lib/types";

type MapsExportSectionProps = {
  content: LandingContent;
  flush?: boolean;
};

function getPlaceTypeMeta(type: MapsExportPlaceType) {
  if (type === "food") {
    return {
      Icon: UtensilsCrossed,
      text: "Food",
      badgeStyle: {
        color: "color-mix(in srgb, var(--color-surface) 94%, var(--color-text) 6%)",
        background: "color-mix(in srgb, var(--color-accent) 90%, var(--color-surface) 10%)"
      },
      iconStyle: { color: "color-mix(in srgb, var(--color-accent) 88%, var(--color-text) 12%)" }
    };
  }

  if (type === "route") {
    return {
      Icon: Route,
      text: "Route",
      badgeStyle: {
        color: "color-mix(in srgb, var(--color-surface) 94%, var(--color-text) 6%)",
        background: "color-mix(in srgb, var(--color-success) 90%, var(--color-surface) 10%)"
      },
      iconStyle: { color: "color-mix(in srgb, var(--color-success) 88%, var(--color-text) 12%)" }
    };
  }

  return {
    Icon: MapPin,
    text: "Location",
    badgeStyle: {
      color: "var(--color-brand-contrast)",
      background: "color-mix(in srgb, var(--color-brand) 90%, var(--color-surface) 10%)"
    },
    iconStyle: { color: "color-mix(in srgb, var(--color-brand) 88%, var(--color-text) 12%)" }
  };
}

export function MapsExportSection({ content, flush = false }: MapsExportSectionProps) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<number | null>(null);

  const csvRows = content.mapsExport.places.map((place) =>
    [
      place.name,
      place.desc,
      place.lat.toFixed(4),
      place.lng.toFixed(4),
      place.type
    ]
      .map((value) => `"${String(value).replace(/"/g, '""')}"`)
      .join(",")
  );

  const payload = ["name,desc,lat,lng,type", ...csvRows].join("\n");

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopyCsv = async () => {
    let didCopy = false;

    if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(payload);
        didCopy = true;
      } catch {
        didCopy = false;
      }
    }

    if (!didCopy) {
      const textarea = document.createElement("textarea");
      textarea.value = payload;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      didCopy = document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    if (didCopy) {
      setCopied(true);
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
      resetTimerRef.current = window.setTimeout(() => {
        setCopied(false);
        resetTimerRef.current = null;
      }, 1800);
    }
  };

  return (
    <SectionShell id="maps-export" flush={flush} className="page-shell flex h-screen flex-col">
      <HeroReveal>
        <SectionHeader
          kicker="Google Maps Export"
          title={content.mapsExport.heading}
          subtitle={content.mapsExport.blurb}
          className="[&_h2.section-title]:laptop:text-[2.35rem] [&_p]:max-w-[65ch]"
        />
      </HeroReveal>

      <SectionStagger className="mt-6 flex min-h-0 flex-1 flex-col gap-4 laptop:flex-row-reverse laptop:[&>*]:min-w-0 laptop:[&>*]:basis-0 laptop:[&>*]:grow laptop:[&>*:first-child]:grow-[0.92] laptop:[&>*:last-child]:grow-[1.08]">
        <article className="surface-card flex min-h-0 flex-col p-4 tablet:p-5">
          <div className="flex flex-wrap gap-2">
            {content.mapsExport.statuses.map((status) => (
              <span
                key={status}
                className="inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: "color-mix(in srgb, var(--color-border) 62%, transparent)",
                  color: "var(--color-text-muted)",
                  background: "color-mix(in srgb, var(--color-surface) 84%, transparent)"
                }}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                {status}
              </span>
            ))}
          </div>

          <div
            className="mt-3 flex min-h-0 flex-1 flex-col rounded-md border p-3"
            style={{
              borderColor: "color-mix(in srgb, var(--color-border) 62%, transparent)",
              background: "color-mix(in srgb, var(--color-surface-2) 52%, transparent)"
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
              {content.mapsExport.csvTitle}
            </p>
            <pre
              className="mt-2 min-h-0 flex-1 overflow-auto whitespace-pre-wrap break-all rounded-sm border p-3 text-[11px] leading-5 tablet:text-xs"
              style={{
                borderColor: "color-mix(in srgb, var(--color-border) 52%, transparent)",
                background: "color-mix(in srgb, var(--color-surface) 88%, transparent)",
                color: "var(--color-text)"
              }}
            >
              <code>{payload}</code>
            </pre>
          </div>

          <div className="mt-3 grid gap-2 tablet:grid-cols-3">
            {content.mapsExport.steps.map((step, index) => (
              <p key={step} className="rounded-sm border px-2.5 py-2 text-[11px] text-text-muted tablet:text-xs" style={{
                borderColor: "color-mix(in srgb, var(--color-border) 58%, transparent)",
                background: "color-mix(in srgb, var(--color-surface) 82%, transparent)"
              }}>
                <span className="font-semibold text-text">{index + 1}.</span> {step}
              </p>
            ))}
          </div>
        </article>

        <article className="surface-card flex min-h-0 flex-col p-4 tablet:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold tablet:text-base">{content.mapsExport.listTitle}</p>
            <span
              className="rounded-pill border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]"
              style={{
                borderColor: "color-mix(in srgb, var(--color-border) 60%, transparent)",
                color: "var(--color-text-muted)",
                background: "color-mix(in srgb, var(--color-surface) 84%, transparent)"
              }}
            >
              {content.mapsExport.places.length} blocks
            </span>
          </div>

          <div className="mt-3 min-h-0 flex-1 space-y-2 overflow-auto pr-1">
            {content.mapsExport.places.map((place) => {
              const meta = getPlaceTypeMeta(place.type);

              return (
                <article
                  key={`${place.name}-${place.lat}-${place.lng}`}
                  className="rounded-md border p-3"
                  style={{
                    borderColor: "color-mix(in srgb, var(--color-border) 64%, transparent)",
                    background: "color-mix(in srgb, var(--color-surface) 84%, transparent)"
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <meta.Icon className="h-4 w-4 shrink-0" style={meta.iconStyle} />
                        <p className="truncate text-sm font-semibold tablet:text-base">{place.name}</p>
                      </div>
                      <p className="mt-1 text-xs text-text-muted tablet:text-sm">{place.desc}</p>
                      <p className="mt-1 font-mono text-[11px] text-text-muted">
                        {place.lat.toFixed(4)}, {place.lng.toFixed(4)}
                      </p>
                    </div>
                    <span
                      className="rounded-pill px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em]"
                      style={meta.badgeStyle}
                    >
                      {meta.text}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <a href={content.mapsExport.primaryCtaHref} target="_blank" rel="noreferrer" className="cta-link cta-link-primary gap-2">
              {content.mapsExport.primaryCtaLabel}
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={handleCopyCsv}
              className="cta-link cta-link-secondary gap-2"
            >
              {content.mapsExport.secondaryCtaLabel}
              {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </article>
      </SectionStagger>
    </SectionShell>
  );
}
