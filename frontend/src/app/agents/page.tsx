'use client';

import React, { useState } from 'react';
import { useAuth } from '@/components/auth/AuthContext';
import { 
  Users2, 
  UserPlus, 
  Mail, 
  Phone, 
  ShieldCheck, 
  MoreHorizontal,
  Search,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const mockAgents = [
  { id: '1', name: 'Vikram Rathore', email: 'vikram@plotflow.com', phone: '+91 99999 88888', role: 'ADMIN', status: 'ACTIVE' },
  { id: '2', name: 'Anjali Gupta', email: 'anjali@plotflow.com', phone: '+91 88888 77777', role: 'AGENT', status: 'ACTIVE' },
  { id: '3', name: 'Sameer Khan', email: 'sameer@plotflow.com', phone: '+91 77777 66666', role: 'AGENT', status: 'ACTIVE' },
  { id: '4', name: 'Rahul Dev', email: 'rahul@plotflow.com', phone: '+91 66666 55555', role: 'AGENT', status: 'INACTIVE' },
];

export default function AgentsPage() {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (user?.role !== 'ADMIN') {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <ShieldCheck size={64} className="text-red-400 mb-4" />
        <h1 className="text-2xl font-bold text-slate-900">Access Restricted</h1>
        <p className="text-slate-500">Only administrators can manage agent accounts.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Staff Management</h1>
          <p className="text-slate-500 font-medium">Manage administrators and field agents</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-200"
        >
          <UserPlus size={18} />
          <span>Add New Agent</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, email or role..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm font-bold text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition">All</button>
            <button className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition">Admins</button>
            <button className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition">Agents</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Agent Details</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Joining Date</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockAgents.map((agent) => (
                <tr key={agent.id} className="hover:bg-slate-50 transition group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm border border-blue-100">
                        {agent.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{agent.name}</p>
                        <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium">
                          <Mail size={12} />
                          <span>{agent.email}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest",
                      agent.role === 'ADMIN' ? "bg-purple-50 text-purple-600 border border-purple-100" : "bg-blue-50 text-blue-600 border border-blue-100"
                    )}>
                      {agent.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1.5">
                      {agent.status === 'ACTIVE' ? (
                        <>
                          <CheckCircle2 size={16} className="text-green-500" />
                          <span className="text-sm font-bold text-slate-700">Active</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={16} className="text-slate-300" />
                          <span className="text-sm font-bold text-slate-400">Inactive</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">Jan 12, 2026</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-lg transition border border-transparent hover:border-slate-200">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Agent Modal Placeholder */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8 bg-slate-900 text-white">
              <h3 className="text-2xl font-bold">Register New Agent</h3>
              <p className="text-slate-400 text-sm mt-1">Fill in the details to create a staff account.</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Role</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none">
                  <option>AGENT</option>
                  <option>ADMIN</option>
                </select>
              </div>
              <div className="pt-4 flex space-x-3">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition">Cancel</button>
                <button className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-extrabold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
