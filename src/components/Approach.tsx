import { motion } from "framer-motion";

const competencies = [
    {
        category: "STRATEGY",
        skills: [
            ["Product Discovery", "System Architecture"],
            ["Data-Driven UX", "User Research"],
        ],
    },
    {
        category: "DESIGN",
        skills: [
            ["UI/Visual Design", "Design Systems"],
            ["Interaction Design", "Prototyping"],
        ],
    },
    {
        category: "ENGINEERING",
        skills: [
            ["React + TypeScript", "Backend Functions (Supabase)"],
            ["API Integrations & Connectors", "Canvas Rendering & Virtualisation"],
        ],
    },
    {
        category: "TOOLS",
        skills: [
            ["Figma", "Claude Code"],
            ["Cursor", "Claude Design"],
        ],
    },
];

const Approach = () => {
    return (
        <section id="approach" className="py-28 px-8 lg:px-16 bg-[#141414] border-t border-white/10">
            <div className="w-full">
                {/* Two Column Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px]"
                >
                    {/* Left: Section Title */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-light font-heading text-white">
                            Approach
                        </h2>
                    </div>

                    {/* Right: Philosophy + Competencies */}
                    <div className="space-y-16">
                        {/* Philosophy Block - Large text, no breaks */}
                        <div>
                            <p className="text-2xl lg:text-3xl font-light text-white leading-[1.4]">
                                <strong className="font-semibold">Nine years</strong> in <strong className="font-semibold">Complex B2B & Enterprise</strong>. I design the product and write the code that ships it — frontend, backend functions, and the connectors between systems that were never built to talk to each other. The value isn't doing two jobs; it's that the loop between a decision and its consequence collapses to <strong className="font-semibold">an afternoon</strong>.
                            </p>
                        </div>

                        {/* Competencies Block */}
                        <div>
                            <h3 className="text-base font-semibold text-white mb-6">Competencies</h3>
                            <div className="border-t border-white/20">
                                {competencies.map((comp) => (
                                    <div
                                        key={comp.category}
                                        className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 py-6 border-b border-white/10"
                                    >
                                        {/* Category Label */}
                                        <div>
                                            <span className="text-xs font-semibold text-white tracking-wider">
                                                {comp.category}
                                            </span>
                                        </div>

                                        {/* Skills Grid */}
                                        <div className="space-y-2">
                                            {comp.skills.map((row, rowIndex) => (
                                                <div key={rowIndex} className="flex items-center gap-4">
                                                    <span className="text-sm font-light text-gray-400 min-w-[160px]">
                                                        {row[0]}
                                                    </span>
                                                    <span className="text-gray-600">•</span>
                                                    <span className="text-sm font-light text-gray-400">
                                                        {row[1]}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Approach;
