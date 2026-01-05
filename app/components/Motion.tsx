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
        initial: { opacity: 0, y, filter: "blur(6px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
    };

    return (
        <motion.div {...props} className={className}>
            {children}
        </motion.div>
    );
}

export function HoverLift({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
