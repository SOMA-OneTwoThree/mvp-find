"use client";

import { useEffect } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

function getVisitStorageKey(pathname: string, source: string) {
  return `visit_logged:${pathname}:${source}`;
}

export function VisitEventLogger() {
  useEffect(() => {
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    const source = searchParams.get("source")?.trim();

    if (!source) {
      return;
    }

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
        referer: document.referrer || null,
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
