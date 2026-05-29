import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';

const MainLayout = () => {
    const location = useLocation();
    const isMapPage = location.pathname === '/map';

    return (
        <div className="bg-background min-h-screen flex flex-col">
            <NavBar />
            <main className={`flex-1 w-full ${isMapPage ? 'h-[calc(100vh-4rem)] pt-16' : 'pt-16'}`}>
                <AnimatePresence mode="wait">
                    <Outlet />
                </AnimatePresence>
            </main>
            {!isMapPage && <Footer />}
        </div>
    );
};

export default MainLayout;
