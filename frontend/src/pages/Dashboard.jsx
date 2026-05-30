import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Spinner from '../components/ui/Spinner';
import AddPlotModal from '../components/features/AddPlotModal';
import StatCard from '../components/ui/StatCard';
import { getPlots, verifyPlot, deletePlot } from '../api/plotsApi';

const Dashboard = () => {
  const { user } = useAuth();
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  const fetchPlots = () => {
    getPlots(user.token)
      .then((data) => {
        setPlots(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch plots:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user) {
      fetchPlots();
    }
  }, [user]);

  const handleVerify = (plotId) => {
    verifyPlot(plotId, user.token).then(() => {
      fetchPlots();
    }).catch(err => {
      console.error('Failed to verify plot:', err);
    });
  };

  const handleDelete = (plotId) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) {
      return;
    }
    deletePlot(plotId, user.token).then(() => {
      fetchPlots();
    }).catch(err => {
      console.error('Failed to delete plot:', err);
    });
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p- gutter">
        <Spinner />
      </div>
    );
  }

  const stats = [
    { label: 'Total Plots', value: plots.length, icon: 'analytics', colorClass: 'bg-accent' },
    { label: 'Verified', value: plots.filter((p) => p.isDroneVerified).length, icon: 'verified', colorClass: 'bg-vibrant-teal' },
    { label: 'Pending', value: plots.filter((p) => !p.isDroneVerified).length, icon: 'pending', colorClass: 'bg-vibrant-orange' },
    { label: 'Active Listings', value: plots.filter((p) => p.status === 'ACTIVE').length, icon: 'visibility', colorClass: 'bg-primary' },
  ];

  return (
    <motion.div
      className="section-shell flex-1 pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        {showAddForm && <AddPlotModal user={user} onClose={() => setShowAddForm(false)} refreshPlots={fetchPlots} />}
      </AnimatePresence>

      <div className="container relative z-10">
        <div className="rounded-3xl border border-line bg-white p-8 shadow-strong sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">
              {user?.role === 'SUPER_ADMIN' ? 'Admin Control Center' : 'Dealer Workspace'}
            </div>
            <h1 className="title-display text-4xl text-primary leading-tight sm:text-5xl">
              Cleaner <span className="text-accent">inventory oversight</span> for real estate operations.
            </h1>
            <p className="mt-6 text-muted text-lg font-medium leading-relaxed">
              Review listing quality, track verification, and keep active plots ready for buyers exploring the marketplace. Signed in as <span className="text-primary font-bold">{user?.email}</span>
            </p>
          </div>
          {user?.role === 'DEALER' && (
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-primary mt-8 lg:mt-0 py-4 px-10 text-base shrink-0"
            >
              Add New Plot
            </button>
          )}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
          <div className="flex flex-col gap-3 border-b border-line px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <span className="eyebrow">Inventory Table</span>
              <h2 className="title-display text-2xl text-primary">Recent plot pipeline</h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr className="border-b border-line bg-surface-muted">
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Listing</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Pricing</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted text-center">Verification Status</th>
                  <th className="px-8 py-5 text-right text-[10px] font-bold uppercase tracking-widest text-muted">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {plots.map((plot, idx) => (
                  <motion.tr
                    key={plot.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="transition-colors hover:bg-surface-muted/50"
                  >
                    <td className="px-8 py-6 align-middle">
                      <div className="flex flex-col">
                        <span className="title-display text-xl text-primary leading-none mb-2">{plot.title}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted leading-none">
                          PID-{String(plot.id).split('-')[0].toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 align-middle">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-primary leading-none mb-2">{plot.price}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted leading-none">
                          {plot.areaSqYds} SqYd • {plot.facing}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 align-middle text-center">
                      <div
                        className={`inline-flex items-center rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
                          plot.isDroneVerified
                            ? 'bg-vibrant-teal/10 text-vibrant-teal'
                            : 'bg-vibrant-orange/10 text-vibrant-orange'
                        }`}
                      >
                        <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${plot.isDroneVerified ? 'bg-vibrant-teal' : 'bg-vibrant-orange'}`}></span>
                        {plot.isDroneVerified ? 'Drone Verified' : 'Pending Review'}
                      </div>
                    </td>
                    <td className="px-8 py-6 align-middle text-right">
                      <div className="flex justify-end items-center gap-3">
                        {user?.role === 'SUPER_ADMIN' && !plot.isDroneVerified && (
                          <button
                            onClick={() => handleVerify(plot.id)}
                            className="btn-primary py-2 px-6 text-[11px]"
                          >
                            Verify
                          </button>
                        )}
                        {user?.role === 'DEALER' && (
                          <button
                            onClick={() => handleDelete(plot.id)}
                            className="inline-flex items-center rounded-lg border-2 border-red-100 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-red-600 hover:bg-red-50 hover:border-red-200 transition-all"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
