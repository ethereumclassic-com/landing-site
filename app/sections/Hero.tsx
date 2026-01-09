import Image from "next/image";
import { Section } from "../components/Section";
import { FadeIn } from "../components/Motion";
import { Button } from "../components/Button";

// NOTE: Long-form copy retained intentionally for SEO / AI summaries.
// This section should be compressed in Phase 1 polish pass.

export function Hero() {
    return (
        <Section id="top">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-8 md:p-12 glow">
                {/* Subtle grid texture */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-grid" />

                {/* Ambient ETC glows */}
                <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-3xl bg-[var(--etc)]/15" />
                <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full blur-3xl bg-white/10" />

                <FadeIn>
                    <div className="relative grid items-center gap-10 md:grid-cols-2">
                        {/* Left: copy */}
                        <div>
                            <p className="mb-3 text-xs tracking-wide text-white/70">
                                Programmable Proof-of-Work • Smart Contracts • EVM Compatible
                            </p>

                            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                                Ethereum Classic{" "}
                                <span className="block text-white/80 md:inline">
                                    brings programmability to Proof-of-Work.
                                </span>
                            </h1>

                            <p className="mt-4 text-base text-white/75 md:text-lg leading-relaxed">
                                Ethereum Classic is a Proof-of-Work smart-contract network secured by global mining and real-world energy.
                                It brings a fully programmable execution environment to PoW, enabling applications to run directly on the base layer.
                                The ETC asset combines long-term digital scarcity with native utility inside smart contracts, powering markets, payments, and automated systems.
                                Built for longevity, Ethereum Classic favors careful upgrades and long-lived infrastructure over constant churn.
                                Use ETC today, earn it through mining, or build with the same EVM tools used across the broader Ethereum ecosystem.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Button href="#do" variant="primary">
                                    Use ETC today
                                </Button>
                                <Button href="#why" variant="ghost">
                                    Why Ethereum Classic
                                </Button>
                            </div>
                        </div>

                        {/* Right: visual */}
                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-full max-w-[340px] aspect-square md:max-w-[420px]">
                                <Image
                                    src="/hero/pow-core.png"
                                    alt=""
                                    aria-hidden="true"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 340px, 420px"
                                    className="pointer-events-none select-none object-contain opacity-90 translate-x-[-8px]"
                                />

                                {/* Soft radial fade so the asset feels embedded */}
                                <div
                                    className="pointer-events-none absolute inset-0"
                                    style={{
                                        maskImage:
                                            "radial-gradient(circle at center, black 55%, transparent 78%)",
                                        WebkitMaskImage:
                                            "radial-gradient(circle at center, black 55%, transparent 78%)",
                                        background: "var(--panel)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
