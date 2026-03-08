import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Credibility = () => {
    const points = [
        {
            title: 'Reliable engineering',
            desc: 'focused on practical outcomes.',
        },
        {
            title: 'Clear technical thinking',
            desc: 'and structured development.',
        },
        {
            title: 'Fast execution',
            desc: 'without sacrificing quality.',
        },
        {
            title: 'Solutions designed',
            desc: 'for startups, businesses, and innovators.',
        },
    ];

    return (
        <section className="py-24 bg-electric-orange border-b-4 border-black relative z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16">
                    <div className="lg:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-display font-black uppercase text-black"
                        >
                            Why <br /> DevDecks
                        </motion.h2>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {points.map((pt, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -5, x: -5, boxShadow: "8px 8px 0px 0px rgba(17,17,17,1)" }}
                                className="card-neo p-8 flex flex-col justify-start items-start gap-4 transition-all duration-300 shadow-neo"
                            >
                                <CheckCircle size={36} className="text-black" />
                                <div>
                                    <h3 className="text-xl font-bold font-display uppercase tracking-wider mb-2">{pt.title}</h3>
                                    <p className="font-sans text-lg">{pt.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Credibility;
