import { useRef } from "react";

/* True only for the first page rendered in a session.

   The hero curtains — a full-bleed panel that wipes up off the image — were
   written for a hard page load, where the browser has shown nothing until React
   mounts and the wipe is the first thing you see. Once routes cross-fade into
   each other that same curtain covers the incoming page for 1.2s, so the
   cross-fade shows a flat panel instead of the page arriving, and reads as a
   flash rather than a transition.

   Module scope on purpose: the flag has to survive unmounting, which is exactly
   what a route change does. */
let consumed = false;

export const useFirstPaint = () => {
    const isFirst = useRef<boolean | null>(null);
    if (isFirst.current === null) {
        isFirst.current = !consumed;
        consumed = true;
    }
    return isFirst.current;
};
