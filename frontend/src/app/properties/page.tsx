import React from 'react';

const mockProperties = [
  { id: '1', code: 'GV-001', title: 'Premium Corner Plot', project: 'Green Valley', status: 'AVAILABLE', area: '200 SqYd', price: '₹40,00,000' },
  { id: '2', code: 'GV-002', title: 'East Facing Residential', project: 'Green Valley', status: 'BOOKED', area: '150 SqYd', price: '₹30,00,000' },
  { id: '3', code: 'SE-010', title: 'Large Farmland', project: 'Sunshine Estates', status: 'AVAILABLE', area: '2.5 Acres', price: '₹1,20,00,000' },
  { id: '4', code: 'MH-105', title: 'Villa Plot - Block A', project: 'Metro Heights', status: 'SOLD', area: '300 SqYd', price: '₹75,00,000' },
];

export default function PropertiesPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Properties (Plots)</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add New Plot
        </button>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockProperties.map((prop) => (
              <tr key={prop.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{prop.code}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prop.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prop.project}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prop.area}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{prop.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    prop.status === 'AVAILABLE' ? 'bg-green-100 text-green-800' :
                    prop.status === 'BOOKED' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {prop.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                  <button className="text-gray-600 hover:text-gray-900">Map</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
