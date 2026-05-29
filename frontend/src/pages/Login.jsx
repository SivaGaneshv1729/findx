import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('dealer@example.com');
    const [password, setPassword] = useState('dealer123');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <motion.div 
            className="w-full pt-32 pb-16 px-gutter min-h-screen bg-white flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-md w-full bg-white p-10 rounded-[32px] shadow-2xl shadow-primary/10 border border-primary/5">
                <h2 className="text-3xl font-black text-primary mb-2 tracking-tighter text-center">Dealer Login</h2>
                <p className="text-primary/40 text-[10px] font-black uppercase tracking-widest text-center mb-10">Access your property dashboard</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">Email Address</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-b-2 border-primary/5 py-3 font-black text-primary focus:border-primary outline-none transition-colors text-sm" 
                            placeholder="dealer@example.com" 
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
                    
                    {error && <p className="text-red-500 text-[10px] font-bold uppercase text-center">{error}</p>}
                    
                    <button type="submit" className="bg-primary text-white font-black text-[11px] uppercase tracking-widest py-5 rounded-2xl hover:bg-primary/90 transition-all mt-4 shadow-xl shadow-primary/10">
                        Sign In
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Login;
