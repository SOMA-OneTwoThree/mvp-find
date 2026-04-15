"use client";

import { useEffect } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

function getVisitStorageKey(pathname: string, source: string) {
  return `visit_logged:${pathname}:${source}`;
}

function getVisitSource(search: string, referer: string) {
  const searchParams = new URLSearchParams(search);
  const sourceFromQuery = searchParams.get("source")?.trim();

  if (sourceFromQuery) {
    return sourceFromQuery;
  }

  return referer ? "referral" : "direct";
}

export function VisitEventLogger() {
  useEffect(() => {
    const pathname = window.location.pathname;
    const referer = document.referrer || "";
    const source = getVisitSource(window.location.search, referer);

    const storageKey = getVisitStorageKey(pathname, source);
    const existingState = window.sessionStorage.getItem(storageKey);

    if (existingState) {
      return;
    }

    const supabase = getSupabaseBrowserClient();

    if (!supabase) {
      return;
    }

    window.sessionStorage.setItem(storageKey, "pending");

    const logVisitEvent = async () => {
      const { error } = await supabase.from("visit_events").insert({
        path: pathname,
        source,
        referer: referer || null,
        user_agent: navigator.userAgent || null,
      });

      if (error) {
        window.sessionStorage.removeItem(storageKey);
        console.error("Failed to log visit event", error);
        return;
      }

      window.sessionStorage.setItem(storageKey, "done");
    };

    void logVisitEvent();
  }, []);

  return null;
}
