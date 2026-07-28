import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone, TrendingUp, Shield } from "lucide-react";

/* ── Premium easing curve (matches Hero.tsx) ── */
const smooth = [0.22, 1, 0.36, 1] as const;

const CaseReviero = () => {
    const challenges = [
        {
            letter: "A",
            title: "One Lead, Six Systems",
            subtitle: "System Design",
            problem: "Nothing agreed on what a lead was. The app had a browsing session, HubSpot had a contact, Pipedrive had a deal, the voice agent had a call outcome, and a broker had a viewing that happened in a car park with no product involved at all. There was no spec — only a business goal and several surfaces that each assumed a different shape.",
            solution: "I designed the model before the screens: what counts as a lead, when it becomes one, which system owns it at each stage, and what happens to it while it is offline. The offline gap got explicit treatment rather than being ignored — viewings and signed contracts are mirrored back through the admin system, so the part of the process that happens in person still lands in the record the recommendations learn from.",
            result: "One definition carried across the app, two CRMs, the voice agent and the brokerage tooling. Where those systems disagreed, the connectors did the translating instead of the people using them."
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
                <div className="w-full h-[50vh] bg-[#1A1A2E] overflow-hidden relative">
                    <motion.img
                        src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero/revierohero6-1.png"
                        alt="Reviero Hero"
                        className="w-full h-full object-cover"
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
                        initial={{ scaleY: 1 }}
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
                                        Reviero
                                    </motion.span>
                                </div>
                                {/* Subtitle lines — staggered mask reveals */}
                                <span className="text-gray-400">
                                    {["AI-Powered Real Estate", "Ecosystem"].map((line, i) => (
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
                                        { label: "Date", value: "2024 – Feb 2026" },
                                        { label: "Location", value: "Spain" },
                                        { label: "Services", value: "Product Design\nFrontend Engineering\nBackend & Integrations" },
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
                                        { label: "Role", value: "Design Engineer\n(everything but the mobile app)" },
                                        { label: "Target", value: "Primary: HNW Investors (B2C)\nInternal: Brokerage Team (B2B)" },
                                        { label: "Platform", value: "iOS / Android (React Native)\n+ Web Admin · Supabase\nHubSpot · Pipedrive · Twilio · Vapi" },
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
                                    href="https://app.reviero.com/"
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
                                Buying investment property in Spain is opaque by default. The buyers were executives with money and no time, estimating returns from intuition, hand-checked Airbnb listings and spreadsheets that went stale the week they were built.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">The Mission</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                One place to find a property worth buying, judge it on numbers rather than photographs, and manage what it earns afterwards. And because a marketplace has two sides, the same job on the inside: the system the brokerage itself runs on.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">Impact</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                <span className="text-[#141414] font-medium">7,000+ users</span>, <span className="text-[#141414] font-medium">1,000+ qualified leads</span> and around <span className="text-[#141414] font-medium">200 closed transactions</span>, on an ecosystem whose interface, backend and every connector between them I designed and wrote.
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
                            { role: "Product Design (0→1)", desc: "Owned the whole experience from a blank sheet through launch and growth, for buyers in their forties and fifties who judge a product in about a minute." },
                                                        { role: "Frontend & Backend", desc: "The web frontend, and the backend functions and data model on Supabase that the whole ecosystem reads from." },
                            { role: "Integrations", desc: "Wrote the API connectors the business ran on: HubSpot and Pipedrive for CRM, the Facebook Lead Ads API to pull new leads straight into the system, and Twilio with Vapi to stand up the voice assistant." },
                            { role: "UX Strategy", desc: "Ran the experiment that removed the sign-up wall, and designed the funnel that moved registration to the point where the buyer had already been given something worth having." },
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
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">The Funnel</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">Giving the Data Away First</h2>
                    <div className="max-w-2xl">
                        <p className="text-base text-[#A09A92] leading-relaxed">
                            A standard marketplace asks who you are before it shows you anything. To someone weighing a half-million-euro decision that reads as a toll, not a service. So the order is inverted: the financial analysis comes first and free, and the product asks for a phone number only once the buyer has shown they want something.
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
                        <h3 className="text-lg font-normal text-white mb-1">No login wall</h3>
                        <p className="text-sm text-[#A09A92] mb-3">Yield and ROI on the first visit</p>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            Projected yield, occupancy and cash flow are visible without an account. It is the most valuable thing the product holds, and giving it away is what makes everything after it credible.
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
                        <h3 className="text-lg font-normal text-white mb-1">Scoring without a form</h3>
                        <p className="text-sm text-[#A09A92] mb-3">What people open, not what they type</p>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            Time spent on a listing and the kind of asset opened say more about intent than a questionnaire, and cost the buyer nothing to give. The sales side gets a ranked list built from behaviour instead of from answers.
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
                        <h3 className="text-lg font-normal text-white mb-1">Asking at the right moment</h3>
                        <p className="text-sm text-[#A09A92] mb-3">Registration as an exchange</p>
                        <p className="text-sm text-[#8A8680] leading-relaxed">
                            The prompt appears when someone saves a property — the point where an account is the thing they want rather than the thing in their way. What reaches the brokers is a shorter list of people who already know what they are looking at.
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
                                Four Products, One System
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Four products that had to behave as one: a marketplace to find assets, an assistant to explain them, a dashboard for what happens after the purchase, and <span className="text-[#141414] font-medium">Reviero OS</span> — the system the brokerage itself runs on.
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
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Marketplace</h3>
                            <p className="text-sm text-gray-500 mb-6">Priced as an asset, not photographed as a home</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                Portals like Idealista sell a photograph and a floor plan. Here every card leads with the numbers the buyer is actually deciding on, computed from historical rental data rather than asserted by whoever is selling.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Numbers, computed:</span> Projected yield, occupancy and cash flow, derived from historical rental data for that area rather than quoted by the seller.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Read in a glance:</span> These buyers are executives, not analysts — the maths is shown as something you take in quickly, not something you study.</span>
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
                                            <img src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero/catalog.png" alt="Marketplace Catalog" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-[240px] mt-8">
                                    <div className="rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-[#E8E4DC] rounded-[28px] overflow-hidden">
                                            <img src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero/booking-old-aprt.png" alt="Property Detail" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
                                            <img src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero/ai-assistent.png" alt="AI Assistant" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-[240px] mt-8">
                                    <div className="rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-white rounded-[28px] overflow-hidden">
                                            <img src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero/ai-selection.png" alt="AI Selection" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-4">The Assistant</h3>
                            <p className="text-sm text-gray-500 mb-6">One thread, whether software answers or a person does</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                Buyers ask in words — <span className="text-[#141414]">a villa above seven percent yield</span> — instead of learning a filter panel. When the question stops being one software can answer, the same thread carries on with a broker.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Plain questions:</span> Search expressed as a sentence rather than assembled out of filters.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">One thread:</span> The handover from assistant to broker happens inside the same conversation, without the buyer having to start again.</span>
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
                            <p className="text-sm text-gray-500 mb-6">The part that keeps the app open after the sale</p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8">
                                A purchase is one day; owning is years. The dashboard shows what the property earned this month and lets the owner block dates for their own stay.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Live earnings:</span> What the property made, updated as bookings settle.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#141414]">•</span>
                                    <span><span className="text-[#141414]">Owner stays:</span> Blocking dates for personal use pulls the listing from Airbnb and Booking automatically.</span>
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
                                            <img src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero/dashboard.png" alt="Owner Dashboard" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-[240px] mt-8">
                                    <div className="rounded-[36px] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-[#1a1a1a]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[20px] bg-[#1a1a1a] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-[#E8E4DC] rounded-[28px] overflow-hidden">
                                            <img src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero/detailed-calculations-page.png" alt="Detailed Calculations" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">The Backoffice</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">Reviero OS</h2>
                    <div className="max-w-2xl">
                        <p className="text-base text-[#A09A92] leading-relaxed mb-4">
                            A consumer app moves at the speed of the people behind it. Seven thousand users and a small sales team meant the internal tooling was the constraint — and it was spread across HubSpot, Zapier and spreadsheets.
                        </p>
                        <p className="text-base text-[#A09A92] leading-relaxed">
                            So the brokerage got its own system: <span className="text-white">one place where the sales lead directs both the AI agents and the human ones</span>, instead of three tools that each knew part of the story.
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
                        <h3 className="text-lg font-normal text-white mb-3">The automation editor</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed mb-4">
                            A visual editor where the sales lead changes what the AI agents do, without going through a developer. Covered in depth below.
                        </p>
                        <ul className="space-y-2 text-xs text-[#8A8680]">
                            <li><span className="text-[#A09A92]">Rules assembled, not written:</span> a budget threshold routing a lead to a senior broker.</li>
                            <li><span className="text-[#A09A92]">Failure handled explicitly:</span> retries, delays between attempts, and a fallback to a person.</li>
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
                        <h3 className="text-lg font-normal text-white mb-3">The shared record</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed mb-4">
                            When a broker picks up a lead the AI has been working, they start from everything that already happened rather than from a summary.
                        </p>
                        <ul className="space-y-2 text-xs text-[#8A8680]">
                            <li><span className="text-[#A09A92]">Nothing restarts:</span> call transcripts and chat history sit next to the brokers' own notes.</li>
                            <li><span className="text-[#A09A92]">Ordered by behaviour:</span> the queue is ranked by what the lead actually did in the app.</li>
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
                        <h3 className="text-lg font-normal text-white mb-3">The working surface</h3>
                        <p className="text-sm text-[#8A8680] leading-relaxed mb-4">
                            A dense screen for people who sit in it all day — the funnel from first contact to closed deal, and the controls to act on it without leaving.
                        </p>
                        <ul className="space-y-2 text-xs text-[#8A8680]">
                            <li><span className="text-[#A09A92]">Built for volume:</span> filtering thousands of leads with keyboard shortcuts and saved queries.</li>
                            <li><span className="text-[#A09A92]">Team view:</span> who is carrying what, and how it is going.</li>
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
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="136" y="364" width="135" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="203" y="379" fill="#6EE7B7" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">NEW LEAD</text><text x="203" y="391" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">New enquiry</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="271" y1="382" x2="289" y2="382" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="292" y="364" width="130" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="357" y="386" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">AI Contacting...</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="422" y1="382" x2="440" y2="382" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="443" y="364" width="125" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="505" y="379" fill="#6EE7B7" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SUCCESS</text><text x="505" y="391" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Qualifying</text></motion.g>
                            <motion.line variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} x1="568" y1="382" x2="586" y2="382" stroke="#444" strokeWidth="0.7" markerEnd="url(#arrW)" />
                            <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><rect x="589" y="364" width="148" height="36" rx="4" fill="#0D2818" stroke="#34d399" strokeWidth="0.7" /><text x="663" y="386" fill="#E8E4DC" fontSize="8.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Handoff → broker</text></motion.g>
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
                                src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/stayteai.mov"
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
                    <p className="text-[10px] text-[#555] tracking-widest uppercase mt-2">Integrations: HubSpot · Pipedrive · Facebook Lead Ads · Twilio · Vapi</p>
                </motion.div>
            </section>

            {/* The Editor — visual programming for a non-programmer */}
            <section className="px-8 lg:px-16 py-28 bg-[#141414]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">The Editor</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">
                        Programming, for Someone Who Doesn't Program
                    </h2>
                    <div className="max-w-2xl space-y-4">
                        <p className="text-base text-[#A09A92] leading-relaxed">
                            The Head of Sales needed to change how the AI agents behaved — daily, in response to what was going wrong on calls that week. Routing that through an engineer meant a ticket, a sprint, and a rule that was already stale by the time it shipped.
                        </p>
                        <p className="text-base text-[#A09A92] leading-relaxed">
                            The alternative to a settings form was to give him <span className="text-white">a programming environment he could actually use</span> — a node canvas built on React Flow, where a scenario is something you assemble and can see, rather than a set of switches whose interactions you have to hold in your head.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                    {[
                        {
                            n: "01",
                            title: "A canvas, not a settings page",
                            body: "Automation rules are branching logic, and branching logic laid out as a form becomes unreadable at about the third condition. On a canvas the shape of the scenario is the explanation of it — you see the branch, the wait, the fallback, and where a lead can fall out.",
                        },
                        {
                            n: "02",
                            title: "A vocabulary, not a scripting language",
                            body: "The node set is deliberately small and domain-shaped: conditions on budget or location, delays, AI call steps, branches on outcome, handoff to a human. \"If budget over €1M, route to a senior agent\" is assembled, not written. Nothing in the editor requires knowing what a variable is.",
                        },
                        {
                            n: "03",
                            title: "The hard parts are the boring parts",
                            body: "Real automation is mostly failure handling, and that had to be expressible: retry counts and intervals, time delays between attempts, and a fallback path when the AI cannot close — three attempts over two hours, then hand it to a junior agent. Those live as first-class controls rather than as buried settings.",
                        },
                        {
                            n: "04",
                            title: "Simulate before you publish",
                            body: "The consequence of a bad rule is real calls to real prospects, so the editor separates editing from deploying. A scenario can be run through and inspected first, and publishing produces a version — v2.4, not \"saved\". Changing how the business talks to its leads should feel like shipping, because it is.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            className="border-t border-white/15 pt-6"
                        >
                            <p className="text-xs text-[#8A8680] mb-3">{item.n}</p>
                            <h3 className="text-lg font-normal text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-[#8A8680] leading-relaxed">{item.body}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-14 max-w-2xl"
                >
                    <p className="text-base text-[#A09A92] leading-relaxed">
                        This is the piece of the project I would point at first. It is not a screen — it is a small language, an editor for it, and a runtime behind it, aimed at one non-technical person who had to be able to change the business's behaviour on a Tuesday afternoon.
                    </p>
                </motion.div>
            </section>

            {/* The Wiring — integrations and backend */}
            <section className="px-8 lg:px-16 py-28 bg-[#D4D0C8]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">The Wiring</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414] mb-6">
                        The Seams Between the Systems
                    </h2>
                    <div className="max-w-2xl space-y-4">
                        <p className="text-base text-gray-700 leading-relaxed">
                            An ecosystem this shape is mostly seams. A lead arrives from an ad, has to reach a CRM, trigger a call, come back as a qualified record, and show up in the app — and none of those systems were built to talk to each other. Those seams were mine to write rather than to specify: the web frontend, backend functions on Supabase, and every connector between the platform and the services it depended on.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed">
                            <span className="text-[#141414]">The only thing I did not build was the mobile app itself.</span>
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-16 rounded-sm bg-[#C5C0B8]/40 overflow-x-auto"
                >
                    <svg viewBox="0 0 1000 420" className="w-full h-auto min-w-[840px]" fill="none" style={{ padding: '28px 24px 20px' }}>
                        <defs>
                            <marker id="archArr" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                                <path d="M1 1L9 4L1 7" stroke="#8A8680" strokeWidth="1.2" fill="none" />
                            </marker>
                        </defs>

                        {/* ── clients ── */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } } }}>
                            <text x="30" y="24" fill="#6A665F" fontSize="9" letterSpacing="2" fontFamily="Inter,system-ui,sans-serif">CLIENT SURFACES</text>

                            <rect x="30" y="38" width="365" height="66" rx="4" fill="none" stroke="#8A8680" strokeWidth="1" strokeDasharray="4 3" />
                            <text x="48" y="64" fill="#6A665F" fontSize="12" fontFamily="Inter,system-ui,sans-serif">Mobile app — iOS / Android</text>
                            <text x="48" y="82" fill="#8A8680" fontSize="10" fontFamily="Inter,system-ui,sans-serif">React Native. Designed by me,</text>
                            <text x="48" y="95" fill="#8A8680" fontSize="10" fontFamily="Inter,system-ui,sans-serif">built by someone else.</text>

                            <rect x="415" y="38" width="379" height="66" rx="4" fill="#141414" />
                            <text x="433" y="64" fill="#F5F3EE" fontSize="12" fontFamily="Inter,system-ui,sans-serif">Web admin — Reviero OS</text>
                            <text x="433" y="82" fill="#A09A92" fontSize="10" fontFamily="Inter,system-ui,sans-serif">Node editor, CRM, command</text>
                            <text x="433" y="95" fill="#A09A92" fontSize="10" fontFamily="Inter,system-ui,sans-serif">centre. Designed and built.</text>
                        </motion.g>

                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.35, duration: 0.4 } } }}>
                            <line x1="212" y1="104" x2="212" y2="160" stroke="#8A8680" strokeWidth="1" markerEnd="url(#archArr)" strokeDasharray="4 3" />
                            <line x1="604" y1="104" x2="604" y2="160" stroke="#8A8680" strokeWidth="1" markerEnd="url(#archArr)" />
                        </motion.g>

                        {/* ── platform ── */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.5 } } }}>
                            <text x="30" y="152" fill="#6A665F" fontSize="9" letterSpacing="2" fontFamily="Inter,system-ui,sans-serif">PLATFORM</text>
                            <rect x="30" y="166" width="764" height="76" rx="4" fill="#141414" />
                            <text x="48" y="192" fill="#F5F3EE" fontSize="12" fontFamily="Inter,system-ui,sans-serif">Supabase</text>
                            <text x="48" y="212" fill="#A09A92" fontSize="10" fontFamily="Inter,system-ui,sans-serif">Edge functions · data model · realtime layer</text>
                            <text x="48" y="228" fill="#A09A92" fontSize="10" fontFamily="Inter,system-ui,sans-serif">Written, not specified.</text>
                        </motion.g>

                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.6, duration: 0.4 } } }}>
                            <line x1="412" y1="242" x2="412" y2="292" stroke="#8A8680" strokeWidth="1" markerEnd="url(#archArr)" />
                            <text x="425" y="272" fill="#6A665F" fontSize="9.5" fontFamily="Inter,system-ui,sans-serif">connectors I wrote</text>
                        </motion.g>

                        {/* ── third parties ── */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.5 } } }}>
                            <text x="30" y="284" fill="#6A665F" fontSize="9" letterSpacing="2" fontFamily="Inter,system-ui,sans-serif">THIRD-PARTY SERVICES</text>
                            {[
                                { x: 30, top: "HubSpot", sub: "CRM" },
                                { x: 186, top: "Pipedrive", sub: "CRM" },
                                { x: 342, top: "Facebook", sub: "Lead Ads API" },
                                { x: 498, top: "Twilio", sub: "telephony" },
                                { x: 654, top: "Vapi", sub: "voice agent" },
                            ].map((svc) => (
                                <g key={svc.top}>
                                    <rect x={svc.x} y="298" width="140" height="54" rx="4" fill="none" stroke="#8A8680" strokeWidth="1" strokeDasharray="4 3" />
                                    <text x={svc.x + 16} y="322" fill="#6A665F" fontSize="11.5" fontFamily="Inter,system-ui,sans-serif">{svc.top}</text>
                                    <text x={svc.x + 16} y="338" fill="#8A8680" fontSize="9.5" fontFamily="Inter,system-ui,sans-serif">{svc.sub}</text>
                                </g>
                            ))}
                        </motion.g>

                        {/* ── legend ── */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.95, duration: 0.5 } } }}>
                            <rect x="30" y="382" width="18" height="8" rx="1.5" fill="#141414" />
                            <text x="56" y="390" fill="#6A665F" fontSize="9.5" fontFamily="Inter,system-ui,sans-serif">Designed and built by me</text>
                            <rect x="260" y="382" width="18" height="8" rx="1.5" fill="none" stroke="#8A8680" strokeWidth="1" strokeDasharray="4 3" />
                            <text x="286" y="390" fill="#8A8680" fontSize="9.5" fontFamily="Inter,system-ui,sans-serif">Someone else's code — my design, or a vendor</text>
                        </motion.g>
                    </svg>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                    {[
                        {
                            n: "01",
                            title: "CRM connectors",
                            body: "API connectors for HubSpot and Pipedrive, so a lead captured in the product landed in whichever CRM the sales side actually worked in — and came back enriched rather than dead-ending in a form submission.",
                        },
                        {
                            n: "02",
                            title: "Lead capture at the source",
                            body: "The Facebook Lead Ads API wired straight into the system, so paid acquisition fed the same pipeline as organic signups instead of arriving as a spreadsheet somebody imported on Monday.",
                        },
                        {
                            n: "03",
                            title: "The voice assistant's plumbing",
                            body: "Twilio for telephony and Vapi for the conversational layer, wired to the CRM so an inbound lead could be called, qualified and written back without a human in the loop.",
                        },
                        {
                            n: "04",
                            title: "Backend on Supabase",
                            body: "Functions, data model and the realtime layer the admin OS reads from — written rather than handed to someone with a spec.",
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

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-14 max-w-2xl"
                >
                    <p className="text-base text-gray-700 leading-relaxed">
                        Integrating five third-party APIs back to back teaches you something no amount of reading does: which ones are a pleasure and which ones fight you, and why. Sparse errors, undocumented required fields, auth flows that assume a shape your product does not have. That is the same judgement, pointed the other way, that goes into designing an API somebody else has to live with.
                    </p>
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
                            <p className="text-5xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-left lg:text-right">7,000+</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Users acquired</p>
                                <p className="text-sm text-gray-500 leading-relaxed">European buyers, mostly executives in their forties and fifties, reached without putting a sign-up wall in front of the numbers they came for.</p>
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
                            <p className="text-5xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-left lg:text-right">~200</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Deals closed</p>
                                <p className="text-sm text-gray-500 leading-relaxed">Property transactions carried the whole way through the platform — including the viewings and signings that happen away from a screen.</p>
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
                            <p className="text-5xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-left lg:text-right">5</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Third-party systems wired in</p>
                                <p className="text-sm text-gray-500 leading-relaxed">HubSpot and Pipedrive for CRM, the Facebook Lead Ads API for paid acquisition, Twilio for telephony and Vapi for the voice agent — connectors I wrote, not integrations I specified.</p>
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
                            Designing the CRM handoff is one thing; <span className="text-white">writing the connector that carries it</span> is where you find out whether the model you invented survives contact with two CRMs that disagree about what a lead is. That is the argument for doing both: the distance between a decision and its consequence collapses to <span className="text-white">the same afternoon</span>, and a model that does not work gets found out while it is still cheap to change. Over two years that compounded into an ecosystem where the business logic, the interface and the wiring were never three different people's understanding of the same thing.
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
