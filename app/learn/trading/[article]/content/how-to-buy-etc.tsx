export default function HowToBuyEtc() {
  return (
    <>
      <p>
        Ethereum Classic (ETC) can be purchased through several methods depending on your experience level, privacy preferences, and the payment methods available to you. This guide covers the three most common approaches.
      </p>

      <h2>Method 1: Centralized Exchanges (CEX)</h2>
      <p>
        Centralized exchanges are the most straightforward way to buy ETC, especially for beginners who want to use fiat currency like USD, EUR, or GBP.
      </p>

      <h3>Recommended Exchanges</h3>
      <ul>
        <li><strong>Coinbase:</strong> Beginner-friendly interface with instant buy options. Available in most countries.</li>
        <li><strong>Kraken:</strong> Strong security track record, competitive fees, and advanced trading features.</li>
        <li><strong>Binance:</strong> High liquidity and low trading fees. Offers spot and futures markets for ETC.</li>
      </ul>

      <h3>Step-by-Step Process</h3>
      <ul>
        <li>Create an account on your chosen exchange</li>
        <li>Complete identity verification (KYC) with a government-issued ID</li>
        <li>Deposit fiat currency via bank transfer, debit card, or wire</li>
        <li>Navigate to the ETC trading pair (e.g., ETC/USD) and place a buy order</li>
        <li>Withdraw your ETC to a personal wallet for safekeeping</li>
      </ul>
      <p>
        Always withdraw to a wallet you control after purchasing. Leaving funds on an exchange means you don&apos;t hold your private keys.
      </p>

      <h2>Method 2: Decentralized Exchanges (DEX)</h2>
      <p>
        If you already hold tokens on the Ethereum Classic network, you can swap them for ETC using a decentralized exchange like ETCswap.
      </p>

      <h3>Using ETCswap</h3>
      <ul>
        <li>Set up MetaMask and add the Ethereum Classic network (Chain ID 61, RPC: https://etc.rivet.link)</li>
        <li>Connect your wallet to ETCswap</li>
        <li>Select the token you want to swap from (e.g., ClassicUSD or WETC)</li>
        <li>Enter the amount and review the swap details including price impact and slippage</li>
        <li>Confirm the transaction in your wallet</li>
      </ul>
      <p>
        DEX trading is non-custodial, meaning you retain full control of your funds throughout the process. There is no KYC required, and trades settle directly on-chain.
      </p>

      <h2>Method 3: Peer-to-Peer (P2P) Trading</h2>
      <p>
        P2P trading allows you to buy ETC directly from another person. Some exchanges offer P2P marketplaces where buyers and sellers set their own prices and payment methods. This approach can offer more privacy and flexibility, but requires caution to avoid scams.
      </p>
      <ul>
        <li>Use reputable P2P platforms with escrow protection</li>
        <li>Verify the seller&apos;s reputation and trade history</li>
        <li>Never release payment until the ETC is confirmed in escrow</li>
      </ul>

      <h2>Configuring MetaMask for ETC</h2>
      <p>
        To receive and manage ETC in MetaMask, you need to add the network manually:
      </p>
      <ul>
        <li><strong>Network Name:</strong> Ethereum Classic</li>
        <li><strong>Chain ID:</strong> 61</li>
        <li><strong>RPC URL:</strong> https://etc.rivet.link</li>
        <li><strong>Currency Symbol:</strong> ETC</li>
        <li><strong>Block Explorer:</strong> https://blockscout.com/etc/mainnet</li>
      </ul>

      <h2>After Your Purchase</h2>
      <p>
        Once you&apos;ve acquired ETC, consider transferring it to a hardware wallet for long-term storage, or explore the ETC ecosystem through DeFi protocols like ETCswap. Your ETC is yours to hold, trade, or use in decentralized applications.
      </p>
    </>
  )
}
