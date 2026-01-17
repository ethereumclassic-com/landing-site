import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const categoryName = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${categoryName} News | Ethereum Classic`,
    description: `Latest ${categoryName.toLowerCase()} news and updates from the Ethereum Classic ecosystem.`,
  }
}

export default async function NewsCategoryPage({ params }: Props) {
  const { category } = await params
  const categoryName = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={`${categoryName} News`}
      description={`Stay updated with the latest ${categoryName.toLowerCase()} news from the Ethereum Classic ecosystem. Articles, announcements, and insights.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to News', href: '/news' }}
      relatedLinks={[
        { label: 'News Hub', href: '/news' },
        { label: 'Community', href: '/community' },
        { label: 'Learn about ETC', href: '/learn' },
      ]}
    />
  )
}
