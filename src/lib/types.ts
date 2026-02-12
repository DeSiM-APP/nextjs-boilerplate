import type { StaticImageData } from "next/image";

export type ThemeId = "atlas-light" | "midnight-route" | "sunrise-postcard";

export type BreakpointId = "mobile" | "tablet" | "laptop" | "desktop" | "wide";

export type AnimationMode = "react-bits" | "framer-fallback";

export type CtaLinks = {
  creatorPrimary: string;
  creatorSecondary: string;
  investorPrimary: string;
  partnerPrimary: string;
};

export type ProblemItem = {
  title: string;
  detail: string;
};

export type OpportunityMetric = {
  label: string;
  value: string;
};

export type WorkflowMapLabelTone = "brand" | "accent" | "success";
export type WorkflowMapLabelDirection = "left" | "right";

export type WorkflowMapLabel = {
  name: string;
  top: string;
  left: string;
  tone: WorkflowMapLabelTone;
  direction?: WorkflowMapLabelDirection;
};

export type WorkflowParsedStop = {
  title: string;
  subtitle: string;
  category: string;
  thumbnailUrl: string;
};

export type MapsExportPlaceType = "location" | "food" | "route";

export type MapsExportPlace = {
  name: string;
  desc: string;
  lat: number;
  lng: number;
  type: MapsExportPlaceType;
};

export type EditorShowcaseCard = {
  title: string;
  detail: string;
  tag: string;
};

export type EditorShowcaseControl = {
  label: string;
  value: string;
};

export type FeatureRow = {
  module: string;
  detail: string;
  value: string;
};

export type WorkflowPlaybookStep = {
  title: string;
  detail: string;
  icon: "link" | "scan" | "structure" | "edit" | "publish" | "map";
};

export type ComparisonRow = {
  dimension: string;
  travelMuse: string;
  gamma: string;
  notionAi: string;
  canva: string;
};

export type PricingTier = {
  name: string;
  price: string;
  tag: string;
  features: string[];
  featured?: boolean;
};

export type B2BUseCase = {
  segment: string;
  impact: string;
};

export type B2BPlan = {
  plan: string;
  pricing: string;
  fit: string;
};

export type RevenueRow = {
  metric: string;
  year1: string;
  year2: string;
  year3: string;
};

export type Milestone = {
  quarter: string;
  target: string;
};

export type LandingContent = {
  nav: { id: string; label: string }[];
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    inputPlaceholder: string;
    inputActionLabel: string;
  };
  problemOpportunity: {
    heading: string;
    narrative: string;
    problems: ProblemItem[];
    metrics: OpportunityMetric[];
  };
  workflow: {
    heading: string;
    blurb: string;
    videoBadge: string;
    videoScreenshotUrl: string | StaticImageData;
    videoProgressLabel: string;
    videoProgressPercent: number;
    videoTags: string[];
    transcriptSnippet: string;
    mapCardTitle: string;
    mapImageUrl: string | StaticImageData;
    mapLabels: WorkflowMapLabel[];
    parsedTitle: string;
    parsedStops: WorkflowParsedStop[];
  };
  mapsExport: {
    heading: string;
    blurb: string;
    statuses: string[];
    csvTitle: string;
    listTitle: string;
    steps: string[];
    places: MapsExportPlace[];
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  workflowPlaybook: {
    heading: string;
    blurb: string;
    steps: WorkflowPlaybookStep[];
  };
  editorShowcase: {
    heading: string;
    blurb: string;
    leftRail: string[];
    canvasCards: EditorShowcaseCard[];
    rightRail: EditorShowcaseControl[];
  };
  features: {
    heading: string;
    rows: FeatureRow[];
  };
  comparison: {
    heading: string;
    rows: ComparisonRow[];
  };
  pricing: {
    heading: string;
    tiers: PricingTier[];
  };
  b2b: {
    heading: string;
    blurb: string;
    useCases: B2BUseCase[];
    plans: B2BPlan[];
  };
  traction: {
    heading: string;
    revenueRows: RevenueRow[];
    milestones: Milestone[];
  };
  finalCta: {
    heading: string;
    body: string;
  };
};
