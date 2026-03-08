import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            num: "01",
            title: "Understand the Idea",
            desc: "We break down the project requirements and goals."
        },
        {
            num: "02",
            title: "Design the Architecture",
            desc: "We define the best technology and system design."
        },
        {
            num: "03",
            title: "Build the Product",
            desc: "Development happens in structured milestones."
        },
        {
            num: "04",
            title: "Launch and Improve",
            desc: "Deployment and continuous improvements."
        }
    ];

    return (
        <section id="process" className="py-24 bg-acid-yellow border-b-4 border-black relative overflow-hidden">
            {/* Decorative dashed lines */}
            <div className="absolute top-1/2 left-0 w-full border-t-4 border-dashed border-black opacity-20 hidden lg:block -z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-5xl md:text-6xl font-display font-black uppercase text-black inline-block bg-white px-8 py-4 border-4 border-black shadow-neo"
                    >
                        How We Build
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            whileHover={{ y: -10, rotate: -2 }}
                            className="card-neo flex flex-col items-start p-8 relative overflow-hidden bg-white"
                        >
                            <div className="absolute -right-4 -top-4 text-8xl font-display font-black text-black opacity-10">
                                {step.num}
                            </div>

                            <div className="w-16 h-16 bg-electric-orange border-4 border-black flex items-center justify-center rounded-full mb-8 shadow-neo-sm relative z-10">
                                <span className="font-display font-black text-2xl">{step.num}</span>
                            </div>

                            <h3 className="text-2xl font-display font-black uppercase mb-4 relative z-10 leading-snug">
                                {step.title}
                            </h3>

                            <p className="font-sans text-lg font-medium relative z-10">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
