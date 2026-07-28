import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type Shot = {
    /** still shown in the page frame, and as the video poster */
    src: string;
    alt: string;
    /** shown in the caption bar, e.g. the in-product URL */
    label?: string;
    /** when present the lightbox plays this instead of showing the still.
        Deliberately not loaded until the lightbox opens — the stills carry
        the page, the video is the reward for clicking. */
    video?: string;
};

interface LightboxProps {
    shots: Shot[];
    /** index of the open shot, or null when closed */
    index: number | null;
    onClose: () => void;
    onIndex: (next: number) => void;
}

/* Full-size viewer for dense UI screenshots — they are unreadable at the size
   the case study lays them out, so the real resolution lives one click away. */
const Lightbox = ({ shots, index, onClose, onIndex }: LightboxProps) => {
    const isOpen = index !== null;

    const step = useCallback(
        (delta: number) => {
            if (index === null) return;
            onIndex((index + delta + shots.length) % shots.length);
        },
        [index, shots.length, onIndex],
    );

    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
        };
        window.addEventListener("keydown", onKey);

        // keep the page from scrolling behind the overlay
        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = overflow;
        };
    }, [isOpen, onClose, step]);

    const shot = index === null ? null : shots[index];

    if (!shot) return null;

    /* Rendered through a portal: any ancestor with a transform (framer-motion
       sets one on almost every section here) becomes the containing block for
       position: fixed, which would trap the overlay inside that section.

       No exit animation on purpose. AnimatePresence kept the node mounted when
       the exit tween did not complete — a transparent full-screen overlay that
       still swallows every click. Unmounting straight away costs a 200ms fade
       and removes the failure mode entirely. */
    return createPortal(
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-[#F5F3EE]/95 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    /* pointerEvents in exit is the safety net: if the exit animation
                       stalls (throttled rAF in a background tab), the leftover node stays
                       click-through instead of deadening the whole page. */
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={shot.alt}
                >
                    {/* top bar */}
                    <div
                        className="flex items-center justify-between px-5 py-4 text-[#141414]/70"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="text-xs font-mono text-[#141414]/40">{shot.label}</span>
                        <div className="flex items-center gap-4">
                            <span className="text-xs tabular-nums text-[#141414]/40">
                                {index! + 1} / {shots.length}
                            </span>
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="rounded-full p-1.5 transition-colors hover:bg-[#141414]/10 hover:text-[#141414]"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* image */}
                    <div className="flex flex-1 items-center justify-center px-4 pb-2 min-h-0">
                        {shot.video ? (
                            <motion.video
                                key={shot.video}
                                src={shot.video}
                                poster={shot.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                className="max-h-full max-w-full object-contain shadow-2xl"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.25 }}
                                onClick={(e) => e.stopPropagation()}
                            />
                        ) : (
                            <motion.img
                                key={shot.src}
                                src={shot.src}
                                alt={shot.alt}
                                className="max-h-full max-w-full object-contain shadow-2xl"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.25 }}
                                onClick={(e) => e.stopPropagation()}
                            />
                        )}
                    </div>

                    {/* bottom bar */}
                    <div
                        className="flex items-center justify-center gap-6 px-5 py-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => step(-1)}
                            aria-label="Previous"
                            className="rounded-full p-2 text-[#141414]/60 transition-colors hover:bg-[#141414]/10 hover:text-[#141414]"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <p className="max-w-xl text-center text-sm font-light text-[#141414]/60">{shot.alt}</p>
                        <button
                            onClick={() => step(1)}
                            aria-label="Next"
                            className="rounded-full p-2 text-[#141414]/60 transition-colors hover:bg-[#141414]/10 hover:text-[#141414]"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
        </motion.div>,
        document.body,
    );
};

export default Lightbox;
