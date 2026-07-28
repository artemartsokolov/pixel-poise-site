import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
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
   time AnimatePresence renders the copy as leaving, the scroll may already have
   been reset to zero, and the outgoing page then snaps to its own top instead of
   staying where the reader left it. Tracking scroll events instead loses the same
   race from the other side: they are dispatched during the rendering steps, which
   a backgrounded tab suspends entirely. */
let scrollAtNavigation = 0;

/* Closing a case should put the reader back in the Work list where they left it,
   rather than at the top of a page they have already scrolled through. Opening one
   must still start at the top: a case is a designed sequence, and dropping someone
   into the middle of it is worse than making them scroll.

   Nothing available at navigation time distinguishes those two. Both are a push to
   a new history entry, so react-router's navigation type reads PUSH for each, and
   the URLs are the same pair in either direction. So the links declare it:
   [data-return] marks the ones that close a page. Browser Back counts as one too. */
const scrollByPath = new Map<string, number>();
let returning = false;

/* Which page is being left, tracked rather than read off the URL. window.location
   is only still the outgoing page during a click; popstate fires *after* the
   address has changed, so reading it there filed the case's offset under the home
   page's path and closing a case restored the wrong number. */
let currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

if (typeof window !== "undefined") {
    const capture = (returned: boolean) => {
        scrollAtNavigation = window.scrollY;
        scrollByPath.set(currentPath, window.scrollY);
        returning = returned;
    };
    document.addEventListener(
        "click",
        (e) => capture(!!(e.target as Element | null)?.closest?.("[data-return]")),
        true,
    );
    window.addEventListener("popstate", () => capture(true), true);
}

/* Deliberately a pure read — nothing is consumed here. It is called from a state
   initialiser, which React is free to run twice, and a consume-once flag would be
   burned by the discarded call: the real mount would then restore nothing. The map
   needs no clearing either, since every navigation click rewrites the entry for the
   page it leaves, and `returning` is reset by the next click. */
const returnScrollFor = (path: string) => (returning ? scrollByPath.get(path) ?? 0 : 0);

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
const Staged = ({ children, path }: { children: ReactNode; path: string }) => {
    const [isPresent, safeToRemove] = usePresence();
    const firstPaint = useFirstPaint();

    /* Latched once, so a re-render part-way through the animation cannot re-pin
       this copy against a newer navigation's offset. */
    const frozenAt = useRef<number | null>(null);
    if (!isPresent && frozenAt.current === null) frozenAt.current = scrollAtNavigation;

    /* The page a session opens on has nothing to be revealed from behind. */
    const [revealing, setRevealing] = useState(() => isPresent && !firstPaint);

    /* Resolved at mount, while `returning` still describes the navigation that
       brought this copy into being. */
    const [restoreTo] = useState(() => (isPresent ? returnScrollFor(path) : 0));

    /* Held in a ref so the removal timer can depend on the presence flag and
       nothing else. framer-motion returns a fresh callback each render, and with
       it in the dependency array every re-render of this subtree cleared the
       pending timer and started a fresh 700ms — which is how a translucent copy
       of the page just left ended up lying on top of the one that arrived. */
    const remove = useRef(safeToRemove);
    useEffect(() => { remove.current = safeToRemove; }, [safeToRemove]);

    useEffect(() => {
        if (isPresent) return;
        const t = setTimeout(() => remove.current?.(), TRANSITION_MS);
        return () => clearTimeout(t);
    }, [isPresent]);

    useEffect(() => {
        if (!isPresent || !revealing) return;
        const t = setTimeout(() => setRevealing(false), TRANSITION_MS);
        return () => clearTimeout(t);
    }, [isPresent, revealing]);

    /* Where the page actually starts. This is the only place that decides it, which
       is the point: two components both calling scrollTo on a route change is how
       the scroll ends up somewhere neither of them intended.

       It can only be a real scroll once the page is back in normal flow — while the
       reveal runs, the page is a fixed one-viewport box and the document has no
       height to scroll. Until then the identical offset is held by the negative
       margin below, so the two are the same picture and the swap is invisible.

       behavior: "instant" is required, not cosmetic. html carries scroll-behavior:
       smooth so the hero's in-page anchors glide, and that makes every scrollTo
       animate — a route change then scrolled the arriving page from the old offset
       up to its top, taking the reader on a tour of every section on the way.

       Layout effect, not effect: useEffect runs after paint, so there would be one
       frame at the wrong offset before this landed. */
    useLayoutEffect(() => {
        if (!isPresent || revealing) return;
        window.scrollTo({ top: restoreTo, left: 0, behavior: "instant" });
    }, [isPresent, revealing, restoreTo]);

    const scrolledTo = frozenAt.current ?? 0;

    /* One tree for all three states rather than an early return per state. Changing
       the shape of the tree between them would remount the page on every hand-off,
       restarting each entrance animation — which is visible as the outgoing copy
       replaying its titles as it recedes. */
    return (
        <div
            className={!isPresent ? "page-recede" : revealing ? "page-reveal" : undefined}
            style={
                !isPresent
                    ? {
                          position: "fixed",
                          left: 0,
                          right: 0,
                          top: -scrolledTo,
                          pointerEvents: "none",
                          zIndex: 1,
                          /* Shrink about the middle of what the reader is looking
                             at. This copy is offset by -scrollY, so the viewport
                             centre sits that much further down its own box. */
                          transformOrigin: `50% ${scrolledTo + window.innerHeight / 2}px`,
                          /* Opaque, so the black backdrop shows only where this
                             copy has pulled away from the edges — not through any
                             gap between the page's own sections. */
                          background: "hsl(var(--background))",
                      }
                    : revealing
                      ? { position: "fixed", inset: 0, height: "100vh", zIndex: 10, overflow: "hidden" }
                      : undefined
            }
        >
            {/* The clip has to be measured against a box exactly one viewport tall,
                so the offset cannot live on the element being clipped — it is the
                content inside that shifts. A margin rather than a transform: a
                transformed ancestor becomes the containing block for fixed
                descendants, and every case page has a fixed back-link. */}
            <div style={revealing && restoreTo ? { marginTop: -restoreTo } : undefined}>
                {children}
            </div>
        </div>
    );
};

/* The black layer both copies sit over, present only while a transition is
   running — the site's own background is light, and leaving black underneath it
   permanently would show on every rubber-band overscroll. Driven off the pathname
   rather than off AnimatePresence's child count, which is not something a parent
   can read.

   Its own component with its own state, deliberately. Holding this in
   PageTransition meant each flip re-rendered AnimatePresence and both copies of
   the page mid-transition — cheap in itself, but enough to disturb anything
   downstream that keys off a render. */
const Backdrop = () => {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);
    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }
        setVisible(true);
        const t = setTimeout(() => setVisible(false), TRANSITION_MS);
        return () => clearTimeout(t);
    }, [pathname]);

    return visible ? <div className="page-backdrop" aria-hidden /> : null;
};

const PageTransition = ({ children }: { children: ReactNode }) => {
    const location = useLocation();

    /* Runs once each navigation settles, so by the time the reader clicks or presses
       Back this names the page they are leaving. */
    useLayoutEffect(() => {
        currentPath = location.pathname;
    }, [location.pathname]);

    return (
        <>
            <Backdrop />
            <AnimatePresence initial={false}>
                {/* A new key is what marks the previous subtree as leaving. The path
                    is also passed as a prop, because the leaving copy needs to know
                    which page it *is* — useLocation inside it would already be
                    reporting the one that replaced it. */}
                <Staged key={location.pathname} path={location.pathname}>
                    {children}
                </Staged>
            </AnimatePresence>
        </>
    );
};

export default PageTransition;
