export default function TradingOrderTypes() {
  return (
    <>
      <p>
        Understanding order types is fundamental to effective trading. Whether you&apos;re buying your first ETC or executing an advanced strategy, knowing how each order works helps you manage risk and get better prices.
      </p>

      <h2>Market Orders</h2>
      <p>
        A market order executes immediately at the best available price. You specify the amount of ETC you want to buy or sell, and the exchange fills it right away using existing orders in the order book.
      </p>
      <ul>
        <li><strong>Speed:</strong> Instant execution &mdash; your order fills immediately</li>
        <li><strong>Price:</strong> You get the current market price, which may shift slightly during execution</li>
        <li><strong>Best for:</strong> Quick purchases or sales when timing matters more than getting the exact price</li>
      </ul>
      <p>
        The downside of market orders is slippage. If liquidity is thin, your order may fill at a worse price than expected, especially for larger amounts.
      </p>

      <h2>Limit Orders</h2>
      <p>
        A limit order lets you set a specific price at which you want to buy or sell. The order only executes if the market reaches your target price. If it doesn&apos;t, the order remains open until filled or cancelled.
      </p>
      <ul>
        <li><strong>Buy limit:</strong> Set below the current price &mdash; &ldquo;I want to buy ETC if it drops to $25&rdquo;</li>
        <li><strong>Sell limit:</strong> Set above the current price &mdash; &ldquo;I want to sell ETC if it rises to $40&rdquo;</li>
        <li><strong>Best for:</strong> Patient traders who want price precision over speed</li>
      </ul>
      <p>
        Limit orders give you control over the execution price but offer no guarantee of being filled. The market may never reach your target.
      </p>

      <h2>Stop-Loss Orders</h2>
      <p>
        A stop-loss order triggers a sale when the price falls to a specified threshold. It&apos;s a risk management tool designed to limit potential losses on a position.
      </p>
      <ul>
        <li><strong>How it works:</strong> You hold ETC at $30 and set a stop-loss at $25. If the price drops to $25, a sell order is automatically triggered.</li>
        <li><strong>Stop-limit variant:</strong> Combines a stop trigger with a limit price, giving you more control but risking non-execution if the price moves too fast.</li>
        <li><strong>Best for:</strong> Protecting gains or limiting downside without constantly monitoring the market</li>
      </ul>

      <h2>Order Types on Decentralized Exchanges</h2>
      <p>
        DEX platforms like ETCswap work differently from centralized order books. Instead of matching buyers and sellers, they use automated market makers (AMMs) where you trade against a liquidity pool.
      </p>

      <h3>Swap Orders (Market Equivalent)</h3>
      <p>
        On a DEX, every swap is essentially a market order. You specify the token and amount, and the AMM calculates the exchange rate based on the pool&apos;s reserves. The trade executes in a single blockchain transaction.
      </p>

      <h3>Slippage Tolerance</h3>
      <p>
        Because pool prices shift with every trade, DEX interfaces let you set a slippage tolerance. This defines the maximum price deviation you&apos;ll accept. If the price moves beyond your tolerance before the transaction confirms, the swap reverts and you only lose the gas fee.
      </p>
      <ul>
        <li><strong>Low slippage (0.1-0.5%):</strong> Suitable for large, liquid pairs</li>
        <li><strong>Medium slippage (0.5-1%):</strong> Good default for most swaps</li>
        <li><strong>High slippage (1-5%):</strong> May be needed for low-liquidity tokens</li>
      </ul>

      <h2>Choosing the Right Order Type</h2>
      <p>
        There is no single best order type. Market orders prioritize speed, limit orders prioritize price, and stop-loss orders prioritize risk management. Many traders combine all three as part of a broader strategy.
      </p>

      <p>
        <em>This content is for educational purposes only and does not constitute financial advice. Always do your own research before making trading decisions.</em>
      </p>
    </>
  )
}
