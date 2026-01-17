export default function MiningProfitability() {
  return (
    <>
      <p>
        Mining profitability depends on multiple factors including your hashrate, electricity costs, hardware efficiency, and the current ETC price. Understanding these variables helps you make informed decisions about your mining operation.
      </p>

      <h2>Key Profitability Factors</h2>

      <h3>1. Hashrate</h3>
      <p>
        Your hashrate determines how much of the network&apos;s mining power you contribute. Higher hashrate means more chances to find blocks and earn rewards.
      </p>
      <ul>
        <li><strong>Measured in:</strong> MH/s (megahashes) or GH/s (gigahashes)</li>
        <li><strong>Higher is better:</strong> More hashes = more potential rewards</li>
        <li><strong>Network share:</strong> Your percentage of total network hashrate</li>
      </ul>

      <h3>2. Electricity Cost</h3>
      <p>
        Power cost is typically the largest ongoing expense for miners. Even profitable hardware becomes unprofitable with expensive electricity.
      </p>
      <ul>
        <li><strong>Calculate carefully:</strong> Include all fees and taxes</li>
        <li><strong>Time-of-use rates:</strong> Some areas offer cheaper off-peak electricity</li>
        <li><strong>Threshold:</strong> Most operations need rates below $0.10/kWh to profit</li>
      </ul>

      <h3>3. Hardware Efficiency</h3>
      <p>
        Efficiency measures hashrate per watt of power consumed. More efficient hardware generates more hashes per dollar of electricity.
      </p>
      <ul>
        <li><strong>Measured in:</strong> MH/s per watt (MH/W)</li>
        <li><strong>Modern GPUs:</strong> Typically 0.3-0.5 MH/W</li>
        <li><strong>ASICs:</strong> Can exceed 1+ MH/W for ETCHash</li>
      </ul>

      <h3>4. Network Difficulty</h3>
      <p>
        Difficulty adjusts to maintain consistent block times as network hashrate changes. Higher difficulty means fewer blocks found per unit of hashrate.
      </p>
      <ul>
        <li><strong>Dynamic:</strong> Adjusts based on total network hashrate</li>
        <li><strong>Impact:</strong> Rising difficulty reduces individual mining rewards</li>
        <li><strong>Check regularly:</strong> Monitor network stats for trends</li>
      </ul>

      <h3>5. ETC Price</h3>
      <p>
        The market price of ETC determines the fiat value of your mining rewards. Price volatility significantly impacts profitability calculations.
      </p>

      <h2>Calculating Profitability</h2>
      <p>
        Basic daily profit formula:
      </p>
      <ol>
        <li>Calculate daily ETC earned based on your hashrate share</li>
        <li>Multiply by current ETC price for gross revenue</li>
        <li>Calculate daily electricity cost (watts × hours × rate)</li>
        <li>Subtract electricity cost from gross revenue</li>
        <li>Account for pool fees if applicable (typically 0.5-2%)</li>
      </ol>

      <h3>Example Calculation</h3>
      <p>
        For a 180 MH/s GPU (typical single card):
      </p>
      <ul>
        <li>Power consumption: 390W</li>
        <li>Electricity rate: $0.10/kWh</li>
        <li>Daily power cost: 0.39kW × 24h × $0.10 = $0.94</li>
        <li>Estimated daily ETC: ~0.0125 ETC</li>
        <li>At current prices: Revenue ≈ $0.16/day</li>
        <li>Daily profit/loss: approximately -$0.77 (loss)</li>
      </ul>
      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        Note: This example uses approximate current network values. Always use a live calculator like WhatToMine for accurate estimates based on real-time difficulty and prices.
      </p>

      <h2>Current Network Statistics</h2>
      <p>
        Key metrics that affect profitability (these change constantly):
      </p>
      <ul>
        <li><strong>Block Reward:</strong> ~2 ETC (decreases 20% every 5 million blocks)</li>
        <li><strong>Block Time:</strong> ~13.5 seconds average</li>
        <li><strong>Network Hashrate:</strong> ~185 TH/s (fluctuates with miner activity)</li>
        <li><strong>Algorithm:</strong> ETCHash (memory-intensive)</li>
      </ul>
      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        Check live stats at WhatToMine or MiningPoolStats for current values.
      </p>

      <h2>Profitability Tools</h2>
      <p>
        Online calculators help estimate earnings. Enter your hashrate, power consumption, and electricity cost:
      </p>
      <ul>
        <li><strong>WhatToMine ETC Calculator:</strong> Most comprehensive tool for comparing profitability across coins</li>
        <li><strong>MiningPoolStats:</strong> Network hashrate and pool distribution data</li>
        <li><strong>Pool dashboards:</strong> F2Pool, 2Miners, and others show estimated earnings</li>
      </ul>
      <p>
        Remember that calculators provide estimates based on current conditions. Actual results vary with network difficulty changes, price fluctuations, and luck.
      </p>

      <h2>Improving Profitability</h2>

      <h3>Reduce Electricity Costs</h3>
      <ul>
        <li>Shop for competitive electricity rates</li>
        <li>Consider time-of-use plans with off-peak rates</li>
        <li>Explore renewable energy options</li>
        <li>Use mining heat for practical purposes (heating spaces)</li>
      </ul>

      <h3>Optimize Hardware</h3>
      <ul>
        <li>Tune GPU settings for better efficiency</li>
        <li>Undervolt to reduce power without losing hashrate</li>
        <li>Maintain proper cooling to prevent throttling</li>
        <li>Keep firmware and mining software updated</li>
      </ul>

      <h3>Choose the Right Pool</h3>
      <ul>
        <li>Compare pool fees (0.5% vs 2% adds up)</li>
        <li>Select servers with low latency</li>
        <li>Evaluate payout schemes for your situation</li>
      </ul>

      <h2>Break-Even Analysis</h2>
      <p>
        Before investing in mining hardware, calculate your break-even point:
      </p>
      <ol>
        <li>Total hardware cost (GPUs, motherboard, power supply, etc.)</li>
        <li>Estimated monthly profit after electricity</li>
        <li>Months to break even = Hardware cost ÷ Monthly profit</li>
      </ol>
      <p>
        Consider that hardware depreciates and network difficulty typically increases over time, extending break-even timelines.
      </p>

      <h2>Risk Factors</h2>
      <ul>
        <li><strong>Price volatility:</strong> ETC price can change dramatically</li>
        <li><strong>Difficulty increases:</strong> More miners joining reduces individual rewards</li>
        <li><strong>Hardware failure:</strong> Components may fail, causing downtime</li>
        <li><strong>Electricity rate changes:</strong> Utility prices may increase</li>
        <li><strong>Technology changes:</strong> More efficient hardware may make yours obsolete</li>
      </ul>

      <h2>When Mining Makes Sense</h2>
      <p>
        Mining ETC can be viable when:
      </p>
      <ul>
        <li>You have access to very cheap electricity (under $0.05/kWh)</li>
        <li>You already own suitable hardware</li>
        <li>You can use the heat output productively</li>
        <li>You&apos;re accumulating ETC as a long-term investment</li>
        <li>You want to support network decentralization regardless of profit</li>
      </ul>

      <h2>Tax Considerations</h2>
      <p>
        Mining income is typically taxable. Keep records of:
      </p>
      <ul>
        <li>ETC received and its fair market value at receipt</li>
        <li>Hardware purchases for potential deductions</li>
        <li>Electricity costs attributable to mining</li>
        <li>Pool fees and other operational expenses</li>
      </ul>
      <p>
        Consult a tax professional familiar with cryptocurrency in your jurisdiction.
      </p>

      <h2>Summary</h2>
      <p>
        Mining profitability requires careful analysis of your specific situation. Use current data, realistic efficiency numbers, and accurate electricity costs. Remember that market conditions change—what&apos;s unprofitable today may become profitable (or vice versa) as prices and difficulty shift.
      </p>
    </>
  )
}
