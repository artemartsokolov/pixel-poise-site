import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section id="about-me" className="min-h-screen flex items-start relative z-10 bg-background pt-20 pb-32 px-6 lg:px-12">
            <div className="w-full max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Main Statement - No image, clean text layout */}
                    <h2 className="text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-black mb-16">
                        I help brands craft meaningful stories and compelling visuals that deeply resonate with their audience, foster strong connections, build lasting loyalty, and drive sustainable long-term growth.
                    </h2>

                    {/* Service description blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16 mb-12 ml-0 lg:ml-[420px] border-t border-gray-200 pt-12">
                        {/* From A to Z */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-lg font-bold mb-3">From A to Z</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                I manage your entire branding process, from concept to execution. Whether it's logo design, messaging, or strategy, I ensure everything aligns for a cohesive and impactful brand.
                            </p>
                        </motion.div>

                        {/* Solo or Team */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-lg font-bold mb-3">Solo or Team</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                I work both independently and with a trusted team, adapting to your project's needs to deliver the best results, whether it's a solo vision or a collaborative effort.
                            </p>
                        </motion.div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        className="flex justify-start mt-8 ml-0 lg:ml-[420px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a
                            href="#contact"
                            className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                        >
                            More about me
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
