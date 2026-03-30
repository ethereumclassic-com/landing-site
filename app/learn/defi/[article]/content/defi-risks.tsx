export default function DefiRisks() {
  return (
    <>
      <p>
        DeFi offers powerful financial tools, but it comes with real risks that every participant should understand. This guide covers the most common risks and practical steps to protect yourself.
      </p>

      <h2>Impermanent Loss</h2>
      <p>
        Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes after you deposit. If one token rises significantly while the other stays flat, the AMM rebalances your position&mdash;you end up with more of the cheaper token and less of the expensive one.
      </p>
      <p>
        For example, if you deposit ETC and USC into a pool and ETC doubles in price, you would have earned more by simply holding both tokens. The &ldquo;loss&rdquo; is impermanent because it reverses if prices return to the original ratio. However, if you withdraw while prices are diverged, the loss becomes permanent.
      </p>
      <p>
        Mitigation: Pools with correlated assets (like stablecoin pairs) experience less impermanent loss. Trading fee earnings can also offset IL over time.
      </p>

      <h2>Smart Contract Risk</h2>
      <p>
        Every DeFi protocol is only as secure as its smart contracts. Bugs in contract code can lead to funds being locked, drained, or behaving unexpectedly. Even audited contracts can contain vulnerabilities that are discovered later.
      </p>
      <p>
        Mitigation: Use established protocols with battle-tested code. Check whether contracts have been audited. Avoid depositing large amounts into newly deployed or unverified contracts. You can verify contract source code on Blockscout.
      </p>

      <h2>Rug Pulls</h2>
      <p>
        A rug pull occurs when a token creator removes liquidity from a pool or uses hidden contract functions to drain funds. The token price collapses and holders are left with worthless tokens.
      </p>
      <p>
        Warning signs to watch for:
      </p>
      <ul>
        <li>Liquidity is not burned or locked&mdash;the deployer can withdraw it at any time</li>
        <li>Token contract has owner-only functions like minting unlimited tokens or pausing transfers</li>
        <li>Anonymous team with no verifiable track record</li>
        <li>Unrealistic yield promises or aggressive marketing</li>
        <li>Contract source code is not verified on the block explorer</li>
      </ul>
      <p>
        ETCswap Launchpad mitigates this risk by burning liquidity when a token graduates from the bonding curve to a V3 pool. Burned liquidity cannot be removed by anyone.
      </p>

      <h2>Oracle Manipulation</h2>
      <p>
        Some DeFi protocols rely on price oracles to determine asset values. If an attacker can manipulate the oracle&apos;s reported price, they can exploit protocols that trust that data. This is more relevant to lending protocols and synthetic assets than simple AMM swaps.
      </p>

      <h2>Flash Loan Attacks</h2>
      <p>
        Flash loans allow borrowing large amounts without collateral, as long as the loan is repaid within the same transaction. Attackers use flash loans to temporarily manipulate prices or exploit protocol logic. These attacks happen in a single block and are difficult to prevent.
      </p>

      <h2>Regulatory Risk</h2>
      <p>
        DeFi exists in an evolving regulatory environment. Regulations around token classification, tax obligations, and protocol compliance vary by jurisdiction and continue to develop. Stay informed about the rules that apply in your location.
      </p>

      <h2>Practical Risk Mitigation</h2>
      <ul>
        <li><strong>Start small:</strong> Test with amounts you can afford to lose while learning</li>
        <li><strong>Use audited protocols:</strong> Stick to established DeFi platforms with proven track records</li>
        <li><strong>Verify on Blockscout:</strong> Check token contracts, liquidity status, and deployer activity before interacting</li>
        <li><strong>Diversify:</strong> Don&apos;t concentrate all funds in a single pool or protocol</li>
        <li><strong>Understand before depositing:</strong> Never put money into something you don&apos;t understand</li>
        <li><strong>Check liquidity locks:</strong> For new tokens, verify that pool liquidity is burned or locked in a timelock contract</li>
      </ul>

      <h2>Building Confidence</h2>
      <p>
        DeFi risks are real but manageable. By understanding the mechanisms, starting conservatively, and using established protocols like ETCswap, you can participate in decentralized finance with informed confidence.
      </p>
    </>
  )
}
