import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone, TrendingUp, Shield } from "lucide-react";

const CaseReviero = () => {
    const challenges = [
        {
            letter: "A",
            title: "The Trust Paradox",
            subtitle: "Business Strategy",
            problem: "Stakeholders demanded aggressive \"Lead Capture\" (forcing phone numbers early) to maximize volume. But in the HNW (High Net Worth) market, demanding data too early destroys trust. We were filling the CRM with low-intent \"noise,\" inflating CAC (Customer Acquisition Cost).",
            solution: "I inverted the funnel to a \"Value-First\" model. I architected the flow where the AI acts as a \"Proof of Competence,\" giving away proprietary financial data (Yield, ROI) upfront.",
            result: "Shifted the metric from \"Lead Volume\" to \"Lead Liquidity\". Users who registered were already educated and 3x more likely to transact."
        },
        {
            letter: "B",
            title: "Closing the \"Data Black Hole\"",
            subtitle: "Ecosystem Integrity",
            problem: "Real estate deals inevitably go offline (viewings, negotiations). Historically, this is where the digital product dies, data vanishes into WhatsApp, and the AI models stop learning. The business was flying blind at the most critical stage.",
            solution: "I engineered a \"Digital Twin\" ecosystem. By mirroring offline events (Contracts, Viewings) back into the App via the Agency OS, I ensured that every physical interaction was captured digitally.",
            result: "Created a Single Source of Truth. The system creates a continuous loop where offline feedback instantly retrains the online recommendation algorithm."
        },
        {
            letter: "C",
            title: "Navigating Ambiguity (0 → 1)",
            subtitle: "Product Strategy",
            problem: "We were inventing a new category (\"Pocket Family Office\") with no playbook. There were no clear requirements—only abstract business goals and conflicting visions from stakeholders. The challenge was to design a complex ecosystem from a blank sheet.",
            solution: "I stepped up as a Product Architect, moving beyond UI to design the core Business Logic first. Through \"War Room\" workshops, I reverse-engineered the chaotic vision into structured user flows, defining exactly how the App, CRM, and AI would talk to each other.",
            result: "Turned abstract startup chaos into a concrete, scalable Operating System that processed 1,000+ SQLs."
        },
    ];

    const results = [
        { emoji: "🚀", title: "7,000+ Users", desc: "Acquired a high-ticket audience of European business owners and investors." },
        { emoji: "💎", title: "~200 Deals Closed", desc: "Facilitated approximately 200 property transactions through the platform." },
        { emoji: "🔥", title: "1,000+ SQLs", desc: "Generated over 1,000 Sales Qualified Leads with dramatically improved quality." },
    ];

    return (
        <div className="bg-[#F5F3EE] text-foreground min-h-screen">
            {/* Back Navigation */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-8 left-8 z-50"
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-[#141414] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    All Work
                </Link>
            </motion.div>

            {/* Hero Section */}
            <section>
                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-[50vh] bg-[#1A1A2E] overflow-hidden"
                >
                    <img
                        src="https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/Reviero/revierohero6%20(1).png"
                        alt="Reviero Hero"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Title + Metadata */}
                <div className="px-8 lg:px-16 py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 lg:gap-[450px] items-start">
                        {/* Left: Title */}
                        <div>
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-[2rem] lg:text-[2.5rem] font-normal tracking-tight font-heading leading-[1.15] text-[#141414]"
                            >
                                Reviero<br />
                                <span className="text-gray-400">AI-Powered Real Estate<br />Ecosystem</span>
                            </motion.h1>
                        </div>

                        {/* Right: Metadata + Button */}
                        <div className="flex justify-between items-start">
                            {/* Column 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-0.5">Date</p>
                                    <p className="text-sm font-light text-gray-500">2023 – 2024</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-0.5">Location</p>
                                    <p className="text-sm font-light text-gray-500">Spain</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-0.5">Services</p>
                                    <p className="text-sm font-light text-gray-500">Product Design<br />UX Strategy<br />Service Design</p>
                                </div>
                            </motion.div>

                            {/* Column 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25, duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-0.5">Role</p>
                                    <p className="text-sm font-light text-gray-500">Founding Product Designer</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-0.5">Target</p>
                                    <p className="text-sm font-light text-gray-500">HNWIs (European CEOs, 45+)</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-0.5">Platform</p>
                                    <p className="text-sm font-light text-gray-500">iOS / Android (React Native)<br />+ Web Admin</p>
                                </div>
                            </motion.div>

                            {/* Visit Website Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <a
                                    href="#"
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
                                Buying investment property in Spain is historically opaque. Amateur investors — European CEOs — relied on intuition, manual Airbnb analysis, and messy Excel sheets to guess ROI.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">The Mission</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                To build a "Pocket Family Office" — an ecosystem where an investor can Find high-yield assets, Analyze them with AI, and Manage post-purchase income in one flow. Beyond the buyer-facing app, I also designed an AI-powered Operational System for the sales team — architecting UX for both sides of the marketplace.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">Impact</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                Generated <span className="text-[#141414] font-medium">1,000+ SQLs</span> and <span className="text-[#141414] font-medium">~200 closed deals</span>, acquiring 7,000+ users across a high-ticket European audience.
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
                            { role: "Product Design (0→1)", desc: "Founding designer responsible for the entire user experience — from discovery through launch and growth. Designed for a demanding audience of 45+ European executives." },
                            { role: "UX Strategy", desc: "Led the \"Ungating\" experiment that doubled session time. Designed the conversion funnel that moved registration behind the value moment." },
                            { role: "Service Design", desc: "Mapped the complete buyer journey including the critical offline gap (viewings, notary). Created the \"Phygital Loop\" that keeps users in the app ecosystem." },
                            { role: "Stakeholder Bridge", desc: "Navigated conflicts between Marketing (brand focus), Sales (lead focus), and Engineering. Used A/B test data to justify design decisions." },
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

            {/* Service Design - Dark Section */}
            <section className="px-8 lg:px-16 py-28 bg-[#141414]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">01 / Service Design</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">Bridging the "Offline Gap"</h2>
                    <div className="max-w-2xl">
                        <p className="text-base text-[#A09A92] leading-relaxed">
                            Real estate deals inevitably go offline — Notary, physical viewings. My challenge was to keep the digital thread alive during this gap.
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
                        <h3 className="text-lg font-normal text-white mb-3">Digital Qualification</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            The App qualifies users based on behavior — time spent on specific assets, saved properties, and engagement patterns.
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
                        <h3 className="text-lg font-normal text-white mb-3">Human Handover</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            An Agent conducts a deep interview, logging all data into the internal CRM. The conversation goes offline for viewings and notary.
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
                        <h3 className="text-lg font-normal text-white mb-3">The Loop Back</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            Instead of switching to WhatsApp, the Agent pushes a curated collection of properties back into the App's Chat — keeping the digital thread alive.
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
                    <svg viewBox="0 0 940 400" className="w-full h-auto min-w-[700px]" fill="none" style={{ padding: '28px 20px 16px' }}>
                        <defs>
                            <marker id="arr" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                                <path d="M1 1L9 4L1 7" stroke="#555" strokeWidth="1.2" fill="none" />
                            </marker>
                            <marker id="arrG" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                                <path d="M1 1L9 4L1 7" stroke="#34d399" strokeWidth="1.2" fill="none" />
                            </marker>
                        </defs>

                        {/* ===== PHASE 1: DISCOVERY ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.1 } } }}>
                            <circle cx="16" cy="10" r="3" fill="#34d399" />
                            <text x="26" y="13" fill="#34d399" fontSize="8" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.5" fontWeight="500">PHASE 1 — DISCOVERY & QUALIFICATION</text>
                        </motion.g>

                        {/* N1: Browse App */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } } }}>
                            <rect x="10" y="30" width="118" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="69" y="48" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">USER</text>
                            <text x="69" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Browse (Guest)</text>
                        </motion.g>
                        <motion.line x1="128" y1="52" x2="148" y2="52" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.32 } } }} />

                        {/* N2: Blurred Data */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.38, duration: 0.5 } } }}>
                            <rect x="151" y="30" width="118" height="44" rx="5" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.8" />
                            <text x="210" y="48" fill="#FBBF24" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">APP</text>
                            <text x="210" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Blurred Financials</text>
                        </motion.g>
                        <motion.line x1="269" y1="52" x2="289" y2="52" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.48 } } }} />

                        {/* N3: Unlock Report */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.52, duration: 0.5 } } }}>
                            <rect x="292" y="30" width="118" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="351" y="48" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">USER</text>
                            <text x="351" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Unlock Report</text>
                        </motion.g>
                        <motion.line x1="410" y1="52" x2="430" y2="52" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.62 } } }} />

                        {/* N4: AI Report */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.66, duration: 0.5 } } }}>
                            <rect x="433" y="30" width="118" height="44" rx="5" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.8" />
                            <text x="492" y="48" fill="#FBBF24" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">APP</text>
                            <text x="492" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">AI Report</text>
                        </motion.g>
                        <motion.line x1="551" y1="52" x2="571" y2="52" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.76 } } }} />

                        {/* N5: Likes */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } } }}>
                            <rect x="574" y="30" width="118" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="633" y="48" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">USER</text>
                            <text x="633" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Likes Property</text>
                        </motion.g>
                        <motion.line x1="692" y1="52" x2="718" y2="52" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.9 } } }} />

                        {/* Decision Diamond: High Intent? */}
                        <motion.g variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.95, duration: 0.4 } } }}>
                            <g transform="translate(755,52)">
                                <rect x="-24" y="-24" width="48" height="48" rx="3" fill="#0D3320" stroke="#34d399" strokeWidth="0.8" transform="rotate(45)" />
                            </g>
                            <text x="755" y="50" fill="#34d399" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">HIGH</text>
                            <text x="755" y="59" fill="#34d399" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">INTENT?</text>
                        </motion.g>
                        {/* Yes arrow down */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.1 } } }}>
                            <text x="775" y="92" fill="#34d399" fontSize="7" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">Yes</text>
                            <line x1="755" y1="86" x2="755" y2="120" stroke="#34d399" strokeWidth="0.8" markerEnd="url(#arrG)" />
                        </motion.g>

                        {/* ===== THE PHYGITAL LOOP ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.15 } } }}>
                            <circle cx="16" cy="132" r="3" fill="#F59E0B" />
                            <text x="26" y="135" fill="#F59E0B" fontSize="8" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.5" fontWeight="500">THE PHYGITAL LOOP</text>
                        </motion.g>

                        {/* N6: Agent Off-Market Picks */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.5 } } }}>
                            <rect x="690" y="148" width="130" height="44" rx="5" fill="#0D2818" stroke="#34d399" strokeWidth="0.8" />
                            <text x="755" y="166" fill="#6EE7B7" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">AGENT</text>
                            <text x="755" y="179" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Off-Market Picks</text>
                        </motion.g>
                        <motion.line x1="690" y1="170" x2="665" y2="170" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.35 } } }} />

                        {/* N7: In-App Chat */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.4, duration: 0.5 } } }}>
                            <rect x="530" y="148" width="132" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="596" y="166" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">USER</text>
                            <text x="596" y="179" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">In-App Chat</text>
                        </motion.g>
                        <motion.line x1="530" y1="170" x2="505" y2="170" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.55 } } }} />

                        {/* N8: Physical Viewing (Offline) */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.6, duration: 0.5 } } }}>
                            <rect x="370" y="148" width="132" height="44" rx="5" fill="#1F1F1F" stroke="#6B7280" strokeWidth="0.8" strokeDasharray="4 2" />
                            <text x="436" y="166" fill="#9CA3AF" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">OFFLINE</text>
                            <text x="436" y="179" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Physical Viewing</text>
                        </motion.g>
                        <motion.line x1="370" y1="170" x2="345" y2="170" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.75 } } }} />

                        {/* N9: Agent Push Back */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.5 } } }}>
                            <rect x="210" y="148" width="132" height="44" rx="5" fill="#0D2818" stroke="#34d399" strokeWidth="0.8" />
                            <text x="276" y="166" fill="#6EE7B7" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">AGENT</text>
                            <text x="276" y="179" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Push Back to App</text>
                        </motion.g>

                        {/* Loop arrow: from Agent Push Back curves up to In-App Chat */}
                        <motion.path
                            d="M276 148 C276 122 596 122 596 148"
                            stroke="#34d399" strokeWidth="0.8" strokeDasharray="4 2" markerEnd="url(#arrG)"
                            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 2.0, duration: 0.8 } } }}
                        />
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.4 } } }}>
                            <text x="436" y="120" fill="#34d399" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontStyle="italic">loop continues</text>
                        </motion.g>

                        {/* Connector down from loop to Phase 3 */}
                        <motion.line x1="276" y1="192" x2="276" y2="220" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.5 } } }} />

                        {/* ===== PHASE 3: ASSET MANAGEMENT ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.55 } } }}>
                            <circle cx="16" cy="236" r="3" fill="#38BDF8" />
                            <text x="26" y="239" fill="#38BDF8" fontSize="8" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.5" fontWeight="500">PHASE 3 — ASSET MANAGEMENT</text>
                        </motion.g>

                        {/* N10: Deal Closed */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 2.6, duration: 0.5 } } }}>
                            <rect x="10" y="255" width="118" height="44" rx="5" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.8" />
                            <text x="69" y="273" fill="#FBBF24" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">APP</text>
                            <text x="69" y="286" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Deal Closed</text>
                        </motion.g>
                        <motion.line x1="128" y1="277" x2="148" y2="277" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.7 } } }} />

                        {/* N11: Calendar Sync */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 2.75, duration: 0.5 } } }}>
                            <rect x="151" y="255" width="118" height="44" rx="5" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.8" />
                            <text x="210" y="273" fill="#7DD3FC" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SYSTEM</text>
                            <text x="210" y="286" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Calendar Sync</text>
                        </motion.g>
                        <motion.line x1="269" y1="277" x2="289" y2="277" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.85 } } }} />

                        {/* N12: Revenue Calc */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 2.9, duration: 0.5 } } }}>
                            <rect x="292" y="255" width="135" height="44" rx="5" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.8" />
                            <text x="359" y="273" fill="#7DD3FC" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SYSTEM</text>
                            <text x="359" y="286" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Net Profit €1,200</text>
                        </motion.g>
                        <motion.line x1="427" y1="277" x2="447" y2="277" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3.0 } } }} />

                        {/* N13: Push Notification */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 3.05, duration: 0.5 } } }}>
                            <rect x="450" y="255" width="118" height="44" rx="5" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.8" />
                            <text x="509" y="273" fill="#FBBF24" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">APP</text>
                            <text x="509" y="286" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Push: €1,200</text>
                        </motion.g>
                        <motion.line x1="568" y1="277" x2="588" y2="277" stroke="#555" strokeWidth="0.8" markerEnd="url(#arr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3.15 } } }} />

                        {/* N14: Withdraw */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 3.2, duration: 0.5 } } }}>
                            <rect x="591" y="255" width="118" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="650" y="273" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">USER</text>
                            <text x="650" y="286" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Withdraw</text>
                        </motion.g>

                        {/* N15: Owner Stay (branched) */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 3.35, duration: 0.5 } } }}>
                            <rect x="770" y="255" width="130" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" strokeDasharray="4 2" />
                            <text x="835" y="273" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">USER</text>
                            <text x="835" y="286" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Owner Stay</text>
                        </motion.g>

                        {/* ===== LEGEND ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3.5 } } }}>
                            <rect x="10" y="330" width="10" height="10" rx="2" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.5" />
                            <text x="26" y="339" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">User</text>
                            <rect x="60" y="330" width="10" height="10" rx="2" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.5" />
                            <text x="76" y="339" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">App</text>
                            <rect x="105" y="330" width="10" height="10" rx="2" fill="#0D2818" stroke="#34d399" strokeWidth="0.5" />
                            <text x="121" y="339" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">Agent</text>
                            <rect x="160" y="330" width="10" height="10" rx="2" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.5" />
                            <text x="176" y="339" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">System</text>
                            <rect x="220" y="330" width="10" height="10" rx="2" fill="#1F1F1F" stroke="#6B7280" strokeWidth="0.5" strokeDasharray="3 1" />
                            <text x="236" y="339" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">Offline</text>
                            <g transform="translate(282,330)">
                                <rect x="-1" y="-1" width="12" height="12" rx="1.5" fill="#0D3320" stroke="#34d399" strokeWidth="0.5" transform="rotate(45 5 5)" />
                            </g>
                            <text x="300" y="339" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">Decision</text>
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
                                Four Pillars of the Ecosystem
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                I designed the platform as four interconnected products — a <span className="text-[#141414] font-medium">Marketplace</span> for discovery, an <span className="text-[#141414] font-medium">AI Concierge</span> for guidance, an <span className="text-[#141414] font-medium">Owner Dashboard</span> for post-purchase management, and <span className="text-[#141414] font-medium">Reviero OS</span> — the AI-powered business copilot.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Pillar 1: Investment Marketplace */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">01 / Discovery</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Investment Marketplace</h3>
                            <p className="text-sm text-gray-500 mb-6">Financial Assets, Not Listings</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                Unlike standard portals (Idealista), I treated homes as <span className="text-[#141414]">financial assets</span>. Every property card shows AI-calculated metrics.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Predictive Analytics:</span> AI calculates Projected Yield, Occupancy Rate, and Cash Flow from historical Big Data.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Visual Trust:</span> Complex data visualized into simple charts for non-pro investors to make instant decisions.</span>
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
                            <div className="flex justify-center items-end gap-[40px]">
                                <div className="relative w-[240px] z-10">
                                    <div className="rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-[#E8E4DC] rounded-[28px] overflow-hidden">
                                            <img src="https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/Reviero/Catalog.png" alt="Marketplace Catalog" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-[240px] mt-8">
                                    <div className="rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-[#E8E4DC] rounded-[28px] overflow-hidden">
                                            <img src="https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/Reviero/Booking%20old%20aprt.png" alt="Property Detail" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Pillar 2: AI Concierge */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 lg:-ml-8"
                        >
                            <div className="flex justify-center items-end gap-[40px]">
                                <div className="relative w-[240px] z-10">
                                    <div className="rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-white rounded-[28px] overflow-hidden">
                                            <img src="https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/Reviero/ai%20assistent.png" alt="AI Assistant" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-[240px] mt-8">
                                    <div className="rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-white rounded-[28px] overflow-hidden">
                                            <img src="https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/Reviero/ai%20selection.png" alt="AI Selection" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
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
                            <p className="text-xs text-gray-500 tracking-wide mb-6">02 / Guidance</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The AI Concierge</h3>
                            <p className="text-sm text-gray-500 mb-6">Lowering the Barrier for Older Users</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                A hybrid chat interface where users ask natural questions (<span className="text-[#141414]">"Find me a villa with &gt;7% yield"</span>) or interact with their human broker.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Natural Language:</span> Users ask questions in plain language instead of navigating complex filters.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Hybrid Mode:</span> Seamless transition between AI responses and human broker conversations.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Pillar 3: Owner Dashboard */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-md"
                        >
                            <p className="text-xs text-gray-500 tracking-wide mb-6">03 / Post-Purchase</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Owner Dashboard</h3>
                            <p className="text-sm text-gray-500 mb-6">The Relationship Doesn't End at the Sale</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                I turned a transactional app into a <span className="text-[#141414]">daily utility for investors</span> with live revenue tracking and vacation management.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Live Revenue:</span> Real-time stats on the property's earnings from rentals.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Owner Stays:</span> Block dates for personal vacations, automatically removing listings from Airbnb/Booking.</span>
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
                            <div className="flex justify-center items-end gap-[40px]">
                                <div className="relative w-[240px] z-10">
                                    <div className="rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-[#E8E4DC] rounded-[28px] overflow-hidden">
                                            <img src="https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/Reviero/Dashboard.png" alt="Owner Dashboard" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-[240px] mt-8">
                                    <div className="rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-[#E8E4DC] rounded-[28px] overflow-hidden">
                                            <img src="https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/Reviero/Detailed%20Calculations%20Page.png" alt="Detailed Calculations" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* The Engine Room — Reviero OS Deep Dive */}
            <section className="bg-[#141414] px-8 lg:px-16 py-28">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">04 / The Backoffice</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">Reviero OS: The Agency Operating System</h2>
                    <div className="max-w-2xl">
                        <p className="text-base text-[#A09A92] leading-relaxed mb-4">
                            A B2C app is only as fast as the operations team behind it. To process 7,000+ users with a lean team, I architected a bespoke Internal Operating System.
                        </p>
                        <p className="text-base text-[#A09A92] leading-relaxed">
                            It replaces scattered tools (HubSpot, Zapier, Excel) with a unified <span className="text-white">Command Center</span> that allows the Head of Sales to orchestrate a "Hybrid Workforce" of AI Agents and Human Brokers.
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
                        <h3 className="text-lg font-normal text-white mb-3">Visual Automation Engine</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed mb-4">
                            A Node-Based Visual Editor (React Flow) that empowers the Head of Sales to program AI behavior without developers.
                        </p>
                        <ul className="space-y-2 text-xs text-[#8A8680]">
                            <li><span className="text-[#A09A92]">Drag & Drop Logic:</span> Build scenarios like "If Budget {'>'} €1M → Route to Senior Agent".</li>
                            <li><span className="text-[#A09A92]">Fine-Tuning:</span> Retry logic, time-delays, and fallback rules for AI Voice Agents.</li>
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
                        <h3 className="text-lg font-normal text-white mb-3">AI-Enhanced CRM</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed mb-4">
                            When a human broker takes over, they don't start from zero. The Unified Profile aggregates the entire digital footprint.
                        </p>
                        <ul className="space-y-2 text-xs text-[#8A8680]">
                            <li><span className="text-[#A09A92]">Seamless Handoff:</span> AI call transcripts and chat logs alongside human notes.</li>
                            <li><span className="text-[#A09A92]">Smart Queues:</span> Auto-prioritizes "Hot" leads based on in-app behavior.</li>
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
                        <h3 className="text-lg font-normal text-white mb-3">Data-Driven Command Center</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed mb-4">
                            A high-density workspace designed for power users — real-time funnel analytics from "AI Lead" to "Closed Deal".
                        </p>
                        <ul className="space-y-2 text-xs text-[#8A8680]">
                            <li><span className="text-[#A09A92]">Smart Lists:</span> Filter thousands of leads with keyboard shortcuts and query builders.</li>
                            <li><span className="text-[#A09A92]">Agent Dashboard:</span> Performance tracking, task assignment, and team comms.</li>
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
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-3">Workflow Map</p>
                    <h3 className="text-xl lg:text-2xl font-light font-heading text-white mb-2">The "Agency Brain" Workflow</h3>
                    <p className="text-sm text-[#8A8680] mb-10">From Insight to Automation in 35 steps</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-[#111] rounded-sm overflow-x-auto"
                >
                    <svg viewBox="0 0 1200 460" className="w-full h-auto min-w-[900px]" fill="none" style={{ padding: '24px 16px 16px' }}>
                        <defs>
                            <marker id="arrW" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="6" markerHeight="4" orient="auto">
                                <path d="M1 1L9 4L1 7" stroke="#444" strokeWidth="1.2" fill="none" />
                            </marker>
                        </defs>

                        {/* ===== PHASE 1: MONITORING (Amber) — 8 nodes ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.1, staggerChildren: 0.08, delayChildren: 0.1 } } }}>
                            <motion.text variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x="10" y="16" fill="#FBBF24" fontSize="9" fontWeight="600" fontFamily="Inter,system-ui,sans-serif" letterSpacing="0.1em">PHASE 1 — MONITORING & DIAGNOSTICS</motion.text>
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="10" y="26" width="110" height="36" rx="4" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.7" /><text x="65" y="48" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Login & Auth</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="120" y1="44" x2="133" y2="44" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="136" y="26" width="118" height="36" rx="4" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.7" /><text x="195" y="48" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Dashboard Scan</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="254" y1="44" x2="267" y2="44" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="270" y="26" width="110" height="36" rx="4" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.7" /><text x="325" y="48" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Source Filter</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="380" y1="44" x2="393" y2="44" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="396" y="26" width="130" height="36" rx="4" fill="#2D2010" stroke="#FBBF24" strokeWidth="1" /><text x="461" y="48" fill="#FBBF24" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Anomaly Detection</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="526" y1="44" x2="539" y2="44" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="542" y="26" width="105" height="36" rx="4" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.7" /><text x="594" y="48" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Drill Down</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="647" y1="44" x2="660" y2="44" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="663" y="26" width="118" height="36" rx="4" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.7" /><text x="722" y="48" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Micro-Analysis</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="781" y1="44" x2="794" y2="44" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="797" y="26" width="125" height="36" rx="4" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.7" /><text x="859" y="48" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Evidence Review</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="922" y1="44" x2="935" y2="44" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="938" y="26" width="240" height="36" rx="4" fill="#2D2010" stroke="#FBBF24" strokeWidth="1" /><text x="1058" y="41" fill="#FBBF24" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">INSIGHT</text><text x="1058" y="53" fill="#E8E4DC" fontSize="8" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">"AI too aggressive at 10s — clients hang up"</text></motion.g>
                        </motion.g>

                        {/* Connector 1→2 */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.0 } } }}>
                            <path d="M1058 62 L1058 78 L65 78 L65 92" stroke="#3B82F6" strokeWidth="0.7" strokeDasharray="3 2" fill="none" markerEnd="url(#arrW)" />
                        </motion.g>

                        {/* ===== PHASE 2a: ENGINEERING Row 1 (Blue) — 6 nodes ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.2, staggerChildren: 0.08, delayChildren: 0.1 } } }}>
                            <motion.text variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x="10" y="103" fill="#3B82F6" fontSize="9" fontWeight="600" fontFamily="Inter,system-ui,sans-serif" letterSpacing="0.1em">PHASE 2 — WORKFLOW ENGINEERING</motion.text>
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="10" y="110" width="112" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="66" y="132" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Open Builder</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="122" y1="128" x2="135" y2="128" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="138" y="110" width="115" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="195" y="132" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Load Scenario</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="253" y1="128" x2="266" y2="128" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="269" y="110" width="130" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="334" y="132" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Edit Mode (Canvas)</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="399" y1="128" x2="412" y2="128" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="415" y="110" width="125" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="477" y="132" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Locate Vapi Node</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="540" y1="128" x2="553" y2="128" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="556" y="110" width="200" height="36" rx="4" fill="#0C1D3A" stroke="#60A5FA" strokeWidth="1" /><text x="656" y="125" fill="#60A5FA" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">KEY EDIT</text><text x="656" y="137" fill="#E8E4DC" fontSize="8" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Modify Prompt: "Build rapport first"</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="756" y1="128" x2="769" y2="128" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="772" y="110" width="120" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="832" y="132" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Add Branching</text></motion.g>
                        </motion.g>

                        {/* Connector 2a → 2b */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.0 } } }}>
                            <path d="M892 146 L892 158 L65 158 L65 175" stroke="#3B82F6" strokeWidth="0.7" strokeDasharray="3 2" fill="none" markerEnd="url(#arrW)" />
                        </motion.g>

                        {/* ===== PHASE 2b: ENGINEERING Row 2 (Blue) — 8 nodes ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.2, staggerChildren: 0.08, delayChildren: 0.1 } } }}>
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="10" y="178" width="130" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="75" y="200" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">If "Just looking"</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="140" y1="196" x2="153" y2="196" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="156" y="178" width="110" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="211" y="200" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Send PDF</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="266" y1="196" x2="279" y2="196" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="282" y="178" width="100" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="332" y="200" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Wait 24h</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="382" y1="196" x2="395" y2="196" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="398" y="178" width="100" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="448" y="200" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">AI Call #2</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="498" y1="196" x2="511" y2="196" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="514" y="178" width="115" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="571" y="200" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Retry 3x / 2h</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="629" y1="196" x2="642" y2="196" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="645" y="178" width="145" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" strokeDasharray="4 2" /><text x="717" y="193" fill="#60A5FA" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">FALLBACK</text><text x="717" y="205" fill="#E8E4DC" fontSize="8" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Manual → Junior Agent</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="790" y1="196" x2="803" y2="196" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="806" y="178" width="100" height="36" rx="4" fill="#0C1D3A" stroke="#3B82F6" strokeWidth="0.7" /><text x="856" y="200" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Simulate</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="906" y1="196" x2="919" y2="196" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="922" y="178" width="130" height="36" rx="4" fill="#0C1D3A" stroke="#60A5FA" strokeWidth="1" /><text x="987" y="193" fill="#60A5FA" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">DEPLOY</text><text x="987" y="205" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Publish v2.4</text></motion.g>
                        </motion.g>

                        {/* Connector 2→3 */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3.2 } } }}>
                            <path d="M987 214 L987 232 L65 232 L65 252" stroke="#7C3AED" strokeWidth="0.7" strokeDasharray="3 2" fill="none" markerEnd="url(#arrW)" />
                        </motion.g>

                        {/* ===== PHASE 3: TEAM ORCHESTRATION (Purple) — 6 nodes ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3.4, staggerChildren: 0.1, delayChildren: 0.1 } } }}>
                            <motion.text variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x="10" y="262" fill="#7C3AED" fontSize="9" fontWeight="600" fontFamily="Inter,system-ui,sans-serif" letterSpacing="0.1em">PHASE 3 — TEAM ORCHESTRATION</motion.text>
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="10" y="270" width="130" height="36" rx="4" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.7" /><text x="75" y="292" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Routing Rules</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="140" y1="288" x2="158" y2="288" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="161" y="270" width="175" height="36" rx="4" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.7" /><text x="248" y="285" fill="#A78BFA" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">VIP FILTER</text><text x="248" y="297" fill="#E8E4DC" fontSize="8" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Budget {'>'} 2M + Marbella</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="336" y1="288" x2="354" y2="288" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="357" y="270" width="160" height="36" rx="4" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.7" /><text x="437" y="292" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Round Robin → Seniors</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="517" y1="288" x2="535" y2="288" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="538" y="270" width="140" height="36" rx="4" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.7" /><text x="608" y="292" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Capacity Check</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="678" y1="288" x2="696" y2="288" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="699" y="270" width="160" height="36" rx="4" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.7" /><text x="779" y="292" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Override: Remove Agent</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="859" y1="288" x2="877" y2="288" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="880" y="270" width="155" height="36" rx="4" fill="#2D1F4E" stroke="#A78BFA" strokeWidth="1" /><text x="957" y="285" fill="#A78BFA" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">NOTIFY</text><text x="957" y="297" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Slack → #vip-leads</text></motion.g>
                        </motion.g>

                        {/* Connector 3→4 */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 4.5 } } }}>
                            <path d="M957 306 L957 326 L65 326 L65 345" stroke="#34d399" strokeWidth="0.7" strokeDasharray="3 2" fill="none" markerEnd="url(#arrW)" />
                        </motion.g>

                        {/* ===== PHASE 4: EXECUTION (Green) — 7 nodes ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 4.7, staggerChildren: 0.1, delayChildren: 0.1 } } }}>
                            <motion.text variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x="10" y="355" fill="#34d399" fontSize="9" fontWeight="600" fontFamily="Inter,system-ui,sans-serif" letterSpacing="0.1em">PHASE 4 — EXECUTION & CONTROL</motion.text>
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="10" y="364" width="105" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="62" y="386" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Live Feed</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="115" y1="382" x2="133" y2="382" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="136" y="364" width="135" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="203" y="379" fill="#6EE7B7" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">NEW LEAD</text><text x="203" y="391" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Joana Garcia</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="271" y1="382" x2="289" y2="382" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="292" y="364" width="130" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="357" y="386" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">AI Contacting...</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="422" y1="382" x2="440" y2="382" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="443" y="364" width="125" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="505" y="379" fill="#6EE7B7" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SUCCESS</text><text x="505" y="391" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Qualifying</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="568" y1="382" x2="586" y2="382" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="589" y="364" width="148" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="663" y="386" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Handoff → Alexei</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="737" y1="382" x2="755" y2="382" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="758" y="364" width="155" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="835" y="386" fill="#E8E4DC" fontSize="8" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Note: "Offer project X"</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="913" y1="382" x2="931" y2="382" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="934" y="364" width="155" height="36" rx="4" fill="#0D2818" stroke="#6EE7B7" strokeWidth="1" /><text x="1011" y="379" fill="#6EE7B7" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">ROI</text><text x="1011" y="391" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Pipeline Value ↑</text></motion.g>
                        </motion.g>

                        {/* ===== LEGEND ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 6.0 } } }}>
                            <rect x="10" y="425" width="12" height="4" rx="1" fill="#F59E0B" />
                            <text x="28" y="430" fill="#8A8680" fontSize="8" fontFamily="Inter,system-ui,sans-serif">Diagnostics</text>
                            <rect x="105" y="425" width="12" height="4" rx="1" fill="#3B82F6" />
                            <text x="123" y="430" fill="#8A8680" fontSize="8" fontFamily="Inter,system-ui,sans-serif">Engineering</text>
                            <rect x="200" y="425" width="12" height="4" rx="1" fill="#7C3AED" />
                            <text x="218" y="430" fill="#8A8680" fontSize="8" fontFamily="Inter,system-ui,sans-serif">Orchestration</text>
                            <rect x="305" y="425" width="12" height="4" rx="1" fill="#34d399" />
                            <text x="323" y="430" fill="#8A8680" fontSize="8" fontFamily="Inter,system-ui,sans-serif">Execution</text>
                            <line x1="395" y1="427" x2="420" y2="427" stroke="#555" strokeWidth="0.7" strokeDasharray="3 2" />
                            <text x="428" y="430" fill="#8A8680" fontSize="8" fontFamily="Inter,system-ui,sans-serif">Phase Transition</text>
                        </motion.g>
                    </svg>
                </motion.div>

                {/* Video Walkthrough */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 mb-0"
                >
                    <div className="rounded-lg overflow-hidden border border-[#2A2A2A]">
                        <div className="bg-[#1F1F1F] px-4 py-2.5 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                            <span className="ml-4 text-[10px] text-[#666] font-mono">admin.reviero.com/os</span>
                        </div>
                        <div className="bg-[#1A1A1A]">
                            <video
                                src="https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/stayteai.mov"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-auto block"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-16 pt-8 border-t border-[#2A2A2A]"
                >
                    <p className="text-[10px] text-[#555] tracking-widest uppercase">Tech Stack: React Flow · Vapi Integration · Supabase Realtime</p>
                </motion.div>
            </section>

            {/* Key Challenges */}
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
                            <p className="text-7xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-right">7,000+</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Users acquired</p>
                                <p className="text-sm text-gray-500 leading-relaxed">Built a high-ticket audience of European business owners and investors through a value-first product strategy.</p>
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
                            <p className="text-7xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-right">~200</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Deals closed</p>
                                <p className="text-sm text-gray-500 leading-relaxed">Facilitated approximately 200 property transactions through the platform, proving the end-to-end digital pipeline.</p>
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
                            <p className="text-7xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-right">1,000+</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Sales Qualified Leads</p>
                                <p className="text-sm text-gray-500 leading-relaxed">Generated over 1,000 SQLs with dramatically improved quality by shifting from lead volume to lead liquidity.</p>
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
                        <p className="text-xl lg:text-2xl font-light text-[#A09A92] leading-relaxed">
                            I single-handedly designed the full product architecture and translated chaotic business processes into clear, scalable interfaces — from a <span className="text-white">buyer-facing Investment Marketplace</span> to an <span className="text-white">AI-powered Agency Operating System</span> for the sales team. This end-to-end approach allowed the business to scale operations, close deals faster, and ultimately start generating revenue.
                        </p>
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

export default CaseReviero;
