import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/* ── Premium easing curve (matches Hero.tsx) ── */
const smooth = [0.22, 1, 0.36, 1] as const;

/* The one control every case page needs to keep reachable, so it is fixed at the
   top — which means on some pages it begins over a dark cover photo and ends over
   the page's own light background, and no single colour serves both. text-gray-600
   on the Datox cover, the City of London at dusk, simply is not there.

   So on those pages it follows what is under it: white with a soft dark halo while
   over the photo, the page's grey once past it. The halo rather than a scrim or a
   pill, so nothing new appears in the corner; a drop-shadow filter rather than a
   text-shadow, because the arrow is an SVG and a text-shadow would skip it.

   Which cover counts as dark is the page's own business, not something to guess
   from its height. Datox and FlowHealth open on a dusk skyline and an unlit film
   set. Stayte's cover is a near-white canvas and Navian's a pale wall, where white
   is the unreadable one and the ordinary grey is right — so they say nothing, and
   no scroll listener runs for them at all. */
const BackLink = ({ darkCoverVh = 0 }: { darkCoverVh?: number }) => {
    const [overDarkCover, setOverDarkCover] = useState(darkCoverVh > 0);

    useEffect(() => {
        if (!darkCoverVh) return;

        /* The link sits 32px down and is one line tall; it is clear of the photo
           once that whole line has passed the photo's bottom edge. */
        const update = () =>
            setOverDarkCover(window.scrollY < (window.innerHeight * darkCoverVh) / 100 - 56);

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [darkCoverVh]);

    return (
        <div className="fixed top-8 left-8 z-50 overflow-hidden">
            <motion.div
                initial={{ x: "-110%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.3, duration: 0.7, ease: smooth }}
            >
                <Link
                    to="/"
                    data-return
                    className={`flex items-center gap-2 text-sm font-light transition-colors ${
                        overDarkCover ? "text-white hover:text-white/70" : "text-gray-600 hover:text-[#141414]"
                    }`}
                    style={overDarkCover ? { filter: "drop-shadow(0 1px 10px rgba(0,0,0,0.6))" } : undefined}
                >
                    <ArrowLeft className="w-4 h-4" />
                    All Work
                </Link>
            </motion.div>
        </div>
    );
};

export default BackLink;
