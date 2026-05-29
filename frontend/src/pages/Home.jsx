import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Spinner from '../components/Spinner';

const API_BASE_URL = 'http://localhost:8080/api';

const FigmaHero = () => {
    // This component can be further broken down if needed
    return (
        <section className="w-full h-[85vh] min-h-[600px] overflow-hidden relative flex items-center justify-center">
        {/* Content */}
        <div className="max-w-container-max mx-auto px-gutter relative z-20 w-full text-center flex flex-col items-center gap-6 animate-fade-in-up">
            <h1 className="text-[42px] lg:text-[72px] leading-[1] tracking-tighter text-primary font-black max-w-4xl">
            Invest in Land. <br />
            <span className="text-primary/30">Secure Your Future.</span>
            </h1>
            <p className="text-primary/70 max-w-xl text-base lg:text-lg leading-relaxed font-bold">
            Access expertly curated gated communities and premium verified plots. We bridge the gap between land potential and high-value investment.
            </p>
        </div>
        </section>
    );
};

const PlotListings = ({ plots, loading }) => (
    <section id="plots" className="bg-white border-t border-primary/5">
        <div className="max-w-container-max mx-auto px-gutter py-16 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
            <h2 className="text-[32px] text-primary font-black tracking-tighter leading-tight">Dynamic Listings</h2>
            <p className="text-primary/40 text-[9px] font-black uppercase tracking-[0.2em] mt-2">Latest verified plots from our dealers.</p>
        </div>
        
        {loading ? (
            <Spinner />
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {plots.map((plot, index) => (
                <motion.div
                    key={plot.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <PropertyCard 
                    price={plot.price} 
                    title={plot.title} 
                    location="Diwancheruvu, Rajahmundry" 
                    img={plot.isDroneVerified ? "/images/3d_plot1.png" : "/images/3d_plot2.png"} 
                    isNew={true}
                    area={plot.areaSqYds}
                    facing={plot.facing}
                    />
                </motion.div>
                ))}
            </div>
        )}
        </div>
    </section>
);


const Home = () => {
    const [plots, setPlots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/plots`)
        .then(res => res.json())
        .then(data => {
            setPlots(data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Failed to fetch plots:", err);
            setLoading(false);
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <FigmaHero />
            {/* Other components like FigmaStats can be added here */}
            <PlotListings plots={plots} loading={loading} />
        </motion.div>
    );
};

export default Home;
