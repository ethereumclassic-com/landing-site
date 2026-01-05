import { Section } from "../components/Section";
import { FadeIn } from "../components/Motion";

export function Hero() {
    return (
        <Section id="top">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
                <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-3xl bg-[#33FF99]/20" />
                    <div className="absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full blur-3xl bg-white/10" />
                </div>

                <FadeIn>
                    <div className="relative">
                        <p className="mb-3 text-sm text-white/70">
                            Proof-of-Work • Smart Contracts • EVM-native
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                            Ethereum Classic is Proof-of-Work smart contracts.
                        </h1>

                        <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
                            A mature, battle-tested execution layer secured by Nakamoto
                            consensus. Use ETC today, earn it through mining, and build
                            long-lived applications on a stable base.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#do"
                                className="inline-flex items-center justify-center rounded-xl bg-[#33FF99] px-5 py-3 text-sm font-medium text-black hover:opacity-90"
                            >
                                Explore what you can do
                            </a>

                            <a
                                href="#why"
                                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                            >
                                Why ETC
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
