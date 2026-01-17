export default function MiningHardware() {
  return (
    <>
      <p>
        Choosing the right hardware is crucial for profitable ETC mining. This guide covers GPU and ASIC options, their tradeoffs, and key factors to consider.
      </p>

      <h2>ETCHash Algorithm</h2>
      <p>
        Ethereum Classic uses the ETCHash algorithm, a memory-intensive proof-of-work system. Key characteristics:
      </p>
      <ul>
        <li>Requires minimum 4GB GPU VRAM (8GB+ recommended)</li>
        <li>Compatible with ETHash hardware (former Ethereum miners)</li>
        <li>Supported by both GPUs and ASICs</li>
        <li>DAG file grows over time, affecting older hardware</li>
      </ul>

      <h2>GPUs vs ASICs</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Factor</th>
              <th className="text-left">GPUs</th>
              <th className="text-left">ASICs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flexibility</td>
              <td>Can mine other coins, resale value</td>
              <td>Single algorithm only</td>
            </tr>
            <tr>
              <td>Efficiency</td>
              <td>Lower hash per watt</td>
              <td>Higher hash per watt</td>
            </tr>
            <tr>
              <td>Upfront cost</td>
              <td>$200-1500+ per card</td>
              <td>$2000-10000+ per unit</td>
            </tr>
            <tr>
              <td>Noise</td>
              <td>Moderate</td>
              <td>High (industrial fans)</td>
            </tr>
            <tr>
              <td>Setup</td>
              <td>More complex</td>
              <td>Plug and play</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>GPU Mining</h2>

      <h3>Recommended GPUs</h3>
      <p>
        For ETC mining, consider these factors when selecting GPUs:
      </p>
      <ul>
        <li><strong>VRAM:</strong> 8GB minimum recommended (6GB+ currently works)</li>
        <li><strong>Memory type:</strong> GDDR6X and HBM2 are most efficient</li>
        <li><strong>Power efficiency:</strong> Hash per watt matters for profitability</li>
        <li><strong>Availability:</strong> New vs used market options</li>
      </ul>

      <h3>NVIDIA Options</h3>
      <ul>
        <li><strong>RTX 3060 Ti / 3070:</strong> Excellent efficiency, widely available</li>
        <li><strong>RTX 3080:</strong> High hashrate, good for larger operations</li>
        <li><strong>RTX 4070/4080:</strong> Newer gen, very efficient but higher cost</li>
        <li><strong>GTX 1660 Super:</strong> Budget option, still profitable with cheap power</li>
      </ul>

      <h3>AMD Options</h3>
      <ul>
        <li><strong>RX 6600/6600 XT:</strong> Excellent efficiency and value</li>
        <li><strong>RX 6700 XT:</strong> Good hashrate, reasonable power draw</li>
        <li><strong>RX 6800/6900:</strong> High performance, higher power consumption</li>
        <li><strong>RX 580 8GB:</strong> Older but can still be profitable used</li>
      </ul>

      <h3>Used GPU Market</h3>
      <p>
        Buying used can offer good value, but verify:
      </p>
      <ul>
        <li>Card was not heavily degraded from mining abuse</li>
        <li>All fans and cooling work properly</li>
        <li>No obvious physical damage</li>
        <li>Test before purchasing if possible</li>
      </ul>

      <h2>ASIC Mining</h2>
      <p>
        ASIC miners are purpose-built machines offering higher efficiency but less flexibility.
      </p>

      <h3>ASIC Considerations</h3>
      <ul>
        <li><strong>Noise:</strong> Industrial-level fans, unsuitable for homes</li>
        <li><strong>Power:</strong> Require dedicated circuits (often 240V)</li>
        <li><strong>Heat:</strong> Generate significant heat requiring ventilation</li>
        <li><strong>Resale:</strong> Limited secondary market compared to GPUs</li>
        <li><strong>ROI period:</strong> Typically longer than GPUs</li>
      </ul>

      <h3>Popular ETCHash ASICs</h3>
      <p>
        Several manufacturers produce ETCHash-compatible ASICs:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Model</th>
              <th className="text-left">Hashrate</th>
              <th className="text-left">Power</th>
              <th className="text-left">Efficiency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bitmain Antminer E9</td>
              <td>2,400 MH/s</td>
              <td>1,920W</td>
              <td>0.80 J/MH</td>
            </tr>
            <tr>
              <td>Innosilicon A11 Pro</td>
              <td>1,500 MH/s</td>
              <td>2,350W</td>
              <td>1.57 J/MH</td>
            </tr>
            <tr>
              <td>Jasminer X4</td>
              <td>2,500 MH/s</td>
              <td>1,200W</td>
              <td>0.48 J/MH</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        Note: ASIC availability and pricing change frequently. Research current market conditions before purchasing.
      </p>

      <h2>Power Supply Requirements</h2>
      <p>
        Adequate power infrastructure is critical:
      </p>

      <h3>For GPU Mining</h3>
      <ul>
        <li>80+ Gold or Platinum rated PSUs for efficiency</li>
        <li>Plan for 80% load maximum (don&apos;t run at full capacity)</li>
        <li>Multiple PSUs may be needed for larger rigs</li>
        <li>Quality matters—cheap PSUs can fail or cause fires</li>
      </ul>

      <h3>Power Calculation</h3>
      <p>
        Calculate total power needs:
      </p>
      <ul>
        <li>GPU TDP × number of cards</li>
        <li>Add 100-200W for motherboard, CPU, etc.</li>
        <li>Multiply by 1.2 for safety margin</li>
      </ul>

      <h2>Cooling Requirements</h2>
      <p>
        Mining hardware generates significant heat:
      </p>
      <ul>
        <li><strong>Room ventilation:</strong> Exhaust hot air outside or to another area</li>
        <li><strong>Intake air:</strong> Ensure fresh, cool air reaches the equipment</li>
        <li><strong>Ambient temperature:</strong> Lower is better; consider basement locations</li>
        <li><strong>GPU spacing:</strong> Allow gaps between cards for airflow</li>
      </ul>

      <h3>Temperature Targets</h3>
      <ul>
        <li><strong>GPU core:</strong> Under 70°C optimal, 80°C maximum</li>
        <li><strong>GPU memory:</strong> Under 90°C for GDDR6X cards</li>
        <li><strong>ASICs:</strong> Follow manufacturer specifications</li>
      </ul>

      <h2>Efficiency Optimization</h2>

      <h3>Undervolting</h3>
      <p>
        Reducing GPU voltage can significantly improve efficiency:
      </p>
      <ul>
        <li>Reduces power consumption 10-30%</li>
        <li>Lowers temperatures</li>
        <li>Extends hardware lifespan</li>
        <li>May require stability testing</li>
      </ul>

      <h3>Memory Overclocking</h3>
      <p>
        ETCHash benefits from memory speed:
      </p>
      <ul>
        <li>Increase memory clock for higher hashrate</li>
        <li>Monitor for stability and rejected shares</li>
        <li>Watch memory temperatures closely</li>
        <li>Start conservative, increase gradually</li>
      </ul>

      <h2>Building a Mining Rig</h2>

      <h3>Components Needed</h3>
      <ul>
        <li><strong>Motherboard:</strong> Multiple PCIe slots for GPUs</li>
        <li><strong>CPU:</strong> Basic processor is sufficient</li>
        <li><strong>RAM:</strong> 8GB typically enough</li>
        <li><strong>Storage:</strong> Small SSD for OS</li>
        <li><strong>Frame:</strong> Open-air frame for cooling</li>
        <li><strong>Risers:</strong> PCIe risers to connect GPUs</li>
        <li><strong>PSU:</strong> Adequate power supply(s)</li>
      </ul>

      <h3>Operating System</h3>
      <ul>
        <li><strong>Windows:</strong> Familiar, good driver support</li>
        <li><strong>Linux:</strong> More stable, lower overhead</li>
        <li><strong>Mining OS:</strong> Specialized distributions (HiveOS, etc.)</li>
      </ul>

      <h2>Cost-Benefit Analysis</h2>
      <p>
        Before purchasing, calculate:
      </p>
      <ol>
        <li><strong>Hardware cost:</strong> Total investment needed</li>
        <li><strong>Expected hashrate:</strong> Combined output of your setup</li>
        <li><strong>Power consumption:</strong> Total watts at the wall</li>
        <li><strong>Electricity cost:</strong> Your rate per kWh</li>
        <li><strong>Expected earnings:</strong> Use mining calculators</li>
        <li><strong>ROI period:</strong> Time to recoup investment</li>
      </ol>
      <p>
        Factor in potential ETC price changes and network difficulty increases.
      </p>

      <h2>Summary</h2>
      <ul>
        <li>GPUs offer flexibility; ASICs offer efficiency</li>
        <li>Minimum 4GB VRAM required, 8GB+ recommended</li>
        <li>Power and cooling infrastructure are critical</li>
        <li>Undervolting improves efficiency significantly</li>
        <li>Calculate profitability before purchasing</li>
      </ul>
    </>
  )
}
