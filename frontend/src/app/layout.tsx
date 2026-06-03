'use client';

import { useAuth, AuthProvider } from '@/components/auth/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  Users2, 
  Settings, 
  TrendingUp, 
  BookOpenCheck, 
  CalendarCheck,
  LogOut,
  Menu,
  X,
  UserCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ["latin"] });

function NavigationContent({ children }: { children: React.ReactNode }) {
  const { user, logout, isLoading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Pages that don't show the dashboard sidebar (public view and login)
  const isPublicPage = pathname === '/' || pathname === '/login' || pathname === '/explore';

  // Basic Route Protection
  useEffect(() => {
    if (!isLoading && !user && !isPublicPage) {
      router.push('/login');
    }
  }, [user, isLoading, isPublicPage, router]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  if (isPublicPage) {
    return <main className="min-h-screen">{children}</main>;
  }

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/projects", icon: BookOpenCheck },
    { name: "Properties", href: "/properties", icon: MapPin },
    { name: "Leads", href: "/leads", icon: Users },
    { name: "Site Visits", href: "/site-visits", icon: CalendarCheck },
    { name: "Bookings", href: "/bookings", icon: TrendingUp },
    { name: "Agents", href: "/agents", icon: Users2, adminOnly: true },
    { name: "Analytics", href: "/analytics", icon: TrendingUp },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const filteredNavItems = navItems.filter(item => !item.adminOnly || user?.role === 'ADMIN');

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-72 bg-slate-900 text-white flex-col sticky top-0 h-screen shadow-2xl">
        <div className="p-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-900/50">P</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">PlotFlow</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">Real Estate SaaS</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 mt-4 px-4 overflow-y-auto custom-scrollbar">
          <ul className="space-y-1.5">
            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group",
                      isActive 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    )}
                  >
                    <Icon size={20} className={cn(isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400")} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 mt-auto border-t border-slate-800 bg-slate-900/50">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 font-bold border-2 border-slate-600">
              {user?.name?.[0].toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{user?.name || 'User'}</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{user?.role || 'Guest'}</p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-slate-800 hover:bg-red-900/30 hover:text-red-400 text-slate-300 rounded-xl transition-all duration-300 font-bold text-xs uppercase tracking-widest"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 lg:px-8 py-4 flex justify-between items-center sticky top-0 z-40">
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="ml-3 text-xl font-bold text-slate-900">PlotFlow</h1>
          </div>
          
          <div className="hidden lg:block">
            <h2 className="text-lg font-bold text-slate-800 capitalize">
              {pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Organization</span>
              <span className="text-sm font-bold text-slate-900">Green Valley Ventures</span>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                <UserCircle size={20} />
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <aside className="w-64 h-full bg-slate-900 flex flex-col" onClick={e => e.stopPropagation()}>
            {/* Mobile Nav Content Same as Desktop */}
            <div className="p-6">
              <h1 className="text-xl font-bold text-blue-400">PlotFlow</h1>
            </div>
            <nav className="flex-1 px-4">
               <ul className="space-y-1">
                {filteredNavItems.map((item) => (
                   <li key={item.name}>
                   <Link
                     href={item.href}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className={cn(
                       "flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-xl transition-all",
                       pathname === item.href ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                     )}
                   >
                     <item.icon size={18} />
                     <span>{item.name}</span>
                   </Link>
                 </li>
                ))}
               </ul>
            </nav>
            <div className="p-6 border-t border-slate-800">
              <button onClick={logout} className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-800 text-white rounded-xl">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavigationContent>{children}</NavigationContent>
        </AuthProvider>
      </body>
    </html>
  );
}
