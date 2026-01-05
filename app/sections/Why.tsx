import { Section } from "../components/Section";
import { FadeIn, HoverLift } from "../components/Motion";

const bullets = [
    {
        title: "Nakamoto security",
        body: "Proof-of-Work consensus with real-world battle testing.",
    },
    {
        title: "Longevity",
        body: "Operating continuously since 2015 with a focus on stability.",
    },
    {
        title: "Smart contracts",
        body: "A programmable execution layer for real on-chain activity.",
    },
    {
        title: "EVM-native",
        body: "Compatible with the broader Ethereum tooling ecosystem.",
    },
];

export function Why() {
    return (
        <Section id="why">
            <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Why Ethereum Classic
                </h2>
                <p className="mt-3 max-w-2xl text-white/75 leading-relaxed">
                    ETC is built for reliability: Proof-of-Work security, long-lived infrastructure,
                    and EVM compatibility — without constant churn.
                </p>
            </FadeIn>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
                {bullets.map((b, i) => (
                    <FadeIn key={b.title} delay={0.05 * i}>
                        <HoverLift>
                            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 transition hover:border-white/15 hover:bg-[var(--panel-strong)]">
                                <div className="text-lg font-medium">{b.title}</div>
                                <div className="mt-2 text-sm text-white/70">{b.body}</div>
                            </div>
                        </HoverLift>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
