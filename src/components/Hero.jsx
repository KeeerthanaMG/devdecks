import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax transforms for background shapes
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [12, 45]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [-6, -24]);

    // Text reveal variants (Block Building Effect)
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04, // Faster stagger for individual letters
                delayChildren: 0.1
            }
        }
    };

    // Each letter drops in like a heavy block
    const blockVariants = {
        hidden: { opacity: 0, y: -100, rotateZ: 15, scale: 0.5 },
        visible: {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 200,
                mass: 1
            }
        }
    };

    // Helper function to split text into animated characters
    const AnimatedText = ({ text, className = "" }) => (
        <span className={`inline-block ${className}`}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    variants={blockVariants}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );

    return (
        <section ref={ref} className="relative w-full overflow-hidden bg-white border-b-4 border-black py-20 lg:py-32 xl:py-40">
            {/* Neobrutalist Background Shapes with Parallax */}
            <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-10 right-10 w-64 h-64 bg-acid-yellow border-4 border-black -z-10 shadow-neo hidden md:block" />
            <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute bottom-10 left-10 w-48 h-48 bg-electric-orange border-4 border-black -z-10 shadow-neo hidden md:block rounded-full" />
            <motion.div style={{ y: y3 }} className="absolute top-1/2 left-3/4 w-32 h-32 bg-off-white border-4 border-black rotate-45 -z-10 shadow-neo opacity-70" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight uppercase mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2 perspective-1000"
                    >
                        <AnimatedText text="Build Digital" />
                        <div className="w-full h-0"></div>
                        <AnimatedText text="Products That" />
                        <motion.div
                            variants={blockVariants}
                            className="bg-electric-orange text-black px-4 inline-block mt-2 transform -rotate-2 border-4 border-black shadow-neo-sm overflow-hidden"
                        >
                            <AnimatedText text="Actually Work." />
                        </motion.div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="text-xl md:text-2xl font-sans font-medium text-black max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        DevDecks designs and builds reliable websites, scalable web platforms, and practical software solutions for businesses, startups, and innovators.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, translateY: -4 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="btn-neo-primary w-full sm:w-auto text-xl"
                        >
                            Start a Project <ArrowRight className="ml-3" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, translateY: -4 }}
                            whileTap={{ scale: 0.95 }}
                            href="#services"
                            className="btn-neo-secondary w-full sm:w-auto text-xl bg-acid-yellow"
                        >
                            Explore Services
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
