import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  walletReviews,
  getReviewBySlug,
  getAllReviewSlugs,
  getVerdictLabel,
} from '../../data/reviews'
import { WalletReviewContent } from './WalletReviewContent'

interface Props {
  params: Promise<{ wallet: string }>
}

export async function generateStaticParams() {
  return getAllReviewSlugs().map((slug) => ({
    wallet: slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { wallet } = await params
  const review = getReviewBySlug(wallet)

  if (!review) {
    return {
      title: 'Wallet Review Not Found | Ethereum Classic',
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

export default async function WalletReviewPage({ params }: Props) {
  const { wallet } = await params
  const review = getReviewBySlug(wallet)

  if (!review) {
    notFound()
  }

  // Get related reviews (same verdict or top rated, excluding current)
  const relatedReviews = walletReviews
    .filter((r) => r.id !== review.id)
    .sort((a, b) => b.rating.overall - a.rating.overall)
    .slice(0, 3)

  return <WalletReviewContent review={review} relatedReviews={relatedReviews} />
}
