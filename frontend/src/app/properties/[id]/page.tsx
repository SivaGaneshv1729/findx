'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  ArrowLeft, 
  MapPin, 
  Maximize2, 
  BedDouble, 
  Bath, 
  Compass, 
  ShieldCheck, 
  Share2, 
  Heart,
  Calendar,
  Phone,
  MessageSquare
} from 'lucide-react';

// Mock data for the demonstration
const listings = [
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
    description: 'Beautiful modern home located in a quiet neighborhood. Features open concept living, updated kitchen with stainless steel appliances, and a large backyard perfect for entertaining.',
    amenities: ['Central Air', 'Hardwood Floors', 'Garage', 'Backyard', 'Updated Kitchen'],
    agent: { name: 'Sarah Johnson', phone: '+1 (555) 123-4567', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' }
  },
  // ... other listings would go here
];

export default function PropertyDetailPage() {
  const { id } = useParams();
  
  // Find listing by ID or use a fallback for demo
  const listing = listings.find(l => l.id === id) || {
    id: id as string,
    price: '$545,000',
    category: 'Modern Villa',
    status: 'Available',
    beds: '4 bds',
    baths: '3 ba',
    area: '2,450 sqft',
    address: '42 Skyline View, Financial District',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Experience luxury living in this stunning modern villa. Boasting panoramic views, state-of-the-art amenities, and meticulous design, this property offers a unique blend of comfort and sophistication. The expansive living spaces are filled with natural light, highlighting the premium finishes and high-end materials used throughout.',
    amenities: ['Panoramic Views', 'Smart Home Tech', 'Private Pool', 'Gym', 'Home Theater', 'Wine Cellar'],
    agent: { name: 'Michael Chen', phone: '+1 (555) 987-6543', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#151717]">
      <Navbar />
      
      <main className="pt-[10rem] pb-20 px-[2.5rem] md:px-[10rem]">
        <div className="mx-auto max-w-[140rem]">
          {/* Back button and actions */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/explore" className="inline-flex items-center gap-2 text-[1.4rem] font-medium text-gray-500 hover:text-[#151717] transition-colors">
              <ArrowLeft size={18} />
              Back to Search
            </Link>
            <div className="flex gap-4">
              <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition"><Share2 size={18} /></button>
              <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition"><Heart size={18} /></button>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Column: Media & Content */}
            <div className="space-y-10">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg">
                <img src={listing.image} alt={listing.address} className="h-full w-full object-cover" />
                <div className="absolute top-6 left-6 bg-[#151717] text-white px-4 py-1 text-[1.2rem] font-bold uppercase tracking-wider">
                  {listing.status}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-[4.4rem] font-bold tracking-tight leading-none mb-4">{listing.price}</h1>
                  <p className="text-[2rem] text-gray-500 flex items-center gap-2">
                    <MapPin size={20} className="text-[#151717]" />
                    {listing.address}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-gray-100">
                  <DetailItem icon={<BedDouble size={20} />} label="Bedrooms" value={listing.beds} />
                  <DetailItem icon={<Bath size={20} />} label="Bathrooms" value={listing.baths} />
                  <DetailItem icon={<Maximize2 size={20} />} label="Area" value={listing.area} />
                  <DetailItem icon={<Compass size={20} />} label="Facing" value="North-East" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-[2.4rem] font-bold">About this property</h3>
                  <p className="text-[1.8rem] leading-[1.6] text-gray-600">
                    {listing.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[2.4rem] font-bold">Key Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {listing.amenities.map(amenity => (
                      <div key={amenity} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                        <ShieldCheck size={18} className="text-green-500" />
                        <span className="text-[1.6rem] font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Action */}
            <div className="space-y-8">
              <div className="sticky top-[12rem] space-y-8">
                {/* Agent Card */}
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-5 mb-8">
                    <img src={listing.agent.image} alt={listing.agent.name} className="h-20 w-20 rounded-full object-cover" />
                    <div>
                      <h4 className="text-[2rem] font-bold">{listing.agent.name}</h4>
                      <p className="text-[1.4rem] text-gray-500">Expert Property Advisor</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-3 py-4 bg-[#151717] text-white rounded-xl text-[1.6rem] font-bold hover:bg-black/90 transition">
                      <Calendar size={18} />
                      Schedule Site Visit
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 py-4 border border-gray-200 text-[#151717] rounded-xl text-[1.6rem] font-bold hover:bg-gray-50 transition">
                      <MessageSquare size={18} />
                      Send Inquiry
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-center gap-3 text-gray-500 text-[1.6rem]">
                    <Phone size={16} />
                    {listing.agent.phone}
                  </div>
                </div>

                {/* Investment Insights */}
                <div className="bg-[#151717] p-8 rounded-2xl text-white overflow-hidden relative">
                  <div className="relative z-10">
                    <h4 className="text-[2rem] font-bold mb-4">Market Insight</h4>
                    <p className="text-[1.4rem] text-gray-300 mb-6">This property is priced 5% below the market average for this corridor, representing a strong investment opportunity.</p>
                    <div className="space-y-4">
                      <InsightRow label="Price appreciation" value="+12.4% /yr" />
                      <InsightRow label="Rental yield" value="4.8% /yr" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-gray-400">
        {icon}
        <span className="text-[1.2rem] uppercase tracking-wider font-medium">{label}</span>
      </div>
      <p className="text-[1.8rem] font-bold">{value}</p>
    </div>
  );
}

function InsightRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center text-[1.4rem]">
      <span className="text-gray-400">{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}
