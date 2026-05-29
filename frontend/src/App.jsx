import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// --- API CONFIG ---
const API_BASE_URL = 'http://localhost:8080/api';

// --- NAVBAR ---
const NavBar = ({ currentTab, setCurrentTab, user, logout }) => {
  const tabs = [
    { id: 'home', label: 'Discover' },
    { id: 'map', label: 'Map View' },
    { id: 'contact', label: 'Contact' }
  ];

  if (user) {
    tabs.push({ id: 'dashboard', label: 'Dashboard' });
  }

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-primary/5 fixed top-0 w-full z-50 h-16 transition-all flex items-center">
      <div className="flex items-center justify-between max-w-container-max mx-auto w-full px-gutter h-full">
        <div 
          onClick={() => setCurrentTab('home')}
          className="text-xl font-black text-primary tracking-tighter hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1"
        >
          findmyplot<span className="text-primary/20">.</span>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-8">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button 
                  onClick={() => setCurrentTab(tab.id)}
                  className={`text-[11px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer relative py-1 ${
                    currentTab === tab.id 
                      ? 'text-primary' 
                      : 'text-primary/40 hover:text-primary'
                  }`}
                >
                  {tab.label}
                  {currentTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-scale-in"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {!user ? (
            <button 
              onClick={() => setCurrentTab('login')}
              className="text-primary font-black text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              Login
            </button>
          ) : (
            <button 
              onClick={logout}
              className="text-red-500 font-black text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              Logout
            </button>
          )}
          <button className="bg-primary text-white font-black text-[11px] uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/5">
            Get Started
          </button>
        </div>
        
        <button className="md:hidden text-primary p-2">
          <span className="material-symbols-outlined font-black">menu</span>
        </button>
      </div>
    </nav>
  );
};

// --- FIGMA REPLICA COMPONENTS ---

const FigmaHero = ({ setCurrentTab }) => {
  const realisticImages = [
    "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1591389051651-425a47177a55?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
  ];

  return (
    <section className="w-full h-[85vh] min-h-[600px] overflow-hidden relative flex items-center justify-center">
      {/* Background Infinite Scrolling Marquee */}
      <div className="absolute inset-0 z-0 flex pointer-events-none">
        <div className="flex animate-marquee-horizontal whitespace-nowrap h-full">
          {[...realisticImages, ...realisticImages].map((img, i) => (
            <div key={i} className="h-full w-[100vw] flex-shrink-0 relative">
              <img src={img} alt="background" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="max-w-container-max mx-auto px-gutter relative z-20 w-full text-center flex flex-col items-center gap-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] w-fit">
          <span className="relative flex h-1.5 w-1.5">
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
          </span>
          Curated Premium Plots
        </div>
        
        <h1 className="text-[42px] lg:text-[72px] leading-[1] tracking-tighter text-primary font-black max-w-4xl">
          Invest in Land. <br />
          <span className="text-primary/30">Secure Your Future.</span>
        </h1>
        
        <p className="text-primary/70 max-w-xl text-base lg:text-lg leading-relaxed font-bold">
          Access expertly curated gated communities and premium verified plots. We bridge the gap between land potential and high-value investment.
        </p>
        
        <div className="w-full max-w-3xl mt-2">
          <div className="bg-white border-2 border-primary/5 rounded-[24px] p-2 flex flex-col md:flex-row gap-2 shadow-[0_30px_60px_rgba(10,31,68,0.05)]">
            <div className="flex-1 relative group px-6 py-2 text-left">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/30 block mb-0.5">Location</label>
              <input 
                type="text" 
                placeholder="Diwancheruvu" 
                className="w-full bg-transparent font-black text-primary placeholder:text-primary/10 outline-none text-base"
              />
            </div>
            <div className="hidden md:block w-px h-10 bg-primary/5 self-center"></div>
            <div className="flex-1 relative group px-6 py-2 text-left">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/30 block mb-0.5">Property Type</label>
              <select className="w-full bg-transparent font-black text-primary outline-none cursor-pointer appearance-none text-base">
                <option>Residential Plots</option>
                <option>Commercial Land</option>
                <option>Villa Community</option>
              </select>
            </div>
            <button 
              onClick={() => {
                const plotsSection = document.getElementById('plots');
                if (plotsSection) plotsSection.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="bg-primary text-white font-black uppercase tracking-[0.2em] px-10 py-4 rounded-2xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap shadow-lg shadow-primary/10 group text-[11px]"
            >
              Search Plots
              <span className="material-symbols-outlined text-[20px] font-black group-hover:translate-x-1 transition-transform">search</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-10 mt-6">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white bg-primary/5 flex items-center justify-center shadow-sm overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-[3px] border-white bg-primary flex items-center justify-center text-[12px] font-black text-white shadow-sm">
              10k+
            </div>
          </div>
          <div className="h-10 w-px bg-primary/10"></div>
          <div className="flex flex-col text-left">
            <div className="flex gap-1 text-primary text-[16px] font-black">★★★★★</div>
            <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em]">Trusted by 10,000+ Families</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FigmaStats = () => (
  <section className="w-full bg-white py-16 relative border-y border-primary/5">
    <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
      {[
        { label: 'Weekly Active Users', value: '3.4k+' },
        { label: 'Verified Plots Listed', value: '850+' },
        { label: 'Successful Investments', value: '1.2k+' },
        { label: 'Happy Families', value: '10k+' }
      ].map((stat, i) => (
        <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-3xl lg:text-4xl font-black text-primary mb-2 tracking-tighter">{stat.value}</span>
          <span className="text-primary/40 text-[9px] font-black uppercase tracking-[0.2em]">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

const FigmaDiscover = () => (
  <section className="w-full py-20 bg-white relative overflow-hidden">
    <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl border-2 border-primary/5 hover:border-primary/10 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary font-black">analytics</span>
              </div>
              <h4 className="font-black text-primary text-lg mb-2">Market Insights</h4>
              <p className="text-[12px] text-primary/50 leading-relaxed font-bold uppercase tracking-tight">Real-time price trends and growth projections.</p>
            </div>
            <div className="bg-primary p-6 rounded-3xl text-white shadow-xl shadow-primary/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white font-black">verified</span>
              </div>
              <h4 className="font-black mb-2 text-lg text-white">Drone Verified</h4>
              <p className="text-[12px] text-white/60 leading-relaxed font-bold uppercase tracking-tight">Physically verified and recorded via drone surveys.</p>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="bg-primary/5 p-6 rounded-3xl text-primary border-2 border-transparent hover:border-primary/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                <span className="material-symbols-outlined text-primary font-black">map</span>
              </div>
              <h4 className="font-black mb-2 text-lg">3D Interactive</h4>
              <p className="text-[12px] text-primary/50 leading-relaxed font-bold uppercase tracking-tight">Explore plot boundaries in immersive 3D.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border-2 border-primary/5 hover:border-primary/10 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary font-black">gavel</span>
              </div>
              <h4 className="font-black text-primary text-lg mb-2">Legal Clarity</h4>
              <p className="text-[12px] text-primary/50 leading-relaxed font-bold uppercase tracking-tight">Instant access to GUDA/LP approvals.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-8 order-1 lg:order-2">
        <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary font-black text-[9px] rounded-full tracking-[0.2em] uppercase w-fit">
          Technology Driven
        </div>
        <h2 className="text-[32px] lg:text-[42px] text-primary font-black leading-[1.1] tracking-tighter">
          A new era of <br /> land discovery.
        </h2>
        <p className="text-primary/60 text-lg leading-relaxed font-medium">
          Forget traditional, opaque land deals. Our platform uses advanced geospatial tech for absolute transparency.
        </p>
        
        <div className="space-y-6 mt-4">
          {[
            { icon: 'target', title: 'Precision Search', desc: 'Filter by facing, road width, and proximity.' },
            { icon: 'shield_check', title: 'Secure Transactions', desc: 'Direct connections with verified developers.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] text-primary font-black">{item.icon}</span>
              </div>
              <div>
                <h5 className="font-black text-primary text-base mb-1">{item.title}</h5>
                <p className="text-primary/40 text-[11px] font-bold uppercase tracking-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="flex items-center gap-3 text-primary font-black text-[11px] uppercase tracking-widest group mt-4">
          Explore our technology 
          <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  </section>
);

const FigmaPropertyCard = ({ price, title, location, img, isNew }) => (
  <div className="group bg-white rounded-[24px] border border-primary/5 hover:border-primary/10 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,31,68,0.04)] overflow-hidden flex flex-col cursor-pointer">
    <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
      <img 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        src={img} 
        alt={title} 
      />
      
      {isNew && (
        <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-widest">
          New Listing
        </div>
      )}
      
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-xl scale-90 group-hover:scale-100">
        <span className="material-symbols-outlined text-[18px]">favorite</span>
      </div>
    </div>
    
    <div className="p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-primary font-black tracking-tight">{price}</h3>
        <div className="flex items-center gap-1 text-primary/40 text-[9px] font-bold tracking-widest uppercase">
          <span className="material-symbols-outlined text-[12px]">verified</span>
          Verified
        </div>
      </div>
      
      <div>
        <p className="font-black text-primary text-base leading-tight line-clamp-1 group-hover:text-primary/70 transition-colors">{title}</p>
        <p className="text-primary/40 text-[12px] flex items-center gap-1 mt-1.5 font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          {location}
        </p>
      </div>
      
      <div className="flex gap-4 pt-4 border-t border-primary/5 mt-1">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-[18px] text-primary/20">square_foot</span>
          <span className="text-[10px] font-black uppercase tracking-widest">200 SqYd</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-[18px] text-primary/20">explore</span>
          <span className="text-[10px] font-black uppercase tracking-widest">East Facing</span>
        </div>
      </div>
    </div>
  </div>
);

const FigmaLocationGrid = ({ title, subtitle }) => (
  <section className="w-full py-16 bg-white relative border-t border-primary/5">
    <div className="max-w-container-max mx-auto px-gutter flex flex-col gap-12 relative z-10">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[32px] text-primary font-black tracking-tighter leading-tight">{title}</h2>
        <p className="text-primary/40 text-[9px] font-black uppercase tracking-[0.2em] mt-2">{subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

const FigmaTestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-8 rounded-3xl border-2 border-primary/5 flex flex-col gap-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
    <div className="flex gap-1 text-primary">
      {[1,2,3,4,5].map(i => (
        <span key={i} className="material-symbols-outlined text-[16px] font-black">star</span>
      ))}
    </div>
    <p className="text-primary text-lg font-bold leading-relaxed">
      "{quote}"
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-black overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>
      <div>
        <h4 className="font-black text-primary text-base">{author}</h4>
        <p className="text-primary/40 text-[9px] uppercase tracking-widest font-bold">Verified Investor</p>
      </div>
    </div>
  </div>
);

const FigmaTestimonials = () => (
  <section className="w-full py-20 bg-white relative border-t border-primary/5 overflow-hidden">
    <div className="max-w-container-max mx-auto px-gutter relative z-10">
      <div className="flex flex-col gap-4 mb-16 text-center items-center">
        <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary font-black text-[9px] rounded-full uppercase tracking-widest w-fit">Testimonials</div>
        <h2 className="text-[32px] lg:text-[42px] text-primary font-black leading-tight tracking-tighter">What our investors say.</h2>
      </div>
...
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <FigmaTestimonialCard 
          author="Rajesh Kumar" 
          quote="The transparency FindMyPlot offers is unmatched. The drone verification gave me the confidence to invest without even visiting the site."
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

// --- TAB 1: HOME PAGE (MERGED) ---
const HomeTab = ({ setCurrentTab, plots }) => (
  <div className="w-full flex flex-col bg-white overflow-hidden">
    <FigmaHero setCurrentTab={setCurrentTab} />
    <FigmaStats />
    <section id="plots" className="bg-white border-t border-primary/5">
      <div className="max-w-container-max mx-auto px-gutter py-16 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[32px] text-primary font-black tracking-tighter leading-tight">Dynamic Listings</h2>
          <p className="text-primary/40 text-[9px] font-black uppercase tracking-[0.2em] mt-2">Latest verified plots from our brokers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plots.map(plot => (
            <FigmaPropertyCard 
              key={plot.id}
              price={plot.price} 
              title={plot.title} 
              location="Diwancheruvu, Rajahmundry" 
              img={plot.isDroneVerified ? "/images/3d_plot1.png" : "/images/3d_plot2.png"} 
              isNew={true}
            />
          ))}
        </div>
      </div>
    </section>
    <FigmaDiscover />
    <FigmaLocationGrid title="Premium Sites" subtitle="Curated plots in prime growing locations." />
    <FigmaTestimonials />
  </div>
);

// --- TAB 3: MAP VIEW ---
const MapViewTab = ({ plots }) => {
  const position = [17.0425, 81.8228];

  return (
    <div className="w-full relative z-20 pt-24 h-[calc(100vh)]">
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {plots.map((plot) => (
          <Marker key={plot.id} position={[plot.lat, plot.lng]}>
            <Popup>
              <div className="flex flex-col gap-3 p-2 min-w-[240px]">
                <img src={plot.isDroneVerified ? "/images/3d_plot1.png" : "/images/3d_plot2.png"} alt={plot.title} className="w-full h-32 object-contain bg-primary/5 rounded-2xl" />
                <div className="space-y-1">
                  <strong className="text-primary text-xl font-black block">{plot.price}</strong>
                  <span className="text-primary/60 text-[10px] font-black uppercase tracking-widest block">{plot.title}</span>
                  <div className="flex gap-3 pt-2">
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary/20">square_foot</span>
                      {plot.areaSqYds} SqYd
                    </span>
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary/20">explore</span>
                      {plot.facing}
                    </span>
                  </div>
                </div>
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
  <div className="w-full pt-24 pb-16 px-gutter min-h-screen bg-white flex justify-center items-center">
    <div className="max-w-4xl w-full bg-white rounded-[32px] shadow-2xl shadow-primary/10 border border-primary/5 overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-[40%] bg-primary p-10 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-black mb-4 leading-tight tracking-tighter">Let's find your plot.</h2>
          <p className="text-white/60 mb-10 font-medium text-base">Tell us what you're looking for, and our expert advisors will curate the perfect options for you.</p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">call</span>
              </div>
              <span className="font-black text-base">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </div>
              <span className="font-black text-base">advisor@findmyplot.com</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
              </div>
              <span className="font-black text-base">Diwancheruvu, AP</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white/5 p-5 rounded-2xl border border-white/10">
          <p className="font-black text-[10px] uppercase tracking-widest">"The fastest way to secure premium real estate."</p>
        </div>
      </div>
      
      <div className="w-full md:w-[60%] p-10 bg-white">
        <h3 className="text-2xl font-black text-primary mb-8 tracking-tight">Custom Requirement</h3>
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">First Name</label>
              <input type="text" className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" placeholder="John" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Last Name</label>
              <input type="text" className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" placeholder="Doe" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Phone Number</label>
            <input type="tel" className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" placeholder="+91 99999 99999" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Preferred Size (Sq Yds)</label>
            <select className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors bg-white cursor-pointer text-sm">
              <option>100 - 150 Sq Yds</option>
              <option>150 - 250 Sq Yds</option>
              <option>250+ Sq Yds</option>
              <option>Not Sure</option>
            </select>
          </div>
          
          <button type="button" className="bg-primary text-white font-black text-[11px] uppercase tracking-widest py-5 rounded-2xl hover:bg-primary/90 transition-all mt-4 shadow-xl shadow-primary/10">
            Book an Advisor Call
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- TAB 5: LOGIN PAGE ---
const LoginTab = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(res => {
      if (!res.ok) throw new Error('Invalid credentials');
      return res.json();
    })
    .then(data => onLogin(data))
    .catch(err => setError(err.message));
  };

  return (
    <div className="w-full pt-32 pb-16 px-gutter min-h-screen bg-white flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-10 rounded-[32px] shadow-2xl shadow-primary/10 border border-primary/5">
        <h2 className="text-3xl font-black text-primary mb-2 tracking-tighter text-center">Broker Login</h2>
        <p className="text-primary/40 text-[10px] font-black uppercase tracking-widest text-center mb-10">Access your property dashboard</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" 
              placeholder="admin@findmyplot.com" 
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" 
              placeholder="••••••••" 
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-[10px] font-bold uppercase">{error}</p>}
          
          <button type="submit" className="bg-primary text-white font-black text-[11px] uppercase tracking-widest py-5 rounded-2xl hover:bg-primary/90 transition-all mt-4 shadow-xl shadow-primary/10">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

// --- TAB 6: DASHBOARD (BROKER/ADMIN) ---
const DashboardTab = ({ user, plots, refreshPlots }) => {
  const isBuilder = user?.role === 'BROKER';
  const isAdmin = user?.role === 'SUPER_ADMIN';
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPlot, setNewPlot] = useState({ title: '', price: '', areaSqYds: '', facing: 'East' });

  const handleVerify = (plotId) => {
    fetch(`${API_BASE_URL}/plots/${plotId}/verify`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) refreshPlots();
    });
  };

  const handleAddPlot = (e) => {
    e.preventDefault();
    fetch(`${API_BASE_URL}/plots`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newPlot,
        broker: { email: user.email }, // Simplified for prototype
        lat: 17.0425 + (Math.random() - 0.5) * 0.01,
        lng: 81.8228 + (Math.random() - 0.5) * 0.01
      })
    })
    .then(res => {
      if (res.ok) {
        setShowAddForm(false);
        refreshPlots();
      }
    });
  };

  return (
    <div className="w-full pt-24 pb-16 px-gutter min-h-screen bg-white">
      <div className="max-w-container-max mx-auto">
        {showAddForm && (
          <div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
            <div className="bg-white rounded-[32px] p-10 max-w-xl w-full shadow-2xl border border-primary/5">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black text-primary tracking-tight">Upload New Plot</h2>
                <button onClick={() => setShowAddForm(false)} className="text-primary/40 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form onSubmit={handleAddPlot} className="grid grid-cols-2 gap-6">
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Plot Title</label>
                  <input type="text" value={newPlot.title} onChange={e => setNewPlot({...newPlot, title: e.target.value})} className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" placeholder="Emerald Greens Phase III" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Price</label>
                  <input type="text" value={newPlot.price} onChange={e => setNewPlot({...newPlot, price: e.target.value})} className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" placeholder="₹55 Lakhs" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Size (SqYds)</label>
                  <input type="number" value={newPlot.areaSqYds} onChange={e => setNewPlot({...newPlot, areaSqYds: e.target.value})} className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" placeholder="200" required />
                </div>
                <div className="col-span-2">
                  <button type="submit" className="w-full bg-primary text-white font-black text-[11px] uppercase tracking-widest py-5 rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/10">
                    Publish Listing
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-[42px] text-primary font-black tracking-tighter leading-tight">
              {isAdmin ? 'Admin Panel' : 'Broker Dashboard'}
            </h1>
            <p className="text-primary/40 text-[10px] font-black uppercase tracking-widest mt-2">
              Welcome back, {user.email}
            </p>
          </div>
          
          {isBuilder && (
            <button 
              onClick={() => setShowAddForm(true)}
              className="bg-primary text-white font-black text-[11px] uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/10 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              Add New Plot
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6">
          {plots.map(plot => (
            <div key={plot.id} className="bg-white border-2 border-primary/5 rounded-[24px] p-6 flex items-center gap-8 group hover:border-primary/10 transition-all">
              <div className="w-32 h-32 rounded-2xl overflow-hidden bg-primary/5 shrink-0">
                <img src="/images/3d_plot1.png" alt="plot" className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-primary">{plot.price}</span>
                  {plot.isDroneVerified && (
                    <span className="bg-green-500/10 text-green-600 text-[8px] font-black uppercase px-2 py-1 rounded-md">Drone Verified</span>
                  )}
                </div>
                <h3 className="font-black text-primary text-lg mb-1">{plot.title}</h3>
                <p className="text-primary/40 text-[10px] font-bold uppercase tracking-widest">
                  {plot.areaSqYds} SqYds • {plot.facing} • {plot.status}
                </p>
              </div>

              <div className="flex gap-4">
                {isAdmin && !plot.isDroneVerified && (
                  <button 
                    onClick={() => handleVerify(plot.id)}
                    className="bg-primary/5 text-primary font-black text-[10px] uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-all"
                  >
                    Verify Now
                  </button>
                )}
                <button className="p-3 rounded-xl border-2 border-primary/5 text-primary hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="p-3 rounded-xl border-2 border-primary/5 text-red-500 hover:bg-red-50 transition-all">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
const Footer = () => (
  <footer className="w-full py-16 px-gutter flex flex-col items-center text-center bg-white border-t border-primary/5">
    <div className="text-xl font-black text-primary tracking-tighter mb-4">
      findmyplot<span className="text-primary/20">.</span>
    </div>
    <div className="text-[9px] font-black text-primary/40 uppercase tracking-[0.3em]">
      © 2026 findmyplot. Filter, find, and secure your plot instantly.
    </div>
  </footer>
);

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const fetchPlots = () => {
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
  };

  useEffect(() => {
    fetchPlots();
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setCurrentTab('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setCurrentTab('home');
  };

  const renderTab = () => {
    switch(currentTab) {
      case 'home':
        return <HomeTab setCurrentTab={setCurrentTab} plots={plots} />;
      case 'map':
        return <MapViewTab plots={plots} />;
      case 'contact':
        return <ContactTab />;
      case 'login':
        return <LoginTab onLogin={handleLogin} />;
      case 'dashboard':
        return <DashboardTab user={user} plots={plots} refreshPlots={fetchPlots} />;
      default:
        return <HomeTab setCurrentTab={setCurrentTab} plots={plots} />;
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} user={user} logout={handleLogout} />
      
      <div className="flex-1 w-full">
        {renderTab()}
      </div>
      
      {currentTab !== 'map' && <Footer />}
    </div>
  );
}

export default App;
