import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white border-b-4 border-black py-20 lg:py-32 xl:py-40">
            {/* Neobrutalist Background Shapes */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-acid-yellow border-4 border-black rotate-12 -z-10 shadow-neo hidden md:block" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-electric-orange border-4 border-black -rotate-6 -z-10 shadow-neo hidden md:block rounded-full" />
            <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-off-white border-4 border-black rotate-45 -z-10 shadow-neo opacity-70" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight uppercase mb-8"
                    >
                        Build Digital <br /> Products That <span className="bg-electric-orange text-black px-4 inline-block mt-2 transform -rotate-2 border-4 border-black shadow-neo-sm">Actually Work.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl font-sans font-medium text-black max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        DevDecks designs and builds reliable websites, scalable web platforms, and practical software solutions for businesses, startups, and innovators.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a href="#contact" className="btn-neo-primary w-full sm:w-auto text-xl">
                            Start a Project <ArrowRight className="ml-3" />
                        </a>
                        <a href="#services" className="btn-neo-secondary w-full sm:w-auto text-xl bg-acid-yellow">
                            Explore Services
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
