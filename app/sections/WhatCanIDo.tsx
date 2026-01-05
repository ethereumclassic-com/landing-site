import { Section } from "../components/Section";
import { FadeIn } from "../components/Motion";

const cards = [
    {
        title: "Use ETC",
        body: "Swap assets, use stablecoins, and access on-chain applications.",
        cta: "Open ClassicOS",
        href: "https://classicos.org", // update when ready
    },
    {
        title: "Earn ETC",
        body: "Mine ETC, join a pool, and explore yield opportunities responsibly.",
        cta: "Start mining",
        href: "https://ethereumclassic.com", // placeholder; update to mining subpage or resource
    },
    {
        title: "Build on ETC",
        body: "Deploy EVM contracts, run clients, and ship infrastructure that lasts.",
        cta: "Developer path",
        href: "https://ethereumclassic.com", // placeholder; update later
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
                    Choose a path. Each route is action-first and leads to real ETC
                    activity.
                </p>
            </FadeIn>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
                {cards.map((c, i) => (
                    <FadeIn key={c.title} delay={0.06 * i}>
                        <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div>
                                <div className="text-lg font-medium">{c.title}</div>
                                <div className="mt-2 text-sm text-white/70">{c.body}</div>
                            </div>

                            <a
                                href={c.href}
                                className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                            >
                                {c.cta}
                            </a>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
