import { TrackedCtaLink } from "@/components/tracked-cta-link";
import { landingPageCTAs } from "@/lib/cta";

export default function Home() {
  return (
    <main className="hero">
      <div className="hero__content">
        <h1>MVP Landing</h1>
        <p className="hero__description">Simple page for Vercel deployment checks</p>
        <TrackedCtaLink
          cta={landingPageCTAs.heroPrimary}
          className="hero__button"
          href="#start"
        />
      </div>
    </main>
  );
}
