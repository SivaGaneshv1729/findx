import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// --- DATA ---
const plotsData = [
  {
    id: 1,
    price: "₹45 Lakhs",
    title: "Emerald Greens Phase II",
    area: "200 Sq Yds",
    facing: "East Facing",
    img: "/images/3d_plot1.png",
    badges: ["Drone-Verified", "GUDA Approved"],
    coords: [17.0435, 81.8235]
  },
  {
    id: 2,
    price: "₹62 Lakhs",
    title: "Sapphire Enclave",
    area: "250 Sq Yds",
    facing: "North Facing",
    img: "/images/3d_plot2.png",
    badges: ["Drone-Verified", "Corner Plot"],
    coords: [17.0410, 81.8200]
  },
  {
    id: 3,
    price: "₹35 Lakhs",
    title: "GIET Corridor Plots",
    area: "160 Sq Yds",
    facing: "West Facing",
    img: "/images/3d_plot3.png",
    badges: ["Drone-Verified", "Ready to Build"],
    coords: [17.0450, 81.8210]
  },
  {
    id: 4,
    price: "₹80 Lakhs",
    title: "Royal Residency Plots",
    area: "300 Sq Yds",
    facing: "East Facing",
    img: "/images/3d_discover.png",
    badges: ["Premium", "Highway Facing"],
    coords: [17.0390, 81.8250]
  }
];

// --- NAVBAR ---
const NavBar = ({ currentTab, setCurrentTab }) => {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'plots', label: 'All Plots' },
    { id: 'map', label: 'Map View' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-border-subtle fixed top-0 w-full z-50 h-20 transition-all">
      <div className="flex items-center justify-between max-w-container-max mx-auto w-full px-gutter h-full">
        <div 
          onClick={() => setCurrentTab('home')}
          className="text-2xl font-black text-primary tracking-tighter hover:scale-105 transition-transform cursor-pointer flex items-center gap-1"
        >
          findmyplot<span className="text-growth-vibrant">.</span>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-10">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button 
                  onClick={() => setCurrentTab(tab.id)}
                  className={`text-[13px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer relative py-2 ${
                    currentTab === tab.id 
                      ? 'text-primary' 
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {tab.label}
                  {currentTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-growth-vibrant rounded-full animate-scale-in"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-primary font-bold text-sm hover:text-growth-vibrant transition-colors">
            Login
          </button>
          <button className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-2xl hover:bg-growth-vibrant hover:text-primary transition-all shadow-lg hover:shadow-growth-vibrant/20">
            Get Started
          </button>
        </div>
        
        <button className="md:hidden text-primary p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

// --- FIGMA REPLICA COMPONENTS ---

const FigmaHero = ({ setCurrentTab }) => (
  <section className="w-full bg-white pt-32 pb-20 overflow-hidden relative">
    {/* Modern Background Elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-growth-vibrant/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>
    
    <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
      <div className="lg:col-span-7 flex flex-col gap-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-vibrant/10 border border-growth-vibrant/20 text-growth-vibrant text-[12px] font-bold uppercase tracking-wider w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-growth-vibrant opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-growth-vibrant"></span>
          </span>
          Premium Verified Plots
        </div>
        
        <h1 className="font-display-lg text-[56px] lg:text-[72px] leading-[1.05] tracking-tight text-primary">
          Invest in land, <br />
          <span className="text-growth-vibrant italic">secure</span> your future.
        </h1>
        
        <p className="font-body-lg text-on-surface-variant max-w-xl text-lg lg:text-xl leading-relaxed">
          Connect with expertly curated gated communities and premium plots in prime locations. We bridge the gap between land potential and high-value investment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 max-w-md relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline group-focus-within:text-primary transition-colors">location_on</span>
            </div>
            <input 
              type="text" 
              placeholder="Search by location (e.g. Diwancheruvu)" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border-subtle bg-white shadow-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all"
            />
          </div>
          <button 
            onClick={() => setCurrentTab('plots')} 
            className="bg-primary text-on-primary font-label-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Find Plots
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
        </div>

        <div className="flex items-center gap-8 mt-4">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-surface-variant flex items-center justify-center text-[10px] font-bold text-primary shadow-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5"></div>
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-growth-vibrant flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
              10k+
            </div>
          </div>
          <div className="h-8 w-px bg-border-subtle"></div>
          <div className="flex flex-col">
            <div className="flex gap-1 text-growth-vibrant text-[12px]">★★★★★</div>
            <span className="text-[11px] font-bold text-on-surface-variant/70 uppercase tracking-widest">Trusted by 10,000+ Families</span>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-5 relative animate-scale-in">
        <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden bg-primary shadow-2xl">
          {/* Instead of a useless image, we use a sophisticated UI composition */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 p-8 flex flex-col justify-end gap-6">
            <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-growth-vibrant text-[10px] font-bold uppercase tracking-widest mb-1 block">Featured Listing</span>
                  <h3 className="text-white text-xl font-bold">Sunrise Valley Phase II</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-white text-[10px] font-bold">
                  Plot ID: SV-042
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-1">
                  <span className="text-white/50 text-[10px] uppercase">Starting from</span>
                  <span className="text-white text-lg font-bold">₹45 Lakhs</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white/50 text-[10px] uppercase">Location</span>
                  <span className="text-white text-lg font-bold">Diwancheruvu</span>
                </div>
              </div>
              
              <button className="w-full py-3 rounded-xl bg-growth-vibrant text-primary font-bold text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                View Details
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </button>
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <div className="absolute top-12 -right-8 glass-panel p-4 rounded-2xl border border-white/20 shadow-xl animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-growth-vibrant/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-growth-vibrant">verified</span>
              </div>
              <div>
                <p className="text-white text-[12px] font-bold">Verified Land</p>
                <p className="text-white/60 text-[10px]">GUDA Approved</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-[30%] -left-8 glass-panel p-4 rounded-2xl border border-white/20 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">trending_up</span>
              </div>
              <div>
                <p className="text-white text-[12px] font-bold">+12% YoY</p>
                <p className="text-white/60 text-[10px]">Price Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FigmaStats = () => (
  <section className="w-full bg-primary py-20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
    <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
      {[
        { label: 'Weekly Active Users', value: '3.4k+' },
        { label: 'Verified Plots Listed', value: '850+' },
        { label: 'Successful Investments', value: '1.2k+' },
        { label: 'Happy Families', value: '10k+' }
      ].map((stat, i) => (
        <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-display-lg text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</span>
          <span className="text-growth-vibrant text-[12px] font-bold uppercase tracking-widest">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

const FigmaDiscover = () => (
  <section className="w-full py-24 bg-white relative overflow-hidden">
    <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="absolute inset-0 bg-growth-vibrant/5 rounded-full blur-[100px] -z-10"></div>
        
        {/* Modern Feature Composition */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="space-y-4">
            <div className="bg-surface-muted p-6 rounded-[32px] border border-border-subtle hover:border-growth-vibrant/30 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">analytics</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Market Insights</h4>
              <p className="text-[12px] text-on-surface-variant leading-relaxed">Real-time price trends and growth projections for every locality.</p>
            </div>
            <div className="bg-primary p-6 rounded-[32px] text-white">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-growth-vibrant">verified</span>
              </div>
              <h4 className="font-bold mb-2 text-white">Drone Verified</h4>
              <p className="text-[12px] text-white/70 leading-relaxed">Every plot is physically verified and recorded via drone surveys.</p>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="bg-growth-vibrant p-6 rounded-[32px] text-primary">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">map</span>
              </div>
              <h4 className="font-bold mb-2">3D Interactive Maps</h4>
              <p className="text-[12px] text-primary/80 leading-relaxed">Explore plot boundaries and surroundings in immersive 3D.</p>
            </div>
            <div className="bg-surface-muted p-6 rounded-[32px] border border-border-subtle hover:border-growth-vibrant/30 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">gavel</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Legal Clarity</h4>
              <p className="text-[12px] text-on-surface-variant leading-relaxed">Instant access to GUDA/LP approvals and ownership documents.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-8 order-1 lg:order-2">
        <div className="inline-block px-4 py-2 bg-primary/5 text-primary font-bold text-[10px] rounded-full tracking-widest uppercase w-fit">
          Technology Driven
        </div>
        <h2 className="font-display-lg text-[48px] lg:text-[56px] text-primary leading-[1.05] tracking-tight">
          A new era of land <span className="text-growth-vibrant">discovery</span>.
        </h2>
        <p className="font-body-md text-on-surface-variant text-lg leading-relaxed">
          Forget traditional, opaque land deals. Our platform uses advanced geospatial tech and physical verification to bring absolute transparency to your investment journey.
        </p>
        
        <div className="space-y-6 mt-4">
          {[
            { icon: 'target', title: 'Precision Search', desc: 'Filter by facing, road width, and proximity to landmarks.' },
            { icon: 'shield_check', title: 'Secure Transactions', desc: 'Direct connections with verified sellers and developers.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-growth-vibrant/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] text-growth-vibrant font-bold">{item.icon}</span>
              </div>
              <div>
                <h5 className="font-bold text-primary text-sm">{item.title}</h5>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="flex items-center gap-3 text-primary font-bold text-sm group mt-4">
          Explore our technology 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  </section>
);

const FigmaPropertyCard = ({ price, title, location, img, isNew }) => (
  <div className="group bg-white rounded-[32px] border border-border-subtle hover:border-growth-vibrant/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(10,31,68,0.1)] overflow-hidden flex flex-col cursor-pointer">
    <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
      <img 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src={img} 
        alt={title} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {isNew && (
        <div className="absolute top-4 left-4 bg-growth-vibrant text-primary text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
          Featured
        </div>
      )}
      
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-primary hover:bg-growth-vibrant hover:text-white transition-all shadow-lg scale-90 group-hover:scale-100">
        <span className="material-symbols-outlined text-[20px]">favorite</span>
      </div>
    </div>
    
    <div className="p-6 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <h3 className="font-display-lg text-2xl text-primary font-bold">{price}</h3>
        <div className="flex items-center gap-1 text-growth-vibrant bg-growth-vibrant/10 px-2 py-0.5 rounded text-[10px] font-bold">
          <span className="material-symbols-outlined text-[12px]">verified</span>
          VERIFIED
        </div>
      </div>
      
      <div>
        <p className="font-bold text-primary text-base line-clamp-1 group-hover:text-growth-vibrant transition-colors">{title}</p>
        <p className="text-on-surface-variant text-sm flex items-center gap-1 mt-1 font-medium">
          <span className="material-symbols-outlined text-[16px] text-growth-vibrant">location_on</span>
          {location}
        </p>
      </div>
      
      <div className="flex gap-4 pt-4 border-t border-border-subtle mt-2">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px] opacity-40">square_foot</span>
          <span className="text-[12px] font-bold">200 SqYd</span>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px] opacity-40">explore</span>
          <span className="text-[12px] font-bold">East Facing</span>
        </div>
      </div>
    </div>
  </div>
);

const FigmaLocationGrid = ({ title, subtitle }) => (
  <section className="w-full py-20 bg-white relative">
    {/* Background styling for grid section */}
    <div className="absolute inset-0 bg-gradient-to-b from-white to-surface-muted"></div>
    
    <div className="max-w-[1100px] mx-auto px-gutter flex flex-col gap-12 relative z-10">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-display-lg text-[40px] text-primary font-bold">{title}</h2>
        <p className="font-body-md text-on-surface-variant text-sm mt-2 max-w-md">{subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <FigmaPropertyCard 
          price="₹45 Lakhs" 
          title="Premium Corner Plot Ready for Development" 
          location="Diwancheruvu, Rajahmundry" 
          img="/images/3d_plot1.png" 
          isNew={true}
        />
        <FigmaPropertyCard 
          price="₹60 Lakhs" 
          title="Spacious Flat Land with Green Boundaries" 
          location="Diwancheruvu, Rajahmundry" 
          img="/images/3d_plot2.png" 
        />
        <FigmaPropertyCard 
          price="₹35 Lakhs" 
          title="Cozy Investment Plot in Prime Location" 
          location="Diwancheruvu, Rajahmundry" 
          img="/images/3d_plot3.png" 
        />
      </div>
    </div>
  </section>
);

const FigmaAppCTA = () => (
  <section className="w-full bg-primary py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-growth-vibrant/5 rounded-full blur-[150px]"></div>
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
    
    <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
      <div className="flex flex-col gap-8 max-w-xl">
        <div className="inline-block px-4 py-2 bg-white/5 text-white font-bold text-[10px] rounded-full uppercase tracking-widest border border-white/10 w-fit">Mobile Experience</div>
        <h2 className="font-display-lg text-[48px] lg:text-[64px] text-white leading-[1.05] tracking-tight">
          Your property search, <span className="text-growth-vibrant">portable</span>.
        </h2>
        <p className="font-body-md text-white/60 text-lg leading-relaxed">
          Take the power of 3D property exploration wherever you go. Our mobile app provides real-time notifications for price drops and new verified listings.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
           <button className="bg-white text-primary hover:bg-growth-vibrant hover:text-white flex items-center gap-4 px-8 py-4 rounded-2xl transition-all shadow-xl font-bold cursor-pointer group">
             <span className="material-symbols-outlined text-[32px]">apple</span>
             <div className="flex flex-col text-left">
               <span className="text-[10px] uppercase tracking-wider opacity-60">Get it on</span>
               <span className="text-base leading-none">App Store</span>
             </div>
           </button>
           <button className="bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center gap-4 px-8 py-4 rounded-2xl transition-all shadow-xl font-bold cursor-pointer group">
             <span className="material-symbols-outlined text-[32px]">play_arrow</span>
             <div className="flex flex-col text-left">
               <span className="text-[10px] uppercase tracking-wider opacity-60">Get it on</span>
               <span className="text-base leading-none">Google Play</span>
             </div>
           </button>
        </div>
      </div>
      
      <div className="relative flex justify-center items-center">
        {/* Subtle, abstract representation of mobile technology instead of a literal phone image */}
        <div className="relative w-[320px] h-[600px] rounded-[60px] border-[8px] border-white/10 bg-navy-deep overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
           <div className="absolute top-0 inset-x-0 h-8 bg-white/5 flex justify-center items-end pb-2">
             <div className="w-20 h-1 bg-white/20 rounded-full"></div>
           </div>
           <div className="p-6 pt-12 space-y-6">
              <div className="w-full h-40 rounded-3xl bg-growth-vibrant/20 border border-growth-vibrant/30 animate-pulse"></div>
              <div className="space-y-3">
                <div className="w-2/3 h-4 rounded-full bg-white/20"></div>
                <div className="w-full h-4 rounded-full bg-white/10"></div>
                <div className="w-full h-4 rounded-full bg-white/10"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10"></div>
                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10"></div>
              </div>
           </div>
           {/* Glow Effect */}
           <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-growth-vibrant/20 rounded-full blur-[60px]"></div>
        </div>
      </div>
    </div>
  </section>
);

const FigmaTestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-8 rounded-[32px] border border-border-subtle flex flex-col gap-6 hover:shadow-xl transition-all duration-500 group">
    <div className="flex gap-1 text-growth-vibrant">
      {[1,2,3,4,5].map(i => (
        <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      ))}
    </div>
    <p className="font-body-md text-primary text-lg leading-relaxed italic">
      "{quote}"
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-growth-vibrant/20 to-primary/10"></div>
      </div>
      <div>
        <h4 className="font-bold text-primary text-base">{author}</h4>
        <p className="text-on-surface-variant text-[12px] uppercase tracking-widest font-bold">Verified Investor</p>
      </div>
    </div>
  </div>
);

const FigmaTestimonials = () => (
  <section className="w-full py-32 bg-surface-muted relative overflow-hidden">
    <div className="max-w-container-max mx-auto px-gutter relative z-10">
      <div className="flex flex-col gap-4 mb-16 max-w-2xl">
        <div className="inline-block px-4 py-2 bg-growth-vibrant/10 text-growth-vibrant font-bold text-[10px] rounded-full uppercase tracking-widest w-fit">Testimonials</div>
        <h2 className="font-display-lg text-[48px] text-primary font-bold leading-tight">What our investors <span className="text-growth-vibrant">say</span>.</h2>
        <p className="text-on-surface-variant text-lg">Join thousands of happy families who found their perfect investment with us.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FigmaTestimonialCard 
          author="Rajesh Kumar" 
          quote="The transparency FindMyPlot offers is unmatched. The drone verification gave me the confidence to invest in Emerald Greens without even visiting the site."
        />
        <FigmaTestimonialCard 
          author="Sneha Reddy" 
          quote="I was looking for a corner plot for months. Their 3D search made it so easy to visualize the facing and road widths. Highly recommended!"
        />
        <FigmaTestimonialCard 
          author="Amit Verma" 
          quote="Finally a real estate platform that feels like it belongs in 2026. Clean, fast, and verified listings only. Found my dream plot in just a week."
        />
      </div>
    </div>
  </section>
);

// --- TAB 1: HOME PAGE ---
const HomeTab = ({ setCurrentTab }) => (
  <div className="w-full flex flex-col bg-white overflow-hidden">
    <FigmaHero setCurrentTab={setCurrentTab} />
    <FigmaStats />
    <FigmaDiscover />
    <FigmaLocationGrid title="Based on your location" subtitle="Find the best properties near you." />
    <FigmaAppCTA />
    <FigmaLocationGrid title="Latest updates & offers" subtitle="Stay ahead of the market with our latest deals." />
    <FigmaTestimonials />
  </div>
);

// --- TAB 2: PLOTS FILTER ---
const SearchFilterHero = () => (
  <div className="relative w-full pt-40 pb-20 flex items-center justify-center bg-primary overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent)]"></div>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>
    
    <div className="relative z-20 w-full max-w-5xl mx-auto px-gutter text-center flex flex-col items-center">
      <h1 className="font-display-lg text-4xl md:text-6xl text-white mb-6 leading-tight tracking-tight">
        Find Your Perfect Plot in <span className="text-growth-vibrant italic">Diwancheruvu</span>
      </h1>
      <p className="font-body-lg text-white/70 mb-12 max-w-2xl text-lg lg:text-xl">
        Use our advanced filters to discover premium verified plots matching your exact investment criteria.
      </p>
      
      <div className="glass-panel w-full rounded-[40px] p-8 md:p-10 flex flex-col gap-8 shadow-2xl border border-white/10 bg-white/5 backdrop-blur-3xl transform hover:-translate-y-1 transition-all duration-500">
        <div className="flex flex-col md:flex-row gap-4 items-center w-full">
          <div className="flex-1 w-full bg-white rounded-2xl flex items-center px-6 py-4 border border-border-subtle focus-within:ring-4 focus-within:ring-growth-vibrant/10 focus-within:border-growth-vibrant transition-all group">
            <span className="material-symbols-outlined text-outline group-focus-within:text-growth-vibrant mr-4 text-2xl transition-colors">location_on</span>
            <input className="w-full bg-transparent border-none focus:ring-0 font-body-lg text-primary placeholder:text-outline/60 p-0 outline-none" placeholder="Search by plot name, ID, or location..." type="text" />
          </div>
          <button className="w-full md:w-auto bg-growth-vibrant text-primary font-bold text-lg px-12 py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-growth-vibrant/20 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer">
            Filter Plots
            <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">tune</span>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-3 w-full justify-center">
          {['GUDA Approved', 'East Facing', 'Near NH-16', 'Corner Plot', 'Ready to Build'].map(filter => (
            <label key={filter} className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-md cursor-pointer transition-all duration-300 group">
              <input className="text-growth-vibrant rounded border-white/30 bg-white/5 focus:ring-growth-vibrant focus:ring-offset-0 h-4 w-4 cursor-pointer" type="checkbox" />
              <span className="text-[13px] font-bold text-white/80 group-hover:text-white transition-colors uppercase tracking-wider">{filter}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PlotListings = () => (
  <section className="w-full max-w-container-max mx-auto px-gutter py-12 md:py-16">
    <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-border-subtle pb-6">
      <div>
        <h2 className="font-headline-lg text-3xl text-primary mb-2">Available Plots ({plotsData.length})</h2>
        <p className="font-body-md text-on-surface-variant">Showing filtered premium plots based on your criteria.</p>
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <span className="text-sm font-medium text-outline">Sort by:</span>
        <select className="bg-surface border border-border-subtle text-primary text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 outline-none cursor-pointer">
          <option>Relevance</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Area: Largest</option>
        </select>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {plotsData.map((listing) => (
        <div key={listing.id} className="group bg-white border border-border-subtle/80 p-5 rounded-3xl shadow-md hover:shadow-xl hover:border-primary/20 transform hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer relative">
          <div className="relative h-56 rounded-2xl overflow-hidden flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0%,rgba(241,245,249,0.7)_100%)] border-b border-border-subtle/30">
            <img alt="Plot Listing" className="w-[78%] h-auto object-contain transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]" src={listing.img} />
            
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {listing.badges.map(badge => (
                <span key={badge} className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-lg font-label-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-sm font-bold border border-white/50">
                  {badge === "Drone-Verified" && <span className="material-symbols-outlined text-[14px] text-growth-vibrant" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>}
                  {badge}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex-1 flex flex-col mt-4">
            <div className="flex justify-between items-start mb-2">
              <div className="text-primary font-display-lg text-2xl font-bold">{listing.price}</div>
              <button className="text-outline hover:text-growth-vibrant transition-colors p-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
              </button>
            </div>
            
            <h4 className="font-label-bold text-primary text-base mb-4 line-clamp-1">{listing.title}</h4>
            
            <div className="flex gap-4 pt-4 border-t border-border-subtle/60 mt-auto bg-surface-muted -mx-5 px-5 -mb-5 pb-5 rounded-b-[24px]">
              <div className="flex items-center gap-2 text-on-surface-variant bg-white px-3 py-1.5 rounded-md border border-border-subtle shadow-sm">
                <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>aspect_ratio</span>
                <span className="font-caption text-xs font-semibold">{listing.area}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant bg-white px-3 py-1.5 rounded-md border border-border-subtle shadow-sm">
                <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>explore</span>
                <span className="font-caption text-xs font-semibold">{listing.facing}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const PlotsTab = () => (
  <>
    <SearchFilterHero />
    <main className="flex-1 relative z-20 -mt-8 bg-background rounded-t-[2.5rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] pb-10">
      <PlotListings />
    </main>
  </>
);

// --- TAB 3: MAP VIEW ---
const MapViewTab = () => {
  const position = [17.0425, 81.8228];

  return (
    <div className="w-full relative z-20 pt-20 h-[calc(100vh-80px)]">
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {plotsData.map((plot) => (
          <Marker key={plot.id} position={plot.coords}>
            <Popup>
              <div className="flex flex-col gap-2 p-1 min-w-[200px]">
                <img src={plot.img} alt={plot.title} className="w-full h-24 object-cover rounded-md" />
                <strong className="text-primary font-bold font-headline-md">{plot.price}</strong>
                <span className="font-body-md font-semibold text-sm">{plot.title}</span>
                <span className="text-xs text-on-surface-variant">{plot.area} &bull; {plot.facing}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// --- TAB 4: CONTACT / BOOKING ---
const ContactTab = () => (
  <div className="w-full pt-28 pb-20 px-gutter min-h-screen bg-surface-muted flex justify-center items-center">
    <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 bg-primary p-10 text-on-primary flex flex-col justify-between">
        <div>
          <h2 className="font-headline-lg text-3xl mb-4">Let's Find Your Plot</h2>
          <p className="font-body-md opacity-80 mb-8">Tell us what you're looking for, and our expert advisors will curate the perfect options for you.</p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-growth-vibrant">call</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-growth-vibrant">mail</span>
              <span>advisor@findmyplot.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-growth-vibrant">location_on</span>
              <span>Diwancheruvu, Rajamahendravaram</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
          <p className="font-label-bold text-sm">"The fastest way to secure premium real estate."</p>
        </div>
      </div>
      
      <div className="w-full md:w-3/5 p-10 bg-white">
        <h3 className="font-headline-md text-2xl text-primary mb-6">Custom Requirement</h3>
        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-label-bold text-sm text-on-surface-variant">First Name</label>
              <input type="text" className="border border-border-subtle rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="John" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-bold text-sm text-on-surface-variant">Last Name</label>
              <input type="text" className="border border-border-subtle rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Doe" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="font-label-bold text-sm text-on-surface-variant">Phone Number</label>
            <input type="tel" className="border border-border-subtle rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="+91 99999 99999" />
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="font-label-bold text-sm text-on-surface-variant">Preferred Plot Size (Sq Yds)</label>
            <select className="border border-border-subtle rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white">
              <option>100 - 150 Sq Yds</option>
              <option>150 - 250 Sq Yds</option>
              <option>250+ Sq Yds</option>
              <option>Not Sure</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="font-label-bold text-sm text-on-surface-variant">Additional Requirements</label>
            <textarea rows="3" className="border border-border-subtle rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none" placeholder="E.g., Highway facing, East facing..."></textarea>
          </div>
          
          <button type="button" className="bg-primary text-on-primary font-label-bold py-4 rounded-xl hover:bg-primary-container transition-colors mt-2 shadow-md hover:shadow-lg">
            Book an Advisor Call
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- MAIN APP ---
const Footer = () => (
  <footer className="w-full py-12 px-gutter flex flex-col items-center text-center bg-primary border-t border-white/5">
    <div className="text-headline-md font-bold text-on-primary mb-6 opacity-90">
      findmyplot
    </div>
    <div className="font-body-md text-on-primary opacity-60">
      © 2026 findmyplot. Filter, find, and secure your plot instantly.
    </div>
  </footer>
);

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const renderTab = () => {
    switch(currentTab) {
      case 'home':
        return <HomeTab setCurrentTab={setCurrentTab} />;
      case 'plots':
        return <PlotsTab />;
      case 'map':
        return <MapViewTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <HomeTab setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <div className="flex-1 w-full">
        {renderTab()}
      </div>
      
      {currentTab !== 'map' && <Footer />}
    </div>
  );
}

export default App;
