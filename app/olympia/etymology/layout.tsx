import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Olympia: Etymology of Ethereum Classic's 2026 Network Upgrade",
  description:
    "Why Olympia? The name traces three parallel traditions: the Olympic testnet that stress-tested Ethereum in 2015, the ancient Panhellenic sanctuary sovereign to no city-state, and Marvel's Eternals — beings who persist across every catastrophe. The etymology behind Ethereum Classic's most significant hard fork.",
  keywords: [
    'Olympia Ethereum Classic',
    'Olympia network upgrade etymology',
    'Ethereum Classic upgrade history',
    'Olympic testnet Ethereum',
    'ETC hard fork history',
    'ETC upgrade 2026',
    'Ethereum Classic network upgrade',
    'ETC upgrade naming tradition',
    'Marvel Eternals ETC',
    'Panhellenic sanctuary',
    'ETC upgrade origin',
    'Ethereum Classic origin story',
    'ekecheiria',
  ],
  openGraph: {
    title: "Olympia: The Name Behind Ethereum Classic's 2026 Network Upgrade",
    description:
      "From the Olympic testnet that stress-tested Ethereum in 2015, to the ancient Panhellenic sanctuary sovereign to none, to Marvel's Eternals — the etymology behind ETC's most significant upgrade.",
    type: 'article',
  },
}

export default function EtymologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
