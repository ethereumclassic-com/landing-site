export default function ImpermanentLoss() {
  return (
    <>
      <p>
        Impermanent loss is the most important risk to understand before providing liquidity on any decentralized exchange. It describes the difference in value between holding tokens in your wallet versus depositing them into a liquidity pool when token prices change. Every LP on ETCswap faces this tradeoff.
      </p>

      <h2>What Is Impermanent Loss?</h2>
      <p>
        When you deposit tokens into an AMM pool, the pool automatically rebalances as trades occur. If one token&apos;s price rises significantly, the pool sells some of that token to maintain its ratio. This means you end up with less of the appreciating token than if you had simply held it in your wallet.
      </p>
      <p>
        The &ldquo;loss&rdquo; is the difference between the value of your LP position and what you would have had by just holding both tokens. It&apos;s called &ldquo;impermanent&rdquo; because the loss only becomes permanent when you withdraw. If the price returns to its original ratio, the loss disappears entirely.
      </p>

      <h2>A Practical Example</h2>
      <p>
        Suppose you deposit 1 ETC (worth $20) and 20 USC into an ETC/USC pool on ETCswap V2. Your total deposit is worth $40. Now imagine ETC doubles to $40:
      </p>
      <ul>
        <li>If you had just held: 1 ETC ($40) + 20 USC ($20) = $60</li>
        <li>Your LP position after rebalancing: approximately 0.707 ETC ($28.28) + 28.28 USC = $56.56</li>
        <li>Impermanent loss: roughly $3.44 or about 5.7% compared to holding</li>
      </ul>
      <p>
        The pool rebalanced by selling some of your ETC as the price rose. You still gained value overall ($56.56 vs your original $40), but you gained less than you would have by simply holding both tokens. The trading fees you earned during this period may offset some or all of that gap.
      </p>

      <h2>When Does IL Become a Problem?</h2>
      <p>
        Impermanent loss increases as prices diverge further from the deposit ratio. Small price movements cause minimal IL, but large swings can result in significant losses relative to holding. The critical question is whether the trading fees earned exceed the impermanent loss incurred.
      </p>
      <p>
        For high-volume pools on ETCswap, fees often compensate for moderate price movements. But during extreme volatility or in low-volume pools, IL can exceed fee earnings, resulting in a net loss compared to holding.
      </p>

      <h2>Concentrated Liquidity Amplifies IL</h2>
      <p>
        On ETCswap V3, concentrated liquidity positions face amplified impermanent loss within their chosen range. By concentrating capital into a narrow price band, you earn higher fees but also experience proportionally more rebalancing when prices move. If the price exits your range entirely, your position converts fully to the less valuable token.
      </p>
      <p>
        This makes V3 a higher-risk, higher-reward proposition. The amplified fees can outpace the amplified IL in active markets, but careless range selection can lead to steep losses.
      </p>

      <h2>Mitigation Strategies</h2>

      <h3>Choose Correlated Pairs</h3>
      <p>
        Pairs where both tokens move in similar directions experience less price divergence. Stablecoin pairs like USC/WETC have inherently lower IL because the stablecoin maintains its peg. However, they also tend to generate lower fees due to lower volatility.
      </p>

      <h3>Use Wider Ranges on V3</h3>
      <p>
        Wider price ranges on ETCswap V3 reduce IL amplification at the cost of lower capital efficiency. For less actively managed positions, a wider range provides a buffer against price movements while still earning concentrated fees.
      </p>

      <h3>Calculate Expected Fees vs IL</h3>
      <p>
        Before depositing, estimate the pool&apos;s annual fee generation based on its volume and compare against potential IL for your expected price range. If a pool generates 20% APR in fees but your projected IL is 25%, the position may not be worthwhile.
      </p>

      <h3>Time Your Entry</h3>
      <p>
        Providing liquidity during low-volatility periods reduces the chance of large price divergence. Avoid depositing right before major market events or when prices are at extreme levels relative to historical norms.
      </p>
    </>
  )
}
