import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ category: string; article: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  const categoryName = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${articleTitle} | Ethereum Classic`,
    description: `${categoryName} guide: ${articleTitle.toLowerCase()}. Learn about Ethereum Classic.`,
  }
}

export default async function LearnArticlePage({ params }: Props) {
  const { category, article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  const categoryName = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={articleTitle}
      description={`Comprehensive guide to ${articleTitle.toLowerCase()}. Part of our ${categoryName.toLowerCase()} series on Ethereum Classic.`}
      expectedPhase="Phase 2"
      backLink={{ label: `Back to ${categoryName}`, href: `/learn/${category}` }}
      relatedLinks={[
        { label: categoryName, href: `/learn/${category}` },
        { label: 'Learning Center', href: '/learn' },
        { label: 'ETC Basics', href: '/learn/basics' },
      ]}
    />
  )
}
