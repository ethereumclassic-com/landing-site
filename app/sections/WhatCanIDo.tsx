import { Section } from "../components/Section";
import { FadeIn, HoverLift } from "../components/Motion";
import { Button } from "../components/Button";

const cards = [
    {
        title: "Use ETC",
        body: "Swap assets, use stablecoins, and access on-chain applications.",
        cta: "Open ClassicOS",
        href: "https://classicos.org", // update when ready
        variant: "primary" as const,
    },
    {
        title: "Earn ETC",
        body: "Mine ETC, join a pool, and explore yield opportunities responsibly.",
        cta: "Start mining",
        href: "#", // TODO: replace with mining destination (real link) before deploy
        variant: "ghost" as const,
    },
    {
        title: "Build on ETC",
        body: "Deploy EVM contracts, run clients, and ship infrastructure that lasts.",
        cta: "Developer path",
        href: "#", // TODO: replace with build destination (real link) before deploy
        variant: "ghost" as const,
    },
];

export function WhatCanIDo() {
    return (
        <Section id="do">
            <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    What can I do on ETC today?
                </h2>
                <p className="mt-3 max-w-2xl text-white/75">
                    Choose a path. Each route is action-first and leads to real ETC activity.
                </p>
            </FadeIn>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
                {cards.map((c, i) => (
                    <FadeIn key={c.title} delay={0.06 * i}>
                        <HoverLift className="h-full">
                            <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 transition hover:border-white/15 hover:bg-[var(--panel-strong)]">
                                <div>
                                    <div className="text-lg font-medium">{c.title}</div>
                                    <div className="mt-2 text-sm text-white/70">{c.body}</div>
                                </div>

                                <div className="mt-6">
                                    <Button href={c.href} variant={c.variant}>
                                        {c.cta}
                                    </Button>
                                </div>
                            </div>
                        </HoverLift>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
