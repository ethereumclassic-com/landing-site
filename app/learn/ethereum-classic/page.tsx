import { redirect } from 'next/navigation'

// Redirect to the canonical location of this article
export default function EthereumClassicPage() {
  redirect('/learn/basics/what-is-ethereum-classic')
}
