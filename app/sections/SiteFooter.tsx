import { Section } from "../components/Section";

export function SiteFooter() {
    return (
        <Section>
            <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="text-sm text-white/70">Ethereum Classic</div>
                    <div className="mt-1 text-lg font-medium">
                        Proof-of-Work smart contracts.
                    </div>
                    <div className="mt-2 text-sm text-white/60">
                        This site routes users to ETC activity. It is not a community portal.
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                        href="https://classicos.org"
                    >
                        ClassicOS
                    </a>
                    <a
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                        href="https://etcswap.org"
                    >
                        ETCswap
                    </a>
                    <a
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                        href="#top"
                    >
                        Back to top
                    </a>
                </div>
            </div>
        </Section>
    );
}
