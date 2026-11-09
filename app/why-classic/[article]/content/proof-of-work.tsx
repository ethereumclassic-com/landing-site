export default function ProofOfWork() {
  return (
    <>
      <p>
        Ethereum Classic uses proof of work as its consensus mechanism by choice, for what it
        provides that other consensus mechanisms do not.
      </p>

      <h2>Physical Security</h2>
      <p>
        Proof of work ties blockchain security to real-world energy expenditure. To attack
        the network, an adversary must buy or rent mining hardware at scale and run it, consuming
        electricity continuously for the duration of the attack. That is a real cost, paid for
        as long as the attack lasts.
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
        Proof of work breaks this circularity. The cost of mining is external to the system: electricity, hardware, cooling and
        physical space are priced in the real economy, not in the blockchain&apos;s native
        token.
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
        existing holders.
      </p>

      <h2>Censorship Resistance</h2>
      <p>
        In proof of work, miners select which transactions to include in a block. If one miner censors a transaction, another can include it in a later block. The
        censoring miner forgoes the fee, and the transaction goes through after a short delay.
      </p>
      <p>
        Proof-of-stake systems introduce a different dynamic. Validators can be identified
        by their staked addresses and potentially subjected to legal or political pressure
        to censor specific transactions. And their stake sits inside the protocol, where slashing, designed to punish
        misbehavior, can reach it.
      </p>
      <p>
        Proof-of-work miners cannot be &ldquo;slashed.&rdquo; Their investment is in hardware and electricity, which the protocol cannot confiscate.
      </p>

      <h2>Why ETC Stayed on Proof of Work</h2>
      <p>
        In September 2022, Ethereum transitioned from proof of work to proof of stake in
        an event called &ldquo;The Merge.&rdquo; Ethereum Classic did not follow.
      </p>
      <p>
        The decision was consistent with ETC&apos;s broader philosophy. The community weighed proof of stake against the network&apos;s core commitments
        (immutability, decentralization and censorship resistance) and concluded that proof of
        work serves them better.
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

      <h2>The Etchash Algorithm</h2>
      <p>
        Ethereum Classic uses Etchash, a modified version of Ethash. The primary
        modification is an extended DAG epoch length: where Ethash increases the DAG
        (directed acyclic graph) size every 30,000 blocks, Etchash uses a 60,000-block
        epoch. This doubles the time before the DAG outgrows a given GPU&apos;s memory
        capacity.
      </p>
      <p>
        The intent was to keep consumer GPUs mining for as long as possible, since mining that
        requires specialized, expensive hardware (ASICs) raises the barrier to entry and tends
        to concentrate among fewer, larger operations. Etchash ASICs now mine alongside GPUs,
        and the slower DAG growth keeps cards with 6GB or more of memory mining.
      </p>

      <h2>Concentration Does Not Compound</h2>
      <p>
        Proof-of-stake systems are susceptible to a specific centralization failure mode:
        a small number of large validators can accumulate enough stake to control block
        production and transaction ordering. Because staking rewards compound, this
        concentration tends to increase over time rather than decrease.
      </p>
      <p>
        Proof of work has no such feedback loop. Mining hardware depreciates and electricity
        must be bought continuously, both at prices set by market competition, so no miner can
        turn today&apos;s block rewards into a permanent advantage in tomorrow&apos;s block
        production. Hashrate can still concentrate in mining pools, but a pool directs only the
        hashrate its miners point at it, and they can move to another pool at any time.
      </p>
      <p>
        Ethereum Classic&apos;s commitment to proof of work keeps the security model that has
        protected Bitcoin since 2009: attacking the chain costs hardware and energy bought in
        the real economy.
      </p>
    </>
  )
}
