import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { to: '/', label: 'Discover' },
    { to: '/map', label: 'Map View' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="mt-20 border-t border-line bg-primary text-white">
      <div className="container py-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div className="max-w-2xl">
            <Link to="/" className="brand-mark text-3xl text-white inline-block mb-8 transition-opacity hover:opacity-80">
              findmyplot<span className="text-accent">.</span>
            </Link>
            <p className="text-lg leading-relaxed text-white/70 mb-10">
              Real-estate discovery for buyers, dealers, and investors who want verified plots, better local insight, and faster decision-making.
            </p>
            <div className="flex gap-6">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-accent">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-accent">
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </a>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="title-display text-xl mb-6">Quick Links</h3>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm font-bold text-white/60 transition-colors hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="title-display text-xl mb-6">Contact Us</h3>
              <p className="text-sm font-bold text-white/60 mb-4">+91 98765 43210</p>
              <p className="text-sm font-bold text-white/60">hello@findmyplot.com</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-white/40">
            &copy; 2026 findmyplot. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/40 transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/40 transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
