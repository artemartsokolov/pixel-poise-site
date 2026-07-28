import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

/* ── Premium easing curve (matches Hero.tsx) ── */
const smooth = [0.22, 1, 0.36, 1] as const;

/* Same 0.7s as a route change, and the same two animations: the gate recedes while
   the site is uncovered by a clip sweeping up. Opening the door should read as the
   same gesture as moving between pages, not as a separate mechanism. */
const TRANSITION_MS = 700;

/* The code is in the JavaScript bundle by construction — a Vite build ships it to
   the browser, and no amount of arranging changes that. This keeps a page private
   the way a door with a sign does, not the way a lock does: it stops someone who
   wanders in, and stops nobody who opens devtools. The Supabase images and videos
   are on public URLs and are reachable directly whatever happens here.

   Change it on the line below, or set VITE_ENTRY_CODE in Vercel to override it
   without touching the source. Any length works — the cells count themselves,
   though past six they wrap onto a second row on a narrow screen.

   Deliberately a word about nothing: it has to be sayable down a phone line and
   typed from memory, so no O against 0 and no I against 1, and nothing that hints
   at what it opens. */
const CODE = (import.meta.env.VITE_ENTRY_CODE || "ZENITH").toUpperCase();

const REMEMBERED = "sokolovartem.entry";

/* A link can carry the code so the person you sent it to never types anything:
   sokolovartem.vercel.app/?k=ZENITH opens straight through, while the bare domain
   still asks. The parameter is stripped from the address bar immediately after, so
   it does not survive a screenshot or a copied URL. */
const CODE_PARAM = "k";

const alreadyIn = () => {
    try {
        if (localStorage.getItem(REMEMBERED) === CODE) return true;
    } catch {
        /* Private browsing can refuse storage entirely; asking again is the
           correct fallback, not a crash. */
    }
    const fromLink = new URLSearchParams(window.location.search).get(CODE_PARAM);
    return fromLink?.toUpperCase() === CODE;
};

const remember = () => {
    try {
        localStorage.setItem(REMEMBERED, CODE);
    } catch {
        /* Then it asks again next visit. Nothing else breaks. */
    }
};

const stripCodeFromUrl = () => {
    const url = new URL(window.location.href);
    if (!url.searchParams.has(CODE_PARAM)) return;
    url.searchParams.delete(CODE_PARAM);
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
};

/* ── The gate itself ──
   Left-aligned on the site's own margins, the site's type scale, and the site's
   masked slide-up entrances. `still` renders it without any of that, for the copy
   that only exists to recede. */
const Panel = ({
    code,
    wrong,
    onChange,
    onSubmit,
    still = false,
}: {
    code: string;
    wrong: boolean;
    onChange?: (next: string) => void;
    onSubmit?: () => void;
    still?: boolean;
}) => {
    const input = useRef<HTMLInputElement>(null);
    const cells = [...CODE].map((_, i) => code[i] ?? "");

    /* The caret sits on the first empty cell, or rests on the last once full. */
    const active = Math.min(code.length, CODE.length - 1);

    return (
        <div className="min-h-screen bg-[#F5F3EE] text-[#141414] flex flex-col justify-between px-8 lg:px-16 py-10 lg:py-14">
            <div className="overflow-hidden">
                <motion.p
                    className="text-sm font-light text-gray-500"
                    initial={still ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.15, duration: 0.8, ease: smooth }}
                >
                    Artem Sokolov
                </motion.p>
            </div>

            <div className="max-w-[640px] -mt-16 lg:-mt-24">
                <div className="overflow-hidden">
                    <motion.p
                        className="text-xs text-gray-500 tracking-widest uppercase mb-6 lg:mb-8"
                        initial={still ? false : { y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{ delay: 0.3, duration: 0.8, ease: smooth }}
                    >
                        Private
                    </motion.p>
                </div>

                <h1 className="text-[2.25rem] lg:text-[3.5rem] font-light tracking-tight font-heading leading-[1.08] mb-10 lg:mb-14">
                    {["Selected work,", "by invitation."].map((line, i) => (
                        <div key={line} className="overflow-hidden">
                            <motion.span
                                className={`block ${i === 1 ? "text-gray-400" : ""}`}
                                initial={still ? false : { y: "110%" }}
                                animate={{ y: "0%" }}
                                transition={{ delay: 0.42 + i * 0.1, duration: 0.85, ease: smooth }}
                            >
                                {line}
                            </motion.span>
                        </div>
                    ))}
                </h1>

                <motion.div
                    initial={still ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.72, duration: 0.7, ease: smooth }}
                >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSubmit?.();
                        }}
                    >
                        <label htmlFor="entry-code" className="sr-only">
                            Access code
                        </label>

                        {/* One real input, drawn as cells. A single field is what keeps
                            paste, password managers and the mobile keyboard working;
                            the cells are presentation sitting under it. */}
                        <div
                            /* Wraps rather than overflows: six cells fit a 375px
                               screen with the page's own margins, a longer code
                               would not. */
                            className={`relative inline-flex flex-wrap gap-2 lg:gap-2.5 ${wrong ? "gate-wrong" : ""}`}
                            onClick={() => input.current?.focus()}
                        >
                            {cells.map((char, i) => (
                                /* relative, so the caret centres in the cell being
                                   filled. Without it the caret resolves against the
                                   row and stays pinned to its left edge however much
                                   you type. */
                                <div
                                    key={i}
                                    className={`relative w-11 lg:w-14 h-14 lg:h-16 flex items-center justify-center border-b transition-colors ${
                                        wrong
                                            ? "border-[#8C4A4A]"
                                            : i === active && !still
                                              ? "border-[#141414]"
                                              : "border-[#141414]/20"
                                    }`}
                                >
                                    <span className="text-2xl lg:text-3xl font-light font-heading tracking-tight">
                                        {char}
                                    </span>
                                    {!still && i === code.length && (
                                        <span
                                            className="gate-caret absolute w-[1px] h-7 lg:h-8 bg-[#141414] pointer-events-none"
                                            aria-hidden
                                        />
                                    )}
                                </div>
                            ))}

                            {!still && (
                                <input
                                    ref={input}
                                    id="entry-code"
                                    value={code}
                                    onChange={(e) =>
                                        onChange?.(
                                            e.target.value
                                                .toUpperCase()
                                                .replace(/[^A-Z0-9]/g, "")
                                                .slice(0, CODE.length),
                                        )
                                    }
                                    autoFocus
                                    autoComplete="off"
                                    autoCorrect="off"
                                    spellCheck={false}
                                    inputMode="text"
                                    aria-invalid={wrong}
                                    aria-describedby="entry-hint"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-default"
                                />
                            )}
                        </div>

                        <p
                            id="entry-hint"
                            aria-live="polite"
                            className={`mt-6 text-sm font-light ${wrong ? "text-[#8C4A4A]" : "text-gray-500"}`}
                        >
                            {wrong ? "Not that one. Try again." : "The code came with the link."}
                        </p>
                    </form>
                </motion.div>
            </div>

            <div className="overflow-hidden">
                <motion.p
                    className="text-xs font-light text-gray-400"
                    initial={still ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.9, duration: 0.8, ease: smooth }}
                >
                    Design Engineer · Spain
                </motion.p>
            </div>
        </div>
    );
};

const EntryGate = ({ children }: { children: ReactNode }) => {
    const [inside, setInside] = useState(alreadyIn);
    const [opening, setOpening] = useState(false);
    const [code, setCode] = useState("");
    const [wrong, setWrong] = useState(false);

    /* Remembering happens here rather than at the keystroke, so it covers being let
       in by the link as well as by typing. It did not, at first: a link-borne code
       opened the page and stored nothing, so a reload without the parameter — or
       coming back to the bare domain later — asked again.

       And the code comes out of the address bar the moment it has been honoured, so
       it does not survive a screenshot or a copied URL. */
    useEffect(() => {
        if (!inside) return;
        remember();
        stripCodeFromUrl();
    }, [inside]);

    useEffect(() => {
        if (!opening) return;
        const t = setTimeout(() => setOpening(false), TRANSITION_MS);
        return () => clearTimeout(t);
    }, [opening]);

    const submit = (value = code) => {
        if (value !== CODE) {
            setWrong(true);
            return;
        }
        setInside(true);
        setOpening(true);
    };

    const typed = (next: string) => {
        setWrong(false);
        setCode(next);
        /* Full-length is an answer in itself; making them press Enter as well is a
           step with nothing behind it. */
        if (next.length === CODE.length) submit(next);
    };

    if (!inside) return <Panel code={code} wrong={wrong} onChange={typed} onSubmit={() => submit()} />;

    /* Opening reuses the route transition exactly — same 0.7s, same easing, same
       black underneath, same clip. See PageTransition.tsx for why both halves are
       CSS animations and why the receding copy is dropped on a timer. */
    return (
        <>
            {opening && <div className="page-backdrop" aria-hidden />}
            {opening && (
                <div
                    className="page-recede"
                    style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}
                    aria-hidden
                >
                    <Panel code={code} wrong={false} still />
                </div>
            )}
            <div
                className={opening ? "page-reveal" : undefined}
                style={
                    opening
                        ? { position: "fixed", inset: 0, height: "100vh", zIndex: 10, overflow: "hidden" }
                        : undefined
                }
            >
                {children}
            </div>
        </>
    );
};

export default EntryGate;
