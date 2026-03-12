import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('sending');

        fetch('https://formsubmit.co/ajax/devdecks.team@gmail.com', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: new FormData(e.target)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === "true" || data.success === true) {
                    setStatus('success');
                    e.target.reset();
                } else {
                    setStatus('error');
                    console.error(data);
                }
                setIsSubmitting(false);
            })
            .catch(error => {
                setStatus('error');
                setIsSubmitting(false);
                console.error(error);
            });
    };

    return (
        <section id="contact" className="py-24 bg-electric-orange border-b-4 border-black relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-display font-black uppercase text-black mb-4 inline-block bg-white px-8 py-4 border-4 border-black shadow-neo"
                    >
                        Start Your Project
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-sans font-bold text-black bg-acid-yellow inline-block px-4 py-2 border-4 border-black shadow-neo-sm transform rotate-1 mt-4"
                    >
                        Tell us what you're looking to build.
                    </motion.p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onSubmit={submitForm}
                    className="card-neo bg-off-white p-8 md:p-12 space-y-8 relative overflow-hidden"
                >
                    {/* Status Overlays */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [0, 1.2, 1] }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                >
                                    <CheckCircle2 size={80} className="text-green-500 mb-6" />
                                </motion.div>
                                <h3 className="text-4xl font-display font-black uppercase mb-4">Request Sent!</h3>
                                <p className="text-xl font-sans font-medium">We'll be in touch with you shortly to discuss your project.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Services & Project Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="block text-xl font-display font-bold uppercase tracking-wider">Service Needed</label>
                            <motion.select whileFocus={{ scale: 1.02 }} name="service" required className="input-neo appearance-none rounded-none cursor-pointer border-4 border-black font-sans font-medium hover:bg-gray-50 focus:bg-acid-yellow shadow-neo-sm">
                                <option value="" disabled selected>Select a Service</option>
                                <option>Business Website</option>
                                <option>Startup Landing Page</option>
                                <option>Web Application</option>
                                <option>MVP Development</option>
                                <option>Website Redesign</option>
                                <option>Social Media Branding</option>
                                <option>LinkedIn Optimization</option>
                                <option>Academic Project</option>
                                <option>Consultation</option>
                            </motion.select>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-xl font-display font-bold uppercase tracking-wider">Project Type</label>
                            <motion.select whileFocus={{ scale: 1.02 }} name="project_type" required className="input-neo appearance-none rounded-none cursor-pointer border-4 border-black font-sans font-medium hover:bg-gray-50 focus:bg-acid-yellow shadow-neo-sm">
                                <option value="" disabled selected>Select Type</option>
                                <option>New Project</option>
                                <option>Improve Existing Product</option>
                                <option>Prototype / MVP</option>
                                <option>Consultation</option>
                            </motion.select>
                        </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="block text-xl font-display font-bold uppercase tracking-wider">Budget Range</label>
                            <motion.select whileFocus={{ scale: 1.02 }} name="budget" required className="input-neo appearance-none rounded-none cursor-pointer border-4 border-black font-sans font-medium hover:bg-gray-50 focus:bg-acid-yellow shadow-neo-sm">
                                <option value="" disabled selected>Select Budget</option>
                                <option>Under ₹10K</option>
                                <option>₹10K – ₹25K</option>
                                <option>₹25K – ₹50K</option>
                                <option>₹50K+</option>
                            </motion.select>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-xl font-display font-bold uppercase tracking-wider">Timeline</label>
                            <motion.select whileFocus={{ scale: 1.02 }} name="timeline" required className="input-neo appearance-none rounded-none cursor-pointer border-4 border-black font-sans font-medium hover:bg-gray-50 focus:bg-acid-yellow shadow-neo-sm">
                                <option value="" disabled selected>Select Timeline</option>
                                <option>ASAP</option>
                                <option>1-2 Weeks</option>
                                <option>1 Month</option>
                                <option>Flexible</option>
                            </motion.select>
                        </div>
                    </div>

                    {/* Scheduling */}
                    <div className="bg-white p-6 border-4 border-black shadow-neo-sm space-y-6">
                        <h3 className="text-2xl font-display font-bold uppercase border-b-4 border-black pb-2 inline-block">Call Scheduling</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                            <div className="space-y-4">
                                <label className="block text-lg font-display font-bold uppercase tracking-wide">Select Date</label>
                                <motion.input whileFocus={{ scale: 1.02 }} type="date" name="call_date" required className="input-neo rounded-none cursor-pointer border-4 border-black focus:bg-acid-yellow font-sans font-medium" />
                            </div>

                            <div className="space-y-4">
                                <label className="block text-lg font-display font-bold uppercase tracking-wide">Available Times</label>
                                <motion.select whileFocus={{ scale: 1.02 }} name="call_time" required className="input-neo appearance-none rounded-none cursor-pointer border-4 border-black focus:bg-acid-yellow font-sans font-medium">
                                    <option value="" disabled selected>Select Time</option>
                                    <optgroup label="Weekdays">
                                        <option>7:00 PM</option>
                                        <option>8:00 PM</option>
                                        <option>9:00 PM</option>
                                        <option>10:00 PM</option>
                                    </optgroup>
                                    <optgroup label="Weekends (9 AM - 10 PM)">
                                        <option>9:00 AM</option>
                                        <option>12:00 PM</option>
                                        <option>3:00 PM</option>
                                        <option>6:00 PM</option>
                                        <option>9:00 PM</option>
                                    </optgroup>
                                </motion.select>
                            </div>
                        </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold uppercase border-b-4 border-black pb-2 inline-block">Your Details</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <motion.input whileFocus={{ scale: 1.02, x: 5 }} type="text" name="user_name" placeholder="Full Name" required className="input-neo border-4 border-black rounded-none focus:bg-acid-yellow font-sans font-medium" />
                            <motion.input whileFocus={{ scale: 1.02, x: 5 }} type="email" name="user_email" placeholder="Email Address" required className="input-neo border-4 border-black rounded-none focus:bg-acid-yellow font-sans font-medium" />
                            <motion.input whileFocus={{ scale: 1.02, x: 5 }} type="tel" name="user_phone" placeholder="Phone Number (Optional)" className="input-neo border-4 border-black rounded-none focus:bg-acid-yellow font-sans font-medium" />
                        </div>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0, x: [-10, 10, -5, 5, 0] }}
                                exit={{ opacity: 0 }}
                                className="p-4 flex items-center gap-3 border-4 border-black bg-red-400 text-black font-bold font-sans uppercase"
                            >
                                <AlertCircle size={24} /> Failed to send request. Please try again.
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit */}
                    <div className="pt-4">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98, y: 0 }}
                            type="submit"
                            disabled={isSubmitting}
                            className={`btn-neo-primary w-full bg-black text-white hover:bg-electric-orange hover:text-black py-5 text-2xl uppercase tracking-widest active:translate-y-neo-sm active:translate-x-neo-sm active:shadow-none hover:shadow-neo hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {status === 'sending' ? 'Sending Request...' : 'Start My Project'}
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
