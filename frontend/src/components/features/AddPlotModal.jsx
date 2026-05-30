import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createPlot } from '../../api/plotsApi';

const AddPlotModal = ({ user, onClose, refreshPlots }) => {
  const [newPlot, setNewPlot] = useState({ title: '', price: '', areaSqYds: '', facing: 'East' });

  const handleAddPlot = async (e) => {
    e.preventDefault();
    try {
      const plotData = {
        ...newPlot,
        lat: 17.0425 + (Math.random() - 0.5) * 0.01,
        lng: 81.8228 + (Math.random() - 0.5) * 0.01,
      };
      await createPlot(plotData, user.token);
      refreshPlots();
      onClose();
    } catch (err) {
      console.error('Failed to add plot:', err);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/40 p-5 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-2xl rounded-3xl border border-line bg-white p-8 shadow-strong sm:p-10">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="eyebrow">New Inventory</span>
            <h2 className="title-display text-3xl text-primary">Add a plot listing</h2>
          </div>
          <button onClick={onClose} className="rounded-xl border border-line p-2.5 text-muted hover:bg-surface-muted transition-colors">
            <span className="material-symbols-outlined block">close</span>
          </button>
        </div>

        <form onSubmit={handleAddPlot} className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Plot Title</label>
            <input
              type="text"
              value={newPlot.title}
              onChange={(e) => setNewPlot({ ...newPlot, title: e.target.value })}
              className="field-shell"
              placeholder="Emerald Greens Phase III"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Price</label>
            <input
              type="text"
              value={newPlot.price}
              onChange={(e) => setNewPlot({ ...newPlot, price: e.target.value })}
              className="field-shell"
              placeholder="Rs 45,00,000"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Area (SqYd)</label>
            <input
              type="number"
              value={newPlot.areaSqYds}
              onChange={(e) => setNewPlot({ ...newPlot, areaSqYds: e.target.value })}
              className="field-shell"
              placeholder="200"
              required
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Facing</label>
            <select
              value={newPlot.facing}
              onChange={(e) => setNewPlot({ ...newPlot, facing: e.target.value })}
              className="field-shell bg-transparent"
            >
              <option>East</option>
              <option>West</option>
              <option>North</option>
              <option>South</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-4">
            <button className="btn-primary w-full py-4 text-base">
              Publish Listing
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddPlotModal;
