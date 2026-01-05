import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethereum Classic — Proof-of-Work Smart Contracts",
  description:
    "Ethereum Classic is the only mature Proof-of-Work blockchain with smart contracts. Use ETC, earn ETC, and build on ETC.",
  openGraph: {
    title: "Ethereum Classic — Proof-of-Work Smart Contracts",
    description:
      "Use ETC, earn ETC, and build on ETC — secured by Nakamoto consensus.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
