"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import type { CTAConfig } from "@/lib/cta";
import { trackCTA } from "@/lib/ga";

type TrackedCtaLinkProps = ComponentPropsWithoutRef<"a"> & {
  cta: CTAConfig;
};

export function TrackedCtaLink({
  cta,
  onClick,
  children,
  ...props
}: TrackedCtaLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackCTA(cta);
    onClick?.(event);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children ?? cta.ctaLabel}
    </a>
  );
}
