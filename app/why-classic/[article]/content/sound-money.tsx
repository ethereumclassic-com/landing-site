import { CURRENT_ERA, generateEraSchedule } from '@/app/research/data/emission'

export default function SoundMoney() {
  return (
    <>
      <p>
        Ethereum Classic has a fixed, algorithmic monetary policy defined in protocol
        code. The total supply of ETC is capped, the emission schedule is predetermined,
        and no committee or governance process can alter it. This makes ETC a
        &ldquo;sound money&rdquo; asset: its supply curve is known in advance and
        enforced by consensus rules.
      </p>

      <h2>ECIP-1017: The Monetary Policy</h2>
      <p>
        <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">ECIP-1017</a>, proposed in
        November 2016, took effect at block 5,000,000 in December 2017. Before it, ETC had the
        same uncapped emission as early Ethereum: a flat 5 ETC per block, with no planned
        reduction and no supply cap. ECIP-1017 changed that in two ways:
      </p>
      <ul>
        <li>
          Block rewards fall by 20% every 5,000,000 blocks, a little over two years at recent
          block times.
        </li>
        <li>
          Those reductions bound total supply, which approaches a maximum of 210.7 million ETC.
        </li>
      </ul>

      <h2>The Emission Schedule</h2>
      <p>
        The reward structure follows a simple, predictable pattern:
      </p>
      <ul>
        {generateEraSchedule(CURRENT_ERA).map((era) => (
          <li key={era.number}>
            <strong>Era {era.number}</strong>{' '}(blocks {era.startBlock.toLocaleString('en-US')} to{' '}
            {era.endBlock.toLocaleString('en-US')}): {era.blockReward} ETC per block
          </li>
        ))}
      </ul>
      <p>
        Era {CURRENT_ERA} is the current era. Each era reduces the per-block reward by 20% from
        the one before, and the pattern continues indefinitely, with rewards approaching but
        never reaching zero.
      </p>

      <h2>Maximum Supply</h2>
      <p>
        The 20% reduction per era makes issuance a geometric series, so total supply converges
        instead of growing without limit. ECIP-1017 sets out the bounds, counting the 72 million
        ETC in the genesis block: total supply will not exceed 210.7 million ETC, a ceiling that
        assumes two uncles in every block, and at the uncle rate of the network&apos;s first era
        it comes to no less than 198.5 million. Both figures follow from the emission formula
        encoded in the protocol, not from a governance target.
      </p>
      <p>
        No additional ETC can be created outside of this schedule. There is no mechanism
        for minting, no treasury allocation from block rewards, and no inflationary
        funding for development teams. Apart from the 72 million ETC in the genesis block, every ETC in existence was produced
        by a miner solving a valid proof-of-work block, at the reward rate set for that
        block&apos;s era.
      </p>

      <h2>Comparison to Bitcoin</h2>
      <p>
        ETC&apos;s monetary policy shares structural similarities with Bitcoin&apos;s:
      </p>
      <ul>
        <li>
          Both have a maximum supply (Bitcoin: 21 million BTC; ETC: at most 210.7 million
          ETC).
        </li>
        <li>
          Both reduce block rewards on a predetermined schedule (Bitcoin halves every
          210,000 blocks; ETC reduces by 20% every 5,000,000 blocks).
        </li>
        <li>
          Both supply curves are defined entirely in protocol code, with no discretionary
          issuance.
        </li>
        <li>
          Both issue less over time: each reduction lowers the rate of new supply, which
          approaches zero.
        </li>
      </ul>
      <p>
        The primary difference is the reduction rate. Bitcoin&apos;s 50% halvings produce
        sharper supply shocks at longer intervals. ETC&apos;s 20% reductions produce
        gentler transitions at shorter intervals. Both approaches converge to zero new
        issuance, but ETC&apos;s curve is smoother.
      </p>

      <h2>Why Predictable Monetary Policy Matters</h2>
      <p>
        A fixed supply schedule lets participants plan for the long term knowing how supply
        will grow. Miners can project future revenues. Holders can assess scarcity.
        Developers can build applications that depend on the token&apos;s economic
        properties without worrying that those properties will change.
      </p>
      <p>
        Contrast this with systems where monetary policy is set by governance votes or
        foundation decisions. In those systems, the supply schedule is a social agreement
        that can be renegotiated. Holders face uncertainty: will the community vote to
        increase inflation to fund development? Will a foundation proposal redirect block
        rewards to a treasury?
      </p>
      <p>
        On Ethereum Classic, the protocol answers these questions: the supply curve is a
        consensus rule, enforced by every node on the network.
      </p>

      <h2>No Inflation Surprises</h2>
      <p>
        Every ETC that will ever exist is accounted for, in the genesis block or the emission
        schedule. There
        are no hidden minting functions, no emergency issuance mechanisms, and no
        governance proposals that can create new tokens outside the defined schedule.
      </p>
      <p>
        The monetary policy is defined in code and verified by every node. Changing it would
        take a hard fork that the network&apos;s participants accept. Proposals to divert part
        of the block reward to a treasury were rejected (ECIP-1051) or withdrawn (ECIP-1098),
        and the proposed Olympia upgrade would leave block rewards untouched.
      </p>
      <p>
        For detailed supply data, including circulating supply, era progress and emission
        projections, see the{' '}
        <a href="/research/supply" className="text-[var(--color-primary)] hover:underline">
          live supply tracker
        </a>.
      </p>
    </>
  )
}
