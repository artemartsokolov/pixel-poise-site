import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    /* Layout effect, not effect: useEffect runs after paint, so a reader who was
       scrolled down saw one frame of the incoming page at that offset — its middle
       — before the reset landed. This runs before the browser paints. */
    useLayoutEffect(() => {
        /* behavior: "instant" is required, not cosmetic. html carries
           scroll-behavior: smooth so the hero's in-page anchors glide, and that
           makes scrollTo animate — a route change then scrolled the incoming page
           from the old offset up to its top, showing every section on the way. */
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
