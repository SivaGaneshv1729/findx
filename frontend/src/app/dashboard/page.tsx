'use client';

import React, { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  Calendar, 
  ArrowRight,
  Activity,
  ChevronRight,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    revenue: '₹0',
    leads: 0,
    sold: '0/0',
    visits: 0
  });
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [propsRes, leadsRes, bookingsRes] = await Promise.all([
          fetch(`${API_URL}/properties`),
          fetch(`${API_URL}/leads`),
          fetch(`${API_URL}/bookings`)
        ]);

        const propertiesData = await propsRes.json();
        const leadsData = await leadsRes.json();
        const bookingsData = await bookingsRes.json();

        const properties = Array.isArray(propertiesData) ? propertiesData : [];
        const leads = Array.isArray(leadsData) ? leadsData : [];
        const bookings = Array.isArray(bookingsData) ? bookingsData : [];

        const totalRevenue = bookings.reduce((acc: number, b: any) => acc + Number(b.bookingAmount || 0), 0);
        const soldCount = properties.filter((p: any) => p.status === 'SOLD').length;

        setStats({
          revenue: `₹${(totalRevenue / 10000000).toFixed(1)} Cr`,
          leads: leads.length,
          sold: `${soldCount}/${properties.length}`,
          visits: 0 
        });

        const recentLeads = leads.slice(0, 5).map((l: any) => ({
          name: l.name,
          action: `Inquired about ${l.property?.title || 'a property'}`,
          time: new Date(l.createdAt).toLocaleDateString(),
          status: 'new'
        }));
        setActivities(recentLeads);

      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#151717]">
      <Navbar />

      <main className="pt-[10rem] pb-20 px-[2.5rem] md:px-[10rem]">
        <div className="mx-auto max-w-[192rem]">
          {/* Header Section */}
          <div className="mb-[6rem] flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[1.2rem] uppercase tracking-[0.34em] text-[#8b8b8b]">Agent Dashboard</p>
              <h1 className="mt-4 text-[5.6rem] font-medium leading-[0.95] tracking-[-0.05em] md:text-[8rem]">
                Overview.
              </h1>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => window.location.href = '/leads'}
                className="find-button inline-flex items-center justify-center rounded-full bg-[#151717] px-[3rem] py-[1.54rem] text-[1.6rem] font-medium text-white transition hover:scale-x-[1.02]"
              >
                <span className="find-button-text">
                  <span data-text="New Lead">New Lead</span>
                </span>
                <Plus size={18} className="ml-2" />
              </button>
            </div>
          </div>

          <div className="grid gap-[3rem] lg:grid-cols-[1.1fr_0.9fr]">
            {/* Stats Grid */}
            <div className="space-y-[3rem]">
              <div className="grid gap-[1px] bg-black/10 md:grid-cols-2">
                <StatCard 
                  title="Total Revenue" 
                  value={stats.revenue} 
                  label="Confirmed Bookings"
                  icon={TrendingUp} 
                />
                <StatCard 
                  title="Active Leads" 
                  value={stats.leads.toString()} 
                  label="Qualified Inquiries"
                  icon={Users} 
                />
                <StatCard 
                  title="Inventory" 
                  value={stats.sold} 
                  label="Plots Sold / Total"
                  icon={MapPin} 
                />
                <StatCard 
                  title="Site Visits" 
                  value={stats.visits.toString()} 
                  label="Scheduled This Month"
                  icon={Calendar} 
                />
              </div>

              {/* Insights Card */}
              <div className="bg-[#151717] p-[4rem] text-white">
                <p className="text-[1.2rem] uppercase tracking-[0.32em] text-[#b3b3b3]">Performance</p>
                <h2 className="mt-4 text-[4rem] font-medium leading-none tracking-[-0.04em]">
                  You&apos;re at 78% of your monthly goal.
                </h2>
                <div className="mt-10 h-[1px] w-full bg-white/10" />
                <div className="mt-10 grid gap-10 md:grid-cols-2">
                  <div>
                    <p className="text-[1.4rem] text-[#ededed] leading-[1.5]">
                      High demand in the Tellapur corridor is driving lead volume. Focus on plot-specific follow-ups to close the gap.
                    </p>
                  </div>
                  <div className="flex items-end justify-end">
                    <Link href="/leads" className="inline-flex items-center gap-2 text-[1.4rem] uppercase tracking-[0.24em] text-white">
                      View full report <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities & Feed */}
            <div className="space-y-[3rem]">
              <div className="border border-black/10 bg-white p-[4rem]">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-[1.2rem] uppercase tracking-[0.34em] text-[#8b8b8b]">Recent Feed</p>
                  <Activity size={18} className="text-[#8b8b8b]" />
                </div>
                
                <div className="space-y-[2.4rem]">
                  {activities.length > 0 ? activities.map((act, i) => (
                    <div key={i} className="group flex items-center justify-between border-b border-black/5 pb-[2.4rem] last:border-0 last:pb-0">
                      <div>
                        <p className="text-[1.8rem] font-medium text-[#151717]">{act.name}</p>
                        <p className="mt-1 text-[1.4rem] text-[#6e6e6e]">{act.action}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[1.2rem] text-[#8b8b8b] uppercase tracking-wider">{act.time}</p>
                        <ChevronRight size={16} className="mt-2 ml-auto text-[#8b8b8b] transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  )) : (
                    <div className="py-10 text-center text-[#8b8b8b]">No recent activity</div>
                  )}
                </div>

                <button 
                  onClick={() => window.location.href = '/leads'}
                  className="mt-10 w-full rounded-full border border-black/10 py-4 text-[1.4rem] font-medium uppercase tracking-[0.2em] transition hover:bg-[#151717] hover:text-white"
                >
                  View All Leads
                </button>
              </div>

              {/* Top Agents Ranking */}
              <div className="border border-black/10 bg-white p-[4rem]">
                <p className="text-[1.2rem] uppercase tracking-[0.34em] text-[#8b8b8b] mb-8">Top Performance</p>
                <div className="space-y-6">
                  <AgentRankItem name="Vikram Rathore" score="₹1.2 Cr" rank={1} />
                  <AgentRankItem name="Anjali Gupta" score="₹85 L" rank={2} />
                  <AgentRankItem name="Sameer Khan" score="₹42 L" rank={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, label, icon: Icon }: any) {
  return (
    <div className="bg-white p-[4rem] group transition hover:bg-[#f9f9f9]">
      <div className="flex justify-between items-start mb-6">
        <Icon size={24} strokeWidth={1.5} className="text-[#8b8b8b] group-hover:text-[#151717] transition-colors" />
        <span className="h-2 w-2 rounded-full bg-green-500" />
      </div>
      <p className="text-[1.2rem] uppercase tracking-[0.28em] text-[#8b8b8b]">{title}</p>
      <h3 className="mt-3 text-[4.4rem] font-medium tracking-[-0.04em] text-[#151717] leading-none">{value}</h3>
      <p className="mt-4 text-[1.4rem] text-[#6e6e6e]">{label}</p>
    </div>
  );
}

function AgentRankItem({ name, score, rank }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <span className="text-[1.4rem] font-medium text-[#8b8b8b] w-4">{rank}</span>
        <p className="text-[1.8rem] font-medium text-[#151717]">{name}</p>
      </div>
      <p className="text-[1.8rem] font-semibold text-[#151717]">{score}</p>
    </div>
  );
}
