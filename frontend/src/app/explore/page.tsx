'use client';

import React, { useState } from 'react';
import { MapPin, Search, Filter, Info, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const mockPlots = [
  { id: '1', code: 'GV-101', title: 'East Facing Residential', area: '150 SqYd', price: '₹45 L', status: 'AVAILABLE', pos: [17.385, 78.4867] },
  { id: '2', code: 'GV-102', title: 'Corner Premium Plot', area: '200 SqYd', price: '₹65 L', status: 'AVAILABLE', pos: [17.386, 78.4877] },
  { id: '3', code: 'GV-105', title: 'Commercial Frontage', area: '300 SqYd', price: '₹1.2 Cr', status: 'BOOKED', pos: [17.384, 78.4857] },
  { id: '4', code: 'GV-108', title: 'North Facing Plot', area: '180 SqYd', price: '₹52 L', status: 'AVAILABLE', pos: [17.387, 78.4887] },
];

export default function ExplorePage() {
  const [selectedPlot, setSelectedPlot] = useState<any>(null);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Public Header */}
      <header className="h-16 border-b flex items-center justify-between px-6 shrink-0 bg-white z-20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
          <span className="text-xl font-black text-slate-900 tracking-tight">PlotFlow <span className="text-blue-600">Explore</span></span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition">Partner Login</Link>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold">Contact Sales</button>
        </div>
      </header>

      {/* Main View: Map + Sidebar */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Interactive Map Placeholder */}
        <div className="flex-1 relative bg-slate-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* Mock Grid for map feel */}
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="z-10 text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl max-w-md">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Interactive Project Map</h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Click on a plot to view dimensions, facing, and availability. 
              (Leaflet Map integration pending API keys)
            </p>
            <div className="flex flex-wrap justify-center gap-2">
               {mockPlots.map(plot => (
                 <button 
                  key={plot.id}
                  onClick={() => setSelectedPlot(plot)}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center text-[10px] font-bold transition-all ${
                    selectedPlot?.id === plot.id ? "bg-blue-600 border-blue-700 text-white scale-110 shadow-lg" : "bg-white border-slate-200 text-slate-400 hover:border-blue-400"
                  }`}
                 >
                   {plot.code}
                 </button>
               ))}
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            <div className="bg-white p-2 rounded-lg shadow-md border flex flex-col space-y-2">
               <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600">+</button>
               <div className="h-px bg-slate-100"></div>
               <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600">-</button>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border flex items-center space-x-4 text-xs font-bold">
            <div className="flex items-center space-x-1"><div className="w-3 h-3 bg-green-500 rounded-sm"></div><span>Available</span></div>
            <div className="flex items-center space-x-1"><div className="w-3 h-3 bg-yellow-500 rounded-sm"></div><span>Booked</span></div>
            <div className="flex items-center space-x-1"><div className="w-3 h-3 bg-slate-300 rounded-sm"></div><span>Sold</span></div>
          </div>
        </div>

        {/* Right: Info Sidebar */}
        <aside className="w-96 border-l bg-slate-50 flex flex-col shrink-0 overflow-y-auto">
          <div className="p-6 bg-white border-b sticky top-0 z-10">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search plot number..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2 custom-scrollbar">
              <FilterTag label="All Plots" active />
              <FilterTag label="Residential" />
              <FilterTag label="Commercial" />
              <FilterTag label="East Facing" />
            </div>
          </div>

          <div className="p-6 space-y-4">
            {selectedPlot ? (
              <div className="animate-in slide-in-from-right duration-300">
                <div className="bg-white rounded-2xl border border-blue-200 p-6 shadow-lg shadow-blue-50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-slate-900">{selectedPlot.code}</h3>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      selectedPlot.status === 'AVAILABLE' ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {selectedPlot.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-700 mb-6">{selectedPlot.title}</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <PlotDetail label="Plot Area" value={selectedPlot.area} />
                    <PlotDetail label="Pricing" value={selectedPlot.price} />
                    <PlotDetail label="Facing" value="East" />
                    <PlotDetail label="Road Width" value="40 Ft" />
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                      <MessageSquare size={18} />
                      <span>Enquire via WhatsApp</span>
                    </button>
                    <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-slate-800 transition">
                      <Phone size={18} />
                      <span>Request Callback</span>
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-xl flex items-start space-x-3 text-blue-700">
                  <Info size={20} className="shrink-0" />
                  <p className="text-xs font-medium leading-relaxed">
                    This plot is DTCP approved and ready for registration. Contact our agent for a personalized site visit.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <MapPin size={32} />
                </div>
                <p className="text-slate-500 font-bold">Select a plot on the map to view details</p>
                <p className="text-slate-400 text-xs mt-2">Browse Green Valley Phase I inventory</p>
              </div>
            )}

            <div className="pt-8">
              <h5 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Nearby Highlights</h5>
              <div className="space-y-3">
                 <NearbyItem label="Highway" dist="1.2 km" />
                 <NearbyItem label="Airport" dist="45 km" />
                 <NearbyItem label="School" dist="0.5 km" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FilterTag({ label, active }: { label: string; active?: boolean }) {
  return (
    <button className={cn(
      "whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold border transition",
      active ? "bg-blue-600 border-blue-700 text-white shadow-md shadow-blue-100" : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
    )}>
      {label}
    </button>
  );
}

function PlotDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
      <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter mb-1">{label}</p>
      <p className="text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}

function NearbyItem({ label, dist }: { label: string; dist: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white border rounded-xl hover:shadow-sm transition cursor-default">
      <span className="text-xs font-bold text-slate-700">{label}</span>
      <div className="flex items-center text-blue-600 font-bold text-xs">
        {dist}
        <ChevronRight size={14} className="ml-1" />
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
