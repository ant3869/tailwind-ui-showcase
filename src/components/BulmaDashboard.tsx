import React, { useState, useEffect } from 'react';
import { LineChart, BarChart, PieChart, Area, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Pie } from 'recharts';
import '../styles/bulma.css'; // External CSS file

// Data for visualizations
const salesData = [
  { name: 'Jan', value: 4000, previous: 3200 },
  { name: 'Feb', value: 3000, previous: 2800 },
  { name: 'Mar', value: 2000, previous: 2400 },
  { name: 'Apr', value: 2780, previous: 2200 },
  { name: 'May', value: 1890, previous: 2100 },
  { name: 'Jun', value: 2390, previous: 2700 },
  { name: 'Jul', value: 3490, previous: 3100 },
];

const pieData = [
  { name: 'Product A', value: 400, color: '#8884d8' },
  { name: 'Product B', value: 300, color: '#83a6ed' },
  { name: 'Product C', value: 300, color: '#8dd1e1' },
  { name: 'Product D', value: 200, color: '#82ca9d' },
];

const barData = [
  { name: 'Q1', online: 400, offline: 240 },
  { name: 'Q2', online: 300, offline: 138 },
  { name: 'Q3', online: 200, offline: 980 },
  { name: 'Q4', online: 278, offline: 390 },
];

const darkStyles = {
  // Core containers
  appContainer: {
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    minHeight: '100vh',
  },
  navbar: {
    backgroundColor: '#121212',
    color: '#ffffff',
  },
  sidebar: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    borderColor: '#333',
  },
  cardHeader: {
    backgroundColor: '#202020',
    color: '#ffffff',
    borderBottomColor: '#333',
  },
  cardFooter: {
    backgroundColor: '#202020',
    color: '#ffffff',
    borderTopColor: '#333',
  },
  box: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  },
  table: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  },
  tableRow: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    borderColor: '#333',
  },
  tableRowHover: {
    backgroundColor: '#252525',
  },
  input: {
    backgroundColor: '#252525',
    color: '#ffffff',
    borderColor: '#444',
  },
  select: {
    backgroundColor: '#252525',
    color: '#ffffff',
    borderColor: '#444',
  },
  button: {
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
  },
  modal: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  },
  modalHeader: {
    backgroundColor: '#202020',
    color: '#ffffff',
    borderBottomColor: '#333',
  },
  modalFooter: {
    backgroundColor: '#202020',
    color: '#ffffff',
    borderTopColor: '#333',
  },
  dropdown: {
    backgroundColor: '#252525',
    color: '#ffffff',
  },
  footer: {
    backgroundColor: '#121212',
    color: '#ffffff',
  },
  menu: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  },
  divider: {
    backgroundColor: '#333',
  }
};

// Type definition for Icon component props
interface IconProps {
  name: string;
  className?: string;
}

// Custom styled FontAwesome icon component
const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  return (
    <span className={`icon ${className}`}>
      <i className={`fas fa-${name}`}></i>
    </span>
  );
};

const BulmaDashboard = () => {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (dropdown: string) => { setActiveDropdown(activeDropdown === dropdown ? null : dropdown);};

    useEffect(() => {
      const fontAwesome = document.createElement("link");
      fontAwesome.rel = "stylesheet";
      fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
      fontAwesome.id = "fontAwesomeStyles";

      const bulma = document.createElement("link");
      bulma.rel = "stylesheet";
      bulma.href = "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css";
      bulma.id = "bulmaStyles";

      document.head.appendChild(fontAwesome);
      document.head.appendChild(bulma);

      return () => {
          const fontAwesomeTag = document.getElementById("fontAwesomeStyles");
          const bulmaTag = document.getElementById("bulmaStyles");

          if (fontAwesomeTag) document.head.removeChild(fontAwesomeTag);
          if (bulmaTag) document.head.removeChild(bulmaTag);
      };
    }, []);



    console.log('Rendering BulmaDashboard component');

  function handleTabChange(newTab: string): void {
    setActiveTab(newTab);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }
  return (
      <div className="dashboard-app-container">
      {/* Navbar */}
      <nav className="navbar dashboard-navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <span className="is-size-4 has-text-weight-bold">
              <span className="has-text-primary">Bulma</span>
              <span>Dashboard</span>
            </span>
          </a>

          <button 
            role="button" 
            className={`navbar-burger ${isMobileMenuOpen ? 'is-active' : ''}`} 
            aria-label="menu" 
          //  aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''} dashboard-navbar`}>
          <div className="navbar-start">
            <a 
              className={`navbar-item ${activeTab === 'dashboard' ? 'is-active' : ''}`}
              onClick={() => handleTabChange('dashboard')}
              href="#"
              aria-label="Dashboard"
              aria-current={activeTab === 'dashboard' ? 'page' : undefined}
            >
              <span className="icon-text">
                <Icon name="home" />
                <span>Dashboard</span>
              </span>
            </a>
    
            <a 
              className={`navbar-item ${activeTab === 'analytics' ? 'is-active' : ''}`}
              onClick={() => handleTabChange('analytics')}
              href="#"
              aria-label="Analytics"
              aria-current={activeTab === 'analytics' ? 'page' : undefined}
            >
              <span className="icon-text">
                <Icon name="chart-line" />
                <span>Analytics</span>
              </span>
            </a>
            
            <div className={`navbar-item has-dropdown ${activeDropdown === 'reports' ? 'is-active' : ''}`}>
              <a 
                className="navbar-link dashboard-navbar"
                onClick={() => toggleDropdown('reports')}
                href="#"
                aria-haspopup="true"
              //  aria-expanded={activeDropdown === 'reports'}
                aria-label="Reports dropdown"
              >
                <span className="icon-text">
                  <Icon name="file-alt" />
                  <span>Reports</span>
                </span>
              </a>

              <div className="navbar-dropdown dashboard-dropdown">
                <a className="navbar-item dropdown-item" href="#" aria-label="Sales Report">
                  Sales Report
                </a>
                <a className="navbar-item dropdown-item" href="#" aria-label="Customer Analytics">
                  Customer Analytics
                </a>
                <a className="navbar-item dropdown-item" href="#" aria-label="Inventory Status">
                  Inventory Status
                </a>
                <hr className="navbar-divider dashboard-divider" />
                <a className="navbar-item dropdown-item" href="#" aria-label="Custom Report">
                  Custom Report
                </a>
              </div>
            </div>
            
            {/* Additional navbar items would go here */}
            
            <div className={`navbar-item has-dropdown ${activeDropdown === 'admin' ? 'is-active' : ''}`}>
              <a 
                className="navbar-link"
                style={darkStyles.navbar}
                onClick={() => toggleDropdown('admin')}
              >
                <span className="icon-text">
                  <Icon name="cogs" />
                  <span>Administration</span>
                </span>
              </a>
        
              <div className="navbar-dropdown" style={darkStyles.dropdown}>
                <a className="navbar-item" style={{ color: '#ffffff' }}>
                  User Management
                </a>
                <a className="navbar-item" style={{ color: '#ffffff' }}>
                  Permissions
                </a>
                <a className="navbar-item" style={{ color: '#ffffff' }}>
                  System Settings
                </a>
                <hr className="navbar-divider" style={darkStyles.divider} />
                <a className="navbar-item" style={{ color: '#ffffff' }}>
                  Audit Logs
                </a>
              </div>
            </div>
          </div>
            
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field has-addons">
                <div className="control">
                  <input 
                    className="input is-small" 
                    type="text" 
                    placeholder="Search..." 
                    style={darkStyles.input}
                  />
                </div>
                <div className="control">
                  <button className="button is-small is-primary" aria-label="Search" title="Search">
                    <Icon name="search" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" style={darkStyles.navbar}>
                <span className="icon-text">
                  <Icon name="bell" />
                  <span className="tag is-danger is-rounded is-small">3</span>
                </span>
              </a>
              <div className="navbar-dropdown is-right" style={darkStyles.dropdown}>
                <a className="navbar-item" style={{ color: '#ffffff' }}>
                  <div className="is-size-7">New order received</div>
                  <div className="is-size-7 has-text-grey-light">5 minutes ago</div>
                </a>
                <hr className="navbar-divider" style={darkStyles.divider} />
                <a className="navbar-item" style={{ color: '#ffffff' }}>
                  <div className="is-size-7">Server alert: CPU usage high</div>
                  <div className="is-size-7 has-text-grey-light">12 minutes ago</div>
                </a>
                <hr className="navbar-divider" style={darkStyles.divider} />
                <a className="navbar-item" style={{ color: '#ffffff' }}>
                  <div className="is-size-7">New customer registered</div>
                  <div className="is-size-7 has-text-grey-light">1 hour ago</div>
                </a>
              </div>
            </div>
            
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-primary">
                  <strong>New Item</strong>
                </button>
                <button className="button" style={darkStyles.button}>
                  <Icon name="user" />
                  <span>Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`} style={darkStyles.navbar}>
        <div className="navbar-start">
          <a 
            className={`navbar-item ${activeTab === 'dashboard' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
            style={activeTab === 'dashboard' ? { backgroundColor: '#252525' } : {}}
          >
            <span className="icon-text">
              <Icon name="home" />
              <span>Dashboard</span>
            </span>
          </a>
          
          <a 
            className={`navbar-item ${activeTab === 'analytics' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('analytics')}
            style={activeTab === 'analytics' ? { backgroundColor: '#252525' } : {}}
          >
            <span className="icon-text">
              <Icon name="chart-line" />
              <span>Analytics</span>
            </span>
          </a>
          
          <div className={`navbar-item has-dropdown ${activeDropdown === 'reports' ? 'is-active' : ''}`}>
            <a 
              className="navbar-link"
              style={darkStyles.navbar}
              onClick={() => toggleDropdown('reports')}
            >
              <span className="icon-text">
                <Icon name="file-alt" />
                <span>Reports</span>
              </span>
            </a>

            <div className="navbar-dropdown" style={darkStyles.dropdown}>
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                Sales Report
              </a>
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                Customer Analytics
              </a>
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                Inventory Status
              </a>
              <hr className="navbar-divider" style={darkStyles.divider} />
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                Custom Report
              </a>
            </div>
          </div>
          
          <div className={`navbar-item has-dropdown ${activeDropdown === 'admin' ? 'is-active' : ''}`}>
            <a 
              className="navbar-link"
              style={darkStyles.navbar}
              onClick={() => toggleDropdown('admin')}
            >
              <span className="icon-text">
                <Icon name="cogs" />
                <span>Administration</span>
              </span>
            </a>

            <div className="navbar-dropdown" style={darkStyles.dropdown}>
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                User Management
              </a>
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                Permissions
              </a>
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                System Settings
              </a>
              <hr className="navbar-divider" style={darkStyles.divider} />
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                Audit Logs
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control"> 
                <input 
                    className="input is-small" 
                    type="text" 
                    placeholder="Report" 
                    style={darkStyles.input}
                  />
                <span>Customer Report</span>
              </div>
            </div>
          </div>
          
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input 
                  className="input is-small" 
                  type="text" 
                  placeholder="Search..." 
                  style={darkStyles.input}
                />
              </div>
              <div className="control">
                <button className="button is-small is-primary" aria-label="Search" title="Search">
                  <Icon name="search" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" style={darkStyles.navbar}>
              <span className="icon-text">
                <Icon name="bell" />
                <span className="tag is-danger is-rounded is-small">3</span>
              </span>
            </a>
            <div className="navbar-dropdown is-right" style={darkStyles.dropdown}>
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                <div className="is-size-7">New order received</div>
                <div className="is-size-7 has-text-grey-light">5 minutes ago</div>
              </a>
              <hr className="navbar-divider" style={darkStyles.divider} />
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                <div className="is-size-7">Server alert: CPU usage high</div>
                <div className="is-size-7 has-text-grey-light">12 minutes ago</div>
              </a>
              <hr className="navbar-divider" style={darkStyles.divider} />
              <a className="navbar-item" style={{ color: '#ffffff' }}>
                <div className="is-size-7">New customer registered</div>
                <div className="is-size-7 has-text-grey-light">1 hour ago</div>
              </a>
            </div>
          </div>
          
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary">
                <strong>New Item</strong>
              </button>
              <button className="button" style={darkStyles.button}>
                <Icon name="user" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="breadcrumb p-3" style={{ backgroundColor: '#161616' }} aria-label="breadcrumbs">
      <ul style={{ margin: 0 }}>
          <li><a className="has-text-grey-light">Home</a></li>
          <li className="is-active"><a className="has-text-white" aria-current="page">Dashboard</a></li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="section pt-4 pb-4">
        <div className="container">
          {/* Notification */}
          {notificationVisible && (
            <div className="notification is-info is-light">
              <button className="delete" onClick={() => setNotificationVisible(false)} aria-label="Close notification" title="Close notification"></button>
              <strong>Pro Tip:</strong> You can customize this dashboard by clicking the gear icon in each widget.
            </div>
          )}
          
          {/* Hero with stats */}
          <div className="box" style={darkStyles.box}>
            <div className="columns is-multiline">
              <div className="column is-3">
                <div className="has-text-centered">
                  <p className="heading has-text-grey-light">Total Sales</p>
                  <p className="title has-text-primary">$27,897</p>
                  <p className="is-size-7 has-text-success">
                    <Icon name="arrow-up" className="is-small" />
                    <span>12.3% from last month</span>
                  </p>
                </div>
              </div>
              <div className="column is-3">
                <div className="has-text-centered">
                  <p className="heading has-text-grey-light">Revenue</p>
                  <p className="title has-text-info">$15,093</p>
                  <p className="is-size-7 has-text-success">
                    <Icon name="arrow-up" className="is-small" />
                    <span>8.1% from last month</span>
                  </p>
                </div>
              </div>
              <div className="column is-3">
                <div className="has-text-centered">
                  <p className="heading has-text-grey-light">Customers</p>
                  <p className="title has-text-success">1,245</p>
                  <p className="is-size-7 has-text-success">
                    <Icon name="arrow-up" className="is-small" />
                    <span>3.2% from last month</span>
                  </p>
                </div>
              </div>
              <div className="column is-3">
                <div className="has-text-centered">
                  <p className="heading has-text-grey-light">Avg. Order</p>
                  <p className="title has-text-warning">$89.34</p>
                  <p className="is-size-7 has-text-danger">
                    <Icon name="arrow-down" className="is-small" />
                    <span>1.2% from last month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab navigation for main content */}
          <div className="tabs is-boxed mb-3">
            <ul>
              <li className={activeTab === 'overview' ? 'is-active' : ''}>
                <a onClick={() => setActiveTab('overview')}>
                  <Icon name="chart-pie" className="is-small" />
                  <span>Overview</span>
                </a>
              </li>
              <li className={activeTab === 'sales' ? 'is-active' : ''}>
                <a onClick={() => setActiveTab('sales')}>
                  <Icon name="shopping-cart" className="is-small" />
                  <span>Sales</span>
                </a>
              </li>
              <li className={activeTab === 'customers' ? 'is-active' : ''}>
                <a onClick={() => setActiveTab('customers')}>
                  <Icon name="users" className="is-small" />
                  <span>Customers</span>
                </a>
              </li>
              <li className={activeTab === 'settings' ? 'is-active' : ''}>
                <a onClick={() => setActiveTab('settings')}>
                  <Icon name="cog" className="is-small" />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Main dashboard content */}
          <div className="columns">
            {/* Left sidebar */}
            <div className="column is-3">
              <aside className="menu box" style={darkStyles.box}>
                <p className="menu-label has-text-primary">
                  General
                </p>
                <ul className="menu-list">
                  <li><a className="has-text-white is-active">Dashboard</a></li>
                  <li><a className="has-text-white">Customers</a></li>
                  <li><a className="has-text-white">Products</a></li>
                </ul>
                <p className="menu-label has-text-primary mt-4">
                  Administration
                </p>
                <ul className="menu-list">
                  <li><a className="has-text-white">Team Settings</a></li>
                  <li>
                    <a className="has-text-white">Manage Your Team</a>
                    <ul>
                      <li><a className="has-text-white">Members</a></li>
                      <li><a className="has-text-white">Plugins</a></li>
                      <li><a className="has-text-white">Add a member</a></li>
                    </ul>
                  </li>
                  <li><a className="has-text-white">Invitations</a></li>
                </ul>
                <p className="menu-label has-text-primary mt-4">
                  Transactions
                </p>
                <ul className="menu-list">
                  <li><a className="has-text-white">Payments</a></li>
                  <li><a className="has-text-white">Transfers</a></li>
                  <li><a className="has-text-white">Balance</a></li>
                </ul>
                
                {/* Additional components showcase */}
                <p className="menu-label has-text-primary mt-4">
                  Components
                </p>
                
                {/* Progress bars showcase */}
                <div className="box mt-4 p-3" style={{ backgroundColor: '#202020' }}>
                  <p className="is-size-7 has-text-grey-light mb-1">Sales Goal</p>
                  <progress className="progress is-primary is-small" value="75" max="100">75%</progress>
                  
                  <p className="is-size-7 has-text-grey-light mb-1 mt-3">Customer Acquisition</p>
                  <progress className="progress is-info is-small" value="45" max="100">45%</progress>
                  
                  <p className="is-size-7 has-text-grey-light mb-1 mt-3">Server Capacity</p>
                  <progress className="progress is-danger is-small" value="90" max="100">90%</progress>
                </div>
              </aside>
              
              {/* Tags showcase */}
              <div className="box p-4 mt-4" style={darkStyles.box}>
                <p className="menu-label has-text-primary mb-2">
                  Popular Tags
                </p>
                <div className="tags">
                  <span className="tag is-primary">technology</span>
                  <span className="tag is-info">software</span>
                  <span className="tag is-success">business</span>
                  <span className="tag is-warning">marketing</span>
                  <span className="tag is-danger">important</span>
                  <span className="tag is-dark">development</span>
                  <span className="tag is-link">design</span>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="column is-9">
              {/* Charts section */}
              <div className="columns">
                <div className="column is-8">
                  <div className="box has-text-white" style={darkStyles.box}>
                    <div className="level mb-3">
                      <div className="level-left">
                        <h2 className="title is-4 has-text-white mb-0">Sales Overview</h2>
                      </div>
                      <div className="level-right">
                        <div className="buttons has-addons">
                          <button className="button is-small" style={darkStyles.button}>Day</button>
                          <button className="button is-small is-primary">Week</button>
                          <button className="button is-small" style={darkStyles.button}>Month</button>
                        </div>
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
                          <XAxis dataKey="name" stroke="#ffffff" />
                          <YAxis stroke="#ffffff" />
                          <Tooltip contentStyle={{ backgroundColor: '#363636', color: 'white', border: 'none' }} />
                          <Legend />
                          <Line type="monotone" dataKey="value" name="Current Period" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="previous" name="Previous Period" stroke="#82ca9d" strokeDasharray="5 5" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Bar chart */}
                  <div className="box has-text-white mt-4" style={darkStyles.box}>
                    <div className="level mb-3">
                      <div className="level-left">
                        <h2 className="title is-4 has-text-white mb-0">Sales Channels</h2>
                      </div>
                      <div className="level-right">
                        <div className="dropdown is-hoverable">
                          <div className="dropdown-trigger">
                            <button className="button is-small" style={darkStyles.button} aria-haspopup="true" aria-controls="dropdown-menu">
                              <span>Options</span>
                              <Icon name="angle-down" className="is-small" />
                            </button>
                          </div>
                          <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content" style={darkStyles.dropdown}>
                              <a className="dropdown-item" role="menuitem" style={{ color: '#ffffff' }}>
                                Download CSV
                              </a>
                              <a className="dropdown-item" role="menuitem" style={{ color: '#ffffff' }}>
                                Print Report
                              </a>
                              <a className="dropdown-item" role="menuitem" style={{ color: '#ffffff' }}>
                                Share Link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ height: '250px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={barData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="name" stroke="#ffffff" />
                          <YAxis stroke="#ffffff" />
                          <Tooltip contentStyle={{ backgroundColor: '#363636', color: 'white', border: 'none' }} />
                          <Legend />
                          <Bar dataKey="online" name="Online Sales" fill="#3273dc" />
                          <Bar dataKey="offline" name="Offline Sales" fill="#00d1b2" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="box has-text-white" style={darkStyles.box}>
                    <div className="level mb-3">
                      <div className="level-left">
                        <h2 className="title is-4 has-text-white mb-0">Product Breakdown</h2>
                      </div>
                      <div className="level-right">
                        <button className="button is-small" style={darkStyles.button} aria-label="More options" title="More options">
                          <Icon name="ellipsis-h" className="is-small" />
                        </button>
                      </div>
                    </div>
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
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: '#363636', color: 'white', border: 'none' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Card with list */}
                  <div className="card mt-4" style={darkStyles.card}>
                    <header className="card-header" style={darkStyles.cardHeader}>
                      <p className="card-header-title has-text-white">
                        <Icon name="bell" className="mr-2" />
                        Recent Notifications
                      </p>
                      <button className="card-header-icon has-text-white" aria-label="Toggle notifications" title="Toggle notifications">
                        <Icon name="angle-down" />
                      </button>
                    </header>
                    <div className="card-content p-3">
                      <div className="content">
                        <div className="notification-item mb-3 pb-3" style={{ borderBottom: '1px solid #4a4a4a' }}>
                          <div className="level mb-1">
                            <div className="level-left">
                              <span className="has-text-info">New Order</span>
                            </div>
                            <div className="level-right">
                              <span className="tag is-info is-light">5m ago</span>
                            </div>
                          </div>
                          <p className="is-size-7">Customer #1084 placed an order for $243.15</p>
                        </div>
                        
                        <div className="notification-item mb-3 pb-3" style={{ borderBottom: '1px solid #4a4a4a' }}>
                          <div className="level mb-1">
                            <div className="level-left">
                              <span className="has-text-warning">System Alert</span>
                            </div>
                            <div className="level-right">
                              <span className="tag is-warning is-light">2h ago</span>
                            </div>
                          </div>
                          <p className="is-size-7">Database backup completed successfully</p>
                        </div>
                        
                        <div className="notification-item">
                          <div className="level mb-1">
                            <div className="level-left">
                              <span className="has-text-success">Task Completed</span>
                            </div>
                            <div className="level-right">
                              <span className="tag is-success is-light">4h ago</span>
                            </div>
                          </div>
                          <p className="is-size-7">Weekly report has been generated</p>
                        </div>
                      </div>
                    </div>
                    <footer className="card-footer" style={darkStyles.cardFooter}>
                      <a className="card-footer-item has-text-white">View All</a>
                      <a className="card-footer-item has-text-white">Mark All Read</a>
                    </footer>
                  </div>
                </div>
              </div>

              {/* Data table */}
              <div className="box has-text-white mt-4" style={darkStyles.box}>
                <div className="level mb-3">
                  <div className="level-left">
                    <h2 className="title is-4 has-text-white mb-0">Recent Orders</h2>
                  </div>
                  <div className="level-right">
                    <button className="button is-primary" onClick={() => setIsModalOpen(true)}>
                      <Icon name="plus" />
                      <span>Add Order</span>
                    </button>
                  </div>
                </div>
                <div className="table-container">
                  <table className="table is-fullwidth is-hoverable" style={darkStyles.table}>
                    <thead>
                      <tr>
                        <th className="has-text-white">#</th>
                        <th className="has-text-white">Customer</th>
                        <th className="has-text-white">Product</th>
                        <th className="has-text-white">Amount</th>
                        <th className="has-text-white">Date</th>
                        <th className="has-text-white">Status</th>
                        <th className="has-text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={darkStyles.tableRow}>
                        <td className="has-text-white">1</td>
                        <td className="has-text-white">
                          <div className="is-flex is-align-items-center">
                            <figure className="image is-24x24 mr-2">
                              <img className="is-rounded" src="/api/placeholder/24/24" alt="Customer" />
                            </figure>
                            John Smith
                          </div>
                        </td>
                        <td className="has-text-white">Premium Package</td>
                        <td className="has-text-white">$123.45</td>
                        <td className="has-text-white">2025-02-15</td>
                        <td><span className="tag is-success">Completed</span></td>
                        <td>
                          <div className="buttons are-small">
                            <button className="button is-info is-small" aria-label="View" title="View details">
                              <Icon name="eye" className="is-small" />
                            </button>
                            <button className="button is-warning is-small" aria-label="Edit" title="Edit order">
                              <Icon name="edit" className="is-small" />
                            </button>
                            <button className="button is-danger is-small" aria-label="Delete" title="Delete order">
                              <Icon name="trash" className="is-small" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr style={darkStyles.tableRow}>
                        <td className="has-text-white">2</td>
                        <td className="has-text-white">
                          <div className="is-flex is-align-items-center">
                            <figure className="image is-24x24 mr-2">
                              <img className="is-rounded" src="/api/placeholder/24/24" alt="Customer" />
                            </figure>
                            Jane Doe
                          </div>
                        </td>
                        <td className="has-text-white">Basic Plan</td>
                        <td className="has-text-white">$75.99</td>
                        <td className="has-text-white">2025-02-14</td>
                        <td><span className="tag is-warning">Pending</span></td>
                        <td>
                          <div className="buttons are-small">
                            <button className="button is-info is-small" aria-label="View" title="View details">
                              <Icon name="eye" className="is-small" />
                            </button>
                            <button className="button is-warning is-small" aria-label="Edit" title="Edit order">
                              <Icon name="edit" className="is-small" />
                            </button>
                            <button className="button is-danger is-small" aria-label="Delete" title="Delete order">
                              <Icon name="trash" className="is-small" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr style={darkStyles.tableRow}>
                        <td className="has-text-white">3</td>
                        <td className="has-text-white">
                          <div className="is-flex is-align-items-center">
                            <figure className="image is-24x24 mr-2">
                              <img className="is-rounded" src="/api/placeholder/24/24" alt="Customer" />
                            </figure>
                            Bob Johnson
                          </div>
                        </td>
                        <td className="has-text-white">Enterprise Solution</td>
                        <td className="has-text-white">$899.00</td>
                        <td className="has-text-white">2025-02-13</td>
                        <td><span className="tag is-danger">Failed</span></td>
                        <td>
                          <div className="buttons are-small">
                            <button className="button is-info is-small" aria-label="View" title="View details">
                              <Icon name="eye" className="is-small" />
                            </button>
                            <button className="button is-warning is-small" aria-label="Edit" title="Edit order">
                              <Icon name="edit" className="is-small" />
                            </button>
                            <button className="button is-danger is-small" aria-label="Delete" title="Delete order">
                              <Icon name="trash" className="is-small" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr style={darkStyles.tableRow}>
                        <td className="has-text-white">4</td>
                        <td className="has-text-white">
                          <div className="is-flex is-align-items-center">
                            <figure className="image is-24x24 mr-2">
                              <img className="is-rounded" src="/api/placeholder/24/24" alt="Customer" />
                            </figure>
                            Alice Williams
                          </div>
                        </td>
                        <td className="has-text-white">Custom Integration</td>
                        <td className="has-text-white">$1,250.00</td>
                        <td className="has-text-white">2025-02-10</td>
                        <td><span className="tag is-success">Completed</span></td>
                        <td>
                          <div className="buttons are-small">
                            <button className="button is-info is-small" aria-label="View" title="View details">
                              <Icon name="eye" className="is-small" />
                            </button>
                            <button className="button is-warning is-small" aria-label="Edit" title="Edit order">
                              <Icon name="edit" className="is-small" />
                            </button>
                            <button className="button is-danger is-small" aria-label="Delete" title="Delete order">
                              <Icon name="trash" className="is-small" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                <nav className="pagination is-centered is-small mt-4" role="navigation" aria-label="pagination">
                  <a className="pagination-previous" style={darkStyles.button}>Previous</a>
                  <a className="pagination-next" style={darkStyles.button}>Next page</a>
                  <ul className="pagination-list">
                    <li><a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a></li>
                    <li><a className="pagination-link" style={darkStyles.button} aria-label="Goto page 2">2</a></li>
                    <li><a className="pagination-link" style={darkStyles.button} aria-label="Goto page 3">3</a></li>
                    <li><span className="pagination-ellipsis has-text-white">&hellip;</span></li>
                    <li><a className="pagination-link" style={darkStyles.button} aria-label="Goto page 10">10</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={darkStyles.footer}>
        <div className="content has-text-centered">
          <p>
            <strong className="has-text-white">Bulma Dashboard</strong> by <a className="has-text-primary">ACME Corp</a>. 
            The source code is licensed <a className="has-text-primary">MIT</a>.
          </p>
          <div className="level">
            <div className="level-item">
              <div className="buttons">
                <button className="button" style={darkStyles.button} aria-label="GitHub" title="GitHub">
                  <Icon name="github" />
                </button>
                <button className="button" style={darkStyles.button} aria-label="Twitter" title="Twitter">
                  <Icon name="twitter" />
                </button>
                <button className="button" style={darkStyles.button} aria-label="LinkedIn" title="LinkedIn">
                  <Icon name="linkedin" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setIsModalOpen(false)}></div>
        <div className="modal-card" style={darkStyles.modal}>
          <header className="modal-card-head" style={darkStyles.modalHeader}>
            <p className="modal-card-title has-text-white">Add New Order</p>
            <button 
              className="delete" 
              aria-label="close" 
              onClick={() => setIsModalOpen(false)}
            ></button>
          </header>
          <section className="modal-card-body" style={darkStyles.modal}>
            <div className="field">
              <label className="label has-text-white">Customer</label>
              <div className="control has-icons-left">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Customer name" 
                  style={darkStyles.input} 
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white">Email</label>
              <div className="control has-icons-left">
                <input 
                  className="input" 
                  type="email" 
                  placeholder="Email address" 
                  style={darkStyles.input} 
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white">Product</label>
              <div className="control has-icons-left">
                <div className="select is-fullwidth">
                  <select style={darkStyles.select} aria-label="Select product" title="Select product">
                    <option>Select product</option>
                    <option>Premium Package</option>
                    <option>Basic Plan</option>
                    <option>Enterprise Solution</option>
                    <option>Custom Integration</option>
                  </select>
                </div>
                <span className="icon is-small is-left">
                  <i className="fas fa-tag"></i>
                </span>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label has-text-white">Amount</label>
                  <div className="control has-icons-left">
                    <input 
                      className="input" 
                      type="number" 
                      placeholder="Amount" 
                      style={darkStyles.input} 
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-dollar-sign"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label has-text-white">Date</label>
                  <div className="control has-icons-left">
                    <input 
                      className="input" 
                      type="date" 
                      style={darkStyles.input}
                      aria-label="Order date"
                      title="Order date" 
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white">Status</label>
              <div className="control has-icons-left">
                <div className="select is-fullwidth">
                  <select style={darkStyles.select} aria-label="Select status" title="Select status">
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Failed</option>
                    <option>Processing</option>
                  </select>
                </div>
                <span className="icon is-small is-left">
                  <i className="fas fa-tasks"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white">Notes</label>
              <div className="control">
                <textarea 
                  className="textarea" 
                  placeholder="Order notes"
                  style={darkStyles.input}
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox has-text-white">
                  <input type="checkbox" />
                  &nbsp;Send confirmation email to customer
                </label>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot" style={darkStyles.modalFooter}>
            <button className="button is-success">
              <Icon name="save" />
              <span>Save Order</span>
            </button>
            <button className="button" style={darkStyles.button} onClick={() => setIsModalOpen(false)}>Cancel</button>
          </footer>
        </div>
      </div>
      </div>
    );
  };
  

export default BulmaDashboard;