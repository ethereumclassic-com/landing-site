import { redirect } from 'next/navigation'

// Price pair pages redirect to the markets page which has live data
// The /markets page already handles all price display with CoinGecko API
export default async function PricePairPage() {
  redirect('/markets')
}
