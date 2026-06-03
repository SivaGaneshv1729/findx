import React from 'react';

const mockProjects = [
  { id: '1', name: 'Green Valley Phase I', type: 'PLOTS', status: 'ACTIVE', plots: 120, location: 'Mandal A' },
  { id: '2', name: 'Sunshine Estates', type: 'FARMLAND', status: 'UPCOMING', plots: 45, location: 'Mandal B' },
  { id: '3', name: 'Metro Heights', type: 'VILLAS', status: 'COMPLETED', plots: 80, location: 'City Center' },
];

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Create New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <div key={project.id} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-32 bg-gray-200"></div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{project.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  project.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 
                  project.status === 'UPCOMING' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{project.location}</p>
              <div className="mt-4 flex justify-between items-center text-sm">
                <span className="text-gray-600">{project.type}</span>
                <span className="font-medium">{project.plots} Plots</span>
              </div>
              <button className="w-full mt-6 text-blue-600 font-medium text-sm py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
