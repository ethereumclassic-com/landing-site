export default function YieldFarmingStrategies() {
  return (
    <>
      <p>
        Earning yield on Ethereum Classic requires thoughtful pool selection and position management. Unlike proof-of-stake chains where you simply delegate tokens, LP yield on ETCswap depends on the pools you choose, how you manage positions, and how well you balance risk against returns. This guide covers practical strategies for different risk profiles.
      </p>

      <h2>Pool Selection Criteria</h2>
      <p>
        Not all pools are equal. Before depositing liquidity, evaluate each pool across four dimensions:
      </p>
      <ul>
        <li><strong>Trading volume:</strong> Higher volume means more fees. A pool with $100K daily volume generates far more LP income than one with $1K.</li>
        <li><strong>Total Value Locked (TVL):</strong> Your share of fees depends on how much of the pool you own. High TVL means your percentage is smaller, but the pool is also more stable.</li>
        <li><strong>Fee tier:</strong> ETCswap V3 offers multiple fee tiers (0.05%, 0.3%, 1%). Volatile pairs tend to concentrate in higher fee tiers, while stable pairs use lower tiers.</li>
        <li><strong>Token pair volatility:</strong> Pairs with high price divergence risk more impermanent loss. Understand the tokens you&apos;re providing before depositing.</li>
      </ul>

      <h2>Conservative Strategy: Stablecoin Pairs</h2>
      <p>
        The lowest-risk LP strategy on ETC uses pairs involving Classic USD (USC). A USC/WETC pool with a tight range on V3 or a standard V2 position offers steady fee income with minimal impermanent loss, since USC maintains its dollar peg.
      </p>
      <p>
        Returns are typically lower than volatile pairs, but the predictability makes this suitable for capital you want to keep relatively safe. This strategy works best as a base layer in a broader yield approach.
      </p>

      <h2>Moderate Strategy: Single-Asset Exposure</h2>
      <p>
        If you&apos;re bullish on ETC and want exposure to its price movement while earning yield, an ETC/USC pair provides a balanced approach. You maintain partial ETC exposure while the stablecoin side dampens volatility. As ETC rises, the pool rebalances by selling ETC for USC, which means you capture some upside while generating fees.
      </p>
      <p>
        This is the most popular strategy for ETC holders who want yield without completely removing their price exposure. Impermanent loss is moderate and often offset by fee earnings in active markets.
      </p>

      <h2>ETCswap V2 vs V3 Strategy</h2>

      <h3>V2: Set and Forget</h3>
      <p>
        ETCswap V2 positions require no management after deposit. Your liquidity covers the entire price range, so you earn fees regardless of where the price moves. This is ideal if you don&apos;t want to actively monitor positions. The tradeoff is lower capital efficiency&mdash;most of your liquidity sits in unused price ranges.
      </p>

      <h3>V3: Active Management</h3>
      <p>
        V3 concentrated positions earn more fees per dollar but need attention. Set price ranges based on expected volatility: wider for set-and-forget, tighter for active management with higher returns. Monitor positions weekly at minimum, and be prepared to adjust ranges if the price approaches your boundaries.
      </p>

      <h2>Compounding Returns</h2>
      <p>
        On ETCswap V2, fees automatically compound within the pool as they&apos;re added to reserves. Your LP token value grows without any action. On V3, fees accumulate separately and must be claimed manually. To compound V3 earnings, periodically claim fees and add them back to your position or open a new position.
      </p>
      <p>
        The frequency of compounding matters. For small positions, gas costs may eat into compounding gains. Batch your claims and re-deposits when accumulated fees justify the transaction cost.
      </p>

      <h2>Risk Management</h2>
      <ul>
        <li><strong>Don&apos;t LP your entire portfolio:</strong> Keep a portion of your ETC in a standard wallet for flexibility and security. A common allocation is 60-70% held, 30-40% in LP positions.</li>
        <li><strong>Diversify across pools:</strong> Spread liquidity across multiple pairs and fee tiers rather than concentrating in a single pool.</li>
        <li><strong>Monitor regularly:</strong> Check positions at least weekly. Use Classic OS or ETCswap&apos;s position dashboard to track performance, fees earned, and current IL.</li>
        <li><strong>Set exit criteria:</strong> Decide in advance when you&apos;ll withdraw&mdash;whether based on IL thresholds, time horizons, or target returns.</li>
      </ul>

      <p>
        <em>This content is educational and does not constitute financial advice. Liquidity provision involves risk including impermanent loss and smart contract risk. Always do your own research before committing capital.</em>
      </p>
    </>
  )
}
