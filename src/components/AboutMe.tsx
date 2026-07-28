import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section id="about-me" className="min-h-screen flex items-start relative z-10 bg-background pt-20 pb-8 px-8 lg:px-16">
            <div className="w-full max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Main Statement */}
                    <h2 className="text-3xl lg:text-4xl font-light leading-[1.3] tracking-tight text-[#141414] mb-16 max-w-4xl font-heading">
                        I design complex B2B products and then build them. Not prototypes — the production frontend, the backend functions, the connectors underneath. One person on both sides of the handoff, because there isn't one.
                    </h2>

                    {/* Service description blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16 mb-12 ml-0 lg:ml-[280px] border-t border-gray-200 pt-12">
                        {/* System Thinking */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-base font-semibold text-[#141414] mb-3">No Handoff</h3>
                            <p className="text-sm font-light text-gray-500 leading-relaxed">
                                The design and the code are the same job. A decision gets tested against real data in a browser the same afternoon it's made, instead of surviving intact through a spec, a ticket, and someone else's reading of both.
                            </p>
                        </motion.div>

                        {/* Systems, Not Screens */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-base font-semibold text-[#141414] mb-3">Systems, Not Screens</h3>
                            <p className="text-sm font-light text-gray-500 leading-relaxed">
                                When the interface needs something that doesn't exist yet, I build it: a canvas-based data grid with its contract under test, a node editor that lets a non-programmer program AI agents, connectors between six services that disagree about what a lead is.
                            </p>
                        </motion.div>
                    </div>



                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
