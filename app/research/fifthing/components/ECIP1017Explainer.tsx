export default function ECIP1017Explainer() {
  return (
    <div className="space-y-8">
      {/* What is ECIP-1017 */}
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">What is ECIP-1017?</h2>
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          <a
            href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--brand-green)] hover:underline"
          >
            ECIP-1017
          </a>{' '}
          is the Ethereum Classic Improvement Proposal that defines the monetary policy for ETC. Adopted in 2017,
          it establishes a predictable, deflationary emission schedule: every 5,000,000 blocks (approximately
          2–2.5 years), the block reward is reduced by 20%. This creates a known supply ceiling and eliminates
          arbitrary monetary policy.
        </p>

        {/* How it works — numbered steps */}
        <div className="mt-6 space-y-3">
          {[
            {
              n: '1',
              title: 'Fixed Era Length',
              body: 'Each era spans exactly 5,000,000 blocks. At an average of 13 seconds per block, an era lasts roughly 2–2.5 years.',
            },
            {
              n: '2',
              title: 'Geometric Reduction',
              body: 'At each era boundary (the "fifthing"), the block reward is multiplied by 0.8 — a 20% reduction. Starting from 5 ETC, rewards halve approximately every 3 eras.',
            },
            {
              n: '3',
              title: 'Converging Supply',
              body: 'The geometric series converges. Including the 72M ETC genesis supply, total ETC supply approaches ~199–210M. No arbitrary inflation is ever possible.',
            },
          ].map((step) => (
            <div key={step.n} className="flex gap-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--brand-green)]/40 bg-[var(--brand-green)]/10 text-xs font-bold text-[var(--brand-green)]">
                {step.n}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{step.title}</p>
                <p className="mt-0.5 text-sm text-[var(--text-muted)]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] hover:underline"
        >
          Read the ECIP-1017 Specification
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>

      {/* ETC vs BTC comparison */}
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">ETC Fifthing vs. BTC Halving</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border-default)]">
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">Metric</th>
                <th className="pb-3 pl-4 text-left text-xs font-medium uppercase tracking-wider text-[var(--brand-green)]">ETC (ECIP-1017)</th>
                <th className="pb-3 pl-4 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">BTC (Satoshi Policy)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              {[
                { metric: 'Reward reduction', etc: '20% (×0.8)', btc: '50% (×0.5)' },
                { metric: 'Era / cycle length', etc: '5,000,000 blocks (~2–2.5 yrs)', btc: '210,000 blocks (~4 yrs)' },
                { metric: 'Starting reward', etc: '5 ETC (Era 1)', btc: '50 BTC (Cycle 1)' },
                { metric: 'Genesis / pre-mine', etc: '72,009,990 ETC (ETH Foundation ICO*)', btc: 'None' },
                { metric: 'Max supply (est.)', etc: '~199–210M ETC', btc: '21,000,000 BTC' },
                { metric: 'Mechanism', etc: 'Geometric decay at era boundary', btc: 'Integer halving at cycle boundary' },
                { metric: 'Event name', etc: 'Fifthing (20% = 1/5th reduction)', btc: 'Halving (50% = 1/2 reduction)' },
              ].map((row) => (
                <tr key={row.metric}>
                  <td className="py-3 text-xs font-medium text-[var(--text-muted)]">{row.metric}</td>
                  <td className="py-3 pl-4 text-xs text-[var(--text-primary)]">{row.etc}</td>
                  <td className="py-3 pl-4 text-xs text-[var(--text-muted)]">{row.btc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[var(--text-muted)]">
          * ICO funds were weaponized against ETC in the 2016 fork, where large quantities of ETC were market sold on the open market to kill its price. ETC survived and the ICO funds were decentralized to the open market.
        </p>
      </div>
    </div>
  )
}
