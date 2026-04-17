"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/lib/ga";

export function GaPageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const search = window.location.search;
    const url = search ? `${pathname}${search}` : pathname;
    pageview(url);
  }, [pathname]);

  return null;
}
