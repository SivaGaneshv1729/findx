import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const plotsData = [
  {
    id: 1,
    price: "₹45 Lakhs",
    title: "Emerald Greens Phase II",
    area: "200 Sq Yds",
    facing: "East Facing",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0DVmrbUInv7gtZSeSra8tIwt7GOTKhCNgZhoVglRVe8dcx-EORSdMsrDca1JCTff8gVa7hxMzm-mRCQy-FCd5kHejaMTHiMvIUAkPaGQkduMSrlCVe-_HLevMUG3MqqSRryTAC0qwe8gVTocLmpXRHYx4PN3qxL5kPl2LToWpr4O0C77jaWkFEkiVrvBqGd7rcs36ocF5FDKnbTfLu8u9_B9eo9F7rM0C2NU98TDnAJ3PUfFwlkwUkskGLPrls4PK0o4b1OzNARE",
    badges: ["Drone-Verified", "GUDA Approved"],
    coords: [17.0435, 81.8235]
  },
  {
    id: 2,
    price: "₹62 Lakhs",
    title: "Sapphire Enclave",
    area: "250 Sq Yds",
    facing: "North Facing",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_OxHSmXDCbv-JEVzFcdarxn-XSqw6g3cUvaGnoyvIFp2LLDV4sUg5p40nK1Ao4iHVENnsh9b1_-qY0qmbhZ-nG30IOknv4Tza1N8mODi3xiNZQXEPOdCBQJ5UM4djpQxxRh15uxOhBzRB6s_-OrfUjpBgaCJ5pgMkIHeuUPhACup7hxPvkBtipOyIMZnWbjrch-KiVDAnd02yMIF4aDNvfBRoQPt6qjHgwbDAMmAn1Qa8tvr5SNZkoDWB1QmT6-RDuWFAwpOCLtc",
    badges: ["Drone-Verified", "Corner Plot"],
    coords: [17.0410, 81.8200]
  },
  {
    id: 3,
    price: "₹35 Lakhs",
    title: "GIET Corridor Plots",
    area: "160 Sq Yds",
    facing: "West Facing",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMckKuUjcVEaRFYX7sakFQn3DvUGY5OzCqtylQHiJBigQBuRljMfXpk23Hf4seVJuV1knracP_smq6iN7W8ZFQOaXJ1m0JoyjekFR9typtXuCUIs-0AsK2tjkhGFRYQ6SqNJLlCuAuhyx3PGuMqwuSrMzIshm5cSi7yvXH-gZZtR6q5FSMbiYf89gYod5XL0klpPpKk4F-hKUxdy-Wfb72LSXyurLtEmO8QEsbx7RLnlQ1k-sBmLn3LIaats2TwDxnG-JZRhirL-Q",
    badges: ["Drone-Verified", "Ready to Build"],
    coords: [17.0450, 81.8210]
  },
  {
    id: 4,
    price: "₹80 Lakhs",
    title: "Royal Residency Plots",
    area: "300 Sq Yds",
    facing: "East Facing",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcqIfjDiZ5KjLtW_5x1K_ahNChnw9VWFiKa97EuMcsEhGW_UYXCAujWGlpSKFcLpVuIirNN9GcRcwtjuqhX-st8o6PVp_9hZ4dFb15cVsqXGVWWPgMUFRRs7rLR__z5T0gzqJFRPs7SQdvNmEJEd6F6cWgI1UtZBbB8d4gfGjzaxbOyZjsO8BmPVn_A-h2gMzhSqNmgLPKSkIflVdyU6ZgJ7Y25WMXk4Qs8yzOoj2DaiQ0V2HSROFYaQ-kwqNBfmNI6hZpNlN4hv8",
    badges: ["Premium", "Highway Facing"],
    coords: [17.0390, 81.8250]
  }
];

const NavBar = ({ currentTab, setCurrentTab }) => (
  <nav className="bg-surface/90 backdrop-blur-xl dark:bg-navy-deep/90 shadow-sm border-b border-border-subtle/50 fixed top-0 w-full z-50 flex items-center px-gutter h-20 mx-auto transition-all">
    <div className="flex items-center justify-between max-w-container-max mx-auto w-full">
      <div 
        onClick={() => setCurrentTab('plots')}
        className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight hover:scale-105 transition-transform cursor-pointer"
      >
        findmyplot
      </div>
      
      <div className="hidden md:flex flex-1 items-center justify-center">
        <ul className="flex items-center gap-10">
          <li>
            <button 
              onClick={() => setCurrentTab('plots')}
              className={`font-label-bold text-label-bold pb-1 transition-transform cursor-pointer ${
                currentTab === 'plots' 
                  ? 'text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed' 
                  : 'text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed border-b-2 border-transparent hover:scale-95'
              }`}
            >
              Plots Search
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentTab('map')}
              className={`font-label-bold text-label-bold pb-1 transition-transform cursor-pointer ${
                currentTab === 'map' 
                  ? 'text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed' 
                  : 'text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed border-b-2 border-transparent hover:scale-95'
              }`}
            >
              Map View
            </button>
          </li>
          <li>
            <a className="font-label-bold text-label-bold text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">
              Saved Filters (Soon)
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-stack-md">
        <button className="font-label-bold text-label-bold bg-primary text-on-primary px-6 py-3 rounded-xl hover:bg-primary-container hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
          Sign In
        </button>
      </div>
      
      <button className="md:hidden text-primary p-2 hover:bg-primary/10 rounded-lg transition-colors">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
      </button>
    </div>
  </nav>
);

const SearchFilterHero = () => (
  <header className="relative w-full pt-32 pb-16 flex items-center justify-center bg-navy-deep">
    <div className="absolute inset-0 z-0 opacity-40">
      <img alt="Hero Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACl7uG8YErkwNr145vWcu5fUXcjuJVYfItejf78jwXqb1-tGv26rvSM_VRnj02YmB4m_Q8axDjLfvLWtnsLIzNMuI897MFH-A_r5NQv_aIVGRKCsHj_wmORJGTujxnon-suGRgUttYO96WboM09S2d9oGs9I5Q2qXsg2vX4PK8Aa5q9r45j9USy76Yi4PoKjisuyUVJ545V3GfhGBxBBGHTIquIZ4RokMrkABg876izKeCkr1r9lpdcW_X7gOqLxgxD6NK4xCj1SY" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-background z-10"></div>
    
    <div className="relative z-20 w-full max-w-5xl mx-auto px-gutter text-center flex flex-col items-center">
      <h1 className="font-display-lg text-4xl md:text-5xl text-on-primary mb-4 leading-tight drop-shadow-lg">
        Find Your Perfect Plot in <span className="text-growth-vibrant">Diwancheruvu</span>
      </h1>
      <p className="font-body-lg text-surface-container-highest mb-10 max-w-2xl opacity-90 text-lg font-medium drop-shadow-md">
        Use the filters below to narrow down premium verified plots matching your exact requirements.
      </p>
      
      {/* Main Filter Panel */}
      <div className="glass-panel w-full rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-2xl bg-white/10 border border-white/20 transform hover:-translate-y-1 transition-transform duration-500">
        <div className="flex flex-col md:flex-row gap-4 items-center w-full">
          <div className="flex-1 w-full bg-white rounded-xl flex items-center px-5 py-4 border-2 border-transparent focus-within:border-growth-vibrant transition-all shadow-inner group">
            <span className="material-symbols-outlined text-outline group-focus-within:text-growth-vibrant mr-3 text-2xl transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
            <input className="w-full bg-transparent border-none focus:ring-0 font-body-lg text-on-background placeholder:text-outline placeholder:font-medium p-0 outline-none" placeholder="Search by plot name, ID, or location..." type="text" />
          </div>
          <button className="w-full md:w-auto bg-growth-vibrant hover:bg-secondary-fixed text-primary font-label-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-growth-vibrant/40 flex items-center justify-center gap-2 font-bold group">
            Filter Plots
            <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-4 w-full justify-center">
          {['GUDA Approved', 'East Facing', 'Near NH-16', 'Corner Plot', 'Ready to Build'].map(filter => (
            <label key={filter} className="flex items-center gap-3 px-5 py-3 border border-white/20 rounded-full bg-white/5 hover:bg-white/20 hover:border-white/40 backdrop-blur-md whitespace-nowrap cursor-pointer transition-all duration-300">
              <input className="text-growth-vibrant rounded-sm border-white/50 bg-white/10 focus:ring-growth-vibrant focus:ring-offset-0 h-4 w-4 cursor-pointer" type="checkbox" />
              <span className="font-label-bold text-on-primary font-medium tracking-wide">{filter}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  </header>
);

const PlotListings = () => {
  return (
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
          <div key={listing.id} className="group bg-surface-container-lowest border border-border-subtle rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transform hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer">
            <div className="relative h-56 overflow-hidden bg-surface-container">
              <img alt="Plot Listing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={listing.img} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {listing.badges.map(badge => (
                  <span key={badge} className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-lg font-label-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-sm font-bold border border-white/50">
                    {badge === "Drone-Verified" && <span className="material-symbols-outlined text-[14px] text-growth-vibrant" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>}
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-1 relative bg-white">
              <div className="flex justify-between items-start mb-2">
                <div className="text-primary font-headline-md text-2xl font-bold">{listing.price}</div>
                <button className="text-outline hover:text-growth-vibrant transition-colors p-1">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
                </button>
              </div>
              
              <h4 className="font-body-lg text-lg text-on-surface font-bold mb-4 line-clamp-1">{listing.title}</h4>
              
              <div className="flex gap-4 pt-4 border-t border-border-subtle/60 mt-auto bg-surface-muted -mx-5 px-5 -mb-5 pb-5">
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
};

const MapView = () => {
  // Center roughly at Diwancheruvu coordinates
  const position = [17.0425, 81.8228];

  return (
    <div className="w-full relative z-20 pt-20 h-[calc(100vh-80px)]">
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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

const Footer = () => (
  <footer className="w-full py-12 px-gutter flex flex-col items-center text-center bg-tertiary border-t border-white/10">
    <div className="text-headline-md font-bold text-on-tertiary mb-6 opacity-90">
      findmyplot
    </div>
    <div className="font-body-md text-on-tertiary opacity-60">
      © 2026 findmyplot. Filter, find, and secure your plot instantly.
    </div>
  </footer>
);

function App() {
  const [currentTab, setCurrentTab] = useState('plots');

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      {currentTab === 'plots' ? (
        <>
          <SearchFilterHero />
          <main className="flex-1 relative z-20 -mt-8 bg-background rounded-t-[2.5rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
            <PlotListings />
          </main>
          <Footer />
        </>
      ) : (
        <MapView />
      )}
    </div>
  );
}

export default App;
