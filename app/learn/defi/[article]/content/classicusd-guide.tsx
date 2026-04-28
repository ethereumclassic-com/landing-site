import { ETCswapLink, ClassicUSDLink } from '@/app/components/ui'

export default function ClassicusdGuide() {
  return (
    <>
      <p>
        <ClassicUSDLink /> (USC) is the native stablecoin of the Ethereum Classic ecosystem. Pegged 1:1 to the US dollar and backed by real assets, USC provides a stable store of value on-chain without the volatility of ETC. It is not an algorithmic stablecoin&mdash;every USC is redeemable for one US dollar.
      </p>

      <h2>What Makes USC Different</h2>
      <p>
        USC is issued by Brale, a regulated stablecoin infrastructure provider. Each USC token is fully backed by reserve assets held in regulated financial institutions. This asset-backed model avoids the risks associated with algorithmic stablecoins, which rely on complex mechanisms to maintain their peg and have historically failed under market stress.
      </p>
      <p>
        USC is interoperable across 22+ blockchain networks, but its native home is Ethereum Classic. This means you can move USC between chains while maintaining the same backing and redeemability.
      </p>

      <h2>How to Get USC</h2>

      <h3>Option 1: Brale.xyz (Direct Purchase)</h3>
      <p>
        The most direct way to acquire USC is through Brale.xyz. You can fund your account via ACH bank transfer and receive USC directly to your ETC wallet. This is the primary on-ramp for converting fiat dollars to USC.
      </p>
      <ul>
        <li>Create an account at Brale.xyz</li>
        <li>Complete identity verification (KYC)</li>
        <li>Link your bank account for ACH transfers</li>
        <li>Purchase USC and withdraw to your ETC wallet address</li>
      </ul>

      <h3>Option 2: <ETCswapLink /> (Swap ETC for USC)</h3>
      <p>
        If you already hold ETC, you can swap it for USC on <ETCswapLink />. Navigate to the swap interface, select ETC as the input and USC as the output, enter your amount, and confirm the trade. This is the fastest method if you already have ETC.
      </p>

      <h2>Using USC</h2>

      <h3>Stable Store of Value</h3>
      <p>
        USC lets you hold dollar-denominated value on the ETC blockchain. This is useful for traders who want to exit volatile positions without converting to fiat, or for anyone who needs price stability on-chain.
      </p>

      <h3>Trading Pair on <ETCswapLink /></h3>
      <p>
        USC serves as a key trading pair on <ETCswapLink />. The ETC/USC pool is one of the most liquid pools on the platform, providing stable pricing reference for ETC and enabling low-slippage swaps between ETC and dollars.
      </p>

      <h3>Payments</h3>
      <p>
        USC can be used for payments through integrations with services like Rain Cards and Coinflow. These services bridge on-chain stablecoins to real-world payment rails, enabling you to spend USC at merchants or convert to traditional payment methods.
      </p>

      <h3>Liquidity Provision</h3>
      <p>
        Pairing USC with ETC or other tokens in liquidity pools earns trading fees. Stablecoin pairs (if available) experience lower impermanent loss since both assets maintain similar values.
      </p>

      <h2>Redeeming USC</h2>
      <p>
        USC is redeemable 1:1 for US dollars through Brale. To redeem, send your USC tokens back to Brale and receive the equivalent dollar amount via ACH transfer to your linked bank account. This redeemability is what maintains the peg&mdash;if USC ever trades below $1, arbitrageurs can buy it cheaply and redeem for a full dollar.
      </p>

      <h2>Security Considerations</h2>
      <ul>
        <li><strong>Asset-backed:</strong> USC is backed by real reserves, not algorithmic mechanisms</li>
        <li><strong>Regulated issuer:</strong> Brale operates under US financial regulations</li>
        <li><strong>Transparent reserves:</strong> Backing assets are held in regulated institutions</li>
        <li><strong>Verify the contract:</strong> Always confirm you&apos;re interacting with the official USC token contract on Blockscout before trading</li>
      </ul>

      <h2>Getting Started</h2>
      <p>
        To start using <ClassicUSDLink />, choose your preferred on-ramp&mdash;Brale for direct fiat conversion or <ETCswapLink /> if you already hold ETC. Having USC in your wallet gives you a stable asset for trading, payments, and DeFi participation on Ethereum Classic.
      </p>
    </>
  )
}
