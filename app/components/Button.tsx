import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

type ButtonProps = {
    href: string;
    children: ReactNode;
    variant?: Variant;
    className?: string;
} & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
>;

export function Button({
    href,
    children,
    variant = "primary",
    className,
    ...rest
}: ButtonProps) {
    const isExternal = /^https?:\/\//.test(href);

    const base =
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40";
    const styles =
        variant === "primary"
            ? "bg-emerald-400/15 text-white border border-emerald-300/30 hover:bg-emerald-400/20"
            : "border border-white/15 bg-white/5 text-white/80 hover:bg-white/10";

    const cls = [base, styles, className].filter(Boolean).join(" ");

    if (isExternal) {
        const target = rest.target;
        const rel =
            target === "_blank"
                ? typeof rest.rel === "string" && rest.rel.length > 0
                    ? rest.rel
                    : "noopener noreferrer"
                : rest.rel;

        return (
            <a href={href} className={cls} {...rest} rel={rel}>
                {children}
            </a>
        );
    }

    // avoid forwarding external-only props to Link (destructure to exclude them)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { target, rel, ...internalRest } = rest;

    return (
        <Link href={href} className={cls} {...internalRest}>
            {children}
        </Link>
    );
}
