import { ETCswapLink, ClassicUSDLink } from '@/app/components/ui'

export default function HowToSellEtc() {
  return (
    <>
      <p>
        Whether you&apos;re taking profits, rebalancing, or converting to fiat currency, there are several ways to sell or spend your Ethereum Classic. Each method has different tradeoffs around speed, fees, privacy, and convenience.
      </p>

      <h2>Option 1: Sell on a Centralized Exchange</h2>
      <p>
        The most common method for converting ETC to fiat currency is through a centralized exchange. This is the reverse of the buying process.
      </p>

      <h3>Step-by-Step</h3>
      <ul>
        <li>Log in to your exchange account (Coinbase, Kraken, Binance, or similar)</li>
        <li>Navigate to your ETC wallet and select &ldquo;Deposit&rdquo; to get your deposit address</li>
        <li>Send ETC from your personal wallet to the exchange deposit address</li>
        <li>Wait for the required number of network confirmations (typically 40,000+ for ETC on major exchanges)</li>
        <li>Place a sell order (market for instant, limit for a target price)</li>
        <li>Withdraw fiat to your linked bank account</li>
      </ul>
      <p>
        Bank withdrawals typically take 1-5 business days depending on your exchange and region. Some exchanges also support instant withdrawals to debit cards for an additional fee.
      </p>

      <h2>Option 2: Swap to Stablecoin via DEX</h2>
      <p>
        If you want to exit your ETC position without going through a centralized exchange, you can swap ETC for <ClassicUSDLink /> (USC) on <ETCswapLink />. USC is a fiat-backed stablecoin pegged to the US dollar and available natively on the Ethereum Classic network.
      </p>

      <h3>Step-by-Step</h3>
      <ul>
        <li>Connect your wallet to <ETCswapLink /></li>
        <li>Select ETC as the input token and USC as the output token</li>
        <li>Enter the amount, review slippage and price impact</li>
        <li>Confirm the swap in your wallet</li>
        <li>To convert USC to USD in your bank account, use Brale&apos;s redemption service</li>
      </ul>
      <p>
        This two-step approach (ETC to USC on <ETCswapLink />, then USC to USD via Brale) gives you a fully on-chain off-ramp. You maintain custody of your funds until the final fiat conversion.
      </p>

      <h2>Option 3: Spend ETC Directly</h2>
      <p>
        Rather than converting to fiat, you can spend ETC directly at participating merchants. Rain Cards and similar crypto debit card services allow you to load ETC and spend it anywhere traditional cards are accepted. The card provider handles the conversion at the point of sale.
      </p>
      <ul>
        <li>Sign up for a crypto-compatible debit card</li>
        <li>Load ETC onto the card</li>
        <li>Spend at any merchant that accepts Visa or Mastercard</li>
      </ul>
      <p>
        This option avoids the need for a separate sell-and-withdraw cycle, though card providers typically charge a conversion fee.
      </p>

      <h2>Tax Implications</h2>
      <p>
        In most jurisdictions, selling cryptocurrency is a taxable event. This applies whether you sell for fiat, swap for another token, or spend crypto at a merchant. The tax treatment varies by country:
      </p>
      <ul>
        <li>Capital gains tax may apply on the difference between your purchase price and sale price</li>
        <li>Short-term and long-term holding periods often have different tax rates</li>
        <li>Swapping ETC for USC on a DEX is generally also a taxable event</li>
        <li>Record-keeping is your responsibility &mdash; track dates, amounts, and prices for each transaction</li>
      </ul>
      <p>
        Consult a tax professional or refer to your local tax authority&apos;s guidance on cryptocurrency. Tax laws vary significantly between jurisdictions and are subject to change.
      </p>

      <h2>Before You Sell</h2>
      <p>
        Consider whether selling aligns with your goals. If you&apos;re selling to cover expenses, the methods above work well. If you&apos;re reacting to short-term price volatility, you may want to revisit your original investment thesis before making a decision.
      </p>

      <p>
        <em>This content is for educational purposes only and does not constitute financial advice. Always consult a qualified professional regarding tax obligations.</em>
      </p>
    </>
  )
}
