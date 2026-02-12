import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  flush?: boolean;
} & HTMLAttributes<HTMLElement>;

export function SectionShell({ id, children, className, flush = false, ...props }: SectionShellProps) {
  return (
    <section id={id} className={cn(flush ? undefined : "section-block", className)} {...props}>
      {children}
    </section>
  );
}
