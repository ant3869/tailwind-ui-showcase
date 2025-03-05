// import React, { useState, useEffect, useCallback, memo } from 'react';
// import { LineChart, BarChart, PieChart, Area, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Pie } from 'recharts';
// import './BulmaDashboard.css'; // External CSS file

// // Mock data (separated from component for clarity)
// const SALES_DATA = [
//   { name: 'Jan', value: 4000, previous: 3200 },
//   { name: 'Feb', value: 3000, previous: 2800 },
//   { name: 'Mar', value: 2000, previous: 2400 },
//   { name: 'Apr', value: 2780, previous: 2200 },
//   { name: 'May', value: 1890, previous: 2100 },
//   { name: 'Jun', value: 2390, previous: 2700 },
//   { name: 'Jul', value: 3490, previous: 3100 },
// ];

// const PIE_DATA = [
//   { name: 'Product A', value: 400, color: '#8884d8' },
//   { name: 'Product B', value: 300, color: '#83a6ed' },
//   { name: 'Product C', value: 300, color: '#8dd1e1' },
//   { name: 'Product D', value: 200, color: '#82ca9d' },
// ];

// const BAR_DATA = [
//   { name: 'Q1', online: 400, offline: 240 },
//   { name: 'Q2', online: 300, offline: 138 },
//   { name: 'Q3', online: 200, offline: 980 },
//   { name: 'Q4', online: 278, offline: 390 },
// ];

// // Memoized Icon component
// const Icon = memo(( name, className = '' ) => (
//   <span className={`icon ${className}`}>
//     <i className={`fas fa-${name}`} aria-hidden="true"></i>
//   </span>
// ));

// Icon.displayName = 'Icon';

// // Memoized dashboard widgets
// const StatsCard = memo(({ title, value, change, isIncrease, icon }) => (
//   <div className="column is-3">
//     <div className="has-text-centered">
//       <p className="heading has-text-grey-light">{title}</p>
//       <p className="title has-text-primary">{value}</p>
//       <p className={`is-size-7 ${isIncrease ? 'has-text-success' : 'has-text-danger'}`}>
//         <Icon name={isIncrease ? 'arrow-up' : 'arrow-down'} className="is-small" />
//         <span>{change}</span>
//       </p>
//     </div>
//   </div>
// ));

// StatsCard.displayName = 'StatsCard';

// const SalesChart = memo(( data ) => (
//   <div className="box dashboard-box">
//     <div className="level mb-3">
//       <div className="level-left">
//         <h2 className="title is-4 has-text-white mb-0">Sales Overview</h2>
//       </div>
//       <div className="level-right">
//         <div className="buttons has-addons">
//           <button className="button is-small dashboard-button">Day</button>
//           <button className="button is-small is-primary">Week</button>
//           <button className="button is-small dashboard-button">Month</button>
//         </div>
//       </div>
//     </div>
//     <div style={{ height: '300px' }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           data={data}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//           <XAxis dataKey="name" stroke="#ffffff" />
//           <YAxis stroke="#ffffff" />
//           <Tooltip contentStyle={{ backgroundColor: '#363636', color: 'white', border: 'none' }} />
//           <Legend />
//           <Line type="monotone" dataKey="value" name="Current Period" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="previous" name="Previous Period" stroke="#82ca9d" strokeDasharray="5 5" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   </div>
// ));

// SalesChart.displayName = 'SalesChart';

// const BarChartWidget = memo(( data ) => (
//   <div className="box dashboard-box mt-4">
//     <div className="level mb-3">
//       <div className="level-left">
//         <h2 className="title is-4 has-text-white mb-0">Sales Channels</h2>
//       </div>
//       <div className="level-right">
//         <div className="dropdown is-hoverable">
//           <div className="dropdown-trigger">
//             <button 
//               className="button is-small dashboard-button" 
//               aria-haspopup="true" 
//               aria-controls="dropdown-menu"
//               aria-label="Chart options"
//             >
//               <span>Options</span>
//               <Icon name="angle-down" className="is-small" />
//             </button>
//           </div>
//           <div className="dropdown-menu" id="dropdown-menu" role="menu">
//             <div className="dropdown-content dashboard-dropdown">
//               <a className="dropdown-item" href="#" aria-label="Download CSV">Download CSV</a>
//               <a className="dropdown-item" href="#" aria-label="Print Report">Print Report</a>
//               <a className="dropdown-item" href="#" aria-label="Share Link">Share Link</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div style={{ height: '250px' }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={data}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//           <XAxis dataKey="name" stroke="#ffffff" />
//           <YAxis stroke="#ffffff" />
//           <Tooltip contentStyle={{ backgroundColor: '#363636', color: 'white', border: 'none' }} />
//           <Legend />
//           <Bar dataKey="online" name="Online Sales" fill="#3273dc" />
//           <Bar dataKey="offline" name="Offline Sales" fill="#00d1b2" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   </div>
// ));

// BarChartWidget.displayName = 'BarChartWidget';

// const PieChartWidget = memo((data) => (
//   <div className="box dashboard-box">
//     <div className="level mb-3">
//       <div className="level-left">
//         <h2 className="title is-4 has-text-white mb-0">Product Breakdown</h2>
//       </div>
//       <div className="level-right">
//         <button className="button is-small dashboard-button" aria-label="More options">
//           <Icon name="ellipsis-h" className="is-small" />
//         </button>
//       </div>
//     </div>
//     <div style={{ height: '300px' }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//           </Pie>
//           <Tooltip contentStyle={{ backgroundColor: '#363636', color: 'white', border: 'none' }} />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   </div>
// ));

// PieChartWidget.displayName = 'PieChartWidget';

// const NotificationCard = memo(( onClose ) => (
//   <div className="notification is-info is-light">
//     <button className="delete" onClick={onClose} aria-label="Close notification"></button>
//     <strong>Pro Tip:</strong> You can customize this dashboard by clicking the gear icon in each widget.
//   </div>
// ));

// NotificationCard.displayName = 'NotificationCard';

// const RecentOrdersTable = memo(( onAddOrder ) => (
//   <div className="box dashboard-box mt-4">
//     <div className="level mb-3">
//       <div className="level-left">
//         <h2 className="title is-4 has-text-white mb-0">Recent Orders</h2>
//       </div>
//       <div className="level-right">
//         <button className="button is-primary" onClick={onAddOrder} aria-label="Add new order">
//           <Icon name="plus" />
//           <span>Add Order</span>
//         </button>
//       </div>
//     </div>
//     <div className="table-container">
//       <table className="table is-fullwidth is-hoverable dashboard-table" role="grid" aria-label="Recent orders">
//         <thead>
//           <tr>
//             <th className="has-text-white" scope="col">#</th>
//             <th className="has-text-white" scope="col">Customer</th>
//             <th className="has-text-white" scope="col">Product</th>
//             <th className="has-text-white" scope="col">Amount</th>
//             <th className="has-text-white" scope="col">Date</th>
//             <th className="has-text-white" scope="col">Status</th>
//             <th className="has-text-white" scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="dashboard-table-row">
//             <td className="has-text-white">1</td>
//             <td className="has-text-white">
//               <div className="is-flex is-align-items-center">
//                 <figure className="image is-24x24 mr-2">
//                   <img className="is-rounded" src="https://via.placeholder.com/24" alt="Customer avatar" />
//                 </figure>
//                 John Smith
//               </div>
//             </td>
//             <td className="has-text-white">Premium Package</td>
//             <td className="has-text-white">$123.45</td>
//             <td className="has-text-white">2025-02-15</td>
//             <td><span className="tag is-success">Completed</span></td>
//             <td>
//               <div className="buttons are-small">
//                 <button className="button is-info is-small" aria-label="View order details">
//                   <Icon name="eye" className="is-small" />
//                 </button>
//                 <button className="button is-warning is-small" aria-label="Edit order">
//                   <Icon name="edit" className="is-small" />
//                 </button>
//                 <button className="button is-danger is-small" aria-label="Delete order">
//                   <Icon name="trash" className="is-small" />
//                 </button>
//               </div>
//             </td>
//           </tr>
//           {/* Additional table rows would go here */}
//         </tbody>
//       </table>
//     </div>
    
//     <nav className="pagination is-centered is-small mt-4" role="navigation" aria-label="pagination">
//       <a className="pagination-previous dashboard-button" aria-label="Go to previous page">Previous</a>
//       <a className="pagination-next dashboard-button" aria-label="Go to next page">Next page</a>
//       <ul className="pagination-list">
//         <li><a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a></li>
//         <li><a className="pagination-link dashboard-button" aria-label="Go to page 2">2</a></li>
//         <li><a className="pagination-link dashboard-button" aria-label="Go to page 3">3</a></li>
//         <li><span className="pagination-ellipsis has-text-white">&hellip;</span></li>
//         <li><a className="pagination-link dashboard-button" aria-label="Go to page 10">10</a></li>
//       </ul>
//     </nav>
//   </div>
// ));

// RecentOrdersTable.displayName = 'RecentOrdersTable';

// const OrderModal = memo(({ isOpen, onClose, onSave }) => {
//   if (!isOpen) return null;
  
//   return (
//     <div className="modal is-active">
//       <div className="modal-background" onClick={onClose} aria-label="Close modal"></div>
//       <div className="modal-card dashboard-modal">
//         <header className="modal-card-head dashboard-modal-header">
//           <p className="modal-card-title has-text-white">Add New Order</p>
//           <button 
//             className="delete" 
//             aria-label="close" 
//             onClick={onClose}
//           ></button>
//         </header>
//         <section className="modal-card-body dashboard-modal">
//           <form id="add-order-form">
//             <div className="field">
//               <label className="label has-text-white" htmlFor="customer-name">Customer</label>
//               <div className="control has-icons-left">
//                 <input 
//                   id="customer-name"
//                   className="input dashboard-input" 
//                   type="text" 
//                   placeholder="Customer name" 
//                   aria-label="Customer name"
//                 />
//                 <span className="icon is-small is-left">
//                   <i className="fas fa-user" aria-hidden="true"></i>
//                 </span>
//               </div>
//             </div>
//             <div className="field">
//               <label className="label has-text-white" htmlFor="customer-email">Email</label>
//               <div className="control has-icons-left">
//                 <input 
//                   id="customer-email"
//                   className="input dashboard-input" 
//                   type="email" 
//                   placeholder="Email address" 
//                   aria-label="Email address"
//                 />
//                 <span className="icon is-small is-left">
//                   <i className="fas fa-envelope" aria-hidden="true"></i>
//                 </span>
//               </div>
//             </div>
//             <div className="field">
//               <label className="label has-text-white" htmlFor="product-select">Product</label>
//               <div className="control has-icons-left">
//                 <div className="select is-fullwidth">
//                   <select 
//                     id="product-select"
//                     className="dashboard-select"
//                     aria-label="Select product"
//                     title="Product selection"
//                   >
//                     <option>Select product</option>
//                     <option>Premium Package</option>
//                     <option>Basic Plan</option>
//                     <option>Enterprise Solution</option>
//                     <option>Custom Integration</option>
//                   </select>
//                 </div>
//                 <span className="icon is-small is-left">
//                   <i className="fas fa-tag" aria-hidden="true"></i>
//                 </span>
//               </div>
//             </div>
//             <div className="columns">
//               <div className="column">
//                 <div className="field">
//                   <label className="label has-text-white" htmlFor="order-amount">Amount</label>
//                   <div className="control has-icons-left">
//                     <input 
//                       id="order-amount"
//                       className="input dashboard-input" 
//                       type="number" 
//                       placeholder="Amount" 
//                       aria-label="Order amount"
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-dollar-sign" aria-hidden="true"></i>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="column">
//                 <div className="field">
//                   <label className="label has-text-white" htmlFor="order-date">Date</label>
//                   <div className="control has-icons-left">
//                     <input 
//                       id="order-date"
//                       className="input dashboard-input" 
//                       type="date" 
//                       aria-label="Order date"
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-calendar" aria-hidden="true"></i>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="field">
//               <label className="label has-text-white" htmlFor="order-status">Status</label>
//               <div className="control has-icons-left">
//                 <div className="select is-fullwidth">
//                   <select 
//                     id="order-status"
//                     className="dashboard-select"
//                     aria-label="Select order status"
//                     title="Order status"
//                   >
//                     <option>Pending</option>
//                     <option>Completed</option>
//                     <option>Failed</option>
//                     <option>Processing</option>
//                   </select>
//                 </div>
//                 <span className="icon is-small is-left">
//                   <i className="fas fa-tasks" aria-hidden="true"></i>
//                 </span>
//               </div>
//             </div>
//             <div className="field">
//               <label className="label has-text-white" htmlFor="order-notes">Notes</label>
//               <div className="control">
//                 <textarea 
//                   id="order-notes"
//                   className="textarea dashboard-input" 
//                   placeholder="Order notes"
//                   aria-label="Order notes"
//                 ></textarea>
//               </div>
//             </div>
//             <div className="field">
//               <div className="control">
//                 <label className="checkbox has-text-white" htmlFor="send-email">
//                   <input id="send-email" type="checkbox" aria-label="Send confirmation email" />
//                   &nbsp;Send confirmation email to customer
//                 </label>
//               </div>
//             </div>
//           </form>
//         </section>
//         <footer className="modal-card-foot dashboard-modal-footer">
//           <button 
//             className="button is-success" 
//             onClick={onSave}
//             aria-label="Save order"
//             form="add-order-form"
//           >
//             <Icon name="save" />
//             <span>Save Order</span>
//           </button>
//           <button 
//             className="button dashboard-button" 
//             onClick={onClose}
//             aria-label="Cancel"
//           >
//             Cancel
//           </button>
//         </footer>
//       </div>
//     </div>
//   );
// });

// OrderModal.displayName = 'OrderModal';

// // Main Dashboard Component
// const BulmaDashboard = () => {
//   // State management with proper initialization
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [notificationVisible, setNotificationVisible] = useState(true);
//   const [activeDropdown, setActiveDropdown] = useState(null);
  
//   // Memoized event handlers to prevent unnecessary re-renders
//   const toggleMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen(prevState => !prevState);
//   }, []);
  
//   const toggleDropdown = useCallback((dropdown) => {
//     setActiveDropdown(prevState => prevState === dropdown ? null : dropdown);
//   }, []);

//   const handleTabChange = useCallback((tab) => {
//     setActiveTab(tab);
//   }, []);

//   const handleOpenModal = useCallback(() => {
//     setIsModalOpen(true);
//   }, []);

//   const handleCloseModal = useCallback(() => {
//     setIsModalOpen(false);
//   }, []);

//   const handleSaveOrder = useCallback(() => {
//     // Logic to save order would go here
//     setIsModalOpen(false);
//   }, []);

//   const handleCloseNotification = useCallback(() => {
//     setNotificationVisible(false);
//   }, []);

//   // Inject required stylesheets - using useEffect with proper cleanup
//   useEffect(() => {
//     // Add FontAwesome
//     const fontAwesome = document.createElement('link');
//     fontAwesome.rel = 'stylesheet';
//     fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
//     document.head.appendChild(fontAwesome);
    
//     // Add Bulma
//     const bulma = document.createElement('link');
//     bulma.rel = 'stylesheet';
//     bulma.href = 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css';
//     document.head.appendChild(bulma);

//     // Cleanup function to prevent memory leaks
//     return () => {
//       if (document.head.contains(fontAwesome)) {
//         document.head.removeChild(fontAwesome);
//       }
//       if (document.head.contains(bulma)) {
//         document.head.removeChild(bulma);
//       }
//     };
//   }, []);
  
//   return (
//     <div className="dashboard-app-container">
//       {/* Navbar */}
//       <nav className="navbar dashboard-navbar" role="navigation" aria-label="main navigation">
//         <div className="navbar-brand">
//           <a className="navbar-item" href="#">
//             <span className="is-size-4 has-text-weight-bold">
//               <span className="has-text-primary">Bulma</span>
//               <span>Dashboard</span>
//             </span>
//           </a>

//           <button 
//             role="button" 
//             className={`navbar-burger ${isMobileMenuOpen ? 'is-active' : ''}`} 
//             aria-label="menu" 
//             aria-expanded={isMobileMenuOpen} 
//             onClick={toggleMobileMenu}
//           >
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//           </button>
//         </div>

//         <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''} dashboard-navbar`}>
//           <div className="navbar-start">
//             <a 
//               className={`navbar-item ${activeTab === 'dashboard' ? 'is-active' : ''}`}
//               onClick={() => handleTabChange('dashboard')}
//               href="#"
//               aria-label="Dashboard"
//               aria-current={activeTab === 'dashboard' ? 'page' : undefined}
//             >
//               <span className="icon-text">
//                 <Icon name="home" />
//                 <span>Dashboard</span>
//               </span>
//             </a>
            
//             <a 
//               className={`navbar-item ${activeTab === 'analytics' ? 'is-active' : ''}`}
//               onClick={() => handleTabChange('analytics')}
//               href="#"
//               aria-label="Analytics"
//               aria-current={activeTab === 'analytics' ? 'page' : undefined}
//             >
//               <span className="icon-text">
//                 <Icon name="chart-line" />
//                 <span>Analytics</span>
//               </span>
//             </a>
            
//             <div className={`navbar-item has-dropdown ${activeDropdown === 'reports' ? 'is-active' : ''}`}>
//               <a 
//                 className="navbar-link dashboard-navbar"
//                 onClick={() => toggleDropdown('reports')}
//                 href="#"
//                 aria-haspopup="true"
//                 aria-expanded={activeDropdown === 'reports'}
//                 aria-label="Reports dropdown"
//               >
//                 <span className="icon-text">
//                   <Icon name="file-alt" />
//                   <span>Reports</span>
//                 </span>
//               </a>

//               <div className="navbar-dropdown dashboard-dropdown">
//                 <a className="navbar-item dropdown-item" href="#" aria-label="Sales Report">
//                   Sales Report
//                 </a>
//                 <a className="navbar-item dropdown-item" href="#" aria-label="Customer Analytics">
//                   Customer Analytics
//                 </a>
//                 <a className="navbar-item dropdown-item" href="#" aria-label="Inventory Status">
//                   Inventory Status
//                 </a>
//                 <hr className="navbar-divider dashboard-divider" />
//                 <a className="navbar-item dropdown-item" href="#" aria-label="Custom Report">
//                   Custom Report
//                 </a>
//               </div>
//             </div>
            
//             {/* Additional navbar items would go here */}
//           </div>

//           <div className="navbar-end">
//             <div className="navbar-item">
//               <div className="field has-addons">
//                 <div className="control">
//                   <input 
//                     className="input is-small dashboard-input" 
//                     type="text" 
//                     placeholder="Search..." 
//                     aria-label="Search dashboard"
//                   />
//                 </div>
//                 <div className="control">
//                   <button className="button is-small is-primary" aria-label="Submit search">
//                     <Icon name="search" />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="navbar-item has-dropdown is-hoverable">
//               <a className="navbar-link dashboard-navbar" href="#" aria-label="Notifications">
//                 <span className="icon-text">
//                   <Icon name="bell" />
//                   <span className="tag is-danger is-rounded is-small">3</span>
//                 </span>
//               </a>
//               <div className="navbar-dropdown is-right dashboard-dropdown">
//                 <a className="navbar-item dropdown-item" href="#" aria-label="New order notification">
//                   <div className="is-size-7">New order received</div>
//                   <div className="is-size-7 has-text-grey-light">5 minutes ago</div>
//                 </a>
//                 <hr className="navbar-divider dashboard-divider" />
//                 <a className="navbar-item dropdown-item" href="#" aria-label="Server alert notification">
//                   <div className="is-size-7">Server alert: CPU usage high</div>
//                   <div className="is-size-7 has-text-grey-light">12 minutes ago</div>
//                 </a>
//                 <hr className="navbar-divider dashboard-divider" />
//                 <a className="navbar-item dropdown-item" href="#" aria-label="New customer notification">
//                   <div className="is-size-7">New customer registered</div>
//                   <div className="is-size-7 has-text-grey-light">1 hour ago</div>
//                 </a>
//               </div>
//             </div>
            
//             <div className="navbar-item">
//               <div className="buttons">
//                 <button className="button is-primary" aria-label="Create new item">
//                   <strong>New Item</strong>
//                 </button>
//                 <button className="button dashboard-button" aria-label="View profile">
//                   <Icon name="user" />
//                   <span>Profile</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Dashboard content */}
//       <div className="section pt-4 pb-4">
//         <div className="container">
//           {notificationVisible && (
//             <NotificationCard onClose={handleCloseNotification} />
//           )}
          
//           {/* Stats Cards */}
//           <div className="box dashboard-box">
//             <div className="columns is-multiline">
//               <StatsCard 
//                 title="Total Sales" 
//                 value="$27,897" 
//                 change="12.3% from last month" 
//                 isIncrease={true} 
//                 icon="arrow-up" 
//               />
//               <StatsCard 
//                 title="Revenue" 
//                 value="$15,093" 
//                 change="8.1% from last month" 
//                 isIncrease={true} 
//                 icon="arrow-up" 
//               />
//               <StatsCard 
//                 title="Customers" 
//                 value="1,245" 
//                 change="3.2% from last month" 
//                 isIncrease={true} 
//                 icon="arrow-up" 
//               />
//               <StatsCard 
//                 title="Avg. Order" 
//                 value="$89.34" 
//                 change="1.2% from last month" 
//                 isIncrease={false} 
//                 icon="arrow-down" 
//               />
//             </div>
//           </div>

//           {/* Tab navigation */}
//           <div className="tabs is-boxed mb-3">
//             <ul role="tablist">
//               <li 
//                 className={activeTab === 'overview' ? 'is-active' : ''} 
//                 role="presentation"
//               >
//                 <a 
//                   onClick={() => handleTabChange('overview')} 
//                   role="tab" 
//                   aria-selected={activeTab === 'overview'} 
//                   aria-controls="overview-panel"
//                   href="#"
//                 >
//                   <Icon name="chart-pie" className="is-small" />
//                   <span>Overview</span>
//                 </a>
//               </li>
//               <li 
//                 className={activeTab === 'sales' ? 'is-active' : ''} 
//                 role="presentation"
//               >
//                 <a 
//                   onClick={() => handleTabChange('sales')} 
//                   role="tab" 
//                   aria-selected={activeTab === 'sales'} 
//                   aria-controls="sales-panel"
//                   href="#"
//                 >
//                   <Icon name="shopping-cart" className="is-small" />
//                   <span>Sales</span>
//                 </a>
//               </li>
//               {/* Additional tabs would go here */}
//             </ul>
//           </div>

//           {/* Main dashboard content */}
//           <div className="columns">
//             {/* Left sidebar */}
//             <div className="column is-3">
//               <aside className="menu box dashboard-box" aria-label="Dashboard menu">
//                 <p className="menu-label has-text-primary">
//                   General
//                 </p>
//                 <ul className="menu-list" role="menu">
//                   <li><a className="has-text-white is-active" href="#" aria-current="page">Dashboard</a></li>
//                   <li><a className="has-text-white" href="#">Customers</a></li>
//                   <li><a className="has-text-white" href="#">Products</a></li>
//                 </ul>
//                 {/* Additional menu sections would go here */}
//               </aside>
//             </div>
            
//             {/* Main content */}
//             <div className="column is-9">
//               <div className="columns">
//                 <div className="column is-8">
//                   <SalesChart data={SALES_DATA} />
//                   <BarChartWidget data={BAR_DATA} />
//                 </div>
//                 <div className="column is-4">
//                   <PieChartWidget data={PIE_DATA} />
//                   {/* Additional widgets would go here */}
//                 </div>
//               </div>

//               <RecentOrdersTable onAddOrder={handleOpenModal} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer dashboard-footer">
//         <div className="content has-text-centered">
//           <p>
//             <strong className="has-text-white">Bulma Dashboard</strong> by <a className="has-text-primary" href="#">ACME Corp</a>. 
//             The source code is licensed <a className="has-text-primary" href="#">MIT</a>.
//           </p>
//           <div className="level">
//             <div className="level-item">
//               <div className="buttons">
//                 <button className="button dashboard-button" aria-label="GitHub">
//                   <Icon name="github" />
//                 </button>
//                 <button className="button dashboard-button" aria-label="Twitter">
//                   <Icon name="twitter" />
//                 </button>
//                 <button className="button dashboard-button" aria-label="LinkedIn">
//                   <Icon name="linkedin" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Order Modal */}
//       <OrderModal 
//         isOpen={isModalOpen} 
//         onClose={handleCloseModal} 
//         onSave={handleSaveOrder} 
//       />
//     </div>
//   );
// };

// export default BulmaDashboard;