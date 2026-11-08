import { ecipUrl } from '@/lib/olympia-ecips'

/**
 * Ethereum Classic DAO LLC and Olympia, in the words ethereumclassicdao.org settled with the
 * maintainer, so the two sites say the same thing. Every sentence is read from ECIP-1114
 * §"Off-Chain Legal Interface and Donations" and ECIP-1113 §"Prohibited Features"; change it there,
 * on the DAO's site, before changing it here.
 */
export default function LegalWrapper() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">Ethereum Classic DAO LLC and Olympia</h2>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
        <p>
          ECIP-1114 names Ethereum Classic DAO LLC, Wyoming Filing ID 2025-001671865, as the legal wrapper it
          contemplates for Olympia DAO. An on-chain organization has no legal personality: it cannot sign a
          contract, engage an auditor or pay a contractor in fiat. A registered entity supplies that
          personality for the off-chain acts, without acquiring authority over the on-chain organization.
        </p>
        <p>
          Once Olympia DAO is operating, the LLC would carry out the off-chain obligations a passed proposal
          has fixed. If the DAO votes to fund a security audit, for example, the LLC signs the engagement
          with the auditing firm; the proposal, not the LLC, set the auditor, the scope and the amount. In
          ECIP-1114&rsquo;s words, the LLC is downstream of Olympia DAO in authority: Olympia DAO is not its
          subsidiary, and the LLC holds no position in the ECIP process, which is ECIP-1000&rsquo;s.
        </p>
        <p>
          No off-chain entity can unilaterally approve or veto a governance action, the LLC holds no on-chain
          role, and the Treasury&rsquo;s balance moves only by a passed, timelocked proposal. Donations the
          LLC receives off-chain are its own and are accounted for separately. Until Olympia DAO is
          operating, the LLC holds no role in anything ECIP-1114 specifies.
        </p>
      </div>
      <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-[var(--text-subtle)]">
        <a href={ecipUrl(1114)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--text-primary)]">
          ECIP-1114 §&ldquo;Off-Chain Legal Interface and Donations&rdquo;
        </a>
        <a href={ecipUrl(1113)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--text-primary)]">
          ECIP-1113 §&ldquo;Prohibited Features&rdquo;
        </a>
      </p>
    </div>
  )
}
