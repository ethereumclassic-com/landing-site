export default function PoolVsSolo() {
  return (
    <>
      <p>
        When mining Ethereum Classic, you can choose between joining a mining pool or mining solo. Each approach has distinct tradeoffs that depend on your hashrate and preferences.
      </p>

      <h2>Understanding the Difference</h2>

      <h3>Pool Mining</h3>
      <p>
        In pool mining, many miners combine their hashpower to find blocks as a group. When the pool finds a block, the reward is distributed among participants based on their contributed shares.
      </p>

      <h3>Solo Mining</h3>
      <p>
        In solo mining, you mine independently and receive the full block reward when you find a block. However, finding a block may take a very long time depending on your hashrate relative to the network.
      </p>

      <h2>Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Factor</th>
              <th className="text-left">Pool Mining</th>
              <th className="text-left">Solo Mining</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payout frequency</td>
              <td>Regular (daily/weekly)</td>
              <td>Sporadic (when you find a block)</td>
            </tr>
            <tr>
              <td>Payout size</td>
              <td>Smaller, proportional shares</td>
              <td>Full block reward</td>
            </tr>
            <tr>
              <td>Variance</td>
              <td>Low</td>
              <td>Very high</td>
            </tr>
            <tr>
              <td>Fees</td>
              <td>Pool fee (typically 0.5-2%)</td>
              <td>No fees</td>
            </tr>
            <tr>
              <td>Technical setup</td>
              <td>Easier</td>
              <td>Requires full node</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Pool Mining in Detail</h2>

      <h3>How It Works</h3>
      <ol>
        <li>You connect your miner to the pool&apos;s server</li>
        <li>Pool assigns you work (hashes to try)</li>
        <li>You submit valid &ldquo;shares&rdquo; proving your work</li>
        <li>When the pool finds a block, rewards distribute by shares</li>
        <li>You receive payouts based on your contribution</li>
      </ol>

      <h3>Advantages</h3>
      <ul>
        <li><strong>Consistent income:</strong> Regular payouts instead of waiting for blocks</li>
        <li><strong>Lower variance:</strong> Smooths out the randomness of mining</li>
        <li><strong>No full node needed:</strong> Pool handles blockchain sync</li>
        <li><strong>Easier setup:</strong> Just point miner at pool address</li>
        <li><strong>Support:</strong> Most pools offer dashboards and monitoring</li>
      </ul>

      <h3>Disadvantages</h3>
      <ul>
        <li><strong>Fees:</strong> Pools take 0.5-2% of earnings</li>
        <li><strong>Trust:</strong> Must trust pool to pay fairly</li>
        <li><strong>Centralization:</strong> Large pools can concentrate hashpower</li>
        <li><strong>Minimum payouts:</strong> May need to accumulate before withdrawal</li>
      </ul>

      <h3>Choosing a Pool</h3>
      <p>
        Key factors to evaluate:
      </p>
      <ul>
        <li><strong>Fee structure:</strong> Lower is better, typically 0.5-2%</li>
        <li><strong>Payout scheme:</strong> PPS, PPLNS, or proportional</li>
        <li><strong>Minimum payout:</strong> Lower minimums for smaller miners</li>
        <li><strong>Server locations:</strong> Choose one near you</li>
        <li><strong>Uptime:</strong> Reliable pools maximize your earning time</li>
        <li><strong>Size:</strong> Consider supporting smaller pools for decentralization</li>
      </ul>

      <h3>Payout Schemes Explained</h3>
      <ul>
        <li><strong>PPS (Pay Per Share):</strong> Fixed payment per valid share, pool absorbs variance</li>
        <li><strong>PPLNS (Pay Per Last N Shares):</strong> Payment based on recent shares when block found</li>
        <li><strong>Proportional:</strong> Reward split by shares submitted since last block</li>
      </ul>

      <h2>Solo Mining in Detail</h2>

      <h3>How It Works</h3>
      <ol>
        <li>Run a full ETC node (Core-Geth or similar)</li>
        <li>Configure your miner to connect to your node</li>
        <li>Your hardware searches for valid blocks</li>
        <li>If you find a block, you receive the full reward</li>
      </ol>

      <h3>Advantages</h3>
      <ul>
        <li><strong>No fees:</strong> Keep 100% of block rewards</li>
        <li><strong>Full block reward:</strong> Currently ~2 ETC plus transaction fees (decreases over time per emission schedule)</li>
        <li><strong>No trust required:</strong> You verify everything yourself</li>
        <li><strong>Supports decentralization:</strong> Running your own node helps the network</li>
        <li><strong>Privacy:</strong> No pool tracking your activity</li>
      </ul>

      <h3>Disadvantages</h3>
      <ul>
        <li><strong>High variance:</strong> Long periods with no income possible</li>
        <li><strong>Full node requirement:</strong> Need storage, bandwidth, and sync time</li>
        <li><strong>Hashrate requirement:</strong> Need significant power to find blocks regularly</li>
        <li><strong>Technical complexity:</strong> More setup and maintenance</li>
      </ul>

      <h2>When to Mine Solo</h2>
      <p>
        Solo mining may make sense if:
      </p>
      <ul>
        <li>You have very significant hashpower (multiple GH/s)</li>
        <li>You can afford months without finding a block</li>
        <li>You prioritize avoiding fees over consistency</li>
        <li>You want to contribute to network decentralization</li>
        <li>You enjoy the technical challenge</li>
      </ul>

      <h2>Realistic Expectations</h2>
      <p>
        For most individual miners, pool mining is the practical choice. Consider:
      </p>
      <ul>
        <li>With 500 MH/s, finding a solo block could take months to years</li>
        <li>Network difficulty fluctuates, affecting block times</li>
        <li>Pool fees of 1% are a small cost for consistent income</li>
        <li>Regular payouts help cover electricity costs</li>
      </ul>

      <h2>Block Time Calculator</h2>
      <p>
        Estimate your expected time between solo blocks:
      </p>
      <ol>
        <li>Check current network hashrate (etc-network.info)</li>
        <li>Calculate your percentage: (Your hashrate / Network hashrate) × 100</li>
        <li>Average block time is ~13 seconds</li>
        <li>Expected blocks per day: Your % × (86400 / 13)</li>
      </ol>
      <p>
        Example: With 500 MH/s on a 200 TH/s network:
      </p>
      <ul>
        <li>Your share: 0.00025%</li>
        <li>Expected blocks/day: 0.00025 × 6646 ≈ 0.0017</li>
        <li>Average days per block: ~600 days</li>
      </ul>

      <h2>Hybrid Approaches</h2>
      <p>
        Some miners use hybrid strategies:
      </p>
      <ul>
        <li><strong>Solo pools:</strong> Pool software but you keep full block reward when you find one</li>
        <li><strong>Split mining:</strong> Majority to pool, small percentage solo for lottery chance</li>
        <li><strong>Pool hopping:</strong> Move between pools based on luck or fees</li>
      </ul>

      <h2>Recommendation</h2>
      <p>
        For most miners, pool mining is the best choice:
      </p>
      <ul>
        <li>Consistent income helps planning and covers costs</li>
        <li>Low barrier to entry</li>
        <li>Pool fees are minimal compared to variance cost of solo</li>
      </ul>
      <p>
        Consider solo mining only if you have substantial hashpower (multiple GH/s) and can handle extended periods without rewards.
      </p>
    </>
  )
}
