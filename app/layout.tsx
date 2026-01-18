import type { Metadata } from "next";
import "./globals.css";
import BackgroundSystem from "./components/BackgroundSystem";
import Navigation from "./components/Navigation";
import { Providers } from "./providers";
import { OrganizationJsonLd, WebsiteJsonLd, CryptocurrencyJsonLd } from "./components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethereumclassic.com"),
  title: "Ethereum Classic — Proof-of-Work Smart Contracts",
  description:
    "Ethereum Classic is the only mature Proof-of-Work blockchain with smart contracts. Get wallets, buy ETC, and discover apps.",
  openGraph: {
    title: "Ethereum Classic — Proof-of-Work Smart Contracts",
    description: "The only mature Proof-of-Work blockchain with smart contracts. Get wallets, buy ETC, and discover apps.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ethereum Classic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethereum Classic — Proof-of-Work Smart Contracts",
    description: "The only mature Proof-of-Work blockchain with smart contracts.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
  alternates: {
    types: {
      'application/rss+xml': '/news/feed.xml',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <CryptocurrencyJsonLd />
      </head>
      {/* isolate = background stays behind even if future components create stacking contexts */}
      <body className="relative isolate min-h-dvh bg-[#0B0F14] text-white antialiased">
        <Providers>
          <BackgroundSystem />
          <Navigation />
          <div className="relative z-10 pt-16">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
