export default function PrivateKeyManagement() {
  return (
    <>
      <p>
        In cryptocurrency, private keys are the mechanism that proves ownership and authorizes transactions. Understanding the different forms they take and how to store them securely is the foundation of protecting your Ethereum Classic assets.
      </p>

      <h2>What Is a Private Key?</h2>
      <p>
        A private key is a 256-bit number that acts as the cryptographic proof of ownership for a blockchain address. Anyone who possesses your private key can sign transactions and move your funds. Unlike a bank account, there is no institution that can reverse unauthorized transfers or reset access.
      </p>

      <h2>Types of Key Representations</h2>

      <h3>Seed Phrase (Mnemonic)</h3>
      <p>
        A seed phrase is a human-readable representation of your master key, typically 12 or 24 words following the BIP-39 standard. A single seed phrase can derive an unlimited number of private keys and addresses. This is what most modern wallets use during initial setup.
      </p>

      <h3>Raw Private Key</h3>
      <p>
        A hexadecimal string representing a single account&apos;s private key. Unlike a seed phrase, a raw private key controls exactly one address. Some older tools and services export keys in this format.
      </p>

      <h3>Keystore File</h3>
      <p>
        A JSON file that contains an encrypted version of your private key, protected by a password you choose. Keystore files provide an additional layer of protection since an attacker needs both the file and the password. However, a weak password can be brute-forced.
      </p>

      <h2>Storage Options</h2>

      <h3>Hardware Wallets</h3>
      <p>
        Dedicated devices (Trezor, Ledger) that generate and store keys in tamper-resistant hardware. Private keys never leave the device. This is the recommended option for most users holding significant value.
      </p>

      <h3>Paper Wallets</h3>
      <p>
        A physical printout or handwritten copy of your private key or seed phrase. Paper wallets are immune to digital attacks but vulnerable to physical damage, loss, and theft. Use acid-free paper and consider lamination.
      </p>

      <h3>Encrypted USB or Offline Storage</h3>
      <p>
        An encrypted USB drive kept offline can store keystore files or encrypted seed phrase backups. Use full-disk encryption and store the drive in a secure location. Keep the encryption password separate from the drive.
      </p>

      <h2>The 3-2-1 Backup Strategy</h2>
      <p>
        Reliable backup follows the 3-2-1 rule:
      </p>
      <ul>
        <li><strong>3 copies</strong> of your seed phrase or key material</li>
        <li><strong>2 different media types</strong> (e.g., paper plus stamped metal, or paper plus encrypted USB)</li>
        <li><strong>1 copy offsite</strong> (e.g., a bank safe deposit box or a trusted family member&apos;s secure location)</li>
      </ul>
      <p>
        This protects against single points of failure: a house fire destroys paper at home, but not the offsite copy. A corrupted USB is covered by the paper backup.
      </p>

      <h2>ETC Derivation Path</h2>
      <p>
        Ethereum Classic uses the derivation path <strong>m/44&apos;/61&apos;/0&apos;/0</strong> (BIP-44, coin type 61). When importing or recovering an ETC wallet from a seed phrase, ensure your wallet software uses this path. Using the wrong derivation path will generate different addresses, making it appear as though your funds are missing even though they are recoverable with the correct path.
      </p>

      <h2>Not Your Keys, Not Your Coins</h2>
      <p>
        When you hold ETC on an exchange, the exchange controls the private keys. If the exchange is hacked, freezes withdrawals, or shuts down, you may lose access to your funds. Self-custody through proper key management gives you sovereign control over your assets &mdash; and the full responsibility that comes with it.
      </p>
    </>
  )
}
