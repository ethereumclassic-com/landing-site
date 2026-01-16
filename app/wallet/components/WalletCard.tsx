import type { Wallet } from '../data/wallets'

interface WalletCardProps {
  wallet: Wallet
}

export default function WalletCard({ wallet }: WalletCardProps) {
  return (
    <a
      href={wallet.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
    >
      <div className="mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-xl font-bold text-[var(--etc)]">
          {wallet.name[0]}
        </div>
      </div>

      <h3 className="text-lg font-semibold transition group-hover:text-[var(--etc)]">
        {wallet.name}
      </h3>

      <p className="mt-2 text-sm text-white/60">{wallet.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
          {wallet.type}
        </span>
        {wallet.supportsClassicOS && (
          <span className="rounded-full border border-emerald-900/50 bg-emerald-900/20 px-3 py-1 text-xs text-[var(--etc)]">
            Classic OS Compatible
          </span>
        )}
      </div>
    </a>
  )
}
