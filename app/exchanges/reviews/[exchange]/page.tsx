import { redirect } from 'next/navigation'

interface Props {
  params: Promise<{ exchange: string }>
}

export default async function ExchangeReviewPage({ params }: Props) {
  const { exchange } = await params
  redirect(`/buy/reviews/${exchange}`)
}
