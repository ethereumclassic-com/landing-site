export default function MiningGettingStarted() {
  return (
    <>
      <p>
        Mining Ethereum Classic lets you contribute to network security while earning ETC rewards. This guide covers the fundamentals of getting started with ETC mining.
      </p>

      <h2>What is Mining?</h2>
      <p>
        Mining is the process of using computer hardware to validate transactions and add new blocks to the blockchain. Miners compete to solve complex mathematical puzzles, and the winner earns the block reward plus transaction fees.
      </p>
      <p>
        On Ethereum Classic, mining:
      </p>
      <ul>
        <li>Secures the network against attacks</li>
        <li>Processes and validates transactions</li>
        <li>Issues new ETC according to the fixed emission schedule</li>
        <li>Maintains decentralization by distributing consensus</li>
      </ul>

      <h2>Mining Requirements</h2>

      <h3>Hardware</h3>
      <p>
        You&apos;ll need either a GPU (graphics card) or ASIC miner:
      </p>
      <ul>
        <li><strong>GPUs:</strong> AMD and NVIDIA cards with at least 4GB VRAM</li>
        <li><strong>ASICs:</strong> Purpose-built mining machines for ETCHash</li>
      </ul>
      <p>
        GPUs offer more flexibility while ASICs provide better efficiency. Check our hardware guide for specific recommendations.
      </p>

      <h3>Software</h3>
      <p>
        You&apos;ll need mining software compatible with ETCHash:
      </p>
      <ul>
        <li><strong>T-Rex:</strong> Popular for NVIDIA GPUs</li>
        <li><strong>lolMiner:</strong> Works with both AMD and NVIDIA</li>
        <li><strong>TeamRedMiner:</strong> Optimized for AMD GPUs</li>
        <li><strong>PhoenixMiner:</strong> Supports both GPU brands</li>
      </ul>

      <h3>ETC Wallet</h3>
      <p>
        You need a wallet address to receive mining rewards. Any ETC wallet works—we recommend MetaMask or a hardware wallet for security.
      </p>

      <h3>Mining Pool (Recommended)</h3>
      <p>
        Unless you have significant hashpower, joining a mining pool is essential. Pools combine hashrate from multiple miners for consistent payouts. You earn proportional to your contribution.
      </p>

      <h2>Step-by-Step Setup</h2>

      <h3>1. Prepare Your Hardware</h3>
      <ul>
        <li>Install or update GPU drivers (latest stable version)</li>
        <li>Ensure adequate cooling—mining generates significant heat</li>
        <li>Verify your power supply can handle the load</li>
        <li>Check that GPU VRAM meets minimum requirements (4GB+)</li>
      </ul>

      <h3>2. Get a Wallet Address</h3>
      <ul>
        <li>Create a wallet if you don&apos;t have one</li>
        <li>Copy your ETC address—this is where rewards go</li>
        <li>Never share your private keys with anyone</li>
      </ul>

      <h3>3. Choose a Mining Pool</h3>
      <p>
        Select a pool based on:
      </p>
      <ul>
        <li><strong>Pool fee:</strong> Usually 0.5-2%</li>
        <li><strong>Minimum payout:</strong> Lower is better for smaller operations</li>
        <li><strong>Server location:</strong> Choose one near you for lower latency</li>
        <li><strong>Pool hashrate:</strong> Larger pools find blocks more frequently</li>
      </ul>
      <p>
        Major ETC pools include:
      </p>
      <ul>
        <li><strong>F2Pool:</strong> Largest ETC pool, daily payouts, 0.1 ETC minimum</li>
        <li><strong>2Miners:</strong> Free ETC payouts, multiple payout options</li>
        <li><strong>K1Pool:</strong> Regional servers, competitive fees</li>
      </ul>

      <h3>4. Download Mining Software</h3>
      <ol>
        <li>Download your chosen miner from its official GitHub/website</li>
        <li>Extract the files to a folder</li>
        <li>Your antivirus may flag miners—add an exception if trusted</li>
      </ol>

      <h3>5. Configure the Miner</h3>
      <p>
        Create or edit the batch file (.bat on Windows, .sh on Linux) with:
      </p>
      <ul>
        <li>Pool address and port</li>
        <li>Your wallet address</li>
        <li>Worker name (optional—helps identify rigs)</li>
        <li>Any GPU-specific settings</li>
      </ul>
      <p>
        Example configurations for popular miners (using F2Pool):
      </p>
      <p><strong>T-Rex (NVIDIA):</strong></p>
      <pre><code>t-rex.exe -a etchash -o stratum+tcp://etc.f2pool.com:8118 -u ACCOUNT_NAME.RIG_NAME -p x</code></pre>
      <p><strong>lolMiner (AMD/NVIDIA):</strong></p>
      <pre><code>lolMiner.exe --algo ETCHASH --pool etc.f2pool.com:8118 --user ACCOUNT_NAME.RIG_NAME</code></pre>
      <p><strong>TeamRedMiner (AMD):</strong></p>
      <pre><code>teamredminer.exe -a etchash -o stratum+tcp://etc.f2pool.com:8118 -u ACCOUNT_NAME.RIG_NAME -p x</code></pre>
      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        Note: F2Pool uses account-based mining. Replace ACCOUNT_NAME with your F2Pool account name. Other pools may use wallet address directly.
      </p>

      <h3>6. Start Mining</h3>
      <ol>
        <li>Run the batch file</li>
        <li>Watch for &ldquo;accepted&rdquo; shares in the output</li>
        <li>Check your pool dashboard with your wallet address</li>
        <li>Monitor GPU temperatures (keep under 70-75°C)</li>
      </ol>

      <h2>Understanding Mining Output</h2>
      <p>
        Key metrics to watch:
      </p>
      <ul>
        <li><strong>Hashrate:</strong> Your mining speed in MH/s (megahashes per second)</li>
        <li><strong>Shares:</strong> Valid solutions submitted to the pool</li>
        <li><strong>Accepted/Rejected:</strong> Ratio of valid to invalid shares</li>
        <li><strong>Temperature:</strong> GPU heat level</li>
        <li><strong>Power:</strong> Energy consumption in watts</li>
      </ul>

      <h2>Calculating Profitability</h2>
      <p>
        Mining profitability depends on:
      </p>
      <ul>
        <li><strong>Hashrate:</strong> Higher = more earnings potential</li>
        <li><strong>Electricity cost:</strong> Your $/kWh rate</li>
        <li><strong>Power consumption:</strong> Watts used by your hardware</li>
        <li><strong>ETC price:</strong> Market value of rewards</li>
        <li><strong>Network difficulty:</strong> Changes based on total network hashrate</li>
      </ul>
      <p>
        Use online mining calculators to estimate earnings. Input your hashrate and power cost to see projected returns.
      </p>

      <h2>Best Practices</h2>

      <h3>Temperature Management</h3>
      <ul>
        <li>Keep GPUs under 70-75°C for longevity</li>
        <li>Ensure good airflow in your mining area</li>
        <li>Consider undervolting to reduce heat and power</li>
        <li>Clean dust from hardware regularly</li>
      </ul>

      <h3>Stability</h3>
      <ul>
        <li>Avoid aggressive overclocks that cause crashes</li>
        <li>Monitor for rejected shares—high rejection indicates issues</li>
        <li>Set up auto-restart if miner crashes</li>
        <li>Keep drivers updated but stable (avoid beta versions)</li>
      </ul>

      <h3>Security</h3>
      <ul>
        <li>Download miners only from official sources</li>
        <li>Keep your wallet seed phrase secure</li>
        <li>Consider a dedicated mining wallet separate from holdings</li>
      </ul>

      <h2>Next Steps</h2>
      <p>
        Once you&apos;re mining successfully:
      </p>
      <ul>
        <li>Check our hardware guide to optimize your setup</li>
        <li>Learn about pool vs solo mining tradeoffs</li>
        <li>Calculate your actual profitability over time</li>
        <li>Consider expanding your operation if profitable</li>
      </ul>
    </>
  )
}
