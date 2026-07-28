import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useFirstPaint } from "@/hooks/useFirstPaint";

/* ── Premium easing curve (matches Hero.tsx) ── */
const smooth = [0.22, 1, 0.36, 1] as const;

/* ── Auto-cycling image slider for browser mockups ── */
const BrowserSlider = ({ images, alt, interval = 3000 }: { images: string[]; alt: string; interval?: number }) => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => setCurrent(prev => (prev + 1) % images.length), interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);
    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
                <motion.img
                    key={current}
                    src={images[current]}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                />
            </AnimatePresence>
        </div>
    );
};

const CaseFlowHealth = () => {
    const firstPaint = useFirstPaint();

    const challenges = [
        {
            letter: "A",
            title: "The \"Panic Threshold\"",
            subtitle: "Cognitive Ergonomics",
            conflict: "Health Executives aren't doctors — they are stressed managers making multimillion-dollar decisions under pressure. Showing them raw medical metadata (PCR cycles, viral loads) created \"Analysis Paralysis\" and increased the risk of costly mistakes.",
            solution: "I designed based on \"Cognitive Triage.\" I hid 90% of the medical data, enforcing a strict traffic-light triage. The UI doesn't just display data; it interprets it, forcing an instant \"Go/No-Go\" decision.",
            result: "Cut the go/no-go decision from minutes of reading lab data to a single glance."
        },
        {
            letter: "B",
            title: "Designing in the Dark",
            subtitle: "Zero-Access Research",
            conflict: "Due to strict HIPAA privacy laws and VIP NDAs, I had zero direct access to end-users. I couldn't interview a Netflix producer or install analytics trackers on sensitive medical data. Traditional UX research was impossible.",
            solution: "I turned the constraint into a process. I treated the CEO and PM as \"User Proxies,\" building High-Fidelity Prototypes for every sales meeting. Stakeholders demoed these to Disney execs — their questions became my next sprint's requirements. Every design decision was filtered through HIPAA constraints — role-based access, audit trails, and data minimization were core UX principles from day one.",
            result: "Transformed a research limitation into a competitive advantage: the premium, \"Apple-like\" aesthetic became the main differentiator against legacy competitors."
        },
        {
            letter: "C",
            title: "The \"Fractal\" Hierarchy",
            subtitle: "Enterprise Architecture",
            conflict: "A Hollywood studio isn't a flat list of employees. It's a deep, chaotic tree: Studio → Production → Unit A → Stunt Team. A flat list meant that one positive case looked like a disaster for the whole company, causing unnecessary shutdowns.",
            solution: "I designed a Recursive \"Micro-Quarantine\" Model. The navigation allows managers to drill down and isolate a specific node (e.g., \"Camera Crew B\") without locking down the entire production branch.",
            result: "Enabled Precision Risk Management, saving clients millions in potential downtime costs."
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
                <div className="w-full h-[50vh] bg-[#0A192F] overflow-hidden relative">
                    <motion.img
                        src="https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/222.png"
                        alt="Flow Health — Enterprise Biosecurity OS"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.15 }}
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
                        {/* Left: Title + Logos */}
                        <div>
                            <h1 className="text-[2rem] lg:text-[2.5rem] font-normal tracking-tight font-heading leading-[1.15] text-[#141414] mb-8">
                                {/* Title — masked slide-up */}
                                <div className="overflow-hidden">
                                    <motion.span
                                        className="block"
                                        initial={{ y: "110%" }}
                                        animate={{ y: "0%" }}
                                        transition={{ delay: 0.6, duration: 0.8, ease: smooth }}
                                    >
                                        Flow Health
                                    </motion.span>
                                </div>
                                {/* Subtitle — masked reveal */}
                                <span className="text-gray-400">
                                    <div className="overflow-hidden">
                                        <motion.span
                                            className="block"
                                            initial={{ y: "110%" }}
                                            animate={{ y: "0%" }}
                                            transition={{ delay: 0.75, duration: 0.8, ease: smooth }}
                                        >
                                            Biosecurity OS
                                        </motion.span>
                                    </div>
                                </span>
                            </h1>
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.7, ease: smooth }}
                            >
                                <p className="text-sm font-light text-gray-500 mb-3">Flow Health's clients</p>
                                <div className="flex items-center gap-8">
                                    <img src="/logos/netflix.svg" alt="Netflix" className="h-6 w-auto opacity-40" style={{ filter: 'brightness(0)' }} />
                                    <img src="/logos/disney.svg" alt="Disney" className="h-9 w-auto opacity-40" style={{ filter: 'brightness(0)' }} />
                                    <img src="/logos/jpmorgan.svg" alt="JPMorgan" className="h-5 w-auto opacity-40" style={{ filter: 'brightness(0)' }} />
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Metadata + Button */}
                        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-0">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:contents">
                                {/* Column 1 */}
                                <div className="space-y-6">
                                    {[
                                        { label: "Date", value: "2021 – 2023" },
                                        { label: "Location", value: "USA (Remote)" },
                                        { label: "Services", value: "Product Design\nUX Strategy\nData Visualization" },
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
                                        { label: "Role", value: "Senior Product Designer (Solo, End-to-End)" },
                                        { label: "End Users", value: "Health & Safety executives at\nDisney, Netflix, JPMorgan" },
                                        { label: "Platform", value: "Web App (HIPAA-Compliant)\n+ Native Mobile\n+ Internal Tools" },
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
                            <h3 className="text-base font-semibold text-[#141414] mb-4">The Client</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                Flow Health is a laboratory network providing exclusive health management for the world's biggest employers — <span className="text-[#141414] font-medium">Hollywood Studios</span> and <span className="text-[#141414] font-medium">Wall Street Banks</span>.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">The Challenge</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                During the pandemic, giants like Netflix and JPMorgan needed to manage the biological status of thousands of employees daily. They were drowning in "Spreadsheet Hell" — manual Excel files and disconnected PDFs. A single missed "Positive" result could shut down a movie set, costing clients <span className="text-[#141414] font-medium">$1M+ per day</span>.
                            </p>
                        </div>

                        <div className="pt-10">
                            <h3 className="text-base font-semibold text-[#141414] mb-4">The Mission</h3>
                            <p className="text-base font-light text-gray-600 leading-relaxed">
                                To build a <span className="text-[#141414] font-medium">"Biosecurity Command Center"</span> — a premium, HIPAA-compliant portal where managers could track safety risks in real-time. The UI became the key asset in securing exclusive multimillion-dollar contracts.
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
                            { role: "Product Design (Solo)", desc: "Solo designer responsible for the entire user experience — from discovery through enterprise deployment. Designed for an audience of VIP executives at Disney, Netflix, and JPMorgan." },
                            { role: "Data Visualization", desc: "Translated complex medical data into scannable dashboards using a strict Traffic Light (Red/Yellow/Green) triage system for instant Go/No-Go decisions." },
                            { role: "The Proxy Loop", desc: "With zero direct user access due to HIPAA/NDA constraints, I turned Sales Objections into requirements by building High-Fidelity Prototypes for every client meeting." },
                            { role: "Information Architecture", desc: "Designed a flexible nested hierarchy (Organization → Production → Crew → Employee) enabling Micro-Quarantines without shutting down entire productions." },
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



            {/* Healthcare Manager — User Flow (SVG) */}
            <section className="bg-[#141414] py-20 px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">02 / System Logic</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-4">Healthcare Manager Flow</h2>
                    <p className="text-base text-[#A09A92] max-w-2xl leading-relaxed">
                        The daily workflow of a Healthcare Manager — from morning triage through compliance checks to end-of-day reporting. Every node represents a real screen or system action.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-[#1A1A1A] rounded-sm overflow-x-auto"
                >
                    <svg viewBox="0 0 960 520" className="w-full h-auto min-w-[700px]" fill="none" style={{ padding: '28px 20px 16px' }}>
                        <defs>
                            <marker id="fhArr" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                                <path d="M1 1L9 4L1 7" stroke="#555" strokeWidth="1.2" fill="none" />
                            </marker>
                            <marker id="fhArrR" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                                <path d="M1 1L9 4L1 7" stroke="#EF4444" strokeWidth="1.2" fill="none" />
                            </marker>
                            <marker id="fhArrG" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                                <path d="M1 1L9 4L1 7" stroke="#34d399" strokeWidth="1.2" fill="none" />
                            </marker>
                        </defs>

                        {/* ===== PHASE 1: MORNING TRIAGE ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.1 } } }}>
                            <circle cx="16" cy="10" r="3" fill="#EF4444" />
                            <text x="26" y="13" fill="#EF4444" fontSize="8" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.5" fontWeight="500">PHASE 1 — MORNING TRIAGE</text>
                        </motion.g>

                        {/* N1: Login → Dashboard */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } } }}>
                            <rect x="10" y="30" width="120" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="70" y="48" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">MANAGER</text>
                            <text x="70" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Login</text>
                        </motion.g>
                        <motion.line x1="130" y1="52" x2="150" y2="52" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.32 } } }} />

                        {/* N2: Traffic Light Dashboard */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.38, duration: 0.5 } } }}>
                            <rect x="153" y="30" width="138" height="44" rx="5" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.8" />
                            <text x="222" y="48" fill="#FBBF24" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">APP</text>
                            <text x="222" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Traffic Light Dashboard</text>
                        </motion.g>
                        <motion.line x1="291" y1="52" x2="311" y2="52" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.48 } } }} />

                        {/* N3: Review Alerts */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.52, duration: 0.5 } } }}>
                            <rect x="314" y="30" width="120" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="374" y="48" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">MANAGER</text>
                            <text x="374" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Review Alerts</text>
                        </motion.g>
                        <motion.line x1="434" y1="52" x2="454" y2="52" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.62 } } }} />

                        {/* Decision: Positive? */}
                        <motion.g variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.66, duration: 0.4 } } }}>
                            <g transform="translate(492,52)">
                                <rect x="-24" y="-24" width="48" height="48" rx="3" fill="#3B1010" stroke="#EF4444" strokeWidth="0.8" transform="rotate(45)" />
                            </g>
                            <text x="492" y="50" fill="#EF4444" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">RED</text>
                            <text x="492" y="59" fill="#EF4444" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">STATUS?</text>
                        </motion.g>

                        {/* Yes arrow → Isolate */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.8 } } }}>
                            <text x="540" y="40" fill="#EF4444" fontSize="7" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">Yes</text>
                            <line x1="526" y1="52" x2="570" y2="52" stroke="#EF4444" strokeWidth="0.8" markerEnd="url(#fhArrR)" />
                        </motion.g>

                        {/* N4: Trigger Isolation */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.85, duration: 0.5 } } }}>
                            <rect x="573" y="30" width="130" height="44" rx="5" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.8" />
                            <text x="638" y="48" fill="#7DD3FC" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SYSTEM</text>
                            <text x="638" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Isolation Protocol</text>
                        </motion.g>
                        <motion.line x1="703" y1="52" x2="723" y2="52" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.95 } } }} />

                        {/* N5: Notify Crew */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.0, duration: 0.5 } } }}>
                            <rect x="726" y="30" width="130" height="44" rx="5" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.8" />
                            <text x="791" y="48" fill="#FBBF24" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">APP</text>
                            <text x="791" y="62" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Push: Quarantine</text>
                        </motion.g>

                        {/* No arrow → down to Phase 2 */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.1 } } }}>
                            <text x="500" y="95" fill="#34d399" fontSize="7" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">No</text>
                            <line x1="492" y1="86" x2="492" y2="120" stroke="#34d399" strokeWidth="0.8" markerEnd="url(#fhArrG)" />
                        </motion.g>

                        {/* ===== PHASE 2: COMPLIANCE LOOP ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.15 } } }}>
                            <circle cx="16" cy="135" r="3" fill="#F59E0B" />
                            <text x="26" y="138" fill="#F59E0B" fontSize="8" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.5" fontWeight="500">PHASE 2 — COMPLIANCE & TESTING</text>
                        </motion.g>

                        {/* N6: Open Vaccination Matrix */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.5 } } }}>
                            <rect x="10" y="155" width="138" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="79" y="173" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">MANAGER</text>
                            <text x="79" y="187" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Vaccination Matrix</text>
                        </motion.g>
                        <motion.line x1="148" y1="177" x2="168" y2="177" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.32 } } }} />

                        {/* N7: Filter by Crew */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.38, duration: 0.5 } } }}>
                            <rect x="171" y="155" width="130" height="44" rx="5" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.8" />
                            <text x="236" y="173" fill="#FBBF24" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">APP</text>
                            <text x="236" y="187" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Filter by Crew</text>
                        </motion.g>
                        <motion.line x1="301" y1="177" x2="321" y2="177" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.48 } } }} />

                        {/* N8: Spot Compliance Gap */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.52, duration: 0.5 } } }}>
                            <rect x="324" y="155" width="140" height="44" rx="5" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.8" />
                            <text x="394" y="173" fill="#7DD3FC" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SYSTEM</text>
                            <text x="394" y="187" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Compliance Gap Alert</text>
                        </motion.g>
                        <motion.line x1="464" y1="177" x2="484" y2="177" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.62 } } }} />

                        {/* N9: Schedule Retest */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.66, duration: 0.5 } } }}>
                            <rect x="487" y="155" width="130" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="552" y="173" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">MANAGER</text>
                            <text x="552" y="187" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Schedule Retest</text>
                        </motion.g>
                        <motion.line x1="617" y1="177" x2="637" y2="177" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.76 } } }} />

                        {/* N10: Lab Processes Sample */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.5 } } }}>
                            <rect x="640" y="155" width="130" height="44" rx="5" fill="#1F1F1F" stroke="#6B7280" strokeWidth="0.8" strokeDasharray="4 2" />
                            <text x="705" y="173" fill="#9CA3AF" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">LAB (OFFLINE)</text>
                            <text x="705" y="187" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Process Sample</text>
                        </motion.g>
                        <motion.line x1="770" y1="177" x2="790" y2="177" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.9 } } }} />

                        {/* N11: Auto-Update Status */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 1.95, duration: 0.5 } } }}>
                            <rect x="793" y="155" width="140" height="44" rx="5" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.8" />
                            <text x="863" y="173" fill="#7DD3FC" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SYSTEM</text>
                            <text x="863" y="187" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Auto-Update Status</text>
                        </motion.g>

                        {/* Loop arrow: Auto-Update → back to Vaccination Matrix */}
                        <motion.path
                            d="M863 199 C863 230 79 230 79 199"
                            stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="4 2" markerEnd="url(#fhArr)"
                            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 2.1, duration: 0.8 } } }}
                        />
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.5 } } }}>
                            <text x="470" y="240" fill="#F59E0B" fontSize="7" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontStyle="italic">continuous monitoring loop</text>
                        </motion.g>

                        {/* Connector down to Phase 3 */}
                        <motion.line x1="394" y1="199" x2="394" y2="270" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.6 } } }} />

                        {/* ===== PHASE 3: INVENTORY & REPORTING ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.65 } } }}>
                            <circle cx="16" cy="278" r="3" fill="#38BDF8" />
                            <text x="26" y="281" fill="#38BDF8" fontSize="8" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.5" fontWeight="500">PHASE 3 — INVENTORY & REPORTING</text>
                        </motion.g>

                        {/* N12: Inventory Dashboard */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 2.7, duration: 0.5 } } }}>
                            <rect x="10" y="298" width="140" height="44" rx="5" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.8" />
                            <text x="80" y="316" fill="#FBBF24" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">APP</text>
                            <text x="80" y="330" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Inventory Dashboard</text>
                        </motion.g>
                        <motion.line x1="150" y1="320" x2="170" y2="320" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.8 } } }} />

                        {/* N13: Burn Rate Alert */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 2.85, duration: 0.5 } } }}>
                            <rect x="173" y="298" width="130" height="44" rx="5" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.8" />
                            <text x="238" y="316" fill="#7DD3FC" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SYSTEM</text>
                            <text x="238" y="330" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Burn Rate Alert</text>
                        </motion.g>
                        <motion.line x1="303" y1="320" x2="323" y2="320" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.95 } } }} />

                        {/* N14: Order Kits */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 3.0, duration: 0.5 } } }}>
                            <rect x="326" y="298" width="120" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="386" y="316" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">MANAGER</text>
                            <text x="386" y="330" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Order Test Kits</text>
                        </motion.g>
                        <motion.line x1="446" y1="320" x2="466" y2="320" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3.1 } } }} />

                        {/* N15: Generate Report */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 3.15, duration: 0.5 } } }}>
                            <rect x="469" y="298" width="140" height="44" rx="5" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.8" />
                            <text x="539" y="316" fill="#7DD3FC" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SYSTEM</text>
                            <text x="539" y="330" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Daily Safety Report</text>
                        </motion.g>
                        <motion.line x1="609" y1="320" x2="629" y2="320" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3.25 } } }} />

                        {/* N16: Export Audit Trail */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 3.3, duration: 0.5 } } }}>
                            <rect x="632" y="298" width="140" height="44" rx="5" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.8" />
                            <text x="702" y="316" fill="#A78BFA" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">MANAGER</text>
                            <text x="702" y="330" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">Export Audit Trail</text>
                        </motion.g>
                        <motion.line x1="772" y1="320" x2="792" y2="320" stroke="#555" strokeWidth="0.8" markerEnd="url(#fhArr)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3.4 } } }} />

                        {/* N17: HIPAA Archive */}
                        <motion.g variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 3.45, duration: 0.5 } } }}>
                            <rect x="795" y="298" width="130" height="44" rx="5" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="4 2" />
                            <text x="860" y="316" fill="#7DD3FC" fontSize="7.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">SYSTEM</text>
                            <text x="860" y="330" fill="#E8E4DC" fontSize="9.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">HIPAA Archive</text>
                        </motion.g>

                        {/* ===== LEGEND ===== */}
                        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3.6 } } }}>
                            <rect x="10" y="380" width="10" height="10" rx="2" fill="#2D1F4E" stroke="#7C3AED" strokeWidth="0.5" />
                            <text x="26" y="389" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">Manager</text>
                            <rect x="80" y="380" width="10" height="10" rx="2" fill="#2D2010" stroke="#F59E0B" strokeWidth="0.5" />
                            <text x="96" y="389" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">App</text>
                            <rect x="130" y="380" width="10" height="10" rx="2" fill="#0C1D2E" stroke="#38BDF8" strokeWidth="0.5" />
                            <text x="146" y="389" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">System</text>
                            <rect x="195" y="380" width="10" height="10" rx="2" fill="#1F1F1F" stroke="#6B7280" strokeWidth="0.5" strokeDasharray="3 1" />
                            <text x="211" y="389" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">Offline</text>
                            <g transform="translate(262,380)">
                                <rect x="-1" y="-1" width="12" height="12" rx="1.5" fill="#3B1010" stroke="#EF4444" strokeWidth="0.5" transform="rotate(45 5 5)" />
                            </g>
                            <text x="280" y="389" fill="#8A8680" fontSize="7" fontFamily="Inter,system-ui,sans-serif">Decision</text>
                        </motion.g>
                    </svg>
                </motion.div>
            </section>

            {/* The Solution - Four Layers */}
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
                                Four Layers of Defense
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                I designed the platform as four interconnected modules — a <span className="text-[#141414] font-medium">Traffic Light Command Center</span> for instant triage, a <span className="text-[#141414] font-medium">Vaccination Matrix</span> for compliance tracking, a <span className="text-[#141414] font-medium">Production Hierarchy</span> for enterprise structure, and an <span className="text-[#141414] font-medium">Inventory Loop</span> for logistics.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Layer A: Traffic Light Command Center */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">Layer A / Cognitive Load Management</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-6">The "Traffic Light" Command Center</h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-6">
                                Executives don't have time to read medical reports. They need a triaged signal: <span className="text-[#141414] font-medium">Go / No-Go / Retest</span>. I designed the dashboard for scanning, not reading.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500 mt-1 shrink-0"></div>
                                    <p className="text-sm text-gray-600"><span className="font-semibold text-[#141414]">Red (Positive):</span> Critical Alert. Immediate Isolation.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 mt-1 shrink-0"></div>
                                    <p className="text-sm text-gray-600"><span className="font-semibold text-[#141414]">Yellow (Risk):</span> Inconclusive / Retest needed.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500 mt-1 shrink-0"></div>
                                    <p className="text-sm text-gray-600"><span className="font-semibold text-[#141414]">Green (Cleared):</span> Safe to work.</p>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <div className="rounded-lg overflow-hidden shadow-2xl border border-black/10">
                                <div className="bg-[#E8E4DC] px-4 py-2.5 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                    <span className="ml-4 text-[10px] text-gray-500 font-mono">flowhealth.com/dashboard</span>
                                </div>
                                <div className="aspect-video bg-[#E8E4DC] relative">
                                    <BrowserSlider alt="The command centre: every employee's clearance state as a single colour, searchable in real time" images={[
                                        "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/pp-results-filtered-64.png",
                                        "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/dash.png",
                                    ]} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Layer B: Vaccination Matrix */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="rounded-lg overflow-hidden shadow-2xl border border-black/10">
                                <div className="bg-[#E8E4DC] px-4 py-2.5 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                    <span className="ml-4 text-[10px] text-gray-500 font-mono">flowhealth.com/compliance</span>
                                </div>
                                <div className="aspect-video bg-[#E8E4DC] relative">
                                    <BrowserSlider alt="A test result opened up — the underlying lab data behind the traffic-light call" images={[
                                        "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/vaccination-list.png",
                                        "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/vaccination2.png",
                                    ]} />
                                </div>
                            </div>
                        </motion.div>
                        <div className="order-1 lg:order-2">
                            <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">Layer B / Complex Data Visualization</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-6">The "Split-View" Vaccination Matrix</h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-6">
                                Tracking compliance was the hardest UX challenge. We had to reconcile <span className="text-[#141414] font-medium">Past Reality</span> (Lab Results) with <span className="text-[#141414] font-medium">Future Requirements</span> (Protocols).
                            </p>
                            <p className="text-base text-gray-600 leading-relaxed">
                                I designed a specialized <span className="text-[#141414] font-medium">Dual-Pane Data Grid</span>: Left Side shows verified doses and dates (what happened), Right Side shows upcoming deadlines and booster windows (what needs to happen). Managers could spot "Compliance Gaps" weeks before they became a problem.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Layer C: Production Hierarchy */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">Layer C / Information Architecture</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-6">The Production Hierarchy</h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-6">
                                Enterprise structures are messy. A studio isn't a flat list. I designed a flexible hierarchy system enabling <span className="text-[#141414] font-medium">Micro-Quarantines</span> — isolating a specific Camera Crew without shutting down an entire production.
                            </p>
                            <div className="space-y-2 font-mono text-sm">
                                <p className="text-[#141414]">Organization <span className="text-gray-400">→</span></p>
                                <p className="text-[#141414] ml-6">Production (Movie Title) <span className="text-gray-400">→</span></p>
                                <p className="text-[#141414] ml-12">Crew (Stunt Team) <span className="text-gray-400">→</span></p>
                                <p className="text-[#141414] ml-[72px]">Employee</p>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <div className="rounded-lg overflow-hidden shadow-2xl border border-black/10">
                                <div className="bg-[#E8E4DC] px-4 py-2.5 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                    <span className="ml-4 text-[10px] text-gray-500 font-mono">flowhealth.com/org</span>
                                </div>
                                <div className="aspect-video bg-[#E8E4DC] relative">
                                    <BrowserSlider alt="Scheduling and compliance tracking across a production's cast and crew" images={[
                                        "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/practices-list-2.png",
                                        "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/practices-list2.png",
                                    ]} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Layer D: Inventory Loop */}
                <div className="px-8 lg:px-16 py-20 border-t border-[#C5C0B8]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="rounded-lg overflow-hidden shadow-2xl border border-black/10">
                                <div className="bg-[#E8E4DC] px-4 py-2.5 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                    <span className="ml-4 text-[10px] text-gray-500 font-mono">flowhealth.com/inventory</span>
                                </div>
                                <div className="aspect-video bg-[#E8E4DC] relative">
                                    <BrowserSlider alt="The reporting view an executive uses to sign off on a shooting day" images={[
                                        "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/bulk-orders-list.png",
                                    ]} />
                                </div>
                            </div>
                        </motion.div>
                        <div className="order-1 lg:order-2">
                            <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">Layer D / Service Design</p>
                            <h3 className="text-2xl lg:text-3xl font-normal font-heading text-[#141414] mb-6">The Inventory Loop</h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                Safety extends beyond software. I designed an internal <span className="text-[#141414] font-medium">E-commerce Module</span> for Home Test Kits with <span className="text-[#141414] font-medium">Smart Restocking</span> — a dashboard tracking the "Burn Rate" of kits at specific locations, predicting shortages before they happened.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mobile Experience — Horizontal Gallery */}
            <section className="bg-[#141414] py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 max-w-2xl px-8 lg:px-16"
                >
                    <p className="text-xs text-[#8A8680] tracking-widest uppercase mb-4">Mobile-First Companion</p>
                    <h2 className="text-3xl lg:text-4xl font-light font-heading text-white mb-6">
                        Fully Functional Mobile App
                    </h2>
                    <p className="text-base text-[#A09A92] leading-relaxed">
                        The desktop workflow was mirrored in a native mobile experience so field managers and on-set medics could view results and manage compliance from anywhere on the production lot.
                    </p>
                </motion.div>

                {/* Horizontal Scroll — 6 iPhones */}
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 lg:gap-8 px-8 lg:px-16 pb-4" style={{ minWidth: 'max-content' }}>
                        {[
                            { label: "Test Results", src: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/results-list.png" },
                            { label: "Practices", src: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/practices-list.png" },
                            { label: "Practices Detail", src: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/practices-2list.png" },
                            { label: "Patient Results", src: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/practices-patients-patient-details-results.png" },
                            { label: "Kit Orders", src: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/bulk-orders-list-2.png" },
                            { label: "Results Filters", src: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/fh/results-filters-result.png" },
                        ].map((phone, index) => (
                            <motion.div
                                key={phone.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                className="flex flex-col items-center shrink-0"
                            >
                                <div className="relative w-[220px]">
                                    <div className="rounded-[36px] overflow-hidden border-[6px] border-[#2A2A2A] shadow-2xl bg-[#2A2A2A]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-[18px] bg-[#2A2A2A] rounded-b-xl z-10" />
                                        <div className="aspect-[9/19] bg-[#111] rounded-[30px] overflow-hidden">
                                            <img
                                                src={phone.src}
                                                alt={phone.label}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-[#8A8680] tracking-wide mt-4">{phone.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
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
                    {challenges.map((card, index) => (
                        <motion.div
                            key={card.letter}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="bg-[#FAFAF8] px-14 py-16 rounded-sm"
                        >
                            <div className="mb-8">
                                <span className="text-xs font-medium text-gray-400">{card.letter}</span>
                            </div>

                            <h3 className="text-2xl font-normal text-[#141414] mb-2">{card.title}</h3>
                            <p className="text-sm text-gray-400 mb-10">{card.subtitle}</p>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-2">Conflict</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{card.conflict}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-2">Solution</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{card.solution}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#141414] mb-2">Result</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{card.result}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Results — the two stats that were hidden alongside this one were an
                unverifiable "$0 critical errors" and a "#1 asset" superlative. This is
                the number the CV leads with, so the case should carry it. */}
            <section className="bg-[#EAE6DE] px-8 lg:px-16 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-light font-heading text-[#141414]">Results</h2>
                    </motion.div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[56px] items-center py-12 border-t border-gray-200"
                        >
                            <p className="text-7xl lg:text-8xl font-heading font-extralight text-[#141414] tracking-[-0.03em] text-right">50K+</p>
                            <div>
                                <p className="text-sm font-semibold text-[#141414] mb-2">Records managed</p>
                                <p className="text-sm text-gray-500 leading-relaxed">Employee records across Hollywood studios and Fortune 500 companies, with real-time search and instant triage over them.</p>
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
                            This project proved that <span className="text-white">design is a business weapon</span>. In a market where competitors offered clunky legacy portals, the premium UX became the primary differentiator that closed deals with <span className="text-white">Disney, Netflix, and JPMorgan</span>. I designed not just an interface, but a <span className="text-white">Biosecurity Operating System</span> where a single pixel error could cost a client a million dollars.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Footer CTA */}
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
        </div>
    );
};

export default CaseFlowHealth;
