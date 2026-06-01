import React from 'react';

const Join = () => {
  return (
    <div className="flex-1 pt-32 pb-20 bg-surface">
      <div className="container flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <h1 className="title-display text-5xl sm:text-6xl mb-6 text-primary leading-[1.1]">Grow your real estate business with FIND.</h1>
          <p className="text-muted mb-8 text-lg leading-relaxed">Join a network of elite agents and dealers. Get access to verified leads, exclusive plot inventory, and premium marketing tools designed to close deals faster.</p>
          <ul className="flex flex-col gap-4 mb-10">
            {['Access to 1000+ verified plots', 'Instant lead notifications', 'Premium digital storefront', 'Dedicated support team'].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-medium text-primary">{item}</span>
              </li>
            ))}
          </ul>
          <button className="btn-primary rounded-full px-8 py-4">Apply to Join</button>
        </div>
        <div className="flex-1 w-full aspect-square rounded-[2rem] overflow-hidden bg-surface-muted shadow-md">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop" alt="Join us" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
export default Join;
