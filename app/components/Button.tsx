import Link from "next/link";

type Variant = "primary" | "ghost";

export function Button({
    href,
    children,
    variant = "ghost",
}: {
    href: string;
    children: React.ReactNode;
    variant?: Variant;
}) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/20";

    const styles: Record<Variant, string> = {
        primary:
            "bg-[var(--etc)] text-black hover:opacity-90 shadow-[0_12px_40px_rgba(51,255,153,0.12)]",
        ghost:
            "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    };

    const isHash = href.startsWith("#");

    if (isHash) {
        return (
            <a href={href} className={`${base} ${styles[variant]}`}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={`${base} ${styles[variant]}`}>
            {children}
        </Link>
    );
}
