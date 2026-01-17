export default function WhatIsBlockchain() {
  return (
    <>
      <p>
        A blockchain is a special type of database where no single entity maintains control. This distributed structure enables trustless systems where participants can verify everything independently.
      </p>

      <h2>How Blockchains Work</h2>
      <p>
        Think of a blockchain as a digital ledger that&apos;s copied and shared across a network of computers. Every participant has the same copy, and changes must be agreed upon by the network.
      </p>
      <p>
        Transactions are grouped into &ldquo;blocks&rdquo; which are then linked together in chronological order—forming a chain. Each block contains a reference to the previous block, making the history tamper-evident.
      </p>

      <h2>Key Properties</h2>

      <h3>Decentralization</h3>
      <p>
        No central authority controls the blockchain. Instead, thousands of independent nodes around the world maintain copies and validate transactions. This removes single points of failure and prevents censorship.
      </p>

      <h3>Transparency</h3>
      <p>
        All transactions are publicly visible and auditable. Anyone can verify the complete transaction history from the very first block to the present.
      </p>

      <h3>Immutability</h3>
      <p>
        Once data is recorded on the blockchain, it cannot be altered or deleted. Each block is cryptographically linked to the previous one, so changing historical data would require re-computing every subsequent block—a practically impossible task.
      </p>

      <h3>Permissionless</h3>
      <p>
        Anyone can participate in the network. You don&apos;t need approval from any authority to send transactions, run a node, or build applications.
      </p>

      <h2>Consensus Mechanisms</h2>
      <p>
        For a decentralized network to function, participants need a way to agree on the state of the ledger. This is called consensus. Ethereum Classic uses proof-of-work, where miners compete to add blocks by solving computational puzzles.
      </p>
      <p>
        The consensus mechanism ensures that even without a central authority, all participants can agree on which transactions are valid and in what order they occurred.
      </p>

      <h2>Beyond Digital Money</h2>
      <p>
        While Bitcoin introduced blockchain for digital currency, platforms like Ethereum Classic expand the concept with smart contracts—self-executing programs that run on the blockchain.
      </p>
      <p>
        Smart contracts enable:
      </p>
      <ul>
        <li><strong>DeFi:</strong> Financial services without intermediaries</li>
        <li><strong>NFTs:</strong> Unique digital assets with provable ownership</li>
        <li><strong>DAOs:</strong> Organizations governed by code instead of management</li>
        <li><strong>dApps:</strong> Applications that run without central servers</li>
      </ul>

      <h2>Why Blockchain Matters</h2>
      <p>
        Blockchain technology enables digital systems that operate with the reliability of mathematics rather than the promises of institutions:
      </p>
      <ul>
        <li><strong>Trust minimization:</strong> Verify, don&apos;t trust. Every claim is cryptographically provable.</li>
        <li><strong>Censorship resistance:</strong> No authority can stop valid transactions</li>
        <li><strong>Global accessibility:</strong> Anyone with internet access can participate</li>
        <li><strong>24/7 operation:</strong> Networks run continuously without downtime</li>
      </ul>

      <h2>Ethereum Classic&apos;s Role</h2>
      <p>
        Ethereum Classic is a proof-of-work blockchain that supports smart contracts. Running continuously since 2015, it provides:
      </p>
      <ul>
        <li>A secure foundation for decentralized applications</li>
        <li>Full EVM (Ethereum Virtual Machine) compatibility</li>
        <li>A fixed monetary policy with known supply</li>
        <li>Maximum decentralization through proof-of-work consensus</li>
      </ul>

      <h2>Next Steps</h2>
      <p>
        Ready to learn more? Explore our other articles on smart contracts, proof-of-work, and how to get started using Ethereum Classic.
      </p>
    </>
  )
}
