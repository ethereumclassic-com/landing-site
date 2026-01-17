import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  exchangeReviews,
  getReviewBySlug,
  getAllReviewSlugs,
  getVerdictLabel,
} from '../../data/reviews'
import { ExchangeReviewContent } from './ExchangeReviewContent'

interface Props {
  params: Promise<{ exchange: string }>
}

export async function generateStaticParams() {
  return getAllReviewSlugs().map((slug) => ({
    exchange: slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { exchange } = await params
  const review = getReviewBySlug(exchange)

  if (!review) {
    return {
      title: 'Exchange Review Not Found | Ethereum Classic',
    }
  }

  return {
    title: `${review.name} Review | Ethereum Classic`,
    description: review.summary,
    openGraph: {
      title: `${review.name} Review - ${getVerdictLabel(review.verdict)}`,
      description: review.summary,
    },
  }
}

export default async function ExchangeReviewPage({ params }: Props) {
  const { exchange } = await params
  const review = getReviewBySlug(exchange)

  if (!review) {
    notFound()
  }

  // Get related reviews (same type or top rated, excluding current)
  const relatedReviews = exchangeReviews
    .filter((r) => r.id !== review.id)
    .sort((a, b) => b.rating.overall - a.rating.overall)
    .slice(0, 3)

  return <ExchangeReviewContent review={review} relatedReviews={relatedReviews} />
}
