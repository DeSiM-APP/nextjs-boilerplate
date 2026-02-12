import type { Metadata } from "next";

import { AppProviders } from "@/components/providers/AppProviders";

import "./globals.css";

export const metadata: Metadata = {
  title: "TravelMuse AI | Video-to-Guide Travel Publishing",
  description:
    "TravelMuse AI converts travel videos into structured guides, polished pages, and map-ready routes for creators and tourism enterprises.",
  openGraph: {
    title: "TravelMuse AI",
    description:
      "From YouTube travel content to navigable guide products in minutes.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelMuse AI",
    description:
      "From creator videos to map-ready travel guides with AI-powered structuring."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="atlas-light">
      <body>
        <AppProviders>
          <div className="atlas-backdrop" />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
