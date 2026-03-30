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
      'Why immutability matters and what it means for blockchain to be truly neutral infrastructure.',
    icon: '⚖️',
  },
  {
    slug: 'decentralism',
    title: 'Decentralism',
    description:
      'How Ethereum Classic maximizes decentralization through protocol design and governance minimization.',
    icon: '🌐',
  },
  {
    slug: 'proof-of-work',
    title: 'Proof of Work',
    description:
      'Why ETC chose to remain on proof-of-work as a philosophical and security commitment.',
    icon: '⛏️',
  },
  {
    slug: 'sound-money',
    title: 'Sound Money',
    description:
      'The fixed supply cap, emission schedule, and monetary policy that make ETC a scarce digital asset.',
    icon: '💎',
  },
]

export function getPhilosophyArticle(slug: string): PhilosophyArticle | undefined {
  return philosophyArticles.find((a) => a.slug === slug)
}
