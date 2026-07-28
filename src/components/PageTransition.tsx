import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, usePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useFirstPaint } from "@/hooks/useFirstPaint";

/* Matches the 0.7s in the reference. The outgoing copy is removed on this timer
   rather than on an animation finishing, and the incoming copy drops back into
   normal flow on it too. */
const TRANSITION_MS = 700;

/* Where the reader actually was, tracked outside React.

   Reading window.scrollY during render is wrong in a way that only shows up once
   you are scrolled: scrolling does not re-render, so the value is whatever it was
   at the last one — nearly always 0 — and the outgoing page snaps to its own top
   instead of staying put. */
let lastScrollY = 0;
if (typeof window !== "undefined") {
    lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => { lastScrollY = window.scrollY; }, { passive: true });
}

/* One route, animated against its neighbour.

   The effect is the one from the reference implementation, read out of its source
   rather than guessed at: the outgoing page recedes — up 30vh, down to 0.8 scale
   and 0.4 opacity — while the incoming page is uncovered by a clip sweeping up
   from the bottom edge. Not a cross-fade, which is what this was before and why
   it looked like nothing.

   The incoming page has to be pinned to the viewport for the length of the sweep.
   clip-path insets are relative to the element's own box, and in normal flow that
   box is the whole document, so the clip would crawl down thousands of pixels
   instead of across one screen. It returns to normal flow on the timer, which is
   also what makes it scrollable again.

   Both animations are CSS, not JS tweens, and that is load-bearing rather than a
   preference. A tween that never ticks — backgrounded tab, throttled rAF — sits
   at its start value, which here would mean an incoming page clipped to nothing.
   A CSS animation with fill-mode forwards lands on its final value even if every
   frame between was dropped. For the same reason the outgoing copy is removed by
   a timer, never by an animation completing: the lightbox in this project has a
   comment about an exit tween that failed to finish and left a full-screen node
   swallowing every click. */
const Staged = ({ children }: { children: ReactNode }) => {
    const [isPresent, safeToRemove] = usePresence();
    const firstPaint = useFirstPaint();

    /* Latched once: window.scrollTo fires a scroll event that resets the tracker,
       so recomputing on a later re-render would re-pin this copy to the top. */
    const frozenAt = useRef<number | null>(null);
    if (!isPresent && frozenAt.current === null) frozenAt.current = lastScrollY;

    /* The page a session opens on has nothing to be revealed from behind. */
    const [revealing, setRevealing] = useState(() => isPresent && !firstPaint);

    useEffect(() => {
        if (!isPresent) {
            const t = setTimeout(() => safeToRemove?.(), TRANSITION_MS);
            return () => clearTimeout(t);
        }
        if (!revealing) return;
        const t = setTimeout(() => setRevealing(false), TRANSITION_MS);
        return () => clearTimeout(t);
    }, [isPresent, revealing, safeToRemove]);

    if (!isPresent) {
        return (
            <div
                className="page-recede"
                style={{
                    position: "fixed",
                    left: 0,
                    right: 0,
                    top: -(frozenAt.current ?? 0),
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            className={revealing ? "page-reveal" : undefined}
            style={
                revealing
                    ? { position: "fixed", inset: 0, height: "100vh", zIndex: 10, overflow: "hidden" }
                    : undefined
            }
        >
            {children}
        </div>
    );
};

const PageTransition = ({ children }: { children: ReactNode }) => {
    const location = useLocation();

    return (
        <AnimatePresence initial={false}>
            {/* A new key is what marks the previous subtree as leaving. */}
            <Staged key={location.pathname}>{children}</Staged>
        </AnimatePresence>
    );
};

export default PageTransition;
