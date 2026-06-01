import React from 'react';

const agentsData = [
  { id: 1, name: 'Siva Ganesh', role: 'Senior Land Expert', phone: '+91 98765 43210', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Priya Sharma', role: 'Commercial Plot Specialist', phone: '+91 98765 43211', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Rahul Verma', role: 'Residential Advisor', phone: '+91 98765 43212', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Anita Desai', role: 'Investment Consultant', phone: '+91 98765 43213', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
];

const Agents = () => {
  return (
    <div className="flex-1 pt-32 pb-20 bg-surface">
      <div className="container">
        <h1 className="title-display text-4xl mb-4 text-primary">Our Trusted Agents</h1>
        <p className="text-muted mb-12 max-w-2xl text-lg">Connect with our verified local experts who know every inch of the neighborhoods you're interested in.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agentsData.map(agent => (
            <div key={agent.id} className="group cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl mb-5 bg-surface-muted">
                <img src={agent.image} alt={agent.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="title-display text-xl font-bold text-primary">{agent.name}</h3>
              <p className="text-sm text-muted font-medium mb-2">{agent.role}</p>
              <p className="text-sm font-semibold text-primary">{agent.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Agents;
