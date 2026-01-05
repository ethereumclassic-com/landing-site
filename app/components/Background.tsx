'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function Background() {
    const reduceMotion = useReducedMotion();

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {/* Base */}
            <div className="absolute inset-0 bg-[#0B0F14]" />

            {/* Animated mesh gradient layer (CSS transform animation, very cheap) */}
            <div
                className={[
                    'absolute -inset-[20%] opacity-90',
                    '[background-image:',
                    'radial-gradient(900px_600px_at_20%_20%,rgba(34,197,94,0.18),transparent_60%),',
                    'radial-gradient(900px_600px_at_80%_15%,rgba(59,130,246,0.14),transparent_58%),',
                    'radial-gradient(900px_700px_at_60%_85%,rgba(16,185,129,0.12),transparent_62%),',
                    'radial-gradient(700px_500px_at_15%_75%,rgba(34,197,94,0.10),transparent_60%)',
                    ']',
                    '[filter:saturate(1.05)]',
                    '[mask-image:radial-gradient(ellipse_at_center,black_48%,transparent_78%)]',
                    reduceMotion ? '' : '[animation:etc-mesh-pan_22s_ease-in-out_infinite]',
                ].join(' ')}
            />

            {/* Rotating conic aura ring (subtle, feels “high-tech”, not glitter) */}
            <motion.div
                className="absolute left-1/2 top-[8vh] h-[920px] w-[920px] -translate-x-1/2 rounded-full blur-3xl opacity-70"
                style={{
                    background:
                        'conic-gradient(from 180deg, rgba(34,197,94,0.16), rgba(59,130,246,0.10), rgba(34,197,94,0.16), rgba(0,0,0,0) 72%)',
                    maskImage:
                        'radial-gradient(circle at center, transparent 54%, black 66%, black 100%)',
                    WebkitMaskImage:
                        'radial-gradient(circle at center, transparent 54%, black 66%, black 100%)',
                }}
                animate={reduceMotion ? undefined : { rotate: [0, 360] }}
                transition={
                    reduceMotion
                        ? undefined
                        : { duration: 110, repeat: Infinity, ease: 'linear' }
                }
            />

            {/* Drifting glow blobs (Framer Motion, slow + restrained) */}
            <motion.div
                className="absolute -top-44 left-[8%] h-[520px] w-[520px] rounded-full blur-3xl"
                style={{
                    background:
                        'radial-gradient(circle at 30% 30%, rgba(34,197,94,0.22), transparent 60%)',
                }}
                animate={
                    reduceMotion
                        ? undefined
                        : { x: [0, 70, 0], y: [0, 35, 0], opacity: [0.55, 0.85, 0.55] }
                }
                transition={
                    reduceMotion
                        ? undefined
                        : { duration: 30, repeat: Infinity, ease: 'easeInOut' }
                }
            />

            <motion.div
                className="absolute top-[18vh] right-[-180px] h-[620px] w-[620px] rounded-full blur-3xl"
                style={{
                    background:
                        'radial-gradient(circle at 40% 40%, rgba(59,130,246,0.18), transparent 62%)',
                }}
                animate={
                    reduceMotion
                        ? undefined
                        : { x: [0, -80, 0], y: [0, 50, 0], opacity: [0.45, 0.8, 0.45] }
                }
                transition={
                    reduceMotion
                        ? undefined
                        : { duration: 44, repeat: Infinity, ease: 'easeInOut' }
                }
            />

            {/* Subtle shimmer scanline (CSS animation; ultra low opacity) */}
            <div
                className={[
                    'absolute inset-0 opacity-[0.06]',
                    '[background-image:linear-gradient(to_bottom,transparent,rgba(255,255,255,0.14),transparent)]',
                    '[background-size:100%_220px]',
                    reduceMotion ? '' : '[animation:etc-shimmer_16s_linear_infinite]',
                ].join(' ')}
            />

            {/* Low-contrast grid texture */}
            <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]" />

            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:url('/noise.png')] [background-repeat:repeat]" />

            {/* Bottom anchor */}
            <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-[radial-gradient(1200px_400px_at_50%_100%,rgba(34,197,94,0.10),transparent_60%)]" />

            {/* Vignette for legibility */}
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black_75%)] bg-black/35" />
        </div>
    );
}
