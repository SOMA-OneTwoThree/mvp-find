import { VisitEventLogger } from "@/components/visit-event-logger";

export default function Home() {
  return (
    <main className="hero">
      <VisitEventLogger />
      <div className="hero__content">
        <h1>MVP Landing</h1>
        <p className="hero__description">Vercel deployment test page</p>
        <a className="hero__button" href="#start">
          Get Started
        </a>
      </div>
    </main>
  );
}
