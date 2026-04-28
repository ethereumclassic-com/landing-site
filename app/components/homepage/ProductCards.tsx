'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'

interface ProductCardProps {
  title: string
  description: string
  link: string
  icon: React.ReactNode
  cta: string
  index: number
}

function ProductCard({ title, description, link, icon, cta, index }: ProductCardProps) {
  return (
    <FadeIn delay={index * 100}>
      <Link
        href={link}
        className="olympia-card group flex h-full flex-col rounded-2xl border border-[var(--border-default)] bg-[var(--panel)] p-6"
      >
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--brand-green)]/10 text-[var(--brand-green)] transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--brand-green)]">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)]">{description}</p>
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--brand-green)] opacity-0 transition-opacity group-hover:opacity-100">
          {cta}
          <svg aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </Link>
    </FadeIn>
  )
}

const WalletIcon = () => (
  <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
  </svg>
)

const BuyIcon = () => (
  <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const AppsIcon = () => (
  <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
)

const LearnIcon = () => (
  <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

export default function ProductCards() {
  const products = [
    {
      title: 'Wallet',
      description: 'Secure wallets and Classic OS control plane for managing your ETC assets',
      link: '/wallet',
      icon: <WalletIcon />,
      cta: 'Get Wallet',
    },
    {
      title: 'Buy ETC',
      description: 'Purchase ETC on 100+ exchanges or swap directly with ETCswap DEX',
      link: '/buy',
      icon: <BuyIcon />,
      cta: 'Buy Now',
    },
    {
      title: 'Apps',
      description: 'Discover DeFi protocols, tools, and dApps built on Ethereum Classic',
      link: '/apps',
      icon: <AppsIcon />,
      cta: 'Explore Apps',
    },
    {
      title: 'Learn',
      description: 'Education center with guides, tutorials, and resources for ETC',
      link: '/learn',
      icon: <LearnIcon />,
      cta: 'Start Learning',
    },
  ]

  return (
    <section className="px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Get Started with Ethereum Classic
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Everything you need to use, invest in, and build on the original Ethereum
          </p>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
