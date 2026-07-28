import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    /* Layout effect, not effect: useEffect runs after paint, so a reader who was
       scrolled down saw one frame of the incoming page at that offset — its middle
       — before the reset landed. This runs before the browser paints. */
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
