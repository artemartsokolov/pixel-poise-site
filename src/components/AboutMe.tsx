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
                        I transform complex business logic into intuitive, scalable digital ecosystems. I don't just design screens—I engineer solutions that reduce operational costs and drive user retention.
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
                            <h3 className="text-base font-semibold text-[#141414] mb-3">System Thinking</h3>
                            <p className="text-sm font-light text-gray-500 leading-relaxed">
                                I treat design as architecture, not decoration. Whether it's taming a 50-sheet financial model or building a Design System from scratch, I create structures that are easy to maintain and scale.
                            </p>
                        </motion.div>

                        {/* Business-First */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-base font-semibold text-[#141414] mb-3">Business-First</h3>
                            <p className="text-sm font-light text-gray-500 leading-relaxed">
                                My decisions are based on metrics, not just intuition. I bridge the gap between Stakeholder goals and User needs, ensuring every feature directly impacts the bottom line (ROI).
                            </p>
                        </motion.div>
                    </div>



                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
