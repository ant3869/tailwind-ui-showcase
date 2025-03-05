import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Camera, Bell, User, Settings, Home, Search, Menu, X, ChevronDown, ChevronRight, Calendar, BarChart2 } from 'lucide-react';

// Sample data for charts
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

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
];

const areaData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
];

const ShadcnDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen flex">
      {/* Sidebar */}
      <div className={`bg-slate-900 w-64 p-4 flex flex-col space-y-4 fixed h-full z-10 transition-all duration-300 ${sidebarOpen ? 'left-0' : '-left-64'} md:left-0`}>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-50">shadcn/ui</h1>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 space-y-1">
          <button 
            className={`flex items-center w-full p-2 rounded-md ${activeTab === 'dashboard' ? 'bg-slate-800 text-slate-50' : 'text-slate-400 hover:text-slate-50 hover:bg-slate-800'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Home className="h-5 w-5 mr-2" />
            Dashboard
          </button>
          <button 
            className={`flex items-center w-full p-2 rounded-md ${activeTab === 'analytics' ? 'bg-slate-800 text-slate-50' : 'text-slate-400 hover:text-slate-50 hover:bg-slate-800'}`}
            onClick={() => setActiveTab('analytics')}
          >
            <BarChart2 className="h-5 w-5 mr-2" />
            Analytics
          </button>
          <button 
            className={`flex items-center w-full p-2 rounded-md ${activeTab === 'settings' ? 'bg-slate-800 text-slate-50' : 'text-slate-400 hover:text-slate-50 hover:bg-slate-800'}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </button>
          <button 
            className={`flex items-center w-full p-2 rounded-md ${activeTab === 'profile' ? 'bg-slate-800 text-slate-50' : 'text-slate-400 hover:text-slate-50 hover:bg-slate-800'}`}
            onClick={() => setActiveTab('profile')}
          >
            <User className="h-5 w-5 mr-2" />
            Profile
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 overflow-auto">
        {/* Top Navigation */}
        <header className="bg-slate-900 p-4 shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-4 md:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
              <Menu className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-medium">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-8 pr-4 py-2 rounded-md bg-slate-800 text-slate-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
            </div>
            <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700" aria-label="User profile">
              <User className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-900 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Revenue</p>
                  <h3 className="text-2xl font-bold mt-1">$45,231</h3>
                </div>
                <div className="p-3 bg-indigo-100 rounded-full">
                  <BarChart2 className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <p className="text-green-500 text-sm mt-4 flex items-center">
                <ChevronRight className="h-4 w-4 -rotate-90" />
                <span>+12.5% from last month</span>
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">New Users</p>
                  <h3 className="text-2xl font-bold mt-1">2,340</h3>
                </div>
                <div className="p-3 bg-cyan-100 rounded-full">
                  <User className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <p className="text-green-500 text-sm mt-4 flex items-center">
                <ChevronRight className="h-4 w-4 -rotate-90" />
                <span>+8.1% from last month</span>
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Active Sessions</p>
                  <h3 className="text-2xl font-bold mt-1">1,893</h3>
                </div>
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Camera className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <p className="text-red-500 text-sm mt-4 flex items-center">
                <ChevronRight className="h-4 w-4 rotate-90" />
                <span>-3.2% from last month</span>
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Conversion Rate</p>
                  <h3 className="text-2xl font-bold mt-1">3.42%</h3>
                </div>
                <div className="p-3 bg-amber-100 rounded-full">
                  <Settings className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <p className="text-green-500 text-sm mt-4 flex items-center">
                <ChevronRight className="h-4 w-4 -rotate-90" />
                <span>+4.6% from last month</span>
              </p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Line Chart */}
            <div className="bg-slate-900 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-4">Revenue Growth</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
                      labelStyle={{ color: '#f8fafc' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Bar Chart */}
            <div className="bg-slate-900 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-4">Quarterly Performance</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
                      labelStyle={{ color: '#f8fafc' }}
                    />
                    <Legend />
                    <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Pie Chart */}
            <div className="bg-slate-900 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-4">Device Distribution</h3>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#0ea5e9"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#6366f1', '#0ea5e9', '#ec4899'][index % 3]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
                      labelStyle={{ color: '#f8fafc' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Area Chart */}
            <div className="bg-slate-900 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-4">Weekly Traffic</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
                      labelStyle={{ color: '#f8fafc' }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="value" stroke="#ec4899" fill="#ec489980" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* UI Components Showcase */}
          <div className="bg-slate-900 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-medium mb-6">UI Components</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Buttons */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-slate-400 uppercase">Buttons</h4>
                <div className="space-y-2">
                  <button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-50 py-2 px-4 rounded-md">Default</button>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">Primary</button>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md">Success</button>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">Danger</button>
                  <button className="w-full border border-slate-600 text-slate-300 hover:bg-slate-800 py-2 px-4 rounded-md">Outline</button>
                </div>
              </div>
              
              {/* Form Elements */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-slate-400 uppercase">Form Elements</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Input</label>
                    <input 
                      type="text" 
                      className="w-full rounded-md bg-slate-800 border border-slate-700 text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter text..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Select</label>
                    <select className="w-full rounded-md bg-slate-800 border border-slate-700 text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label="Select options">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-indigo-500"
                      id="check1"
                    />
                    <label htmlFor="check1" className="ml-2 text-sm text-slate-200">Checkbox</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="rounded-full bg-slate-800 border-slate-700 text-indigo-600 focus:ring-indigo-500"
                      id="radio1"
                      name="radio-group"
                    />
                    <label htmlFor="radio1" className="ml-2 text-sm text-slate-200">Radio Button</label>
                  </div>
                </div>
              </div>
              
              {/* Cards & Alerts */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-slate-400 uppercase">Cards & Alerts</h4>
                <div className="rounded-md bg-slate-800 p-3 border border-slate-700">
                  <h5 className="font-medium mb-1">Card Title</h5>
                  <p className="text-sm text-slate-300">This is a simple card component with a title and content.</p>
                </div>
                <div className="rounded-md bg-indigo-900/50 border border-indigo-700 p-3 text-indigo-200">
                  <p className="text-sm">This is an info alert message.</p>
                </div>
                <div className="rounded-md bg-red-900/50 border border-red-700 p-3 text-red-200">
                  <p className="text-sm">This is an error alert message.</p>
                </div>
                <div className="rounded-md bg-amber-900/50 border border-amber-700 p-3 text-amber-200">
                  <p className="text-sm">This is a warning alert message.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tables */}
          <div className="bg-slate-900 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-medium mb-6">Data Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-400">#</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-400">Name</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-400">Email</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-400">Status</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="px-4 py-3 text-sm">1</td>
                    <td className="px-4 py-3 text-sm">John Doe</td>
                    <td className="px-4 py-3 text-sm">john@example.com</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button className="text-indigo-500 hover:text-indigo-600 mr-2" aria-label="Edit John Doe">Edit</button>
                      <button className="text-red-500 hover:text-red-600" aria-label="Delete John Doe">Delete</button>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="px-4 py-3 text-sm">2</td>
                    <td className="px-4 py-3 text-sm">Jane Smith</td>
                    <td className="px-4 py-3 text-sm">jane@example.com</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button className="text-indigo-500 hover:text-indigo-600 mr-2" aria-label="Edit Jane Smith">Edit</button>
                      <button className="text-red-500 hover:text-red-600" aria-label="Delete Jane Smith">Delete</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/50">
                    <td className="px-4 py-3 text-sm">3</td>
                    <td className="px-4 py-3 text-sm">Robert Johnson</td>
                    <td className="px-4 py-3 text-sm">robert@example.com</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Inactive
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button className="text-indigo-500 hover:text-indigo-600 mr-2" aria-label="Edit Robert Johnson">Edit</button>
                      <button className="text-red-500 hover:text-red-600" aria-label="Delete Robert Johnson">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-slate-400">Showing 1-3 of 12 results</p>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-slate-800 rounded-md text-sm" aria-label="Previous page">Previous</button>
                <button className="px-3 py-1 bg-indigo-600 rounded-md text-sm" aria-label="Page 1" aria-current="page">1</button>
                <button className="px-3 py-1 bg-slate-800 rounded-md text-sm" aria-label="Page 2">2</button>
                <button className="px-3 py-1 bg-slate-800 rounded-md text-sm" aria-label="Page 3">3</button>
                <button className="px-3 py-1 bg-slate-800 rounded-md text-sm" aria-label="Next page">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShadcnDashboard;
