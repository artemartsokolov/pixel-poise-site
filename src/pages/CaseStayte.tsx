import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/* ── Premium easing curve (matches Hero.tsx) ── */
const smooth = [0.22, 1, 0.36, 1] as const;

const SHOT = "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero";

/* The nine stages of a run, in the order a lead actually moves through them.
   Stage 6 feeds back into stage 4 — that loop is the product. */
const stages = [
    {
        n: "01",
        title: "Intake",
        lead: "Four ways in, none of them tidy.",
        body: "A lead arrives by manual entry, by sync from the agency's CRM, from a Facebook lead ad, or from a form on a property aggregator like Idealista. Each source carries different fields, different completeness and a different level of intent. The system accepts all four without anyone reformatting anything by hand.",
    },
    {
        n: "02",
        title: "Routing",
        lead: "The source decides the first move.",
        body: "A lead does not get one generic treatment. Workflows match against criteria and fire on their own. Someone who filled in a form on Idealista is already looking at a specific property, so they get a call straight away. Someone from a Facebook ad is colder — an email first, and a call only if the email goes unanswered.",
    },
    {
        n: "03",
        title: "Qualification",
        lead: "How hard to chase, decided by the agency and not by me.",
        body: "How many times to call. How long to wait between attempts. How many callbacks before a lead is left alone. What counts as qualified at the end of it. All of it configurable, because every agency's patience is different and none of them wanted to ask a developer to change it.",
    },
    {
        n: "04",
        title: "Selection",
        lead: "A shortlist built for one person.",
        body: "The property database is the client's own MLS, connected with an API key: paste the key and everything the agency is allowed to show appears. From that, the system assembles a selection for this specific lead rather than a generic feed.",
        shot: `${SHOT}/ai-selection.png`,
        alt: "A generated property selection as the client receives it",
    },
    {
        n: "05",
        title: "Delivery",
        lead: "Sent where the client already is.",
        body: "The selection goes out over the WhatsApp API. No app to install, no portal to log into, no email that sits unread — the shortlist arrives in the thread the client uses for everything else.",
    },
    {
        n: "06",
        title: "Learning",
        lead: "Like, dislike, and the next one is closer.",
        body: "Every property in a selection can be liked or disliked. Those signals are not a rating for its own sake — they feed straight back into stage four, so the next selection is built with them. The loop is the part that makes the system worth having rather than a scheduler with extra steps.",
        shot: `${SHOT}/ai-assistent.png`,
        alt: "The assistant surface where preferences are gathered and explained",
    },
    {
        n: "07",
        title: "Enrichment",
        lead: "What was learned on the phone stops living on the phone.",
        body: "Call outcomes, and what the agent actually heard while speaking to the person, get aggregated, sorted into the right tables and written back. The knowledge that normally evaporates between a call and a CRM field ends up somewhere the rest of the system can read it.",
    },
    {
        n: "08",
        title: "CRM sync",
        lead: "Two-way, with HubSpot and Pipedrive.",
        body: "Everything the run produces updates the agency's CRM automatically, and changes made in the CRM come back the other way. When a lead meets the criteria for the next stage of the deal, the deal moves on its own rather than waiting for someone to remember.",
    },
    {
        n: "09",
        title: "Dashboard",
        lead: "Everything scheduled and everything done, by agent.",
        body: "One surface for the whole operation: what is planned, what has run, what each agent is carrying. Managing a brokerage stops being a matter of asking people how it is going.",
        shot: `${SHOT}/dashboard.png`,
        alt: "The activity dashboard across agents and scheduled work",
    },
];

const CaseStayte = () => {
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
                        className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-[#141414] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Work
                    </Link>
                </motion.div>
            </div>

            {/* ═══ Hero ═══ */}
            <section>
                <div className="w-full h-[50vh] bg-[#2A2A2A] overflow-hidden relative">
                    <motion.img
                        src={`${SHOT}/revierohero6-1.png`}
                        alt="Stayte — the system the brokerage runs on"
                        className="w-full h-full object-cover object-center"
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.8, ease: smooth }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-[#F5F3EE]"
                        initial={{ scaleY: 1 }}
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

                        <div>
                            <div className="grid grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    {[
                                        { label: "Date", value: "2024 – Feb 2026" },
                                        { label: "Location", value: "Spain" },
                                        { label: "Services", value: "Product Design\nFrontend Engineering\nBackend & Integrations" },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.9 + i * 0.1, duration: 0.6 }}
                                        >
                                            <p className="text-xs text-gray-400 mb-2">{item.label}</p>
                                            <p className="text-sm text-[#141414] whitespace-pre-line leading-relaxed">{item.value}</p>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="space-y-8">
                                    {[
                                        { label: "Role", value: "Design Engineer\n(everything but the mobile app)" },
                                        { label: "Target", value: "Brokerage teams (B2B)\nBuyers and investors (B2C)" },
                                        { label: "Platform", value: "Web OS · Supabase\nMLS API · WhatsApp\nHubSpot · Pipedrive\nTwilio · Vapi" },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.0 + i * 0.1, duration: 0.6 }}
                                        >
                                            <p className="text-xs text-gray-400 mb-2">{item.label}</p>
                                            <p className="text-sm text-[#141414] whitespace-pre-line leading-relaxed">{item.value}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-8 lg:px-16"><div className="border-t border-gray-300" /></div>

            {/* ═══ The Brief ═══ */}
            <section className="px-8 lg:px-16 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">The Brief</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="max-w-2xl space-y-5"
                    >
                        <p className="text-xl lg:text-2xl font-light text-[#141414] leading-relaxed">
                            Everything an estate agency does before a deal closes is a chain of small manual acts — copy the lead out of the form, call it, remember to call again, put a list of properties together in a chat, update the CRM if there is time.
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Stayte replaced the chain with a system. Not a CRM and not a lead tool: the layer that runs everything between a lead arriving and a deal moving, and keeps the CRM correct as a side effect rather than as a chore.
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed">
                            It began as a marketplace with a mobile app for buyers. The part that turned out to matter was underneath it — the machinery the brokerage itself runs on. This case is about that.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="px-8 lg:px-16"><div className="border-t border-gray-300" /></div>

            {/* ═══ My Role ═══ */}
            <section className="px-8 lg:px-16 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">My Role</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="max-w-2xl space-y-5"
                    >
                        <p className="text-xl lg:text-2xl font-light text-[#141414] leading-relaxed">
                            I built the system. Everything except the mobile app, where I did the design and nothing else.
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed">
                            The interface, the Supabase backend and its functions, the workflow engine, and every integration underneath: the MLS connection, the WhatsApp delivery, the two-way CRM sync, the voice and messaging providers. Design and production code were the same job, done by the same person, which is why the shape of the system and the shape of the screens agree with each other.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══ The Run — pipeline diagram ═══ */}
            <section className="bg-[#141414] px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">One Lead, End to End</h2>
                    <p className="text-base font-light text-[#A09A92] leading-relaxed max-w-2xl">
                        Nine stages between a lead appearing and a deal moving. Stage six loops back into stage four — that loop is what separates this from a scheduler.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full overflow-x-auto"
                >
                    <svg viewBox="0 0 1300 300" className="w-full min-w-[900px]" role="img" aria-label="Nine-stage pipeline from intake to dashboard, with a feedback loop from learning back to selection">
                        {/* sources */}
                        {[
                            { y: 30, t: "Manual entry" },
                            { y: 66, t: "CRM sync" },
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
                            { x: 350, t: "Routing", n: "02" },
                            { x: 485, t: "Qualification", n: "03" },
                            { x: 620, t: "Selection", n: "04" },
                            { x: 755, t: "Delivery", n: "05" },
                            { x: 890, t: "Learning", n: "06" },
                            { x: 1025, t: "Enrichment", n: "07" },
                            { x: 1160, t: "CRM sync", n: "08" },
                        ].map((s, i) => (
                            <g key={s.n}>
                                <rect x={s.x} y="84" width="115" height="46" rx="3" fill="#1F1F1F" stroke={s.n === "04" || s.n === "06" ? "#8A8078" : "#3A3A3A"} />
                                <text x={s.x + 10} y="101" fill="#5A5A5A" fontSize="9">{s.n}</text>
                                <text x={s.x + 57} y="119" textAnchor="middle" fill="#E8E4DE" fontSize="12">{s.t}</text>
                                {i < 7 && <line x1={s.x + 115} y1="107" x2={s.x + 135} y2="107" stroke="#3A3A3A" strokeWidth="1" markerEnd="url(#ar)" />}
                            </g>
                        ))}

                        <defs>
                            <marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6" fill="none" stroke="#3A3A3A" strokeWidth="1" />
                            </marker>
                            <marker id="arL" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6" fill="none" stroke="#8A8078" strokeWidth="1" />
                            </marker>
                        </defs>

                        {/* feedback loop: Learning (06) back into Selection (04) */}
                        <path d="M 947 130 L 947 185 L 677 185 L 677 132" fill="none" stroke="#8A8078" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arL)" />
                        <text x="812" y="201" textAnchor="middle" fill="#8A8078" fontSize="10">likes and dislikes refine the next selection</text>

                        {/* MLS feeds selection */}
                        <rect x="560" y="228" width="180" height="26" rx="3" fill="none" stroke="#3A3A3A" />
                        <text x="650" y="245" textAnchor="middle" fill="#A09A92" fontSize="11">Client MLS · via API key</text>
                        <line x1="650" y1="228" x2="662" y2="132" stroke="#3A3A3A" strokeWidth="1" markerEnd="url(#ar)" />

                        {/* CRM two-way */}
                        <rect x="1130" y="228" width="170" height="26" rx="3" fill="none" stroke="#3A3A3A" />
                        <text x="1215" y="245" textAnchor="middle" fill="#A09A92" fontSize="11">HubSpot · Pipedrive</text>
                        <line x1="1215" y1="228" x2="1218" y2="134" stroke="#3A3A3A" strokeWidth="1" />
                        <text x="1240" y="180" fill="#5A5A5A" fontSize="9">two-way</text>

                        {/* dashboard reads everything */}
                        <rect x="215" y="228" width="180" height="26" rx="3" fill="none" stroke="#3A3A3A" />
                        <text x="305" y="245" textAnchor="middle" fill="#A09A92" fontSize="11">09 · Dashboard</text>
                        <line x1="305" y1="228" x2="290" y2="134" stroke="#3A3A3A" strokeWidth="1" strokeDasharray="2 3" />
                    </svg>
                </motion.div>
            </section>

            {/* ═══ Stage by stage ═══ */}
            <section className="px-8 lg:px-16 py-28">
                <div className="max-w-3xl space-y-20">
                    {stages.map((s, i) => (
                        <motion.div
                            key={s.n}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: (i % 2) * 0.06, duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-4 lg:gap-10 border-t border-gray-300 pt-8"
                        >
                            <p className="text-sm text-gray-400 font-light">{s.n}</p>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-normal text-[#141414] mb-3">{s.title}</h3>
                                <p className="text-base text-[#141414] leading-relaxed mb-3">{s.lead}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{s.body}</p>
                                {s.shot && (
                                    <div className="mt-8 rounded-lg overflow-hidden border border-[#C5C0B8] bg-white">
                                        <img
                                            src={s.shot}
                                            alt={s.alt}
                                            className="w-full h-auto"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══ The mobile app — designed, not built by me ═══ */}
            <section className="bg-[#D4D0C8] px-8 lg:px-16 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">The App for Agents</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="max-w-2xl space-y-5"
                    >
                        <p className="text-base text-gray-700 leading-relaxed">
                            Agents do most of their work away from a desk, so the system needed a surface that travelled with them: their deals, their clients, and the automations they would otherwise have to be at a computer to run — build a selection, send it to a client, without opening the OS.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed">
                            The part I cared most about was the notes. An agent finishes a viewing and speaks into their phone; the note is transcribed and lands in the CRM as a proper record. It is the same principle as stage seven — what gets learned out in the world should not stay there.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-[#141414]/20">
                            I designed this. I did not build it — the app was the one part of the system that was not mine to write.
                        </p>
                    </motion.div>
                </div>
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

                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#FAFAF8] px-8 lg:px-14 py-12 lg:py-16 rounded-sm"
                    >
                        <h3 className="text-2xl font-normal text-[#141414] mb-2">Every Agency Chases Differently</h3>
                        <p className="text-sm text-gray-400 mb-10">Workflow design</p>

                        <div className="space-y-6">
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
                                    An agency changes how it chases leads without anyone touching code, and the differences between sources — a warm Idealista enquiry against a cold Facebook lead — stop being an argument and become a setting.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══ Results ═══ */}
            <section className="px-8 lg:px-16 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px] items-start">
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
                                label: "Users acquired",
                                body: "Through the intake and qualification path described above, across every source the system accepts.",
                            },
                            {
                                stat: "~200",
                                label: "Deals closed",
                                body: "Deals that moved through the pipeline to completion, with the CRM kept in step automatically rather than by hand.",
                            },
                            {
                                stat: "9",
                                label: "Stages, one system",
                                body: "From a lead appearing to a deal advancing, with the learning loop folded in. None of it was left to a spreadsheet or a group chat.",
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
                            className="inline-block bg-white text-[#141414] px-8 py-4 rounded-sm text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                            Back to all projects
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CaseStayte;
