import type { LandingContent } from "@/lib/types";
import japanMapImage from "@/assets/japan-map.png";
import japanNightImage from "@/assets/japan-night.jpeg";

export const landingContent: LandingContent = {
  nav: [
    { id: "workflow", label: "5-Min Flow" },
    { id: "maps-export", label: "Maps Export" },
    { id: "features", label: "Workflow Cards" },
    { id: "pricing", label: "Pricing" }
  ],
  hero: {
    kicker: "AI-Powered Travel Content Platform",
    title: "TravelMuse AI\nTravel Handbook generator",
    subtitle:
      "TravelMuse AI converts YouTube travel content into structured guides, polished pages, and map-ready routes.",
    inputPlaceholder: "Paste your YouTube video URL here...",
    inputActionLabel: "Analyze"
  },
  problemOpportunity: {
    heading: "Travel creators have influence, but their video knowledge is not operational.",
    narrative:
      "Key destination information is trapped inside long-form videos. Fans manually scrub timestamps, creators spend hours turning footage into guidebooks, and monetization opportunities leak across fragmented tools.",
    problems: [
      {
        title: "Monetization friction",
        detail: "Viewers cannot directly action route details, so creator conversion into paid products stays low."
      },
      {
        title: "Manual production burden",
        detail: "Formatting one polished itinerary guide can take 5-10 hours of repetitive editing."
      },
      {
        title: "Poor fan usability",
        detail: "Fans replay videos to capture addresses, routes, and restaurants with no one-click navigation."
      },
      {
        title: "No vertical-native tool",
        detail: "General tools are broad but shallow for travel-specific content extraction and structuring."
      }
    ],
    metrics: [
      { label: "Monetization-ready creators", value: "300K-500K" },
      { label: "Travel tooling TAM", value: "$500M-$800M" },
      { label: "MVP workflow time", value: "~5 min" }
    ]
  },
  workflow: {
    heading: "From one YouTube video to a mapped travel handbook.",
    blurb:
      "TravelMuse AI parses the clip, structures the key places, and pins every stop into a map-ready guide block in minutes.",
    videoBadge: "Scanning Video Content",
    videoScreenshotUrl: japanNightImage,
    videoProgressLabel: "04:22 / 12:45",
    videoProgressPercent: 35,
    videoTags: ["Kyoto, Japan", "Ramen Route", "2-Day Plan"],
    transcriptSnippet:
      "... and Just behind the temple, there is a hidden ramen shop locals love, and the broth is simmered for 48 hours...",
    mapCardTitle: "Interactive Handbook Block",
    mapImageUrl: japanMapImage,
    mapLabels: [
      { name: "Kiyomizu-dera", top: "56%", left: "53%", tone: "brand", direction: "right" },
      { name: "Nishiki Market", top: "68%", left: "57%", tone: "accent", direction: "left" },
      { name: "Fushimi Inari", top: "80%", left: "45%", tone: "success", direction: "left" }
    ],
    parsedTitle: "Top Parsed Stops in Kyoto",
    parsedStops: [
      {
        title: "Kiyomizu-dera Temple",
        subtitle: "1 Chome-294 Kiyomizu, Higashiyama Ward, Kyoto",
        category: "Location",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Nishiki Market",
        subtitle: "Nakagyo Ward, Nishikikoji-dori, Kyoto",
        category: "Food",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Arashiyama Bamboo Grove",
        subtitle: "Route block from downtown Kyoto to Arashiyama walk",
        category: "Route",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  mapsExport: {
    heading: "Export parsed blocks as a Google Maps CSV.",
    blurb:
      "We convert extracted video mentions into structured blocks and generate a CSV file that can be imported into Google Maps.",
    statuses: ["Video Parsed", "Geo-Coded", "CSV Ready"],
    csvTitle: "travelmuse-google-maps.csv",
    listTitle: "Google Maps CSV Preview",
    steps: [
      "Extract places from the travel video transcript",
      "Normalize blocks into CSV rows with lat/lng",
      "Import CSV into Google Maps in one click"
    ],
    places: [
      {
        name: "Kiyomizu-dera Temple",
        desc: "Sunrise viewpoint and temple complex in eastern Kyoto",
        lat: 34.9948,
        lng: 135.785,
        type: "location"
      },
      {
        name: "Nishiki Market",
        desc: "Street food lane highlighted in the ramen segment",
        lat: 35.005,
        lng: 135.764,
        type: "food"
      },
      {
        name: "Arashiyama Scenic Route",
        desc: "Transit-friendly route from central Kyoto to bamboo grove area",
        lat: 35.0094,
        lng: 135.6662,
        type: "route"
      }
    ],
    primaryCtaLabel: "Open in Google Maps",
    primaryCtaHref: "https://www.google.com/maps",
    secondaryCtaLabel: "Copy CSV Data",
    secondaryCtaHref: "#"
  },
  workflowPlaybook: {
    heading: "Master the 5-minute TravelMuse workflow.",
    blurb:
      "Simple, intelligent, and actionable. From one YouTube link to a polished guide and map-ready list in six clear steps.",
    steps: [
      {
        title: "Paste YouTube Link",
        detail: "Drop a YouTube video URL into the workspace to start the workflow instantly.",
        icon: "link"
      },
      {
        title: "AI Travel Parsing",
        detail: "AI scans the video and extracts places, food, stays, routes, and practical travel signals.",
        icon: "scan"
      },
      {
        title: "Smart Structuring",
        detail: "The engine organizes findings into a clean draft travel handbook with logical sections.",
        icon: "structure"
      },
      {
        title: "Visual Editing",
        detail: "Refine copy, layout, and style in a Gamma-like editor without touching design tools.",
        icon: "edit"
      },
      {
        title: "Save & Publish",
        detail: "Export as a polished web page or PDF and generate a shareable guide link.",
        icon: "publish"
      },
      {
        title: "Google Maps Import",
        detail: "Send extracted coordinates into Google Maps so followers can navigate immediately.",
        icon: "map"
      }
    ]
  },
  editorShowcase: {
    heading: "A Gamma-style editing canvas built for travel creators.",
    blurb:
      "Turn AI output into a polished guide page: drag blocks, tweak brand visuals, and publish without opening design software.",
    leftRail: [
      "Trip Hero",
      "Route Timeline",
      "Map Embed",
      "Food Spots",
      "Stay Picks",
      "Budget Notes"
    ],
    canvasCards: [
      {
        title: "Kyoto Weekend Route",
        detail: "Day-by-day route cards generated from your video, ready for final polish and publishing.",
        tag: "Guide Block"
      },
      {
        title: "Map + Spots",
        detail: "Auto-linked locations with short context so fans can understand where to go and why.",
        tag: "POI Block"
      },
      {
        title: "Creator Notes",
        detail: "Add personal tips, budget reminders, and transport advice before export.",
        tag: "Tip Block"
      }
    ],
    rightRail: [
      { label: "Template", value: "Story Atlas" },
      { label: "Brand Color", value: "Creator Palette Applied" },
      { label: "Layout", value: "Single Scroll + Sticky Map" },
      { label: "Export", value: "Landing Page + PDF" }
    ]
  },
  features: {
    heading: "Core modules from parsing to distribution, all in one chain.",
    rows: [
      {
        module: "YouTube Video Parsing",
        detail: "Supports single/multi-video links and identifies travel-specific content automatically.",
        value: "Hours -> Minutes"
      },
      {
        module: "Smart Content Structuring",
        detail: "Extracts and organizes place, food, lodging, transport, and budget information.",
        value: "Clear & Professional"
      },
      {
        module: "Gamma-style Editor",
        detail: "Visual editing with drag blocks, templates, brand colors, and image insertion.",
        value: "No Pro Design Tool"
      },
      {
        module: "Multi-format Output",
        detail: "Publish as web page, PDF, or embeddable link for social distribution.",
        value: "Flexible Distribution"
      },
      {
        module: "Google Maps One-click Import",
        detail: "Extracts coordinates and turns them into ready-to-navigate map routes.",
        value: "Ready to Navigate"
      }
    ]
  },
  comparison: {
    heading: "TravelMuse AI owns the travel conversion layer, not generic content generation.",
    rows: [
      {
        dimension: "Travel-vertical focus",
        travelMuse: "Native",
        gamma: "Generic",
        notionAi: "Generic",
        canva: "Generic"
      },
      {
        dimension: "Video parsing",
        travelMuse: "Core capability",
        gamma: "No",
        notionAi: "No",
        canva: "No"
      },
      {
        dimension: "Map import",
        travelMuse: "One-click",
        gamma: "No",
        notionAi: "No",
        canva: "No"
      },
      {
        dimension: "Creator monetization workflows",
        travelMuse: "Built-in",
        gamma: "Limited",
        notionAi: "Limited",
        canva: "Partial"
      }
    ]
  },
  pricing: {
    heading: "Start free, upgrade when your content output scales.",
    tiers: [
      {
        name: "Free",
        price: "$0",
        tag: "Explore",
        features: [
          "3 video parses per month",
          "Watermarked exports",
          "Google Maps import",
          "Single-guide workflows"
        ]
      },
      {
        name: "Pro",
        price: "$19/mo",
        tag: "Growth",
        featured: true,
        features: [
          "30 video parses per month",
          "No-watermark exports",
          "Template customization",
          "Multi-video merge"
        ]
      },
      {
        name: "Max",
        price: "$49/mo",
        tag: "Scale",
        features: [
          "Unlimited parses",
          "Advanced templates + custom branding",
          "Priority support",
          "Best for full-time creators"
        ]
      }
    ]
  },
  b2b: {
    heading: "Enterprise APIs extend the same pipeline to OTAs, tourism boards, and travel brands.",
    blurb:
      "TravelMuse B2B is the second growth engine: parse video at scale, auto-generate routes, and embed map-ready destination content into partner products.",
    useCases: [
      {
        segment: "OTA Platforms",
        impact: "Generate itinerary products faster with less editorial overhead."
      },
      {
        segment: "Tourism Boards / DMOs",
        impact: "Convert official destination media into digital guide experiences."
      },
      {
        segment: "Hotel & Airline Groups",
        impact: "Auto-produce destination recommendations from campaign videos."
      },
      {
        segment: "Content Marketplaces",
        impact: "Embed structured travel extraction as a premium platform feature."
      }
    ],
    plans: [
      {
        plan: "Usage API",
        pricing: "Tiered by request volume",
        fit: "Startups and mid-size travel platforms"
      },
      {
        plan: "Enterprise Annual",
        pricing: "Fixed annual + unlimited calls",
        fit: "Large OTAs and major hospitality networks"
      },
      {
        plan: "Custom Integration",
        pricing: "Project-based engagement",
        fit: "Partners with white-label and advanced workflow requirements"
      }
    ]
  },
  traction: {
    heading: "Growth roadmap ties creator adoption to enterprise expansion.",
    revenueRows: [
      {
        metric: "Registered users",
        year1: "5,000",
        year2: "20,000",
        year3: "50,000"
      },
      {
        metric: "Paying users",
        year1: "400",
        year2: "1,920",
        year3: "6,000"
      },
      {
        metric: "C-side ARR",
        year1: "$120K",
        year2: "$576K",
        year3: "$1.8M"
      },
      {
        metric: "B2B ARR",
        year1: "-",
        year2: "$100K",
        year3: "$500K"
      },
      {
        metric: "Total ARR",
        year1: "$120K",
        year2: "$676K",
        year3: "$2.3M"
      }
    ],
    milestones: [
      {
        quarter: "Q2 2025",
        target: "Launch MVP and begin creator pilot testing."
      },
      {
        quarter: "Q4 2025",
        target: "Public release and Product Hunt launch."
      },
      {
        quarter: "Q1 2026",
        target: "Pass 5,000 users and open seed fundraising."
      },
      {
        quarter: "Q3 2026",
        target: "Release enterprise API and sign first B2B clients."
      },
      {
        quarter: "Q4 2026",
        target: "Cross $120K ARR and prepare Series A roadmap."
      }
    ]
  },
  finalCta: {
    heading: "Build the operating layer for global travel creators.",
    body: "TravelMuse AI is looking for creator partners and strategic investors who believe the next wave of travel media is actionable, structured, and map-native."
  }
};
