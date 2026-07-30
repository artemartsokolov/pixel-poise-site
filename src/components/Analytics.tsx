import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { enterPath } from "@/lib/analytics";

/* Renders nothing. Mounted once, outside PageTransition, so AnimatePresence
   swapping the page content on every route change doesn't remount this alongside
   it — enterPath's own duration bookkeeping is module state, not component state,
   and only needs to be told when the path changes, not re-armed each time. */
const Analytics = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        enterPath(pathname);
    }, [pathname]);

    return null;
};

export default Analytics;
