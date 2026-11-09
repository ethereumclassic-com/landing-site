export default function CodeIsLaw() {
  return (
    <>
      <p>
        &ldquo;Code is law&rdquo; is the principle that smart contracts should execute
        exactly as written, without external override. On Ethereum Classic it is an operational commitment: the network does not intervene in
        contract execution, whatever the outcome.
      </p>

      <h2>What the Principle Means</h2>
      <p>
        When a user deploys a smart contract to a blockchain, they publish a set of rules
        that the network enforces automatically. Every node executes every transaction against the contract&apos;s bytecode. The result is deterministic: given the same
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
        A blockchain&apos;s value proposition rests on a specific guarantee: once a transaction is confirmed and buried under enough subsequent blocks, it stays as
        recorded, and no authority can order it reversed or altered. This guarantee is what distinguishes a blockchain from a conventional
        database.
      </p>
      <p>
        If a blockchain&apos;s history can be rewritten by social consensus, even with good
        intentions, then the guarantee is conditional. Users must trust
        that the social layer will not intervene in their transactions. At that point, the
        system offers no meaningful advantage over a traditional institution that
        processes transactions subject to human judgment.
      </p>
      <p>
        Immutability removes the need to trust a governing body. Users do not need to weigh
        anyone&apos;s intentions, competence or politics; they only need to read the
        contract&apos;s code.
      </p>

      <h2>The Crypto-Decentralist Position</h2>
      <p>
        <a href="https://ethereumclassic.org/blog/2016-07-11-crypto-decentralist-manifesto/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">A Crypto-Decentralist Manifesto</a>,
        written by Bit Novosti in July 2016 and hosted on ethereumclassic.org, argues that
        blockchains can scale cooperation to a global level only if they keep three
        characteristics:
      </p>
      <ul>
        <li>
          <strong>Openness:</strong> The rules are open for anyone to see, and anyone can
          use the network, run their own client or contribute to its security without asking
          permission.
        </li>
        <li>
          <strong>Neutrality:</strong> The rules are exactly the same for every participant,
          whoever they are and whatever they intend.
        </li>
        <li>
          <strong>Immutability:</strong> The blockchain preserves one version of history,
          which no political or business interest can change.
        </li>
      </ul>
      <p>
        The manifesto calls decentralization the feature everything else depends on: any part
        of a blockchain that comes under centralized control becomes a way to violate one or
        more of the three.
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
          <strong>No privileged accounts:</strong>{' '}No address has special status. There is
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
        Decentralized finance, supply chain verification, identity systems and every other
        application that relies on trustless execution need a predictable environment.
        Developers need assurance that the rules their contracts enforce today will still
        be enforced tomorrow.
      </p>
      <p>
        Users need assurance that depositing assets into a contract means the
        contract&apos;s rules, and only those rules, govern what happens
        to those assets. If a third party can override contract execution, the
        &ldquo;decentralized&rdquo; label is misleading.
      </p>

      <h2>Addressing the Counterargument</h2>
      <p>
        The most common objection is: &ldquo;What about bugs? What if a contract has a
        vulnerability?&rdquo;
      </p>
      <p>
        Ethereum Classic&apos;s answer is that bugs are a matter of contract quality rather
        than chain policy. The response to a buggy contract is better auditing, formal
        verification, insurance and careful development, not a chain-level rollback. Once a blockchain establishes that history can be rewritten
        to fix mistakes, there is no principled boundary for when that power should or
        should not be used.
      </p>
      <p>
        Ethereum Classic&apos;s position is that keeping immutability, contract bugs and all,
        costs less than abandoning it.
      </p>
    </>
  )
}
