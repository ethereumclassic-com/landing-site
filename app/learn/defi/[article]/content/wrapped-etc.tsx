import { ETCswapLink } from '@/app/components/ui'

export default function WrappedEtc() {
  return (
    <>
      <p>
        Wrapped ETC (WETC) is an ERC-20 token that represents native ETC on a 1:1 basis. It exists because native ETC and ERC-20 tokens follow different technical standards, and DeFi protocols need a common interface to work with all assets uniformly.
      </p>

      <h2>Why WETC Exists</h2>
      <p>
        Native ETC is the base currency of the Ethereum Classic blockchain. It&apos;s used to pay gas fees and transfer value. However, native ETC predates the ERC-20 token standard and doesn&apos;t conform to it. Smart contracts that work with ERC-20 tokens&mdash;including DEXs, liquidity pools, and lending protocols&mdash;can&apos;t interact with native ETC directly.
      </p>
      <p>
        WETC solves this by wrapping native ETC in an ERC-20 contract. When you wrap ETC, you deposit native ETC into the WETC contract and receive an equal amount of WETC tokens. These tokens follow the ERC-20 standard, making them compatible with any DeFi protocol.
      </p>

      <h2>How Wrapping Works</h2>
      <p>
        The wrapping process is straightforward:
      </p>
      <ul>
        <li><strong>Wrap:</strong> Send native ETC to the WETC contract. You receive the same amount of WETC tokens in your wallet.</li>
        <li><strong>Unwrap:</strong> Send WETC tokens back to the contract. You receive native ETC in return.</li>
      </ul>
      <p>
        The exchange is always 1:1. There is no fee beyond the gas cost of the transaction. The WETC contract simply holds native ETC as backing and issues or burns WETC tokens accordingly.
      </p>

      <h2>WETC in DeFi</h2>
      <p>
        WETC is essential for participating in many DeFi activities on Ethereum Classic:
      </p>
      <ul>
        <li><strong>Liquidity pools:</strong> <ETCswapLink /> pools that include ETC actually use WETC behind the scenes. When you provide ETC to a pool, the interface wraps it automatically.</li>
        <li><strong>Token approvals:</strong> ERC-20 tokens support the &ldquo;approve&rdquo; pattern, allowing smart contracts to spend tokens on your behalf. Native ETC lacks this mechanism. WETC enables you to pre-approve exact amounts for contracts to use.</li>
        <li><strong>Composability:</strong> Since WETC follows the same standard as every other ERC-20 token, it plugs into any protocol that supports the standard without custom integration.</li>
      </ul>

      <h2>Wrapping and Unwrapping on <ETCswapLink /></h2>
      <p>
        <ETCswapLink /> handles wrapping automatically in most cases. When you swap ETC for another token, the interface wraps your ETC into WETC behind the scenes before executing the swap. You don&apos;t need to wrap manually for standard swaps.
      </p>
      <p>
        If you need WETC explicitly&mdash;for example, to interact with a contract that requires it&mdash;you can wrap ETC directly through the WETC contract or use the <ETCswapLink /> interface to swap ETC for WETC. The reverse works the same way.
      </p>

      <h2>Is WETC Safe?</h2>
      <p>
        The WETC contract is one of the simplest and most battle-tested smart contracts in the ecosystem. The same wrapping pattern is used across every EVM chain (WETH on Ethereum, WBNB on BSC, etc.). The contract does exactly two things: accept native currency and issue tokens, or accept tokens and return native currency.
      </p>
      <p>
        Your WETC is always backed 1:1 by native ETC held in the contract. You can verify the contract&apos;s balance on Blockscout at any time to confirm it holds enough ETC to cover all outstanding WETC tokens.
      </p>

      <h2>Key Points</h2>
      <ul>
        <li>WETC is a 1:1 representation of native ETC as an ERC-20 token</li>
        <li>Wrapping and unwrapping is instant and costs only gas</li>
        <li><ETCswapLink /> handles wrapping automatically for most interactions</li>
        <li>WETC enables ETC to participate in ERC-20-based DeFi protocols</li>
        <li>The wrapping contract is simple, auditable, and proven across all EVM chains</li>
      </ul>
    </>
  )
}
