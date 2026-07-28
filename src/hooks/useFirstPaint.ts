import { useLocation } from "react-router-dom";

/* True while the session is still on the page it was opened on.

   The hero curtains and the title reveals were written for a hard page load,
   where the browser has shown nothing until React mounts and the wipe is the
   first thing you see. Once routes cross-fade into each other, replaying all of
   that on arrival puts three things on the same 400ms: the scroll reset, the
   curtain, and the fade. The page should arrive already composed and let the
   cross-fade be the only thing moving.

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
