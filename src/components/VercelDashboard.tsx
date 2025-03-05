import React, { useState } from 'react';
import { LineChart, AreaChart, BarChart, PieChart, Line, Area, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie } from 'recharts';

// Sample data for charts
const performanceData = [
  { name: 'Jan', pageViews: 4000, uniqueVisitors: 2400, avgTime: 1.4 },
  { name: 'Feb', pageViews: 3000, uniqueVisitors: 1398, avgTime: 2.0 },
  { name: 'Mar', pageViews: 2000, uniqueVisitors: 9800, avgTime: 2.3 },
  { name: 'Apr', pageViews: 2780, uniqueVisitors: 3908, avgTime: 1.9 },
  { name: 'May', pageViews: 1890, uniqueVisitors: 4800, avgTime: 2.2 },
  { name: 'Jun', pageViews: 2390, uniqueVisitors: 3800, avgTime: 2.5 },
  { name: 'Jul', pageViews: 3490, uniqueVisitors: 4300, avgTime: 1.8 },
];

const deploymentData = [
  { name: 'Production', value: 68 },
  { name: 'Preview', value: 22 },
  { name: 'Development', value: 10 },
];

const COLORS = ['#0070F3', '#50E3C2', '#F5A623', '#7928CA'];

const VercelDashboard = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [notification, setNotification] = useState(true);
  
  const dismissNotification = () => setNotification(false);
  
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.0099 7.1845L12.5356 14.3457L9.9787 10.28L7.05 15.1978H16.9451L17.0099 7.1845Z" fill="white"/>
            </svg>
            <h1 className="ml-3 text-xl font-bold">Vercel Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="p-6">
        {/* Notification */}
        {notification && (
          <div className="bg-blue-900 border border-blue-800 rounded-md p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-400">New Features Available</h3>
                  <div className="mt-1 text-sm text-blue-200">
                    We've updated our analytics dashboard with new visualization options and performance improvements.
                  </div>
                </div>
              </div>
              <button type="button" className="text-blue-400 hover:text-blue-300" onClick={dismissNotification}>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}
        
        {/* Top stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900 border border-gray-800 rounded-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Total Deployments</p>
                <p className="text-2xl font-bold mt-1">1,284</p>
              </div>
              <div className="bg-blue-900 bg-opacity-20 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-green-500 text-xs font-medium">↑ 7.2%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Average Deploy Time</p>
                <p className="text-2xl font-bold mt-1">48s</p>
              </div>
              <div className="bg-green-900 bg-opacity-20 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-green-500 text-xs font-medium">↓ 12.5%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Success Rate</p>
                <p className="text-2xl font-bold mt-1">99.8%</p>
              </div>
              <div className="bg-purple-900 bg-opacity-20 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-green-500 text-xs font-medium">↑ 0.3%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Total Bandwidth</p>
                <p className="text-2xl font-bold mt-1">3.2 TB</p>
              </div>
              <div className="bg-yellow-900 bg-opacity-20 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-red-500 text-xs font-medium">↑ 18.9%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-800">
            <nav className="-mb-px flex">
              <button
                className={`mr-6 py-2 text-sm font-medium ${
                  selectedView === 'overview'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setSelectedView('overview')}
              >
                Overview
              </button>
              <button
                className={`mr-6 py-2 text-sm font-medium ${
                  selectedView === 'analytics'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setSelectedView('analytics')}
              >
                Analytics
              </button>
              <button
                className={`mr-6 py-2 text-sm font-medium ${
                  selectedView === 'deployments'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setSelectedView('deployments')}
              >
                Deployments
              </button>
              <button
                className={`py-2 text-sm font-medium ${
                  selectedView === 'settings'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setSelectedView('settings')}
              >
                Settings
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main content based on selected tab */}
        <div>
          {selectedView === 'overview' && (
            <div>
              {/* Charts section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-md p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">Website Traffic</h2>
                    <div className="flex space-x-2">
                      <button className="bg-gray-800 px-2.5 py-1 rounded-md text-xs font-medium text-gray-300 hover:bg-gray-700">Day</button>
                      <button className="bg-blue-600 px-2.5 py-1 rounded-md text-xs font-medium text-white">Week</button>
                      <button className="bg-gray-800 px-2.5 py-1 rounded-md text-xs font-medium text-gray-300 hover:bg-gray-700">Month</button>
                    </div>
                  </div>
                  <div style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={performanceData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="pageViews" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0070F3" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#0070F3" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="uniqueVisitors" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#50E3C2" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#50E3C2" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#666" />
                        <YAxis stroke="#666" />
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#222', borderColor: '#333' }}
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#999' }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="pageViews" 
                          stroke="#0070F3" 
                          fillOpacity={1} 
                          fill="url(#pageViews)" 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="uniqueVisitors" 
                          stroke="#50E3C2" 
                          fillOpacity={1} 
                          fill="url(#uniqueVisitors)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="bg-gray-900 border border-gray-800 rounded-md p-4">
                  <h2 className="text-lg font-medium mb-4">Deployment Types</h2>
                  <div style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deploymentData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {deploymentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#222', borderColor: '#333' }}
                          itemStyle={{ color: '#fff' }}
                          formatter={(value) => [`${value}%`, 'Percentage']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              {/* Recent deployments */}
              <div className="bg-gray-900 border border-gray-800 rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">Recent Deployments</h2>
                  <button className="text-xs text-blue-500 hover:text-blue-400 font-medium">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-800">
                    <thead>
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Deployment</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Branch</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Author</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Age</th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="flex items-center">
                            <span className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></span>
                            <span className="text-sm">Ready</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">my-project-5g7e9tj</div>
                          <div className="text-sm text-gray-400">Production</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">main</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                              <span className="text-xs">JD</span>
                            </div>
                            <div className="text-sm">Jane Doe</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">5h ago</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-blue-500 hover:text-blue-400">Visit</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="flex items-center">
                            <span className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></span>
                            <span className="text-sm">Ready</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">feature-ui-update-3fj72k</div>
                          <div className="text-sm text-gray-400">Preview</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">feature/ui-update</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                              <span className="text-xs">JD</span>
                            </div>
                            <div className="text-sm">Jane Doe</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">1d ago</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-blue-500 hover:text-blue-400">Visit</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="flex items-center">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2"></span>
                            <span className="text-sm">Error</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">bugfix-8hj3kl2</div>
                          <div className="text-sm text-gray-400">Preview</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">bugfix/auth</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                              <span className="text-xs">JD</span>
                            </div>
                            <div className="text-sm">Jane Doe</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">2d ago</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-blue-500 hover:text-blue-400">Redeploy</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">
            © 2025 Vercel, Inc. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-300">Help</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-300">Status</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-300">Feedback</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VercelDashboard;