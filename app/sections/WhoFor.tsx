import Image from "next/image";
import { Section } from "../components/Section";
import { FadeIn, HoverLift } from "../components/Motion";

// NOTE: Long-form copy retained intentionally for SEO / AI summaries.
// This section should be compressed in Phase 1 polish pass.

const groups = [
    {
        title: "Users & Power Users",
        body: "Individuals who use ETC within decentralized markets and smart-contract applications built on Ethereum Classic. Programmability enables financial primitives familiar to traditional markets — exchanges, lending, settlement, liquidity provision, and automated strategies — to operate on a global, public network. For users in regions with limited banking access, unstable currencies, or fragmented financial infrastructure, ETC-based systems provide access to stable digital currencies and scarce assets through protocol-enforced rules rather than intermediaries. This allows capital to move from higher-risk local systems into more predictable, globally accessible markets wherever an internet connection is available. For users in established economies, Ethereum Classic offers a low-friction, non-discretionary settlement layer that enables global value transfer without rent-seeking fees, custody risk, or unnecessary delay.",
        image: "/for/users.png",
    },
    {
        title: "Miners & Energy Providers",
        body: "Proof-of-Work miners, hardware manufacturers, data centers, and energy operators who secure the network with real computation. Ethereum Classic enables the monetization of underutilized energy resources, including remote hydro, curtailed renewables, and off-grid generation, as well as the capture of wasted energy such as flared or vented methane. As a flexible, location-agnostic load, Proof-of-Work can absorb excess supply during periods of low demand and shut down during congestion, helping stabilize grids and support capacity expansion. This makes mining viable wherever power, hardware, and connectivity exist, allowing energy producers to convert idle or wasted capacity into productive, globally liquid output. Participation does not require long-term contracts or trusted counterparties, enabling operators to deploy capital incrementally and respond dynamically to energy, market, and regulatory conditions.",
        image: "/for/miners.png",
    },
    {
        title: "Builders & Developers",
        body: "Engineers building applications, infrastructure, and services on Ethereum Classic across a wide range of scales, from individual developers to institutional teams. As the original EVM network, Ethereum Classic supports the most widely adopted smart-contract execution environment in the blockchain ecosystem, with mature tooling, libraries, standards, and extensive production history. This enables developers to deploy systems ranging from micro-transactions to high-value settlement while preserving the trust-minimization properties of Proof-of-Work that are difficult to replicate in validator-based systems. Ethereum Classic provides a stable base layer where long-lived software can be built, upgraded carefully, and integrated with broader EVM, Proof-of-Work, and traditional financial systems. Builders can operate hybrid architectures that combine centralized services at the application layer with decentralized settlement and execution at the protocol layer, without sacrificing auditability or finality.",
        image: "/for/builders.png",
    },
    {
        title: "Institutions & Enterprises",
        body: "Governments, financial institutions, and enterprises that require a neutral, globally accessible settlement layer for value transfer and asset issuance. Ethereum Classic functions as a public utility where capital can move worldwide at the cost of blockspace, settling transactions in roughly 13-second intervals and securing them with Proof-of-Work backed by substantial real-world computation. This enables organizations to reduce friction across jurisdictions, currencies, and operating hours, replacing fragmented financial rails with continuous global settlement. Enterprises can deploy centralized or decentralized applications that settle transparently on-chain, while institutions can issue digital assets, operate markets, or offload operational processing to a public blockchain without compromising auditability or control over their products. Because settlement occurs on a public, protocol-enforced ledger, organizations can integrate Ethereum Classic alongside existing systems while maintaining clear compliance boundaries and operational continuity.",
        image: "/for/institutions.png",
    },
];

export function WhoFor() {
    return (
        <Section id="for">
            <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Who is Ethereum Classic for?
                </h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                    Ethereum Classic is used by participants who need predictable infrastructure and continuous
                    global access. It brings together power users operating in programmable markets, miners and
                    energy providers securing a global PoW network, builders shipping EVM applications and
                    infrastructure, and institutions integrating ETC into products and portfolios. Each group
                    benefits from the same core properties: a public network, open participation, and
                    protocol-enforced rules. The cards below summarize how these constituencies use the same base
                    layer for distinct needs — from market activity to energy monetization to institutional
                    settlement.
                </p>
            </FadeIn>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
                {groups.map((g, i) => (
                    <FadeIn key={g.title} delay={0.05 * i}>
                        <HoverLift className="h-full">
                            <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 transition hover:border-white/15 hover:bg-[var(--panel-strong)]">
                                {/* Visual */}
                                <div className="mb-4 flex justify-center">
                                    <div className="relative h-40 w-full max-w-[240px]">
                                        <Image
                                            src={g.image}
                                            alt=""
                                            aria-hidden="true"
                                            fill
                                            sizes="240px"
                                            className="pointer-events-none select-none object-contain opacity-85"
                                        />
                                    </div>
                                </div>

                                {/* Copy */}
                                <div>
                                    <div className="text-lg font-medium">{g.title}</div>
                                    <div className="mt-2 text-sm text-white/70 leading-relaxed">
                                        {g.body}
                                    </div>
                                </div>
                            </div>
                        </HoverLift>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
