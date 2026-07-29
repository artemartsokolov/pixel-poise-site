import { Maximize2, Play } from "lucide-react";

/* What a framed shot is, before anyone touches it.

   A video shot played on hover and was otherwise indistinguishable from a
   screenshot: the same "Expand" pill sat on both, so the only way to find out a
   frame moved was to find it with the pointer — and on a touch screen there is no
   pointer to find it with, so a video read as a still for the whole visit.

   At rest a video now says it is one. Once the pointer is on it the video is
   already playing and has said that itself, so the pill switches to the more
   useful thing: that the frame opens full size. Screenshots keep saying that all
   along, which is why the label was always-visible rather than hover-only in the
   first place.

   Position and tint stay with the caller — the browser frame tucks this inside its
   bottom-right corner, the phone frame hangs it off the bottom edge. */
const ShotBadge = ({ isVideo, className = "" }: { isVideo: boolean; className?: string }) => (
    <span
        className={`pointer-events-none absolute flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm transition-colors duration-300 ${className}`}
    >
        {isVideo ? (
            <>
                <span className="flex items-center gap-1.5 group-hover:hidden group-focus-visible:hidden">
                    {/* Filled, not the default stroke: a 10px outlined triangle
                        reads as a smudge. */}
                    <Play className="h-2.5 w-2.5 fill-current" />
                    Video
                </span>
                <span className="hidden items-center gap-1.5 group-hover:flex group-focus-visible:flex">
                    <Maximize2 className="h-2.5 w-2.5" />
                    Expand
                </span>
            </>
        ) : (
            <span className="flex items-center gap-1.5">
                <Maximize2 className="h-2.5 w-2.5" />
                Expand
            </span>
        )}
    </span>
);

export default ShotBadge;
