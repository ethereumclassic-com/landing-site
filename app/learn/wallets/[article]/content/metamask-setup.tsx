export default function MetaMaskSetup() {
  return (
    <>
      <p>
        MetaMask is the most popular browser wallet for interacting with Ethereum-compatible blockchains. This guide walks you through setting it up for Ethereum Classic.
      </p>

      <h2>Installing MetaMask</h2>
      <p>
        MetaMask is available as a browser extension for Chrome, Firefox, Brave, and Edge.
      </p>
      <ol>
        <li>Visit the official MetaMask website at metamask.io</li>
        <li>Click &ldquo;Download&rdquo; and select your browser</li>
        <li>Install the extension from your browser&apos;s official extension store</li>
        <li>Click the MetaMask icon to begin setup</li>
      </ol>
      <p>
        <strong>Important:</strong> Only download MetaMask from the official website or your browser&apos;s official extension store. Never install from third-party sources.
      </p>

      <h2>Creating a New Wallet</h2>
      <ol>
        <li>Click &ldquo;Create a new wallet&rdquo;</li>
        <li>Accept the terms and create a strong password</li>
        <li>MetaMask will show your 12-word seed phrase</li>
        <li>Write down your seed phrase on paper (never digitally)</li>
        <li>Verify your seed phrase by selecting words in order</li>
      </ol>

      <h3>Seed Phrase Warning</h3>
      <p>
        Your seed phrase is the master key to your wallet. Anyone with these words can access your funds. Keep it safe:
      </p>
      <ul>
        <li>Write it on paper, not digitally</li>
        <li>Store in a secure location</li>
        <li>Never share with anyone</li>
        <li>MetaMask will never ask for it</li>
      </ul>

      <h2>Adding Ethereum Classic Network</h2>
      <p>
        MetaMask connects to Ethereum by default. To use ETC, you need to add the network manually.
      </p>

      <h3>Method 1: Chainlist (Easiest)</h3>
      <ol>
        <li>Visit chainlist.org</li>
        <li>Search for &ldquo;Ethereum Classic&rdquo;</li>
        <li>Connect your MetaMask wallet</li>
        <li>Click &ldquo;Add to MetaMask&rdquo; for Ethereum Classic (Chain ID 61)</li>
        <li>Approve the network addition in MetaMask</li>
      </ol>

      <h3>Method 2: Manual Configuration</h3>
      <p>
        You can also add the network manually:
      </p>
      <ol>
        <li>Open MetaMask and click the network dropdown (top of window)</li>
        <li>Click &ldquo;Add network&rdquo;</li>
        <li>Click &ldquo;Add a network manually&rdquo;</li>
        <li>Enter the following details:</li>
      </ol>

      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-semibold">Network Name</td>
              <td>Ethereum Classic</td>
            </tr>
            <tr>
              <td className="font-semibold">New RPC URL</td>
              <td>https://etc.rivet.link</td>
            </tr>
            <tr>
              <td className="font-semibold">Chain ID</td>
              <td>61</td>
            </tr>
            <tr>
              <td className="font-semibold">Currency Symbol</td>
              <td>ETC</td>
            </tr>
            <tr>
              <td className="font-semibold">Block Explorer URL</td>
              <td>https://etc.blockscout.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ol start={5}>
        <li>Click &ldquo;Save&rdquo;</li>
      </ol>

      <h2>Switching Networks</h2>
      <p>
        To switch between Ethereum and Ethereum Classic:
      </p>
      <ol>
        <li>Click the network dropdown at the top of MetaMask</li>
        <li>Select &ldquo;Ethereum Classic&rdquo; from your networks list</li>
        <li>Your ETC balance will appear</li>
      </ol>
      <p>
        <strong>Note:</strong> Make sure you&apos;re on the correct network before sending transactions. ETC and ETH use the same address format but are separate networks.
      </p>

      <h2>Receiving ETC</h2>
      <ol>
        <li>Ensure MetaMask is set to Ethereum Classic network</li>
        <li>Click your account name to copy your address</li>
        <li>Share this address with the sender</li>
        <li>Your balance will update once the transaction confirms</li>
      </ol>
      <p>
        Your address is the same on both ETC and ETH networks, but the balances are network-specific.
      </p>

      <h2>Sending ETC</h2>
      <ol>
        <li>Ensure you&apos;re on the Ethereum Classic network</li>
        <li>Click &ldquo;Send&rdquo;</li>
        <li>Enter the recipient&apos;s address</li>
        <li>Enter the amount to send</li>
        <li>Review the transaction and gas fee</li>
        <li>Click &ldquo;Confirm&rdquo;</li>
      </ol>

      <h3>Before Confirming</h3>
      <ul>
        <li>Double-check the recipient address</li>
        <li>Verify you&apos;re on the ETC network (Chain ID 61)</li>
        <li>Review the gas fee</li>
        <li>For large amounts, send a small test transaction first</li>
      </ul>

      <h2>Connecting to dApps</h2>
      <p>
        MetaMask allows you to connect to decentralized applications on ETC:
      </p>
      <ol>
        <li>Visit an ETC dApp (like ETCswap)</li>
        <li>Click &ldquo;Connect Wallet&rdquo; on the dApp</li>
        <li>Select MetaMask</li>
        <li>Approve the connection in MetaMask</li>
        <li>Make sure you&apos;re on the ETC network</li>
      </ol>
      <p>
        The dApp may prompt you to switch networks if you&apos;re connected to the wrong one.
      </p>

      <h2>Adding ETC Tokens</h2>
      <p>
        To see ERC-20 tokens in your wallet:
      </p>
      <ol>
        <li>Click &ldquo;Import tokens&rdquo; at the bottom of your assets</li>
        <li>Enter the token contract address</li>
        <li>MetaMask will auto-fill the symbol and decimals</li>
        <li>Click &ldquo;Add custom token&rdquo;</li>
      </ol>

      <h3>Common ETC Tokens</h3>
      <ul>
        <li><strong>WETC:</strong> Wrapped ETC for DeFi</li>
        <li><strong>USC:</strong> Classic USD stablecoin</li>
      </ul>

      <h2>Security Tips</h2>
      <ul>
        <li>Lock your wallet when not in use</li>
        <li>Set a auto-lock timer in settings</li>
        <li>Only connect to trusted dApps</li>
        <li>Review all transaction requests before signing</li>
        <li>Revoke unused dApp connections periodically</li>
      </ul>

      <h2>Troubleshooting</h2>

      <h3>Transactions Stuck</h3>
      <p>
        If a transaction is pending for too long, you may need to speed it up or cancel it by sending a transaction with the same nonce and higher gas.
      </p>

      <h3>Wrong Network</h3>
      <p>
        If you sent ETC to your address but don&apos;t see it, check that MetaMask is connected to the Ethereum Classic network (Chain ID 61).
      </p>

      <h3>Balance Not Updating</h3>
      <p>
        Try refreshing or switching networks and switching back. Check the transaction on etc.blockscout.com to verify it confirmed.
      </p>

      <h2>Next Steps</h2>
      <p>
        With MetaMask configured for ETC, you can:
      </p>
      <ul>
        <li>Swap tokens on ETCswap</li>
        <li>Explore ETC dApps</li>
        <li>Connect to Classic OS</li>
        <li>Manage your DeFi positions</li>
      </ul>
    </>
  )
}
