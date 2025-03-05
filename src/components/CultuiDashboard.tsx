import React, { useState } from 'react';
import { LineChart, BarChart, PieChart, Area, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Pie } from 'recharts';

// Sample data for charts
const monthlyData = [
  { name: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { name: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { name: 'Mar', revenue: 5000, expenses: 3200, profit: 1800 },
  { name: 'Apr', revenue: 4780, expenses: 3908, profit: 872 },
  { name: 'May', revenue: 5890, expenses: 4800, profit: 1090 },
  { name: 'Jun', revenue: 4390, expenses: 3800, profit: 590 },
  { name: 'Jul', revenue: 6490, expenses: 4300, profit: 2190 },
];

const categoryData = [
  { name: 'Software', value: 35 },
  { name: 'Hardware', value: 25 },
  { name: 'Services', value: 20 },
  { name: 'Consulting', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#36C5F0', '#ECB22E', '#2EB67D', '#E01E5A', '#5A45FF'];

const CultUIDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      {/* Top Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">
                <span className="text-blue-400">Cult</span>UI
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <button 
                    className={`${
                      activeTab === 'dashboard' 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={() => setActiveTab('dashboard')}
                  >
                    Dashboard
                  </button>
                  <button 
                    className={`${
                      activeTab === 'analytics' 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={() => setActiveTab('analytics')}
                  >
                    Analytics
                  </button>
                  <button 
                    className={`${
                      activeTab === 'reports' 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={() => setActiveTab('reports')}
                  >
                    Reports
                  </button>
                  <button 
                    className={`${
                      activeTab === 'settings' 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={() => setActiveTab('settings')}
                  >
                    Settings
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-gray-700 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <button className="max-w-xs bg-gray-600 rounded-full text-sm focus:outline-none flex items-center">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="font-medium">AB</span>
                    </div>
                  </button>
                  <span className="ml-2 text-sm font-medium">Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-gray-400 mt-1">A comprehensive view of your business metrics</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 transform transition-all duration-300 hover:scale-102 hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="rounded-full bg-blue-500 bg-opacity-20 p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold">$89,432</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-green-500 mr-1">+12.5%</span>
              <span className="text-gray-400">vs last month</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 transform transition-all duration-300 hover:scale-102 hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="rounded-full bg-yellow-500 bg-opacity-20 p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">New Customers</p>
                <p className="text-2xl font-bold">1,257</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-green-500 mr-1">+5.2%</span>
              <span className="text-gray-400">vs last month</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 transform transition-all duration-300 hover:scale-102 hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="rounded-full bg-green-500 bg-opacity-20 p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Conversion Rate</p>
                <p className="text-2xl font-bold">3.7%</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-red-500 mr-1">-1.8%</span>
              <span className="text-gray-400">vs last month</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 transform transition-all duration-300 hover:scale-102 hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="rounded-full bg-red-500 bg-opacity-20 p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Avg. Order Value</p>
                <p className="text-2xl font-bold">$127.50</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-green-500 mr-1">+3.2%</span>
              <span className="text-gray-400">vs last month</span>
            </div>
          </div>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Revenue Overview</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">Monthly</button>
                <button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600">Quarterly</button>
                <button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600">Yearly</button>
              </div>
            </div>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#2D3748', borderColor: '#4A5568' }}
                    itemStyle={{ color: '#E2E8F0' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#36C5F0" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#E01E5A" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="profit" name="Profit" stroke="#2EB67D" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Revenue by Category</h2>
              <p className="text-sm text-gray-400">Distribution of sales across product categories</p>
            </div>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#2D3748', borderColor: '#4A5568' }}
                    itemStyle={{ color: '#E2E8F0' }}
                    formatter={(value) => [`${value}%`, 'Percentage']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <button className="px-3 py-1 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">#ORD-001</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium">JD</span>
                        </div>
                        <span>John Doe</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Premium Subscription</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">$299.99</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Feb 15, 2025</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">#ORD-002</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium">JS</span>
                        </div>
                        <span>Jane Smith</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Basic Package</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">$99.99</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900 text-yellow-300">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Feb 14, 2025</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">#ORD-003</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium">RJ</span>
                        </div>
                        <span>Robert Johnson</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Enterprise Solution</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">$1,299.99</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Feb 13, 2025</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">#ORD-004</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium">ET</span>
                        </div>
                        <span>Emily Taylor</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Consultation</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">$150.00</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900 text-red-300">
                        Canceled
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Feb 12, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Top Performing Products</h2>
              <button className="text-blue-400 hover:text-blue-300 text-sm">View All</button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-blue-600 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Premium Dashboard</h3>
                      <p className="text-xs text-gray-400">Software</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold">$12,500</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>75% of target</span>
                  <span>$12,500 / $16,500</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-yellow-600 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Analytics Pro</h3>
                      <p className="text-xs text-gray-400">Software</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold">$8,230</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>62% of target</span>
                  <span>$8,230 / $13,500</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-green-600 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Security Suite</h3>
                      <p className="text-xs text-gray-400">Software</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold">$5,630</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>45% of target</span>
                  <span>$5,630 / $12,500</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-purple-600 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Workflow Plus</h3>
                      <p className="text-xs text-gray-400">Software</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold">$4,120</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '38%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>38% of target</span>
                  <span>$4,120 / $11,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 p-4 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2025 CultUI. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CultUIDashboard;