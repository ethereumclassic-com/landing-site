import Image from "next/image";
import { Section } from "../components/Section";
import { FadeIn, HoverLift } from "../components/Motion";

const bullets = [
    {
        title: "Programmable Proof-of-Work",
        body: "Ethereum Classic combines Proof-of-Work security with native smart contracts. ETC can be used directly in applications without wrapping, bridging, or relying on external execution layers, preserving Proof-of-Work security end to end.",
        image: "/why/programmable-pow.png",
    },
    {
        title: "Digital scarcity",
        body: "The ETC asset has a fixed supply of approximately 210.7 million, enforced at the protocol level. Its emission schedule follows a predictable reduction cycle, balancing long-term scarcity with sustained miner incentives.",
        image: "/why/digital-scarcity.png",
    },
    {
        title: "Conservative by design",
        body: "Ethereum Classic prioritizes stability and empirical security over rapid experimentation. Many innovations enter the ecosystem as centralized or permissioned systems elsewhere, then mature into decentralized, trust-minimized infrastructure on Ethereum Classic.",
        image: "/why/conservative-design.png",
    },
    {
        title: "EVM compatibility",
        body: "As a first-class EVM network, Ethereum Classic supports familiar tooling, standards, and smart contract workflows. Improvements across the broader EVM ecosystem translate directly, without abandoning decentralization or Proof-of-Work.",
        image: "/why/compatibility.png",
    },
];

export function Why() {
    return (
        <Section id="why">
            <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Why Ethereum Classic
                </h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                    Ethereum Classic is engineered for long-term reliability: Proof-of-Work security,
                    conservative upgrades, and system rules enforced by protocol. The network evolves
                    deliberately, favoring evidence-based improvements and incentive-aligned design over
                    discretionary intervention. This creates a stable execution layer capable of supporting
                    real markets across multiple cycles without centralized safety nets.
                </p>
            </FadeIn>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
                {bullets.map((b, i) => (
                    <FadeIn key={b.title} delay={0.05 * i}>
                        <HoverLift>
                            <div className="group relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 transition hover:border-white/15 hover:bg-[var(--panel-strong)]">
                                <div className="flex gap-5">
                                    {/* Visual rail */}
                                    <div className="shrink-0">
                                        <div className="relative h-24 w-24 md:h-28 md:w-28">
                                            <Image
                                                src={b.image}
                                                alt=""
                                                aria-hidden="true"
                                                fill
                                                className="pointer-events-none select-none object-contain opacity-80 transition group-hover:opacity-90"
                                                sizes="(max-width: 768px) 96px, 112px"
                                            />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0">
                                        <div className="text-lg font-medium">
                                            {b.title}
                                        </div>
                                        <div className="mt-2 text-sm text-white/70 leading-relaxed">
                                            {b.body}
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle fade so the image feels embedded without overpowering */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-70"
                                    style={{
                                        maskImage:
                                            "radial-gradient(circle at 18% 40%, black 0%, transparent 62%)",
                                        WebkitMaskImage:
                                            "radial-gradient(circle at 18% 40%, black 0%, transparent 62%)",
                                        background: "var(--panel)",
                                    }}
                                />
                            </div>
                        </HoverLift>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
