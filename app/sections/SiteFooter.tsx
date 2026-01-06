import Image from "next/image";
import { Section } from "../components/Section";

const externalLinkBase =
    "rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40";
const externalLinkMuted =
    "rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40";

export function SiteFooter() {
    return (
        <Section>
            <div className="flex flex-col gap-6 rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-8 md:flex-row md:items-center md:justify-between">
                {/* Left: Identity + description */}
                <div className="flex items-start gap-4">
                    <Image
                        src="/etc-prism.png"
                        alt="Ethereum Classic"
                        width={20}
                        height={20}
                        className="mt-1 opacity-90"
                        priority={false}
                    />

                    <div>
                        <div className="text-sm text-white/70">Ethereum Classic</div>
                        <div className="mt-1 text-lg font-medium">
                            Programmable Proof-of-Work.
                        </div>
                        <div className="mt-2 max-w-md text-sm text-white/60">
                            A Proof-of-Work smart-contract network where the ETC asset can be used, earned, and built with directly on-chain.
                        </div>
                        <div className="mt-3 text-xs text-white/50">
                            Global public network • Open participation • Protocol-enforced rules
                        </div>
                    </div>
                </div>

                {/* Right: ecosystem links */}
                <div className="flex flex-wrap gap-3">
                    <a
                        href="https://classicos.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Classic OS in a new tab"
                        className={externalLinkBase}
                    >
                        <span className="whitespace-nowrap">Classic OS</span>
                    </a>

                    <a
                        href="https://classicusd.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Classic USD in a new tab"
                        className={externalLinkBase}
                    >
                        <span className="whitespace-nowrap">Classic USD</span>
                    </a>

                    <a
                        href="https://etcswap.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open ETCswap in a new tab"
                        className={externalLinkBase}
                    >
                        <span className="whitespace-nowrap">ETCswap</span>
                    </a>

                    <a
                        href="https://olympiadao.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Olympia DAO in a new tab"
                        className={externalLinkMuted}
                    >
                        <span className="whitespace-nowrap">Olympia DAO</span>
                    </a>

                    <a
                        href="#top"
                        className={externalLinkBase}
                        aria-label="Back to top"
                    >
                        Back to top
                    </a>
                </div>
            </div>
        </Section>
    );
}
