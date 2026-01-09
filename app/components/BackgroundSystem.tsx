"use client";

import { motion, useReducedMotion } from "framer-motion";

type Lane = {
    top: string;   // %
    left: string;  // %
    len: string;   // %
    angle: number; // degrees
    dur: number;
    delay: number;
    reverse: boolean;
};

type Uplink = {
    top: string;   // %
    left: string;  // %
    len: string;   // %
    angle: number; // degrees
    dur: number;
    delay: number;
};

type PulseHub = {
    top: string;  // %
    left: string; // %
    dur: number;
    delay: number;
};

type AnchorSpec = {
    top: string;
    left: string;
    size: number;
    tint: "white" | "etc";
    phase: number; // seconds offset
};

function pct(n: number) {
    return `${n}%`;
}

// Parse "-22%" -> -22
function parsePct(s: string) {
    const v = Number(String(s).replace("%", ""));
    return Number.isFinite(v) ? v : 0;
}

// Place anchors along a lane (in screen space) so they visually "sit on" the filament.
function anchorsForLane(l: Lane, count: number, phaseBase: number): AnchorSpec[] {
    const top = parsePct(l.top);
    const left = parsePct(l.left);
    const len = parsePct(l.len);

    // clamp: if len isn't parseable, avoid placing garbage
    if (!Number.isFinite(len) || len <= 0) return [];

    // We rotate the whole lane container; anchors go inside that container at x positions.
    // We'll approximate this by placing anchors in the lane container coordinate system:
    // left/top remain lane container origin; anchors are placed at x% positions within that lane.
    // To do that in DOM, we render anchors inside the rotated lane wrapper with left: `${x}%`.
    // So anchors returned here are relative to lane container (we’ll render them accordingly).
    // We'll encode relative x as left, and use top = "50%" within lane wrapper.
    // But since AnchorSpec uses absolute positions, we’ll instead return markers with a special flag.
    // Simpler: we’ll render anchors INSIDE the lane wrapper directly (below), no absolute conversion needed.
    // => This helper is not used for DOM coords; we’ll generate x stops in-place.

    // (kept for structure; actual anchor rendering happens inside lane map)
    return Array.from({ length: count }).map((_, i) => ({
        top: pct(top),
        left: pct(left + (len * (i + 1)) / (count + 1)),
        size: i % 3 === 0 ? 3 : 2,
        tint: i % 7 === 0 ? "etc" : "white",
        phase: phaseBase + i * 0.35,
    }));
}

export default function BackgroundSystem() {
    const reduceMotion = useReducedMotion();

    const lanes: readonly Lane[] = [
        { top: "18%", left: "-22%", len: "42%", angle: -6, dur: 9.2, delay: 0.0, reverse: false },
        { top: "30%", left: "-26%", len: "36%", angle: 4, dur: 12.4, delay: 1.1, reverse: false },
        { top: "44%", left: "-20%", len: "46%", angle: -10, dur: 10.6, delay: 2.0, reverse: false },
        { top: "58%", left: "-28%", len: "40%", angle: 7, dur: 14.2, delay: 0.8, reverse: false },
        { top: "72%", left: "-24%", len: "44%", angle: -4, dur: 13.1, delay: 2.6, reverse: false },

        // Right-side (reverse direction)
        { top: "26%", left: "62%", len: "40%", angle: 8, dur: 11.6, delay: 0.6, reverse: true },
        { top: "52%", left: "58%", len: "46%", angle: -7, dur: 14.8, delay: 1.9, reverse: true },
        { top: "70%", left: "68%", len: "36%", angle: 5, dur: 13.4, delay: 3.0, reverse: true },
    ] as const;

    const uplinks: readonly Uplink[] = [
        { top: "-22%", left: "24%", len: "40%", angle: 2, dur: 11.4, delay: 1.1 },
        { top: "-26%", left: "78%", len: "46%", angle: -3, dur: 13.8, delay: 0.4 },
    ] as const;

    // Place hubs so they align with lanes visually (near where filaments pass)
    const hubs: readonly PulseHub[] = [
        { top: "18%", left: "22%", dur: 5.8, delay: 0.2 },
        { top: "44%", left: "74%", dur: 7.2, delay: 1.1 },
        { top: "72%", left: "34%", dur: 6.6, delay: 0.7 },
        { top: "60%", left: "58%", dur: 8.2, delay: 2.0 },
    ] as const;

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* base */}
            <div className="absolute inset-0 bg-[#0B0F14]" />

            {/* atmosphere breathing */}
            <motion.div
                className="absolute inset-0 [background:radial-gradient(1100px_680px_at_18%_12%,rgba(51,255,153,0.10),transparent_62%),radial-gradient(920px_560px_at_86%_18%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(1200px_820px_at_55%_92%,rgba(51,255,153,0.08),transparent_70%)]"
                animate={reduceMotion ? undefined : { opacity: [0.62, 0.92, 0.62] }}
                transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* ambient fabric (dot lattice; slow drift) */}
            <motion.div
                className="absolute inset-0 opacity-[0.11]"
                style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                    maskImage: "radial-gradient(ellipse at center, black 44%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 44%, transparent 80%)",
                }}
                animate={
                    reduceMotion
                        ? undefined
                        : { backgroundPositionX: ["0px", "22px", "0px"], backgroundPositionY: ["0px", "16px", "0px"] }
                }
                transition={reduceMotion ? undefined : { duration: 26, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* subtle parallax depth layer */}
            <motion.div
                className="absolute -inset-[14%] opacity-[0.08]"
                style={{
                    backgroundImage: "radial-gradient(rgba(51,255,153,0.22) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    filter: "blur(0.35px)",
                    maskImage: "radial-gradient(ellipse at center, black 38%, transparent 78%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 38%, transparent 78%)",
                }}
                animate={reduceMotion ? undefined : { x: ["-2.2%", "2.2%", "-2.2%"], y: ["-1.4%", "1.4%", "-1.4%"] }}
                transition={reduceMotion ? undefined : { duration: 34, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* hubs (static core + breathing) */}
            <div className="absolute inset-0">
                {hubs.map((h, idx) => (
                    <motion.div
                        key={`hub-core-${idx}`}
                        className="absolute rounded-full"
                        style={{
                            left: h.left,
                            top: h.top,
                            width: 6,
                            height: 6,
                            transform: "translate(-50%, -50%)",
                            background: "rgba(51,255,153,0.55)",
                            boxShadow: "0 0 24px rgba(51,255,153,0.14)",
                        }}
                        animate={reduceMotion ? undefined : { opacity: [0.25, 0.7, 0.25] }}
                        transition={reduceMotion ? undefined : { duration: 7 + idx * 0.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* network traffic (filaments) + aligned anchors along each lane */}
            {!reduceMotion &&
                lanes.map((l, idx) => {
                    const from = l.reverse ? "110%" : "-10%";
                    const to = l.reverse ? "-10%" : "110%";

                    // anchors per lane (aligned, not random)
                    // More lanes => more anchors, but still subtle.
                    const anchorStops = [14, 32, 52, 70, 86]; // % along the lane container
                    const phaseBase = idx * 0.55;

                    return (
                        <div
                            key={`lane-${idx}`}
                            className="absolute"
                            style={{
                                left: l.left,
                                top: l.top,
                                width: l.len,
                                height: 14,
                                transform: `rotate(${l.angle}deg)`,
                                transformOrigin: "left center",
                            }}
                        >
                            {/* faint base lane hint */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                                    filter: "blur(0.35px)",
                                    opacity: 0.30,
                                }}
                            />

                            {/* anchors sitting on the lane (breathe so they don’t read as dead pixels) */}
                            {anchorStops.map((x, aIdx) => {
                                const isHubish = aIdx === 1 || aIdx === 3; // a couple get ETC tint
                                const size = aIdx % 2 === 0 ? 2 : 3;

                                return (
                                    <motion.div
                                        key={`a-${idx}-${aIdx}`}
                                        className="absolute top-1/2 -translate-y-1/2 rounded-full"
                                        style={{
                                            left: `${x}%`,
                                            width: size,
                                            height: size,
                                            background: isHubish ? "rgba(51,255,153,0.42)" : "rgba(255,255,255,0.22)",
                                            boxShadow: isHubish ? "0 0 16px rgba(51,255,153,0.10)" : "none",
                                        }}
                                        animate={reduceMotion ? undefined : { opacity: [0.10, 0.55, 0.10] }}
                                        transition={
                                            reduceMotion
                                                ? undefined
                                                : { duration: 7.5 + (aIdx % 3) * 1.1, repeat: Infinity, ease: "easeInOut", delay: phaseBase + aIdx * 0.25 }
                                        }
                                    />
                                );
                            })}

                            {/* traveling filament */}
                            <motion.div
                                className="absolute top-1/2 h-[2px] -translate-y-1/2"
                                style={{
                                    width: "46%",
                                    background:
                                        "linear-gradient(90deg, rgba(51,255,153,0.0), rgba(51,255,153,0.60), rgba(51,255,153,0.0))",
                                    filter: "blur(0.4px)",
                                }}
                                initial={{ x: from, opacity: 0 }}
                                animate={{ x: [from, to], opacity: [0, 0.75, 0.75, 0] }}
                                transition={{
                                    duration: l.dur,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: l.delay,
                                    times: [0, 0.18, 0.78, 1],
                                }}
                            />
                        </div>
                    );
                })}

            {/* uplinks (vertical-ish filaments) + aligned anchors */}
            {!reduceMotion &&
                uplinks.map((u, idx) => {
                    const anchorStops = [18, 40, 62, 82]; // % down the uplink container
                    const phaseBase = 0.8 + idx * 0.6;

                    return (
                        <div
                            key={`uplink-${idx}`}
                            className="absolute"
                            style={{
                                left: u.left,
                                top: u.top,
                                width: 14,
                                height: u.len,
                                transform: `rotate(${u.angle}deg)`,
                                transformOrigin: "center top",
                            }}
                        >
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)",
                                    filter: "blur(0.35px)",
                                    opacity: 0.28,
                                }}
                            />

                            {anchorStops.map((y, aIdx) => {
                                const isEtc = aIdx === 2;
                                const size = aIdx % 2 === 0 ? 2 : 3;

                                return (
                                    <motion.div
                                        key={`ua-${idx}-${aIdx}`}
                                        className="absolute left-1/2 -translate-x-1/2 rounded-full"
                                        style={{
                                            top: `${y}%`,
                                            width: size,
                                            height: size,
                                            background: isEtc ? "rgba(51,255,153,0.40)" : "rgba(255,255,255,0.20)",
                                            boxShadow: isEtc ? "0 0 16px rgba(51,255,153,0.10)" : "none",
                                        }}
                                        animate={reduceMotion ? undefined : { opacity: [0.10, 0.55, 0.10] }}
                                        transition={
                                            reduceMotion
                                                ? undefined
                                                : { duration: 8.0 + (aIdx % 3) * 1.0, repeat: Infinity, ease: "easeInOut", delay: phaseBase + aIdx * 0.25 }
                                        }
                                    />
                                );
                            })}

                            <motion.div
                                className="absolute left-1/2 w-[2px] -translate-x-1/2"
                                style={{
                                    height: "46%",
                                    background:
                                        "linear-gradient(to bottom, rgba(51,255,153,0.0), rgba(51,255,153,0.60), rgba(51,255,153,0.0))",
                                    filter: "blur(0.4px)",
                                }}
                                initial={{ y: "-10%", opacity: 0 }}
                                animate={{ y: ["-10%", "110%"], opacity: [0, 0.75, 0.75, 0] }}
                                transition={{
                                    duration: u.dur,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: u.delay,
                                    times: [0, 0.18, 0.78, 1],
                                }}
                            />
                        </div>
                    );
                })}

            {/* processing pulses near hubs */}
            {!reduceMotion &&
                hubs.map((h, idx) => (
                    <motion.div
                        key={`pulse-${idx}`}
                        className="absolute rounded-full border border-emerald-300/30"
                        style={{
                            left: h.left,
                            top: h.top,
                            width: 16,
                            height: 16,
                            transform: "translate(-50%, -50%)",
                            boxShadow: "0 0 28px rgba(51,255,153,0.10)",
                        }}
                        animate={{ opacity: [0, 0.6, 0], scale: [1, 3.4, 5.0] }}
                        transition={{ duration: h.dur, repeat: Infinity, ease: "easeOut", delay: h.delay }}
                    />
                ))}

            {/* scan shimmer */}
            <div className="etc-scan absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_bottom,transparent,rgba(255,255,255,0.14),transparent)] [background-size:100%_260px]" />

            {/* noise */}
            <div className="absolute inset-0 opacity-[0.09] mix-blend-overlay [background-image:url('/noise.png')] [background-repeat:repeat]" />

            {/* bottom anchor */}
            <div className="absolute inset-x-0 bottom-0 h-[46vh] bg-[radial-gradient(1200px_420px_at_50%_100%,rgba(51,255,153,0.10),transparent_62%)]" />

            {/* vignette */}
            <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.66)_100%)]" />
        </div>
    );
}
