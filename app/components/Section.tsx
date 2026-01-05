export function Section({
    id,
    children,
}: {
    id?: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="px-6 py-16 md:px-10">
            <div className="mx-auto w-full max-w-6xl">{children}</div>
        </section>
    );
}
