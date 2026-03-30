export default function SecurityBestPractices() {
  return (
    <>
      <p>
        Protecting your Ethereum Classic assets starts with understanding and applying fundamental security practices. Cryptocurrency gives you full control over your funds, but that responsibility means there is no customer support line to call if something goes wrong.
      </p>

      <h2>Seed Phrase Security</h2>
      <p>
        Your seed phrase (also called a recovery phrase or mnemonic) is the master key to all accounts derived from your wallet. Losing it means losing access permanently. Having it stolen means losing everything.
      </p>
      <ul>
        <li><strong>Never store your seed phrase digitally</strong> &mdash; no screenshots, no notes apps, no cloud storage, no email drafts</li>
        <li><strong>Write it on paper</strong> and store it in a secure, fireproof location</li>
        <li><strong>Consider metal backups</strong> &mdash; stamped or engraved steel plates survive fires and floods that destroy paper</li>
        <li><strong>Never type your seed phrase into a website</strong> &mdash; no legitimate service will ever ask for it</li>
      </ul>

      <h2>Hardware Wallets</h2>
      <p>
        A hardware wallet keeps your private keys on a dedicated device that never exposes them to your computer or the internet. This is the gold standard for securing significant amounts of ETC.
      </p>
      <p>
        Popular hardware wallets that support Ethereum Classic include Trezor and Ledger. Both allow you to manage ETC alongside other assets. When using a hardware wallet, every transaction requires physical confirmation on the device itself, preventing remote attackers from moving your funds.
      </p>

      <h2>Password and Account Security</h2>
      <p>
        If you use exchanges or web-based services alongside your self-custody wallet, basic account hygiene is essential:
      </p>
      <ul>
        <li><strong>Use a unique, strong password</strong> for every crypto-related account &mdash; a password manager makes this practical</li>
        <li><strong>Enable two-factor authentication (2FA)</strong> on every exchange and service, preferably with an authenticator app rather than SMS</li>
        <li><strong>Use a dedicated email address</strong> for crypto accounts to limit your exposure if another account is breached</li>
      </ul>

      <h2>Verify Before You Interact</h2>
      <p>
        Before sending ETC or interacting with a smart contract, always verify the address. Copy-paste carefully and double-check the first and last several characters. Malware exists that silently replaces copied addresses with an attacker&apos;s address.
      </p>
      <p>
        When interacting with dApps, verify the contract address on Blockscout at etc.blockscout.com. Cross-reference addresses from official project sources rather than trusting links in messages or social media.
      </p>

      <h2>Keep Software Updated</h2>
      <p>
        Outdated wallet software, browser extensions, and operating systems can contain known vulnerabilities. Keep your wallet apps, MetaMask extension, browser, and operating system updated to their latest stable versions.
      </p>

      <h2>The Basics Matter Most</h2>
      <p>
        Most cryptocurrency losses come from simple mistakes &mdash; reusing passwords, storing seed phrases digitally, or clicking phishing links &mdash; not from sophisticated hacking. Mastering these fundamentals protects you against the vast majority of real-world threats.
      </p>
    </>
  )
}
