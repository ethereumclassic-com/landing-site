import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Providers } from "./providers";
import { OrganizationJsonLd, WebsiteJsonLd, CryptocurrencyJsonLd } from "./components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
    "Olympia",
    "ECIP-1111",
    "ECIP-1112",
    "ECIP-1121",
    "Fusaka",
    "EVM upgrade",
    "EVM compatibility",
    "Dencun",
    "Pectra",
    "Solidity compatibility",
    "EIP-3198",
    "CLARITY Act",
    "GENIUS Act",
    "MiCA",
    "FSA Green List",
    "digital commodity",
    "decentralized asset",
    "regulated stablecoin",
    "Japan crypto-asset",
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
      'application/atom+xml': '/news/atom.xml',
      'application/feed+json': '/news/feed.json',
    },
  },
  other: { "color-scheme": "light dark" },
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <CryptocurrencyJsonLd />
      </head>
      <body className="relative isolate min-h-dvh antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--brand-green)] focus:px-4 focus:py-2 focus:text-[var(--background)] focus:outline-none"
            >
              Skip to main content
            </a>
            <Navigation />
            <main id="main-content" className="relative z-10 pt-16">
              {children}
            </main>
          </Providers>
        </ThemeProvider>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "977635a2225b49e9929b117b3be16267"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
