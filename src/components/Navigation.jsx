import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#" className="font-display text-2xl font-black uppercase tracking-tight hover:text-electric-orange transition-colors">
                            DevDecks
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-sans text-lg font-bold hover:text-electric-orange hover:-translate-y-1 transition-all inline-block"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="btn-neo-secondary bg-acid-yellow py-2 px-6 shadow-neo-sm transform-none hover:-translate-y-1 hover:shadow-neo transition-all">
                            Start Project
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="p-2 border-2 border-black bg-acid-yellow shadow-neo-sm active:translate-x-1 active:translate-y-1 active:shadow-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
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
                        className="md:hidden border-t-4 border-black bg-off-white overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-display text-2xl font-bold block"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-neo-primary w-full text-center mt-4"
                            >
                                Start Project
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navigation;
