'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { useEffect } from 'react';

// Custom dot icon
const dotIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #151717; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
  popupAnchor: [0, -6],
});

export default function PropertyMap({ listings }: { listings: any[] }) {
  // Center map on the average of listings or a default
  const center: [number, number] = listings.length > 0 
    ? [listings[0].lat, listings[0].lng]
    : [43.0, -73.9];

  return (
    <div className="h-full w-full relative">
      <MapContainer 
        center={center} 
        zoom={11} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // Cleaner grayscale tiles
        />
        {listings.map((listing) => (
          <Marker 
            key={listing.id} 
            position={[listing.lat, listing.lng]}
            icon={dotIcon}
          >
            <Popup className="property-popup" minWidth={220}>
              <Link href={`/properties/${listing.id}`} className="block group no-underline">
                <div className="overflow-hidden rounded-sm bg-white">
                  <div className="relative h-32 w-full">
                    <img 
                      src={listing.image} 
                      alt={listing.address} 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#151717]">
                      {listing.category}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xl font-bold text-[#151717] m-0">{listing.price}</p>
                    <p className="text-sm text-gray-500 truncate mt-1 mb-2">{listing.address}</p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                      <span className="text-[10px] font-medium text-gray-400 uppercase">{listing.beds} • {listing.baths} • {listing.area}</span>
                      <span className="text-[10px] font-bold text-[#151717] uppercase tracking-tighter group-hover:translate-x-1 transition-transform">
                        Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Custom styles for Leaflet elements */}
      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          padding: 0;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        .leaflet-popup-content {
          margin: 0;
          width: 220px !important;
        }
        .leaflet-popup-tip-container {
          display: none;
        }
        .property-popup .leaflet-popup-close-button {
          color: white !important;
          background: rgba(0,0,0,0.2) !important;
          border-radius: 50% !important;
          margin: 8px !important;
          z-index: 10;
        }
      `}</style>
    </div>
  );
}
