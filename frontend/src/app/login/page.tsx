'use client';

import { useState } from 'react';
import { useAuth } from '@/components/auth/AuthContext';
import { LogIn, Shield, User, Home, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent | null, role: 'ADMIN' | 'AGENT') => {
    if (e) e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    try {
      await login(email, password, role);
    } catch (err: any) {
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectAccess = async () => {
    setIsSubmitting(true);
    try {
      await login('admin@plotflow.com', undefined, 'ADMIN');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative">
      {/* Back to Home */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center space-x-2 text-slate-500 hover:text-blue-600 transition font-bold"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-8 text-center">
          <h1 className="text-3xl font-bold text-blue-400 tracking-tight">PlotFlow</h1>
          <p className="text-slate-400 mt-2">Partner & Staff Login</p>
        </div>
        
        <div className="p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold rounded-xl animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          {/* Direct Access Button for Development */}
          <button
            onClick={handleDirectAccess}
            disabled={isSubmitting}
            className="w-full mb-8 flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-4 rounded-xl transition shadow-xl shadow-blue-200 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Zap size={20} className="fill-white group-hover:scale-125 transition-transform" />
            <span>Direct Access (Dev Mode)</span>
          </button>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase font-bold">
              <span className="bg-white px-4 text-slate-400">Or use credentials</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => handleSubmit(e, 'AGENT')}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
              <input
                type="email"
                value={email}
                required
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
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={(e) => handleSubmit(null, 'ADMIN')}
                className="flex items-center justify-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-4 rounded-xl transition disabled:opacity-50"
              >
                <Shield size={18} />
                <span>Admin Login</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl transition disabled:opacity-50"
              >
                <User size={18} />
                <span>Agent Login</span>
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
