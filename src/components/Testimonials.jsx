import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Founder, TechNova",
        text: "DevDecks completely transformed our online presence. The new platform is blazing fast and our conversion rates have doubled within just a month. Truly top-tier engineering!",
        color: "bg-acid-yellow",
        textColor: "text-black"
    },
    {
        name: "Sarah Williams",
        role: "CEO, InnovateCo",
        text: "Their attention to detail and flawless execution is unmatched. We needed a complex web application, and they delivered exactly what we envisioned, on time and on budget.",
        color: "bg-electric-orange",
        textColor: "text-black"
    },
    {
        name: "David Chen",
        role: "Director, Bloom Marketing",
        text: "Working with DevDecks was an absolute breeze. They brought our brand to life with stunning animations and a rock-solid codebase. Highly recommended for any serious business.",
        color: "bg-black",
        textColor: "text-white"
    },
    {
        name: "Emily Carter",
        role: "Product Manager, StartupX",
        text: "We wanted a neobrutalist aesthetic that felt premium, and DevDecks nailed it perfectly. The UI/UX is incredibly smooth, and the user feedback has been overwhelmingly positive.",
        color: "bg-white",
        textColor: "text-black"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            rotate: direction > 0 ? 10 : -10,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            rotate: 0,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            rotate: direction < 0 ? 10 : -10,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section id="testimonials" className="py-24 bg-white border-b-4 border-black overflow-hidden relative">
            <div className="absolute inset-0 pattern-dots opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-display font-black uppercase text-black inline-block bg-electric-orange px-8 py-4 border-4 border-black shadow-neo transform -rotate-2"
                    >
                        Client Testimonials
                    </motion.h2>
                </div>

                <div className="relative h-[450px] md:h-[350px] w-full max-w-4xl mx-auto flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                rotate: { duration: 0.4 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className={`absolute w-full p-8 md:p-12 border-4 border-black shadow-neo ${testimonials[currentIndex].color} ${testimonials[currentIndex].textColor} flex flex-col justify-center cursor-grab active:cursor-grabbing`}
                        >
                            <Quote className={`w-12 h-12 mb-6 ${testimonials[currentIndex].textColor === 'text-black' ? 'text-black' : 'text-electric-orange'} opacity-50`} />

                            <p className="font-display text-2xl md:text-3xl font-bold leading-tight mb-8">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div className="flex items-center gap-4 border-t-4 border-current pt-6 mt-auto">
                                <div className="w-12 h-12 rounded-full border-2 border-current bg-gray-200 flex items-center justify-center overflow-hidden">
                                    <span className="font-display font-black text-xl text-black">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-sans font-black text-xl uppercase tracking-wide">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="font-sans font-medium text-sm md:text-base opacity-80 uppercase tracking-widest">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center items-center gap-6 mt-12">
                    <button
                        onClick={() => paginate(-1)}
                        className="p-4 border-4 border-black bg-acid-yellow hover:bg-electric-orange hover:-translate-y-1 hover:shadow-neo transition-all active:translate-y-0 active:shadow-none z-10"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div className="flex gap-3">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`w-4 h-4 rounded-full border-2 border-black transition-all ${idx === currentIndex ? 'bg-electric-orange w-8' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => paginate(1)}
                        className="p-4 border-4 border-black bg-acid-yellow hover:bg-electric-orange hover:-translate-y-1 hover:shadow-neo transition-all active:translate-y-0 active:shadow-none z-10"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
