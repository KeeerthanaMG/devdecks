import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const categories = [
        {
            title: "Web & App Development",
            desc: "Custom development solutions for businesses and startups that need reliable digital products.",
            color: "bg-acid-yellow",
            items: [
                { name: "Business Website Development", desc: "Professional websites designed to build trust and generate leads." },
                { name: "Startup Landing Pages", desc: "Conversion-focused landing pages for new product launches." },
                { name: "Web Application Development", desc: "Custom platforms and dashboards built with scalable architecture." },
                { name: "MVP Development", desc: "Rapid product prototypes for startups validating new ideas." },
                { name: "Website Redesign", desc: "Modern redesigns for outdated or poorly performing websites." },
                { name: "Maintenance and Feature Improvements", desc: "Continuous improvement and feature expansion." },
            ]
        },
        {
            title: "Social Media Branding",
            desc: "Helping founders and businesses establish a strong digital identity.",
            color: "bg-white",
            items: [
                { name: "LinkedIn Profile Optimization", desc: "Professional positioning for founders and professionals." },
                { name: "Instagram Business Setup", desc: "Structured business profiles ready for growth." },
                { name: "Content Strategy Planning", desc: "Structured content frameworks aligned with brand voice." },
                { name: "Personal Brand Websites", desc: "Dedicated websites for founders and creators." },
                { name: "Digital Presence Consulting", desc: "Guidance on building a consistent online presence." },
            ]
        },
        {
            title: "Academic Project Support",
            desc: "Technical support for students building meaningful software systems.",
            color: "bg-electric-orange",
            items: [
                { name: "Final Year Software Projects", desc: "End-to-end development support for academic projects." },
                { name: "Project Prototypes", desc: "Functional demonstrations for technical concepts." },
                { name: "Research Paper Assistance", desc: "Structuring and formatting research publications." },
                { name: "Project Documentation", desc: "Complete technical documentation." },
                { name: "Presentation Preparation", desc: "Clear and structured technical presentations." },
            ]
        }
    ];

    return (
        <section id="services" className="py-24 bg-off-white border-b-4 border-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-5xl md:text-6xl font-display font-black uppercase inline-block border-b-8 border-black pb-2"
                    >
                        What We Build
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            className={`border-4 border-black ${category.color} flex flex-col shadow-neo transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none duration-300`}
                        >
                            <div className="border-b-4 border-black p-8 bg-black text-white">
                                <h3 className="text-3xl font-display font-black uppercase mb-4 leading-tight">{category.title}</h3>
                                <p className="font-sans text-lg font-medium opacity-90">{category.desc}</p>
                            </div>
                            <div className="p-8 flex-grow">
                                <ul className="space-y-6">
                                    {category.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="group">
                                            <h4 className="text-xl font-bold font-display uppercase tracking-wide group-hover:text-electric-orange transition-colors duration-200">
                                                {item.name}
                                            </h4>
                                            <p className="font-sans text-base text-gray-800 mt-1">{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
