import { GetStartedButton } from "@/components/get-started-button";
import { VisitEventLogger } from "@/components/visit-event-logger";

export default function Home() {
  return (
    <main className="hero">
      <VisitEventLogger />
      <div className="hero__content">
        <h1>MVP Landing</h1>
        <p className="hero__description">Simple page for Vercel deployment checks</p>
        <GetStartedButton />
      </div>
    </main>
  );
}
