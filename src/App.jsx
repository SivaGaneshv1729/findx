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

// --- FIGMA REPLICA COMPONENTS ---

const FigmaHero = ({ setCurrentTab }) => (
  <section className="w-full bg-gradient-to-br from-[#E0F2FE] via-[#F3E8FF] to-[#FCE7F3] pt-24 pb-0 overflow-hidden relative">
    {/* Ambient decorative blur orbs */}
    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/30 rounded-full blur-[80px]"></div>
    <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"></div>
    
    <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
      <div className="flex flex-col gap-6 pb-24">
        <h1 className="font-display-lg text-[64px] leading-[1.05] tracking-tight text-[#1A2530] drop-shadow-sm">
          Your home to find, our comfort achieved
        </h1>
        <p className="font-body-md text-[#475569] max-w-md mt-2 leading-relaxed">
          Search confidently with your trusted source of homes for sale or rent.
        </p>
        
        <div className="flex gap-8 items-center mt-4 bg-white/40 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-lg w-fit">
           <div className="flex flex-col gap-1">
             <div className="flex gap-1 text-[#6366F1] text-[10px]">★★★★★</div>
             <span className="text-[10px] font-bold text-[#475569] tracking-wide">Trustpilot</span>
           </div>
           <div className="flex flex-col gap-1">
             <div className="flex gap-1 text-[#6366F1] text-[10px]">★★★★★</div>
             <span className="text-[10px] font-bold text-[#475569] tracking-wide">Google</span>
           </div>
        </div>
        
        <div className="flex gap-4 mt-8">
          <button onClick={() => setCurrentTab('plots')} className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white font-label-bold text-xs px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            Search for real estate
          </button>
          <button className="bg-white/50 backdrop-blur-md border border-white text-[#1A2530] font-label-bold text-xs px-8 py-4 rounded-full hover:bg-white/80 transition-all shadow-sm">
            Learn more
          </button>
        </div>
      </div>
      
      <div className="relative w-full h-[600px] flex justify-center items-center">
        <img className="absolute w-[120%] max-w-none object-contain drop-shadow-2xl animate-float" src="/images/3d_hero.png" alt="3D Floating Island" />
        <div className="absolute bottom-12 right-12 bg-white/70 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/80 text-xs font-bold text-[#1A2530] flex items-center gap-2 animate-bounce-slow">
          Discover properties <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </div>
      </div>
    </div>
  </section>
);

const FigmaStats = () => (
  <section className="w-full bg-white py-12 border-b border-[#F1F5F9]">
    <div className="max-w-[1000px] mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#1A2530]">
      <div className="flex flex-col">
        <span className="font-display-lg text-3xl font-bold">340+</span>
        <span className="font-caption text-[#64748B] text-[10px] mt-2">Visits over the last week</span>
      </div>
      <div className="flex flex-col">
        <span className="font-display-lg text-3xl font-bold">500+</span>
        <span className="font-caption text-[#64748B] text-[10px] mt-2">Properties listed for sale</span>
      </div>
      <div className="flex flex-col">
        <span className="font-display-lg text-3xl font-bold">500+</span>
        <span className="font-caption text-[#64748B] text-[10px] mt-2">Properties listed for rent</span>
      </div>
      <div className="flex flex-col">
        <span className="font-display-lg text-3xl font-bold">340+</span>
        <span className="font-caption text-[#64748B] text-[10px] mt-2">Satisfied clients over all</span>
      </div>
    </div>
  </section>
);

const FigmaDiscover = () => (
  <section className="w-full max-w-container-max mx-auto px-gutter py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div className="w-full relative flex justify-center items-center">
       <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[100px]"></div>
       <img className="w-full h-auto object-contain drop-shadow-2xl animate-float relative z-10" src="/images/3d_discover.png" alt="3D Map Map" style={{ animationDelay: '1s' }} />
    </div>
    <div className="flex flex-col gap-6 pl-0 lg:pl-10 relative z-10">
      <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-bold text-[10px] rounded-full tracking-widest uppercase w-fit">Next-Gen Search</div>
      <h2 className="font-display-lg text-[44px] text-[#1A2530] leading-[1.1] tracking-tight max-w-sm">Discover our new way of searching</h2>
      <p className="font-body-md text-[#475569] max-w-sm mt-2 text-sm leading-relaxed">
        Experience real estate exploration in stunning 3D. Thoughtfully designed interactive layouts make it simple to compare options.
      </p>
      
      <div className="flex gap-6 mt-4">
         <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-3 rounded-xl border border-white/60 shadow-sm">
           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white shadow-lg">
             <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
           </div>
           <span className="font-label-bold text-xs text-[#1A2530]">3D Previews</span>
         </div>
         <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-3 rounded-xl border border-white/60 shadow-sm">
           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white shadow-lg">
             <span className="material-symbols-outlined text-[16px]">verified_user</span>
           </div>
           <span className="font-label-bold text-xs text-[#1A2530]">Verified Lands</span>
         </div>
      </div>
    </div>
  </section>
);

const FigmaPropertyCard = ({ price, title, location, img, isNew }) => (
  <div className="flex flex-col gap-4 group cursor-pointer bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] transition-all duration-500 hover:-translate-y-2 relative">
    <div className="relative w-full h-64 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-t from-slate-100 to-white">
      <img className="w-[85%] h-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-xl" src={img} alt={title} />
      {isNew && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
          Featured
        </div>
      )}
      <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md p-2 rounded-full text-pink-500 flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-[16px] font-bold">favorite</span>
      </div>
    </div>
    
    <div className="flex flex-col gap-1 px-2">
      <h3 className="font-display-lg text-2xl text-[#1A2530] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A2530] to-[#6366F1]">{price}</h3>
      <p className="font-label-bold text-[#1A2530] text-[15px] mt-1 leading-tight">{title}</p>
      <p className="font-body-md text-[#64748B] text-xs flex items-center gap-1 mt-1"><span className="material-symbols-outlined text-[14px]">location_on</span>{location}</p>
    </div>
  </div>
);

const FigmaLocationGrid = ({ title, subtitle }) => (
  <section className="w-full py-20 bg-white relative">
    {/* Background styling for grid section */}
    <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FAFC]"></div>
    
    <div className="max-w-[1100px] mx-auto px-gutter flex flex-col gap-12 relative z-10">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-display-lg text-[40px] text-[#1A2530] font-bold">{title}</h2>
        <p className="font-body-md text-[#64748B] text-sm mt-2 max-w-md">{subtitle}</p>
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
  <section className="w-full bg-[#1A2530] py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-[120px]"></div>
    
    <div className="max-w-[1000px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
      <div className="flex flex-col gap-6 max-w-md">
        <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-md text-white font-bold text-[10px] rounded-full uppercase tracking-widest border border-white/20 w-fit">Mobile App</div>
        <h2 className="font-display-lg text-[48px] text-white leading-[1.1] tracking-tight">
          Experience FindMyPlot in 3D on your phone.
        </h2>
        <p className="font-body-md text-[#CBD5E1] text-[15px] leading-relaxed">
          Navigate immersive 3D maps and explore verified real estate plots seamlessly from anywhere.
        </p>
        
        <div className="flex gap-4 mt-4">
           <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white flex items-center gap-3 px-5 py-3 rounded-2xl transition-all shadow-lg">
             <span className="material-symbols-outlined text-[28px]">apple</span>
             <div className="flex flex-col text-left">
               <span className="text-[9px] uppercase tracking-wider text-slate-300">Download on the</span>
               <span className="text-sm font-bold leading-none">App Store</span>
             </div>
           </button>
        </div>
      </div>
      
      <div className="relative w-[300px] h-[400px] hidden md:block">
        <div className="absolute right-4 top-0 w-[200px] h-[400px] bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-[32px] rotate-[-5deg] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-4 border-white/20 z-10 flex flex-col p-2 animate-float">
          <div className="w-20 h-5 bg-black rounded-full mx-auto mt-2"></div>
          <div className="flex-1 bg-white/20 backdrop-blur-md mt-4 rounded-xl border border-white/20 m-2 flex flex-col gap-3 p-3">
             <div className="w-full h-24 bg-white/30 rounded-lg"></div>
             <div className="w-3/4 h-4 bg-white/40 rounded-full"></div>
             <div className="w-1/2 h-4 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FigmaTestimonialCard = ({ quote, author }) => (
  <div className="bg-[#F8FAFC] p-8 rounded flex flex-col gap-4">
    <div className="text-[#CBD5E1]">
      <span className="font-display-lg text-5xl">"</span>
    </div>
    <h4 className="font-label-bold text-[#1A2530] text-sm">{author}</h4>
    <p className="font-body-md text-[#64748B] text-xs leading-relaxed flex-1">
      "{quote}"
    </p>
    <div className="flex gap-1 text-[#1A2530] text-xs mt-2">
      ★★★★★
    </div>
  </div>
);

const FigmaTestimonials = () => (
  <section className="w-full py-24 bg-white">
    <div className="max-w-[1100px] mx-auto px-gutter flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-display-lg text-[32px] text-[#1A2530] font-bold">Our testimonials</h2>
        <p className="font-body-md text-[#64748B] text-sm">See what our clients have to say.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FigmaTestimonialCard 
          author="Great experience!" 
          quote="One of the best real estate agents I've worked with. He knew everything about the local market and helped me find a great property for an incredible price. Will totally recommend to friends and family."
        />
        <FigmaTestimonialCard 
          author="Great selection!" 
          quote="I was looking for an apartment for a while, but most agents I contacted just tried to sell me anything. Homerenters actually listened to my requirements and found the perfect spot in just a few days."
        />
        <FigmaTestimonialCard 
          author="Highly recommend" 
          quote="After a few bad experiences with other real estate agents, I am glad I found Homerenters. They are very transparent and supportive throughout the whole process."
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
