'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { User as SupabaseUser } from '@supabase/supabase-js';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'AGENT';
} | null;

interface AuthContextType {
  user: User;
  login: (email: string, password?: string, role?: 'ADMIN' | 'AGENT') => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check active sessions and sets the user
    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (session) {
          handleUser(session.user);
        }
      } catch (err) {
        console.error('Supabase auth session error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    getSession();

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        handleUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleUser = (supabaseUser: SupabaseUser) => {
    const mappedUser: User = {
      id: supabaseUser.id,
      name: supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0] || 'User',
      email: supabaseUser.email || '',
      role: (supabaseUser.user_metadata?.role as 'ADMIN' | 'AGENT') || 'AGENT',
    };
    setUser(mappedUser);
  };

  const login = async (email: string, password?: string, role?: 'ADMIN' | 'AGENT') => {
    // Direct Access (Dev Mode) Logic
    if (email === 'admin@plotflow.com' && !password) {
      const mockUser: User = { id: 'dev-admin', name: 'Admin', email, role: role || 'ADMIN' };
      setUser(mockUser);
      router.push('/dashboard');
      return;
    }

    if (!password) {
      throw new Error('Password is required for live authentication');
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      handleUser(data.user);
      router.push('/dashboard');
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
