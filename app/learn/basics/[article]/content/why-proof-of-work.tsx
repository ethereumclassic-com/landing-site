export default function WhyProofOfWork() {
  return (
    <>
      <p>
        Ethereum Classic is the largest proof-of-work smart contract platform in the world. This design choice delivers security, decentralization, and censorship resistance that no other consensus mechanism can match.
      </p>

      <h2>What is Proof-of-Work?</h2>
      <p>
        Proof-of-work (PoW) is a consensus mechanism where miners compete to solve mathematical puzzles using computational power. The first miner to find a valid solution adds the next block to the blockchain and earns a reward in ETC.
      </p>
      <p>
        This process converts electricity into security. The energy expenditure creates an objective, external anchor for the blockchain&apos;s state that cannot be faked or manipulated through financial engineering.
      </p>

      <h2>Security Through Real Resources</h2>
      <p>
        PoW derives its security from the physical world—electricity and hardware investments—not from tokens within the system. This fundamental property creates powerful security guarantees:
      </p>
      <ul>
        <li><strong>Attack cost is real:</strong> Attempting to attack the network requires massive ongoing energy expenditure</li>
        <li><strong>Objective finality:</strong> The longest chain represents the most accumulated work, providing clear consensus</li>
        <li><strong>Geographic distribution:</strong> Mining operations spread globally, making coordinated attacks logistically impractical</li>
      </ul>

      <h2>Censorship Resistance</h2>
      <p>
        Proof-of-work provides the strongest possible censorship resistance. Since block production depends on computation rather than permission, anyone can participate in securing the network.
      </p>
      <p>
        No authority can prevent miners from including valid transactions. The global distribution of mining hardware ensures the network continues operating even if individual participants are targeted.
      </p>

      <h2>Fair Distribution</h2>
      <p>
        In a PoW system, new coins are distributed to those who contribute real resources to network security:
      </p>
      <ul>
        <li><strong>Merit-based rewards:</strong> Miners earn ETC proportional to their contribution</li>
        <li><strong>No wealth concentration:</strong> Block production doesn&apos;t favor existing holders</li>
        <li><strong>Permissionless entry:</strong> Anyone with hardware can participate without approval</li>
      </ul>

      <h2>The ETCHash Algorithm</h2>
      <p>
        Ethereum Classic uses ETCHash, a memory-intensive mining algorithm. This means miners need both computational power and memory, which helps maintain decentralization across different hardware types.
      </p>
      <p>
        ETC is compatible with GPU and ASIC mining hardware, giving miners flexibility in how they participate in network security.
      </p>

      <h2>Network Hashrate</h2>
      <p>
        ETC benefits from being the dominant GPU-minable smart contract platform. This massive hashrate makes 51% attacks economically impractical—an attacker would need to acquire and operate more mining hardware than the entire rest of the network combined.
      </p>

      <h2>Comparison with Proof-of-Stake</h2>
      <p>
        Proof-of-stake (PoS) systems secure networks through token deposits rather than computational work. While PoS has different tradeoffs, PoW offers distinct advantages for applications requiring maximum security and neutrality:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Property</th>
              <th className="text-left">Proof-of-Work</th>
              <th className="text-left">Proof-of-Stake</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Security source</td>
              <td>External (energy)</td>
              <td>Internal (stake)</td>
            </tr>
            <tr>
              <td>Entry barrier</td>
              <td>Hardware + electricity</td>
              <td>Token holdings</td>
            </tr>
            <tr>
              <td>Wealth concentration</td>
              <td>Minimal over time</td>
              <td>Compounds to stakers</td>
            </tr>
            <tr>
              <td>Attack cost</td>
              <td>Ongoing energy expense</td>
              <td>One-time capital</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why ETC Uses PoW</h2>
      <p>
        Ethereum Classic&apos;s commitment to proof-of-work reflects its core values of decentralization and neutrality. PoW ensures:
      </p>
      <ul>
        <li><strong>True decentralization:</strong> No party gains outsized influence through wealth accumulation</li>
        <li><strong>Immutability:</strong> Rewriting history requires re-expending the energy used to create it</li>
        <li><strong>Permissionless access:</strong> Anyone can participate in consensus</li>
        <li><strong>Long-term sustainability:</strong> Security model proven over more than a decade</li>
      </ul>

      <h2>Getting Started with Mining</h2>
      <p>
        Want to contribute to ETC&apos;s security and earn rewards? Check out our mining guides to learn about hardware requirements, pool selection, and profitability.
      </p>
    </>
  )
}
