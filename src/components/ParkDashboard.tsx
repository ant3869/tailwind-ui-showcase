import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, User, Settings, Home, Search, Menu, X, ChevronDown, Calendar, BarChart2, Activity, Bookmark, Users, DollarSign, TrendingUp, ArrowUp, ArrowDown, ChevronRight, Code, Clock, Filter, Download, Upload, MoreHorizontal, CheckCircle, XCircle, AlertCircle, Eye } from 'lucide-react';

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

const ParkDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen font-sans">
      {/* Sidebar */}
      <div className={`bg-slate-900 w-64 p-4 fixed h-full z-40 transition-all duration-300 ease-in-out shadow-xl ${sidebarOpen ? 'left-0' : '-left-64'} md:left-0`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold">Park UI</span>
            </div>
            <button className="md:hidden text-slate-400 hover:text-slate-200" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="space-y-1">
            <button 
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-all ${
                activeTab === 'dashboard' 
                  ? 'bg-sky-500/10 text-sky-400' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </button>
            
            <button 
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-all ${
                activeTab === 'analytics' 
                  ? 'bg-sky-500/10 text-sky-400' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
              onClick={() => setActiveTab('analytics')}
            >
              <Activity className="h-5 w-5" />
              <span>Analytics</span>
            </button>
            
            <button 
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-all ${
                activeTab === 'teams' 
                  ? 'bg-sky-500/10 text-sky-400' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
              onClick={() => setActiveTab('teams')}
            >
              <Users className="h-5 w-5" />
              <span>Teams</span>
            </button>
            
            <button 
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-all ${
                activeTab === 'projects' 
                  ? 'bg-sky-500/10 text-sky-400' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
              onClick={() => setActiveTab('projects')}
            >
              <Bookmark className="h-5 w-5" />
              <span>Projects</span>
            </button>
            
            <button 
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-all ${
                activeTab === 'calendar' 
                  ? 'bg-sky-500/10 text-sky-400' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
              onClick={() => setActiveTab('calendar')}
            >
              <Calendar className="h-5 w-5" />
              <span>Calendar</span>
            </button>
            
            <button 
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-all ${
                activeTab === 'settings' 
                  ? 'bg-sky-500/10 text-sky-400' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
          </nav>
          
          <div className="mt-auto pt-4 border-t border-slate-800">
            <div className="flex items-center p-3 rounded-md bg-slate-800">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                  <User className="h-5 w-5 text-slate-300" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Alex Johnson</p>
                <p className="text-xs text-slate-400">alex@example.com</p>
              </div>
              <button className="ml-auto p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 transition-all duration-300 ease-in-out">
        {/* Header */}
        <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-30 border-b border-slate-800">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button className="mr-4 p-1 rounded-md bg-slate-800 md:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </button>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-64 rounded-md bg-slate-800 border border-slate-700 pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              
              <button className="p-1.5 rounded-md bg-slate-800 relative hover:bg-slate-700 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-sky-500"></span>
              </button>
              
              <div className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center">
                <span className="font-medium text-white">AJ</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 py-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Analytics Overview</h2>
              <p className="text-slate-400 mt-1">Monitor key metrics and performance data</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <div className="relative">
                <select className="appearance-none rounded-md bg-slate-800 border border-slate-700 px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-slate-500 pointer-events-none" />
              </div>
              <button className="px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-all text-sm flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
              <button className="px-3 py-2 rounded-md bg-sky-600 hover:bg-sky-700 transition-all text-sm font-medium flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-slate-400">Total Revenue</h3>
                <span className="p-1.5 rounded-md bg-sky-500/10 text-sky-500">
                  <DollarSign className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-semibold">$45,231.89</p>
                <p className="flex items-center text-green-500 text-sm font-medium">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  12.5%
                </p>
              </div>
              <p className="text-xs text-slate-400 mt-1">Compared to previous period</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-slate-400">New Customers</h3>
                <span className="p-1.5 rounded-md bg-indigo-500/10 text-indigo-500">
                  <Users className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-semibold">2,340</p>
                <p className="flex items-center text-green-500 text-sm font-medium">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  8.1%
                </p>
              </div>
              <p className="text-xs text-slate-400 mt-1">Compared to previous period</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-slate-400">Active Sessions</h3>
                <span className="p-1.5 rounded-md bg-rose-500/10 text-rose-500">
                  <Activity className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-semibold">1,893</p>
                <p className="flex items-center text-red-500 text-sm font-medium">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  3.2%
                </p>
              </div>
              <p className="text-xs text-slate-400 mt-1">Compared to previous period</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-slate-400">Conversion Rate</h3>
                <span className="p-1.5 rounded-md bg-amber-500/10 text-amber-500">
                  <TrendingUp className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-semibold">3.42%</p>
                <p className="flex items-center text-green-500 text-sm font-medium">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  4.6%
                </p>
              </div>
              <p className="text-xs text-slate-400 mt-1">Compared to previous period</p>
            </div>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Revenue Trends</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} stroke="#334155" />
                    <YAxis tick={{ fill: '#94a3b8' }} stroke="#334155" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
                      labelStyle={{ color: '#f1f5f9' }}
                    />
                    <Legend />
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#0ea5e9" 
                      strokeWidth={2}
                      dot={{ stroke: '#0ea5e9', strokeWidth: 2, r: 4, fill: '#1e293b' }}
                      activeDot={{ r: 6, stroke: '#0ea5e9', strokeWidth: 2, fill: '#0ea5e9' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Quarterly Performance</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} stroke="#334155" />
                    <YAxis tick={{ fill: '#94a3b8' }} stroke="#334155" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
                      labelStyle={{ color: '#f1f5f9' }}
                    />
                    <Legend />
                    <defs>
                      <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.4}/>
                      </linearGradient>
                    </defs>
                    <Bar dataKey="value" fill="url(#barColor)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Device Distribution</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700">
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
                      fill="#0ea5e9"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#0ea5e9', '#6366f1', '#f43f5e'][index % 3]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
                      labelStyle={{ color: '#f1f5f9' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Weekly Traffic</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-700">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} stroke="#334155" />
                    <YAxis tick={{ fill: '#94a3b8' }} stroke="#334155" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
                      labelStyle={{ color: '#f1f5f9' }}
                    />
                    <Legend />
                    <defs>
                      <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#f43f5e" fill="url(#areaColor)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* UI Components */}
          <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">UI Components</h3>
              <button className="px-3 py-1.5 text-sm rounded-md bg-sky-600 hover:bg-sky-700 transition-all">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Buttons */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">Buttons</h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-sky-600 hover:bg-sky-700 transition-all font-medium">
                    <span>Primary</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition-all font-medium">
                    <Upload className="h-4 w-4 mr-2" />
                    <span>Upload</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 transition-all text-slate-200">
                    <span>Secondary</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md border border-slate-600 hover:bg-slate-700 transition-all text-slate-300">
                    <span>Outline</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-rose-600 hover:bg-rose-700 transition-all font-medium">
                    <span>Danger</span>
                  </button>
                </div>
              </div>
              
              {/* Form Elements */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">Form Elements</h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email"
                        className="w-full px-3 py-2 rounded-md bg-slate-700 border border-slate-600 placeholder-slate-400 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="select" className="block text-sm font-medium text-slate-300 mb-1">Select Option</label>
                    <div className="relative">
                      <select
                        id="select"
                        className="w-full px-3 py-2 rounded-md bg-slate-700 border border-slate-600 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
                      >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded bg-slate-700 border-slate-600 text-sky-600 focus:ring-sky-500 focus:ring-offset-slate-800"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-slate-300">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Cards & Alerts */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">Cards & Alerts</h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-md bg-slate-700 border border-slate-600">
                    <h5 className="font-medium mb-1">Card Title</h5>
                    <p className="text-sm text-slate-300">This is a simple card component with a title and content.</p>
                    <div className="mt-3 flex justify-end">
                      <button className="text-sm text-sky-400 hover:text-sky-300 transition-colors">View Details</button>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-md bg-green-900/30 border border-green-700/50 flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h6 className="font-medium text-green-400">Success</h6>
                      <p className="text-sm text-green-300">Operation completed successfully.</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-md bg-amber-900/30 border border-amber-700/50 flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h6 className="font-medium text-amber-400">Warning</h6>
                      <p className="text-sm text-amber-300">Please check your input and try again.</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-md bg-rose-900/30 border border-rose-700/50 flex items-start space-x-2">
                    <XCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h6 className="font-medium text-rose-400">Error</h6>
                      <p className="text-sm text-rose-300">We couldn't process your request. Please try again.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Table */}
          <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Recent Activity</h3>
              <button className="text-sm text-sky-400 hover:text-sky-300 transition-colors">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Transaction</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Amount</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 rounded-md bg-slate-700 flex items-center justify-center">
                          <DollarSign className="h-4 w-4 text-sky-400" />
                        </div>
                        <div>
                          <p className="font-medium">Payment Received</p>
                          <p className="text-xs text-slate-400">From John Doe</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-slate-400" />
                        <span>Today at 2:30 PM</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">$128.50</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-md bg-green-900/30 text-green-400 border border-green-700/50">
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 rounded-md bg-slate-700 flex items-center justify-center">
                          <Upload className="h-4 w-4 text-indigo-400" />
                        </div>
                        <div>
                          <p className="font-medium">Subscription Renewed</p>
                          <p className="text-xs text-slate-400">Pro Plan</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-slate-400" />
                        <span>Yesterday at 5:15 PM</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">$49.99</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-md bg-indigo-900/30 text-indigo-400 border border-indigo-700/50">
                        Processing
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-700/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 rounded-md bg-slate-700 flex items-center justify-center">
                          <XCircle className="h-4 w-4 text-rose-400" />
                        </div>
                        <div>
                          <p className="font-medium">Payment Failed</p>
                          <p className="text-xs text-slate-400">Invoice #12345</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-slate-400" />
                        <span>Feb 23, 2025</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">$215.00</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-md bg-rose-900/30 text-rose-400 border border-rose-700/50">
                        Failed
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-slate-400">Showing 3 of 24 transactions</p>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm rounded-md bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:pointer-events-none">
                  Previous
                </button>
                <button className="px-3 py-1 text-sm rounded-md bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
          
          {/* Other UI Elements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <h3 className="font-medium mb-4">Timeline</h3>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-sky-500 z-10"></div>
                  <div className="absolute left-2 top-6 h-full w-0.5 bg-slate-700 -z-10"></div>
                  <div>
                    <h4 className="font-medium">Project Created</h4>
                    <p className="text-sm text-slate-400 mt-0.5">Feb 24, 2025 at 10:34 AM</p>
                    <p className="text-sm mt-2">New dashboard project was created by admin user.</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-indigo-500 z-10"></div>
                  <div className="absolute left-2 top-6 h-full w-0.5 bg-slate-700 -z-10"></div>
                  <div>
                    <h4 className="font-medium">Team Members Added</h4>
                    <p className="text-sm text-slate-400 mt-0.5">Feb 24, 2025 at 11:15 AM</p>
                    <p className="text-sm mt-2">3 team members were added to the project.</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-amber-500 z-10"></div>
                  <div className="absolute left-2 top-6 h-full w-0.5 bg-slate-700 -z-10"></div>
                  <div>
                    <h4 className="font-medium">First Milestone Completed</h4>
                    <p className="text-sm text-slate-400 mt-0.5">Feb 24, 2025 at 3:45 PM</p>
                    <p className="text-sm mt-2">The first project milestone has been marked as completed.</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-green-500 z-10"></div>
                  <div>
                    <h4 className="font-medium">Project Status Updated</h4>
                    <p className="text-sm text-slate-400 mt-0.5">Feb 24, 2025 at 5:20 PM</p>
                    <p className="text-sm mt-2">Project status has been updated to "In Progress".</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-md border border-slate-700 p-4">
              <h3 className="font-medium mb-4">Notifications</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-md hover:bg-slate-700/50 transition-colors flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-md bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-4 w-4 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">New Feature Available</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Our new analytics dashboard is now available.</p>
                    <p className="text-xs text-slate-500 mt-1">5 minutes ago</p>
                  </div>
                  <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200 flex-shrink-0 self-start">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="p-3 rounded-md hover:bg-slate-700/50 transition-colors flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-md bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">New User Registration</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Jane Smith has joined your team.</p>
                    <p className="text-xs text-slate-500 mt-1">1 hour ago</p>
                  </div>
                  <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200 flex-shrink-0 self-start">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="p-3 rounded-md hover:bg-slate-700/50 transition-colors flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">System Update</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Scheduled maintenance on February 25, 2025.</p>
                    <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                  </div>
                  <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200 flex-shrink-0 self-start">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="p-3 rounded-md hover:bg-slate-700/50 transition-colors flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-md bg-rose-500/10 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                    <XCircle className="h-4 w-4 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Payment Failed</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Your recent subscription payment has failed.</p>
                    <p className="text-xs text-slate-500 mt-1">1 day ago</p>
                  </div>
                  <button className="p-1 rounded-md hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200 flex-shrink-0 self-start">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="px-3 py-1.5 text-sm rounded-md text-sky-400 hover:text-sky-300 transition-colors">
                  View All Notifications
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ParkDashboard;