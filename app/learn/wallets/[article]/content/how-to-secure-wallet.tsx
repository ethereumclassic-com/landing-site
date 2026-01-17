export default function HowToSecureWallet() {
  return (
    <>
      <p>
        Your cryptocurrency is only as secure as your wallet. This guide covers essential security practices to protect your ETC from theft, loss, and common attack vectors.
      </p>

      <h2>Understanding Your Seed Phrase</h2>
      <p>
        Your seed phrase (also called recovery phrase or mnemonic) is the master key to your wallet. It&apos;s typically 12 or 24 words that can regenerate all your private keys.
      </p>
      <ul>
        <li><strong>Never share it with anyone</strong>—legitimate services will never ask for it</li>
        <li><strong>Never store it digitally</strong>—not in photos, notes apps, cloud storage, or email</li>
        <li><strong>Write it down on paper</strong> and store securely offline</li>
        <li><strong>Consider metal backup</strong> for fire/water resistance</li>
      </ul>

      <h2>Secure Seed Phrase Storage</h2>

      <h3>Paper Backup</h3>
      <p>
        The simplest approach is writing your seed phrase on paper:
      </p>
      <ul>
        <li>Use pen, not pencil (won&apos;t smear or fade as easily)</li>
        <li>Make 2-3 copies stored in different secure locations</li>
        <li>Consider a fireproof safe or safety deposit box</li>
        <li>Never label it as &ldquo;crypto seed phrase&rdquo; or similar</li>
      </ul>

      <h3>Metal Backup</h3>
      <p>
        For better durability, consider metal backup solutions:
      </p>
      <ul>
        <li>Steel plates that you stamp or engrave words onto</li>
        <li>Survives fire, flood, and physical damage</li>
        <li>Products like Cryptosteel, Billfodl, or Blockplate</li>
      </ul>

      <h3>What NOT to Do</h3>
      <ul>
        <li>Don&apos;t take photos of your seed phrase</li>
        <li>Don&apos;t save it in a password manager</li>
        <li>Don&apos;t email it to yourself</li>
        <li>Don&apos;t store it in cloud services</li>
        <li>Don&apos;t keep only one copy</li>
      </ul>

      <h2>Protecting Against Phishing</h2>
      <p>
        Phishing is the most common way people lose crypto. Attackers create fake websites and messages to steal your seed phrase or trick you into signing malicious transactions.
      </p>

      <h3>Red Flags</h3>
      <ul>
        <li>Any website asking for your seed phrase (legitimate wallets never ask)</li>
        <li>Unexpected DMs about airdrops, giveaways, or support</li>
        <li>URLs with typos or unusual domains</li>
        <li>Urgent messages pressuring immediate action</li>
        <li>&ldquo;Sync your wallet&rdquo; or &ldquo;validate your wallet&rdquo; prompts</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>Bookmark legitimate sites and only use bookmarks</li>
        <li>Double-check URLs before connecting your wallet</li>
        <li>Be suspicious of any unsolicited contact</li>
        <li>Verify information through official channels</li>
        <li>If something seems too good to be true, it is</li>
      </ul>

      <h2>Transaction Security</h2>
      <p>
        Every transaction you sign is irreversible. Take precautions:
      </p>

      <h3>Before Signing</h3>
      <ul>
        <li>Verify the recipient address (send small test amounts first)</li>
        <li>Check you&apos;re on the correct network (ETC Chain ID: 61)</li>
        <li>Review what you&apos;re approving—unlimited token approvals are risky</li>
        <li>Understand the transaction before confirming</li>
      </ul>

      <h3>Address Verification</h3>
      <ul>
        <li>Always double-check the first and last characters</li>
        <li>Use address book features when available</li>
        <li>Copy addresses directly—never type manually</li>
        <li>Watch for clipboard-hijacking malware</li>
      </ul>

      <h2>Device Security</h2>
      <p>
        Your wallet is only as secure as the device running it:
      </p>

      <h3>Computer Security</h3>
      <ul>
        <li>Keep operating system and software updated</li>
        <li>Use reputable antivirus software</li>
        <li>Avoid downloading software from untrusted sources</li>
        <li>Consider a dedicated device for crypto</li>
      </ul>

      <h3>Browser Security</h3>
      <ul>
        <li>Only install wallet extensions from official sources</li>
        <li>Remove unused browser extensions</li>
        <li>Be cautious with sites requesting wallet connections</li>
        <li>Lock your wallet when not in use</li>
      </ul>

      <h3>Mobile Security</h3>
      <ul>
        <li>Use device PIN/biometric lock</li>
        <li>Keep your phone&apos;s OS updated</li>
        <li>Download wallet apps only from official app stores</li>
        <li>Enable remote wipe capability</li>
      </ul>

      <h2>Using Hardware Wallets</h2>
      <p>
        Hardware wallets provide the strongest security for significant holdings:
      </p>
      <ul>
        <li>Keys never leave the device</li>
        <li>Transactions require physical confirmation</li>
        <li>Immune to computer malware</li>
        <li>Can be combined with software wallets for dApp access</li>
      </ul>
      <p>
        Even with a hardware wallet, your seed phrase backup remains critical. The device can be replaced; the seed phrase cannot.
      </p>

      <h2>Token Approvals</h2>
      <p>
        When interacting with DeFi, you often need to approve tokens for spending. Be careful:
      </p>
      <ul>
        <li>Approve only what&apos;s needed for the transaction</li>
        <li>Revoke unused approvals periodically</li>
        <li>Unlimited approvals save gas but increase risk</li>
        <li>A compromised contract can drain approved tokens</li>
      </ul>

      <h2>Security Checklist</h2>
      <ul>
        <li>Seed phrase written down and stored securely offline</li>
        <li>Multiple backup copies in different locations</li>
        <li>No digital copies of seed phrase anywhere</li>
        <li>Wallet password is strong and unique</li>
        <li>Device software is up to date</li>
        <li>Only using official wallet software</li>
        <li>Verified URLs before connecting wallet</li>
        <li>Hardware wallet for larger holdings</li>
      </ul>

      <h2>What to Do If Compromised</h2>
      <p>
        If you suspect your wallet is compromised:
      </p>
      <ol>
        <li>Stop using the compromised wallet immediately</li>
        <li>Create a new wallet with a new seed phrase on a clean device</li>
        <li>Transfer remaining assets to the new wallet</li>
        <li>Revoke all token approvals from the old wallet</li>
        <li>Investigate how the compromise occurred</li>
      </ol>
    </>
  )
}
