import React, { useState, ReactNode } from 'react';
import { LineChart, BarChart, PieChart, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Area, Bar, Pie, Cell } from 'recharts';
import './TremorDashboard.css';

// Sample data
const salesData = [
  {
    date: "Jan 22",
    SaaS: 2890,
    Services: 2338,
    Marketplace: 3100
  },
  {
    date: "Feb 22",
    SaaS: 2756,
    Services: 2103,
    Marketplace: 3250
  },
  {
    date: "Mar 22",
    SaaS: 3322,
    Services: 2194,
    Marketplace: 3475
  },
  {
    date: "Apr 22",
    SaaS: 3470,
    Services: 2108,
    Marketplace: 3680
  },
  {
    date: "May 22",
    SaaS: 3475,
    Services: 1812,
    Marketplace: 3860
  },
  {
    date: "Jun 22",
    SaaS: 3129,
    Services: 1726,
    Marketplace: 3510
  }
];

const cities = [
  {
    name: "New York",
    sales: 9800,
    color: "blue"
  },
  {
    name: "London",
    sales: 4567,
    color: "emerald"
  },
  {
    name: "Tokyo",
    sales: 3908,
    color: "amber"
  },
  {
    name: "San Francisco",
    sales: 2400,
    color: "rose"
  },
  {
    name: "Singapore",
    sales: 1908,
    color: "indigo"
  },
  {
    name: "Paris",
    sales: 1398,
    color: "cyan"
  }
];

// Customer acquisition data
const acquisitionData = [
  { date: "Jan 22", Organic: 629, Referral: 210, Direct: 150 },
  { date: "Feb 22", Organic: 541, Referral: 188, Direct: 120 },
  { date: "Mar 22", Organic: 723, Referral: 230, Direct: 160 },
  { date: "Apr 22", Organic: 672, Referral: 190, Direct: 179 },
  { date: "May 22", Organic: 695, Referral: 205, Direct: 185 },
  { date: "Jun 22", Organic: 731, Referral: 247, Direct: 190 }
];

// Acquisition channels data
const channelsData = [
  { name: "Organic Search", value: 3920 },
  { name: "Social Media", value: 1877 },
  { name: "Referrals", value: 1543 },
  { name: "Direct", value: 984 },
  { name: "Other", value: 562 }
];

// Define interfaces for component props
interface CardProps {
  children: ReactNode;
  className?: string;
}

interface MetricProps {
  children: ReactNode;
  className?: string;
}

interface TextProps {
  children: ReactNode;
  className?: string;
}

interface TitleProps {
  children: ReactNode;
  className?: string;
}

interface SubtitleProps {
  children: ReactNode;
  className?: string;
}

interface ProgressBarProps {
  value: number;
  color?: string;
  className?: string;
  ariaLabel: string;
}

interface BadgeDeltaProps {
  children: ReactNode;
  deltaType?: string;
  className?: string;
}

interface DonutChartProps {
  data: Array<Record<string, any>>;
  category: string;
  index: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
}

// Custom Tremor-like components
const Card = ({ children, className = "" }: CardProps) => (
  <div className={`tremor-card ${className}`}>
    {children}
  </div>
);

const Metric = ({ children, className = "" }: MetricProps) => (
  <p className={`tremor-metric ${className}`}>{children}</p>
);

const Text = ({ children, className = "" }: TextProps) => (
  <p className={`tremor-text ${className}`}>{children}</p>
);

const Title = ({ children, className = "" }: TitleProps) => (
  <h2 className={`tremor-title ${className}`}>{children}</h2>
);

const Subtitle = ({ children, className = "" }: SubtitleProps) => (
  <p className={`tremor-subtitle ${className}`}>{children}</p>
);

const ProgressBar = ({ value, color = "blue", className = "", ariaLabel }: ProgressBarProps) => {
  const getColorClass = () => {
    const colors: Record<string, string> = {
      blue: "tremor-bg-blue",
      emerald: "tremor-bg-emerald",
      rose: "tremor-bg-rose",
      amber: "tremor-bg-amber",
      indigo: "tremor-bg-indigo",
      cyan: "tremor-bg-cyan"
    };
    return colors[color] || "tremor-bg-blue";
  };
  
  // Modified approach to avoid ARIA attribute issues
  return (
    <div className={`tremor-progressbar-container ${className}`}>
      <div
        className={`tremor-progressbar-bar ${getColorClass()}`}
        style={{ width: `${value}%` }}
        title={ariaLabel}
      ></div>
    </div>
  );
};

const BadgeDelta = ({ children, deltaType = "increase", className = "" }: BadgeDeltaProps) => {
  const getColorClass = () => {
    const classes: Record<string, string> = {
      increase: "tremor-badge-increase",
      moderateIncrease: "tremor-badge-moderate-increase",
      decrease: "tremor-badge-decrease",
      moderateDecrease: "tremor-badge-moderate-decrease",
      unchanged: "tremor-badge-unchanged"
    };
    return classes[deltaType] || "tremor-badge-unchanged";
  };
  
  return (
    <span className={`tremor-badge-delta ${getColorClass()} ${className}`}>
      {children}
    </span>
  );
};

// Simple tab interface components
const Tabs: React.FC<{
  tabs: string[];
  activeTab: number;
  setActiveTab: (index: number) => void;
  className?: string;
}> = ({ tabs, activeTab, setActiveTab, className = "" }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div role="tablist" className="flex space-x-1">
        {tabs.map((tab, index) => {
          return index === activeTab ? (
            <button
              key={index}
              role="tab"
              id={`tab-${index}`}
              aria-selected="true"
              aria-controls={`panel-${index}`}
              tabIndex={0}
              className="tremor-tab-active"
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ) : (
            <button
              key={index}
              role="tab"
              id={`tab-${index}`}
              aria-selected="false"
              aria-controls={`panel-${index}`}
              tabIndex={-1}
              className="tremor-tab-inactive"
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const TabPanel: React.FC<{
  id: string;
  ariaLabelledBy: string;
  isActive: boolean;
  children: ReactNode;
  className?: string;
}> = ({ id, ariaLabelledBy, isActive, children, className = "" }) => {
  if (!isActive) return null;
  
  return (
    <div 
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledBy}
      className={className}
    >
      {children}
    </div>
  );
};

const DonutChart = ({ data, category, index, colors, valueFormatter, className = "" }: DonutChartProps) => {
  const COLORS = colors || ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];
  
  const formattedData = data.map(item => ({
    name: item[index],
    value: item[category]
  }));
  
  const formatter = valueFormatter || ((value: number) => `$${value.toLocaleString()}`);
  
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <PieChart>
        <Pie
          data={formattedData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => formatter(value as number)} />
      </PieChart>
    </ResponsiveContainer>
  );
};

const valueFormatter = (number: number) => `$ ${new Intl.NumberFormat('us').format(number).toString()}`;

interface KPIData {
  title: string;
  metric: string;
  progress: number;
  target: string;
  delta: string;
  deltaType: string;
}

const TremorDashboard = () => {
  const [selectedView, setSelectedView] = useState(0);
  
  const kpiData: KPIData[] = [
    {
      title: "Sales",
      metric: "$ 12,699",
      progress: 15.9,
      target: "$ 80,000",
      delta: "13.2%",
      deltaType: "moderateIncrease"
    },
    {
      title: "Profit",
      metric: "$ 45,564",
      progress: 36.5,
      target: "$ 125,000",
      delta: "23.9%",
      deltaType: "increase"
    },
    {
      title: "Customers",
      metric: "1,072",
      progress: 53.6,
      target: "2,000",
      delta: "10.1%",
      deltaType: "moderateDecrease"
    }
  ];
  
  return (
    <div className="bg-gray-900 min-h-screen p-6 overflow-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Tremor Dashboard</h1>
        <p className="text-gray-400">Business analytics and insights</p>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {kpiData.map((item, idx) => (
          <Card key={idx}>
            <div className="flex justify-between items-start">
              <div>
                <Text className="text-sm">{item.title}</Text>
                <Metric>{item.metric}</Metric>
              </div>
              <BadgeDelta deltaType={item.deltaType}>
                {item.delta}
              </BadgeDelta>
            </div>
            <div className="mt-4">
              <Text className="text-sm mb-2">{`${item.progress}% (${item.metric} / ${item.target})`}</Text>
              <ProgressBar
                value={item.progress}
                color={item.deltaType === "increase" || item.deltaType === "moderateIncrease" ? "emerald" : "rose"}
                ariaLabel={`${item.title} progress: ${item.progress}% of target ${item.target}`}
              />
            </div>
          </Card>
        ))}
      </div>
      
      {/* Tab Group */}
      <Card className="mb-6">
        <div className="mb-6">
          <Title>Performance Analytics</Title>
          <Text className="mt-1">Detailed analysis of your business performance</Text>
        </div>
        
        <Tabs 
          tabs={["Overview", "Revenue", "Customers"]} 
          activeTab={selectedView} 
          setActiveTab={setSelectedView} 
        />
        
        {/* Overview Tab Panel */}
        <TabPanel 
          id="panel-0" 
          ariaLabelledBy="tab-0" 
          isActive={selectedView === 0}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <Title className="mb-2">Sales by Category</Title>
              <div className="h-72 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={salesData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="date" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                    <Legend />
                    <Area type="monotone" dataKey="SaaS" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="Services" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="Marketplace" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <Title className="mb-2">Sales by City</Title>
              <div className="h-72 mt-4">
                <DonutChart
                  data={cities}
                  category="sales"
                  index="name"
                  colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#6366f1", "#06b6d4"]}
                  valueFormatter={valueFormatter}
                />
              </div>
            </div>
          </div>
        </TabPanel>
        
        {/* Revenue Tab Panel */}
        <TabPanel 
          id="panel-1" 
          ariaLabelledBy="tab-1" 
          isActive={selectedView === 1}
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <Title className="mb-2">Revenue Over Time</Title>
              <div className="h-72 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salesData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="date" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                    <Legend />
                    <Line type="monotone" dataKey="SaaS" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="Services" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="Marketplace" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <Title className="mb-2">Revenue Breakdown</Title>
              <div className="h-72 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={salesData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="date" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                    <Legend />
                    <Bar dataKey="SaaS" fill="#3b82f6" />
                    <Bar dataKey="Services" fill="#8b5cf6" />
                    <Bar dataKey="Marketplace" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </TabPanel>
        
        {/* Customers Tab Panel */}
        <TabPanel 
          id="panel-2" 
          ariaLabelledBy="tab-2" 
          isActive={selectedView === 2}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gray-700 rounded-lg p-4">
              <Title className="mb-2">Customer Acquisition</Title>
              <div className="h-72 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={acquisitionData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="date" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                    <Legend />
                    <Area type="monotone" dataKey="Organic" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="Referral" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="Direct" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <Title className="mb-2">Acquisition Channels</Title>
              <div className="h-72 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={channelsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {channelsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"][index % 5]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#333', color: 'white', border: 'none' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </TabPanel>
      </Card>
      
      {/* Recent Transactions */}
      <Card>
        <div className="mb-6">
          <Title>Recent Transactions</Title>
          <Text className="mt-1">Latest activity in your account</Text>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="pb-3 pr-4 font-medium">Transaction</th>
                <th className="pb-3 pr-4 font-medium">Date</th>
                <th className="pb-3 pr-4 font-medium">Amount</th>
                <th className="pb-3 pr-4 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-4 pr-4 text-white">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <span className="text-white text-sm">AA</span>
                    </div>
                    <div>
                      <p className="font-medium">Annual Subscription</p>
                      <p className="text-sm text-gray-400">Acme Inc.</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4 text-gray-300">Feb 15, 2023</td>
                <td className="py-4 pr-4 text-white font-medium">$2,500.00</td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="py-4">
                  <button className="text-blue-400 hover:text-blue-300" aria-label="View details for Acme Inc. transaction">Details</button>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 pr-4 text-white">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <span className="text-white text-sm">GL</span>
                    </div>
                    <div>
                      <p className="font-medium">Premium Plan</p>
                      <p className="text-sm text-gray-400">Global Labs</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4 text-gray-300">Feb 12, 2023</td>
                <td className="py-4 pr-4 text-white font-medium">$899.00</td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="py-4">
                  <button className="text-blue-400 hover:text-blue-300" aria-label="View details for Global Labs transaction">Details</button>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 pr-4 text-white">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center mr-3">
                      <span className="text-white text-sm">TC</span>
                    </div>
                    <div>
                      <p className="font-medium">Basic Plan</p>
                      <p className="text-sm text-gray-400">TechCorp</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4 text-gray-300">Feb 8, 2023</td>
                <td className="py-4 pr-4 text-white font-medium">$199.00</td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Failed
                  </span>
                </td>
                <td className="py-4">
                  <button className="text-blue-400 hover:text-blue-300" aria-label="View details for TechCorp transaction">Details</button>
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4 text-white">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                      <span className="text-white text-sm">MS</span>
                    </div>
                    <div>
                      <p className="font-medium">Enterprise Plan</p>
                      <p className="text-sm text-gray-400">MetaSystems</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4 text-gray-300">Feb 3, 2023</td>
                <td className="py-4 pr-4 text-white font-medium">$5,999.00</td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="py-4">
                  <button className="text-blue-400 hover:text-blue-300" aria-label="View details for MetaSystems transaction">Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm" aria-label="View all transaction history">View All Transactions</button>
        </div>
      </Card>
    </div>
  );
};

export default TremorDashboard;
