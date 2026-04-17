import type { Metadata } from "next";
import Script from "next/script";
import { GaPageViewTracker } from "@/components/ga-page-view-tracker";
import { GA_MEASUREMENT_ID } from "@/lib/ga";
import "./globals.css";

export const metadata: Metadata = {
  title: "MVP Landing",
  description: "Vercel deployment test page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
              `}
            </Script>
            <GaPageViewTracker />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
