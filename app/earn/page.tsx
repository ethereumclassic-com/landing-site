import { Section } from "../components/Section";
import { FadeIn } from "../components/Motion";
import { Button } from "../components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Earn ETC — Ethereum Classic",
    description:
        "Earn ETC through Proof-of-Work mining on the Ethereum Classic network.",
};

export default function EarnPage() {
    return (
        <main>
            <Section>
                <FadeIn>
                    <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                        Earn ETC
                    </h1>
                    <p className="mt-3 text-white/75 leading-relaxed max-w-2xl">
                        Ethereum Classic is secured by Proof-of-Work. Contribute hash power through
                        established mining pools and infrastructure providers to earn ETC.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                            href="https://miningpoolstats.stream/ethereumclassic"
                            variant="primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View ETC mining pools
                        </Button>

                        <Button href="/" variant="ghost">
                            Back to homepage
                        </Button>
                    </div>

                    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 hover:bg-[var(--panel-strong)] transition"
                            href="https://www.whattomine.com/coins/162-etc-etchash"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="font-medium">Profitability reference</div>
                            <div className="mt-1 text-sm text-white/70">
                                Estimate ETC mining revenue for common hardware.
                            </div>
                        </a>

                        <a
                            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 hover:bg-[var(--panel-strong)] transition"
                            href="https://2cryptocalc.com/ethereum-classic-mining-calculator"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="font-medium">Mining calculator</div>
                            <div className="mt-1 text-sm text-white/70">
                                Quick hashrate → rewards and cost estimation.
                            </div>
                        </a>

                        <a
                            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 hover:bg-[var(--panel-strong)] transition"
                            href="https://github.com/etclabscore/core-geth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="font-medium">Run infrastructure</div>
                            <div className="mt-1 text-sm text-white/70">
                                Operate nodes and services that support miners.
                            </div>
                        </a>
                    </div>
                </FadeIn>
            </Section>
        </main>
    );
}
