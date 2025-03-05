import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, User, Settings, Home, Search, Menu, X, ChevronDown, Calendar, BarChart2, Activity, Users, DollarSign, TrendingUp, ArrowUp, ArrowDown, Filter, Download, Plus, Trash, Edit, Eye, MoreHorizontal } from 'lucide-react';

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

const FrankenDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen font-mono">
      {/* Sidebar */}
      <div className={`bg-zinc-800 w-64 fixed h-full z-10 transition-all duration-300 border-r border-zinc-700 ${sidebarOpen ? 'left-0' : '-left-64'} md:left-0`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-zinc-700 pb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-lime-500 flex items-center justify-center">
                <span className="font-bold text-black">FUI</span>
              </div>
              <h1 className="text-xl font-bold text-lime-500">Franken UI</h1>
            </div>
            <button className="md:hidden text-zinc-400 hover:text-zinc-100" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="mt-6 space-y-1">
            <button 
              className={`w-full flex items-center gap-2 p-2 ${activeTab === 'dashboard' ? 'bg-lime-500 text-black font-bold' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-2 p-2 ${activeTab === 'analytics' ? 'bg-lime-500 text-black font-bold' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700'}`}
              onClick={() => setActiveTab('analytics')}
            >
              <Activity className="h-5 w-5" />
              <span>Analytics</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-2 p-2 ${activeTab === 'users' ? 'bg-lime-500 text-black font-bold' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700'}`}
              onClick={() => setActiveTab('users')}
            >
              <Users className="h-5 w-5" />
              <span>Users</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-2 p-2 ${activeTab === 'settings' ? 'bg-lime-500 text-black font-bold' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700'}`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
          </nav>
          
          <div className="mt-auto border-t border-zinc-700 pt-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-zinc-700 flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Admin User</h4>
                <p className="text-xs text-zinc-400">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Header */}
        <header className="bg-zinc-800 border-b border-zinc-700 sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-6 w-6" />
              </button>
              <h2 className="text-lg font-bold uppercase tracking-wider">Dashboard</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-9 pr-4 py-2 bg-zinc-700 border-2 border-zinc-600 focus:border-lime-500 outline-none"
                />
              </div>
              
              <button className="relative p-2 bg-zinc-700 hover:bg-zinc-600">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-lime-500 rounded-full"></span>
              </button>
              
              <button className="p-2 bg-zinc-700 hover:bg-zinc-600">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        <main className="p-6">
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-zinc-800 border-2 border-zinc-700">
            <h3 className="text-lg font-bold uppercase">Analytics Overview</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
              <button className="px-4 py-2 bg-lime-500 text-black font-bold hover:bg-lime-600 flex items-center gap-2">
                <Plus className="h-4 w-4" />
                <span>New Report</span>
              </button>
            </div>
          </div>
          
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-zinc-800 border-2 border-zinc-700 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-lime-500">
                  <DollarSign className="h-5 w-5 text-black" />
                </div>
                <h4 className="font-bold uppercase">Revenue</h4>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold">$45,231</p>
                <p className="text-lime-500 flex items-center text-sm">
                  <ArrowUp className="h-4 w-4 mr-0.5" />
                  12.5%
                </p>
              </div>
              <p className="text-xs text-zinc-400 mt-1">Compared to last month</p>
            </div>
            
            <div className="bg-zinc-800 border-2 border-zinc-700 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-lime-500">
                  <Users className="h-5 w-5 text-black" />
                </div>
                <h4 className="font-bold uppercase">Users</h4>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold">2,340</p>
                <p className="text-lime-500 flex items-center text-sm">
                  <ArrowUp className="h-4 w-4 mr-0.5" />
                  8.1%
                </p>
              </div>
              <p className="text-xs text-zinc-400 mt-1">Compared to last month</p>
            </div>
            
            <div className="bg-zinc-800 border-2 border-zinc-700 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-lime-500">
                  <Activity className="h-5 w-5 text-black" />
                </div>
                <h4 className="font-bold uppercase">Sessions</h4>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold">1,893</p>
                <p className="text-red-500 flex items-center text-sm">
                  <ArrowDown className="h-4 w-4 mr-0.5" />
                  3.2%
                </p>
              </div>
              <p className="text-xs text-zinc-400 mt-1">Compared to last month</p>
            </div>
            
            <div className="bg-zinc-800 border-2 border-zinc-700 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-lime-500">
                  <TrendingUp className="h-5 w-5 text-black" />
                </div>
                <h4 className="font-bold uppercase">Conversion</h4>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold">3.42%</p>
                <p className="text-lime-500 flex items-center text-sm">
                  <ArrowUp className="h-4 w-4 mr-0.5" />
                  4.6%
                </p>
              </div>
              <p className="text-xs text-zinc-400 mt-1">Compared to last month</p>
            </div>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-zinc-800 border-2 border-zinc-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold uppercase">Revenue Growth</h3>
                <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#52525b" />
                    <XAxis dataKey="name" tick={{ fill: '#a1a1aa' }} stroke="#52525b" />
                    <YAxis tick={{ fill: '#a1a1aa' }} stroke="#52525b" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#27272a', borderColor: '#52525b' }}
                      labelStyle={{ color: '#f4f4f5' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#84cc16" strokeWidth={3} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-zinc-800 border-2 border-zinc-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold uppercase">Quarterly Performance</h3>
                <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#52525b" />
                    <XAxis dataKey="name" tick={{ fill: '#a1a1aa' }} stroke="#52525b" />
                    <YAxis tick={{ fill: '#a1a1aa' }} stroke="#52525b" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#27272a', borderColor: '#52525b' }}
                      labelStyle={{ color: '#f4f4f5' }}
                    />
                    <Legend />
                    <Bar dataKey="value" fill="#84cc16" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-zinc-800 border-2 border-zinc-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold uppercase">Device Distribution</h3>
                <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#84cc16"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#84cc16', '#ff4', '#fb7185'][index % 3]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#27272a', borderColor: '#52525b' }}
                      labelStyle={{ color: '#f4f4f5' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-zinc-800 border-2 border-zinc-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold uppercase">Weekly Traffic</h3>
                <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#52525b" />
                    <XAxis dataKey="name" tick={{ fill: '#a1a1aa' }} stroke="#52525b" />
                    <YAxis tick={{ fill: '#a1a1aa' }} stroke="#52525b" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#27272a', borderColor: '#52525b' }}
                      labelStyle={{ color: '#f4f4f5' }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="value" stroke="#84cc16" fill="#84cc1660" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* UI Components */}
          <div className="bg-zinc-800 border-2 border-zinc-700 p-4 mb-6">
            <h3 className="font-bold uppercase mb-6">UI Components</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Buttons */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-zinc-700 pb-2">Buttons</h4>
                <div className="space-y-3">
                  <button className="w-full py-2 bg-lime-500 text-black font-bold hover:bg-lime-600">
                    Primary Button
                  </button>
                  <button className="w-full py-2 bg-zinc-700 hover:bg-zinc-600">
                    Secondary Button
                  </button>
                  <button className="w-full py-2 border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black font-bold">
                    Outline Button
                  </button>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-lime-500 text-black font-bold hover:bg-lime-600">
                      Yes
                    </button>
                    <button className="flex-1 py-2 bg-zinc-700 hover:bg-zinc-600">
                      No
                    </button>
                  </div>
                  <button className="w-full py-2 bg-red-500 text-white font-bold hover:bg-red-600 flex items-center justify-center gap-2">
                    <Trash className="h-4 w-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
              
              {/* Form Elements */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-zinc-700 pb-2">Form Elements</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">Username</label>
                    <input 
                      type="text" 
                      className="w-full py-2 px-3 bg-zinc-700 border-2 border-zinc-600 focus:border-lime-500 outline-none"
                      placeholder="Enter username"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">Select Plan</label>
                    <select className="w-full py-2 px-3 bg-zinc-700 border-2 border-zinc-600 focus:border-lime-500 outline-none appearance-none">
                      <option>Free Plan</option>
                      <option>Pro Plan</option>
                      <option>Enterprise</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="checkbox2"
                      className="w-5 h-5 bg-zinc-700 border-2 border-zinc-600 checked:bg-lime-500 checked:border-lime-500 focus:outline-none"
                    />
                    <label htmlFor="checkbox2" className="text-sm">Remember me</label>
                  </div>
                </div>
              </div>
              
              {/* Cards & Alerts */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-zinc-700 pb-2">Cards & Alerts</h4>
                <div className="space-y-4">
                  <div className="bg-zinc-700 border-l-4 border-lime-500 p-3">
                    <div className="flex justify-between">
                      <h5 className="font-bold">System Status</h5>
                      <button className="text-zinc-400 hover:text-zinc-200">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-zinc-300 mt-1">All systems are operational.</p>
                  </div>
                  
                  <div className="bg-zinc-700 border-l-4 border-red-500 p-3">
                    <h5 className="font-bold">Error</h5>
                    <p className="text-sm text-zinc-300">Failed to connect to database.</p>
                  </div>
                  
                  <div className="bg-zinc-700 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-8 w-8 bg-lime-500 flex items-center justify-center">
                        <Bell className="h-4 w-4 text-black" />
                      </div>
                      <h5 className="font-bold">Notification</h5>
                    </div>
                    <p className="text-sm text-zinc-300">You have 3 unread messages.</p>
                    <div className="flex gap-2 mt-2">
                      <button className="flex-1 py-1 bg-lime-500 text-black font-bold text-xs">VIEW</button>
                      <button className="flex-1 py-1 bg-zinc-600 text-xs">DISMISS</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Table */}
          <div className="bg-zinc-800 border-2 border-zinc-700 p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold uppercase">Recent Users</h3>
              <button className="px-3 py-1 bg-lime-500 text-black font-bold text-sm">
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-zinc-700">
                    <th className="text-left p-3 text-xs font-bold uppercase tracking-wider">#</th>
                    <th className="text-left p-3 text-xs font-bold uppercase tracking-wider">Name</th>
                    <th className="text-left p-3 text-xs font-bold uppercase tracking-wider">Email</th>
                    <th className="text-left p-3 text-xs font-bold uppercase tracking-wider">Status</th>
                    <th className="text-left p-3 text-xs font-bold uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-700 hover:bg-zinc-700">
                    <td className="p-3">1</td>
                    <td className="p-3">John Doe</td>
                    <td className="p-3">john@example.com</td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-lime-500 text-black text-xs font-bold">
                        Active
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-700 hover:bg-zinc-700">
                    <td className="p-3">2</td>
                    <td className="p-3">Jane Smith</td>
                    <td className="p-3">jane@example.com</td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-bold">
                        Pending
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-700">
                    <td className="p-3">3</td>
                    <td className="p-3">Robert Johnson</td>
                    <td className="p-3">robert@example.com</td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold">
                        Inactive
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 bg-zinc-700 hover:bg-zinc-600">
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-xs text-zinc-400">Showing 1-3 of 10 entries</div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-sm">Prev</button>
                <button className="px-3 py-1 bg-lime-500 text-black font-bold text-sm">1</button>
                <button className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-sm">2</button>
                <button className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-sm">3</button>
                <button className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-sm">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FrankenDashboard;