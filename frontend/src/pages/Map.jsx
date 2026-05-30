import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

import { getPlots } from '../api/plotsApi';

const MapPage = () => {
  const [plots, setPlots] = useState([]);
  const position = [17.0425, 81.8228];

  useEffect(() => {
    getPlots()
      .then((data) => setPlots(data))
      .catch((err) => console.error('Failed to fetch plots:', err));
  }, []);

  return (
    <motion.div
      className="relative flex-1 w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 z-0">
        <MapContainer center={position} zoom={13} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {plots.map((plot) => (
            <Marker key={plot.id} position={[plot.lat, plot.lng]}>
              <Popup className="custom-popup">
                <div className="min-w-[240px] p-2">
                  <h3 className="title-display text-xl text-primary mb-1">{plot.title}</h3>
                  <p className="text-2xl font-bold text-accent mb-4">{plot.price}</p>
                  <div className="flex gap-4 border-t border-line pt-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted mb-0.5">Area</span>
                      <span className="text-xs font-bold text-primary">{plot.areaSqYds} SqYd</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted mb-0.5">Facing</span>
                      <span className="text-xs font-bold text-primary">{plot.facing}</span>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center p-6 pt-28 sm:p-10 sm:pt-32 lg:justify-start">
        <div className="pointer-events-auto w-full max-w-sm rounded-3xl border border-line bg-white/95 p-8 text-primary shadow-strong backdrop-blur-md">
          <div className="flex flex-col gap-1">
            <span className="eyebrow">Live Location View</span>
            <h2 className="title-display text-3xl leading-tight mb-4">Scout neighborhoods <span className="text-accent">digitally.</span></h2>
          </div>
          <p className="text-sm font-medium text-muted leading-relaxed mb-8">
            Use the map to compare nearby listings, inspect corridor density, and understand where verified inventory is clustering.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col rounded-2xl border border-line bg-white p-4 shadow-soft">
              <span className="title-display text-3xl text-accent mb-1">{plots.length}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                Active Markers
              </span>
            </div>
            <div className="flex flex-col rounded-2xl border border-line bg-white p-4 shadow-soft">
              <span className="title-display text-3xl text-accent mb-1">13</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                Zoom Level
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MapPage;
