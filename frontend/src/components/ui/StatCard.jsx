import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ label, value, icon, colorClass = "bg-primary" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass flex flex-col rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
  >
    <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${colorClass}`}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div className="mt-6">
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">{label}</p>
      <h3 className="title-display text-4xl text-primary">{value}</h3>
    </div>
  </motion.div>
);

export default StatCard;
