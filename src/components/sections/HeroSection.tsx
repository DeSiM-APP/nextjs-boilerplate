"use client";

import Image from "next/image";
import { useState } from "react";
import { Link2, X, Zap } from "lucide-react";

import { HeroReveal } from "@/components/anim/HeroReveal";
import { TiltCard } from "@/components/anim/TiltCard";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import type { LandingContent } from "@/lib/types";

type HeroSectionProps = {
  content: LandingContent;
};

const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

function toUrl(input: string): URL | null {
  try {
    return new URL(input);
  } catch {
    try {
      return new URL(`https://${input}`);
    } catch {
      return null;
    }
  }
}

function normalizeYouTubeId(candidate: string | null | undefined): string | null {
  if (!candidate) {
    return null;
  }

  const value = candidate.trim();
  return YOUTUBE_ID_PATTERN.test(value) ? value : null;
}

function extractYouTubeVideoId(rawValue: string): string | null {
  const url = toUrl(rawValue.trim());
  if (!url) {
    return null;
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, "");

  if (host === "youtu.be") {
    const [firstSegment] = url.pathname.split("/").filter(Boolean);
    return normalizeYouTubeId(firstSegment);
  }

  if (!host.endsWith("youtube.com") && host !== "youtube-nocookie.com") {
    return null;
  }

  if (url.pathname === "/watch") {
    return normalizeYouTubeId(url.searchParams.get("v"));
  }

  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length >= 2 && ["shorts", "embed", "v"].includes(segments[0])) {
    return normalizeYouTubeId(segments[1]);
  }

  return null;
}

export function HeroSection({ content }: HeroSectionProps) {
  const [heroVideoUrl, setHeroVideoUrl] = useState("");
  const [extractedVideoId, setExtractedVideoId] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);

  const handleAnalyze = () => {
    const urlValue = heroVideoUrl.trim();
    if (!urlValue) {
      setInputError("Please paste a YouTube link first.");
      return;
    }

    const videoId = extractYouTubeVideoId(urlValue);
    if (!videoId) {
      setInputError("Please enter a valid YouTube link.");
      return;
    }

    setInputError(null);
    setExtractedVideoId(videoId);
    setHeroVideoUrl("");
  };

  const removeVideoIdTag = () => {
    setExtractedVideoId(null);
  };

  return (
    <header className="relative pt-8 tablet:pt-10 laptop:pt-12 desktop:flex desktop:min-h-screen desktop:items-center desktop:py-8 wide:py-10">
      <div className="surface-card atlas-grid relative w-full overflow-hidden px-6 py-6 tablet:px-8 laptop:px-10 desktop:min-h-[calc(100vh-4rem)] desktop:px-12 desktop:py-12 wide:min-h-[calc(100vh-5rem)] wide:px-14 wide:py-14">
        <HeroReveal className="space-y-8 desktop:flex desktop:h-full desktop:flex-col desktop:gap-8 desktop:space-y-0">
          <div className="flex flex-col gap-5 laptop:flex-row laptop:items-center laptop:justify-between">
            <div>
              <p className="font-display text-xl tracking-wide desktop:text-2xl">TravelMuse AI</p>
              <p className="text-sm text-text-muted">Video-native travel publishing infrastructure</p>
            </div>

            <div className="flex flex-col gap-3 tablet:flex-row tablet:items-center">
              <ThemeSwitcher />
            </div>
          </div>

          <div className="grid gap-8 laptop:grid-cols-[1.1fr_0.9fr] laptop:items-start desktop:flex-1 desktop:items-center desktop:gap-10">
            <div className="space-y-6 desktop:space-y-7">
              <span className="section-kicker">{content.hero.kicker}</span>
              <h1 className="font-display whitespace-pre-line text-3xl leading-tight tablet:text-4xl laptop:text-5xl desktop:text-[4rem] desktop:leading-[1.07] wide:text-[4.4rem]">
                {content.hero.title}
              </h1>
              <p className="max-w-2xl text-base text-text-muted tablet:text-lg desktop:text-[1.32rem] desktop:leading-9">
                {content.hero.subtitle}
              </p>

              <div className="max-w-2xl space-y-1.5">
                <form
                  className="rounded-lg border p-2 desktop:p-2.5 wide:p-3"
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleAnalyze();
                  }}
                  style={{
                    borderColor: "color-mix(in srgb, var(--color-border) 68%, transparent)",
                    background:
                      "linear-gradient(90deg, color-mix(in srgb, var(--color-surface) 72%, transparent), color-mix(in srgb, var(--color-brand) 14%, transparent))",
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <div className="flex items-center gap-2 tablet:gap-3 desktop:gap-3.5">
                    <span
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md desktop:h-10 desktop:w-10 wide:h-11 wide:w-11"
                      style={{
                        color: "var(--color-text-muted)",
                        background: "color-mix(in srgb, var(--color-surface-2) 60%, transparent)"
                      }}
                      aria-hidden="true"
                    >
                      <Link2 className="h-4 w-4" strokeWidth={2.2} />
                    </span>

                    <label htmlFor="hero-video-url" className="sr-only">
                      YouTube video URL
                    </label>
                    <input
                      id="hero-video-url"
                      type="url"
                      value={heroVideoUrl}
                      onChange={(event) => {
                        setHeroVideoUrl(event.target.value);
                        if (inputError) {
                          setInputError(null);
                        }
                      }}
                      placeholder={content.hero.inputPlaceholder}
                      className="h-9 w-full bg-transparent px-0 text-sm leading-none tablet:text-base desktop:h-10 wide:h-11 placeholder:text-[0.7rem] tablet:placeholder:text-xs placeholder:text-text-muted outline-none"
                      style={{
                        color: "var(--color-text)",
                        caretColor: "var(--color-brand)"
                      }}
                    />

                    <button
                      type="submit"
                      className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-md px-2.5 text-xs font-semibold tablet:min-w-[8rem] tablet:px-3.5 tablet:text-sm desktop:h-10 desktop:min-w-[8.4rem] desktop:px-4 wide:h-11 leading-none"
                      style={{
                        color: "var(--color-brand-contrast)",
                        background: "var(--color-brand)",
                        boxShadow: "var(--shadow-sm)"
                      }}
                    >
                      {content.hero.inputActionLabel}
                      <Zap className="h-3.5 w-3.5 tablet:h-4 tablet:w-4" strokeWidth={2.3} aria-hidden="true" />
                    </button>
                  </div>
                </form>

                {inputError ? (
                  <p className="text-xs" style={{ color: "var(--color-danger)" }}>
                    {inputError}
                  </p>
                ) : null}

                {extractedVideoId ? (
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-xs font-medium"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text)",
                        background: "color-mix(in srgb, var(--color-surface) 90%, transparent)"
                      }}
                    >
                      {extractedVideoId}
                      <button
                        type="button"
                        className="inline-flex h-4 w-4 items-center justify-center rounded-pill"
                        style={{ color: "var(--color-text-muted)" }}
                        aria-label={`Remove ${extractedVideoId}`}
                        onClick={removeVideoIdTag}
                      >
                        <X className="h-3 w-3" strokeWidth={2.4} />
                      </button>
                    </span>
                  </div>
                ) : null}
              </div>
            </div>

            <TiltCard className="surface-card overflow-hidden">
              <div className="relative h-[360px] tablet:h-[400px] desktop:h-[clamp(520px,62vh,700px)]">
                <Image
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
                  alt="Mountain route view"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(40deg, color-mix(in srgb, var(--color-bg) 65%, transparent), transparent 58%)"
                  }}
                />
              </div>
            </TiltCard>
          </div>
        </HeroReveal>
      </div>
    </header>
  );
}
