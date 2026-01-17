import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Build | Ethereum Classic',
  description: 'Developer resources for Ethereum Classic',
}

export default function BuildPage() {
  return (
    <main className="px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Build on ETC</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Ethereum Classic is EVM-compatible. Use familiar Ethereum tooling to write, deploy, and operate smart contracts.
        </p>
        <p className="mt-4 text-white/50">
          Full developer resources coming in Phase 3
        </p>
      </div>

      {/* Developer tools grid */}
      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
          href="https://hardhat.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-semibold">Hardhat</div>
          <div className="mt-1 text-sm text-white/60">
            Local dev, testing, deployment workflows.
          </div>
        </a>

        <a
          className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
          href="https://book.getfoundry.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-semibold">Foundry</div>
          <div className="mt-1 text-sm text-white/60">
            Fast toolchain for Solidity testing and scripts.
          </div>
        </a>

        <a
          className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
          href="https://docs.soliditylang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-semibold">Solidity Docs</div>
          <div className="mt-1 text-sm text-white/60">
            Smart contract programming language.
          </div>
        </a>

        <a
          className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
          href="https://eips.ethereum.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-semibold">EVM Standards (EIPs)</div>
          <div className="mt-1 text-sm text-white/60">
            Token and interface standards used across EVM chains.
          </div>
        </a>

        <a
          className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
          href="https://chainlist.org/chain/61"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-semibold">RPC Endpoints</div>
          <div className="mt-1 text-sm text-white/60">
            Public endpoints for ETC mainnet via Chainlist.
          </div>
        </a>

        <a
          className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
          href="https://etc.blockscout.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-semibold">Blockscout</div>
          <div className="mt-1 text-sm text-white/60">
            Block explorer for ETC mainnet.
          </div>
        </a>
      </div>

      <div className="mt-12 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/80 transition hover:bg-white/10"
          >
            Back to Home
          </Link>
          <Link
            href="/apps"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-6 py-3 font-medium text-white transition hover:bg-emerald-400/20"
          >
            View Infrastructure
          </Link>
        </div>
      </div>
    </main>
  )
}
