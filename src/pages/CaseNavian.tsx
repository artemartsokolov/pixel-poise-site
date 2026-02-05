import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, Swords, Moon } from "lucide-react";
import { useState } from "react";

const CaseNavian = () => {
    const [expandedRole, setExpandedRole] = useState<number | null>(null);

    const metadata = [
        { label: "Role", value: "Lead Product Designer" },
        { label: "Timeline", value: "14 months" },
        { label: "Platform", value: "B2B SaaS (Web)" },
        { label: "Stack", value: "Figma, Storybook, MUI, Python" },
    ];

    const userRoles = [
        { title: "Project Manager", desc: '"God view" of the entire pipeline.' },
        { title: "Broker", desc: "Finds and logs land plots." },
        { title: "Analyst", desc: "Deep financial modeling (IRR/NPV)." },
        { title: "Financier", desc: "Generates bank reports & negotiates loans." },
        { title: "Equity Manager", desc: "Raises funds from private investors." },
        { title: "Investors", desc: "Track their portfolio ROI." },
        { title: "Construction Partners", desc: "Bid on tenders." },
    ];

    const challenges = [
        {
            icon: Calculator,
            letter: "A",
            title: "Taming the Logic",
            subtitle: "The Deal Calculator",
            problem: "The math was so complex it ran on a separate Python microservice.",
            solution: "Designed a Linear Wizard Flow that guides analysts step-by-step through assumptions, validating data in real-time.",
            result: "A tool that feels as powerful as Excel but is impossible to \"break.\""
        },
        {
            icon: Swords,
            letter: "B",
            title: "Speed vs. Vanity",
            subtitle: "Leadership Moment",
            problem: "The CEO wanted a fully custom, unique UI design to stand out.",
            solution: "Convinced stakeholders to adopt the MUI Design System with Storybook customization.",
            result: "Saved ~40% of frontend resources, launching MVP months earlier."
        },
        {
            icon: Moon,
            letter: "C",
            title: "The Dual UI",
            subtitle: "Personality Split",
            problem: "Internal workspace needed to be data-dense; external reports needed to look like investment brochures.",
            solution: "Created a \"Presentation Engine\" that auto-generates beautiful, white-labeled web reports.",
            result: "Same data, two perfectly tailored experiences."
        },
    ];

    const results = [
        { emoji: "🚀", title: "Structured the Chaos", desc: "Transformed disjointed chats into a transparent digital pipeline." },
        { emoji: "⏱", title: "Efficiency", desc: "Reduced report generation from days to minutes." },
        { emoji: "📉", title: "Smart Resources", desc: "MUI decision saved huge amounts of budget and time." },
    ];

    return (
        <div className="bg-background text-foreground min-h-screen">
            {/* Back Navigation */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-8 left-8 z-50"
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Work
                </Link>
            </motion.div>

            {/* Hero Section */}
            <section className="min-h-[70vh] flex flex-col justify-end px-6 lg:px-12 pb-16 pt-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-medium text-muted-foreground mb-4"
                    >
                        Case Study — 2024/2025
                    </motion.p>

                    <motion.h1
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-[4rem] lg:text-[6rem] font-bold tracking-tighter font-heading leading-[0.9] text-[#141414] mb-8"
                    >
                        Navian
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-2xl lg:text-3xl font-medium text-gray-600 max-w-3xl leading-tight"
                    >
                        The Real Estate Operating System
                    </motion.p>
                </div>
            </section>

            {/* Metadata Bar */}
            <section className="px-6 lg:px-12 py-12 border-t border-gray-200">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {metadata.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                    {item.label}
                                </p>
                                <p className="text-base font-medium text-[#141414]">{item.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Placeholder 1 */}
            <section className="px-6 lg:px-12 py-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[1200px] mx-auto"
                >
                    <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                        <p className="text-sm text-gray-400 font-medium">📸 Hero Image — Dashboard Overview</p>
                    </div>
                </motion.div>
            </section>

            {/* Section 01: Context */}
            <section className="px-6 lg:px-12 py-20">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-baseline gap-4 mb-12"
                    >
                        <span className="text-6xl font-bold text-gray-200 font-heading">01</span>
                        <h2 className="text-2xl font-bold tracking-tight text-[#141414]">The Context</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                    >
                        <div>
                            <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-[#141414] mb-8">
                                A Bureaucratic Nightmare
                            </h3>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                In Sweden, real estate development involves a complex <span className="font-semibold text-[#141414]">80/20 funding split</span> (80% Bank loans, 20% Private Equity).
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Small and mid-sized developers were operating in chaos — managing deals across WhatsApp, email threads, and a fragile 50-sheet Excel file that only one person understood.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground border-b border-gray-200 pb-3">
                                The Problems
                            </h4>
                            {[
                                { title: "Fragmented Workflow", desc: "Deals managed across WhatsApp, email, and local files." },
                                { title: "The Excel Monster", desc: "50-sheet file — fragile, opaque, and prone to breaking." },
                                { title: "Disconnected Roles", desc: "Brokers, Analysts, Financiers working in silos." },
                            ].map((problem, index) => (
                                <motion.div
                                    key={problem.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-2 h-2 rounded-full bg-[#141414] mt-2 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-[#141414]">{problem.title}</p>
                                        <p className="text-sm text-gray-500">{problem.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mission Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mt-16 p-8 bg-gray-100 rounded-2xl"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                            The Mission
                        </p>
                        <p className="text-xl lg:text-2xl font-medium text-[#141414] leading-relaxed">
                            Build a unified <span className="italic">Operating System</span> that digitizes the entire deal lifecycle: Land Sourcing → Financial Modeling → Bank Tendering → Construction Bidding → Equity Fundraising.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 02: Discovery */}
            <section className="px-6 lg:px-12 py-20 bg-gray-50">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-baseline gap-4 mb-12"
                    >
                        <span className="text-6xl font-bold text-gray-200 font-heading">02</span>
                        <h2 className="text-2xl font-bold tracking-tight text-[#141414]">Discovery & Architecture</h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xl text-gray-600 mb-12 max-w-3xl"
                    >
                        The system had to serve <span className="font-semibold text-[#141414]">7 distinct user roles</span>, each viewing the "elephant" from a different angle.
                    </motion.p>

                    {/* User Ecosystem Accordion */}
                    <div className="mb-16">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                            The User Ecosystem
                        </h3>
                        <div className="space-y-2">
                            {userRoles.map((role, index) => (
                                <motion.div
                                    key={role.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                                >
                                    <button
                                        onClick={() => setExpandedRole(expandedRole === index ? null : index)}
                                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-semibold text-[#141414]">{role.title}</span>
                                        <span className="text-gray-400 text-xl">{expandedRole === index ? "−" : "+"}</span>
                                    </button>
                                    {expandedRole === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-4"
                                        >
                                            <p className="text-gray-500">{role.desc}</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Strategic Decision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 border border-gray-200 rounded-2xl bg-white"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                            Strategic Decision
                        </p>
                        <h3 className="text-2xl font-bold text-[#141414] mb-4">Desktop First</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Research showed that our core users (Analysts, Financiers) work exclusively on large screens with complex documents. We cut scope by deprioritizing mobile to focus on a high-density Pro-Interface.
                        </p>
                    </motion.div>

                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-16"
                    >
                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                            <p className="text-sm text-gray-500 font-medium">📸 User Flow / Mind Map</p>
                        </div>
                        <p className="text-sm text-gray-400 mt-3 text-center italic">
                            Mapping the complex dependencies between 7 user roles.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 03: Challenges */}
            <section className="px-6 lg:px-12 py-20">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-baseline gap-4 mb-16"
                    >
                        <span className="text-6xl font-bold text-gray-200 font-heading">03</span>
                        <h2 className="text-2xl font-bold tracking-tight text-[#141414]">Key Design Challenges</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {challenges.map((challenge, index) => (
                            <motion.div
                                key={challenge.letter}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="border border-gray-200 rounded-2xl p-8 hover:border-gray-400 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                        <challenge.icon className="w-5 h-5 text-[#141414]" />
                                    </div>
                                    <span className="text-sm font-bold text-gray-400">Challenge {challenge.letter}</span>
                                </div>

                                <h3 className="text-xl font-bold text-[#141414] mb-1">{challenge.title}</h3>
                                <p className="text-sm text-gray-400 mb-6">{challenge.subtitle}</p>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-500 mb-1">Problem</p>
                                        <p className="text-sm text-gray-600">{challenge.problem}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-600 mb-1">Solution</p>
                                        <p className="text-sm text-gray-600">{challenge.solution}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-1">Result</p>
                                        <p className="text-sm text-gray-600">{challenge.result}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Placeholders */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                                <p className="text-sm text-gray-400 font-medium">📸 Calculator UI</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                        >
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                                <p className="text-sm text-gray-400 font-medium">📸 Design System / Storybook</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 04: Solution */}
            <section className="px-6 lg:px-12 py-20 bg-[#141414] text-white">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-baseline gap-4 mb-16"
                    >
                        <span className="text-6xl font-bold text-gray-700 font-heading">04</span>
                        <h2 className="text-2xl font-bold tracking-tight">The Solution</h2>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl lg:text-4xl font-bold leading-tight mb-16"
                    >
                        A Unified Pipeline
                    </motion.h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            { num: "01", title: "Kanban Dashboard", desc: "Central hub for Project Managers to track deals moving through stages." },
                            { num: "02", title: "Construction Tendering", desc: "Comparison tool for collecting and evaluating bids side-by-side." },
                            { num: "03", title: "White-Label Marketplace", desc: "Equity Funds can skin the platform with their own branding." },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="border border-gray-700 rounded-2xl p-8"
                            >
                                <span className="text-sm font-bold text-gray-500 mb-4 block">{feature.num}</span>
                                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                            <p className="text-sm text-gray-500 font-medium">📸 Dashboard / Marketplace View</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 05: Results */}
            <section className="px-6 lg:px-12 py-20">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-baseline gap-4 mb-16"
                    >
                        <span className="text-6xl font-bold text-gray-200 font-heading">05</span>
                        <h2 className="text-2xl font-bold tracking-tight text-[#141414]">Results & Learnings</h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xl text-gray-600 mb-12"
                    >
                        The platform successfully launched in <span className="font-semibold text-[#141414]">Summer 2025</span>.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {results.map((result, index) => (
                            <motion.div
                                key={result.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="text-center p-8 bg-gray-50 rounded-2xl"
                            >
                                <span className="text-4xl mb-4 block">{result.emoji}</span>
                                <h4 className="text-lg font-bold text-[#141414] mb-2">{result.title}</h4>
                                <p className="text-sm text-gray-500">{result.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Reflection */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="border-l-4 border-[#141414] pl-8 py-4"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                            Reflection
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed italic">
                            "Designing for Navian taught me how to handle Operational Complexity. I learned that in B2B, 'Clarity and Data Density' always beat 'Creative Visuals.' If I were to do it again, I would involve developers even earlier in the process."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="px-6 lg:px-12 py-20 border-t border-gray-200">
                <div className="max-w-[1200px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-lg text-gray-500 mb-6">Want to see more?</p>
                        <Link
                            to="/"
                            className="inline-block bg-[#141414] text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                        >
                            Back to all projects
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CaseNavian;
