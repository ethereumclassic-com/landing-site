import { Section } from "../components/Section";
import { FadeIn } from "../components/Motion";

const groups = [
    { title: "Users", body: "A stable execution layer to hold and use assets." },
    { title: "Miners", body: "Earn ETC securing the network with Proof-of-Work." },
    { title: "Builders", body: "Deploy EVM apps on a chain optimized for longevity." },
    { title: "Institutions", body: "A credible PoW smart contract base with clear routing." },
];

export function WhoFor() {
    return (
        <Section id="for">
            <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Who is ETC for?
                </h2>
            </FadeIn>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
                {groups.map((g, i) => (
                    <FadeIn key={g.title} delay={0.05 * i}>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="text-lg font-medium">{g.title}</div>
                            <div className="mt-2 text-sm text-white/70">{g.body}</div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
