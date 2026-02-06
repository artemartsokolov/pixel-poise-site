import { motion } from "framer-motion";

const competencies = [
    {
        category: "STRATEGY",
        skills: [
            ["Product Discovery", "Data-Driven UX"],
            ["User Research", "System Architecture"],
        ],
    },
    {
        category: "EXECUTION",
        skills: [
            ["UI/Visual Design", "Rapid Prototyping"],
            ["Design Systems", "Interaction Design"],
        ],
    },
    {
        category: "TECH & TOOLS",
        skills: [
            ["Figma (Advanced)", "Frontend Literacy (React/Tailwind)"],
            ["Storybook", "AI-Assisted Prototyping"],
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
                                I don't just hand off Figma files — <strong className="font-semibold">I build systems.</strong> With <strong className="font-semibold">10+ years</strong> in the industry, I've moved past "pixel pushing." My focus is strictly on <strong className="font-semibold">Complex B2B & Enterprise</strong>. I bridge the gap between heavy <strong className="font-semibold">Backend logic</strong> and <strong className="font-semibold">User Interface</strong>, building products that are predictable, scalable, and profitable.
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
