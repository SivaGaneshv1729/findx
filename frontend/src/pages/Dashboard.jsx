import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';

const API_BASE_URL = 'http://localhost:8080/api';

const AddPlotModal = ({ user, onClose, refreshPlots }) => {
    const [newPlot, setNewPlot] = useState({ title: '', price: '', areaSqYds: '', facing: 'East' });

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
                lat: 17.0425 + (Math.random() - 0.5) * 0.01,
                lng: 81.8228 + (Math.random() - 0.5) * 0.01
            })
        })
        .then(res => {
            if (res.ok) {
                refreshPlots();
                onClose();
            }
        });
    };

    return (
        <motion.div 
            className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="bg-white rounded-[32px] p-10 max-w-xl w-full shadow-2xl border border-primary/5">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black text-primary tracking-tight">Upload New Plot</h2>
                    <button onClick={onClose} className="text-primary/40 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <form onSubmit={handleAddPlot} className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 flex flex-col gap-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Plot Title</label>
                        <input type="text" value={newPlot.title} onChange={e => setNewPlot({ ...newPlot, title: e.target.value })} className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" placeholder="Emerald Greens Phase III" required />
                    </div>
                    {/* Add other fields here */}
                    <div className="col-span-2">
                        <button type="submit" className="w-full bg-primary text-white font-black text-[11px] uppercase tracking-widest py-5 rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/10">
                            Publish Listing
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};


const Dashboard = () => {
    const { user } = useAuth();
    const [plots, setPlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);

    const fetchPlots = () => {
        // In a real app, you might fetch only the user's plots if they are a dealer
        fetch(`${API_BASE_URL}/plots`, {
            headers: { 'Authorization': `Bearer ${user.token}` }
        })
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
        if(user) fetchPlots();
    }, [user]);

    const handleVerify = (plotId) => {
        // Verification logic
    };

    if (loading) return <div>Loading dashboard...</div>;

    return (
        <motion.div 
            className="w-full pt-24 pb-16 px-gutter min-h-screen bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {showAddForm && <AddPlotModal user={user} onClose={() => setShowAddForm(false)} refreshPlots={fetchPlots} />}
            
            <div className="max-w-container-max mx-auto">
                 <div className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="text-[42px] text-primary font-black tracking-tighter leading-tight">
                            {user?.role === 'SUPER_ADMIN' ? 'Admin Panel' : 'Dealer Dashboard'}
                        </h1>
                        <p className="text-primary/40 text-[10px] font-black uppercase tracking-widest mt-2">
                            Welcome back, {user.email}
                        </p>
                    </div>
                    {user?.role === 'DEALER' && (
                        <button 
                        onClick={() => setShowAddForm(true)}
                        className="bg-primary text-white font-black text-[11px] uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/10 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            Add New Plot
                        </button>
                    )}
                </div>
                {/* Render plots list */}
            </div>
        </motion.div>
    );
};

export default Dashboard;
