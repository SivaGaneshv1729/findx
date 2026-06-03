'use client';

import { useState } from 'react';
import { useAuth } from '@/components/auth/AuthContext';
import { LogIn, Shield, User } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent, role: 'ADMIN' | 'AGENT') => {
    e.preventDefault();
    // In a real app, we would verify credentials here
    login(email || 'admin@plotflow.com', role);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-8 text-center">
          <h1 className="text-3xl font-bold text-blue-400 tracking-tight">PlotFlow</h1>
          <p className="text-slate-400 mt-2">Partner & Staff Login</p>
        </div>
        
        <div className="p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="name@organization.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={(e) => handleSubmit(e, 'ADMIN')}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition shadow-lg shadow-blue-200"
              >
                <Shield size={18} />
                <span>Admin</span>
              </button>
              <button
                onClick={(e) => handleSubmit(e, 'AGENT')}
                className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-xl transition shadow-lg shadow-slate-200"
              >
                <User size={18} />
                <span>Agent</span>
              </button>
            </div>
          </form>
          
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Not a partner? <a href="/explore" className="text-blue-600 font-semibold">Explore plots here</a>
            </p>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-sm">
        &copy; 2026 PlotFlow Management System. All rights reserved.
      </p>
    </div>
  );
}
