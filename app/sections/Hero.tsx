import { Section } from "../components/Section";
import { FadeIn } from "../components/Motion";
import { Button } from "../components/Button";

export function Hero() {
    return (
        <Section id="top">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--panel)] p-8 md:p-12 glow">
                <div className="pointer-events-none absolute inset-0 opacity-70 bg-grid" />

                <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-3xl bg-[var(--etc)]/15" />
                <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full blur-3xl bg-white/10" />

                <FadeIn>
                    <div className="relative">
                        <p className="mb-3 text-xs tracking-wide text-white/70">
                            Proof-of-Work • Smart Contracts • EVM-native
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                            Ethereum Classic{" "}
                            <span className="block text-white/80 md:inline">
                                is Proof-of-Work smart contracts.
                            </span>
                        </h1>


                        <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
                            A mature execution layer secured by Nakamoto consensus. Use ETC today, earn it through mining, and build long-lived applications on a stable base.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button href="#do" variant="primary">
                                Explore what you can do
                            </Button>
                            <Button href="#why" variant="ghost">
                                Why ETC
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </div >
        </Section >
    );
}
