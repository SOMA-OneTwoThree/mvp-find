import {
  CTA_CLICK_EVENT_NAME,
  CTA_STORAGE_KEY_PREFIX,
  type CTAConfig,
} from "@/lib/cta";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GtagParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getGtag() {
  if (
    !GA_MEASUREMENT_ID ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return null;
  }

  return window.gtag;
}

export function pageview(url: string) {
  const gtag = getGtag();

  if (!gtag) {
    return;
  }

  gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function trackEvent(eventName: string, params: GtagParams = {}) {
  const gtag = getGtag();

  if (!gtag) {
    return;
  }

  gtag("event", eventName, params);
}

function getCTAStorageKey(ctaId: string) {
  return `${CTA_STORAGE_KEY_PREFIX}:${ctaId}`;
}

export function trackCTA(cta: CTAConfig) {
  if (!getGtag()) {
    return;
  }

  try {
    const storageKey = getCTAStorageKey(cta.ctaId);

    if (window.localStorage.getItem(storageKey)) {
      return;
    }

    trackEvent(CTA_CLICK_EVENT_NAME, {
      cta_id: cta.ctaId,
      cta_label: cta.ctaLabel,
      cta_location: cta.ctaLocation,
    });
    window.localStorage.setItem(storageKey, "true");
  } catch (error) {
    console.error("Failed to track CTA click", error);
  }
}
