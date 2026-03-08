import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// Magnetic Button component
const MagneticButton = ({ children, className, href, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.a>
    );
};

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Scroll animation for header
    const { scrollY } = useScroll();
    const headerBorderWidth = useTransform(scrollY, [0, 100], [4, 2]);
    const headerBg = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.9)"]);

    const links = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Work', href: '#work' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.header
            style={{ borderBottomWidth: headerBorderWidth, backgroundColor: headerBg }}
            className="sticky top-0 z-50 w-full border-black backdrop-blur-sm"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-shrink-0">
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="#"
                            className="font-display text-2xl font-black uppercase tracking-tight inline-block"
                        >
                            DevDecks
                        </motion.a>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ y: -4, color: "#FF5A1F" }}
                                className="font-sans text-lg font-bold transition-colors inline-block"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <MagneticButton
                            href="#contact"
                            className="btn-neo-secondary bg-acid-yellow py-2 px-6 shadow-neo-sm transform-none hover:shadow-neo transition-all"
                        >
                            Start Project
                        </MagneticButton>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleMenu}
                            className="p-2 border-2 border-black bg-acid-yellow shadow-neo-sm"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden border-t-4 border-black bg-off-white overflow-hidden origin-top"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                                hidden: { transition: { staggerDirection: -1 } }
                            }}
                            className="flex flex-col space-y-4 p-6"
                        >
                            {links.map((link) => (
                                <motion.a
                                    variants={{
                                        hidden: { x: -20, opacity: 0 },
                                        visible: { x: 0, opacity: 1 }
                                    }}
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-display text-2xl font-bold block"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-neo-primary w-full text-center mt-4"
                            >
                                Start Project
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navigation;
