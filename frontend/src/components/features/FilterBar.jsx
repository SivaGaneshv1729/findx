import React from 'react';

const FilterBar = () => {
  return (
    <div className="flex flex-col gap-3 p-4 border-b border-line bg-white sticky top-0 z-20">
      {/* Mobile Toggle / Top Row */}
      <div className="flex items-center justify-between lg:hidden">
        <button className="filter-button">
          <span>Filters</span>
          <span className="material-symbols-outlined text-[18px]">tune</span>
        </button>
        <div className="flex gap-2">
          <button className="filter-button !px-4">Map</button>
          <button className="filter-button !px-4 bg-primary text-white border-primary">List</button>
        </div>
      </div>

      {/* Main Filter Row */}
      <div className="hidden lg:flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-[300px]">
          <input 
            type="text" 
            placeholder="Enter location or area" 
            className="w-full bg-white border border-line rounded-full px-5 py-2.5 text-[13px] font-medium text-primary outline-none transition-colors hover:border-accent focus:ring-2 focus:ring-accent/20"
          />
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-muted text-[20px]">search</span>
        </div>
        
        <select className="filter-dropdown">
          <option value="">Status: For Sale</option>
          <option value="rent">Status: For Rent</option>
        </select>

        <select className="filter-dropdown">
          <option value="">Price: Any</option>
          <option value="<10L">Under ₹10L</option>
          <option value="10L-50L">₹10L - ₹50L</option>
          <option value=">50L">Above ₹50L</option>
        </select>

        <select className="filter-dropdown">
          <option value="">Size: Any</option>
          <option value="<100">Under 100 SqYds</option>
          <option value="100-300">100 - 300 SqYds</option>
          <option value=">300">Above 300 SqYds</option>
        </select>

        <select className="filter-dropdown">
          <option value="">Facing: Any</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
