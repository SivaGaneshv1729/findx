import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

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
      className="section-shell flex-1 flex items-center justify-center pt-32 pb-20 lg:pt-20 lg:pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container relative z-10 max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center xl:gap-24">
          <div className="hidden lg:flex flex-col text-left">
            <div className="eyebrow mb-6">Management Portal</div>
            <h1 className="title-display text-6xl text-primary leading-tight mb-8">
              Take control of your <span className="text-accent">real estate operations.</span>
            </h1>
            <p className="text-xl text-muted font-medium leading-relaxed mb-10">
              Sign in to manage listings, verify new inventory, and keep your properties ready for buyer discovery.
            </p>
            
            <div className="grid grid-cols-2 gap-6 max-w-lg">
              <div className="rounded-2xl border border-line bg-white p-6 shadow-soft flex flex-col gap-1">
                <span className="title-display text-3xl text-accent">1</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Unified Workspace</span>
              </div>
              <div className="rounded-2xl border border-line bg-white p-6 shadow-soft flex flex-col gap-1">
                <span className="title-display text-3xl text-accent">24h</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Review Cycle</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto rounded-3xl border border-line bg-white p-10 shadow-strong sm:p-12">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="title-display text-3xl text-primary mb-2">Welcome Back</h2>
              <p className="text-muted font-medium">Please enter your details to sign in.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field-shell"
                  placeholder="dealer@example.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="field-shell"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <div className="rounded-xl bg-red-50 border border-red-100 p-4 text-center">
                  <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full py-4 text-base mt-2"
              >
                Sign In to Dashboard
              </button>

              <div className="flex justify-center items-center gap-2 mt-4 text-muted">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest">
                  Authorized Personnel Only
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
