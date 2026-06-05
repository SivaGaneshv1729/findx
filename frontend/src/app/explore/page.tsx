'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  CalendarDays,
  ChevronDown,
  Search,
  Send,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const PropertyMap = dynamic(() => import('@/components/PropertyMap'), { 
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[#f8f8f8] flex items-center justify-center">
      <div className="text-[1.4rem] text-gray-400 animate-pulse uppercase tracking-[0.2em]">Loading Map...</div>
    </div>
  )
});

type Listing = {
  id: string;
  price: string;
  category: string;
  status: string;
  beds: string;
  baths: string;
  area: string;
  address: string;
  image: string;
  lat: number;
  lng: number;
};

const listings: Listing[] = [
  {
    id: '1',
    price: '$349,900',
    category: 'House',
    status: 'For Sale',
    beds: '3 bds',
    baths: '2 ba',
    area: '1050 sqft',
    address: '211 State Route 28N',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    lat: 43.1,
    lng: -73.9,
  },
  {
    id: '2',
    price: '$2,188,600',
    category: 'House',
    status: 'For Sale',
    beds: '4 bds',
    baths: '4.5 ba',
    area: '3018 sqft',
    address: '182 NY-9P',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    lat: 43.0,
    lng: -73.8,
  },
  {
    id: '3',
    price: '$479,000',
    category: 'House',
    status: 'For Sale',
    beds: '4 bds',
    baths: '2.5 ba',
    area: '2180 sqft',
    address: '3174 E LYDIUS Street',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    lat: 42.9,
    lng: -74.0,
  },
  {
    id: '4',
    price: '$7,500',
    category: 'House',
    status: 'For Sale',
    beds: '32 bds',
    baths: '1 ba',
    area: '1000000 sqft',
    address: '1 test Alley',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    lat: 43.2,
    lng: -73.7,
  },
  {
    id: '5',
    price: '$684,000',
    category: 'House',
    status: 'For Sale',
    beds: '5 bds',
    baths: '3 ba',
    area: '2640 sqft',
    address: '71 Hickory Lane',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    lat: 43.15,
    lng: -73.85,
  },
  {
    id: '6',
    price: '$215,000',
    category: 'Apartment',
    status: 'For Sale',
    beds: '1 bds',
    baths: '1 ba',
    area: '720 sqft',
    address: '42 Maple Court',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    lat: 42.85,
    lng: -73.95,
  },
];

const filters = ['Neighborhoods', 'For Sale', 'Price', 'Residential', 'Beds & Baths'];

export default function ExplorePage() {
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'map' | 'list'>('map');

  const filteredListings = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return listings;
    return listings.filter((listing) =>
      `${listing.address} ${listing.category}`.toLowerCase().includes(normalized)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-white text-[#151717]">
      <Navbar />

      <div className="mx-auto max-w-[192rem] px-[2.2rem] pt-[10rem] md:px-[2.2rem]">
        <div className="grid gap-[2.2rem] xl:grid-cols-[48.5%_51.5%]">
          <section>
            <div className="mb-[1.8rem] flex items-center justify-between border-b border-[#d9d9d9] pb-[1.4rem]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter property address"
                className="w-full bg-transparent text-[1.6rem] outline-none placeholder:text-[#151717]"
              />
              <Search size={20} className="shrink-0 text-[#151717]" />
            </div>

            <div className="relative h-[75rem] overflow-hidden bg-[#f1f1f1] border border-gray-100">
              <PropertyMap listings={filteredListings} />
            </div>
          </section>

          <section className="pb-[2rem]">
            <div className="mb-[2rem] flex flex-wrap items-center justify-between gap-[1.2rem]">
              <div className="flex flex-wrap gap-[0.8rem]">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className="inline-flex h-[4.4rem] items-center gap-[1rem] border border-[#dddddd] px-[1.6rem] text-[1.4rem] font-medium text-[#151717]"
                  >
                    {filter}
                    <ChevronDown size={15} />
                  </button>
                ))}
              </div>

              <div className="flex overflow-hidden border border-[#dddddd]">
                <button
                  onClick={() => setView('map')}
                  className={cn(
                    'h-[4.4rem] px-[2rem] text-[1.4rem] font-medium',
                    view === 'map' ? 'bg-[#151717] text-white' : 'bg-white text-[#151717]'
                  )}
                >
                  Map
                </button>
                <button
                  onClick={() => setView('list')}
                  className={cn(
                    'h-[4.4rem] px-[2rem] text-[1.4rem] font-medium',
                    view === 'list' ? 'bg-[#151717] text-white' : 'bg-white text-[#151717]'
                  )}
                >
                  List
                </button>
              </div>
            </div>

            <div className="mb-[1.6rem] flex items-center justify-between">
              <p className="text-[1.6rem] font-medium">{15140 + filteredListings.length - listings.length} Results</p>
              <div className="flex items-center gap-[0.8rem] text-[1.4rem]">
                <span>Sort:</span>
                <button className="inline-flex items-center gap-[0.6rem] font-medium text-[#0a84ff]">
                  Newest
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>

            <div className="grid gap-x-[1.8rem] gap-y-[2.6rem] md:grid-cols-2">
              {filteredListings.map((listing) => (
                <article key={listing.id} className="group">
                  <Link href={`/properties/${listing.id}`}>
                    <div className="aspect-[1.52/1] overflow-hidden bg-[#f3f3f3]">
                      <img src={listing.image} alt={listing.address} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </Link>

                  <div className="pt-[1rem]">
                    <p className="text-[2rem] font-semibold tracking-[-0.03em] text-[#151717]">{listing.price}</p>
                    <p className="mt-[0.8rem] text-[1.4rem] text-[#151717]">
                      {listing.category}
                      <span className="mx-[0.7rem] text-[#999]">•</span>
                      {listing.status}
                      <span className="mx-[0.7rem] text-[#999]">•</span>
                      {listing.beds}
                      <span className="mx-[0.7rem] text-[#999]">•</span>
                      {listing.baths}
                      <span className="mx-[0.7rem] text-[#999]">•</span>
                      {listing.area}
                    </p>
                    <p className="mt-[0.7rem] text-[1.4rem] text-[#151717]">{listing.address}</p>

                    <div className="mt-[1.4rem] flex items-center gap-[1rem]">
                      <CircleIcon>
                        <CalendarDays size={17} strokeWidth={1.8} />
                      </CircleIcon>
                      <CircleIcon>
                        <Send size={17} strokeWidth={1.8} />
                      </CircleIcon>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full border border-[#bdbdbd] text-[#151717]">
      {children}
    </button>
  );
}
