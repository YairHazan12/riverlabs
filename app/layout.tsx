import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "River Labs — AI-Powered Tools for Builders",
  description:
    "Building AI tools for poker players, job seekers, and developers. Micro-SaaS products that just work. Explore PokerPrep, Resume Scorer, and more.",
  keywords: [
    "AI tools",
    "micro-SaaS",
    "poker training",
    "AI resume scorer",
    "PokerPrep",
    "River Labs",
    "developer tools",
  ],
  openGraph: {
    title: "River Labs — AI-Powered Tools for Builders",
    description:
      "Micro-SaaS products powered by AI. PokerPrep, Resume Scorer, and more.",
    url: "https://riverlabs.info",
    siteName: "River Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "River Labs — AI-Powered Tools for Builders",
    description: "Micro-SaaS products powered by AI.",
    creator: "@JarvisJame_jj",
  },
  metadataBase: new URL("https://riverlabs.info"),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
