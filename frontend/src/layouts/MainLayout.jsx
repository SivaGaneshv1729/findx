import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const MainLayout = () => {
  const location = useLocation();
  const isMapPage = location.pathname === '/map';

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      {!isMapPage && <Footer />}
    </div>
  );
};

export default MainLayout;
