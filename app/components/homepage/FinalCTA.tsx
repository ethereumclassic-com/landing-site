import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Start Using Ethereum Classic Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Get a wallet, buy some ETC, and explore the ecosystem
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/wallet"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-6 py-3 text-base font-medium text-white transition hover:bg-emerald-400/20"
          >
            Get Wallet
          </Link>
          <Link
            href="/buy"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/80 transition hover:bg-white/10"
          >
            Buy ETC
          </Link>
          <Link
            href="/apps"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/80 transition hover:bg-white/10"
          >
            Browse Apps
          </Link>
        </div>
      </div>
    </section>
  )
}
