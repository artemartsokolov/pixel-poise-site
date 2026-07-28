import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, usePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

/* How long the outgoing page is allowed to linger before it is removed whether
   or not anything animated. Slightly longer than the CSS fade so the two overlap. */
const EXIT_MS = 420;

/* Where the reader actually was, tracked outside React.

   The first version read window.scrollY during render, which is wrong in a way
   that only shows up once you are scrolled: scrolling does not re-render, so the
   value was whatever it had been at the last render — nearly always 0 — and the
   outgoing page snapped to its own top instead of staying put. */
let lastScrollY = 0;
if (typeof window !== "undefined") {
    lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => { lastScrollY = window.scrollY; }, { passive: true });
}

/* One route, mounted alongside its neighbour so the two genuinely cross-fade.

   Both fades are CSS, not JS tweens, and that is the whole point rather than a
   preference. A JS tween that never ticks — a backgrounded tab, throttled
   requestAnimationFrame — is stuck at its *start* value, so the page arriving
   would sit at opacity 0 and the page leaving would stay opaque on top of it. A
   CSS animation with fill-mode forwards ends at its final value even if every
   frame in between was dropped.

   AnimatePresence is used only to keep the outgoing subtree mounted; the removal
   is driven by a timer calling safeToRemove, not by an animation finishing. The
   lightbox in this project carries a comment about an exit tween that failed to
   complete and left a full-screen node swallowing every click — a whole page is
   a bigger version of that, so nothing here waits on an animation to clean up.

   The outgoing copy is taken out of flow (two pages in normal flow would stack
   vertically) and pinned at -scrollY, so it appears frozen where the reader was
   looking instead of snapping to its own top. pointer-events: none means that
   even in the worst case it is inert. */
const Fading = ({ children }: { children: ReactNode }) => {
    const [isPresent, safeToRemove] = usePresence();
    /* Latched on the first render where this copy is the outgoing one, and never
       recomputed. ScrollToTop's window.scrollTo fires a scroll event, which resets
       the tracker to 0 — so any later re-render of this same node would otherwise
       re-pin it to the top mid-fade. */
    const frozenAt = useRef<number | null>(null);
    if (!isPresent && frozenAt.current === null) frozenAt.current = lastScrollY;

    useEffect(() => {
        if (isPresent) return;
        const t = setTimeout(() => safeToRemove?.(), EXIT_MS);
        return () => clearTimeout(t);
    }, [isPresent, safeToRemove]);

    return (
        <div
            className={isPresent ? "page-enter" : "page-exit"}
            style={
                isPresent
                    ? undefined
                    : {
                          position: "fixed",
                          left: 0,
                          right: 0,
                          top: -(frozenAt.current ?? 0),
                          pointerEvents: "none",
                          zIndex: 40,
                      }
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
            <Fading key={location.pathname}>{children}</Fading>
        </AnimatePresence>
    );
};

export default PageTransition;
