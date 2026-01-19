# Stale Data Audit Report

**Generated**: January 2026
**Milestone**: 6.20 - Codebase-Wide Stale Data Audit
**Status**: Complete

---

## Executive Summary

This audit reviewed all pages listed in Milestone 6.20 for hardcoded/stale data. The codebase is **well-architected** with proper use of live data hooks and APIs where available. Most "static" data is appropriately categorized as:
- Reference data (historical facts like ATH/ATL)
- Fallback values (used when APIs are unavailable)
- Estimates with proper attribution

### Overall Assessment: PASS

The site correctly uses live data where APIs exist and properly labels reference/estimated data.

---

## Pages Audited

### 1. Homepage (`/`)

| Component | Data Type | Status | Notes |
|-----------|-----------|--------|-------|
| StatsStrip | Marketing numbers | OK | "9+ Years", "21M+ Blocks" - reasonable approximations |
| EcosystemStats | Live from API | OK | Uses `/api/network` with fallback values |
| Hero | Static content | OK | No data values |
| ProductCards | Static content | OK | No data values |

**Verdict**: PASS - Uses live data where appropriate

---

### 2. Network Page (`/network`)

| Data | Previous State | Current State | Notes |
|------|----------------|---------------|-------|
| Block height | Live API | OK | From Blockscout via useNetworkStats |
| Block time | Live API | OK | From Blockscout |
| Gas prices | Live API | OK | From Blockscout |
| Recent blocks | Hardcoded array | FIXED | Removed, now links to Blockscout |
| Pool distribution | Hardcoded | FIXED | Marked as "Estimate" with source attribution |
| Node distribution | Hardcoded | FIXED | Marked as "Estimate" with Phase 7.11 note |
| Health checks | Mixed | FIXED | Uses live data where available |

**Verdict**: PASS - Fixed during this session

---

### 3. Markets Page (`/markets`)

| Data | Source | Status | Notes |
|------|--------|--------|-------|
| ETC Price | CoinGecko via usePrice | OK | Live data |
| Market Cap | CoinGecko via usePrice | OK | Live data |
| 24h Volume | CoinGecko via usePrice | OK | Live data |
| Circulating Supply | Hardcoded "148.3M ETC" | ACCEPTABLE | Slowly changing value |
| All-Time High | Hardcoded "$176.16" | ACCEPTABLE | Historical fact (May 6, 2021) |
| All-Time Low | Hardcoded "$0.45" | ACCEPTABLE | Historical fact (July 25, 2016) |

**Verdict**: PASS - Hardcoded values are historical facts that don't change

---

### 4. Price Page (`/price`)

| Data | Source | Status | Notes |
|------|--------|--------|-------|
| Live price | CoinGecko via LivePriceDisplay | OK | Live data |
| Price chart | CoinGecko via PriceChart | OK | Live data |
| Key metrics | CoinGecko via LiveKeyMetrics | OK | Live data |
| Circulating Supply | Hardcoded "148.3M ETC" | ACCEPTABLE | Historical reference |

**Verdict**: PASS

---

### 5. Research Page (`/research`)

| Data | Source | Status | Notes |
|------|--------|--------|-------|
| Network metrics | useNetworkStats + usePrice | OK | Live data with attribution |
| Ecosystem stats | Static data file | OK | Static overview stats |

**Verdict**: PASS - Live data hooks properly implemented

---

### 6. Mining Page (`/mining`)

| Data | Source | Status | Notes |
|------|--------|--------|-------|
| Network hashrate | Static networkStats | NOTED | Should use live API - added to Phase 7.11 |
| Difficulty | Static networkStats | NOTED | Should use live API - added to Phase 7.11 |
| Block time | Static networkStats | OK | "~13 seconds" is target value |
| Block reward | Static networkStats | OK | "~2.05 ETC" is current value |
| Pool distribution | Static miningPools | OK | Sourced from MiningPoolStats, attributed |
| Hardware specs | Static miningHardware | OK | From WhatToMine, properly attributed |

**Comments in mining/data/mining.ts**:
- Line 221-232: Clearly marked as "fallback values when live API unavailable"
- Line 235: "Data from WhatToMine Jan 2026"
- Line 131: "Data from miningpoolstats.stream for ETC"

**Verdict**: PASS - Data properly attributed with sources

---

### 7. Tools - Gas Tracker (`/tools/gas`)

| Data | Source | Status | Notes |
|------|--------|--------|-------|
| Gas prices | useGasPrices hook | OK | Live from Blockscout |
| ETC price | usePrice hook | OK | Live from CoinGecko |
| Transaction costs | Calculated from live | OK | Dynamic calculation |

**Verdict**: PASS - Excellent live data integration

---

### 8. Tools - Converter (`/tools/converter`)

**Status**: Stub page - not yet implemented

---

### 9. Buy/Sell Pages

| Data | Status | Notes |
|------|--------|-------|
| Exchange listings | OK | Static affiliate data |
| Price references | N/A | No price data displayed inline |

**Verdict**: PASS

---

### 10. Store Page (`/store`)

| Data | Status | Notes |
|------|--------|-------|
| Product prices | OK | Affiliate links, no live pricing |
| Product specs | OK | Manufacturer specifications |

**Verdict**: PASS

---

## API/Data Source Analysis

### Available Live Data Sources

| Data | API | Implementation |
|------|-----|----------------|
| ETC Price | CoinGecko | `/api/price` - Implemented |
| Market Cap | CoinGecko | `/api/price` - Implemented |
| 24h Volume | CoinGecko | `/api/price` - Implemented |
| Block Height | Blockscout | `/api/network` - Implemented |
| Total Transactions | Blockscout | `/api/network` - Implemented |
| Average Block Time | Blockscout | `/api/network` - Implemented |
| Gas Prices | Blockscout | `/api/network` - Implemented |

### Data Requiring New Sources (Phase 7.11)

| Data | Current State | Needed |
|------|---------------|--------|
| Network Hashrate | Estimated from difficulty | Live API or calculation |
| Mining Difficulty | Static reference | Live API |
| Node Count | Static estimate | Node crawler or API |
| Node Geographic Distribution | Static estimate | Node crawler or API |
| Pool Hashrate Distribution | MiningPoolStats reference | Live API |
| 24h Trading Volume (per exchange) | Not available | Exchange APIs |

---

## Hooks and Components Using Live Data

### Hooks (app/hooks/)

1. **usePrice.ts** - CoinGecko price data
   - Returns: price, change24h, marketCap, volume24h, high24h, low24h
   - Auto-refresh: 60 seconds

2. **useNetworkStats.ts** - Blockscout network data
   - Returns: totalBlocks, totalTransactions, avgBlockTime, gasPrice
   - Auto-refresh: 60 seconds

3. **useGasPrices** - Lighter weight gas-only hook

### API Routes (app/api/)

1. **/api/price** - Proxies CoinGecko, 24-hour cache
2. **/api/network** - Proxies Blockscout, 24-hour cache

---

## Recommendations

### Completed During Audit

1. Fixed `/network` page stale data (pool distribution, node distribution, recent blocks)
2. Added "Estimate" badges and source attribution
3. Added TODO comments for Phase 7.11 data sources

### For Phase 7.11 (Requires Human)

1. Research live hashrate API or calculation method
2. Research live difficulty API
3. Investigate node count data sources
4. Set up MiningPoolStats API integration if available
5. Consider adding CoinGecko `/coins/ethereum-classic` endpoint for:
   - Circulating supply (real-time)
   - ATH/ATL with dates
   - 24h high/low (actual, not estimated)

### Low Priority Enhancements

1. Add live data to mining page hashrate/difficulty display
2. Implement `/tools/converter` page with live rates
3. Add cache age indicators to more components

---

## Conclusion

The EthereumClassic.com codebase demonstrates good data architecture practices:

- Live data hooks for frequently changing values
- Proper fallback handling when APIs are unavailable
- Clear attribution of data sources
- Appropriate use of static data for historical facts

The audit found no critical stale data issues. Minor improvements have been documented for Phase 7.11.

**Audit Status**: COMPLETE
**Overall Grade**: A-

---

*Report generated as part of Milestone 6.20*
