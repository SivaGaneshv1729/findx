import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getPlots } from '../api/plotsApi';
import FilterBar from '../components/features/FilterBar';
import ListingCard from '../components/features/ListingCard';
import Spinner from '../components/ui/Spinner';

const MapPage = () => {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const position = [17.0425, 81.8228];

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

  return (
    <div className="flex flex-col flex-1 h-screen overflow-hidden bg-white">
      <div className="mt-20"></div> {/* Spacer for fixed navbar */}
      
      {/* Top Filter Bar */}
      <FilterBar />

      {/* Split View Content */}
      <div className="split-view !mt-0 h-[calc(100vh-80px-70px)] lg:h-[calc(100vh-80px-70px)]">
        
        {/* Left: Map Container */}
        <div className="map-container lg:h-full">
          <MapContainer center={position} zoom={13} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {plots.map((plot) => (
              <Marker key={plot.id} position={[plot.lat, plot.lng]}>
                <Popup className="custom-popup">
                  <div className="min-w-[200px] p-2">
                    <h3 className="title-display text-xl text-primary mb-1">{plot.price}</h3>
                    <p className="text-sm font-medium text-muted">{plot.title}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Right: Listing Container */}
        <div className="list-container p-6 lg:h-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
              {plots.length} Results
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-muted">Sort:</span>
              <select className="appearance-none bg-transparent font-bold text-primary text-[13px] outline-none cursor-pointer">
                <option>Newest</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="flex h-40 items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 pb-20">
              {plots.map(plot => (
                <ListingCard key={plot.id} plot={plot} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MapPage;
