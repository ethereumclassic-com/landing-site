export default function Decentralism() {
  return (
    <>
      <p>
        Decentralization is a property of a network that can be checked: the degree to which no
        single entity can control, censor or alter how the system runs. Ethereum Classic treats
        it as a design constraint on every protocol decision.
      </p>

      <h2>Three Pillars</h2>
      <p>
        A genuinely decentralized blockchain satisfies three conditions:
      </p>
      <ul>
        <li>
          <strong>No central authority:</strong> No foundation, corporation, or individual
          has the power to unilaterally modify the protocol, reverse transactions, or
          freeze accounts.
        </li>
        <li>
          <strong>No single point of failure:</strong> The network continues operating
          even if any individual node, mining pool, or developer team goes offline.
        </li>
        <li>
          <strong>No permission required:</strong> Anyone can run a node, submit
          transactions, deploy contracts, or mine blocks without requesting approval from
          any gatekeeper.
        </li>
      </ul>
      <p>
        Each of these can be tested, and a network that fails any of them offers weaker
        guarantees than one that meets all three.
      </p>

      <h2>Governance Minimization</h2>
      <p>
        Ethereum Classic has no foundation with protocol override authority. There is no
        board of directors, no executive team, and no treasury controlled by a small group
        that funds development in exchange for influence over the roadmap.
      </p>
      <p>
        This is by design. Governance power is a liability in a decentralized system.
        Every governance mechanism is a potential attack surface: capture the governance
        process, and you capture the chain. By minimizing governance, ETC minimizes the
        surface area available for capture.
      </p>
      <p>
        There is still coordination, through a process that requires broad consensus rather
        than executive authority.
      </p>

      <h2>The ECIP Process</h2>
      <p>
        Protocol changes on Ethereum Classic follow the Ethereum Classic Improvement
        Proposal (ECIP) process. Anyone can submit a proposal. Proposals are reviewed
        publicly, debated openly, and adopted only when there is rough consensus among
        node operators, miners, developers, and the broader community.
      </p>
      <p>
        The ECIP process is deliberately slow and conservative: it puts stability and backward
        compatibility ahead of speed. A protocol change that
        breaks existing contracts or alters economic parameters faces a high bar for
        adoption.
      </p>
      <p>
        No individual or organization has veto power over the ECIP process. Equally, no
        individual or organization can force a proposal through without community support.
      </p>

      <h2>Client Diversity</h2>
      <p>
        A blockchain with only one client implementation has a single point of failure: a
        bug in that client affects the entire network. Ethereum Classic has two independent client implementations:
      </p>
      <ul>
        <li>
          <strong>Core-Geth:</strong> An Ethereum Classic execution client and public-good
          Go reference client, a go-ethereum downstream released and maintained in the
          ethereumclassic GitHub organization, and the recommended client to run.
        </li>
        <li>
          <strong>Fukuii:</strong>{' '}An execution client in Scala 3, maintained by Chippr
          Robotics as a continuation of IOHK&apos;s Mantis, with native Proof-of-Work for
          Ethereum Classic and Mordor and the Engine API for post-Merge Ethereum. Its
          maintainers mark it alpha, so it is an alternative to try.
        </li>
      </ul>
      <p>
        Diversity protects a network as far as its nodes spread across clients: a critical bug
        in one implementation leaves the nodes running the other unaffected, so the network
        keeps producing and validating blocks.
      </p>

      <h2>Mining Decentralization</h2>
      <p>
        Ethereum Classic uses proof of work, which means block production is open to
        anyone with the appropriate hardware. There is no validator set, no minimum stake requirement and no delegation mechanism in
        the protocol that concentrates block production rights among a small group.
      </p>
      <p>
        Miners compete to find valid blocks by expending computational resources. This
        competition is permissionless: new miners can join at any time without registering
        with any authority. The Etchash algorithm grows its memory requirement slowly, so GPUs with enough memory
        still mine alongside Etchash ASICs. Mining pools do concentrate hashrate, but each miner
        can switch pools at any time, so a pool keeps its share only while its miners choose to
        stay.
      </p>

      <h2>The Declaration of Independence</h2>
      <p>
        On August 13, 2016, the Ethereum Classic community published{' '}
        <a href="https://ethereumclassic.org/blog/2016-08-13-declaration-of-independence/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">The Ethereum Classic Declaration of Independence</a>.
        It explained the community&apos;s decision to continue the original, unforked Ethereum
        blockchain independently of the Ethereum Foundation, and set out a code of principles
        that still guides the network. Among them:
      </p>
      <ul>
        <li>
          Code is law: no change to Ethereum Classic may violate immutability, fungibility or
          the sanctity of the ledger, and transactions and ledger history are never to be
          reversed or modified.
        </li>
        <li>
          Forks and other protocol changes are permitted only to update or upgrade the
          technology Ethereum Classic runs on.
        </li>
        <li>
          Anyone may propose improvements, and anyone may use the platform to build
          applications, hold crowdsales or create autonomous organizations, for any purpose.
        </li>
      </ul>

      <h2>Why It Matters</h2>
      <p>
        A blockchain that can be controlled by a small group offers no advantage over a
        traditional database managed by a trusted institution. The entire purpose of
        running a distributed, replicated ledger across many independent nodes is
        to remove the need for trust in any single party.
      </p>
      <p>
        Every compromise on decentralization is a compromise on that purpose. Ethereum
        Classic treats decentralization as the prerequisite that makes every other feature
        meaningful, rather than one feature to trade against the rest.
      </p>
    </>
  )
}
