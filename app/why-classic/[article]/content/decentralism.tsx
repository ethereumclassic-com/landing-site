export default function Decentralism() {
  return (
    <>
      <p>
        Decentralization is not a marketing term. It is a measurable property of a
        network: the degree to which no single entity can control, censor, or alter the
        system&apos;s operation. Ethereum Classic treats decentralization as a design
        constraint that informs every protocol decision.
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
        These are not aspirational goals. They are testable properties. If a network
        fails any of these conditions, it offers weaker guarantees than a network that
        satisfies all three.
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
        This does not mean there is no coordination. It means coordination happens
        through a process that requires broad consensus rather than executive authority.
      </p>

      <h2>The ECIP Process</h2>
      <p>
        Protocol changes on Ethereum Classic follow the Ethereum Classic Improvement
        Proposal (ECIP) process. Anyone can submit a proposal. Proposals are reviewed
        publicly, debated openly, and adopted only when there is rough consensus among
        node operators, miners, developers, and the broader community.
      </p>
      <p>
        The ECIP process is deliberately slow and conservative. Speed of development is
        not a priority. Stability and backward compatibility are. A protocol change that
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
        bug in that client affects the entire network. Ethereum Classic is supported by
        multiple independent client implementations:
      </p>
      <ul>
        <li>
          <strong>Core-Geth:</strong> A Go-based client derived from go-ethereum,
          maintained by independent developers.
        </li>
        <li>
          <strong>Besu:</strong> A Java-based client originally developed by Hyperledger,
          with ETC support maintained independently.
        </li>
        <li>
          <strong>Fukuii:</strong> A Scala-based client built specifically for Ethereum
          Classic, providing implementation diversity outside the Go and Java ecosystems.
        </li>
      </ul>
      <p>
        Client diversity means that a critical bug in one implementation does not
        compromise the entire network. Nodes running unaffected clients continue to
        produce and validate blocks normally.
      </p>

      <h2>Mining Decentralization</h2>
      <p>
        Ethereum Classic uses proof of work, which means block production is open to
        anyone with the appropriate hardware. There is no validator set, no minimum stake
        requirement, and no delegation mechanism that concentrates block production rights
        among a small group.
      </p>
      <p>
        Miners compete to find valid blocks by expending computational resources. This
        competition is permissionless: new miners can join at any time without registering
        with any authority. The ETCHash algorithm is designed to remain accessible to GPU
        miners, preventing the concentration of mining power in specialized ASIC hardware.
      </p>

      <h2>The Declaration of Independence</h2>
      <p>
        On August 13, 2016, the Ethereum Classic community published a Declaration of
        Independence. The document articulated the community&apos;s decision to maintain
        the original, unforked Ethereum blockchain and to operate independently of the
        Ethereum Foundation&apos;s governance model.
      </p>
      <p>
        The declaration established several principles that continue to guide the
        network:
      </p>
      <ul>
        <li>
          The blockchain&apos;s transaction history is inviolable and cannot be altered by
          any party.
        </li>
        <li>
          The protocol serves all participants equally, without privileged access or
          differential treatment.
        </li>
        <li>
          Development governance is distributed and requires broad consensus for changes.
        </li>
      </ul>

      <h2>Why It Matters</h2>
      <p>
        A blockchain that can be controlled by a small group offers no advantage over a
        traditional database managed by a trusted institution. The entire purpose of
        running a distributed, replicated ledger across thousands of independent nodes is
        to remove the need for trust in any single party.
      </p>
      <p>
        Every compromise on decentralization is a compromise on the fundamental value
        proposition. Ethereum Classic&apos;s position is that decentralization is not a
        feature to be optimized alongside other features. It is the prerequisite that
        makes all other features meaningful.
      </p>
    </>
  )
}
