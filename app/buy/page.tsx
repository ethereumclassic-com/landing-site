import type { Metadata } from 'next'
import Link from 'next/link'
import { exchanges } from './data/exchanges'
import ExchangeCard from './components/ExchangeCard'

export const metadata: Metadata = {
  title: 'Buy ETC | Ethereum Classic',
  description: 'Buy Ethereum Classic on 100+ exchanges or ETCswap DEX',
}

interface StepProps {
  number: number
  title: string
  description: string
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 font-bold text-[var(--etc)]">
        {number}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/60">{description}</p>
      </div>
    </div>
  )
}

export default function BuyPage() {
  const dex = exchanges.find((ex) => ex.type === 'DEX' && ex.featured)
  const majorExchanges = exchanges
    .filter((ex) => ex.type === 'CEX' && ex.featured)
    .sort((a, b) => {
      const aVol = parseFloat(a.volume24h?.replace(/[$M,]/g, '') || '0')
      const bVol = parseFloat(b.volume24h?.replace(/[$M,]/g, '') || '0')
      return bVol - aVol
    })
  const additionalExchanges = exchanges.filter((ex) => ex.type === 'CEX' && !ex.featured)

  const steps = [
    {
      number: 1,
      title: 'Choose an Exchange',
      description: 'Select a centralized exchange (CEX) or use ETCswap DEX for direct trading from your wallet.',
    },
    {
      number: 2,
      title: 'Create Account (CEX only)',
      description: 'Sign up and complete KYC verification. DEX trading requires no account.',
    },
    {
      number: 3,
      title: 'Deposit Funds',
      description: 'Deposit fiat currency (USD, EUR, etc.) or cryptocurrency (BTC, USDT, etc.).',
    },
    {
      number: 4,
      title: 'Buy ETC',
      description: 'Place a buy order for ETC using your preferred trading pair.',
    },
    {
      number: 5,
      title: 'Withdraw to Wallet',
      description: 'Transfer ETC to your personal wallet or use Classic OS as your control plane.',
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-20 text-center md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Buy Ethereum Classic
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Get ETC on major centralized exchanges or trade directly on ETCswap DEX
          </p>
        </div>
      </section>

      {/* Featured DEX */}
      {dex && (
        <section className="border-y border-emerald-900/30 bg-emerald-900/10 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-center text-2xl font-bold">
              Trade on Decentralized Exchange
            </h2>
            <p className="mb-8 text-center text-white/60">
              ETCswap is Ethereum Classic&apos;s native DEX - trade directly from your wallet with no KYC
            </p>
            <ExchangeCard exchange={dex} />
          </div>
        </section>
      )}

      {/* Major Exchanges */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            Major Exchanges
          </h2>
          <p className="mb-12 text-center text-white/60">
            Top centralized exchanges by 24h trading volume
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {majorExchanges.map((exchange) => (
              <ExchangeCard key={exchange.name} exchange={exchange} />
            ))}
          </div>
        </div>
      </section>

      {/* All Exchanges */}
      <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-xl font-bold md:text-2xl">
            All Exchanges
          </h2>
          <p className="mb-12 text-center text-white/60">
            {additionalExchanges.length + majorExchanges.length}+ centralized exchanges support ETC
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {additionalExchanges.map((exchange) => (
              <ExchangeCard key={exchange.name} exchange={exchange} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            How to Buy ETC
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <Step key={step.number} {...step} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/wallet"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-6 py-3 font-medium text-white transition hover:bg-emerald-400/20"
            >
              Get a Wallet
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
