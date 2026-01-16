interface StatProps {
  label: string
  value: string
}

function Stat({ label, value }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-[var(--etc)] md:text-3xl">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <section className="border-y border-[var(--border-soft)] bg-[var(--panel)] py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <Stat label="Years Running" value="9+" />
          <Stat label="Active Addresses" value="1M+" />
          <Stat label="Hashrate" value="200+ TH/s" />
          <Stat label="Daily Transactions" value="50k+" />
        </div>
      </div>
    </section>
  )
}
