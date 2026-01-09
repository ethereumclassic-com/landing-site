import type { Metadata } from "next";
import "./globals.css";
import BackgroundSystem from "./components/BackgroundSystem";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethereumclassic.com"),
  title: "Ethereum Classic — Proof-of-Work Smart Contracts",
  description:
    "Ethereum Classic is the only mature Proof-of-Work blockchain with smart contracts. Use ETC, earn ETC, and build on ETC.",
  openGraph: {
    title: "Ethereum Classic — Proof-of-Work Smart Contracts",
    description: "Use ETC, earn ETC, and build on ETC — secured by Nakamoto consensus.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ethereum Classic" }],
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* isolate = background stays behind even if future components create stacking contexts */}
      <body className="relative isolate min-h-dvh bg-[#0B0F14] text-white antialiased">
        <BackgroundSystem />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
