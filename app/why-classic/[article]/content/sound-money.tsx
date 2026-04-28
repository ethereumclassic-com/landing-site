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
        In December 2017, the Ethereum Classic network adopted <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">ECIP-1017</a>, which
        established a fixed emission schedule with era-based reward reductions. Before
        ECIP-1017, ETC had the same uncapped emission model as early Ethereum: a flat 5
        ETC per block with no planned reduction or supply cap.
      </p>
      <p>
        <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">ECIP-1017</a> introduced two changes:
      </p>
      <ul>
        <li>
          Block rewards reduce by 20% every 5,000,000 blocks (approximately every 2.5
          years at average block times).
        </li>
        <li>
          The cumulative effect of these reductions produces an asymptotic maximum supply
          of approximately 210.7 million ETC.
        </li>
      </ul>

      <h2>The Emission Schedule</h2>
      <p>
        The reward structure follows a simple, predictable pattern:
      </p>
      <ul>
        <li>
          <strong>Era 1</strong> (blocks 0 &ndash; 5,000,000): 5 ETC per block
        </li>
        <li>
          <strong>Era 2</strong> (blocks 5,000,001 &ndash; 10,000,000): 4 ETC per block
        </li>
        <li>
          <strong>Era 3</strong> (blocks 10,000,001 &ndash; 15,000,000): 3.2 ETC per
          block
        </li>
        <li>
          <strong>Era 4</strong> (blocks 15,000,001 &ndash; 20,000,000): 2.56 ETC per
          block
        </li>
        <li>
          <strong>Era 5</strong> (blocks 20,000,001 &ndash; 25,000,000): 2.048 ETC per
          block
        </li>
      </ul>
      <p>
        Each subsequent era reduces the per-block reward by 20% from the previous era.
        This pattern continues indefinitely, with rewards approaching but never reaching
        zero.
      </p>

      <h2>Maximum Supply</h2>
      <p>
        The 20% reduction per era creates a geometric series. The sum converges to
        approximately 210.7 million ETC. This is not an estimate or a governance target
        &mdash; it is a mathematical consequence of the emission formula encoded in the
        protocol.
      </p>
      <p>
        No additional ETC can be created outside of this schedule. There is no mechanism
        for minting, no treasury allocation from block rewards, and no inflationary
        funding for development teams. Every ETC in existence was produced by a miner
        solving a valid proof-of-work block, at the reward rate defined for that
        block&apos;s era.
      </p>

      <h2>Comparison to Bitcoin</h2>
      <p>
        ETC&apos;s monetary policy shares structural similarities with Bitcoin&apos;s:
      </p>
      <ul>
        <li>
          Both have a fixed maximum supply (Bitcoin: 21 million BTC; ETC: ~210.7 million
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
          Both are deflationary in the long run: as rewards approach zero, the rate of new
          supply creation decreases continuously.
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
        A fixed supply schedule allows participants to make long-term decisions with full
        information. Miners can project future revenues. Holders can assess scarcity.
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
        On Ethereum Classic, these questions have definitive answers embedded in the
        protocol. The supply curve is not a policy preference. It is a consensus rule,
        enforced by every node on the network.
      </p>

      <h2>No Inflation Surprises</h2>
      <p>
        Every ETC that will ever exist is accounted for in the emission schedule. There
        are no hidden minting functions, no emergency issuance mechanisms, and no
        governance proposals that can create new tokens outside the defined schedule.
      </p>
      <p>
        The monetary policy is defined in code, verified by every node, and immutable
        under the same &ldquo;code is law&rdquo; principle that governs all other aspects
        of the Ethereum Classic protocol. Changing it would require a hard fork that the
        network&apos;s participants accept &mdash; and the community has consistently
        demonstrated that it will not accept changes to the monetary policy.
      </p>
      <p>
        For detailed supply data including current circulating supply, era progress, and
        emission projections, see the{' '}
        <a href="/research/supply" className="text-[var(--color-primary)] hover:underline">
          live supply tracker
        </a>.
      </p>
    </>
  )
}
