import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({ kicker, title, subtitle, className, children }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title max-w-4xl">{title}</h2>
      {subtitle ? <p className="max-w-3xl text-base tablet:text-lg text-text-muted">{subtitle}</p> : null}
      {children}
    </div>
  );
}
