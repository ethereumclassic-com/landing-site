import { Section } from "../components/Section";

export function SiteFooter() {
    return (
        <Section>
            <div className="flex flex-col gap-6 rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="text-sm text-white/70">Ethereum Classic</div>
                    <div className="mt-1 text-lg font-medium">
                        Proof-of-Work smart contracts.
                    </div>
                    <div className="mt-2 max-w-md text-sm text-white/60">
                        A routing layer for using, earning, and building on Ethereum Classic — including on-chain applications, mining, and fiat on-ramps.
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                        href="https://classicos.org"
                    >
                        <span className="whitespace-nowrap">Classic OS</span>
                    </a>

                    <a
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                        href="https://classicusd.com"
                    >
                        <span className="whitespace-nowrap">Classic USD</span>
                    </a>

                    <a
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                        href="https://etcswap.org"
                    >
                        <span className="whitespace-nowrap">ETCswap</span>
                    </a>

                    <a
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                        href="#top"
                    >
                        Back to top
                    </a>
                </div>
            </div>
        </Section>
    );
}
