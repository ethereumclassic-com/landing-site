export default function TypesOfWallets() {
  return (
    <>
      <p>
        Cryptocurrency wallets come in several forms, each with different tradeoffs between convenience and security. Understanding these options helps you choose the right wallet for your needs.
      </p>

      <h2>Hot Wallets vs Cold Wallets</h2>
      <p>
        The fundamental distinction is between &ldquo;hot&rdquo; and &ldquo;cold&rdquo; storage:
      </p>
      <ul>
        <li><strong>Hot wallets</strong> are connected to the internet, making them convenient for frequent transactions but more vulnerable to online threats</li>
        <li><strong>Cold wallets</strong> store your keys offline, providing maximum security at the cost of convenience</li>
      </ul>
      <p>
        Most users benefit from using both: a hot wallet for daily use and cold storage for larger holdings.
      </p>

      <h2>Browser Extension Wallets</h2>
      <p>
        Browser wallets like MetaMask install as extensions in your web browser. They&apos;re the primary way to interact with decentralized applications (dApps).
      </p>
      <h3>Advantages</h3>
      <ul>
        <li>Easy dApp integration—connect to DEXs, DeFi protocols, and NFT marketplaces</li>
        <li>Quick setup and intuitive interface</li>
        <li>Support for multiple networks including Ethereum Classic</li>
        <li>Free to use</li>
      </ul>
      <h3>Considerations</h3>
      <ul>
        <li>Connected to the internet (hot wallet)</li>
        <li>Security depends on your browser and computer</li>
        <li>Can be targets for phishing attacks</li>
      </ul>
      <h3>Popular Options</h3>
      <ul>
        <li><strong>MetaMask:</strong> Most widely used, supports ETC with custom network configuration</li>
        <li><strong>Brave Wallet:</strong> Built into the Brave browser</li>
      </ul>

      <h2>Mobile Wallets</h2>
      <p>
        Mobile wallets run on your smartphone, making them ideal for everyday transactions and payments.
      </p>
      <h3>Advantages</h3>
      <ul>
        <li>Always with you—convenient for in-person transactions</li>
        <li>Can scan QR codes for easy address entry</li>
        <li>Often support multiple cryptocurrencies</li>
        <li>Good balance of security and convenience</li>
      </ul>
      <h3>Considerations</h3>
      <ul>
        <li>Phone theft or loss is a risk (backup your seed phrase!)</li>
        <li>Limited dApp interaction compared to browser wallets</li>
        <li>Performance depends on phone security</li>
      </ul>
      <h3>Popular Options</h3>
      <ul>
        <li><strong>Trust Wallet:</strong> User-friendly with ETC support</li>
        <li><strong>Coinomi:</strong> Supports many cryptocurrencies</li>
        <li><strong>Exodus:</strong> Beautiful interface with built-in exchange</li>
      </ul>

      <h2>Hardware Wallets</h2>
      <p>
        Hardware wallets are dedicated physical devices that store your private keys offline. They&apos;re the gold standard for securing significant holdings.
      </p>
      <h3>Advantages</h3>
      <ul>
        <li>Private keys never leave the device</li>
        <li>Immune to computer malware and online attacks</li>
        <li>Physical button confirmation for transactions</li>
        <li>Can be used with browser wallets for dApp access</li>
      </ul>
      <h3>Considerations</h3>
      <ul>
        <li>Initial cost ($50-200+)</li>
        <li>Less convenient for frequent transactions</li>
        <li>Must protect the physical device and backup seed phrase</li>
      </ul>
      <h3>Popular Options</h3>
      <ul>
        <li><strong>Ledger:</strong> Ledger Nano S Plus and Nano X support ETC</li>
        <li><strong>Trezor:</strong> Model One and Model T with ETC support</li>
      </ul>

      <h2>Desktop Wallets</h2>
      <p>
        Desktop wallets are software applications installed on your computer. They offer a middle ground between browser extensions and hardware wallets.
      </p>
      <h3>Advantages</h3>
      <ul>
        <li>More features than browser wallets</li>
        <li>Local control over your wallet file</li>
        <li>Often support multiple accounts</li>
      </ul>
      <h3>Considerations</h3>
      <ul>
        <li>Security depends on your computer</li>
        <li>Must backup wallet files</li>
        <li>Limited dApp integration</li>
      </ul>

      <h2>Web Wallets</h2>
      <p>
        Web wallets run in your browser without installing an extension. They&apos;re convenient but require trusting the website.
      </p>
      <h3>Advantages</h3>
      <ul>
        <li>No installation required</li>
        <li>Access from any device with a browser</li>
        <li>Often beginner-friendly</li>
      </ul>
      <h3>Considerations</h3>
      <ul>
        <li>Must trust the website operator</li>
        <li>Phishing risk—always verify URLs</li>
        <li>Best for small amounts</li>
      </ul>
      <h3>Popular Options</h3>
      <ul>
        <li><strong>MyCrypto:</strong> Open-source interface for managing ETC</li>
        <li><strong>MyEtherWallet:</strong> Long-standing web wallet with ETC support</li>
      </ul>

      <h2>Custodial vs Non-Custodial</h2>
      <p>
        An important distinction beyond wallet type:
      </p>
      <ul>
        <li><strong>Non-custodial wallets:</strong> You control your private keys. If you lose them, no one can help recover your funds. All wallets discussed above are non-custodial.</li>
        <li><strong>Custodial wallets:</strong> A third party (like an exchange) holds your keys. More convenient but requires trusting that party.</li>
      </ul>
      <p>
        The crypto mantra &ldquo;not your keys, not your coins&rdquo; emphasizes the importance of non-custodial storage for significant holdings.
      </p>

      <h2>Choosing the Right Wallet</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Use Case</th>
              <th className="text-left">Recommended Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dApp interaction</td>
              <td>Browser wallet (MetaMask)</td>
            </tr>
            <tr>
              <td>Daily transactions</td>
              <td>Mobile wallet</td>
            </tr>
            <tr>
              <td>Long-term savings</td>
              <td>Hardware wallet</td>
            </tr>
            <tr>
              <td>Maximum security</td>
              <td>Hardware + multisig</td>
            </tr>
            <tr>
              <td>Beginners</td>
              <td>Mobile wallet to start</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Next Steps</h2>
      <p>
        Once you&apos;ve chosen a wallet type, learn how to properly secure it. Check out our guides on seed phrase management and wallet security best practices.
      </p>
    </>
  )
}
