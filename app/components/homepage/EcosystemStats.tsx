interface StatCardProps {
  label: string
  value: string
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--panel)] p-6">
      <div className="text-2xl font-bold text-[var(--etc)]">{value}</div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  )
}

export default function EcosystemStats() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Network Activity
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Network Hashrate" value="200+ TH/s" />
          <StatCard label="Block Time" value="~13s" />
          <StatCard label="Total Blocks" value="20M+" />
          <StatCard label="Unique Addresses" value="35M+" />
        </div>
      </div>
    </section>
  )
}
