import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { AnimatePresence, motion } from 'framer-motion';

const NavBar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const tabs = [
    { to: '/', label: 'Home' },
    { to: '/map', label: 'Search' },
    { to: '/agents', label: 'Agents' },
    { to: '/join', label: 'Join' },
    { to: '/about', label: 'About' },
  ];

  if (user) {
    tabs.push({ to: '/dashboard', label: 'Dashboard' });
  }

  const handleGetStarted = () => {
    navigate(user ? '/dashboard' : '/login');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-line">
      <div className="container flex h-20 items-center justify-between gap-8">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="brand-mark flex shrink-0 items-center gap-2 text-2xl text-primary transition-transform hover:scale-[1.02]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 975 280" className="h-6 text-primary">
            <path fill="currentColor" d="M836.06 1.01c77.3 0 139.94 62.69 139.94 140C976 218.33 913.35 281 836.06 281H702.61V1.01zm-52.82 80.17v119.44h44.58a59.5 59.5 0 0 0 42.21-17.5 59.7 59.7 0 0 0-42.2-101.94z"></path>
            <path fill="currentColor" d="M595.45 183.2V1h80.14v279.99H556.68l-73.33-152.93V281H403.2V1h110.33z"></path>
            <path fill="currentColor" d="M376.19 280.99h-141l61.26-140.29L235.2 1h141v279.99Z"></path>
            <path fill="currentColor" d="M244.55 81.28H81.14v59.42h101.02v80.17H81.14v60.12H1V1h207.91z"></path>
          </svg>
        </Link>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex items-center gap-8">
            {tabs.map((tab) => (
              <li key={tab.to}>
                <NavLink
                  to={tab.to}
                  className={({ isActive }) =>
                    `relative text-[14px] font-semibold transition-all duration-200 ${
                      isActive ? 'text-primary' : 'text-muted hover:text-primary'
                    }`
                  }
                >
                  {tab.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 transition-transform duration-300 origin-right hover:scale-x-100 hover:origin-left"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-[13px] font-bold text-muted transition-colors hover:text-primary"
              >
                Sign In
              </Link>
              <button
                onClick={handleGetStarted}
                className="btn-primary py-2.5 px-6 rounded-full"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                onClick={logout}
                className="cursor-pointer text-[13px] font-bold text-red-600 transition-colors hover:text-red-700"
              >
                Logout
              </button>
              <button
                onClick={handleGetStarted}
                className="btn-primary py-2.5 px-6 rounded-full"
              >
                Dashboard
              </button>
            </>
          )}
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
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-bold text-primary"
                    >
                      Sign In
                    </Link>
                    <button
                      onClick={handleGetStarted}
                      className="btn-primary w-full max-w-xs py-4 text-base rounded-full"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="text-lg font-bold text-red-600"
                    >
                      Logout
                    </button>
                    <button
                      onClick={handleGetStarted}
                      className="btn-primary w-full max-w-xs py-4 text-base rounded-full"
                    >
                      Dashboard
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
