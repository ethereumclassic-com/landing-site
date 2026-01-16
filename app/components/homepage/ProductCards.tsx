import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  link: string
  icon: React.ReactNode
}

function ProductCard({ title, description, link, icon }: ProductCardProps) {
  return (
    <Link
      href={link}
      className="group block rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
    >
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="text-lg font-semibold transition group-hover:text-[var(--etc)]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-white/60">{description}</p>
    </Link>
  )
}

const WalletIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
  </svg>
)

const BuyIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const AppsIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
)

const LearnIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

export default function ProductCards() {
  const products = [
    {
      title: 'Wallet',
      description: 'Secure wallets and Classic OS control plane for ETC',
      link: '/wallet',
      icon: <WalletIcon />,
    },
    {
      title: 'Buy',
      description: 'Get ETC on 100+ exchanges or ETCswap DEX',
      link: '/buy',
      icon: <BuyIcon />,
    },
    {
      title: 'Apps',
      description: 'Discover DeFi, tools, and dApps on ETC',
      link: '/apps',
      icon: <AppsIcon />,
    },
    {
      title: 'Learn',
      description: 'Education center and guides for ETC',
      link: '/learn',
      icon: <LearnIcon />,
    },
  ]

  return (
    <section className="px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Get Started with Ethereum Classic
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
