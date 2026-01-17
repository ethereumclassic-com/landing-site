export default function BackupRecovery() {
  return (
    <>
      <p>
        Backing up your wallet properly is essential for cryptocurrency security. If you lose access to your device, a proper backup is the only way to recover your funds.
      </p>

      <h2>What You Need to Backup</h2>
      <p>
        The most critical piece of information is your <strong>seed phrase</strong> (also called recovery phrase or mnemonic). This is typically 12 or 24 words that can regenerate your entire wallet, including all accounts and private keys.
      </p>
      <p>
        With your seed phrase, you can:
      </p>
      <ul>
        <li>Restore your wallet on any compatible app or device</li>
        <li>Recover all accounts derived from that seed</li>
        <li>Access your funds even if you lose your device</li>
      </ul>

      <h2>How to Backup Your Seed Phrase</h2>

      <h3>Finding Your Seed Phrase</h3>
      <p>
        Your wallet should have shown you a seed phrase when you first created it. If you need to view it again:
      </p>
      <ul>
        <li><strong>MetaMask:</strong> Settings → Security & Privacy → Reveal Secret Recovery Phrase</li>
        <li><strong>Trust Wallet:</strong> Settings → Wallets → Info → Show Recovery Phrase</li>
        <li><strong>Hardware wallets:</strong> You should have recorded this during initial setup</li>
      </ul>

      <h3>Recording Your Backup</h3>
      <ol>
        <li>Write down each word in the exact order shown</li>
        <li>Use pen (not pencil) on durable paper</li>
        <li>Double-check each word and its spelling</li>
        <li>Verify by reading back through the list</li>
        <li>Store in a secure, private location</li>
      </ol>

      <h3>Multiple Copies</h3>
      <p>
        Create 2-3 copies of your seed phrase backup:
      </p>
      <ul>
        <li>One at home in a secure location</li>
        <li>One in a different physical location (safe deposit box, trusted family member)</li>
        <li>Consider a metal backup for fire/water protection</li>
      </ul>

      <h2>Backup Storage Options</h2>

      <h3>Paper Backup</h3>
      <p>
        Simple and effective for most users:
      </p>
      <ul>
        <li>Use acid-free paper for longevity</li>
        <li>Consider laminating for water protection</li>
        <li>Store in a fireproof safe or container</li>
        <li>Don&apos;t label it obviously (no &ldquo;crypto seed phrase&rdquo;)</li>
      </ul>

      <h3>Metal Backup</h3>
      <p>
        For maximum durability:
      </p>
      <ul>
        <li>Steel plates resistant to fire (up to 1500°C)</li>
        <li>Waterproof and corrosion resistant</li>
        <li>Products like Cryptosteel, Billfodl, Blockplate</li>
        <li>Worth the investment for significant holdings</li>
      </ul>

      <h3>What NOT to Do</h3>
      <ul>
        <li><strong>Never photograph</strong> your seed phrase</li>
        <li><strong>Never type</strong> it into any computer, phone, or website</li>
        <li><strong>Never store</strong> in email, cloud storage, or password managers</li>
        <li><strong>Never share</strong> with anyone</li>
        <li><strong>Never keep</strong> only one copy</li>
      </ul>

      <h2>Recovering Your Wallet</h2>
      <p>
        If you need to restore your wallet (new device, lost access, etc.):
      </p>

      <h3>On MetaMask</h3>
      <ol>
        <li>Install MetaMask on your new device</li>
        <li>Select &ldquo;Import using Secret Recovery Phrase&rdquo;</li>
        <li>Enter your 12 or 24 words in order</li>
        <li>Create a new password</li>
        <li>Your accounts and balances will restore</li>
      </ol>

      <h3>On Mobile Wallets</h3>
      <ol>
        <li>Install the wallet app</li>
        <li>Choose &ldquo;Import&rdquo; or &ldquo;Restore wallet&rdquo;</li>
        <li>Enter your seed phrase</li>
        <li>Set up security (PIN, biometrics)</li>
      </ol>

      <h3>On Hardware Wallets</h3>
      <ol>
        <li>Initialize the device as a new or recovered wallet</li>
        <li>Select recovery/restore option</li>
        <li>Enter words using the device&apos;s interface</li>
        <li>Set a new PIN</li>
      </ol>

      <h2>After Recovery</h2>
      <p>
        Once restored, verify everything is correct:
      </p>
      <ul>
        <li>Check that your balance appears</li>
        <li>Verify your address matches your records</li>
        <li>Add any custom networks (like ETC) that you used before</li>
        <li>Re-import any custom tokens</li>
      </ul>

      <h2>Derivation Paths</h2>
      <p>
        The same seed phrase can generate different addresses depending on the &ldquo;derivation path&rdquo; used. Most wallets use standard paths, but if your accounts don&apos;t appear after recovery:
      </p>
      <ul>
        <li>Check if the wallet uses a non-standard path</li>
        <li>Some wallets let you specify the derivation path manually</li>
        <li>ETC typically uses the same path as ETH: m/44&apos;/60&apos;/0&apos;/0</li>
      </ul>

      <h2>Testing Your Backup</h2>
      <p>
        It&apos;s wise to verify your backup works before you need it:
      </p>
      <ol>
        <li>Install a wallet app on a different device or browser</li>
        <li>Recover using your seed phrase</li>
        <li>Verify your accounts and balances appear</li>
        <li>Uninstall the test wallet when done</li>
      </ol>
      <p>
        This ensures your backup is accurate and you know the recovery process.
      </p>

      <h2>Legacy Wallet Files</h2>
      <p>
        Some older wallets used keystore files (JSON files with encrypted private keys). If you have these:
      </p>
      <ul>
        <li>Back up the file itself</li>
        <li>Remember or store the password separately</li>
        <li>Consider migrating to a seed-phrase-based wallet</li>
      </ul>

      <h2>Backup Checklist</h2>
      <ul>
        <li>Seed phrase written on paper</li>
        <li>Words verified for accuracy</li>
        <li>Multiple copies in different locations</li>
        <li>No digital copies anywhere</li>
        <li>Storage locations are secure and private</li>
        <li>Backup tested with recovery</li>
        <li>Consider metal backup for significant holdings</li>
      </ul>

      <h2>Summary</h2>
      <p>
        Your seed phrase is your wallet. Protect it as you would protect the assets it secures. With a proper backup, you can always recover your funds regardless of what happens to your devices.
      </p>
    </>
  )
}
