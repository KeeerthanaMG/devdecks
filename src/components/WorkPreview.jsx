import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

const WorkPreview = () => {
    const projects = [
        {
            title: "Startup Product Landing Page",
            desc: "Conversion-focused marketing website.",
            fullDesc: "A high-conversion landing page designed for a SaaS startup. Features include A/B tested call-to-actions, SEO optimization, and lightning-fast load times built on modern web architecture. Scaled their initial user base by 300% in the first month.",
            tech: ["React", "TailwindCSS", "Framer Motion"],
            color: "bg-electric-orange",
            link: "#"
        },
        {
            title: "Business Website Platform",
            desc: "Modern responsive website for a growing business.",
            fullDesc: "An end-to-end CMS driven website for a mid-sized agency. Features a dynamic blog, portfolio section, and integrated CRM forms to capture leads. Completely redesigned from their legacy WordPress site to a faster Next.js stack.",
            tech: ["Next.js", "CMS", "TailwindCSS"],
            color: "bg-off-white",
            link: "#"
        },
        {
            title: "Student Research Dashboard",
            desc: "Interactive web dashboard for academic project analysis.",
            fullDesc: "A complex data visualization dashboard built for university researchers. Incorporates real-time data parsing, complex Chart.js integrations, and a secure Django backend with PostgreSQL. Designed to handle large datasets effortlessly.",
            tech: ["Python", "Django", "Chart.js"],
            color: "bg-acid-yellow",
            link: "#"
        }
    ];

    return (
        <section id="work" className="py-24 bg-white border-b-4 border-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-5xl md:text-6xl font-display font-black uppercase text-black inline-block border-b-8 border-electric-orange pb-2"
                    >
                        Selected Work
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, idx) => (
                        <Dialog key={idx}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
                                whileHover={{ y: -8, boxShadow: "8px 8px 0px 0px rgba(17,17,17,1)" }}
                                className={`card-neo flex flex-col h-full bg-white transition-all`}
                            >
                                {/* Image Placeholder */}
                                <div className={`h-48 border-b-4 border-black ${project.color} flex items-center justify-center relative overflow-hidden group`}>
                                    <div className="absolute inset-0 pattern-dots opacity-20 transition-opacity group-hover:opacity-40"></div>
                                    <h3 className="text-3xl font-display font-black text-black z-10 px-6 text-center leading-tight">
                                        Preview
                                    </h3>
                                    <motion.div
                                        className="absolute inset-0 bg-black/10 z-0"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    />
                                </div>

                                <div className="p-8 flex-grow flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-display font-bold uppercase mb-4 leading-snug">
                                            {project.title}
                                        </h4>
                                        <p className="font-sans text-lg mb-6 text-gray-800">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 border-2 border-black font-sans font-bold text-sm uppercase bg-gray-100">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <DialogTrigger asChild>
                                            <button className="w-full btn-neo-secondary py-3 text-base flex justify-between items-center bg-black text-white hover:text-black hover:bg-white hover:shadow-neo-sm">
                                                View Project <ExternalLink size={18} />
                                            </button>
                                        </DialogTrigger>
                                    </div>
                                </div>
                            </motion.div>

                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{project.title}</DialogTitle>
                                    <div className={`mt-4 h-32 border-4 border-black ${project.color} flex items-center justify-center relative overflow-hidden mb-4 shadow-neo-sm`}>
                                        <div className="absolute inset-0 pattern-dots opacity-20"></div>
                                    </div>
                                    <DialogDescription className="mt-4 pt-2 border-t-4 border-black">
                                        {project.fullDesc}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex flex-wrap gap-2 my-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 border-2 border-black font-sans font-bold text-sm uppercase bg-gray-100">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t-4 border-black">
                                    <a href={project.link} className="btn-neo-primary w-full text-center">
                                        Visit Live Site <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkPreview;
