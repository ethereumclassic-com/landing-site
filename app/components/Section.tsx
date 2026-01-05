export function Section({
    id,
    children,
}: {
    id?: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="px-6 py-16 md:px-10 lg:px-12 lg:py-24">
            <div className="mx-auto w-full max-w-6xl lg:max-w-7xl">{children}</div>
        </section>
    );
}
