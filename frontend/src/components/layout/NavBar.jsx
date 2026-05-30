import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { AnimatePresence, motion } from 'framer-motion';

const NavBar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const tabs = [
    { to: '/', label: 'Discover' },
    { to: '/map', label: 'Map View' },
    { to: '/contact', label: 'Contact' },
  ];

  if (user) {
    tabs.push({ to: '/dashboard', label: 'Dashboard' });
  }

  const handleGetStarted = () => {
    navigate(user ? '/dashboard' : '/login');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full glass !border-t-0 !border-x-0">
      <div className="container flex h-20 items-center justify-between gap-8">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="brand-mark flex shrink-0 items-center gap-2 text-2xl text-primary transition-transform hover:scale-[1.02]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-black text-white shadow-md shadow-accent/20">
            FP
          </span>
          <span>
            findmyplot<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex items-center gap-2">
            {tabs.map((tab) => (
              <li key={tab.to}>
                <NavLink
                  to={tab.to}
                  className={({ isActive }) =>
                    `inline-flex items-center rounded-lg px-5 py-2 text-[13px] font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-accent text-white shadow-sm'
                        : 'text-muted hover:text-primary hover:bg-surface-muted'
                    }`
                  }
                >
                  {tab.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          {!user ? (
            <Link
              to="/login"
              className="text-[13px] font-bold text-muted transition-colors hover:text-primary"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer text-[13px] font-bold text-red-600 transition-colors hover:text-red-700"
            >
              Logout
            </button>
          )}
          <button
            onClick={handleGetStarted}
            className="btn-primary py-2.5 px-6"
          >
            {user ? 'Dashboard' : 'Get Started'}
          </button>
        </div>

        <button
          className="rounded-xl border border-line bg-white p-2.5 text-primary lg:hidden transition-colors hover:bg-surface-muted"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined block text-[24px]">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-line bg-white lg:hidden overflow-hidden"
          >
            <div className="container py-8 flex flex-col gap-8 items-center text-center">
              <ul className="flex flex-col gap-6 w-full">
                {tabs.map((tab) => (
                  <li key={tab.to}>
                    <NavLink
                      to={tab.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block text-xl font-bold transition-colors ${
                          isActive ? 'text-accent' : 'text-primary'
                        }`
                      }
                    >
                      {tab.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="h-px w-full bg-line"></div>
              <div className="flex flex-col gap-6 w-full items-center">
                {!user ? (
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold text-primary"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="text-lg font-bold text-red-600"
                  >
                    Logout
                  </button>
                )}
                <button
                  onClick={handleGetStarted}
                  className="btn-primary w-full max-w-xs py-4 text-base"
                >
                  {user ? 'Dashboard' : 'Get Started'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
