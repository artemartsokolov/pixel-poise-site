import { useLocation } from "react-router-dom";

/* True while the session is still on the page it was opened on.

   Only the hero curtains read this now, and only they should. A curtain is a
   full-bleed panel that wipes off the image, written for a hard page load where
   the browser has shown nothing until React mounts. Replay it on arrival from
   another route and it covers the very reveal that just uncovered the page —
   which is exactly how this transition came to look like nothing at all.

   The masked text entrances are deliberately *not* gated: the reference starts
   its own title and paragraph reveals 0.32s into a 0.7s clip, so the arriving
   page is still composing itself as it lands. A page that arrives finished and
   frozen is the difference between the effect and a mechanically identical
   animation that reads as flat.

   Keyed on the URL rather than a consume-once flag. A flag is fragile in a way
   that is invisible until it isn't: anything that mounts a component twice —
   StrictMode in development, a remount from a key change — burns it, and the
   real mount then reads false. Comparing against the entry path cannot be
   burned, and `left` makes it one-way, so coming back to the entry path later
   is still treated as a navigation. */
const entryPath = window.location.pathname;
let left = false;

export const useFirstPaint = () => {
    const { pathname } = useLocation();
    if (pathname !== entryPath) left = true;
    return !left && pathname === entryPath;
};
