export default function ETCvsETH() {
  return (
    <>
      <p>
        Ethereum Classic (ETC) and Ethereum (ETH) share the same technical origins and remain compatible at the smart contract level. However, they differ significantly in consensus mechanism, monetary policy, and philosophy.
      </p>

      <h2>Key Differences at a Glance</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Feature</th>
              <th className="text-left">Ethereum Classic</th>
              <th className="text-left">Ethereum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Consensus</td>
              <td>Proof-of-Work (ETCHash)</td>
              <td>Proof-of-Stake</td>
            </tr>
            <tr>
              <td>Supply Cap</td>
              <td>Fixed (~210.7M ETC)</td>
              <td>Dynamic (no cap)</td>
            </tr>
            <tr>
              <td>Chain ID</td>
              <td>61</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Block Time</td>
              <td>~13 seconds</td>
              <td>~12 seconds</td>
            </tr>
            <tr>
              <td>EVM Compatible</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Consensus Mechanism</h2>

      <h3>ETC: Proof-of-Work</h3>
      <p>
        Ethereum Classic uses proof-of-work consensus with the ETCHash mining algorithm. Miners compete to solve computational puzzles, with successful miners earning block rewards in ETC.
      </p>
      <p>
        Benefits of PoW for ETC:
      </p>
      <ul>
        <li>Security derived from external resources (energy)</li>
        <li>Maximum censorship resistance</li>
        <li>Permissionless block production</li>
        <li>Fair coin distribution to contributors</li>
      </ul>

      <h3>ETH: Proof-of-Stake</h3>
      <p>
        Ethereum transitioned to proof-of-stake in 2022. Validators stake ETH as collateral and are randomly selected to propose blocks. This approach uses less energy but has different security tradeoffs.
      </p>

      <h2>Monetary Policy</h2>

      <h3>ETC: Fixed Supply</h3>
      <p>
        Ethereum Classic has a known, fixed monetary policy similar to Bitcoin. Block rewards decrease by 20% every 5 million blocks, resulting in a maximum supply of approximately 210.7 million ETC.
      </p>
      <p>
        This predictable emission schedule makes ETC a sound money alternative with:
      </p>
      <ul>
        <li>Scarcity through mathematical certainty</li>
        <li>No surprises—supply is fully calculable</li>
        <li>Protection against inflation</li>
      </ul>

      <h3>ETH: Dynamic Supply</h3>
      <p>
        Ethereum&apos;s supply is not capped. While EIP-1559 introduced fee burning that can make ETH deflationary during high activity, the supply depends on network usage patterns and could increase during low-activity periods.
      </p>

      <h2>Technical Compatibility</h2>
      <p>
        Both chains run the Ethereum Virtual Machine (EVM), which means:
      </p>
      <ul>
        <li>Smart contracts written for one chain work on the other</li>
        <li>Development tools like Solidity, Hardhat, and web3.js work with both</li>
        <li>Wallet addresses are identical (but balances are network-specific)</li>
        <li>Token standards (ERC-20, ERC-721) are compatible</li>
      </ul>
      <p>
        If you can build on Ethereum, you can build on ETC—and often at lower fees.
      </p>

      <h2>Ecosystem Comparison</h2>

      <h3>ETC Ecosystem</h3>
      <ul>
        <li><strong>ETCswap:</strong> Primary DEX with V2 and V3 pools</li>
        <li><strong>Classic USD (USC):</strong> USD-backed stablecoin</li>
        <li><strong>Classic OS:</strong> DeFi dashboard and economic control center</li>
        <li><strong>BlockScout:</strong> Block explorer at etc.blockscout.com</li>
      </ul>

      <h3>ETH Ecosystem</h3>
      <p>
        Ethereum has a larger ecosystem due to greater liquidity and longer post-fork history. However, ETC&apos;s ecosystem is growing, and many applications can deploy to both chains.
      </p>

      <h2>Which Should You Use?</h2>
      <p>
        The choice depends on your priorities:
      </p>

      <h3>Choose ETC if you value:</h3>
      <ul>
        <li>Proof-of-work security and censorship resistance</li>
        <li>Fixed, predictable monetary policy</li>
        <li>Lower transaction fees</li>
        <li>Mining participation</li>
      </ul>

      <h3>Choose ETH if you value:</h3>
      <ul>
        <li>Larger ecosystem and liquidity</li>
        <li>Staking rewards</li>
        <li>More deployed applications</li>
      </ul>

      <h2>Using Both Networks</h2>
      <p>
        Many users hold and use both ETC and ETH. Since wallets like MetaMask support multiple networks, you can easily switch between them. Just make sure you&apos;re connected to the correct network before sending transactions.
      </p>
      <p>
        Remember: ETC and ETH are separate networks with separate balances. Sending ETC to an ETH address on the wrong network can result in lost funds.
      </p>

      <h2>Get Started</h2>
      <p>
        Ready to explore Ethereum Classic? Check out our getting started guide to set up a wallet and acquire your first ETC.
      </p>
    </>
  )
}
