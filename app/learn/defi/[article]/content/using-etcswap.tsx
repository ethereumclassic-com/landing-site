export default function UsingEtcswap() {
  return (
    <>
      <p>
        ETCswap is the primary decentralized exchange on Ethereum Classic, offering token swaps, liquidity provision, and a token launchpad. This guide walks through connecting your wallet and executing your first trade.
      </p>

      <h2>Step 1: Configure MetaMask for ETC</h2>
      <p>
        Before using ETCswap, your wallet needs the Ethereum Classic network. In MetaMask, add a custom network with these settings:
      </p>
      <ul>
        <li><strong>Network Name:</strong> Ethereum Classic</li>
        <li><strong>RPC URL:</strong> https://etc.rivet.link</li>
        <li><strong>Chain ID:</strong> 61</li>
        <li><strong>Currency Symbol:</strong> ETC</li>
        <li><strong>Block Explorer:</strong> https://etc.blockscout.com</li>
      </ul>
      <p>
        Once added, switch to the Ethereum Classic network in MetaMask. You&apos;ll need ETC in your wallet for gas fees and trading.
      </p>

      <h2>Step 2: Visit ETCswap</h2>
      <p>
        Navigate to <strong>etcswap.org</strong> in your browser. The interface is available as both V2 and V3 versions. V2 is simpler for beginners. V3 offers concentrated liquidity for experienced LPs.
      </p>

      <h2>Step 3: Connect Your Wallet</h2>
      <p>
        Click the &ldquo;Connect Wallet&rdquo; button and select MetaMask. Approve the connection request in the MetaMask popup. The interface will display your ETC balance and connected address.
      </p>

      <h2>Step 4: Swap Tokens</h2>
      <p>
        Select the token you want to sell (e.g., ETC) and the token you want to buy (e.g., USC). Enter the amount. The interface will display:
      </p>
      <ul>
        <li>The estimated output amount</li>
        <li>Price impact (how much the trade moves the pool price)</li>
        <li>Minimum received (accounting for slippage tolerance)</li>
        <li>Network fee estimate</li>
      </ul>

      <h2>Step 5: Set Slippage Tolerance</h2>
      <p>
        Slippage tolerance defines the maximum acceptable price change between when you submit the swap and when it executes. The default is usually 0.5%. In volatile markets or for low-liquidity tokens, you may need to increase this. For stablecoin swaps, you can decrease it.
      </p>
      <p>
        If your slippage is set too low, the transaction will revert (fail) but you&apos;ll still pay the gas fee. If set too high, you risk receiving a worse price from front-running.
      </p>

      <h2>Step 6: Review and Confirm</h2>
      <p>
        Click &ldquo;Swap&rdquo; to see the confirmation dialog with final details. If this is your first time swapping a particular token, you&apos;ll first need to approve ETCswap to spend that token. This is a one-time approval per token. After approval, confirm the swap in MetaMask.
      </p>

      <h2>ETCswap V2 vs V3</h2>

      <h3>V2</h3>
      <p>
        Simpler interface. Full-range liquidity provision requires equal value of both tokens. Best for beginners and passive LPs who don&apos;t want to manage positions actively.
      </p>

      <h3>V3</h3>
      <p>
        Concentrated liquidity allows LPs to focus capital within specific price ranges, earning higher fees relative to capital deployed. Better capital efficiency but requires active management to keep positions in range.
      </p>

      <h2>Providing Liquidity</h2>
      <p>
        To become a liquidity provider, navigate to the &ldquo;Pool&rdquo; section. Select the token pair, deposit the required tokens, and confirm. On V2, you deposit equal value of both tokens. On V3, you also choose a price range.
      </p>
      <p>
        LP positions earn a share of all trading fees in that pool. You can withdraw your liquidity at any time by redeeming your LP tokens (V2) or NFT position (V3).
      </p>

      <h2>ETCswap Launchpad</h2>
      <p>
        The Launchpad enables fair token launches using a bonding curve. New tokens start at a low price that increases as people buy. Once the bonding curve fills, the token &ldquo;graduates&rdquo; to a full V3 liquidity pool with the accumulated liquidity burned&mdash;meaning it can never be removed. This protects against rug pulls.
      </p>

      <h2>Tips for Safe Trading</h2>
      <ul>
        <li>Always verify you&apos;re on the correct URL (etcswap.org)</li>
        <li>Double-check token addresses before trading unfamiliar tokens</li>
        <li>Start with small amounts to familiarize yourself with the interface</li>
        <li>Monitor your LP positions regularly, especially on V3</li>
      </ul>
    </>
  )
}
