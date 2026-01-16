'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Proof-of-Work Smart Contracts
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Ethereum Classic is the only mature PoW blockchain with smart contracts.
          Secured by mining, compatible with Ethereum tools.
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
        </div>
      </motion.div>
    </section>
  )
}
