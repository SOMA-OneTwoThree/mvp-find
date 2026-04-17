"use client";

import { trackEvent } from "@/lib/ga";

export function GetStartedButton() {
  const handleClick = () => {
    trackEvent("click_get_started", {
      button_name: "Get Started",
      page_path: window.location.pathname,
    });
  };

  return (
    <a className="hero__button" href="#start" onClick={handleClick}>
      Get Started
    </a>
  );
}
