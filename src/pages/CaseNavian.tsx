import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useFirstPaint } from "@/hooks/useFirstPaint";

/* ── Premium easing curve (matches Hero.tsx) ── */
const smooth = [0.22, 1, 0.36, 1] as const;

const CaseNavian = () => {
    const firstPaint = useFirstPaint();

    const [activeRole, setActiveRole] = useState(0);

    const roleViews = [
        { name: "Financier", label: "Financier", image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/maps/financier2.jpg" },
        { name: "Project Manager", label: "PM", image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/maps/pm.png" },
        { name: "Analyst", label: "Analyst", image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/maps/analyst2.png" },
        { name: "Contractor", label: "Contractor", image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/maps/tendering-manager2.png" },
        { name: "Equity Manager", label: "Equity", image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/maps/equity-manager2.png" },
        { name: "Investor", label: "Investor", image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/maps/equity-partner-admin2.png" },
    ];

    const challenges = [
        {
            letter: "A",
            title: "Taming the Logic",
            subtitle: "The Deal Calculator",
            problem: "The model was too heavy for the browser, so the maths had to live in a separate Python service — and the interface had to stay usable while waiting on it.",
            solution: "Designed a Linear Wizard Flow that guides analysts step-by-step through assumptions, validating data in real-time.",
            result: "A tool that feels as powerful as Excel but is impossible to \"break.\""
        },
        {
            letter: "B",
            title: "Speed vs. Vanity",
            subtitle: "Leadership Moment",
            problem: "The CEO wanted a fully custom, unique UI design to stand out.",
            solution: "Convinced stakeholders to adopt the MUI Design System with Storybook customization.",
            result: "Shipped the MVP months earlier than a bespoke component library would have allowed."
        },
        {
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
        <div className="bg-[#F5F3EE] text-foreground min-h-screen">
            {/* Back Navigation — Masked slide-in */}
            <div className="fixed top-8 left-8 z-50 overflow-hidden">
                <motion.div
                    initial={firstPaint ? { x: "-110%" } : false}
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

            {/* Hero Section - Estrela Style */}
            <section>
                {/* Hero Image — Curtain wipe + Ken Burns zoom */}
                <div className="w-full h-[50vh] bg-[#C8C4BC] overflow-hidden relative">
                    <motion.img
                        src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/navian-top.png"
                        alt="Navian Dashboard Preview"
                        className="w-full h-full object-cover"
                        initial={firstPaint ? { scale: 1.15 } : false}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 1.8,
                            ease: smooth,
                        }}
                    />
                    {/* Curtain overlay */}
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
                                        initial={firstPaint ? { y: "110%" } : false}
                                        animate={{ y: "0%" }}
                                        transition={{ delay: 0.6, duration: 0.8, ease: smooth }}
                                    >
                                        Navian
                                    </motion.span>
                                </div>
                                {/* Subtitle lines — staggered mask reveals */}
                                <span className="text-gray-400">
                                    {["Digitizing the Real Estate", "Capital Lifecycle"].map((line, i) => (
                                        <div key={line} className="overflow-hidden">
                                            <motion.span
                                                className="block"
                                                initial={firstPaint ? { y: "110%" } : false}
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
                                {/* Column 1: Date, Location, Services */}
                                <div className="space-y-6">
                                    {[
                                        { label: "Date", value: "2023 – 2024" },
                                        { label: "Location", value: "Sweden" },
                                        { label: "Services", value: "Product Design\nUX Strategy\nDesign System" },
                                    ].map((item, i) => (
                                        <div key={item.label} className="overflow-hidden">
                                            <motion.div
                                                initial={firstPaint ? { y: "110%" } : false}
                                                animate={{ y: "0%" }}
                                                transition={{ delay: 0.9 + i * 0.08, duration: 0.7, ease: smooth }}
                                            >
                                                <p className="text-sm font-semibold text-[#141414] mb-0.5">{item.label}</p>
                                                <p className="text-sm font-light text-gray-500" style={{ whiteSpace: 'pre-line' }}>{item.value}</p>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>

                                {/* Column 2: Role, Timeline, Platform */}
                                <div className="space-y-6">
                                    {[
                                        { label: "Role", value: "Lead Product Designer" },
                                        { label: "Timeline", value: "14 months" },
                                        { label: "Platform", value: "B2B SaaS (Web)" },
                                    ].map((item, i) => (
                                        <div key={item.label} className="overflow-hidden">
                                            <motion.div
                                                initial={firstPaint ? { y: "110%" } : false}
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

                            {/* CTA — Late entrance with scale */}
                            <motion.div
                                initial={firstPaint ? { opacity: 0, scale: 0.95 } : false}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3, duration: 0.6, ease: smooth }}
                            >
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-gray-300"></div>

            {/* The Brief - Estrela Style */}
            <section className="py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px] px-8 lg:px-16"
                >
                    {/* Left: Section Title */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">
                            The Brief
                        </h2>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-12">
                        {/* Overview */}
                        <div>
                            <h3 className="text-base font-semibold text-[#141414] mb-4">Overview</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                Navian is a real estate development platform for Swedish developers navigating the complex 80/20 funding split (80% Bank loans, 20% Private Equity). Small and mid-sized developers were operating in chaos — managing deals across WhatsApp, email threads, and fragile Excel files that only one person understood.
                            </p>
                        </div>

                        {/* Challenge */}
                        <div>
                            <h3 className="text-base font-semibold text-[#141414] mb-4">Challenge</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                The task was to create a unified operating system that could digitize the entire deal lifecycle — from Land Sourcing through Financial Modeling, Bank Tendering, Construction Bidding, and Equity Fundraising. The system needed to serve 9 distinct user roles, each viewing the process from a different angle, while replacing a 50-sheet Excel monster.
                            </p>
                        </div>

                        {/* Solution */}
                        <div>
                            <h3 className="text-base font-semibold text-[#141414] mb-4">Solution</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                I designed a modular B2B SaaS platform with role-based dashboards, a Deal Calculator wizard that tames complex Python-powered financial modeling, and a Presentation Engine that auto-generates investment brochures. Building on MUI rather than a bespoke component library is what made that scope reachable in the time available.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-gray-300"></div>

            {/* My Role - Estrela Style */}
            <section className="px-8 lg:px-16 py-28 bg-[#D4D0C8]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px]"
                >
                    {/* Left: Section Title */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">
                            My Role
                        </h2>
                    </div>

                    {/* Right: Role list */}
                    <div className="space-y-0">
                        {[
                            { role: "UX Strategy", desc: "Mapping user journeys across 9 distinct roles — Land Owners, Project Managers, Brokers, Analysts, Financiers, Equity Managers, Investors, Investment Bankers and Construction Partners." },
                            { role: "UI Design", desc: "Designing a data-dense, professional interface with generous spacing and refined typography for complex financial workflows." },
                            { role: "Design System", desc: "Implementing MUI with Storybook customisation — a component library chosen for delivery speed, then themed to stop looking like one." },
                            { role: "Product Strategy", desc: "Leading the Desktop-First decision based on user research — these users work on large screens with complex documents, and nowhere else." },
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

            {/* Discovery & Architecture - Fullscreen Diagram */}
            <section className="min-h-screen bg-[#141414] text-white py-28 px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[1400px] mx-auto"
                >
                    {/* Header */}
                    <div className="mb-16">
                        <h2 className="text-4xl lg:text-5xl font-light font-heading text-white mb-6">
                            Discovery & Architecture
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            The system had to serve 9 distinct user roles, each viewing the "elephant" from a different angle. Designing for this interconnected complexity was the main challenge.
                        </p>
                    </div>

                    {/* User Ecosystem Diagram */}
                    <div className="mb-16">
                        <p className="text-sm text-gray-500 mb-8 tracking-wide">The User Ecosystem</p>

                        {/* Central Hub + Surrounding Roles */}
                        <div className="relative">
                            {/* Grid of Role Cards */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                                {/* Project Manager */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                    className="bg-[#1F1F1F] px-6 pt-6 pb-14 rounded-sm"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-white"></div>
                                        <span className="text-xs text-gray-500 tracking-wide">Central Hub</span>
                                    </div>
                                    <h4 className="text-xl font-normal text-white mb-3">Project Manager</h4>
                                    <ul className="text-xs text-gray-400 space-y-1">
                                        <li>• Oversees entire deal pipeline</li>
                                        <li>• Manages construction tenders</li>
                                        <li>• Signs Term Sheets</li>
                                    </ul>
                                </motion.div>

                                {/* Broker */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15, duration: 0.5 }}
                                    className="bg-[#1F1F1F] px-6 pt-6 pb-14 rounded-sm"
                                >
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mb-4"></div>
                                    <h4 className="text-base font-normal text-white mb-2">Broker</h4>
                                    <ul className="text-xs text-gray-400 space-y-1">
                                        <li>• Finds & logs land plots</li>
                                        <li>• Initial deal screening</li>
                                        <li>• Passes approved plots to Analyst</li>
                                    </ul>
                                </motion.div>

                                {/* Analyst */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="bg-[#1F1F1F] px-6 pt-6 pb-14 rounded-sm"
                                >
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mb-4"></div>
                                    <h4 className="text-base font-normal text-white mb-2">Analyst</h4>
                                    <ul className="text-xs text-gray-400 space-y-1">
                                        <li>• Deep financial modeling (IRR/NPV)</li>
                                        <li>• Uses custom calculation tool</li>
                                        <li>• Creates investment report</li>
                                    </ul>
                                </motion.div>

                                {/* Financier */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25, duration: 0.5 }}
                                    className="bg-[#1F1F1F] px-6 pt-6 pb-14 rounded-sm"
                                >
                                    <div className="w-2 h-2 rounded-full bg-amber-500 mb-4"></div>
                                    <h4 className="text-base font-normal text-white mb-2">Financier</h4>
                                    <ul className="text-xs text-gray-400 space-y-1">
                                        <li>• Requests docs from landowner</li>
                                        <li>• Sends applications to banks</li>
                                        <li>• Collects & compares offers</li>
                                        <li>• Signs Letter of Intent</li>
                                    </ul>
                                </motion.div>

                                {/* Equity Manager */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="bg-[#1F1F1F] px-6 pt-6 pb-14 rounded-sm"
                                >
                                    <div className="w-2 h-2 rounded-full bg-purple-500 mb-4"></div>
                                    <h4 className="text-base font-normal text-white mb-2">Equity Manager</h4>
                                    <ul className="text-xs text-gray-400 space-y-1">
                                        <li>• Creates equity pitch report</li>
                                        <li>• Sends to investment funds</li>
                                        <li>• Runs tender, signs with multiple funds</li>
                                    </ul>
                                </motion.div>

                                {/* Investment Fund */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.35, duration: 0.5 }}
                                    className="bg-[#1F1F1F] px-6 pt-6 pb-14 rounded-sm"
                                >
                                    <div className="w-2 h-2 rounded-full bg-rose-500 mb-4"></div>
                                    <h4 className="text-base font-normal text-white mb-2">Investment Fund</h4>
                                    <ul className="text-xs text-gray-400 space-y-1">
                                        <li>• Publishes deals to investor network</li>
                                        <li>• Uses white-label portal</li>
                                        <li>• Tracks fundraising progress</li>
                                    </ul>
                                </motion.div>

                                {/* Investor */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="bg-[#1F1F1F] px-6 pt-6 pb-14 rounded-sm"
                                >
                                    <div className="w-2 h-2 rounded-full bg-cyan-500 mb-4"></div>
                                    <h4 className="text-base font-normal text-white mb-2">Investor</h4>
                                    <ul className="text-xs text-gray-400 space-y-1">
                                        <li>• Reviews deal presentation</li>
                                        <li>• Decides investment amount</li>
                                        <li>• Tracks portfolio ROI</li>
                                    </ul>
                                </motion.div>

                                {/* Bank Officer */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.45, duration: 0.5 }}
                                    className="bg-[#1F1F1F] px-6 pt-6 pb-14 rounded-sm"
                                >
                                    <div className="w-2 h-2 rounded-full bg-orange-500 mb-4"></div>
                                    <h4 className="text-base font-normal text-white mb-2">Bank Officer</h4>
                                    <ul className="text-xs text-gray-400 space-y-1">
                                        <li>• Reviews project presentation</li>
                                        <li>• Inputs bank's offer terms</li>
                                        <li>• Sends offer back to Financier</li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Role Tabs */}
                    <div className="flex flex-wrap gap-6 mb-6 border-b border-gray-700 pb-4">
                        {roleViews.map((role, index) => (
                            <button
                                key={role.name}
                                onClick={() => setActiveRole(index)}
                                className={`text-xs tracking-wide transition-all duration-200 pb-2 border-b-2 ${activeRole === index
                                    ? 'text-white border-white'
                                    : 'text-gray-500 hover:text-white border-transparent'
                                    }`}
                            >
                                {role.label}
                            </button>
                        ))}
                    </div>

                    {/* Full-width Image Placeholder */}
                    <motion.div
                        key={activeRole}
                        initial={firstPaint ? { opacity: 0 } : false}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="aspect-[21/9] rounded-sm overflow-hidden flex items-center justify-center relative"
                    >
                        {roleViews[activeRole].image ? (
                            <>
                                {/* Blurred Background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center blur-md scale-110 opacity-40"
                                    style={{ backgroundImage: `url(${roleViews[activeRole].image})` }}
                                />
                                <div className="absolute inset-0 bg-black/50" />
                                {/* Main Image */}
                                <img
                                    src={roleViews[activeRole].image}
                                    alt={roleViews[activeRole].name}
                                    className="w-full h-full object-contain relative z-10 opacity-80 grayscale"
                                />
                            </>
                        ) : (
                            <p className="text-sm text-gray-600 font-light">📸 {roleViews[activeRole].name} View</p>
                        )}
                    </motion.div>
                </motion.div>
            </section>

            {/* Strategic Architecture */}
            <section className="px-8 lg:px-16 py-28 bg-[#141414] border-t border-[#2A2A2A]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">02 / Strategy & Logic</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">Co-Architecting the Business Model</h2>
                    <div className="max-w-2xl">
                        <p className="text-base text-[#A09A92] leading-relaxed mb-4">
                            The product vision was ambitious but abstract. We had a complex ecosystem with 9 distinct user roles—from Land Owners to Investment Bankers—but no clear definition of who sees what, or how monetization would actually work.
                        </p>
                        <p className="text-base text-[#A09A92] leading-relaxed">
                            I stepped out of the traditional design role to partner directly with the CEO and CPO. In a series of "War Room" workshops, we reverse-engineered the business goals into a concrete system.
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
                        <h3 className="text-lg font-normal text-white mb-3">The Monetization Matrix</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            We broke down the platform into specific sellable modules ("Packaging Labs", "Collaboration Hubs"). This allowed the business to create flexible pricing tiers instead of a "one size fits all" model.
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
                        <h3 className="text-lg font-normal text-white mb-3">RBAC Architecture</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            I mapped permissions for every stakeholder. This massive matrix (see below) became the Single Source of Truth for the Backend team to build API security gates.
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
                        <h3 className="text-lg font-normal text-white mb-3">Adaptive UI</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            Instead of building separate apps, I designed a Morphing Sidebar that dynamically rebuilds itself based on the user's license.
                        </p>
                    </motion.div>
                </div>

                {/* Large Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="rounded-sm overflow-hidden"
                >
                    <img
                        src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/subscripotion.png"
                        alt="Subscription & RBAC Architecture"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </section>

            {/* The Solution - Premium Zig-Zag Layout */}
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
                            <p className="text-sm text-gray-500 mb-4 tracking-wide">The Solution</p>
                        </div>
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-light font-heading text-[#141414] mb-8">
                                A Unified Real Estate OS
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                I engineered a comprehensive Operating System that replaces fragmented tools (Excel, Email, Dropbox) with a synchronized digital pipeline. The platform serves as a <span className="text-[#141414] font-medium">Single Source of Truth</span> for 9 distinct user roles, orchestrating the entire lifecycle—from land acquisition to the final exit.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Block 1: Command Center - Text Left, Image Right */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">01 / The Core</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Command Center</h3>
                            <p className="text-sm text-gray-500 mb-6">Designed for: Project Managers & Admins</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                At the heart of the system is the <span className="text-[#141414]">Master Pipeline</span>, giving the Project Manager full control over the deal flow.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Orchestration:</span> As a deal moves from Acquisition to Construction, the system automatically triggers tasks for the next department.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Role-Based Access:</span> The interface morphs based on the user. A Broker sees map pins; a PM sees the Gantt chart; an Investor sees ROI.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Smart Presets:</span> "Developer Presets" automate 40% of the manual setup for new deals.</span>
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
                            <div className="rounded-lg overflow-hidden shadow-2xl border border-black/10">
                                <div className="bg-[#E8E4DC] px-4 py-2.5 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                    <span className="ml-4 text-[10px] text-gray-500 font-mono">app.navian.io</span>
                                </div>
                                <div className="aspect-video bg-[#E8E4DC]">
                                    <video
                                        src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/pm.mp4"
                                        poster="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/pm-poster.jpg"
                                        loop
                                        muted
                                        playsInline
                                        preload="none"
                                        onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => undefined)}
                                        onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Block 2: Intelligence Engine - Image Left, Text Right */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 lg:-ml-8"
                        >
                            <div className="rounded-lg overflow-hidden shadow-2xl border border-black/10">
                                <div className="bg-[#E8E4DC] px-4 py-2.5 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                    <span className="ml-4 text-[10px] text-gray-500 font-mono">app.navian.io/calculator</span>
                                </div>
                                <div className="aspect-video bg-white">
                                    <video
                                        src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/unit-structure-2-1.mp4"
                                        poster="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/unit-structure-2-1-poster.jpg"
                                        loop
                                        muted
                                        playsInline
                                        preload="none"
                                        onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => undefined)}
                                        onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="order-1 lg:order-2 max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">02 / The Brain</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Intelligence Engine</h3>
                            <p className="text-sm text-gray-500 mb-6">Designed for: Analysts</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                I replaced the legacy "50-sheet Excel" with a specialized microservice—the <span className="text-[#141414]">Deal Calculator</span>.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Wizard Flow:</span> Guides analysts through hundreds of variables (Rent Rolls, OPEX, Taxes) without overwhelming them.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Python Backend:</span> Communicates with a Python engine to calculate IRR/NPV in milliseconds.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Dual UI:</span> Internal tool is minimalist; output is a board-ready investment brochure.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Block 3: Tendering Hub - Text Left, Image Right */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">03 / The Execution</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Tendering Hub</h3>
                            <p className="text-sm text-gray-500 mb-6">Designed for: Financiers & Project Managers</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                This module handles the execution phase, managing <span className="text-[#141414]">external negotiations</span> securely.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Bank Tender:</span> Send brochures to multiple banks instantly. Compare offers (Interest Rates, LTV) side-by-side.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Construction Bidding:</span> Issue RFPs to construction firms. Platform standardizes bids for easy comparison.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Digital Term Sheets:</span> Winning offers lock budget data directly into the project model.</span>
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
                            <div className="rounded-lg overflow-hidden shadow-2xl border border-black/10">
                                <div className="bg-[#E8E4DC] px-4 py-2.5 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                    <span className="ml-4 text-[10px] text-gray-500 font-mono">app.navian.io/tender</span>
                                </div>
                                <div className="aspect-video bg-[#E8E4DC]">
                                    <video
                                        src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/financier.mp4"
                                        poster="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/financier-poster.jpg"
                                        loop
                                        muted
                                        playsInline
                                        preload="none"
                                        onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => undefined)}
                                        onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Block 4: Growth Engine - Image Left, Text Right */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 lg:-ml-8"
                        >
                            <div className="rounded-lg overflow-hidden shadow-2xl border border-black/10">
                                <div className="bg-[#E8E4DC] px-4 py-2.5 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                    <span className="ml-4 text-[10px] text-gray-500 font-mono">app.navian.io/partners</span>
                                </div>
                                <div className="aspect-video bg-[#E8E4DC]">
                                    <video
                                        src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/partners-demo.mp4"
                                        poster="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/partners-demo-poster.jpg"
                                        loop
                                        muted
                                        playsInline
                                        preload="none"
                                        onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => undefined)}
                                        onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="order-1 lg:order-2 max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">04 / The Network</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Growth Engine</h3>
                            <p className="text-sm text-gray-500 mb-6">Designed for: Equity Managers & Private Investors</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                The final stage connects developers with private capital. I built this as a <span className="text-[#141414]">scalable B2B2C solution</span>.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">White-Label:</span> Partner Funds can "skin" the platform with their own branding (Logo, Colors, Domain).</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Marketplace:</span> Public-facing gallery where investors browse vetted projects and commit funds.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Investor Portal:</span> Dashboard to track portfolio, view construction progress, and download tax documents.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* TEMPORARILY HIDDEN - Project Gallery & Lightbox
            <section className="py-28 bg-[#141414] overflow-hidden">
                <div className="px-8 lg:px-16 mb-12">
                    ... gallery code hidden ...
                </div>
            </section>
            {lightboxOpen && (
                ... lightbox code hidden ...
            )}
            END TEMPORARILY HIDDEN */}


            {/* Key Challenges - Estrela Style */}
            <section className="px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">Key Challenges</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

            {/* Results & Learnings - Estrela Style */}
            <section className="px-8 lg:px-16 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">Results & Learnings</h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-base text-gray-500 mb-10"
                >
                    The platform launched in <span className="text-[#141414]">Summer 2025</span>, after my engagement had ended.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {results.map((result, index) => (
                        <motion.div
                            key={result.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#FAFAF8] px-8 py-10 rounded-sm"
                        >
                            <span className="text-xs font-light text-gray-400 mb-4 block">0{index + 1}</span>
                            <h4 className="text-lg font-normal text-[#141414] mb-2">{result.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">{result.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Reflection */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-l-2 border-gray-300 pl-8 py-4"
                >
                    <p className="text-sm font-semibold text-[#141414] mb-4">
                        Reflection
                    </p>
                    <p className="text-base text-gray-500 leading-relaxed">
                        "Designing for Navian taught me how to handle Operational Complexity. I learned that in B2B, 'Clarity and Data Density' always beat 'Creative Visuals.' If I were to do it again, I would involve developers even earlier in the process."
                    </p>
                </motion.div>
            </section>

            {/* Footer CTA */}
            <section className="px-8 lg:px-16 py-28 border-t border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px] items-center">
                    <div>
                        <p className="text-sm text-gray-400">Want to see more?</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            to="/"
                            className="inline-block bg-[#141414] text-white px-8 py-4 rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors"
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
