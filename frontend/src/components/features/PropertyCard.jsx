import React from 'react';
import { motion } from 'framer-motion';

const PropertyCard = ({ price, title, location, isNew, area, facing, status = 'Verified' }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:shadow-md"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="title-display text-2xl text-primary">{price}</h3>
        {isNew && (
          <span className="w-fit rounded-lg bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
            New Listing
          </span>
        )}
      </div>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-accent transition-all group-hover:bg-accent group-hover:text-white">
        <span className="material-symbols-outlined text-[24px]">real_estate_agent</span>
      </div>
    </div>

    <div className="mt-6">
      <div className="mb-3 flex items-center">
        <div className="flex items-center gap-1.5 rounded-full bg-vibrant-teal/10 px-3 py-1 text-[10px] font-bold text-vibrant-teal">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          <span>{status}</span>
        </div>
      </div>
      <p className="title-display text-xl leading-snug text-primary transition-colors group-hover:text-accent">
        {title}
      </p>
      <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-muted">
        <span className="material-symbols-outlined text-[18px] text-accent/60">location_on</span>
        <span>{location}</span>
      </div>
    </div>


  </motion.div>
);

export default PropertyCard;
