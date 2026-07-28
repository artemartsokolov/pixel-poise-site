import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ── Premium easing curve (matches Hero.tsx) ── */
const smooth = [0.22, 1, 0.36, 1] as const;

/* The six are the same ones summarised inside the Datox case. This page is
   where they get the room to be argued rather than listed. */
const principles = [
    {
        n: "01",
        title: "Contain the blast radius before you generate anything",
        body: [
            "The shape was fixed before a line was written: every new page in its own files, the legacy stack untouched and still the default, an ErrorBoundary around each page. Nothing I generated could take down a stage a client was mid-filing on.",
            "This is the step people skip, and it is the one that decides whether the rest works. Ask what the worst outcome is before you start. If the answer is \"one screen breaks and the old one is a click away\", generated code does not have to be perfect. If the answer is \"a filing goes out wrong\", fix that first — no amount of careful prompting substitutes for an architecture where being wrong is survivable.",
        ],
    },
    {
        n: "02",
        title: "Ship somewhere being wrong is reversible",
        body: [
            "The new interface was opt-in per user, running beside the old one for months. A page that turned out badly cost a toggle back — not a rollback, not a hotfix, not an incident, not a conversation with a compliance officer whose deadline I had just moved.",
            "That changes how much you can afford to try, which matters more than it sounds. When reverting is cheap you stop defending a design in review and start settling it in production, against the people who actually use it.",
        ],
    },
    {
        n: "03",
        title: "Verify against real data, not against the diff",
        body: [
            "Reading generated code line by line scales badly and catches the wrong class of error. It finds naming and structure. It does not find that a column mapper quietly drops a merged header cell, or that a grid janks at forty thousand rows — and those are the failures that reach a regulator.",
            "Running it against the actual quarterly dataset finds them in a minute. Designing and building it myself meant that check happened the same afternoon the decision was made, instead of becoming a ticket, a build, and someone else's reading of both.",
        ],
    },
    {
        n: "04",
        title: "Put the contract under test, not the implementation",
        body: [
            "Where a boundary mattered, a test enforced it. The canvas-rendered data grid was split into modules each testable alone, with a contract test against the third-party library underneath — so a library upgrade that changed behaviour failed in CI rather than in someone's quarterly.",
            "AI-written code is fine inside a boundary something else is guarding. AI-written code as the boundary is not. The distinction is most of the discipline.",
        ],
    },
    {
        n: "05",
        title: "Keep the deciding human",
        body: [
            "Prototypes first, then review with the analyst who uses the platform every day, then presentation to the Head of Regulatory Reporting, QA and the CEO — all before production code. The tool compressed the typing. It did not compress the judgement about what to build.",
            "Nothing in a model knew that a fund's reporting period is not a calendar quarter, or which of eleven pipeline stages a compliance officer silently distrusts and re-checks by hand. That came from sitting next to someone doing the work.",
        ],
    },
    {
        n: "06",
        title: "Let it change the unit of work",
        body: [
            "When implementation stops being the bottleneck, the sensible unit of work stops being a component and becomes a whole page — designed, built, wired to the backend and handed to QA in one pass. The design gets corrected in production instead of defended in a spec.",
            "That is the actual shift. Not typing faster: seven pages, eleven workflow stages, one person on both sides of a handoff that no longer exists.",
        ],
    },
];

/* A point of view is only worth reading if it includes the boundaries. */
const limits = [
    {
        title: "It does not know your domain",
        body: "Everything specific to regulatory reporting — what an AIF is, why a jurisdiction changes the shape of a filing, which numbers a reviewer will not trust without seeing the source row — came from people, not prompts. The tool is fluent and uninformed, which is a combination worth staying alert to.",
    },
    {
        title: "It does not make bad architecture good",
        body: "Every principle above is a structural decision made before generating anything. The tool amplifies whatever it lands in. Dropped into a codebase with no boundaries, it produces more code with no boundaries, faster.",
    },
    {
        title: "It is weakest exactly where the work is interesting",
        body: "The canvas grid, the node editor that lets a non-programmer wire up an AI agent, the split-screen that keeps an extracted table in sync with its raw source — the parts with no obvious prior art are where it needs the most steering and the most rewriting. It is quickest on the parts that matter least. Budget accordingly.",
    },
    {
        title: "It does not remove the need to understand what shipped",
        body: "Not line by line. But well enough to debug it at six in the evening before a filing deadline, without the person who could explain it being a model that has forgotten the conversation.",
    },
];

const Method = () => {
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

            {/* ═══ Hero — typographic, no image ═══ */}
            <section className="px-8 lg:px-16 pt-32 lg:pt-44 pb-20">
                <div className="max-w-[1200px]">
                    <div className="overflow-hidden">
                        <motion.p
                            className="text-xs text-gray-500 tracking-widest uppercase mb-8"
                            initial={{ y: "110%" }}
                            animate={{ y: "0%" }}
                            transition={{ delay: 0.3, duration: 0.8, ease: smooth }}
                        >
                            Method
                        </motion.p>
                    </div>

                    <h1 className="text-[2.25rem] lg:text-[4rem] font-light tracking-tight font-heading leading-[1.08] text-[#141414] max-w-4xl">
                        {["Getting production quality", "out of an AI tool"].map((line, i) => (
                            <div key={line} className="overflow-hidden">
                                <motion.span
                                    className="block"
                                    initial={{ y: "110%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ delay: 0.45 + i * 0.09, duration: 0.9, ease: smooth }}
                                >
                                    {line}
                                </motion.span>
                            </div>
                        ))}
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="max-w-2xl mt-12 space-y-5"
                    >
                        <p className="text-lg lg:text-xl font-light text-gray-700 leading-relaxed">
                            I rebuilt a regulatory reporting platform with Claude Code while its clients were filing to regulators through it. The interesting question was never whether the tool can write React — it can.
                        </p>
                        <p className="text-lg lg:text-xl font-light text-gray-700 leading-relaxed">
                            It is <span className="text-[#141414]">what you put around it</span> so that being wrong is cheap, and so that wrong surfaces in CI or behind a toggle rather than inside someone's filing.
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-300 max-w-2xl"
                    >
                        Written from two products I designed and shipped: <Link to="/case/datox" className="text-[#141414] underline underline-offset-4 decoration-gray-400 hover:decoration-[#141414] transition-colors">Datox</Link>, a compliance platform for investment funds, and <Link to="/case/stayte" className="text-[#141414] underline underline-offset-4 decoration-gray-400 hover:decoration-[#141414] transition-colors">Stayte</Link>, the operating system a real-estate agency runs on.
                    </motion.p>
                </div>
            </section>

            {/* ═══ The position, stated once ═══ */}
            <section className="bg-[#141414] px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px]"
                >
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-white">The position</h2>
                    </div>
                    <div>
                        <p className="text-xl lg:text-2xl font-light text-[#A09A92] leading-relaxed">
                            An AI tool does not raise the quality ceiling of a codebase. It lowers the cost of attempts. <span className="text-white">The whole discipline is arranging things so a failed attempt costs a toggle rather than an incident</span> — and then taking far more attempts than would otherwise be reasonable.
                        </p>
                        <p className="text-base font-light text-[#A09A92] leading-relaxed mt-8">
                            None of what follows was designed as an AI workflow. It was the architecture the product needed anyway. It turned out to be the thing that made generating most of the code survivable.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* ═══ The six ═══ */}
            <section className="px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">What makes it work</h2>
                </motion.div>

                <div className="max-w-3xl space-y-16">
                    {principles.map((item, i) => (
                        <motion.div
                            key={item.n}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: (i % 2) * 0.08, duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-4 lg:gap-10 border-t border-gray-300 pt-8"
                        >
                            <p className="text-sm text-gray-400 font-light">{item.n}</p>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-normal text-[#141414] mb-5 leading-snug">{item.title}</h3>
                                <div className="space-y-4">
                                    {item.body.map((para, j) => (
                                        <p key={j} className="text-base text-gray-600 leading-relaxed">{para}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══ Limits ═══ */}
            <section className="bg-[#D4D0C8] px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414] mb-6">What it does not fix</h2>
                    <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                        Four things I have not found a way around, listed because a method without boundaries is a sales pitch.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                    {limits.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            className="border-t border-[#141414]/20 pt-6"
                        >
                            <h3 className="text-lg font-normal text-[#141414] mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══ What it changed, in numbers ═══ */}
            <section className="px-8 lg:px-16 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px] items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">What it changed</h2>
                    </motion.div>

                    <div>
                        {[
                            {
                                stat: "7",
                                label: "Pages — the entire product",
                                body: "Not seven out of forty. Seven is the whole surface of Datox, each one a workflow stage moving tens of thousands of rows, several never designed at all before this. Six months, one person, design and production code both.",
                            },
                            {
                                stat: "11",
                                label: "Workflow stages, none left behind",
                                body: "Every step of a reporting run, from choosing the funds to sending the filing. Rebuilding a stage at a time was only affordable because a bad stage cost a toggle.",
                            },
                            {
                                stat: "0",
                                label: "Incidents from generated code reaching a filing",
                                body: "Not because the generated code was right the first time — it frequently was not. Because the places it could be wrong were bounded before it was written.",
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

            {/* ═══ Closing + routes onward ═══ */}
            <section className="bg-[#141414] px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px]"
                >
                    <div>
                        <p className="text-sm text-gray-500">See it applied</p>
                    </div>
                    <div>
                        <p className="text-xl lg:text-2xl font-light text-[#A09A92] leading-relaxed mb-12">
                            Datox below is the case this was written from, in full — the architecture, the trade-offs I took knowingly, and the parts I would do differently. Stayte is where the same working loop produced a different product.
                        </p>

                        <div className="space-y-px">
                            {[
                                { to: "/case/datox", title: "Datox", sub: "Regulatory reporting for investment funds" },
                                { to: "/case/stayte", title: "Stayte", sub: "The operating system a real-estate agency runs on" },
                            ].map((c) => (
                                <Link
                                    key={c.to}
                                    to={c.to}
                                    className="group flex items-center justify-between gap-8 border-t border-white/10 py-8 hover:border-white/30 transition-colors"
                                >
                                    <div>
                                        <p className="text-2xl font-light font-heading text-white mb-1">{c.title}</p>
                                        <p className="text-sm text-[#A09A92]">{c.sub}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-[#A09A92] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                                </Link>
                            ))}
                        </div>

                        <Link
                            to="/"
                            data-return
                            className="inline-block bg-white text-[#141414] px-8 py-4 rounded-sm text-sm font-medium hover:bg-gray-200 transition-colors mt-16"
                        >
                            Back to all projects
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Method;
