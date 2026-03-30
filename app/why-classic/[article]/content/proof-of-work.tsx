export default function ProofOfWork() {
  return (
    <>
      <p>
        Ethereum Classic uses proof of work as its consensus mechanism. This is not a
        legacy decision or a failure to upgrade. It is a deliberate, ongoing commitment
        based on what proof of work provides that other consensus mechanisms do not.
      </p>

      <h2>Physical Security</h2>
      <p>
        Proof of work ties blockchain security to real-world energy expenditure. To attack
        the network, an adversary must acquire and operate mining hardware at scale,
        consuming electricity continuously for the duration of the attack. This creates a
        tangible, ongoing cost that cannot be circumvented through financial engineering.
      </p>
      <p>
        In proof-of-stake systems, the cost of an attack is denominated in the network&apos;s
        own token. An attacker who accumulates enough stake can potentially rewrite
        history, and the &ldquo;punishment&rdquo; (slashing) destroys tokens that the
        attacker already controls. The security model is circular: the system&apos;s
        security depends on the value of the token, which depends on the system&apos;s
        security.
      </p>
      <p>
        Proof of work breaks this circularity. The cost of mining is external to the
        system &mdash; electricity, hardware, cooling, and physical space are priced in
        the real economy, not in the blockchain&apos;s native token.
      </p>

      <h2>Permissionless Participation</h2>
      <p>
        Anyone with appropriate hardware can mine Ethereum Classic. There is no minimum
        balance requirement, no registration process, and no approval needed from existing
        participants. A miner in any jurisdiction can connect to the network, begin
        hashing, and earn block rewards proportional to their contribution.
      </p>
      <p>
        This stands in contrast to proof-of-stake systems, where block production
        requires holding a minimum amount of the network&apos;s native token. This
        creates a barrier to entry: new participants must first acquire tokens from
        existing holders. Over time, staking rewards compound, concentrating block
        production rights among early and wealthy participants.
      </p>
      <p>
        Proof of work does not have this compounding effect. Mining hardware depreciates.
        Electricity must be purchased continuously. There is no mechanism by which today&apos;s
        miners automatically become tomorrow&apos;s dominant miners.
      </p>

      <h2>Censorship Resistance</h2>
      <p>
        In proof of work, miners select which transactions to include in a block. If one
        miner censors a transaction, another miner will include it in the next block. The
        censoring miner gains nothing, and the transaction proceeds with minimal delay.
      </p>
      <p>
        Proof-of-stake systems introduce a different dynamic. Validators can be identified
        by their staked addresses and potentially subjected to legal or political pressure
        to censor specific transactions. Validators who include censored transactions risk
        having their stake slashed by a majority coalition. The slashing mechanism, designed
        to punish misbehavior, can be repurposed as a censorship enforcement tool.
      </p>
      <p>
        Proof-of-work miners cannot be &ldquo;slashed.&rdquo; Their investment is in
        hardware and electricity, which cannot be confiscated remotely by the protocol.
      </p>

      <h2>Why ETC Stayed on Proof of Work</h2>
      <p>
        In September 2022, Ethereum transitioned from proof of work to proof of stake in
        an event called &ldquo;The Merge.&rdquo; Ethereum Classic did not follow.
      </p>
      <p>
        The decision was consistent with ETC&apos;s broader philosophy. The community
        evaluated proof of stake against the network&apos;s core commitments &mdash;
        immutability, decentralization, and censorship resistance &mdash; and concluded
        that proof of work better serves those commitments.
      </p>
      <p>
        Specifically, the community identified these concerns with proof of stake:
      </p>
      <ul>
        <li>
          Wealth concentration compounds into governance power, as staking rewards accrue
          to existing large holders.
        </li>
        <li>
          Validator identity is exposed, creating a surface for regulatory coercion and
          targeted censorship.
        </li>
        <li>
          The minimum stake requirement (32 ETH on Ethereum) excludes small participants
          from direct block production.
        </li>
        <li>
          Slashing mechanisms create a tool that a majority coalition can use against
          minority participants.
        </li>
      </ul>

      <h2>The ETCHash Algorithm</h2>
      <p>
        Ethereum Classic uses ETCHash, a modified version of Ethash. The primary
        modification is an extended DAG epoch length: where Ethash increases the DAG
        (directed acyclic graph) size every 30,000 blocks, ETCHash uses a 60,000-block
        epoch. This doubles the time before the DAG outgrows a given GPU&apos;s memory
        capacity.
      </p>
      <p>
        The design intent is to keep mining accessible to consumer-grade GPUs for as long
        as possible. When mining requires specialized, expensive hardware (ASICs), the
        barrier to entry rises and mining centralizes among fewer, larger operations.
        ETCHash delays this centralization pressure.
      </p>

      <h2>No Validator Cartel Risk</h2>
      <p>
        Proof-of-stake systems are susceptible to a specific centralization failure mode:
        a small number of large validators can accumulate enough stake to control block
        production and transaction ordering. Because staking rewards compound, this
        concentration tends to increase over time rather than decrease.
      </p>
      <p>
        Proof of work does not have this feedback loop. Mining profitability depends on
        hardware efficiency and electricity costs, both of which are subject to market
        competition. No miner can leverage today&apos;s block rewards into a permanent
        advantage in tomorrow&apos;s block production.
      </p>
      <p>
        Ethereum Classic&apos;s commitment to proof of work preserves the security model
        that has protected proof-of-work blockchains since Bitcoin&apos;s launch in 2009.
        The model is battle-tested, well-understood, and grounded in physical reality
        rather than game-theoretic assumptions about rational economic actors.
      </p>
    </>
  )
}
