import { Section } from "../components/Section";
import { FadeIn } from "../components/Motion";
import { Button } from "../components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Build on Ethereum Classic",
    description:
        "Build EVM-compatible smart contracts on Ethereum Classic, a Proof-of-Work network designed for longevity.",
};

export default function BuildPage() {
    return (
        <main>
            <Section>
                <FadeIn>
                    <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                        Build on Ethereum Classic
                    </h1>
                    <p className="mt-3 text-white/75 leading-relaxed max-w-2xl">
                        Ethereum Classic is an EVM network designed for long-lived infrastructure.
                        Use familiar Ethereum tooling to write, deploy, and operate smart contracts.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                            href="https://docs.soliditylang.org/"
                            variant="primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Solidity docs
                        </Button>

                        <Button href="/" variant="ghost">
                            Back to homepage
                        </Button>
                    </div>

                    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 hover:bg-[var(--panel-strong)] transition"
                            href="https://hardhat.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="font-medium">Hardhat</div>
                            <div className="mt-1 text-sm text-white/70">
                                Local dev, testing, deployment workflows.
                            </div>
                        </a>

                        <a
                            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 hover:bg-[var(--panel-strong)] transition"
                            href="https://book.getfoundry.sh/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="font-medium">Foundry</div>
                            <div className="mt-1 text-sm text-white/70">
                                Fast toolchain for Solidity testing and scripts.
                            </div>
                        </a>

                        <a
                            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 hover:bg-[var(--panel-strong)] transition"
                            href="https://eips.ethereum.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="font-medium">EVM standards (EIPs)</div>
                            <div className="mt-1 text-sm text-white/70">
                                Token and interface standards used across EVM chains.
                            </div>
                        </a>
                    </div>
                </FadeIn>
            </Section>
        </main>
    );
}
