import { ETCswapLink } from '@/app/components/ui'

export default function SafeDefiPractices() {
  return (
    <>
      <p>
        Decentralized finance on Ethereum Classic offers powerful financial tools without intermediaries. However, interacting with smart contracts carries risks that differ from simply holding ETC. Following safe practices protects your assets while you participate in the DeFi ecosystem.
      </p>

      <h2>Verify Contracts Before Interacting</h2>
      <p>
        Before connecting your wallet to any dApp or approving a transaction, verify the contract address on Blockscout at etc.blockscout.com. Look for:
      </p>
      <ul>
        <li><strong>Verified source code</strong> &mdash; the contract&apos;s Solidity source should be published and verified on the block explorer</li>
        <li><strong>Transaction history</strong> &mdash; established contracts have a long history of interactions from many addresses</li>
        <li><strong>Known deployer</strong> &mdash; the deploying address should be traceable to the project team</li>
      </ul>
      <p>
        If a contract is unverified or newly deployed with no transaction history, treat it with extreme caution.
      </p>

      <h2>Understand Token Approvals</h2>
      <p>
        When you interact with a DeFi protocol, it typically asks you to approve a token spending allowance. This grants the contract permission to move tokens from your wallet on your behalf.
      </p>
      <ul>
        <li><strong>Unlimited approvals</strong> are convenient but dangerous &mdash; a compromised or malicious contract can drain your entire token balance at any time</li>
        <li><strong>Limited approvals</strong> restrict the contract to spending only the amount you specify for the current transaction</li>
        <li><strong>Revoke old approvals</strong> regularly &mdash; approvals persist indefinitely unless explicitly revoked. Review and revoke unused approvals, especially for contracts you no longer use.</li>
      </ul>

      <h2>Start Small</h2>
      <p>
        When using a new protocol for the first time, start with a small amount that you can afford to lose entirely. Verify that the transaction behaves as expected before committing larger sums. This applies to swaps, liquidity provision, and any other contract interaction.
      </p>

      <h2>Understand Impermanent Loss</h2>
      <p>
        Providing liquidity to automated market makers like <ETCswapLink /> means your token ratio shifts as prices change. If the price of one token in your pair moves significantly relative to the other, you may end up with less total value than if you had simply held both tokens. This is called impermanent loss, and it becomes permanent when you withdraw your liquidity. Understand this risk before providing liquidity, particularly for volatile pairs.
      </p>

      <h2>Use Only Verified dApps</h2>
      <p>
        Stick to established, community-verified protocols on Ethereum Classic. <ETCswapLink /> is the primary decentralized exchange, and Classic USD provides a stablecoin mechanism. Be wary of unfamiliar protocols offering unusually high yields &mdash; these may be short-lived, poorly audited, or intentionally malicious.
      </p>

      <h2>Watch for Flash Loan Attacks</h2>
      <p>
        Flash loans allow borrowing large amounts within a single transaction without collateral. While a legitimate DeFi primitive, they are frequently used to manipulate prices and exploit vulnerable protocols. As a user, you cannot prevent flash loan attacks directly, but you can reduce exposure by using well-audited protocols and being cautious with new or lightly-tested contracts.
      </p>

      <h2>Use a Dedicated DeFi Wallet</h2>
      <p>
        Consider maintaining a separate wallet specifically for DeFi interactions, holding only the funds you intend to use. Keep your primary holdings in a hardware wallet or cold storage. This limits your maximum possible loss if a contract is exploited or if you accidentally approve a malicious transaction.
      </p>

      <h2>Stay Informed</h2>
      <p>
        DeFi security is an evolving landscape. Follow official project channels, monitor community reports of exploits, and stay aware of new attack vectors. The best defense combines technical precautions with ongoing awareness.
      </p>
    </>
  )
}
