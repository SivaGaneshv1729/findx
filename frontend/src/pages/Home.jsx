import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ListingCard from '../components/features/ListingCard';
import Spinner from '../components/ui/Spinner';
import { Link } from 'react-router-dom';
import { getPlots } from '../api/plotsApi';
import { MapContainer, TileLayer, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const marketStats = [
  { value: '500+', label: 'Verified plots' },
  { value: '42', label: 'Communities' },
  { value: '98%', label: 'Clear Docs' },
  { value: '24h', label: 'Callback' },
];

const advisoryPoints = [
  'Curated land inventory with location context',
  'Verification-first workflow for confident buyers',
  'Built for end buyers, dealers, and investors',
];

const Home = () => {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlots()
      .then((data) => {
        setPlots(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch plots:', err);
        setLoading(false);
      });
  }, []);

  const featuredPlots = plots.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section-shell flex-1"
    >
      {/* Hero Section */}
      <section className="container relative z-10 lg:pb-32" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center xl:gap-20">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="eyebrow mb-6">Real Estate Discovery Platform</div>
            <h1 className="title-display py-2 text-5xl leading-[1.15] text-primary sm:text-6xl lg:text-7xl xl:text-8xl">
              Invest in land with <span className="font-display italic font-medium text-accent">absolute confidence.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Findmyplot helps you compare verified plots, scan neighborhoods via drone views, and move from curiosity to confident ownership with zero stress.
            </p>

            <div className="mt-10 flex flex-col gap-4 w-full sm:flex-row sm:justify-center lg:justify-start">
              <a href="#featured-listings" className="btn-primary py-4 px-10">
                Explore Listings
              </a>
              <Link to="/map" className="btn-secondary py-4 px-10">
                Open Map View
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 lg:justify-start">
              {advisoryPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-vibrant-teal font-bold text-[20px]">check_circle</span>
                  <span className="text-sm font-semibold text-primary">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
              className="absolute -right-20 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full overflow-hidden opacity-40 pointer-events-none"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
            >
              <MapContainer center={[17.0425, 81.8228]} zoom={13} zoomControl={false} scrollWheelZoom={false} dragging={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                {plots.map((plot, i) => (
                  <CircleMarker 
                    key={plot.id || i} 
                    center={[plot.lat, plot.lng]} 
                    radius={10 + (i % 3) * 4} 
                    color={i % 2 === 0 ? "#9A7E6F" : "#1a1a1a"} 
                    fillColor={i % 2 === 0 ? "#9A7E6F" : "#1a1a1a"} 
                    fillOpacity={0.6} 
                  />
                ))}
              </MapContainer>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 rounded-3xl bg-accent/5 blur-2xl"></div>
              <div className="relative rounded-3xl glass p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col gap-1">
                  <span className="eyebrow text-[10px]">Market Snapshot</span>
                  <h2 className="title-display text-2xl text-primary">Growth Corridor</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {marketStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col rounded-2xl glass p-4 transition-transform hover:-translate-y-1 hover:shadow-md">
                    <span className="title-display text-2xl text-accent">{stat.value}</span>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-primary p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Trending Area</span>
                  <span className="rounded-full bg-vibrant-orange px-2.5 py-1 text-[9px] font-black uppercase tracking-wider">Hot</span>
                </div>
                <p className="title-display text-xl mb-2">Rajahmundry Bypass</p>
                <p className="text-xs leading-relaxed opacity-80">
                  Residential layouts and gated communities are seeing 15% YoY growth in this corridor.
                </p>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container py-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8"
        >
          {marketStats.map((stat) => (
            <motion.div 
              key={stat.label} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col items-center justify-center rounded-2xl glass p-6 text-center lg:items-start lg:text-left transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <span className="title-display text-3xl text-primary mb-1">{stat.value}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Listings */}
      <section id="featured-listings" className="container py-24">
        <div className="mb-16 flex flex-col gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">Handpicked Selections</div>
            <h2 className="title-display text-4xl text-primary sm:text-5xl">
              Plots with high investment potential.
            </h2>
            <p className="mt-6 text-muted text-lg">
              Every listing is manually verified by our team to ensure document clarity and site accessibility.
            </p>
          </div>
          <button className="btn-secondary hidden lg:inline-flex px-8">View All Properties</button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredPlots.map((plot, index) => (
              <motion.div
                key={plot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ListingCard plot={plot} />
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-16 flex justify-center lg:hidden">
          <button className="btn-secondary w-full max-w-sm py-4">View All Properties</button>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
