import React from 'react';

const PropertyCard = ({ price, title, location, img, isNew, area, facing }) => (
  <div className="group bg-white rounded-[24px] border border-primary/5 hover:border-primary/10 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,31,68,0.04)] overflow-hidden flex flex-col cursor-pointer">
    <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
      <img 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        src={img} 
        alt={title} 
      />
      
      {isNew && (
        <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-widest">
          New Listing
        </div>
      )}
      
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-xl scale-90 group-hover:scale-100">
        <span className="material-symbols-outlined text-[18px]">favorite</span>
      </div>
    </div>
    
    <div className="p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-primary font-black tracking-tight">{price}</h3>
        <div className="flex items-center gap-1 text-primary/40 text-[9px] font-bold tracking-widest uppercase">
          <span className="material-symbols-outlined text-[12px]">verified</span>
          Verified
        </div>
      </div>
      
      <div>
        <p className="font-black text-primary text-base leading-tight line-clamp-1 group-hover:text-primary/70 transition-colors">{title}</p>
        <p className="text-primary/40 text-[12px] flex items-center gap-1 mt-1.5 font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          {location}
        </p>
      </div>
      
      <div className="flex gap-4 pt-4 border-t border-primary/5 mt-1">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-[18px] text-primary/20">square_foot</span>
          <span className="text-[10px] font-black uppercase tracking-widest">{area} SqYd</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-[18px] text-primary/20">explore</span>
          <span className="text-[10px] font-black uppercase tracking-widest">{facing}</span>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyCard;
