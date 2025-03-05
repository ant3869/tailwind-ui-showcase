import React, { useState } from 'react';
import { LineChart, BarChart, PieChart, AreaChart, Area, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, Line, Pie } from 'recharts';

// Sample data for dashboard visualizations
const revenueData = [
  { month: 'Jan', revenue: 8400, profit: 3800, expenses: 4600 },
  { month: 'Feb', revenue: 9200, profit: 4300, expenses: 4900 },
  { month: 'Mar', revenue: 7800, profit: 3500, expenses: 4300 },
  { month: 'Apr', revenue: 9600, profit: 5100, expenses: 4500 },
  { month: 'May', revenue: 11200, profit: 6300, expenses: 4900 },
  { month: 'Jun', revenue: 10400, profit: 5800, expenses: 4600 },
  { month: 'Jul', revenue: 12500, profit: 7100, expenses: 5400 },
];

const productData = [
  { name: 'Product A', value: 35, color: '#7928CA' },
  { name: 'Product B', value: 25, color: '#0070F3' },
  { name: 'Product C', value: 20, color: '#FF4D4D' },
  { name: 'Product D', value: 15, color: '#17C964' },
  { name: 'Others', value: 5, color: '#F5A623' },
];

const userActivityData = [
  { name: 'Mon', active: 120, new: 45 },
  { name: 'Tue', active: 132, new: 38 },
  { name: 'Wed', active: 101, new: 42 },
  { name: 'Thu', active: 134, new: 35 },
  { name: 'Fri', active: 90, new: 28 },
  { name: 'Sat', active: 85, new: 17 },
  { name: 'Sun', active: 93, new: 20 },
];

// Interface for dropdown item props
interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// NextUI Dashboard Component
const NextUIDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="flex flex-col" style={{ backgroundColor: '#0F1011', color: '#ECEDEE', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav className="flex justify-between items-center py-3 px-4 shadow-md" style={{ backgroundColor: '#16181A' }}>
        <div className="flex items-center gap-2">
          <div className="flex">
            <div className="w-8 h-8 mr-2 rounded flex items-center justify-center" style={{ background: 'linear-gradient(to top right, #3b82f6, #8b5cf6)' }}>
              <span className="font-bold text-white">N</span>
            </div>
            <p className="font-bold text-inherit">NextUI Dashboard</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-4">
            <div className={`cursor-pointer text-sm ${selectedTab === 'dashboard' ? 'font-semibold' : ''}`} onClick={() => setSelectedTab('dashboard')}>
              Dashboard
            </div>
            <div className={`cursor-pointer text-sm ${selectedTab === 'analytics' ? 'font-semibold' : ''}`} onClick={() => setSelectedTab('analytics')}>
              Analytics
            </div>
            <div className={`cursor-pointer text-sm ${selectedTab === 'team' ? 'font-semibold' : ''}`} onClick={() => setSelectedTab('team')}>
              Team
            </div>
            <div className={`cursor-pointer text-sm ${selectedTab === 'settings' ? 'font-semibold' : ''}`} onClick={() => setSelectedTab('settings')}>
              Settings
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="rounded-lg font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm" aria-label="Search">
            Search
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: 'linear-gradient(to top right, #3b82f6, #8b5cf6)' }}>
              J
            </div>
            <div>
              <div className="text-sm font-semibold">Jane Doe</div>
              <div className="text-xs text-gray-400">Admin</div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="flex-grow overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#4a5568 #2d3748' }}>
        <div className="max-w-full mx-auto px-4 py-4 pb-24">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Revenue Card */}
            <div className="rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: '#16181A' }}>
              <div className="px-6 py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-small text-gray-400">Total Revenue</p>
                    <p className="text-2xl font-bold">$45,231.89</p>
                    <p className="text-small text-green-500">+20.1% from last month</p>
                  </div>
                  <div className="rounded-full p-2 flex items-center justify-center" style={{ background: 'rgba(0, 112, 243, 0.1)', color: '#0070F3' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2 .89-2 2 0 .598.23 1.107.64 1.444M12 2.5c2.28 0 4.5.99 6 2.5 1.5 1.51 2.5 3.77 2.5 6 0 2.2-.89 4.2-2.33 5.67" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Users Card */}
            <div className="rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: '#16181A' }}>
              <div className="px-6 py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-small text-gray-400">Total Users</p>
                    <p className="text-2xl font-bold">12,345</p>
                    <p className="text-small text-green-500">+8.2% from last month</p>
                  </div>
                  <div className="rounded-full p-2 flex items-center justify-center" style={{ background: 'rgba(121, 40, 202, 0.1)', color: '#7928CA' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Orders Card */}
            <div className="rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: '#16181A' }}>
              <div className="px-6 py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-small text-gray-400">Total Orders</p>
                    <p className="text-2xl font-bold">1,234</p>
                    <p className="text-small text-green-500">+12.4% from last month</p>
                  </div>
                  <div className="rounded-full p-2 flex items-center justify-center" style={{ background: 'rgba(23, 201, 100, 0.1)', color: '#17C964' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conversion Card */}
            <div className="rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: '#16181A' }}>
              <div className="px-6 py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-small text-gray-400">Conversion Rate</p>
                    <p className="text-2xl font-bold">2.5%</p>
                    <p className="text-small text-red-500">-0.3% from last month</p>
                  </div>
                  <div className="rounded-full p-2 flex items-center justify-center" style={{ background: 'rgba(255, 77, 77, 0.1)', color: '#FF4D4D' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Line Chart */}
            <div className="rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: '#16181A' }}>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium mb-4">Revenue Trend</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#16181A', borderColor: '#27272A' }}
                        labelStyle={{ color: '#ECEDEE' }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#0070F3" strokeWidth={2} dot={{ r: 4 }} />
                      <Line type="monotone" dataKey="profit" stroke="#17C964" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Pie Chart */}
            <div className="rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: '#16181A' }}>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium mb-4">Product Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={productData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {productData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#16181A', borderColor: '#27272A' }}
                        labelStyle={{ color: '#ECEDEE' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          
          {/* Table */}
          <div className="rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: '#16181A' }}>
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium mb-4">Recent Transactions</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y" style={{ borderColor: '#27272A' }}>
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#9ca3af' }}>ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#9ca3af' }}>Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#9ca3af' }}>Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#9ca3af' }}>Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#9ca3af' }}>Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: '#27272A' }}>
                    {[
                      { id: 'TRX-001', customer: 'Apple Inc', amount: '$2,399.99', status: 'completed', date: '2025-02-24' },
                      { id: 'TRX-002', customer: 'Microsoft', amount: '$1,599.99', status: 'processing', date: '2025-02-24' },
                      { id: 'TRX-003', customer: 'Google', amount: '$899.99', status: 'completed', date: '2025-02-23' },
                      { id: 'TRX-004', customer: 'Amazon', amount: '$349.99', status: 'failed', date: '2025-02-23' },
                      { id: 'TRX-005', customer: 'Netflix', amount: '$1,299.99', status: 'completed', date: '2025-02-22' },
                    ].map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaction.status === 'completed' ? 'bg-green-600 text-white' :
                            transaction.status === 'processing' ? 'bg-blue-600 text-white' :
                            'bg-red-500 text-white'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextUIDashboard;
