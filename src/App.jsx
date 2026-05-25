import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// --- DATA ---
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

// --- NAVBAR ---
const NavBar = ({ currentTab, setCurrentTab }) => {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'plots', label: 'All Plots' },
    { id: 'map', label: 'Map View' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-surface/90 backdrop-blur-xl dark:bg-navy-deep/90 shadow-sm border-b border-border-subtle/50 fixed top-0 w-full z-50 flex items-center px-gutter h-20 mx-auto transition-all">
      <div className="flex items-center justify-between max-w-container-max mx-auto w-full">
        <div 
          onClick={() => setCurrentTab('home')}
          className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight hover:scale-105 transition-transform cursor-pointer"
        >
          findmyplot
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-8 lg:gap-12">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button 
                  onClick={() => setCurrentTab(tab.id)}
                  className={`font-label-bold text-label-bold pb-1 transition-all duration-300 cursor-pointer ${
                    currentTab === tab.id 
                      ? 'text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed scale-105' 
                      : 'text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed border-b-2 border-transparent hover:scale-95'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
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
};

// --- TAB 1: HOME PAGE ---
const HomeTab = ({ setCurrentTab }) => (
  <div className="w-full flex flex-col pt-16 bg-white overflow-hidden">
    {/* Hero Section */}
    <section className="w-full bg-primary pt-16 pb-24">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 opacity-0 animate-fade-in-up">
          <h1 className="font-display-lg text-5xl md:text-6xl lg:text-[72px] text-on-primary leading-[1.05] tracking-tight">
            Your home to find, <br/>our comfort achieved
          </h1>
          <p className="font-body-lg text-inverse-primary max-w-lg mt-2 opacity-0 animate-fade-in-up [animation-delay:150ms]">
            Search confidently with your trusted source of homes for sale or rent.
          </p>
          <div className="flex gap-8 items-center mt-2 opacity-0 animate-fade-in-up [animation-delay:300ms]">
             <div className="flex flex-col gap-1">
               <div className="flex gap-1 text-growth-vibrant text-sm">★★★★★</div>
               <span className="text-xs font-bold text-inverse-primary uppercase tracking-wider">Trustpilot</span>
             </div>
             <div className="flex flex-col gap-1">
               <div className="flex gap-1 text-growth-vibrant text-sm">★★★★★</div>
               <span className="text-xs font-bold text-inverse-primary uppercase tracking-wider">Google</span>
             </div>
          </div>
          <div className="flex gap-4 mt-6 opacity-0 animate-fade-in-up [animation-delay:450ms]">
            <button onClick={() => setCurrentTab('plots')} className="bg-white text-primary font-label-bold px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors shadow-lg">
              Search for plots
            </button>
            <button className="bg-transparent border-2 border-white/30 text-on-primary font-label-bold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors">
              Learn more
            </button>
          </div>
        </div>
        <div className="relative w-full h-[450px] lg:h-[550px] rounded-bl-[80px] rounded-tr-[80px] overflow-hidden shadow-2xl opacity-0 animate-scale-in [animation-delay:200ms] border-4 border-white/10">
          <img className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACl7uG8YErkwNr145vWcu5fUXcjuJVYfItejf78jwXqb1-tGv26rvSM_VRnj02YmB4m_Q8axDjLfvLWtnsLIzNMuI897MFH-A_r5NQv_aIVGRKCsHj_wmORJGTujxnon-suGRgUttYO96WboM09S2d9oGs9I5Q2qXsg2vX4PK8Aa5q9r45j9USy76Yi4PoKjisuyUVJ545V3GfhGBxBBGHTIquIZ4RokMrkABg876izKeCkr1r9lpdcW_X7gOqLxgxD6NK4xCj1SY" alt="Modern Home" />
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="w-full border-y border-border-subtle py-10 my-10 bg-surface-bright">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border-subtle/50">
        <div className="flex flex-col">
          <span className="font-display-lg text-4xl text-primary font-bold">340+</span>
          <span className="font-caption text-on-surface-variant uppercase mt-2 tracking-widest text-[10px]">Properties Sold</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display-lg text-4xl text-primary font-bold">500+</span>
          <span className="font-caption text-on-surface-variant uppercase mt-2 tracking-widest text-[10px]">Happy Clients</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display-lg text-4xl text-primary font-bold">500+</span>
          <span className="font-caption text-on-surface-variant uppercase mt-2 tracking-widest text-[10px]">Properties listed</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display-lg text-4xl text-primary font-bold">340+</span>
          <span className="font-caption text-on-surface-variant uppercase mt-2 tracking-widest text-[10px]">Awards Gained</span>
        </div>
      </div>
    </section>

    {/* Discover */}
    <section className="w-full max-w-container-max mx-auto px-gutter py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center hover-trigger group">
      <div className="w-full h-[500px] rounded-[40px] overflow-hidden shadow-xl transform transition-transform duration-700 group-hover:scale-[1.02]">
         <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0DVmrbUInv7gtZSeSra8tIwt7GOTKhCNgZhoVglRVe8dcx-EORSdMsrDca1JCTff8gVa7hxMzm-mRCQy-FCd5kHejaMTHiMvIUAkPaGQkduMSrlCVe-_HLevMUG3MqqSRryTAC0qwe8gVTocLmpXRHYx4PN3qxL5kPl2LToWpr4O0C77jaWkFEkiVrvBqGd7rcs36ocF5FDKnbTfLu8u9_B9eo9F7rM0C2NU98TDnAJ3PUfFwlkwUkskGLPrls4PK0o4b1OzNARE" alt="Building" />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="font-display-lg text-5xl text-primary leading-[1.1] tracking-tight">Discover our new <br/>way of searching</h2>
        <p className="font-body-md text-on-surface-variant max-w-md mt-4 text-lg">Thoughtfully designed layouts and transparent data make it simple to compare options and find the perfect property seamlessly.</p>
        <div className="grid grid-cols-2 gap-6 mt-6">
           <div className="flex gap-3 items-center">
             <div className="bg-surface-muted p-2 rounded-full text-primary border border-border-subtle"><span className="material-symbols-outlined text-sm">verified_user</span></div>
             <span className="font-label-bold text-sm">100% verified</span>
           </div>
           <div className="flex gap-3 items-center">
             <div className="bg-surface-muted p-2 rounded-full text-primary border border-border-subtle"><span className="material-symbols-outlined text-sm">support_agent</span></div>
             <span className="font-label-bold text-sm">24/7 Support</span>
           </div>
        </div>
        <div className="mt-8 flex gap-4">
          <button onClick={() => setCurrentTab('plots')} className="bg-primary text-on-primary font-label-bold px-8 py-4 rounded-sm hover:bg-primary-container shadow-md">Explore properties</button>
        </div>
      </div>
    </section>

    {/* Location Grids */}
    <section className="w-full bg-surface-muted/30 py-20">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col gap-12">
        <div className="text-center flex flex-col items-center">
          <h2 className="font-display-lg text-4xl text-primary mb-3 tracking-tight">Based on your location</h2>
          <p className="font-body-md text-on-surface-variant">Find the best properties near Diwancheruvu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white border border-border-subtle rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer" onClick={() => setCurrentTab('plots')}>
              <div className="h-64 bg-surface-muted relative overflow-hidden">
                 <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMckKuUjcVEaRFYX7sakFQn3DvUGY5OzCqtylQHiJBigQBuRljMfXpk23Hf4seVJuV1knracP_smq6iN7W8ZFQOaXJ1m0JoyjekFR9typtXuCUIs-0AsK2tjkhGFRYQ6SqNJLlCuAuhyx3PGuMqwuSrMzIshm5cSi7yvXH-gZZtR6q5FSMbiYf89gYod5XL0klpPpKk4F-hKUxdy-Wfb72LSXyurLtEmO8QEsbx7RLnlQ1k-sBmLn3LIaats2TwDxnG-JZRhirL-Q" alt="plot" />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded shadow-sm text-primary">FEATURED</div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="font-display-lg text-2xl tracking-tight">₹45 Lakhs</span>
                <span className="font-body-lg text-on-surface-variant font-medium">Emerald Greens Phase {i}</span>
                <div className="flex gap-6 mt-4 pt-4 border-t border-border-subtle text-sm text-on-surface-variant font-medium">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">aspect_ratio</span> 200 Sq Yds</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">explore</span> East Facing</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* App CTA */}
    <section className="w-full max-w-container-max mx-auto px-gutter py-24">
      <div className="bg-primary rounded-[40px] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-xl">
        <div className="flex flex-col gap-6 max-w-xl relative z-10">
          <h2 className="font-display-lg text-5xl text-on-primary leading-[1.1] tracking-tight">Check out findmyplot app too, don't miss it!</h2>
          <p className="font-body-md text-inverse-primary text-lg mt-2">Stay updated with real-time property listings and connect with advisors on the go.</p>
          <div className="flex gap-2 mt-6 bg-white p-2 rounded-lg shadow-sm">
             <input type="email" placeholder="Your email address" className="flex-1 px-4 rounded border-none outline-none focus:ring-0 text-primary" />
             <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-label-bold hover:bg-primary-container shadow-md transition-colors">Subscribe</button>
          </div>
        </div>
        <div className="hidden md:flex w-[280px] h-[380px] bg-white rounded-[40px] shadow-2xl relative rotate-[15deg] translate-x-10 transform-gpu z-10 flex-col p-4 border-8 border-white/10 animate-float">
           <div className="w-16 h-1.5 bg-border-subtle mx-auto rounded-full mt-2 mb-8"></div>
           <div className="flex-1 bg-surface-muted rounded-2xl p-4 flex flex-col gap-4 overflow-hidden">
             <div className="h-24 bg-primary/10 rounded-xl w-full"></div>
             <div className="h-6 bg-primary/20 rounded w-3/4"></div>
             <div className="h-4 bg-primary/10 rounded w-1/2"></div>
           </div>
        </div>
      </div>
    </section>
  </div>
);

// --- TAB 2: PLOTS FILTER ---
const SearchFilterHero = () => (
  <div className="relative w-full pt-32 pb-16 flex items-center justify-center bg-navy-deep">
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
