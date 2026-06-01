import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ListingCard = ({ plot }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Dummy images if none provided
  const images = plot.images && plot.images.length > 0 
    ? plot.images 
    : [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=600&auto=format&fit=crop'
      ];

  return (
    <div className="group cursor-pointer flex flex-col gap-3 rounded-2xl p-4 transition-all hover:bg-white hover:shadow-soft">
      {/* Image Gallery */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-muted">
        <img 
          src={images[currentImageIndex]} 
          alt={plot.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Floating Actions */}
        <div className="absolute right-3 top-3 flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary backdrop-blur-sm transition-transform hover:scale-110 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">favorite</span>
          </button>
        </div>
        
        {/* Status Badge */}
        {plot.status && (
          <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm shadow-sm">
            {plot.status}
          </div>
        )}

        {/* Custom Dots for Carousel */}
        {images.length > 1 && (
          <div className="absolute bottom-3 flex w-full justify-center gap-1.5 px-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full bg-white transition-all ${i === currentImageIndex ? 'w-4' : 'w-1.5 opacity-60 hover:opacity-100'}`}
                onMouseEnter={() => setCurrentImageIndex(i)}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="flex flex-col px-1">
        <h3 className="title-display text-2xl font-bold text-primary mb-1">
          {plot.price}
        </h3>
        
        <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-1">
          <span>Plot</span>
          <span className="h-1 w-1 rounded-full bg-line"></span>
          <span>For Sale</span>
          <span className="h-1 w-1 rounded-full bg-line"></span>
          <span>{plot.areaSqYds} <span className="text-xs font-normal text-muted">sqft</span></span>
          <span className="h-1 w-1 rounded-full bg-line"></span>
          <span>{plot.facing} <span className="text-xs font-normal text-muted">facing</span></span>
        </div>
        
        <p className="text-sm font-medium text-muted truncate">
          {plot.location || 'Diwancheruvu, Rajahmundry'}
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
