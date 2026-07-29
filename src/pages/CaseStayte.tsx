import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import ShotBadge from "@/components/ShotBadge";
import BackLink from "@/components/BackLink";
import Lightbox, { type Shot } from "@/components/Lightbox";
import { useFirstPaint } from "@/hooks/useFirstPaint";

/* ── Premium easing curve (matches Hero.tsx) ── */
const smooth = [0.22, 1, 0.36, 1] as const;

const SHOT_BASE = "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero";

/* Order here is the order the lightbox steps through, one per stage. */
const shots: Shot[] = [
    { src: `${SHOT_BASE}/intake-poster.jpg`, video: `${SHOT_BASE}/intake.mp4`, label: "os.stayte/settings/lead-sources", alt: "Where the four inputs are configured — the ad connector, inbound email parsing, the webhook for custom forms, and the source labels every lead is tagged with" },
    { src: `${SHOT_BASE}/routing-poster.jpg`, video: `${SHOT_BASE}/routing.mp4`, label: "os.stayte/workflows/step", alt: "A step in a sequence: immediate send, AI auto-reply, and the reply timeout that decides which path is taken next" },
    { src: `${SHOT_BASE}/qualification-poster.jpg`, video: `${SHOT_BASE}/qualification.mp4`, label: "os.stayte/workflows/calls", alt: "Retry logic as settings — attempts, per-attempt fallback rules, one call per window, and the calling-hours grid" },
    { src: `${SHOT_BASE}/selection-poster.jpg`, video: `${SHOT_BASE}/selection.mp4`, label: "os.stayte/leads/selection", alt: "A selection already sent to this lead, three properties from the agency's MLS, with the option to continue from it or start a new one" },
    { src: `${SHOT_BASE}/delivery-phone-poster.jpg`, video: `${SHOT_BASE}/delivery-phone.mp4`, phone: true, label: "WhatsApp", alt: "The selection as it arrives — a swipeable carousel in the thread the client already uses, each card carrying the Like that the next selection is built from" },
    { src: `${SHOT_BASE}/enrichment-poster.jpg`, video: `${SHOT_BASE}/enrichment.mp4`, label: "os.stayte/leads/record", alt: "The profile on the left, the calls that built it on the right — every attempt, its outcome, and the fields it filled in" },
    { src: `${SHOT_BASE}/crm-sync-poster.jpg`, video: `${SHOT_BASE}/crm-sync.mp4`, label: "os.stayte/settings/data-sync", alt: "The CRM connector: two-way sync of contacts and deals, with the last sync timestamped" },
    { src: `${SHOT_BASE}/dashboard-poster.jpg`, video: `${SHOT_BASE}/dashboard.mp4`, label: "os.stayte/dashboard", alt: "Conversion by source, leads over time, and what the automation is currently carrying" },
];

/* Browser chrome around a screenshot. Dense UI is unreadable at this size,
   so the frame is a button into the full-resolution view. */
const ShotFrame = ({ shot, onOpen }: { shot: Shot; onOpen: () => void }) => {
    const video = useRef<HTMLVideoElement>(null);

    /* Nothing is fetched until the pointer lands on the frame — preload="none"
       plus the poster means the page paints instantly and stays light. */
    const play = () => video.current?.play().catch(() => undefined);
    const stop = () => {
        const v = video.current;
        if (!v) return;
        v.pause();
        v.currentTime = 0;
    };

    /* A handset capture gets a device frame instead of browser chrome —
       the same one the Reviero case uses for its app screens. */
    if (shot.phone) {
        return (
            <div className="flex justify-center">
                <div
                    role="button"
                    tabIndex={0}
                    aria-label={`Open full size: ${shot.alt}`}
                    onClick={onOpen}
                    onMouseEnter={play}
                    onMouseLeave={stop}
                    onFocus={play}
                    onBlur={stop}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onOpen();
                        }
                    }}
                    className="group relative w-[280px] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#141414] focus-visible:ring-offset-4"
                >
                    <div className="relative rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                        <div className="aspect-[6/13] bg-[#0B141A] rounded-[28px] overflow-hidden">
                            <video
                                ref={video}
                                src={shot.video}
                                poster={shot.src}
                                muted
                                loop
                                playsInline
                                preload="none"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <ShotBadge
                        isVideo={!!shot.video}
                        className="-bottom-3 left-1/2 -translate-x-1/2 bg-[#141414]/75 group-hover:bg-[#141414]/90"
                    />
                </div>
            </div>
        );
    }

    /* Waiting for its asset: the frame still holds the layout so the rhythm of
       the page does not change when the image lands. */
    if (!shot.src && !shot.video) {
        return (
            <div className="rounded-lg overflow-hidden border border-dashed border-[#B5AFA6] bg-[#EFECE6]">
                <div className="bg-[#2A2A2A]/70 px-4 py-2.5 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/50"></div>
                    <span className="ml-3 text-[10px] text-[#888] font-mono">{shot.label}</span>
                </div>
                <div className="aspect-[15/8] flex items-center justify-center px-8">
                    <p className="text-center text-sm text-[#8A8078] leading-relaxed">{shot.alt}</p>
                </div>
            </div>
        );
    }

    return (
        <div
            role="button"
            tabIndex={0}
            aria-label={`Open full size: ${shot.alt}`}
            onClick={onOpen}
            onMouseEnter={play}
            onMouseLeave={stop}
            onFocus={play}
            onBlur={stop}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpen();
                }
            }}
            className="group cursor-zoom-in rounded-lg overflow-hidden border border-[#C5C0B8] shadow-2xl bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#141414] focus-visible:ring-offset-2"
        >
            <div className="bg-[#2A2A2A] px-4 py-2.5 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
                <span className="ml-3 text-[10px] text-[#888] font-mono">{shot.label}</span>
            </div>
            <div className="relative aspect-[15/8] bg-white overflow-hidden">
                {shot.video ? (
                    <video
                        ref={video}
                        src={shot.video}
                        poster={shot.src}
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img
                        src={shot.src}
                        alt={shot.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                    />
                )}

                {/* Always visible, not hover-only — on touch there is no hover to reveal it. */}
                <ShotBadge
                    isVideo={!!shot.video}
                    className="bottom-3 right-3 bg-[#141414]/60 group-hover:bg-[#141414]/85"
                />
            </div>
        </div>
    );
};

/* The long walkthrough. Held behind a poster on purpose: it is 45 seconds and
   3 MB, and nothing is fetched until someone asks for it. */
const Walkthrough = () => {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="rounded-sm overflow-hidden border border-[#C5C0B8] bg-white shadow-lg">
            {playing ? (
                <video
                    src={`${SHOT_BASE}/workflows-editor.mp4`}
                    poster={`${SHOT_BASE}/workflows-poster.jpg`}
                    autoPlay
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full h-auto block"
                />
            ) : (
                <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label="Play the workflow editor walkthrough, 45 seconds, no sound"
                    className="group relative block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#141414] focus-visible:ring-inset"
                >
                    <img
                        src={`${SHOT_BASE}/workflows-poster.jpg`}
                        alt="The workflow list: each source has its own sequence, with steps, runs and success counts"
                        className="w-full h-auto block"
                        loading="lazy"
                        decoding="async"
                    />
                    <span className="absolute inset-0 bg-[#141414]/0 transition-colors duration-300 group-hover:bg-[#141414]/10" />
                    <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex items-center gap-3 rounded-full bg-[#141414]/85 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.04]">
                            <Play className="h-4 w-4 fill-current" />
                            Play walkthrough · 45s
                        </span>
                    </span>
                </button>
            )}
        </div>
    );
};

/* The eight stages of a run, in the order a lead moves through them.
   Stage 05 feeds back into stage 04 — that loop is the product. */
const stages = [
    {
        n: "01 / Intake",
        title: "Four Ways In, None of Them Tidy",
        meta: "Manual · CRM · Facebook Ads · Aggregators",
        body: "A lead arrives by hand, by sync from the agency's CRM, from a Facebook lead ad, or from a form on an aggregator like Idealista. Each source carries different fields, different completeness and a different level of intent — and each arrives by a different mechanism: an ad connector, a parsed inbound email, a webhook for anything with a form.",
        bullets: [
            ["One inbox, four shapes:", "Every source lands in the same place in the same form, so nobody reformats a spreadsheet before the work can start."],
            ["Intent travels with the lead:", "Where a lead came from is not metadata — it is the thing that decides what happens next, so it is carried as a source label rather than logged and forgotten."],
        ],
    },
    {
        n: "02 / Routing",
        title: "The Source Decides the First Move",
        meta: "Matching Criteria · Automatic Trigger",
        body: "A lead does not get one generic treatment. Workflows match against criteria and fire on their own, without anyone assigning them.",
        bullets: [
            ["Warm goes straight to a call:", "Someone who filled in a form on Idealista is already looking at a specific property. Waiting a day to email them wastes the only moment that mattered."],
            ["Cold gets a lighter touch first:", "A Facebook lead gets an email, and a call only if the email goes unanswered — the sequence escalates instead of opening at full volume."],
        ],
    },
    {
        n: "03 / Qualification",
        title: "How Hard to Chase, Decided by the Agency",
        meta: "Attempts · Intervals · Exit Conditions",
        body: "How many times to call. How long to wait between attempts. How many callbacks before a lead is left alone, and what counts as qualified at the end of it.",
        bullets: [
            ["Configurable, not hard-coded:", "Every agency's patience is different, and none of them wanted to ask a developer to change it."],
        ],
    },
    {
        n: "04 / Selection",
        title: "A Shortlist Built for One Person",
        meta: "Client MLS · API Key · Per-Lead Assembly",
        body: "The property database is the agency's own MLS, connected with an API key: paste the key and everything they are allowed to show appears. From that, the system assembles a selection for this specific lead rather than a generic feed.",
        bullets: [
            ["The client owns the inventory:", "No catalogue to maintain in a second place, and no sync to go stale — the MLS stays the single source."],
            ["Assembled, not filtered:", "The shortlist is built for the person, using everything the system has learned about them so far."],
            ["Every selection is kept:", "What went out last time stays on the record, so the next one can continue from it instead of starting the thinking again."],
        ],
    },
    {
        n: "05 / Delivery & Learning",
        title: "Sent and Answered in the Same Thread",
        meta: "WhatsApp API · Preference Signal · Feeds Stage 04",
        body: "The selection goes out over WhatsApp — no app to install, no portal to log into, no email that sits unread. The answer comes back through the same surface: every property in the carousel carries a Like, so the client replies by tapping rather than by writing.",
        bullets: [
            ["Near-zero adoption cost:", "The surface the client already checks hourly is the one nobody had to be persuaded to use — and making it the reply channel too removes the second surface where a reply goes to die."],
            ["The loop is the product:", "Those taps are not a rating for its own sake. They feed straight back into the selection stage, so each shortlist starts from more than the last. Without the loop this is a scheduler with extra steps."],
            ["Preference beats a brief:", "What someone taps is more honest than what they said they wanted on a form."],
            ["Nurturing is a cadence, not a campaign:", "A lead who is not ready yet stays in a sequence that sends a fresh selection every few days, on an interval the agency sets, until they engage or the sequence ends."],
        ],
    },
    {
        n: "06 / Enrichment",
        title: "What Was Learned on the Phone Stops Living There",
        meta: "Call Outcomes · Agent Notes · Aggregation",
        body: "Call outcomes, and what the human agent actually heard while speaking to the person, get aggregated, sorted into the right tables and written back.",
        bullets: [
            ["The knowledge that normally evaporates:", "Everything useful in a phone call usually ends up in someone's memory. Here it ends up somewhere the rest of the system can read it."],
            ["The profile is a running summary:", "Requirements, budget, timeline and the state of the relationship are rewritten as the history grows, alongside the next action the system has already scheduled."],
        ],
    },
    {
        n: "07 / CRM Sync",
        title: "Changes Travel in Both Directions",
        meta: "Bidirectional · Automatic Stage Progression",
        body: "Everything a run produces updates the agency's CRM automatically, and changes made in the CRM come back the other way. Pipedrive is the one live in this deployment; the same connector covers HubSpot.",
        bullets: [
            ["Deals move themselves:", "When a lead meets the criteria for the next stage, the deal advances rather than waiting for someone to remember."],
            ["The CRM stays correct as a side effect:", "Nobody is asked to maintain it, which is the only way it stays maintained."],
        ],
    },
    {
        n: "08 / Dashboard",
        title: "The Room You No Longer Have to Walk",
        meta: "By Agent · Planned vs. Completed",
        body: "One surface for the whole operation: what is planned, what has run, and what each agent is carrying.",
        bullets: [
            ["Managing stops being asking:", "Running a brokerage no longer depends on going round the room to find out how it is going."],
            ["Conversion by source, not just volume:", "Each input is shown with what it actually produced, which is the number that decides where the next advertising euro goes."],
        ],
    },
];

const CaseStayte = () => {
    const firstPaint = useFirstPaint();
    const [lightbox, setLightbox] = useState<number | null>(null);

    return (
        <div className="bg-[#F5F3EE] text-foreground min-h-screen">
            <BackLink />
            {/* ═══ Hero ═══ */}
            <section>
                <div className="w-full h-[50vh] bg-[#F5F3EE] overflow-hidden relative">
                    <motion.img
                        src={`${SHOT_BASE}/stayte-cover.jpg`}
                        alt="A workflow in the editor: a WhatsApp step and a call branching into grading groups, agent assignment and a nurture sequence"
                        className="w-full h-full object-cover object-center"
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.8, ease: smooth }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-[#F5F3EE]"
                        initial={{ scaleY: firstPaint ? 1 : 0 }}
                        animate={{ scaleY: 0 }}
                        transition={{ duration: 1.2, ease: smooth }}
                        style={{ transformOrigin: "top" }}
                    />
                </div>

                {/* Title + Metadata */}
                <div className="px-8 lg:px-16 py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px] items-start">
                        <div>
                            <h1 className="text-[2rem] lg:text-[2.5rem] font-normal tracking-tight font-heading leading-[1.15] text-[#141414]">
                                <div className="overflow-hidden">
                                    <motion.span
                                        className="block"
                                        initial={{ y: "110%" }}
                                        animate={{ y: "0%" }}
                                        transition={{ delay: 0.6, duration: 0.8, ease: smooth }}
                                    >
                                        Stayte
                                    </motion.span>
                                </div>
                                <span className="text-gray-400">
                                    {["The Operating System", "for a Real-Estate Agency"].map((line, i) => (
                                        <div key={line} className="overflow-hidden">
                                            <motion.span
                                                className="block"
                                                initial={{ y: "110%" }}
                                                animate={{ y: "0%" }}
                                                transition={{ delay: 0.7 + i * 0.08, duration: 0.8, ease: smooth }}
                                            >
                                                {line}
                                            </motion.span>
                                        </div>
                                    ))}
                                </span>
                            </h1>
                        </div>

                        {/* Right: Metadata */}
                        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-0">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:contents">
                                {/* Column 1 */}
                                <div className="space-y-6">
                                    {[
                                        { label: "Date", value: "2024 – Feb 2026" },
                                        { label: "Location", value: "Spain" },
                                        { label: "Services", value: "Product Design\nFrontend Engineering\nBackend & Integrations" },
                                        { label: "Team", value: "Head of Sales\nAgents · me" },
                                    ].map((item, i) => (
                                        <div key={item.label} className="overflow-hidden">
                                            <motion.div
                                                initial={{ y: "110%" }}
                                                animate={{ y: "0%" }}
                                                transition={{ delay: 0.9 + i * 0.08, duration: 0.7, ease: smooth }}
                                            >
                                                <p className="text-sm font-semibold text-[#141414] mb-0.5">{item.label}</p>
                                                <p className="text-sm font-light text-gray-500" style={{ whiteSpace: 'pre-line' }}>{item.value}</p>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>

                                {/* Column 2 */}
                                <div className="space-y-6">
                                    {[
                                        { label: "Role", value: "Design Engineer\n(web product,\ndesign and build)" },
                                        { label: "Target", value: "Brokerage teams (B2B)\nBuyers and investors (B2C)" },
                                        { label: "Platform", value: "Web OS · Supabase\nMLS API · WhatsApp\nFacebook Ads · Pipedrive\nHubSpot · Twilio · Vapi" },
                                    ].map((item, i) => (
                                        <div key={item.label} className="overflow-hidden">
                                            <motion.div
                                                initial={{ y: "110%" }}
                                                animate={{ y: "0%" }}
                                                transition={{ delay: 1.0 + i * 0.08, duration: 0.7, ease: smooth }}
                                            >
                                                <p className="text-sm font-semibold text-[#141414] mb-0.5">{item.label}</p>
                                                <p className="text-sm font-light text-gray-500" style={{ whiteSpace: 'pre-line' }}>{item.value}</p>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-gray-300"></div>

            {/* ═══ The Brief ═══ */}
            <section className="py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px] px-8 lg:px-16"
                >
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">
                            The Brief
                        </h2>
                    </div>

                    <div className="space-y-10 divide-y divide-gray-300">
                        <div>
                            <h3 className="text-base font-semibold text-[#141414] mb-4">The Market</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                Everything an estate agency does before a deal closes is a chain of small manual acts — copy the lead out of the form, call it, remember to call again, put a list of properties together in a chat, update the CRM if there is time. The chain breaks quietly, and nobody finds out until a lead has gone cold.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">The Mission</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                Replace the chain with a system. Not a CRM and not a lead source — the agency already has both. This is the layer in between: qualification and nurturing, everything that happens from a lead arriving to a deal moving, with the CRM kept correct as a side effect rather than as a chore.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">Impact</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                <span className="text-[#141414] font-medium">Eight stages</span> from a lead appearing to a deal advancing, with the qualification rules <span className="text-[#141414] font-medium">configurable by the agency</span> rather than written into the code.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-gray-300"></div>

            {/* ═══ My Role ═══ */}
            <section className="px-8 lg:px-16 py-28 bg-[#D4D0C8]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px]"
                >
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">
                            My Role
                        </h2>
                    </div>

                    <div className="space-y-0">
                        {[
                            { role: "Product Design", desc: "Designed the whole operating surface — intake, the workflow rules, the selection view, the dashboard. Every stage of the run, including the ones that had only ever existed as somebody's habit." },
                            { role: "Frontend Engineering", desc: "Implemented those designs myself. Same person on both sides of the handoff, which is why the shape of the system and the shape of the screens agree with each other." },
                            { role: "Backend & Integrations", desc: "The Supabase backend and its functions, and every connection underneath: the client's MLS by API key, WhatsApp delivery, two-way sync with Pipedrive, on a connector that also covers HubSpot, and the voice and messaging providers." },
                            { role: "Workflow Architecture", desc: "Designed the qualification engine as configuration rather than code — which leads a sequence claims, what it does first, how many attempts, how long between them, and what ends it. The hard part was keeping it operable by someone who is not a programmer." },
                        ].map((item, index) => (
                            <motion.div
                                key={item.role}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-6 border-t border-[#141414]/20"
                            >
                                <p className="text-base font-semibold text-[#141414]">{item.role}</p>
                                <p className="text-base font-light text-[#141414]/70 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-gray-300"></div>

            {/* ═══ The Run — pipeline diagram ═══ */}
            <section className="bg-[#141414] px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs text-[#8A8680] tracking-wide mb-6">00 / The Run</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">One Lead, End to End</h2>
                    <p className="text-base text-[#A09A92] leading-relaxed">
                        Eight stages between a lead appearing and a deal moving. Stage five loops back into stage four.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#1A1A1A] rounded-sm overflow-x-auto"
                >
                    <svg viewBox="0 0 1300 300" className="w-full h-auto min-w-[1060px]" fill="none" style={{ padding: '28px 20px 16px' }} role="img" aria-label="Eight-stage pipeline from intake to dashboard, with a feedback loop from delivery back to selection">
                        <defs>
                            <marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6" fill="none" stroke="#3A3A3A" strokeWidth="1" />
                            </marker>
                            <marker id="arL" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6" fill="none" stroke="#8A8078" strokeWidth="1" />
                            </marker>
                        </defs>

                        {/* sources */}
                        {[
                            { y: 30, t: "Manual entry" },
                            { y: 66, t: "Existing CRM" },
                            { y: 102, t: "Facebook ads" },
                            { y: 138, t: "Idealista & aggregators" },
                        ].map((s) => (
                            <g key={s.t}>
                                <rect x="0" y={s.y} width="180" height="26" rx="3" fill="none" stroke="#3A3A3A" />
                                <text x="90" y={s.y + 17} textAnchor="middle" fill="#A09A92" fontSize="11">{s.t}</text>
                                <line x1="180" y1={s.y + 13} x2="215" y2="97" stroke="#3A3A3A" strokeWidth="1" />
                            </g>
                        ))}

                        {/* main chain */}
                        {[
                            { x: 215, t: "Intake", n: "01" },
                            { x: 370, t: "Routing", n: "02" },
                            { x: 525, t: "Qualification", n: "03" },
                            { x: 680, t: "Selection", n: "04" },
                            { x: 835, t: "Delivery", label2: "& Learning", n: "05" },
                            { x: 990, t: "Enrichment", n: "06" },
                            { x: 1145, t: "CRM sync", n: "07" },
                        ].map((s, i) => (
                            <g key={s.n}>
                                <rect x={s.x} y="84" width="135" height="46" rx="3" fill="#1F1F1F" stroke={s.n === "04" || s.n === "05" ? "#8A8078" : "#3A3A3A"} />
                                <text x={s.x + 10} y="101" fill="#5A5A5A" fontSize="9">{s.n}</text>
                                <text x={s.x + 67} y={s.label2 ? 114 : 119} textAnchor="middle" fill="#E8E4DE" fontSize="12">{s.t}</text>
                                {s.label2 && <text x={s.x + 67} y="126" textAnchor="middle" fill="#E8E4DE" fontSize="12">{s.label2}</text>}
                                {i < 6 && <line x1={s.x + 135} y1="107" x2={s.x + 155} y2="107" stroke="#3A3A3A" strokeWidth="1" markerEnd="url(#ar)" />}
                            </g>
                        ))}

                        {/* feedback loop: Delivery & Learning (05) back into Selection (04) */}
                        <path d="M 902 130 L 902 178 L 747 178 L 747 132" fill="none" stroke="#8A8078" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arL)" />
                        <text x="825" y="196" textAnchor="middle" fill="#8A8078" fontSize="10">each Like refines the next selection</text>

                        {/* MLS feeds selection */}
                        <rect x="620" y="228" width="180" height="26" rx="3" fill="none" stroke="#3A3A3A" />
                        <text x="710" y="245" textAnchor="middle" fill="#A09A92" fontSize="11">Client MLS · via API key</text>
                        <line x1="710" y1="228" x2="722" y2="132" stroke="#3A3A3A" strokeWidth="1" markerEnd="url(#ar)" />

                        {/* CRM two-way */}
                        <rect x="1115" y="228" width="170" height="26" rx="3" fill="none" stroke="#3A3A3A" />
                        <text x="1200" y="245" textAnchor="middle" fill="#A09A92" fontSize="11">HubSpot · Pipedrive</text>
                        <line x1="1200" y1="228" x2="1205" y2="134" stroke="#3A3A3A" strokeWidth="1" />
                        <text x="1225" y="180" fill="#5A5A5A" fontSize="9">two-way</text>

                        {/* dashboard reads everything */}
                        <rect x="215" y="228" width="180" height="26" rx="3" fill="none" stroke="#3A3A3A" />
                        <text x="305" y="245" textAnchor="middle" fill="#A09A92" fontSize="11">08 · Dashboard</text>
                        <line x1="305" y1="228" x2="290" y2="134" stroke="#3A3A3A" strokeWidth="1" strokeDasharray="2 3" />
                    </svg>
                </motion.div>
            </section>

            {/* ═══ Walkthrough — the editor, full width ═══ */}
            <section className="px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px] mb-14"
                >
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">
                            The Editor
                        </h2>
                    </div>

                    <div>
                        <p className="text-base font-light text-gray-600 leading-relaxed max-w-xl">
                            Stage two is this screen. Each source gets its own sequence — the list shows one per source, including a separate one for Idealista — and each sequence is a node editor rather than a setting buried in a form. Inside a step: which channel, how long to wait, whether the AI agent answers replies itself, and which path is taken when nobody answers. How hard to chase, the next stage, is configured elsewhere.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Walkthrough />
                </motion.div>
            </section>

            {/* ═══ The Stages — Datox grid: text in a column, shot alongside, sides alternating ═══ */}
            <section className="bg-[#D4D0C8]">
                {/* Intro */}
                <div className="px-8 lg:px-16 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px]"
                    >
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">
                                The System
                            </h2>
                        </div>
                        <div className="max-w-xl">
                            <h2 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">
                                What I Built, Stage by Stage
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Eight stages, and the number is the point — none of them was left to a spreadsheet or a group chat. Each one is a decision the agency used to make by hand, moved into the system and made configurable, from the moment a lead appears to the moment a deal advances on its own.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {stages.map((stage, i) => {
                    const shotFirst = i % 2 === 1;
                    return (
                        <div key={stage.n} className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: shotFirst ? 0.2 : 0 }}
                                    className={shotFirst ? "order-1 lg:order-2 max-w-md" : "max-w-md"}
                                >
                                    <p className="text-xs text-gray-500 tracking-wide mb-6">{stage.n}</p>
                                    <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">{stage.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6">{stage.meta}</p>
                                    <p className="text-base text-gray-600 leading-relaxed mb-8">{stage.body}</p>
                                    <ul className="space-y-4 text-sm text-gray-600">
                                        {stage.bullets.map(([lead, rest]) => (
                                            <li key={lead} className="flex gap-3">
                                                <span className="text-[#141414]">•</span>
                                                <span><span className="text-[#141414]">{lead}</span> {rest}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: shotFirst ? 0 : 0.2 }}
                                    className={shotFirst ? "order-2 lg:order-1 lg:-ml-8" : "lg:col-span-1 lg:-mr-8"}
                                >
                                    <ShotFrame shot={shots[i]} onOpen={() => setLightbox(i)} />
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* ═══ Hardest problem ═══ */}
            <section className="px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">The Hardest Problem</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#FAFAF8] px-14 py-16 rounded-sm"
                >
                    <h3 className="text-2xl font-normal text-[#141414] mb-2">Every Agency Chases Differently</h3>
                    <p className="text-sm text-gray-400 mb-12">Workflow design</p>

                    {/* Three columns rather than a stack: at this width a single
                        column either runs to unreadable line lengths or leaves
                        most of the page empty. */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 border-t border-[#141414]/10 pt-10">
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Problem</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    The obvious build is to hard-code the chase: three calls, two days apart, then stop. It works for exactly one agency. The next one calls twice and emails; the one after that never emails at all and wants six attempts on a hot lead from Idealista. Every variation as a code change means a developer sits inside a business decision that is not theirs.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Solution</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    I made the chase configurable rather than written down: which criteria a lead has to match for a workflow to fire, what the first move is, how many attempts, how long between them, and what ends the sequence. Getting that editable without turning it into programming was the actual design work — the constraints had to read as decisions an agency manager already makes, not as fields in a rules engine.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Result</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    An agency changes how it chases leads without anyone touching code, and the difference between a warm Idealista enquiry and a cold Facebook lead stops being an argument and becomes a setting.
                                </p>
                            </div>
                    </div>
                </motion.div>
            </section>

            {/* ═══ Results ═══ */}
            <section className="px-8 lg:px-16 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">Results</h2>
                    </motion.div>

                    <div>
                        {[
                            {
                                stat: "7,000+",
                                label: "Leads processed",
                                body: "Taken in from every source the system accepts and carried through routing, qualification and nurturing, without anyone copying a row by hand.",
                            },
                            {
                                stat: "~200",
                                label: "Deals closed",
                                body: "Deals that moved through the pipeline to completion, with the CRM kept in step automatically rather than by hand.",
                            },
                            {
                                stat: "8",
                                label: "Stages, one system",
                                body: "From a lead appearing to a deal advancing, with the learning loop folded in.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.stat}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[56px] items-center py-12 border-t border-gray-200"
                            >
                                <p className="text-5xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-left lg:text-right">{item.stat}</p>
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-2">{item.label}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Reflection ═══ */}
            <section className="bg-[#141414] px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px]"
                >
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-white">Reflection</h2>
                    </div>
                    <div>
                        <p className="text-xl lg:text-2xl font-light text-[#A09A92] leading-relaxed mb-10">
                            The product people asked for was a marketplace. The product that mattered was the machinery behind it — <span className="text-white">the part nobody demos</span>, that decides whether a lead is called on Tuesday and whether anyone remembers what was said.
                        </p>
                        <div className="space-y-8 border-t border-white/10 pt-10">
                            <div>
                                <p className="text-sm font-semibold text-white mb-3">What designing and building it myself changed</p>
                                <p className="text-base font-light text-[#A09A92] leading-relaxed">
                                    The workflow editor went through several shapes before it was usable, and each one took an afternoon rather than a sprint, because there was no handoff between deciding and trying. A rules engine that a non-programmer can operate is not something you get right on paper.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="bg-[#141414] px-8 lg:px-16 py-28 border-t border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px] items-center">
                    <div>
                        <p className="text-sm text-gray-500">Want to see more?</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            to="/"
                            data-return
                            className="inline-block bg-white text-[#141414] px-8 py-4 rounded-sm text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                            Back to all projects
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Lightbox shots={shots} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
        </div>
    );
};

export default CaseStayte;
