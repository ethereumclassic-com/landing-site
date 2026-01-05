"use client";

import { motion, type MotionProps } from "framer-motion";

export function FadeIn({
    children,
    delay = 0,
    y = 10,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}) {
    const props: MotionProps = {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.6, delay },
    };

    return (
        <motion.div {...props} className={className}>
            {children}
        </motion.div>
    );
}
