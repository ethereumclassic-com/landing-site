import type { Metadata } from 'next'
import { wallets } from './data/wallets'
import WalletCard from './components/WalletCard'
import ClassicOSSection from './components/ClassicOSSection'
import WhyClassicOS from './components/WhyClassicOS'

export const metadata: Metadata = {
  title: 'Wallets & Classic OS | Ethereum Classic',
  description: 'Choose your ETC wallet and use Classic OS as your control plane',
}

export default function WalletPage() {
  const categories = ['Hardware', 'Browser', 'Mobile', 'Web'] as const

  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-20 text-center md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Wallets & Interface for Ethereum Classic
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Choose a secure wallet for key management, then use Classic OS as your control plane for economic activity
          </p>
        </div>
      </section>

      {/* Classic OS Section */}
      <ClassicOSSection />

      {/* Wallet Directory */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            Choose Your Wallet
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/60">
            Secure your ETC with hardware wallets for maximum security, or use browser/mobile wallets for convenience
          </p>

          {categories.map((category) => {
            const categoryWallets = wallets.filter((wallet) => wallet.type === category)

            if (categoryWallets.length === 0) return null

            return (
              <div key={category} className="mb-16">
                <h3 className="mb-6 text-xl font-bold">{category} Wallets</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryWallets.map((wallet) => (
                    <WalletCard key={wallet.name} wallet={wallet} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Why Classic OS */}
      <WhyClassicOS />
    </main>
  )
}
