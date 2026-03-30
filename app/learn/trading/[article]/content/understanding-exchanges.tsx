export default function UnderstandingExchanges() {
  return (
    <>
      <p>
        Cryptocurrency exchanges are platforms where you can buy, sell, and trade digital assets like Ethereum Classic. They come in two fundamental types: centralized exchanges (CEX) and decentralized exchanges (DEX). Understanding the differences is essential for making informed decisions about where and how you trade.
      </p>

      <h2>Centralized Exchanges (CEX)</h2>
      <p>
        Centralized exchanges are operated by companies that act as intermediaries between buyers and sellers. They maintain order books, hold customer funds in custody, and provide fiat on-ramps for converting traditional currency to crypto.
      </p>

      <h3>How They Work</h3>
      <p>
        When you deposit funds on a CEX, the exchange holds them on your behalf. Trades happen within the exchange&apos;s internal system rather than directly on the blockchain. You&apos;re trusting the exchange to honor your balance and process withdrawals.
      </p>

      <h3>Popular CEX Options for ETC</h3>
      <ul>
        <li><strong>Coinbase:</strong> Regulated, insured, beginner-friendly. Supports ETC/USD trading pairs.</li>
        <li><strong>Kraken:</strong> Strong security history, proof-of-reserves, advanced trading tools.</li>
        <li><strong>Binance:</strong> Highest liquidity globally, low fees, wide range of trading pairs.</li>
      </ul>

      <h3>CEX Advantages</h3>
      <ul>
        <li>Fiat on-ramps (buy crypto with bank transfers and cards)</li>
        <li>Advanced order types (limit, stop-loss, OCO)</li>
        <li>High liquidity and tight spreads</li>
        <li>Customer support and account recovery</li>
      </ul>

      <h3>CEX Disadvantages</h3>
      <ul>
        <li>KYC/identity verification required</li>
        <li>Custodial &mdash; the exchange holds your private keys</li>
        <li>Vulnerable to hacks, freezes, or insolvency</li>
        <li>Can restrict access based on jurisdiction</li>
      </ul>

      <h2>Decentralized Exchanges (DEX)</h2>
      <p>
        Decentralized exchanges operate through smart contracts on the blockchain. There is no company holding your funds or managing an order book. Instead, trades execute peer-to-contract using automated market maker (AMM) algorithms.
      </p>

      <h3>ETCswap: ETC&apos;s Native DEX</h3>
      <p>
        ETCswap is the primary decentralized exchange on Ethereum Classic. It offers both V2 (constant product AMM) and V3 (concentrated liquidity) protocols. Anyone can swap tokens, provide liquidity, and earn fees without creating an account or submitting identification.
      </p>

      <h3>DEX Advantages</h3>
      <ul>
        <li>Non-custodial &mdash; you control your funds at all times</li>
        <li>No KYC or identity verification</li>
        <li>Permissionless &mdash; anyone can trade or list tokens</li>
        <li>Transparent &mdash; all trades and liquidity are on-chain</li>
      </ul>

      <h3>DEX Disadvantages</h3>
      <ul>
        <li>No fiat on-ramp (you need crypto to start)</li>
        <li>Slippage on large trades due to AMM mechanics</li>
        <li>Transaction fees (gas) paid for every swap</li>
        <li>No customer support or account recovery</li>
      </ul>

      <h2>Fiat On-Ramps and Off-Ramps</h2>
      <p>
        Bridging between traditional finance and crypto is a key consideration. CEX platforms handle this directly, but the ETC ecosystem also has dedicated solutions. Brale provides fiat on-ramp and off-ramp services for ClassicUSD (USC), the native stablecoin on Ethereum Classic. You can convert USD to USC and vice versa, enabling a path from bank account to DEX trading without relying solely on centralized exchanges.
      </p>

      <h2>Choosing the Right Platform</h2>
      <p>
        Many traders use both types of exchange. A CEX is convenient for converting fiat to crypto and for advanced trading strategies. A DEX is ideal for permissionless token swaps, privacy, and maintaining custody of your assets. Consider your priorities around convenience, security, privacy, and the types of tokens you want to trade.
      </p>
    </>
  )
}
