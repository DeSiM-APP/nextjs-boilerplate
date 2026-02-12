"use client";

import { useLayoutEffect, useRef } from "react";
import {
  FileOutput,
  Link2,
  ListTree,
  MapPinned,
  PencilLine,
  ScanLine,
  type LucideIcon
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HeroReveal } from "@/components/anim/HeroReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import type { LandingContent, WorkflowPlaybookStep } from "@/lib/types";

type WorkflowPlaybookSectionProps = {
  content: LandingContent;
  flush?: boolean;
};

const STEP_ICON_MAP: Record<WorkflowPlaybookStep["icon"], LucideIcon> = {
  link: Link2,
  scan: ScanLine,
  structure: ListTree,
  edit: PencilLine,
  publish: FileOutput,
  map: MapPinned
};

gsap.registerPlugin(ScrollTrigger);

export function WorkflowPlaybookSection({ content, flush = false }: WorkflowPlaybookSectionProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const pin = pinRef.current;
    const rail = railRef.current;
    const track = trackRef.current;
    if (!shell || !pin || !rail || !track) {
      return;
    }

    const applyInset = () => {
      const inset = Math.max(shell.getBoundingClientRect().left, 0);
      track.style.paddingLeft = `${inset}px`;
      track.style.paddingRight = `${inset}px`;
    };

    applyInset();

    const getDistance = () => Math.max(track.scrollWidth - rail.clientWidth, 0);

    if (getDistance() <= 0) {
      gsap.set(track, { x: 0 });
      return;
    }

    const tween = gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: pin,
        pin,
        scrub: 0.85,
        start: "top top",
        end: () => `+=${getDistance()}`,
        onRefresh: applyInset,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });

    return () => {
      tween.kill();
      gsap.set(track, { clearProps: "transform,paddingLeft,paddingRight" });
    };
  }, [content.workflowPlaybook.steps.length]);

  return (
    <SectionShell id="features" flush={flush} className="page-shell">
      <div ref={shellRef}>
        <div ref={pinRef} className="pt-4 tablet:pt-5 laptop:pt-6">
          <HeroReveal>
            <SectionHeader
              kicker="Workflow Playbook"
              title={content.workflowPlaybook.heading}
              subtitle={content.workflowPlaybook.blurb}
              className="[&_h2.section-title]:laptop:text-[2.5rem] [&_p]:max-w-[68ch]"
            />
          </HeroReveal>

          <div
            ref={railRef}
            className="deck-panel-scroll relative left-1/2 mt-7 w-screen max-w-none -translate-x-1/2 overflow-hidden pb-2"
          >
            <div ref={trackRef} className="flex w-max gap-4 tablet:gap-5">
              {content.workflowPlaybook.steps.map((step, index) => {
                const Icon = STEP_ICON_MAP[step.icon];

                return (
                  <article
                    key={step.title}
                    className="surface-card atlas-grid relative w-[286px] flex-none snap-start overflow-hidden p-4 tablet:w-[320px] tablet:p-5 laptop:w-[340px]"
                    style={{
                      background:
                        "linear-gradient(165deg, color-mix(in srgb, var(--color-surface) 86%, transparent), color-mix(in srgb, var(--color-brand) 10%, transparent))"
                    }}
                  >
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className="inline-flex h-10 w-10 items-center justify-center rounded-sm"
                          style={{
                            background: "color-mix(in srgb, var(--color-brand) 18%, transparent)",
                            color: "var(--color-brand)"
                          }}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                          Step {index + 1}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-[1.95rem] leading-tight tablet:text-[2.15rem]">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-text-muted tablet:text-[1.02rem]">{step.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
