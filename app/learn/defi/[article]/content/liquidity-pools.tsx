export default function LiquidityPools() {
  return (
    <>
      <p>
        Liquidity pools are the engine behind decentralized exchanges. Instead of matching individual buyers with sellers through an order book, AMMs like ETCswap use pools of tokens that anyone can trade against. Understanding how pools work is essential before providing liquidity.
      </p>

      <h2>What Is a Liquidity Pool?</h2>
      <p>
        A liquidity pool is a smart contract holding reserves of two tokens. For example, an ETC/USC pool contains both ETC and Classic USD. When a trader swaps ETC for USC, they deposit ETC into the pool and withdraw USC from it. The pool&apos;s smart contract handles the exchange automatically.
      </p>
      <p>
        Anyone can deposit tokens into a pool and become a liquidity provider (LP). In return, LPs receive LP tokens representing their share of the pool. These LP tokens can be redeemed at any time to withdraw the underlying tokens plus accumulated fees.
      </p>

      <h2>How AMMs Determine Price</h2>
      <p>
        ETCswap V2 uses the constant product formula: <strong>x * y = k</strong>, where x and y are the reserves of each token and k is a constant. When a trader buys token A, the amount of token A in the pool decreases and token B increases, pushing the price of A higher.
      </p>
      <p>
        This mechanism means larger trades relative to pool size cause more price impact (slippage). Deep pools with more liquidity offer better prices because each trade represents a smaller percentage of the total reserves.
      </p>

      <h2>Trading Fees and LP Revenue</h2>
      <p>
        Every swap on ETCswap incurs a small trading fee (typically 0.3% on V2). This fee is added to the pool&apos;s reserves, increasing the value of all LP tokens proportionally. As a liquidity provider, you earn a share of every trade that passes through your pool.
      </p>
      <p>
        Your earnings depend on two factors: the pool&apos;s trading volume and your share of the pool. A pool with high volume and your portion being significant means more fees flowing to you.
      </p>

      <h2>ETCswap V2 vs V3 Liquidity</h2>

      <h3>V2: Full-Range Liquidity</h3>
      <p>
        In ETCswap V2, your liquidity is spread across the entire price range from zero to infinity. You deposit equal value of both tokens. This is simpler to manage but less capital-efficient&mdash;most of your liquidity sits in price ranges where trading never occurs.
      </p>

      <h3>V3: Concentrated Liquidity</h3>
      <p>
        ETCswap V3 lets you concentrate your liquidity within a specific price range. For example, if ETC is trading at $20, you might provide liquidity only between $15 and $25. This means your capital works harder within that range, earning more fees per dollar deposited.
      </p>
      <p>
        The tradeoff is active management. If the price moves outside your range, your position stops earning fees and becomes entirely composed of the less valuable token. V3 rewards LPs who actively adjust their ranges.
      </p>

      <h2>Pool Ratios and Rebalancing</h2>
      <p>
        As trades occur, the ratio of tokens in the pool shifts. If many traders buy ETC from an ETC/USC pool, the pool accumulates more USC and less ETC. This rebalancing is continuous and automatic. When you withdraw liquidity, you receive the current ratio of tokens&mdash;not necessarily the same ratio you deposited.
      </p>

      <h2>Impermanent Loss</h2>
      <p>
        The shifting ratio means LPs face impermanent loss: when token prices diverge, you would have been better off simply holding the tokens rather than providing liquidity. The loss is &ldquo;impermanent&rdquo; because it reverses if prices return to their original ratio. Trading fee earnings can offset impermanent loss, but it&apos;s a real cost to understand before depositing.
      </p>
      <p>
        See our dedicated guide on DeFi risks for a deeper explanation of impermanent loss and how to manage it.
      </p>

      <h2>Getting Started as an LP</h2>
      <p>
        To provide liquidity on ETCswap, you need equal value of both tokens in the pair. Connect your wallet, navigate to the pool you want to join, and approve the deposit. Our step-by-step ETCswap guide walks through the full process.
      </p>
    </>
  )
}
