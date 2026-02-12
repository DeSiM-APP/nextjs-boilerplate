"use client";

import { Children, type ReactNode, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HorizontalScrollDeckProps = {
  panelOrder: string[];
  children: ReactNode;
};

export function HorizontalScrollDeck({ panelOrder, children }: HorizontalScrollDeckProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const panels = Children.toArray(children);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || panels.length < 2) {
      return;
    }

    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      const tween = gsap.to(track, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.85,
          start: "top top",
          end: () => `+=${window.innerWidth * (panels.length - 1)}`,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });

      const handleAnchorNavigation = (event: MouseEvent) => {
        const element = event.target as HTMLElement | null;
        if (!element) {
          return;
        }

        const anchor = element.closest<HTMLAnchorElement>('a[href^="#"]');
        if (!anchor) {
          return;
        }

        const hash = anchor.getAttribute("href");
        if (!hash || hash.length < 2) {
          return;
        }

        const id = hash.slice(1);
        const panelIndex = panelOrder.indexOf(id);
        if (panelIndex < 0) {
          return;
        }

        const trigger = tween.scrollTrigger;
        if (!trigger || typeof trigger.start !== "number") {
          return;
        }

        event.preventDefault();
        const top = trigger.start + window.innerWidth * panelIndex;
        window.scrollTo({ top, behavior: "smooth" });
      };

      document.addEventListener("click", handleAnchorNavigation);

      return () => {
        document.removeEventListener("click", handleAnchorNavigation);
        tween.kill();
      };
    });

    return () => {
      media.revert();
    };
  }, [panelOrder, panels.length]);

  return (
    <section
      ref={sectionRef}
      className="section-block overflow-x-hidden laptop:mt-0 laptop:h-screen laptop:min-h-screen laptop:max-h-screen"
    >
      <div
        ref={trackRef}
        className="flex flex-col laptop:h-screen laptop:grid laptop:grid-flow-col laptop:auto-cols-[100%]"
      >
        {panels.map((panel, index) => (
          <article
            key={index}
            data-panel="true"
            className="w-full shrink-0 laptop:h-screen laptop:overflow-hidden"
          >
            <div className="page-shell deck-panel-scroll py-8 tablet:py-10 laptop:h-screen laptop:overflow-y-auto laptop:py-6">
              {panel}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
