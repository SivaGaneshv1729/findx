import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div 
            className="w-full pt-24 pb-16 px-gutter min-h-screen bg-white flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-4xl w-full bg-white rounded-[32px] shadow-2xl shadow-primary/10 border border-primary/5 overflow-hidden">
                <div className="p-10">
                    <h2 className="text-3xl font-black text-primary mb-8 tracking-tight">Contact Us</h2>
                    <p className="text-primary/70">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
