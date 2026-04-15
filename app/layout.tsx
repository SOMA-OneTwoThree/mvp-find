import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
