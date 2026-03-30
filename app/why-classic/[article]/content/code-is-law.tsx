export default function CodeIsLaw() {
  return (
    <>
      <p>
        &ldquo;Code is law&rdquo; is the principle that smart contracts should execute
        exactly as written, without external override. On Ethereum Classic, this is not a
        slogan. It is an operational commitment: the network will not intervene in
        contract execution, regardless of the outcome.
      </p>

      <h2>What the Principle Means</h2>
      <p>
        When a user deploys a smart contract to a blockchain, they publish a set of rules
        that the network enforces automatically. Every node validates every transaction
        against the contract&apos;s bytecode. The result is deterministic: given the same
        input and state, every node produces the same output.
      </p>
      <p>
        &ldquo;Code is law&rdquo; means that this deterministic execution is the final
        authority. No committee, foundation, or majority vote can alter the result after
        the fact. The contract&apos;s code defines what is permitted, and the blockchain
        enforces those rules without exception.
      </p>

      <h2>Why Immutability Matters</h2>
      <p>
        A blockchain&apos;s value proposition rests on a specific guarantee: once a
        transaction is confirmed and buried under subsequent blocks, it cannot be reversed
        or altered. This guarantee is what distinguishes a blockchain from a conventional
        database.
      </p>
      <p>
        If a blockchain&apos;s history can be rewritten by social consensus &mdash; even
        with good intentions &mdash; then the guarantee is conditional. Users must trust
        that the social layer will not intervene in their transactions. At that point, the
        system offers no meaningful advantage over a traditional institution that
        processes transactions subject to human judgment.
      </p>
      <p>
        Immutability removes the need for trust. Users do not need to evaluate the
        intentions, competence, or politics of any governing body. They only need to read
        the contract&apos;s code.
      </p>

      <h2>The Crypto-Decentralist Position</h2>
      <p>
        The Crypto-Decentralist Manifesto, published by the Ethereum Classic community,
        articulates the core argument: blockchains are useful specifically because they
        are immutable and censorship-resistant. These properties are not incidental
        features that can be traded away when convenient. They are the reason the
        technology exists.
      </p>
      <p>
        The manifesto identifies three properties that a blockchain must maintain to be
        genuinely decentralized:
      </p>
      <ul>
        <li>
          <strong>Immutability:</strong> No entity can alter confirmed transactions.
        </li>
        <li>
          <strong>Fungibility:</strong> All units of the native currency are
          interchangeable, with no blacklisting or differential treatment.
        </li>
        <li>
          <strong>Neutrality:</strong> The protocol does not discriminate between users,
          applications, or transactions.
        </li>
      </ul>
      <p>
        If any of these properties can be overridden by social consensus, the blockchain
        is not decentralized in any meaningful sense. It is a database with extra steps.
      </p>

      <h2>Practical Implications</h2>
      <p>
        On Ethereum Classic, &ldquo;code is law&rdquo; has concrete operational
        consequences:
      </p>
      <ul>
        <li>
          <strong>No bailouts:</strong> If a contract is exploited, the chain does not
          roll back to return funds. The exploit is part of the permanent record.
        </li>
        <li>
          <strong>No rollbacks:</strong> Confirmed transactions are final, regardless of
          their size or the parties involved.
        </li>
        <li>
          <strong>No privileged accounts:</strong> No address has special status. There is
          no admin key that can freeze assets or modify contract state outside of the
          contract&apos;s own rules.
        </li>
        <li>
          <strong>No irregular state changes:</strong> Protocol upgrades modify the rules
          going forward. They do not retroactively alter past state.
        </li>
      </ul>

      <h2>Why This Matters for Applications</h2>
      <p>
        Decentralized finance, supply chain verification, identity systems, and any
        application that relies on trustless execution needs a predictable environment.
        Developers need assurance that the rules their contracts enforce today will still
        be enforced tomorrow.
      </p>
      <p>
        Users need assurance that depositing assets into a contract means the
        contract&apos;s rules &mdash; and only those rules &mdash; govern what happens
        to those assets. If a third party can override contract execution, the
        &ldquo;decentralized&rdquo; label is misleading.
      </p>

      <h2>Addressing the Counterargument</h2>
      <p>
        The most common objection is: &ldquo;What about bugs? What if a contract has a
        vulnerability?&rdquo;
      </p>
      <p>
        The answer is that bugs are a problem of contract quality, not a problem of chain
        policy. The correct response to buggy contracts is better auditing, formal
        verification, insurance mechanisms, and careful development practices &mdash; not
        chain-level rollbacks. Once a blockchain establishes that history can be rewritten
        to fix mistakes, there is no principled boundary for when that power should or
        should not be used.
      </p>
      <p>
        Ethereum Classic&apos;s position is that the cost of maintaining immutability
        &mdash; including the cost of contract bugs &mdash; is lower than the cost of
        abandoning it.
      </p>
    </>
  )
}
