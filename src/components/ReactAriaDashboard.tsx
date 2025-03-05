import React, { useState } from 'react';
import { LineChart, BarChart, PieChart, Area, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Pie } from 'recharts';

// Sample data for charts
const salesData = [
  { month: 'Jan', sales: 4000, profit: 2400 },
  { month: 'Feb', sales: 3000, profit: 1398 },
  { month: 'Mar', sales: 2000, profit: 9800 },
  { month: 'Apr', sales: 2780, profit: 3908 },
  { month: 'May', sales: 1890, profit: 4800 },
  { month: 'Jun', sales: 2390, profit: 3800 },
  { month: 'Jul', sales: 3490, profit: 4300 },
];

const performanceData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Custom Button component using standard React
function Button(props) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}
      onClick={props.onPress || props.onClick}
    >
      {props.children}
    </button>
  );
}

// Custom Toggle component using standard React
function Toggle(props) {
  const [isSelected, setIsSelected] = useState(props.defaultSelected || false);
  
  const handleClick = () => {
    const newValue = !isSelected;
    setIsSelected(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };
  
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={`w-12 h-6 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isSelected ? 'bg-blue-600' : 'bg-gray-400'
      }`}
      onClick={handleClick}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
          isSelected ? 'translate-x-6' : ''
        }`}
      />
    </button>
  );
}

const ReactAriaDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">React Aria Dashboard</h1>
            <nav className="ml-8">
              <ul className="flex space-x-4">
                <li>
                  <Button 
                    className={`${activeTab === 'dashboard' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                    onClick={() => setActiveTab('dashboard')}
                  >
                    Dashboard
                  </Button>
                </li>
                <li>
                  <Button 
                    className={`${activeTab === 'analytics' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                    onClick={() => setActiveTab('analytics')}
                  >
                    Analytics
                  </Button>
                </li>
                <li>
                  <Button 
                    className={`${activeTab === 'settings' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                    onClick={() => setActiveTab('settings')}
                  >
                    Settings
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              New Report
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-gray-400 text-sm">Total Revenue</h3>
            <p className="text-2xl font-bold mt-2">$54,239</p>
            <p className="text-green-500 text-sm mt-2">↑ 12% from last month</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-gray-400 text-sm">New Customers</h3>
            <p className="text-2xl font-bold mt-2">861</p>
            <p className="text-green-500 text-sm mt-2">↑ 4.6% from last month</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-gray-400 text-sm">Active Sessions</h3>
            <p className="text-2xl font-bold mt-2">2,345</p>
            <p className="text-red-500 text-sm mt-2">↓ 2.3% from last month</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-gray-400 text-sm">Conversion Rate</h3>
            <p className="text-2xl font-bold mt-2">5.43%</p>
            <p className="text-green-500 text-sm mt-2">↑ 1.2% from last month</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Line Chart */}
          <div className="md:col-span-2 bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Revenue Overview</h2>
              <div className="flex items-center space-x-2">
                <Toggle aria-label="Toggle chart view" />
                <span className="text-sm text-gray-400">Show profit</span>
              </div>
            </div>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={salesData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Revenue Distribution</h2>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Performance</h2>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-sm"
              onClick={() => {}}
            >
              View All
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">#1342</td>
                  <td className="px-6 py-4 whitespace-nowrap">John Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap">Purchased Premium Plan</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">Completed</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-05-12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-xs mr-2"
                      onClick={() => {}}
                    >
                      View
                    </Button>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-xs"
                      onClick={() => {}}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">#1341</td>
                  <td className="px-6 py-4 whitespace-nowrap">Alice Johnson</td>
                  <td className="px-6 py-4 whitespace-nowrap">Updated Profile</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900 text-yellow-300">Pending</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-05-11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-xs mr-2"
                      onClick={() => {}}
                    >
                      View
                    </Button>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-xs"
                      onClick={() => {}}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">#1340</td>
                  <td className="px-6 py-4 whitespace-nowrap">Robert Davis</td>
                  <td className="px-6 py-4 whitespace-nowrap">Canceled Subscription</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900 text-red-300">Canceled</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-05-10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-xs mr-2"
                      onClick={() => {}}
                    >
                      View
                    </Button>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-xs"
                      onClick={() => {}}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-gray-800 rounded-lg shadow-lg z-10 max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Create New Report</h3>
              <button 
                className="text-gray-400 hover:text-white focus:outline-none"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">Report Title</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter report title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">Report Type</label>
                <select className="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sales Report</option>
                  <option>Customer Analysis</option>
                  <option>Performance Metrics</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">Date Range</label>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    className="bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="date" 
                    className="bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="bg-gray-700 text-blue-600 rounded focus:ring-blue-500 h-4 w-4"
                  />
                  <span className="ml-2 text-sm text-gray-400">Include comparative analysis</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-700">
              <Button 
                className="bg-gray-700 hover:bg-gray-600 mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsModalOpen(false)}
              >
                Create Report
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactAriaDashboard;