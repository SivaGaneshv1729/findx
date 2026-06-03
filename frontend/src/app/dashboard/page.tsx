'use client';

import React from 'react';
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Activity,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Performance Overview</h1>
          <p className="text-slate-500 font-medium">Monitoring plots, leads, and bookings for <span className="text-blue-600">Green Valley Phase I</span></p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition">
            Export Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Add New Lead
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="₹4.2 Cr" 
          change="+12.5%" 
          trend="up" 
          icon={TrendingUp} 
          color="blue" 
        />
        <StatCard 
          title="Active Leads" 
          value="156" 
          change="+18.2%" 
          trend="up" 
          icon={Users} 
          color="indigo" 
        />
        <StatCard 
          title="Plots Sold" 
          value="42/120" 
          change="-2.4%" 
          trend="down" 
          icon={MapPin} 
          color="green" 
        />
        <StatCard 
          title="Site Visits" 
          value="28" 
          change="+5.1%" 
          trend="up" 
          icon={Calendar} 
          color="orange" 
        />
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities - Takes 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Activity size={20} className="text-blue-600" />
                <h2 className="text-lg font-bold text-slate-900">Recent Lead Activities</h2>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition">
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="divide-y divide-slate-100">
              <ActivityItem 
                name="Rahul Sharma" 
                action="Scheduled a site visit for Plot #42" 
                time="2 hours ago" 
                status="pending"
              />
              <ActivityItem 
                name="Priya Varma" 
                action="Completed payment for Plot #15" 
                time="5 hours ago" 
                status="completed"
              />
              <ActivityItem 
                name="Amit Singh" 
                action="Inquiry about East facing plots" 
                time="Yesterday" 
                status="new"
              />
              <ActivityItem 
                name="Suresh Kumar" 
                action="Booking cancelled for Plot #108" 
                time="2 days ago" 
                status="cancelled"
              />
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <button className="text-sm font-bold text-blue-600 hover:text-blue-700 transition">
                View All Activity
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group">
               <div className="relative z-10">
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Target Achievement</h3>
                <p className="text-3xl font-bold mb-4">78%</p>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mb-4">
                  <div className="bg-blue-500 h-full w-[78%] group-hover:bg-blue-400 transition-all duration-1000"></div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">You are on track to hit the monthly goal of <span className="text-white font-bold">50 bookings</span>.</p>
               </div>
               <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Activity size={120} />
               </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-slate-500 text-sm font-bold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                   <QuickActionButton label="Add Plot" color="blue" />
                   <QuickActionButton label="New User" color="slate" />
                   <QuickActionButton label="Assign Lead" color="indigo" />
                   <QuickActionButton label="Settings" color="slate" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar for Dashboard - Top Agents / Conversion */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
              <Users size={20} className="text-indigo-600" />
              <span>Top Agents</span>
            </h2>
            <div className="space-y-6">
              <AgentRankItem name="Vikram Rathore" score="₹1.2 Cr" rank={1} />
              <AgentRankItem name="Anjali Gupta" score="₹85 L" rank={2} />
              <AgentRankItem name="Sameer Khan" score="₹42 L" rank={3} />
            </div>
            <button className="w-full mt-8 py-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100 transition">
              View Leaderboard
            </button>
          </div>

          <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
             <h3 className="font-bold text-lg mb-2">Need Help?</h3>
             <p className="text-blue-100 text-sm mb-6">Explore our training modules for advanced map boundary tools.</p>
             <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-extrabold text-sm hover:bg-blue-50 transition shadow-md">
               Open Knowledge Base
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, trend, icon: Icon, color }: any) {
  const colorMap: any = {
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
    green: "text-green-600 bg-green-50 border-green-100",
    orange: "text-orange-600 bg-orange-50 border-orange-100",
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-3 rounded-xl border", colorMap[color])}>
          <Icon size={24} />
        </div>
        <div className={cn(
          "flex items-center text-xs font-bold px-2 py-1 rounded-full",
          trend === 'up' ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
        )}>
          {trend === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
          {change}
        </div>
      </div>
      <p className="text-slate-500 text-sm font-bold uppercase tracking-tight">{title}</p>
      <h3 className="text-2xl font-black text-slate-900 mt-1">{value}</h3>
    </div>
  );
}

function ActivityItem({ name, action, time, status }: any) {
  const statusIcons: any = {
    completed: <CheckCircle2 className="text-green-500" size={18} />,
    pending: <Clock className="text-orange-500" size={18} />,
    new: <AlertCircle className="text-blue-500" size={18} />,
    cancelled: <AlertCircle className="text-red-500" size={18} />,
  };

  return (
    <div className="p-6 flex items-start space-x-4 hover:bg-slate-50 transition">
      <div className="mt-1">{statusIcons[status]}</div>
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-900">
          <span className="font-bold">{name}</span> {action}
        </p>
        <p className="text-xs text-slate-400 mt-1 font-bold">{time}</p>
      </div>
    </div>
  );
}

function QuickActionButton({ label, color }: any) {
  return (
    <button className={cn(
      "p-3 rounded-xl border font-bold text-xs transition-all",
      color === 'blue' ? "bg-blue-600 text-white border-blue-700 hover:bg-blue-700" : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
    )}>
      {label}
    </button>
  );
}

function AgentRankItem({ name, score, rank }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
          rank === 1 ? "bg-yellow-100 text-yellow-700 border border-yellow-200" :
          rank === 2 ? "bg-slate-100 text-slate-600 border border-slate-200" :
          "bg-orange-50 text-orange-700 border border-orange-100"
        )}>
          {rank}
        </div>
        <p className="text-sm font-bold text-slate-900">{name}</p>
      </div>
      <p className="text-sm font-black text-slate-800">{score}</p>
    </div>
  );
}
