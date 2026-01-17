export default function ETCTokenomics() {
  return (
    <>
      <p>
        Ethereum Classic has a fixed monetary policy with a known maximum supply. This makes ETC one of the few smart contract platforms with sound money properties similar to Bitcoin.
      </p>

      <h2>Maximum Supply</h2>
      <p>
        The maximum supply of ETC is approximately <strong>210.7 million</strong> coins. This cap is enforced by the protocol and cannot be changed without a hard fork—which the community has consistently rejected.
      </p>
      <p>
        Unlike many cryptocurrencies with unlimited or uncertain supply, you can calculate exactly how much ETC will ever exist.
      </p>

      <h2>Emission Schedule</h2>
      <p>
        ETC follows a deflationary emission model where block rewards decrease by 20% every 5 million blocks (roughly every 2.5 years). This is known as the &ldquo;5M20&rdquo; policy.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Era</th>
              <th className="text-left">Block Range</th>
              <th className="text-left">Block Reward</th>
              <th className="text-left">Era Emission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Era 1</td>
              <td>1 - 5M</td>
              <td>5 ETC</td>
              <td>25M ETC</td>
            </tr>
            <tr>
              <td>Era 2</td>
              <td>5M - 10M</td>
              <td>4 ETC</td>
              <td>20M ETC</td>
            </tr>
            <tr>
              <td>Era 3</td>
              <td>10M - 15M</td>
              <td>3.2 ETC</td>
              <td>16M ETC</td>
            </tr>
            <tr>
              <td>Era 4</td>
              <td>15M - 20M</td>
              <td>2.56 ETC</td>
              <td>12.8M ETC</td>
            </tr>
            <tr>
              <td>Era 5</td>
              <td>20M - 25M</td>
              <td>2.048 ETC</td>
              <td>10.24M ETC</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        Current era (as of 2025): Era 4 with 2.56 ETC block reward
      </p>

      <h2>Sound Money Properties</h2>
      <p>
        ETC exhibits the key properties of sound money:
      </p>
      <ul>
        <li><strong>Scarcity:</strong> Fixed maximum supply creates genuine digital scarcity</li>
        <li><strong>Predictability:</strong> Supply at any future block is fully calculable</li>
        <li><strong>Divisibility:</strong> Each ETC divides into 10^18 smaller units (wei)</li>
        <li><strong>Durability:</strong> Digital asset immune to physical degradation</li>
        <li><strong>Fungibility:</strong> Every ETC is interchangeable with any other</li>
        <li><strong>Portability:</strong> Transfer any amount globally in minutes</li>
      </ul>

      <h2>No Treasury or Pre-Mine</h2>
      <p>
        Unlike many newer projects, Ethereum Classic:
      </p>
      <ul>
        <li>Has no ongoing treasury allocation from block rewards</li>
        <li>Distributes 100% of new coins to miners</li>
        <li>Maintains strict neutrality in coin distribution</li>
      </ul>
      <p>
        A treasury proposal was rejected by the community in 2021, demonstrating the commitment to fair distribution.
      </p>

      <h2>Inflation Rate Over Time</h2>
      <p>
        As block rewards decrease and more coins enter circulation, ETC&apos;s inflation rate continuously declines:
      </p>
      <ul>
        <li>Early eras saw higher annual inflation as the network bootstrapped</li>
        <li>Current inflation is in the low single digits</li>
        <li>Inflation approaches zero as emission decreases</li>
      </ul>
      <p>
        This contrasts with fiat currencies that typically experience ongoing or increasing inflation.
      </p>

      <h2>Transaction Fees</h2>
      <p>
        Beyond block rewards, miners also earn transaction fees. Users pay fees in ETC (measured in gas) for:
      </p>
      <ul>
        <li>Simple transfers between addresses</li>
        <li>Smart contract interactions</li>
        <li>Token swaps and DeFi operations</li>
        <li>Contract deployments</li>
      </ul>
      <p>
        Fees are determined by network demand—higher activity means higher fees, though ETC generally maintains lower fees than congested networks.
      </p>

      <h2>Use Cases</h2>
      <p>
        ETC&apos;s monetary properties support various use cases:
      </p>
      <ul>
        <li><strong>Store of value:</strong> Fixed supply provides inflation hedge</li>
        <li><strong>Medium of exchange:</strong> Pay for goods, services, and network operations</li>
        <li><strong>Gas for computation:</strong> Required for smart contract execution</li>
        <li><strong>DeFi collateral:</strong> Use as collateral in lending protocols</li>
        <li><strong>Liquidity provision:</strong> Pair with other tokens for trading</li>
      </ul>

      <h2>Acquiring ETC</h2>
      <p>
        You can acquire ETC through:
      </p>
      <ul>
        <li><strong>Exchanges:</strong> Buy with fiat or trade other crypto</li>
        <li><strong>Mining:</strong> Contribute hashpower and earn block rewards</li>
        <li><strong>DEXs:</strong> Swap tokens on ETCswap</li>
        <li><strong>Peer-to-peer:</strong> Direct transfers from others</li>
      </ul>

      <h2>Summary</h2>
      <p>
        Ethereum Classic combines smart contract capability with sound monetary policy. The fixed supply, predictable emission, and fair distribution make ETC a unique asset—a programmable blockchain with the scarcity properties of hard money.
      </p>
    </>
  )
}
