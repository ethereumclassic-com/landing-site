export default function AvoidingScams() {
  return (
    <>
      <p>
        Cryptocurrency scams cost users billions every year. Because blockchain transactions are irreversible, there is no way to recover funds once they are sent to a scammer. Learning to recognize common attack patterns is your strongest defense.
      </p>

      <h2>Phishing Attacks</h2>
      <p>
        Phishing is the most common vector for stealing crypto. Attackers create convincing replicas of legitimate sites and trick users into entering their seed phrases or private keys.
      </p>
      <ul>
        <li><strong>Fake MetaMask popups</strong> &mdash; browser extensions or injected overlays that mimic MetaMask&apos;s interface and prompt you to &ldquo;reconnect&rdquo; or &ldquo;verify&rdquo; your wallet by entering your seed phrase</li>
        <li><strong>Typosquatted domains</strong> &mdash; sites with nearly identical URLs (e.g., metamask.io vs. rnetamask.io or metam4sk.io) designed to capture credentials</li>
        <li><strong>Fake dApps</strong> &mdash; cloned interfaces of popular DeFi protocols that drain your wallet when you approve a transaction</li>
      </ul>
      <p>
        Always bookmark the official URLs of services you use regularly and navigate via bookmarks rather than search results or links.
      </p>

      <h2>Social Engineering</h2>
      <p>
        Scammers exploit trust and urgency in social channels:
      </p>
      <ul>
        <li><strong>Discord and Telegram DMs</strong> &mdash; unsolicited messages offering &ldquo;help&rdquo; with wallet issues, often impersonating moderators or support staff. Legitimate team members will never DM you first.</li>
        <li><strong>Impersonation accounts</strong> &mdash; social media profiles mimicking project founders or developers, sometimes with verified-looking badges. Always verify through official channels.</li>
        <li><strong>Fake airdrops and giveaways</strong> &mdash; &ldquo;Send 1 ETC, receive 10 back&rdquo; promotions are always scams. No legitimate project operates this way.</li>
      </ul>

      <h2>Rug Pulls and Exit Scams</h2>
      <p>
        A rug pull occurs when a project&apos;s developers drain the liquidity pool or abandon the project after attracting investment. Warning signs include:
      </p>
      <ul>
        <li>Anonymous teams with no verifiable track record</li>
        <li>Promises of unrealistically high returns (&ldquo;1,000% APY guaranteed&rdquo;)</li>
        <li>Locked or non-existent source code</li>
        <li>Aggressive marketing pressure to &ldquo;buy now before it&apos;s too late&rdquo;</li>
        <li>No audit from a recognized security firm</li>
      </ul>

      <h2>How to Verify</h2>
      <p>
        Before interacting with any project or contract on Ethereum Classic, take these steps:
      </p>
      <ul>
        <li><strong>Check the contract on Blockscout</strong> at etc.blockscout.com &mdash; look for verified source code and transaction history</li>
        <li><strong>Cross-reference URLs</strong> from multiple official sources (project GitHub, official Twitter, documentation sites)</li>
        <li><strong>Never click links from DMs</strong> &mdash; navigate to sites manually or through bookmarks</li>
        <li><strong>Search for community reviews</strong> &mdash; check whether others have reported issues</li>
        <li><strong>Start small</strong> &mdash; test with a minimal amount before committing significant funds</li>
      </ul>

      <h2>When in Doubt</h2>
      <p>
        If something feels rushed, too good to be true, or pressures you to act immediately, stop. Legitimate opportunities do not disappear in minutes. Take the time to verify independently, ask in community channels, and never let urgency override caution.
      </p>
    </>
  )
}
