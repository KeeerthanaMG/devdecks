import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t-8 border-electric-orange">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h2 className="text-4xl font-display font-black uppercase tracking-tight mb-4 text-white">
                            DevDecks
                        </h2>
                        <p className="font-sans text-xl max-w-sm text-gray-300">
                            Building practical digital solutions for businesses, founders, and students.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:items-end justify-center space-y-4">
                        <h3 className="text-xl font-display font-bold uppercase mb-2 border-b-2 border-acid-yellow pb-1 inline-block text-acid-yellow">
                            Links
                        </h3>
                        <a href="#services" className="font-sans text-lg font-bold hover:text-electric-orange hover:translate-x-1 transition-all inline-block">Services</a>
                        <a href="#process" className="font-sans text-lg font-bold hover:text-electric-orange hover:translate-x-1 transition-all inline-block">Process</a>
                        <a href="#contact" className="font-sans text-lg font-bold hover:text-electric-orange hover:translate-x-1 transition-all inline-block">Contact</a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t-4 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 font-sans font-medium">
                    <p>&copy; {new Date().getFullYear()} DevDecks. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex gap-4">
                        <a href="#" className="hover:text-acid-yellow transition-colors">Privacy</a>
                        <a href="#" className="hover:text-acid-yellow transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
