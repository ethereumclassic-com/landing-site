import { ETCswapLink, ClassicUSDLink } from '@/app/components/ui'

export default function WhatIsDefi() {
  return (
    <>
      <p>
        Decentralized finance, or DeFi, refers to financial services built on blockchain smart contracts rather than traditional intermediaries like banks, brokerages, or exchanges. DeFi protocols are permissionless, non-custodial, and transparent&mdash;anyone can use them, no one holds your funds, and the code is publicly auditable.
      </p>

      <h2>Core Principles</h2>

      <h3>Permissionless Access</h3>
      <p>
        DeFi protocols are open to anyone with a wallet and an internet connection. There are no applications to fill out, no credit checks, and no geographic restrictions. If you can send a transaction on Ethereum Classic, you can use DeFi.
      </p>

      <h3>Non-Custodial</h3>
      <p>
        Unlike centralized exchanges where you deposit funds into someone else&apos;s wallet, DeFi keeps you in control. Your tokens remain in your own wallet until the moment a smart contract executes a trade or deposit. You approve each interaction explicitly.
      </p>

      <h3>Transparent and Composable</h3>
      <p>
        Every DeFi protocol runs on open-source smart contracts. Anyone can read the code, audit the logic, and verify on-chain state through a block explorer like Blockscout. Protocols are also composable&mdash;they can be combined like building blocks to create more complex financial tools.
      </p>

      <h2>How DeFi Works: AMMs vs Order Books</h2>
      <p>
        Traditional exchanges use order books where buyers and sellers post limit orders. This requires deep liquidity and active market makers. DeFi on ETC instead relies on Automated Market Makers (AMMs), which use liquidity pools and mathematical formulas to determine prices.
      </p>
      <p>
        When you swap tokens on an AMM, you trade against a pool of tokens rather than matching with another trader. The price adjusts automatically based on the ratio of tokens in the pool. This eliminates the need for order books entirely.
      </p>

      <h2>Key DeFi Primitives</h2>
      <ul>
        <li><strong>Token swaps:</strong> Exchange one token for another instantly through an AMM</li>
        <li><strong>Liquidity provision:</strong> Deposit token pairs into pools and earn a share of trading fees</li>
        <li><strong>Stablecoins:</strong> Tokens pegged to fiat currencies for on-chain stability</li>
        <li><strong>Token launches:</strong> Fair-launch mechanisms using bonding curves</li>
      </ul>

      <h2>Why DeFi on Ethereum Classic?</h2>
      <p>
        ETC offers unique advantages as a DeFi foundation:
      </p>
      <ul>
        <li><strong>Immutability:</strong> ETC&apos;s &ldquo;code is law&rdquo; philosophy means smart contracts execute exactly as written, without the risk of irregular state changes</li>
        <li><strong>Censorship resistance:</strong> Proof-of-work consensus ensures no authority can block transactions or freeze funds in DeFi protocols</li>
        <li><strong>PoW security:</strong> Mining provides objective, energy-backed security that doesn&apos;t depend on token holder governance</li>
        <li><strong>Low fees:</strong> Transaction costs on ETC remain affordable, making DeFi accessible to everyone</li>
      </ul>

      <h2>The ETC DeFi Ecosystem</h2>
      <p>
        Ethereum Classic&apos;s DeFi ecosystem centers around proven, battle-tested protocols:
      </p>
      <ul>
        <li><strong><ETCswapLink />:</strong> The primary decentralized exchange on ETC, offering token swaps (V2 and V3), concentrated liquidity, and a token launchpad</li>
        <li><strong><ClassicUSDLink /> (USC):</strong> A native stablecoin pegged 1:1 to USD, backed by real assets and redeemable through Brale</li>
      </ul>

      <h2>Getting Started</h2>
      <p>
        To begin using DeFi on Ethereum Classic, you need a Web3 wallet like MetaMask configured for ETC (Chain ID 61) and some ETC for gas fees. From there, you can connect to <ETCswapLink /> and start swapping tokens or providing liquidity. Explore our other guides for step-by-step instructions on each DeFi activity.
      </p>
    </>
  )
}
