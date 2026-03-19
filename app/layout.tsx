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
  keywords: [
    "Ethereum Classic",
    "ETC",
    "cryptocurrency",
    "blockchain",
    "proof of work",
    "smart contracts",
    "mining",
    "DeFi",
    "dApps",
    "ETCHash",
  ],
  authors: [{ name: "Ethereum Classic" }],
  creator: "Ethereum Classic",
  openGraph: {
    title: "Ethereum Classic — Proof-of-Work Smart Contracts",
    description: "The only mature Proof-of-Work blockchain with smart contracts. Get wallets, buy ETC, and discover apps.",
    url: "https://ethereumclassic.com",
    siteName: "Ethereum Classic",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ethereum Classic — Proof-of-Work Smart Contracts", type: "image/png" }],
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
    canonical: "https://ethereumclassic.com",
    types: {
      'application/rss+xml': '/news/feed.xml',
    },
  },
  other: { "color-scheme": "dark" },
  formatDetection: { telephone: false, email: false },
  appleWebApp: {
    capable: true,
    title: "Ethereum Classic",
    statusBarStyle: "black-translucent",
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
          {/* Skip to main content link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
          >
            Skip to main content
          </a>
          <BackgroundSystem />
          <Navigation />
          <main id="main-content" className="relative z-10 pt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
