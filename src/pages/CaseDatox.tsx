import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";
import Lightbox, { type Shot } from "@/components/Lightbox";
import { useFirstPaint } from "@/hooks/useFirstPaint";

/* ── Premium easing curve (matches Hero.tsx) ── */
const smooth = [0.22, 1, 0.36, 1] as const;


const SHOT_BASE = "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/datox";

/* Order here is the order the lightbox steps through. */
const shots: Shot[] = [
    { src: `${SHOT_BASE}/source-files.jpg`, video: `${SHOT_BASE}/source-files.mp4`, label: "compliance.datox.ai/source-files", alt: "Distributing an upload across funds, over the stacked layout that pairs each period with the last" },
    { src: `${SHOT_BASE}/ai-bot.jpg`, video: `${SHOT_BASE}/ai-bot.mp4`, label: "compliance.datox.ai/assistant", alt: "The assistant reading an upload back — files, sheets and the one question it cannot infer" },
    { src: `${SHOT_BASE}/extraction.jpg`, video: `${SHOT_BASE}/extraction.mp4`, label: "compliance.datox.ai/extraction", alt: "Extraction split-screen — the extracted result above, the raw source data below" },
    { src: `${SHOT_BASE}/transformation.jpg`, video: `${SHOT_BASE}/transformation.mp4`, label: "compliance.datox.ai/transformation", alt: "A transformation step, before and after, with its action editor open" },
    { src: `${SHOT_BASE}/report.png`, label: "compliance.datox.ai/report", alt: "The assembled report, funds compared in columns, with validation state along the bottom" },
    { src: `${SHOT_BASE}/approval.jpg`, video: `${SHOT_BASE}/approval.mp4`, label: "compliance.datox.ai/approval", alt: "Setting reviewers on a report — what each can see, what each must sign off, tracked per fund" },
    { src: `${SHOT_BASE}/dashboards.jpg`, video: `${SHOT_BASE}/dashboards.mp4`, label: "compliance.datox.ai/dashboards", alt: "Building a dashboard from the widget library, with the widget's data and design panel open" },
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
                <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-[#141414]/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#141414]/85">
                    <Maximize2 className="h-2.5 w-2.5" />
                    Expand
                </span>
            </div>
        </div>
    );
};


const CaseDatox = () => {
    const firstPaint = useFirstPaint();
    const [lightbox, setLightbox] = useState<number | null>(null);

    /* The reporting workflow, stage by stage. `page` groups stages under the
       product page that owns them — null means an existing stage left untouched. */
    const pipeline = [
        { label: "AIFs", label2: null, page: 1 },
        { label: "Jurisdictions", label2: null, page: 1 },
        { label: "Source", label2: "Files", page: 1 },
        { label: "Mapping", label2: null, page: 2 },
        { label: "Extraction", label2: null, page: 3 },
        { label: "Transformation", label2: null, page: 4 },
        { label: "Lookup", label2: null, page: 4 },
        { label: "Output", label2: "Data", page: 5 },
        { label: "Report", label2: null, page: 5 },
        { label: "Approval", label2: null, page: 6 },
        { label: "Submission", label2: null, page: 6 },
    ];

    const pageBands = [
        { page: 1, title: "01 · Intake" },
        { page: 2, title: "02 · Mapping" },
        { page: 3, title: "03 · Extraction" },
        { page: 4, title: "04 · Transformation" },
        { page: 5, title: "05 · Report" },
        { page: 6, title: "06 · Approval" },
    ];

    /* geometry shared by the stage boxes and the page bands above them */
    const BOX_W = 96;
    const BOX_GAP = 16;
    const BOX_X0 = 18;
    const stageX = (i: number) => BOX_X0 + i * (BOX_W + BOX_GAP);

    const challenges = [
        {
            letter: "A",
            title: "Matching Files Across Reporting Periods",
            subtitle: "Product Design",
            problem: "Every quarter the same files arrive under new names and dates. They have to be paired with the previous period to inherit sheet mappings. On top of that, a file may be shared across all funds or belong to a single one — and the backend cannot express \"this file for these three funds\", only copies.",
            solution: "I designed a stacked layout that puts every fund on one page instead of walking through them one by one. Each previous-to-current pair reads as a single row, and colour-coded tags separate shared files from fund-specific ones. Upload opens a distribution dialog where a single file expands its checklist immediately. The first period, which has nothing to compare against, collapses into one centred list rather than an empty column.",
            result: "The design cleared review with two stakeholders, with notes on terminology and on telling shared files apart from fund-specific ones closed within the same cycle. It shipped as the default, with the legacy layout left a toggle away rather than removed."
        },
    ];

    return (
        <div className="bg-[#F5F3EE] text-foreground min-h-screen">
            {/* Back Navigation — Masked slide-in */}
            <div className="fixed top-8 left-8 z-50 overflow-hidden">
                <motion.div
                    initial={{ x: "-110%" }}
                    animate={{ x: "0%" }}
                    transition={{ delay: 0.3, duration: 0.7, ease: smooth }}
                >
                    <Link
                        to="/"
                        data-return
                        className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-[#141414] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Work
                    </Link>
                </motion.div>
            </div>

            {/* Hero Section */}
            <section>
                {/* Hero Image — Curtain wipe + Ken Burns zoom */}
                <div className="w-full h-[50vh] bg-[#4A3D48] overflow-hidden relative">
                    <motion.img
                        src={`${SHOT_BASE}/cover.jpg`}
                        alt="Datox — the extraction screen over the City of London"
                        className="w-full h-full object-cover object-[center_30%]"
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 1.8,
                            ease: smooth,
                        }}
                    />
                    {/* White curtain overlay */}
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
                        {/* Left: Title */}
                        <div>
                            <h1 className="text-[2rem] lg:text-[2.5rem] font-normal tracking-tight font-heading leading-[1.15] text-[#141414]">
                                {/* Title — masked slide-up */}
                                <div className="overflow-hidden">
                                    <motion.span
                                        className="block"
                                        initial={{ y: "110%" }}
                                        animate={{ y: "0%" }}
                                        transition={{ delay: 0.6, duration: 0.8, ease: smooth }}
                                    >
                                        Datox
                                    </motion.span>
                                </div>
                                {/* Subtitle lines — staggered mask reveals */}
                                <span className="text-gray-400">
                                    {["Regulatory Reporting", "for Investment Funds"].map((line, i) => (
                                        <div key={line} className="overflow-hidden">
                                            <motion.span
                                                className="block"
                                                initial={{ y: "110%" }}
                                                animate={{ y: "0%" }}
                                                transition={{ delay: 0.75 + i * 0.1, duration: 0.8, ease: smooth }}
                                            >
                                                {line}
                                            </motion.span>
                                        </div>
                                    ))}
                                </span>
                            </h1>
                        </div>

                        {/* Right: Metadata + Button */}
                        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-0">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:contents">
                                {/* Column 1 */}
                                <div className="space-y-6">
                                    {[
                                        { label: "Date", value: "Feb – July 2026" },
                                        { label: "Location", value: "UK" },
                                        { label: "Services", value: "Product Design\nPrototyping\nFrontend Engineering" },
                                        { label: "Team", value: "Head of Regulatory Reporting\nCEO · QA · me" },
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
                                        { label: "Role", value: "Design Engineer\n(design from scratch,\nfull frontend build)" },
                                        { label: "Target", value: "Compliance officers and fund\nadministrators at management\ncompanies (B2B, expert users)" },
                                        { label: "Platform", value: "Web, desktop-first\nReact 18 · TypeScript · Vite\nMantine 7 · MobX · React Query" },
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

                            {/* Visit Website Button */}
                            {/* CTA — Late entrance with scale */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3, duration: 0.6, ease: smooth }}
                            >
                                <a
                                    href="https://datox.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#141414] rounded-full text-sm font-medium text-[#141414] hover:bg-[#141414] hover:text-white transition-colors"
                                >
                                    Visit Website
                                    <span className="text-xs">•</span>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-gray-300"></div>

            {/* The Brief */}
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
                                Management companies are required to file detailed reports on every fund they run — Annex IV under the EU's AIFMD directive, and Form PF for the US SEC. The data that goes into them never arrives in one piece, or in the same shape twice.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">The Mission</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                A complete redesign of the product, shaped by what clients actually needed from it — better UI, better UX, better performance. Not a repaint: the inherited interface had grown organically for years, a single extraction page had swollen to 2,164 lines, its tables were capped by a row-render limit, and flows like manual sheet mapping had never been designed at all. The job was to rebuild the product layer from scratch and land it inside a live product, where a wrong number means a wrong regulatory filing for the client.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">Impact</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                The <span className="text-[#141414] font-medium">whole product rebuilt over six months</span> — every stage of the reporting workflow, designed from scratch and shipped to production continuously, with the legacy stack never rolled back. One interface covering <span className="text-[#141414] font-medium">both regulatory regimes</span>, Annex IV and Form PF.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-gray-300"></div>

            {/* My Role */}
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
                            { role: "Product Design", desc: "Designed the product surface from scratch — every stage of the reporting workflow, including flows the legacy interface had never covered at all, like manual sheet mapping and cross-period file matching. Each one through stakeholder review before build." },
                            { role: "Frontend Engineering", desc: "Implemented every one of those designs myself. Same person on both sides of the handoff, so design decisions were tested against real data in the browser rather than argued about in a spec." },
                            { role: "Delivery Architecture", desc: "Chose the opt-in model that let a live regulatory product be rebuilt in place. New pages in separate files, legacy untouched and still the default, an in-app toggle between them, and a per-page ErrorBoundary as the blast radius." },
                            { role: "Interface Infrastructure", desc: "Built CanvasGrid, a canvas-rendered virtualised grid over the canvas-datagrid library, to lift the row ceiling that had forced datasets to be truncated. Designed its contract as deliberately as its behaviour — state through props, no hidden coupling to the page around it, and rendering, theming, schema and formatting split into separately testable modules." },
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

            {/* How It Was Made — the working loop */}
            <section className="px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px]"
                >
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">
                            How It Was Made
                        </h2>
                    </div>

                    <div>
                        <p className="text-base font-light text-gray-600 leading-relaxed mb-12 max-w-xl">
                            Compliance reporting is not a domain you can design from the outside. The loop below ran continuously for six months, and every decision in it was made with someone in the room who does this work for a living.
                        </p>

                        <div className="space-y-0">
                            {[
                                {
                                    step: "01",
                                    title: "The daily user",
                                    desc: "I worked directly with an analyst who uses the platform every day. We went through the thin spots together — the places where the interface fights the person using it — and that list became the brief.",
                                },
                                {
                                    step: "02",
                                    title: "Prototypes",
                                    desc: "I built prototypes and we reviewed them together, iterating until we agreed on a final direction rather than a plausible-looking screen.",
                                },
                                {
                                    step: "03",
                                    title: "Team review",
                                    desc: "I presented the agreed version to the team and collected feedback before a line of production code was written.",
                                },
                                {
                                    step: "04",
                                    title: "Build",
                                    desc: "I implemented the approved design myself with Claude Code, then wired it to the backend — so the design was verified against real data rather than handed over as a spec.",
                                },
                                {
                                    step: "05",
                                    title: "QA and client feedback",
                                    desc: "The build went to a tester, while the analyst put it in front of client-side staff and brought their reactions back. That feedback re-entered the loop at step one.",
                                },
                                {
                                    step: "06",
                                    title: "What came back",
                                    desc: "No clean number, and inventing one would be worse. What came back was qualitative and consistent: the product became easier to take to new clients once it looked considered rather than accumulated. Existing clients responded less to how it looked than to having been heard — several of the changes came straight from their own requests, and seeing those shipped is what they named first.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="grid grid-cols-1 md:grid-cols-[48px_180px_1fr] gap-2 md:gap-8 py-6 border-t border-gray-300"
                                >
                                    <p className="text-sm font-light text-gray-400">{item.step}</p>
                                    <p className="text-base font-semibold text-[#141414]">{item.title}</p>
                                    <p className="text-base font-light text-gray-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-gray-300"></div>

            {/* Service Design - Dark Section */}
            <section className="px-8 lg:px-16 py-28 bg-[#141414]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">The Domain</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">From Raw Files to a Filed Report</h2>
                    <div className="max-w-2xl">
                        <p className="text-base text-[#A09A92] leading-relaxed">
                            A filing is not a form — it is a pipeline. Source files land, get matched against the previous period, are extracted, transformed, assembled into a report, approved, and submitted. Understanding where a number came from matters as much as the number itself, because the regulator will ask.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0, duration: 0.6 }}
                        className="bg-[#1F1F1F] px-10 py-12 rounded-sm"
                    >
                        <p className="text-xs text-[#8A8680] tracking-wide mb-6">01</p>
                        <h3 className="text-lg font-normal text-white mb-1">Every Source Is Different</h3>
                        <p className="text-sm text-[#A09A92] mb-3">Heterogeneous Inputs</p>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            Dozens of Excel, CSV and PDF files arrive from administrators, custodians and prime brokers. No shared schema, no stable column order — the interface has to make an unknown shape legible before anything can be extracted from it.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="bg-[#1F1F1F] px-10 py-12 rounded-sm"
                    >
                        <p className="text-xs text-[#8A8680] tracking-wide mb-6">02</p>
                        <h3 className="text-lg font-normal text-white mb-1">The Same Work, Every Quarter</h3>
                        <p className="text-sm text-[#A09A92] mb-3">Cyclical Workload</p>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            The reporting cycle repeats with the same files under new names. Anything the user configured last quarter — sheet mappings above all — should carry forward rather than be rebuilt by hand each time.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-[#1F1F1F] px-10 py-12 rounded-sm"
                    >
                        <p className="text-xs text-[#8A8680] tracking-wide mb-6">03</p>
                        <h3 className="text-lg font-normal text-white mb-1">A Wrong Number Is a Wrong Filing</h3>
                        <p className="text-sm text-[#A09A92] mb-3">Correctness Stakes</p>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            These users are experts working under a regulator's deadline. The interface has to show the full dataset rather than a truncated view, and keep every number traceable back to the cell it came from.
                        </p>
                    </motion.div>
                </div>

                {/* Animated SVG Flowchart */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-[#1A1A1A] rounded-sm overflow-x-auto"
                >
                    <svg viewBox="0 0 1260 210" className="w-full h-auto min-w-[1060px]" fill="none" style={{ padding: '28px 20px 16px' }}>
                        <defs>
                            <marker id="pipeArr" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                                <path d="M1 1L9 4L1 7" stroke="#555" strokeWidth="1.2" fill="none" />
                            </marker>
                        </defs>

                        <motion.text
                            x={BOX_X0} y="26" fill="#8A8680" fontSize="9" letterSpacing="2.4"
                            fontFamily="Inter,system-ui,sans-serif"
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
                        >
                            THE REPORTING WORKFLOW
                        </motion.text>

                        {/* page bands — which product page owns which stages */}
                        {pageBands.map((band, bi) => {
                            const idx = pipeline.reduce<number[]>((acc, s, i) => (s.page === band.page ? [...acc, i] : acc), []);
                            const x1 = stageX(idx[0]);
                            const x2 = stageX(idx[idx.length - 1]) + BOX_W;
                            return (
                                <motion.g
                                    key={band.page}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1, transition: { delay: 0.1 + bi * 0.08, duration: 0.5 } },
                                    }}
                                >
                                    <text
                                        x={(x1 + x2) / 2} y="58" fill="#E8E4DC" fontSize="8.5" letterSpacing="1.4"
                                        textAnchor="middle" fontFamily="Inter,system-ui,sans-serif"
                                    >
                                        {band.title}
                                    </text>
                                    <line x1={x1} y1="66" x2={x2} y2="66" stroke="#5A5A5A" strokeWidth="1" />
                                    <line x1={x1} y1="66" x2={x1} y2="72" stroke="#5A5A5A" strokeWidth="1" />
                                    <line x1={x2} y1="66" x2={x2} y2="72" stroke="#5A5A5A" strokeWidth="1" />
                                </motion.g>
                            );
                        })}

                        {pipeline.map((stage, i) => {
                            const x = stageX(i);
                            const on = stage.page !== null;
                            return (
                                <motion.g
                                    key={`${stage.label}-${i}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 12 },
                                        visible: { opacity: 1, y: 0, transition: { delay: 0.4 + i * 0.07, duration: 0.5 } },
                                    }}
                                >
                                    {i < pipeline.length - 1 && (
                                        <line
                                            x1={x + BOX_W} y1="116" x2={x + BOX_W + BOX_GAP - 2} y2="116"
                                            stroke="#555" strokeWidth="1" markerEnd="url(#pipeArr)"
                                        />
                                    )}

                                    <rect
                                        x={x} y="84" width={BOX_W} height="64" rx="4"
                                        fill={on ? "#E8E4DC" : "#1F1F1F"}
                                        stroke={on ? "#E8E4DC" : "#3A3A3A"}
                                        strokeWidth="1"
                                    />
                                    <text
                                        x={x + 11} y="103"
                                        fill={on ? "#8A8680" : "#5A5A5A"}
                                        fontSize="8" fontFamily="Inter,system-ui,sans-serif"
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </text>
                                    <text
                                        x={x + 11} y="124"
                                        fill={on ? "#141414" : "#8A8680"}
                                        fontSize="10.5" fontFamily="Inter,system-ui,sans-serif"
                                    >
                                        {stage.label}
                                    </text>
                                    {stage.label2 && (
                                        <text
                                            x={x + 11} y="138"
                                            fill={on ? "#141414" : "#8A8680"}
                                            fontSize="10.5" fontFamily="Inter,system-ui,sans-serif"
                                        >
                                            {stage.label2}
                                        </text>
                                    )}
                                </motion.g>
                            );
                        })}

                        <motion.g
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { delay: 1.1, duration: 0.5 } },
                            }}
                        >
                            <rect x={BOX_X0} y="176" width="18" height="7" rx="1.5" fill="#E8E4DC" />
                            <text x={BOX_X0 + 26} y="183" fill="#A09A92" fontSize="9" fontFamily="Inter,system-ui,sans-serif">
                                Redesigned and rebuilt — the entire reporting workflow, all eleven stages
                            </text>
                        </motion.g>
                    </svg>
                </motion.div>
            </section>

            {/* The Solution - Three Pillars */}
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
                                The Solution
                            </h2>
                        </div>
                        <div className="max-w-xl">
                            <h2 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">
                                The Pages I Rebuilt
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The product is seven pages, and that number is misleading — each one is a phase of the reporting workflow, not a screen. Together they carry all eleven steps that turn a pile of inconsistent source files into a filing sent to the regulator, moving datasets of tens of thousands of rows between them. The seventh sits alongside the pipeline rather than inside it: a dashboard builder over the data the pipeline produces.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Cross-cutting: navigation */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    {/* The real thing, full width — a thin strip is unreadable in a column. */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-14 overflow-hidden rounded-md border border-[#C5C0B8] bg-white shadow-lg"
                    >
                        <img
                            src={`${SHOT_BASE}/nav-strip.jpg`}
                            alt="The stepped navigation: eleven stages, each carrying its own status"
                            className="w-full"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                    >
                        <div className="max-w-md">
                            <p className="text-xs text-gray-500 tracking-wide mb-6">00 / The Run</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Run, Legible at a Glance</h3>
                            <p className="text-sm text-gray-500 mb-6">Breadcrumbs → Stepped Navigation</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                The legacy product had breadcrumbs. They told you where you were, but not that the work is a sequence — nothing conveyed what was done, what was current, or what was still ahead.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">A status per stage:</span> How many funds, how many files, how many sheets still unmapped — the state of the whole run readable without opening anything.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Failure in place:</span> A stage that did not finish says so where it stands — "Finished · 1 failed", "Resolve issues first" — instead of being discovered three steps downstream.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Six levels into three:</span> On a screen whose entire job is showing tables, vertical space is the scarcest thing there is. Every row reclaimed from chrome is a row of data the reviewer can see.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-sm bg-[#C5C0B8]/40 p-6">
                            <svg viewBox="0 0 520 230" className="w-full h-auto" fill="none">
                                <text x="20" y="18" fill="#6A665F" fontSize="10" letterSpacing="1.6" fontFamily="Inter,system-ui,sans-serif">LEGACY</text>
                                <text x="285" y="18" fill="#141414" fontSize="10" letterSpacing="1.6" fontFamily="Inter,system-ui,sans-serif">REDESIGNED</text>

                                <rect x="20" y="30" width="215" height="180" rx="3" fill="#E8E4DC" stroke="#B5B0A8" strokeWidth="1" />
                                {[0, 1, 2, 3, 4, 5].map((n) => (
                                    <rect key={n} x="30" y={40 + n * 17} width="195" height="11" rx="2" fill="#B5B0A8" />
                                ))}
                                <rect x="30" y="146" width="195" height="54" rx="2" fill="#F5F3EE" stroke="#B5B0A8" strokeWidth="1" strokeDasharray="3 3" />
                                <text x="127" y="177" fill="#8A8680" fontSize="10" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">data</text>

                                <rect x="285" y="30" width="215" height="180" rx="3" fill="#E8E4DC" stroke="#141414" strokeWidth="1" />
                                {[0, 1, 2].map((n) => (
                                    <rect key={n} x="295" y={40 + n * 17} width="195" height="11" rx="2" fill="#141414" />
                                ))}
                                <rect x="295" y="95" width="195" height="105" rx="2" fill="#F5F3EE" stroke="#141414" strokeWidth="1" />
                                <text x="392" y="151" fill="#141414" fontSize="10" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">data</text>

                                <text x="260" y="226" fill="#6A665F" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">
                                    Six levels of navigation collapsed into three
                                </text>
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* 01 — Intake */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">01 / Intake</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">Setting Up the Reporting Run</h3>
                            <p className="text-sm text-gray-500 mb-6">Funds · Jurisdiction · Source Files</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                Before a number moves, the run has to be scoped: which funds, which regime — Annex IV or Form PF — and which files feed it. Then the hard part, pairing this quarter's files with last quarter's so the mapping already done can be inherited.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Stacked layout:</span> Every fund on one page, so a previous-to-current pair reads as a single row instead of a walk through each fund in turn.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Shared vs. fund-specific:</span> Colour-coded tags separate a file common to every fund from one belonging to a single fund — a distinction the backend can only express as copies.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Old and new in the same page:</span> The <span className="text-[#141414]">Classic / Stacked</span> switch is the opt-in delivery model surfacing as a control — Classic is the legacy layout, Stacked is the redesign. Users compared them on their own data and moved when they were ready.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="lg:col-span-1 lg:-mr-8"
                        >
                            <ShotFrame shot={shots[0]} onOpen={() => setLightbox(0)} />
                        </motion.div>
                    </div>
                </div>

                {/* 02 — Mapping */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 lg:-ml-8"
                        >
                            <ShotFrame shot={shots[1]} onOpen={() => setLightbox(1)} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="order-1 lg:order-2 max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">02 / Mapping</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">An Agent That Runs the Whole Thing</h3>
                            <p className="text-sm text-gray-500 mb-6">Autonomous Agent · Category Mapping · Sheet Mapping</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                Every file has to be told what it is, and every sheet which data it holds. Done by hand that is the dullest work in the product — so the pipeline has a second path through an agent that <span className="text-[#141414]">does the work itself, step by step</span>.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Autonomous, not advisory:</span> It creates the project, maps the sheets, runs the extraction, generates the report. Anything the pages do by hand it can do on its own.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">One step at a time, out loud:</span> It says what it found and what it is about to do, then waits. On a filing that has to be right, an agent running ahead silently is worse than none.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">The manual path stays:</span> Mapping by hand is still a designed flow. In the legacy product that case existed only as a dead end.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* 03 — Extraction */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">03 / Extraction</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">Extraction Into Categories</h3>
                            <p className="text-sm text-gray-500 mb-6">Extraction · Split-Screen Reconciliation · CanvasGrid</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                Mapped data gets pulled into its reporting categories. The question that decides whether anyone trusts the result: can the reviewer see what the system did? So the screen splits — source on one side, extracted result on the other.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Column auto-mapping:</span> Columns are matched to their categories automatically, so the manual pass starts from a proposal rather than a blank slate.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">A contract, not a component:</span> The legacy table read the active tab from the URL and assumed the first row was a header — coupling invisible from outside. CanvasGrid takes its state from props.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">No row ceiling:</span> The old grid rendered a DOM node per cell and had to truncate. CanvasGrid paints only what is visible, so the full dataset arrives intact.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="lg:col-span-1 lg:-mr-8"
                        >
                            <ShotFrame shot={shots[2]} onOpen={() => setLightbox(2)} />
                        </motion.div>
                    </div>
                </div>

                {/* Pillar 4: Transformation */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 lg:-ml-8"
                        >
                            <ShotFrame shot={shots[3]} onOpen={() => setLightbox(3)} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="order-1 lg:order-2 max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">04 / Transformation</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">Transformation and Merge</h3>
                            <p className="text-sm text-gray-500 mb-6">Transformation · Merge · Dictionaries · Split-Screen</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                Extracted values are not report fields yet. They have to be reshaped into what the form expects, merged across sources, and normalised through dictionaries so one entity spelled three ways by three custodians resolves to one value.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Split-screen again:</span> Input beside output, the same before-and-after reading as extraction, so a transformation is verified rather than taken on faith.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Dictionary lookups:</span> Applied during the merge, so inconsistent source values normalise to the vocabulary the regulator expects.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Ask AI to adjust:</span> A step's rule can be amended in plain language instead of rebuilt by hand in the condition builder.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Pillar 5: Report */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">05 / Report</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Report Before It Ships</h3>
                            <p className="text-sm text-gray-500 mb-6">Review · Multi-Fund Comparison</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                The last look before a filing leaves. In the legacy product, comparing several funds side by side lived behind a separate mode — the thing reviewers do most was the thing they had to go find.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Comparison by default:</span> What used to be an optional mode is what the page now opens with, funds laid out in columns.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Denser cells:</span> Smaller cells carrying more information, so more of the report is comparable without scrolling.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Validation in view:</span> Critical and advisory counts sit along the bottom, each with the failing field's rule in plain language rather than an error code.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="lg:col-span-1 lg:-mr-8"
                        >
                            <ShotFrame shot={shots[4]} onOpen={() => setLightbox(4)} />
                        </motion.div>
                    </div>
                </div>

                {/* Pillar 6: Approval */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 lg:-ml-8"
                        >
                            <ShotFrame shot={shots[5]} onOpen={() => setLightbox(5)} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="order-1 lg:order-2 max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">06 / Approval</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">Sign-Off, and Who Gets to Give It</h3>
                            <p className="text-sm text-gray-500 mb-6">Reviewers · Permissions · Submission</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                Nothing reaches a regulator on one person's say-so. Reviewers are named on a filing, each with their own reach — every fund or a chosen few — and their own weight: some are there to look, others have to sign.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Reach and weight, separately:</span> What a reviewer can see and what they must approve are two settings, resolved per fund rather than for the filing as a whole.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Sign-off in progress:</span> Two of three funds cleared is a state the interface shows, not something you reconstruct from an inbox.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Fewer, deeper dialogs:</span> The legacy product scattered this across old pop-ups. I consolidated them and pushed advanced settings a level down, so the common path is short and the rare one stays reachable.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Pillar 6: Dashboards — beside the pipeline, not inside it */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">07 / Dashboards</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">Custom Dashboards</h3>
                            <p className="text-sm text-gray-500 mb-6">Widget Library · Composition · Saved Views</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                The pipeline produces a lot of structured data, and the questions asked of it do not fit a fixed screen — every management company watches something slightly different. So the product got its own BI layer.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Widget library:</span> Sixteen types, among them KPI cards, free-style tables, bar, line, scatter, pie, heatmap, treemap and funnel charts, plus headers, text and filters.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Composition:</span> Widgets are dragged onto a canvas and arranged across tabs, each opening a panel split into Data and Design.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Bound to the real data:</span> A widget points at a dataset, or at raw SQL when the question is more specific than the picker allows. Nothing is exported, so nothing goes stale.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-1 lg:-mr-8"
                        >
                            <ShotFrame shot={shots[6]} onOpen={() => setLightbox(6)} />
                        </motion.div>
                    </div>
                </div>

            </section>

            {/* The Engine Room — deep dive */}
            <section className="bg-[#141414] px-8 lg:px-16 py-28">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">Delivery</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">Shipping Into a Live Product</h2>
                    <div className="max-w-2xl">
                        <p className="text-base text-[#A09A92] leading-relaxed mb-4">
                            Clients were filing real reports through this product the entire time it was being rebuilt. The usual answer — a long redesign branch, then one big merge — would have meant months without feedback and a single cutover carrying all the risk at once.
                        </p>
                        <p className="text-base text-[#A09A92] leading-relaxed">
                            So I built the new product layer <span className="text-white">alongside</span> the old one rather than on top of it. Both stacks ship in the same binary, the legacy one stays the default, and a toggle in the interface moves between them.
                        </p>
                    </div>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0, duration: 0.6 }}
                        className="bg-[#1F1F1F] px-10 py-12 rounded-sm"
                    >
                        <p className="text-xs text-[#8A8680] tracking-wide mb-6">01</p>
                        <h3 className="text-lg font-normal text-white mb-3">Separate Files, Not Branches</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed mb-4">
                            New pages live in entirely separate files. The legacy implementation is never edited, so hotfixes keep landing in it while the redesign moves independently.
                        </p>
                        <ul className="space-y-2 text-xs text-[#8A8680]">
                            <li><span className="text-[#A09A92]">No shared edits:</span> Zero merge conflicts between old-stack fixes and new-stack work.</li>
                            <li><span className="text-[#A09A92]">No rollback needed:</span> The legacy path was never removed, so there was nothing to revert.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="bg-[#1F1F1F] px-10 py-12 rounded-sm"
                    >
                        <p className="text-xs text-[#8A8680] tracking-wide mb-6">02</p>
                        <h3 className="text-lg font-normal text-white mb-3">A Toggle, Not a Cutover</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed mb-4">
                            Switching between the old and new interface happens in-app, per user. Adoption became a decision each person makes rather than a date the whole product has to hit.
                        </p>
                        <ul className="space-y-2 text-xs text-[#8A8680]">
                            <li><span className="text-[#A09A92]">Side-by-side review:</span> The team compared both versions against the same data by toggling back and forth.</li>
                            <li><span className="text-[#A09A92]">Clients unaffected:</span> Production stayed on the stable path throughout. Zero downtime.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-[#1F1F1F] px-10 py-12 rounded-sm"
                    >
                        <p className="text-xs text-[#8A8680] tracking-wide mb-6">03</p>
                        <h3 className="text-lg font-normal text-white mb-3">Contained Failure</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed mb-4">
                            Every new page is wrapped in its own ErrorBoundary. A fault in one redesigned page cannot take down the rest of the application around it.
                        </p>
                        <ul className="space-y-2 text-xs text-[#8A8680]">
                            <li><span className="text-[#A09A92]">Per-page blast radius:</span> Failures stay local instead of blanking the whole app.</li>
                            <li><span className="text-[#A09A92]">Shipped continuously:</span> Every page reached main as it was finished, not at the end.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* The Agency Brain Workflow — SVG Flowchart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24 mb-0"
                >
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-3">Delivery Model</p>
                    <h3 className="text-xl lg:text-2xl font-light font-heading text-white mb-2">Two Stacks, One Binary</h3>
                    <p className="text-sm text-[#8A8680] mb-10">How a live regulatory product gets rebuilt without a cutover</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-[#111] rounded-sm overflow-x-auto"
                >
                    <svg viewBox="0 0 1000 330" className="w-full h-auto min-w-[820px]" fill="none" style={{ padding: '28px 20px 16px' }}>
                        <defs>
                            <marker id="optArr" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                                <path d="M1 1L9 4L1 7" stroke="#555" strokeWidth="1.2" fill="none" />
                            </marker>
                        </defs>

                        {/* ── the toggle, sitting between the two stacks ── */}
                        <motion.g variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.5 } } }}>
                            <rect x="430" y="140" width="140" height="52" rx="26" fill="#1F1F1F" stroke="#E8E4DC" strokeWidth="1.2" />
                            <circle cx="456" cy="166" r="13" fill="#E8E4DC" />
                            <text x="480" y="163" fill="#E8E4DC" fontSize="10" fontFamily="Inter,system-ui,sans-serif">In-app</text>
                            <text x="480" y="176" fill="#8A8680" fontSize="10" fontFamily="Inter,system-ui,sans-serif">toggle</text>
                        </motion.g>

                        {/* ── legacy stack (default) ── */}
                        <motion.g variants={{ hidden: { opacity: 0, x: -14 }, visible: { opacity: 1, x: 0, transition: { delay: 0.25, duration: 0.55 } } }}>
                            <text x="40" y="52" fill="#8A8680" fontSize="9" letterSpacing="2" fontFamily="Inter,system-ui,sans-serif">LEGACY STACK — DEFAULT</text>
                            <rect x="40" y="66" width="330" height="88" rx="5" fill="#1F1F1F" stroke="#3A3A3A" strokeWidth="1" />
                            <text x="60" y="94" fill="#A09A92" fontSize="12" fontFamily="Inter,system-ui,sans-serif">Original pages</text>
                            <text x="60" y="116" fill="#5A5A5A" fontSize="10" fontFamily="Inter,system-ui,sans-serif">Never edited during the rebuild.</text>
                            <text x="60" y="132" fill="#5A5A5A" fontSize="10" fontFamily="Inter,system-ui,sans-serif">Hotfixes keep landing here.</text>
                            <line x1="370" y1="110" x2="428" y2="150" stroke="#555" strokeWidth="1" markerEnd="url(#optArr)" />
                        </motion.g>

                        {/* ── new stack (opt-in) ── */}
                        <motion.g variants={{ hidden: { opacity: 0, x: 14 }, visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.55 } } }}>
                            <text x="630" y="52" fill="#E8E4DC" fontSize="9" letterSpacing="2" fontFamily="Inter,system-ui,sans-serif">NEW STACK — OPT-IN</text>
                            <rect x="630" y="66" width="330" height="88" rx="5" fill="#E8E4DC" stroke="#E8E4DC" strokeWidth="1" />
                            <text x="650" y="94" fill="#141414" fontSize="12" fontFamily="Inter,system-ui,sans-serif">Redesigned pages</text>
                            <text x="650" y="116" fill="#6A6A6A" fontSize="10" fontFamily="Inter,system-ui,sans-serif">Separate files. Own ErrorBoundary each.</text>
                            <text x="650" y="132" fill="#6A6A6A" fontSize="10" fontFamily="Inter,system-ui,sans-serif">Evolves independently.</text>
                            <line x1="628" y1="110" x2="572" y2="150" stroke="#555" strokeWidth="1" markerEnd="url(#optArr)" />
                        </motion.g>

                        {/* ── who sits where ── */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.55 } } }}>
                            <line x1="205" y1="158" x2="205" y2="228" stroke="#555" strokeWidth="1" markerEnd="url(#optArr)" strokeDasharray="3 3" />
                            <rect x="80" y="234" width="250" height="46" rx="5" fill="#141414" stroke="#3A3A3A" strokeWidth="1" />
                            <text x="100" y="255" fill="#A09A92" fontSize="11" fontFamily="Inter,system-ui,sans-serif">Clients — the entire time</text>
                            <text x="100" y="270" fill="#5A5A5A" fontSize="9.5" fontFamily="Inter,system-ui,sans-serif">Filing real reports. Zero downtime.</text>

                            <line x1="795" y1="158" x2="795" y2="228" stroke="#555" strokeWidth="1" markerEnd="url(#optArr)" strokeDasharray="3 3" />
                            <rect x="670" y="234" width="250" height="46" rx="5" fill="#141414" stroke="#3A3A3A" strokeWidth="1" />
                            <text x="690" y="255" fill="#A09A92" fontSize="11" fontFamily="Inter,system-ui,sans-serif">Team — testing in parallel</text>
                            <text x="690" y="270" fill="#5A5A5A" fontSize="9.5" fontFamily="Inter,system-ui,sans-serif">Same data, toggling to compare.</text>
                        </motion.g>

                        <motion.text
                            x="500" y="314" fill="#5A5A5A" fontSize="9.5" textAnchor="middle"
                            fontFamily="Inter,system-ui,sans-serif"
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.85, duration: 0.5 } } }}
                        >
                            Shipped page by page — instead of one cutover at the end
                        </motion.text>
                    </svg>
                </motion.div>

                {/* Tech Stack Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-16 pt-8 border-t border-[#2A2A2A]"
                >
                    <p className="text-[10px] text-[#555] tracking-widest uppercase">Tech Stack: React 18 · TypeScript · Vite · Mantine 7 · MobX · React Query · canvas-datagrid · CSS Modules</p>
                    <p className="text-[10px] text-[#555] tracking-widest uppercase mt-2">Tools: Claude Design · Claude Code</p>
                </motion.div>
            </section>

            {/* Method — how AI-assisted code reached production */}
            <section className="px-8 lg:px-16 py-28 bg-[#D4D0C8]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">Method</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414] mb-6">
                        Getting Production Quality Out of an AI Tool
                    </h2>
                    <div className="max-w-2xl space-y-4">
                        <p className="text-base text-gray-700 leading-relaxed">
                            I built this with Claude Code, into a product where clients were filing regulatory reports the whole time. The interesting question is not whether an AI tool can write React — it can. It is what you put around it so that being wrong is cheap, and so that "wrong" surfaces in CI or in a toggle rather than in someone's filing.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed">
                            Everything below is the same architecture described above, read from a different angle. It was not designed as an AI workflow — it turned out to be one.
                        </p>
                        <Link
                            to="/method"
                            className="group inline-flex items-center gap-2 text-sm font-medium text-[#141414] pt-2 hover:gap-3 transition-all"
                        >
                            The full version, including what it does not fix
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                    {[
                        {
                            n: "01",
                            title: "Contain the blast radius first",
                            body: "Before any of it was written, the shape was fixed: new pages in their own files, the legacy stack untouched and still the default, an ErrorBoundary around each page. Generated code does not have to be perfect if the worst it can do is break one screen.",
                        },
                        {
                            n: "02",
                            title: "Ship somewhere being wrong is reversible",
                            body: "The new interface was opt-in. A page that turned out badly cost a toggle back, not a rollback, not a hotfix, not an incident. That changes how much you can afford to try.",
                        },
                        {
                            n: "03",
                            title: "Verify against real data, not against the diff",
                            body: "Reading generated code line by line scales badly and catches the wrong class of error. Running it against the actual quarterly dataset catches what review misses. Designing and building it myself meant that check was immediate rather than a ticket.",
                        },
                        {
                            n: "04",
                            title: "Put the contract under test",
                            body: "Where a boundary mattered, a test enforced it — CanvasGrid's modules each testable alone, and a contract test against the library underneath. AI-written code is fine inside a boundary something else is guarding.",
                        },
                        {
                            n: "05",
                            title: "Keep the deciding human",
                            body: "Prototypes, review with the analyst who uses the platform daily, then presentation to the team — all before a line of production code. The tool compressed the typing, not the judgement about what to build.",
                        },
                        {
                            n: "06",
                            title: "Let it change the unit of work",
                            body: "When implementation stops being the bottleneck, shipping a whole page at a time becomes reasonable, and the design can be corrected in production instead of defended in a spec. That is what made rebuilding the whole product at this pace possible.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            className="border-t border-[#141414]/20 pt-6"
                        >
                            <p className="text-xs text-gray-500 mb-3">{item.n}</p>
                            <h3 className="text-lg font-normal text-[#141414] mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Key challenge */}
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

                <div className="max-w-3xl">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={challenge.letter}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="bg-[#FAFAF8] px-14 py-16 rounded-sm"
                        >
                            <div className="mb-8">
                                <span className="text-xs font-medium text-gray-400">{challenge.letter}</span>
                            </div>

                            <h3 className="text-2xl font-normal text-[#141414] mb-2">{challenge.title}</h3>
                            <p className="text-sm text-gray-400 mb-10">{challenge.subtitle}</p>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-2">Problem</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{challenge.problem}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-2">Solution</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{challenge.solution}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-2">Result</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{challenge.result}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Results */}
            <section className="bg-[#EAE6DE] px-8 lg:px-16 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-12 lg:gap-24">
                    {/* Left label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">Results</h2>
                    </motion.div>

                    {/* Right — stats */}
                    <div>
                        {/* Stat 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[56px] items-center py-12 border-t border-gray-200"
                        >
                            <p className="text-5xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-left lg:text-right">7</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Pages — the entire product</p>
                                <p className="text-sm text-gray-500 leading-relaxed">Not seven pages out of forty — seven is the whole surface. Each carries one or more workflow stages, handling tens of thousands of rows, and several had never been designed at all before this. Six months, full time.</p>
                            </div>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[56px] items-center py-12 border-t border-gray-200"
                        >
                            <p className="text-5xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-left lg:text-right">2</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">New clients signed in the first month</p>
                                <p className="text-sm text-gray-500 leading-relaxed">Two management companies signed within the first month of the redesign going out. In regulatory reporting a client is a long, high-value contract, and the product has to survive a demo before anyone talks price — which is where looking considered rather than accumulated starts to pay.</p>
                            </div>
                        </motion.div>

                        {/* Stat 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[56px] items-center py-12 border-t border-gray-200"
                        >
                            <p className="text-5xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-left lg:text-right">11</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Workflow stages</p>
                                <p className="text-sm text-gray-500 leading-relaxed">Every step of a reporting run, from choosing the funds to sending the filing. None was left to the legacy interface, and several had no designed flow at all before this.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Closing Reflection */}
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
                            The hard part was never the visual layer. It was designing for a domain where a wrong number becomes a wrong regulatory filing, and then landing that design inside a product clients were actively filing through. <span className="text-white">Designing and building it myself</span> meant every decision got tested against real data in the browser rather than argued about in a spec.
                        </p>
                        <div className="space-y-8 border-t border-white/10 pt-10">
                            <div>
                                <p className="text-sm font-semibold text-white mb-3">What I traded away</p>
                                <p className="text-base font-light text-[#A09A92] leading-relaxed">
                                    The backend cannot express "this file belongs to these three funds" — only copies. I designed around it with colour-coded tags rather than pushing to change the data model. That kept the redesign shippable on schedule, and it leaves the awkwardness intact: a file belonging to three funds is still three rows underneath, and the tags make that legible rather than untrue.
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

export default CaseDatox;
