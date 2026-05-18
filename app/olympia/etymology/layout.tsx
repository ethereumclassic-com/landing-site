import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etymology & Lore — Why the Upgrade Is Named Olympia',
  description:
    "Olympic was Ethereum's ninth testnet — a gauntlet designed to break. Olympia is not the same name. The Panhellenic sanctuary sovereign to none, the home of Marvel's Eternals, the ground that endures because no one owns it. Three dimensions of a name earned over ten years.",
}

export default function EtymologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
