import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'thanos',
  title: 'Thanos',
  date: '2020-11-28',
  summary:
    'ECIP-1099 — Halved the DAG size epoch length, enabling consumer GPUs to continue mining ETC. Introduced the Etchash algorithm.',
  content: `## Thanos (ECIP-1099) Network Upgrade

**Activation Block:** 11,700,000\\
**Activation Date:** November 28, 2020\\
**ECIP Status:** Final

---

### Overview

The Thanos upgrade introduced the Etchash algorithm — a modification to the Ethash mining algorithm that doubled the DAG epoch length from 30,000 to 60,000 blocks. This halved the rate of DAG growth, extending the mining viability of 4GB consumer GPUs by approximately three years. Without this change, consumer GPUs would have been obsoleted by late 2020, concentrating mining power among ASIC operators and large GPU farms.

### Included Changes

| ECIP | Title | Summary |
|------|-------|---------|
| [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099) | Calibrate Epoch Duration | Doubled DAG epoch length from 30,000 to 60,000 blocks |

### Technical Details

- **DAG epoch doubling** — The Ethash algorithm uses a Directed Acyclic Graph (DAG) that grows with each epoch. At epoch 30,000 blocks, the DAG size increases ~8MB per epoch. By doubling the epoch to 60,000 blocks, the DAG grows at half the rate, keeping it within the memory limits of 4GB GPUs for significantly longer
- **Etchash algorithm** — The modified algorithm is called Etchash (distinct from Ethash). The core proof-of-work computation is identical — the only change is the epoch length parameter. This means existing mining hardware and software required only minor configuration changes
- **GPU mining preservation** — At the time of the upgrade, the Ethash DAG was approaching the 4GB VRAM limit of consumer GPUs (GTX 1050 Ti, RX 570/580 4GB variants). These represent the majority of GPU miners worldwide. Without ECIP-1099, these miners would have been forced off the network
- **Mining decentralization** — Preserving consumer GPU mining prevents concentration of hashpower among ASIC operators and mining farms with 8GB+ GPUs. A more distributed mining base strengthens the network's censorship resistance

### Context

The Thanos upgrade addressed a growing crisis in mining accessibility. As the DAG size approached 4GB, a significant portion of the mining community faced obsolescence. The name "Thanos" reflected the upgrade's purpose: balancing the mining ecosystem by ensuring that consumer hardware remained viable. The epoch doubling was a minimal, targeted change that preserved the security properties of Ethash while extending hardware compatibility.

### Outcome

Activated at block 11,700,000 on November 28, 2020. Consumer GPUs with 4GB VRAM continued mining ETC without interruption. The Etchash algorithm remains in use today, distinguishing ETC's proof-of-work from Ethereum's former Ethash.

---

### Related

- [ECIP-1099: Calibrate Epoch Duration](https://ecips.ethereumclassic.org/ECIPs/ecip-1099)`,
  ecipRefs: ['ecip-1099'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 11_700_000,
}

export default entry
