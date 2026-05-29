import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const NavBar = () => {
  const { user, logout } = useAuth();

  const tabs = [
    { to: '/', label: 'Discover' },
    { to: '/map', label: 'Map View' },
    { to: '/contact', label: 'Contact' },
  ];

  if (user) {
    tabs.push({ to: '/dashboard', label: 'Dashboard' });
  }

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-primary/5 fixed top-0 w-full z-50 h-16 transition-all flex items-center">
      <div className="flex items-center justify-between max-w-container-max mx-auto w-full px-gutter h-full">
        <Link 
          to="/"
          className="text-xl font-black text-primary tracking-tighter hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1"
        >
          findmyplot<span className="text-primary/20">.</span>
        </Link>
        
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-8">
            {tabs.map((tab) => (
              <li key={tab.to}>
                <NavLink 
                  to={tab.to}
                  className={({ isActive }) => 
                    `text-[11px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer relative py-1 ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-primary/40 hover:text-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {tab.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-scale-in"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {!user ? (
            <Link 
              to="/login"
              className="text-primary font-black text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              Login
            </Link>
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

export default NavBar;
