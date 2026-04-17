export const CTA_CLICK_EVENT_NAME = "cta_click";
export const CTA_STORAGE_KEY_PREFIX = "cta_clicked";

export type CTAConfig = {
  ctaId: string;
  ctaLabel: string;
  ctaLocation: string;
};

export const landingPageCTAs = {
  heroPrimary: {
    ctaId: "hero_primary_cta",
    ctaLabel: "Get Started",
    ctaLocation: "hero",
  },
} satisfies Record<string, CTAConfig>;
