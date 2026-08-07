/**
 * Chain-level constants shared across data paths.
 *
 * Keep the nominal block time here rather than re-declaring it per module: it
 * had drifted to three different values (13, 13.0 and 13.5) across the fetch
 * layer, the context provider and the emission math, so the same "we could not
 * reach Blockscout" fallback produced different answers depending on the path.
 *
 * This is the FALLBACK only. Anywhere a live figure is available, divide by
 * Blockscout's reported average_block_time instead — it currently runs ~6%
 * above nominal, which is weeks of drift over a full emission era.
 */
export const NOMINAL_BLOCK_TIME_SECONDS = 13
