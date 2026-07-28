import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, usePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useFirstPaint } from "@/hooks/useFirstPaint";

/* Matches the 0.7s in the reference. The outgoing copy is removed on this timer
   rather than on an animation finishing, and the incoming copy drops back into
   normal flow on it too. */
const TRANSITION_MS = 700;

/* Where the reader was when they navigated, captured outside React.

   Read at the last instant it is still knowable: a capture-phase click listener
   runs before React's own handler, so window.scrollY here is the outgoing page's
   offset with certainty. Everything later is a race that is quietly lost — by the
   time AnimatePresence renders the copy as leaving, ScrollToTop's layout effect
   may already have reset the scroll to zero, and the outgoing page then snaps to
   its own top instead of staying where the reader left it. Tracking scroll events
   instead loses the same race from the other side: they are dispatched during the
   rendering steps, which a backgrounded tab suspends entirely. */
let scrollAtNavigation = 0;
if (typeof window !== "undefined") {
    const capture = () => { scrollAtNavigation = window.scrollY; };
    document.addEventListener("click", capture, true);
    window.addEventListener("popstate", capture, true);
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

    /* Latched once, so a re-render part-way through the animation cannot re-pin
       this copy against a newer navigation's offset. */
    const frozenAt = useRef<number | null>(null);
    if (!isPresent && frozenAt.current === null) frozenAt.current = scrollAtNavigation;

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
        const scrolledTo = frozenAt.current ?? 0;
        return (
            <div
                className="page-recede"
                style={{
                    position: "fixed",
                    left: 0,
                    right: 0,
                    top: -scrolledTo,
                    pointerEvents: "none",
                    zIndex: 1,
                    /* Shrink about the middle of what the reader is looking at.
                       This copy is offset by -scrollY, so the viewport centre
                       sits that much further down its own box. */
                    transformOrigin: `50% ${scrolledTo + window.innerHeight / 2}px`,
                    /* Opaque, so the black backdrop shows only where this copy
                       has pulled away from the edges — not through any gap
                       between the page's own sections. */
                    background: "hsl(var(--background))",
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

    /* The black layer both copies sit over, present only while a transition is
       running — the site's own background is light, and leaving black underneath
       it permanently would show on every rubber-band overscroll. Driven off the
       pathname rather than off AnimatePresence's child count, which is not
       something a parent can read. */
    const [dimmed, setDimmed] = useState(false);
    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }
        setDimmed(true);
        const t = setTimeout(() => setDimmed(false), TRANSITION_MS);
        return () => clearTimeout(t);
    }, [location.pathname]);

    return (
        <>
            {dimmed && <div className="page-backdrop" aria-hidden />}
            <AnimatePresence initial={false}>
                {/* A new key is what marks the previous subtree as leaving. */}
                <Staged key={location.pathname}>{children}</Staged>
            </AnimatePresence>
        </>
    );
};

export default PageTransition;
