import React from 'react';

const About = () => {
  return (
    <div className="flex-1 pt-32 pb-20 bg-surface">
      <div className="container flex flex-col items-center text-center max-w-4xl">
        <h1 className="title-display text-5xl sm:text-6xl mb-6 text-primary leading-[1.1]">Redefining Land Discovery</h1>
        <p className="text-muted mb-16 text-xl leading-relaxed">At FIND, we believe buying plots should be as simple and transparent as buying a home. We combine beautiful digital mapping with rigorous on-ground verification to bring you the best inventory.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
          <div className="p-8 rounded-[2rem] bg-surface-muted border border-line">
            <span className="material-symbols-outlined text-[40px] text-primary mb-6 block">verified</span>
            <h3 className="title-display text-2xl font-bold text-primary mb-3">Verified Docs</h3>
            <p className="text-muted text-sm leading-relaxed">Every plot on our platform goes through a strict 20-point legal and physical check.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-surface-muted border border-line">
            <span className="material-symbols-outlined text-[40px] text-primary mb-6 block">map</span>
            <h3 className="title-display text-2xl font-bold text-primary mb-3">Drone Views</h3>
            <p className="text-muted text-sm leading-relaxed">See exactly what you're buying with our advanced satellite and drone mapping.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-surface-muted border border-line">
            <span className="material-symbols-outlined text-[40px] text-primary mb-6 block">handshake</span>
            <h3 className="title-display text-2xl font-bold text-primary mb-3">Direct Deals</h3>
            <p className="text-muted text-sm leading-relaxed">Connect instantly with verified owners and certified top-tier agents.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
