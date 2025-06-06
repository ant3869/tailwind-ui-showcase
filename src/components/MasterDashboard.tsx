import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1000 },
];

const barData = [
  { name: 'Q1', value: 540 },
  { name: 'Q2', value: 620 },
  { name: 'Q3', value: 740 },
  { name: 'Q4', value: 880 },
];

const MasterDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <h3 className="text-sm text-gray-400">Total Revenue</h3>
          <p className="text-2xl font-bold">$45,231</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <h3 className="text-sm text-gray-400">New Customers</h3>
          <p className="text-2xl font-bold">2,340</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <h3 className="text-sm text-gray-400">Active Sessions</h3>
          <p className="text-2xl font-bold">1,893</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <h3 className="text-sm text-gray-400">Conversion Rate</h3>
          <p className="text-2xl font-bold">5.43%</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="mb-2 font-semibold">Sales</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-700" />
                <XAxis dataKey="name" className="text-gray-400" />
                <YAxis className="text-gray-400" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="mb-2 font-semibold">Quarterly Profits</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-700" />
                <XAxis dataKey="name" className="text-gray-400" />
                <YAxis className="text-gray-400" />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterDashboard;
