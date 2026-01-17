export default function WhatAreSmartContracts() {
  return (
    <>
      <p>
        Smart contracts are self-executing programs that run on the blockchain. Once deployed, they execute exactly as programmed—automatically and without intermediaries.
      </p>

      <h2>How Smart Contracts Work</h2>
      <p>
        A smart contract is code stored at a specific address on the blockchain. When someone interacts with that address and meets the contract&apos;s conditions, the code executes automatically.
      </p>
      <p>
        For example, a simple smart contract might work like this:
      </p>
      <ul>
        <li>User sends ETC to the contract address</li>
        <li>Contract verifies the amount meets the minimum</li>
        <li>Contract automatically sends tokens back to the user</li>
      </ul>
      <p>
        No human intervention is needed—the code runs exactly as written.
      </p>

      <h2>The Ethereum Virtual Machine</h2>
      <p>
        Smart contracts on Ethereum Classic run on the Ethereum Virtual Machine (EVM). The EVM is a global computing environment that processes contract code identically across all network nodes.
      </p>
      <p>
        This means:
      </p>
      <ul>
        <li>Every node reaches the same result for every computation</li>
        <li>Contracts behave predictably regardless of who runs them</li>
        <li>Code written for Ethereum can run on ETC (and vice versa)</li>
      </ul>

      <h2>Gas and Execution</h2>
      <p>
        Every operation in a smart contract requires computational resources. &ldquo;Gas&rdquo; measures this cost—each operation has a gas price, and users pay for the gas their transactions consume.
      </p>
      <p>
        Gas serves two purposes:
      </p>
      <ul>
        <li><strong>Resource allocation:</strong> Ensures network resources are used efficiently</li>
        <li><strong>Spam prevention:</strong> Makes flooding the network economically costly</li>
      </ul>

      <h2>What Smart Contracts Enable</h2>

      <h3>Decentralized Finance (DeFi)</h3>
      <p>
        Smart contracts power financial applications without traditional intermediaries. On ETC, you can:
      </p>
      <ul>
        <li>Swap tokens on decentralized exchanges like ETCswap</li>
        <li>Provide liquidity and earn trading fees</li>
        <li>Use stablecoins like Classic USD (USC)</li>
        <li>Access lending and borrowing protocols</li>
      </ul>

      <h3>Token Creation</h3>
      <p>
        Anyone can create new tokens using smart contracts. Standard interfaces like ERC-20 (fungible tokens) and ERC-721 (NFTs) ensure tokens work across different applications.
      </p>

      <h3>Decentralized Applications</h3>
      <p>
        dApps use smart contracts as their backend. Unlike traditional apps, the business logic runs on the blockchain—transparent, auditable, and unstoppable.
      </p>

      <h3>DAOs</h3>
      <p>
        Decentralized Autonomous Organizations use smart contracts for governance. Members vote on proposals, and the code automatically executes the results.
      </p>

      <h2>Benefits of Smart Contracts</h2>
      <ul>
        <li><strong>Trustless execution:</strong> Code runs exactly as written, every time</li>
        <li><strong>Transparency:</strong> Contract code is publicly auditable</li>
        <li><strong>Immutability:</strong> Deployed contracts cannot be changed (by design)</li>
        <li><strong>Permissionless:</strong> Anyone can deploy or interact with contracts</li>
        <li><strong>Composability:</strong> Contracts can interact with other contracts</li>
      </ul>

      <h2>Important Considerations</h2>
      <p>
        While powerful, smart contracts require careful development:
      </p>
      <ul>
        <li><strong>Immutability cuts both ways:</strong> Bugs in deployed contracts can&apos;t be easily fixed</li>
        <li><strong>Gas costs:</strong> Complex operations can be expensive to execute</li>
        <li><strong>Security audits:</strong> DeFi contracts should be professionally audited</li>
        <li><strong>Code is public:</strong> Anyone can read contract logic</li>
      </ul>

      <h2>Smart Contracts on ETC</h2>
      <p>
        Ethereum Classic provides a robust platform for smart contracts with some unique advantages:
      </p>
      <ul>
        <li><strong>Proof-of-work security:</strong> Maximum protection against attacks</li>
        <li><strong>Full EVM compatibility:</strong> Use existing Ethereum tools and libraries</li>
        <li><strong>Lower fees:</strong> Generally more affordable than congested networks</li>
        <li><strong>Established ecosystem:</strong> Growing DeFi with DEXs, stablecoins, and more</li>
      </ul>

      <h2>Getting Started</h2>
      <p>
        To interact with smart contracts on ETC, you&apos;ll need a wallet like MetaMask or Classic OS connected to the Ethereum Classic network. From there, you can explore dApps, swap tokens on ETCswap, or even deploy your own contracts.
      </p>
    </>
  )
}
