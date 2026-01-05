import type { Metadata } from "next";
import "./globals.css";
import Background from "./components/Background";

export const metadata: Metadata = {
  title: "Ethereum Classic — Proof-of-Work Smart Contracts",
  description:
    "Ethereum Classic is the only mature Proof-of-Work blockchain with smart contracts. Use ETC, earn ETC, and build on ETC.",
  openGraph: {
    title: "Ethereum Classic — Proof-of-Work Smart Contracts",
    description: "Use ETC, earn ETC, and build on ETC — secured by Nakamoto consensus.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ethereum Classic" }],
  },

  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#0B0F14] text-white antialiased">
        {/* Background-only visual layer */}
        <Background />

        {/* App content */}
        {children}
      </body>
    </html>
  );
}
