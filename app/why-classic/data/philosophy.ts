export interface PhilosophyArticle {
  slug: string
  title: string
  description: string
  icon: string
}

export const philosophyArticles: PhilosophyArticle[] = [
  {
    slug: 'genesis',
    title: 'Genesis',
    description:
      'The DAO exploit, the fork vote, and how Ethereum Classic preserved the original chain.',
    icon: '🌱',
  },
  {
    slug: 'code-is-law',
    title: 'Code Is Law',
    description:
      'Why immutability matters, and what it takes for a blockchain to be neutral infrastructure.',
    icon: '⚖️',
  },
  {
    slug: 'decentralism',
    title: 'Decentralism',
    description:
      'How protocol design and minimal governance keep Ethereum Classic decentralized.',
    icon: '🌐',
  },
  {
    slug: 'proof-of-work',
    title: 'Proof of Work',
    description:
      'Why Ethereum Classic stayed on proof of work, as a commitment of both principle and security.',
    icon: '⛏️',
  },
  {
    slug: 'sound-money',
    title: 'Sound Money',
    description:
      'The supply cap and emission schedule that make ETC a scarce digital asset.',
    icon: '💎',
  },
]

export function getPhilosophyArticle(slug: string): PhilosophyArticle | undefined {
  return philosophyArticles.find((a) => a.slug === slug)
}
