import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, User, Settings, Home, Search, Menu, X, ChevronDown, Calendar, BarChart2, Activity, Users, DollarSign, TrendingUp, ArrowUpRight, Zap, Sparkles, MoreHorizontal, Fingerprint, RefreshCcw, Star } from 'lucide-react';

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

const AceternityDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Sidebar */}
      <div className={`fixed h-full z-10 transition-all duration-300 bg-black border-r border-white/10 w-64 backdrop-blur-sm ${sidebarOpen ? 'left-0' : '-left-64'} md:left-0`}>
        <div className="p-5 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Aceternity UI
            </span>
            <button className="ml-auto md:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="space-y-1">
            <button 
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'dashboard' 
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'analytics' 
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveTab('analytics')}
            >
              <Activity className="h-5 w-5" />
              <span>Analytics</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'users' 
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveTab('users')}
            >
              <Users className="h-5 w-5" />
              <span>Users</span>
            </button>
            
            <button 
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'settings' 
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
          </nav>
          
          <div className="mt-auto">
            <div className="border border-white/10 rounded-lg p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Pro Plan</h4>
                  <p className="text-xs text-gray-400">Upgrade for more features</p>
                </div>
              </div>
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium transition-all hover:opacity-90">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Header */}
        <header className="bg-black/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button className="md:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
                <Menu className="h-5 w-5" />
              </button>
              <h1 className="text-lg font-medium hidden md:block">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-40 md:w-64"
                />
              </div>
              
              <button className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </button>
              
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="font-medium text-sm">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        <main className="p-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Total Revenue</p>
                  <h3 className="text-2xl font-bold mt-1">$45,231</h3>
                  <p className="text-green-400 text-xs mt-1 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span>+12.5% from last month</span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-purple-400" />
                </div>
              </div>
              <div className="h-10">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData.slice(0, 5)}>
                    <Line type="monotone" dataKey="value" stroke="#8B5CF6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-gray-400 text-sm">New Users</p>
                  <h3 className="text-2xl font-bold mt-1">2,340</h3>
                  <p className="text-green-400 text-xs mt-1 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span>+8.1% from last month</span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              <div className="h-10">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData.slice(0, 5)}>
                    <Line type="monotone" dataKey="value" stroke="#0EA5E9" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-900/40 to-red-900/40 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Conversion Rate</p>
                  <h3 className="text-2xl font-bold mt-1">3.42%</h3>
                  <p className="text-green-400 text-xs mt-1 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span>+4.6% from last month</span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-pink-600/20 border border-pink-500/30 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-pink-400" />
                </div>
              </div>
              <div className="h-10">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData.slice(0, 5)}>
                    <Line type="monotone" dataKey="value" stroke="#EC4899" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Active Sessions</p>
                  <h3 className="text-2xl font-bold mt-1">1,893</h3>
                  <p className="text-green-400 text-xs mt-1 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span>+2.3% from last month</span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-amber-600/20 border border-amber-500/30 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-amber-400" />
                </div>
              </div>
              <div className="h-10">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData.slice(0, 5)}>
                    <Line type="monotone" dataKey="value" stroke="#F59E0B" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-xl bg-black border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Revenue Growth</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="Refresh data">
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="More options">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" tick={{ fill: '#999' }} stroke="#444" />
                    <YAxis tick={{ fill: '#999' }} stroke="#444" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                      labelStyle={{ color: '#fff' }}
                      cursor={{ stroke: '#555', strokeWidth: 1 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="url(#colorGradient)" 
                      strokeWidth={3} 
                      dot={{ r: 4, fill: '#8B5CF6', strokeWidth: 0 }} 
                      activeDot={{ r: 6, fill: '#8B5CF6', stroke: 'white', strokeWidth: 2 }}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-black border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Quarterly Performance</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="Refresh data">
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="More options">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" tick={{ fill: '#999' }} stroke="#444" />
                    <YAxis tick={{ fill: '#999' }} stroke="#444" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                      labelStyle={{ color: '#fff' }}
                      cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                    />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0EA5E9" stopOpacity={1} />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.8} />
                      </linearGradient>
                    </defs>
                    <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-xl bg-black border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Device Distribution</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="Refresh data">
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="More options">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
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
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#8B5CF6', '#EC4899', '#F59E0B'][index % 3]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                      labelStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-black border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Weekly Traffic</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="Refresh data">
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="More options">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" tick={{ fill: '#999' }} stroke="#444" />
                    <YAxis tick={{ fill: '#999' }} stroke="#444" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EC4899" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#EC4899" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#EC4899" fill="url(#areaGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* UI Components */}
          <div className="p-6 rounded-xl bg-black border border-white/10 backdrop-blur-sm mb-6">
            <h3 className="text-lg font-medium mb-6">UI Components</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Buttons</h4>
                <div className="space-y-3">
                  <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transition-all hover:opacity-90">
                    Primary Button
                  </button>
                  <button className="w-full py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white font-medium transition-all hover:bg-white/20">
                    Secondary Button
                  </button>
                  <button className="w-full py-2.5 rounded-lg border border-purple-500 text-purple-400 font-medium transition-all hover:bg-purple-500/10">
                    Outline Button
                  </button>
                  <button className="w-full py-2.5 rounded-lg flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium transition-all hover:opacity-90">
                    <Zap className="h-4 w-4" />
                    <span>Icon Button</span>
                  </button>
                  <button className="w-full py-2.5 rounded-lg bg-white/5 text-gray-300 font-medium transition-all hover:bg-white/10">
                    Subtle Button
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Form Elements</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5">Username</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                      <input 
                        type="text" 
                        className="w-full rounded-lg bg-white/5 border border-white/10 text-white pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        placeholder="Enter username..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5">Select Plan</label>
                    <select className="w-full rounded-lg bg-white/5 border border-white/10 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all appearance-none" aria-label="Select subscription plan">
                      <option>Free Plan</option>
                      <option>Pro Plan</option>
                      <option>Enterprise</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        id="checkbox1" 
                        className="sr-only peer"
                      />
                      <div className="h-5 w-5 rounded bg-white/5 border border-white/20 peer-checked:bg-purple-600 peer-checked:border-purple-600 transition-all"></div>
                      <div className="absolute left-0.5 top-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <label htmlFor="checkbox1" className="ml-2 text-sm text-gray-300 cursor-pointer">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Cards & Badges</h4>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-medium">Premium Feature</h5>
                      <p className="text-xs text-gray-400">Unlock advanced analytics</p>
                    </div>
                  </div>
                  <button className="w-full py-1.5 rounded bg-white/10 text-sm transition-all hover:bg-white/20">
                    Learn More
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    New
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Processing
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    Completed
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                    Failed
                  </span>
                </div>
                
                <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-700/50 text-blue-200 flex items-start gap-2">
                  <Fingerprint className="h-5 w-5 mt-0.5" />
                  <div>
                    <h5 className="font-medium mb-1">Identity Verified</h5>
                    <p className="text-xs">Your account has been verified successfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Table */}
          <div className="p-6 rounded-xl bg-black border border-white/10 backdrop-blur-sm mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Recent Transactions</h3>
              <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm" aria-label="View all transactions">
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Transaction ID</th>
                    <th className="text-left p-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                    <th className="text-left p-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="text-left p-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="text-left p-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-3 text-sm">#TX-1234</td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <span className="text-xs font-medium">JD</span>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium">John Doe</h5>
                          <p className="text-xs text-gray-400">john@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-sm text-gray-300">Feb 13, 2025</td>
                    <td className="p-3 text-sm font-medium">$299.95</td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-3 text-sm">#TX-1233</td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <span className="text-xs font-medium">AS</span>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium">Alice Smith</h5>
                          <p className="text-xs text-gray-400">alice@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-sm text-gray-300">Feb 12, 2025</td>
                    <td className="p-3 text-sm font-medium">$199.00</td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        Processing
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 text-sm">#TX-1232</td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                          <span className="text-xs font-medium">RJ</span>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium">Robert Johnson</h5>
                          <p className="text-xs text-gray-400">robert@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-sm text-gray-300">Feb 10, 2025</td>
                    <td className="p-3 text-sm font-medium">$449.99</td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                        Failed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AceternityDashboard;
