export default function Genesis() {
  return (
    <>
      <p>
        Ethereum Classic exists because a group of participants refused to accept that a
        blockchain&apos;s transaction history could be rewritten by social consensus. To see why, start with what happened in 2016.
      </p>

      <h2>The Platform</h2>
      <p>
        Ethereum launched on July 30, 2015, as a proof-of-work blockchain with native
        smart contract execution. Its design extended Bitcoin&apos;s model: instead of
        simple value transfers, Ethereum allowed arbitrary programs (smart contracts) to
        run on-chain, with results enforced by the network&apos;s consensus mechanism.
        By early 2016, the platform had attracted significant developer interest and a
        growing ecosystem of decentralized applications.
      </p>

      <h2>The DAO</h2>
      <p>
        In April 2016, a project called &ldquo;The DAO&rdquo; launched as a
        decentralized investment fund built on Ethereum. Token holders could vote on
        proposals to fund projects, with the smart contract managing all funds
        autonomously. The DAO raised approximately 12.7 million ETH (roughly $150 million
        at the time) from more than 11,000 participants, the largest crowdfunding campaign to that date.
      </p>

      <h2>The Exploit</h2>
      <p>
        On June 17, 2016, an attacker exploited a recursive call vulnerability (now known
        as a reentrancy bug) in The DAO&apos;s smart contract. The{' '}
        <code>splitDAO</code>{' '}function sent ETH to the caller before updating internal
        balances, allowing the attacker to recursively withdraw funds in a single
        transaction. Approximately 3.6 million ETH was drained into a &ldquo;child
        DAO&rdquo; controlled by the attacker.
      </p>
      <p>
        The exploit did not break the Ethereum protocol. The smart contract executed
        exactly as written. The vulnerability existed in The DAO&apos;s code, not in
        Ethereum itself.
      </p>

      <h2>The Debate</h2>
      <p>
        The community faced a difficult question: should the protocol intervene to return
        the funds, or should the chain&apos;s transaction history remain untouched?
      </p>
      <ul>
        <li>
          <strong>Intervention camp:</strong> The DAO held a large share of all ETH in existence.
          Returning the funds would protect its investors and show that the community could
          respond to a crisis.
        </li>
        <li>
          <strong>Immutability camp:</strong> Rewriting transaction history, even to fix a
          clear exploit, would set a precedent that undermined the value proposition of a blockchain. If history can be changed once, it can be changed
          again.
        </li>
      </ul>
      <p>
        A &ldquo;carbon vote,&rdquo; in which ETH holders signaled with their tokens, favored
        intervention, though turnout was low and the method was disputed: critics noted that
        large holders had outsized influence and that the vote did not represent node
        operators and miners.
      </p>

      <h2>The Fork</h2>
      <p>
        On July 20, 2016, at block 1,920,000, the Ethereum network executed an irregular
        state change: a hard fork that transferred all ETH held in The DAO and its child
        DAOs to a recovery contract, allowing original token holders to withdraw their
        funds. Unlike a standard protocol upgrade, which changes the rules going forward, it
        overrode the results of contract execution that had already happened.
      </p>

      <h2>The Split</h2>
      <p>
        Not everyone upgraded. A portion of the network&apos;s miners, node operators,
        and users continued running the original, unforked chain. This minority chain
        preserved the complete, unaltered transaction history, including The DAO exploit
        and its results.
      </p>
      <p>
        Poloniex listed the unforked chain as &ldquo;Ethereum Classic&rdquo; (ETC) on July 23,
        2016, while the forked chain kept the &ldquo;Ethereum&rdquo; (ETH) name and ticker.
      </p>

      <h2>The Significance</h2>
      <p>
        Block 1,920,000 is the point of divergence. Both chains share identical history
        before that block. Every transaction, every contract deployment, every state
        change prior to the fork exists on both chains.
      </p>
      <p>
        After the fork, the chains diverged permanently. Ethereum Classic participants chose to keep the original social contract, under which
        confirmed transactions are final. The chain&apos;s history is a complete, unbroken
        record from the genesis block to the present, with no manual interventions.
      </p>
      <p>
        Ethereum Classic is the original Ethereum blockchain, continued without alteration.
      </p>
    </>
  )
}
