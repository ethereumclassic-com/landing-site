import Image from "next/image";
import { Section } from "../components/Section";
import { FadeIn, HoverLift } from "../components/Motion";
import { Button } from "../components/Button";

// NOTE: Long-form copy retained intentionally for SEO / AI summaries.
// This section should be compressed in Phase 1 polish pass.

const cards = [
    {
        title: "Use ETC",
        body: "Use ETC across decentralized applications on Ethereum Classic. ETC can be transferred, traded, collateralized, and programmed in smart contracts powering exchanges, stablecoins, payments, lending, liquidity provision, automation, and other on-chain services — with ETC as the native asset for fees and settlement.",
        cta: "Explore applications",
        href: "https://classicos.org",
        variant: "primary" as const,
        external: true,
        image: "/what/use-etc.png",
    },
    {
        title: "Earn ETC",
        body: "Ethereum Classic is secured by global miners running real hardware. By contributing hash power, miners validate blocks, secure transactions, and earn ETC through a transparent Proof-of-Work reward system.",
        cta: "Start mining",
        href: "https://ethereumclassic.com/earn", // TODO: replace with real mining destination before deploy
        variant: "ghost" as const,
        image: "/what/earn-etc.png",
    },
    {
        title: "Build on Ethereum Classic",
        body: "Build and deploy EVM-compatible smart contracts on a decentralized execution layer designed for longevity. Ethereum Classic supports familiar EVM tooling while prioritizing stability, neutrality, and final settlement.",
        cta: "Build on ETC",
        href: "https://ethereumclassic.com/build", // TODO: replace with real builder destination before deploy
        variant: "ghost" as const,
        image: "/what/build-etc.png",
    },
];

export function WhatCanIDo() {
    return (
        <Section id="do">
            <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    What can I do with ETC?
                </h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                    Ethereum Classic supports real economic activity across the full range of EVM capabilities.
                    ETC can be transferred, traded, and held as sound digital money, while also being used directly
                    in smart contracts that power exchanges, stablecoins, lending markets, payments, and programmable
                    financial infrastructure. These primitives support liquidity provision, market making, and
                    automated strategies, alongside broader automation and agent-based systems. ETC is also widely
                    accessible through established centralized exchanges and long-standing traditional finance
                    products, providing liquidity and integration into global markets.
                </p>
            </FadeIn>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
                {cards.map((c, i) => {
                    const isExternal =
                        c.external === true ||
                        (typeof c.href === "string" &&
                            /^https?:\/\//.test(c.href) &&
                            !c.href.startsWith("https://ethereumclassic.com"));

                    return (
                        <FadeIn key={c.title} delay={0.06 * i}>
                            <HoverLift className="h-full">
                                <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 transition hover:border-white/15 hover:bg-[var(--panel-strong)]">
                                    {/* Visual */}
                                    <div className="mb-4 flex justify-center">
                                        <div className="relative h-40 w-full max-w-[220px]">
                                            <Image
                                                src={c.image}
                                                alt=""
                                                aria-hidden="true"
                                                fill
                                                sizes="220px"
                                                className="pointer-events-none select-none object-contain opacity-85"
                                            />
                                        </div>
                                    </div>

                                    {/* Copy */}
                                    <div>
                                        <div className="text-lg font-medium">
                                            {c.title}
                                        </div>
                                        <div className="mt-2 text-sm text-white/70 leading-relaxed">
                                            {c.body}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-6">
                                        <Button
                                            href={c.href}
                                            variant={c.variant}
                                            {...(isExternal
                                                ? {
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                }
                                                : {})}
                                        >
                                            {c.cta}
                                        </Button>
                                    </div>
                                </div>
                            </HoverLift>
                        </FadeIn>
                    );
                })}
            </div>
        </Section>
    );
}
