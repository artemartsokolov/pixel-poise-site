import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, usePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

/* How long the outgoing page is allowed to linger before it is removed whether
   or not anything animated. Slightly longer than the CSS fade so the two overlap. */
const EXIT_MS = 420;

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
    /* Read on the last render before this copy becomes the outgoing one, while the
       window is still scrolled where the reader left it. */
    const frozenAt = useRef(0);
    if (isPresent) frozenAt.current = window.scrollY;

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
                          top: -frozenAt.current,
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
