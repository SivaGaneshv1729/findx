import React from 'react';
import { motion } from 'framer-motion';

const contactCards = [
  { icon: 'call', label: 'Advisory Desk', value: '+91 98765 43210' },
  { icon: 'mail', label: 'Email', value: 'hello@findmyplot.com' },
  { icon: 'location_on', label: 'Coverage', value: 'Rajahmundry and growth corridors' },
];

const Contact = () => {
  return (
    <motion.div
      className="section-shell flex-1 pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container relative z-10 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start xl:gap-24">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="eyebrow mb-6">Talk To Our Team</div>
          <h1 className="title-display text-5xl leading-tight text-primary sm:text-6xl">
            We help you find the <span className="text-accent">perfect land opportunity.</span>
          </h1>
          <p className="mt-8 text-lg text-muted font-medium leading-relaxed max-w-2xl">
            Whether you are buying your first plot, evaluating investment inventory, or listing a community, we provide the local insight you need.
          </p>

          <div className="mt-12 grid gap-6 w-full max-w-lg">
            {contactCards.map((card) => (
              <div key={card.label} className="rounded-3xl border border-line bg-white p-6 shadow-soft flex items-center gap-6 transition-transform hover:scale-[1.02]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/20">
                  <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">
                    {card.label}
                  </span>
                  <span className="text-xl font-bold text-primary">{card.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto rounded-3xl border border-line bg-white p-8 shadow-strong sm:p-12">
          <div className="mb-10 text-center lg:text-left">
            <div className="eyebrow mb-2">Property Inquiry</div>
            <h2 className="title-display text-3xl text-primary">Tell us what you are looking for.</h2>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Full Name</label>
                <input type="text" className="field-shell" placeholder="Ravi Teja" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Phone</label>
                <input type="text" className="field-shell" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Requirement</label>
              <select className="field-shell bg-transparent">
                <option>Buy a residential plot</option>
                <option>Compare investment plots</option>
                <option>List my property</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Message</label>
              <textarea
                rows="5"
                className="field-shell resize-none"
                placeholder="Tell us your budget, preferred area, and how soon you want to visit."
              ></textarea>
            </div>

            <button className="btn-primary w-full py-4 text-base mt-2">
              Request a Callback
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
