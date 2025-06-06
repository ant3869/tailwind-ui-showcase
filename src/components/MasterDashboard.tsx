import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

const MasterDashboard: React.FC = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [checkboxGroup, setCheckboxGroup] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [radioValue, setRadioValue] = useState('one');
  const [rangeValue, setRangeValue] = useState(50);
  const [switchOn, setSwitchOn] = useState(false);
  const [tab, setTab] = useState('tab1');
  const [toast, setToast] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [badgeCount, setBadgeCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [autocomplete, setAutocomplete] = useState('');
  const [selectValue, setSelectValue] = useState('a');
  const [numberValue, setNumberValue] = useState(5);
  const [textareaValue, setTextareaValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [page, setPage] = useState(1);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
  };

  return (
    <div className="p-6 space-y-8 text-gray-900 dark:text-gray-100">
      {/* Top stats and charts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <h3 className="text-sm text-gray-400">Total Revenue</h3>
          <p className="text-2xl font-bold">$45,231</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <h3 className="text-sm text-gray-400">New Customers</h3>
          <p className="text-2xl font-bold">2,340</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <h3 className="text-sm text-gray-400">Active Sessions</h3>
          <p className="text-2xl font-bold">1,893</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <h3 className="text-sm text-gray-400">Conversion Rate</h3>
          <p className="text-2xl font-bold">5.43%</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="mb-2 font-semibold">Sales</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-700" />
                <XAxis dataKey="name" className="text-gray-400" />
                <YAxis className="text-gray-400" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="mb-2 font-semibold">Quarterly Profits</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-700" />
                <XAxis dataKey="name" className="text-gray-400" />
                <YAxis className="text-gray-400" />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 p-2 rounded">
        <div className="font-bold">Master Dashboard</div>
        <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={() => setDrawerOpen(true)}>
          Open Drawer
        </button>
      </nav>

      {/* Alert */}
      {alertVisible && (
        <div className="bg-red-200 text-red-900 p-3 rounded flex justify-between">
          <span>Alert message</span>
          <button onClick={() => setAlertVisible(false)}>X</button>
        </div>
      )}

      {/* Accordion */}
      <div className="border rounded">
        <button className="w-full p-2 text-left" onClick={() => setAccordionOpen(!accordionOpen)}>
          Accordion Header
        </button>
        {accordionOpen && <div className="p-2 border-t">Accordion Content</div>}
      </div>

      {/* Autocomplete */}
      <div className="relative">
        <input
          type="text"
          placeholder="Autocomplete"
          className="border p-1 rounded w-48"
          value={autocomplete}
          onChange={e => setAutocomplete(e.target.value)}
        />
        {autocomplete && (
          <ul className="absolute left-0 mt-1 w-48 border bg-white dark:bg-gray-700 rounded shadow text-sm">
            {['New York', 'London', 'Tokyo']
              .filter(c => c.toLowerCase().includes(autocomplete.toLowerCase()))
              .map(city => (
                <li
                  key={city}
                  className="px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => setAutocomplete(city)}
                >
                  {city}
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Avatar and Badge */}
      <div className="flex items-center space-x-2">
        <img src="https://i.pravatar.cc/40" className="rounded-full" />
        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">{badgeCount}</span>
        <button
          className="px-2 py-0.5 border rounded text-xs"
          onClick={() => setBadgeCount(badgeCount + 1)}
        >
          +
        </button>
      </div>

      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600 dark:text-gray-300">
        <ol className="list-reset flex space-x-2">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li>/</li>
          <li className="text-gray-500">Dashboard</li>
        </ol>
      </nav>

      {/* Buttons */}
      <div className="space-x-2">
        <button className="px-3 py-1 bg-blue-600 text-white rounded">Button</button>
        <button className="px-3 py-1 border rounded">Secondary</button>
      </div>

      {/* Calendar */}
      <table className="border-collapse w-56 text-center">
        <thead>
          <tr>
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
              <th key={d} className="border p-1">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_,i)=>(
            <tr key={i}>
              {[...Array(7)].map((_,j)=>(
                <td key={j} className="border p-1">{i*7+j+1}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Card */}
      <div className="border rounded p-4 shadow max-w-sm">Simple Card</div>

      {/* Checkbox and Checkbox Group */}
      <div>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={checkboxChecked} onChange={e=>setCheckboxChecked(e.target.checked)} />
          <span>Checkbox</span>
        </label>
        <div className="mt-2 space-x-2">
          {['A','B','C'].map(val => (
            <label key={val} className="inline-flex items-center space-x-1">
              <input
                type="checkbox"
                value={val}
                checked={checkboxGroup.includes(val)}
                onChange={e=>{
                  if(e.target.checked){setCheckboxGroup([...checkboxGroup,val]);}else{setCheckboxGroup(checkboxGroup.filter(x=>x!==val));}
                }}
              />
              <span>{val}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Circular Progress */}
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          <path
            d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray={`${rangeValue},100`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm">{rangeValue}%</span>
      </div>

      {/* Date Picker */}
      <div className="space-y-1">
        <input
          type="date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
          className="border p-1 rounded"
        />
        {selectedDate && (
          <p className="text-sm text-gray-600 dark:text-gray-300">Selected: {selectedDate}</p>
        )}
      </div>

      {/* Dropdown */}
      <div className="relative inline-block">
        <button onClick={()=>setDropdownOpen(!dropdownOpen)} className="border px-3 py-1 rounded">Dropdown</button>
        {dropdownOpen && (
          <ul className="absolute left-0 mt-1 border bg-white dark:bg-gray-700 rounded shadow">
            {['One','Two','Three'].map(item => (
              <li key={item} className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600" onClick={()=>setDropdownOpen(false)}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-black/50 flex">
          <div className="bg-white dark:bg-gray-800 w-64 p-4 shadow-lg" role="dialog">
            <button className="mb-4" onClick={()=>setDrawerOpen(false)}>Close</button>
            <p>Drawer Content</p>
          </div>
          <div className="flex-1" onClick={()=>setDrawerOpen(false)} />
        </div>
      )}

      {/* Form */}
      <form className="space-y-2" onSubmit={e=>{e.preventDefault();alert('Submitted');}}>
        <input type="text" placeholder="Name" className="border p-1 rounded w-48" />
        <input type="email" placeholder="Email" className="border p-1 rounded w-48" />
        <button className="px-3 py-1 bg-green-600 text-white rounded" type="submit">Submit</button>
      </form>

      {/* Image */}
      <img src="https://placekitten.com/200/100" className="rounded" alt="Kitten" />

      {/* Link */}
      <a href="https://example.com" className="text-blue-600 underline">Example Link</a>

      {/* Listbox / Select */}
      <select
        className="border p-1 rounded"
        value={selectValue}
        onChange={e => setSelectValue(e.target.value)}
      >
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </select>

      {/* Modal */}
      <button className="px-3 py-1 bg-purple-600 text-white rounded" onClick={()=>setModalOpen(true)}>Open Modal</button>
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center" role="dialog">
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
            <p>Modal Content</p>
            <button className="mt-2 px-3 py-1 bg-red-600 text-white rounded" onClick={()=>setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Number Input */}
      <input
        type="number"
        className="border p-1 rounded w-20"
        value={numberValue}
        onChange={e => setNumberValue(Number(e.target.value))}
      />

      {/* Pagination */}
      <div className="flex space-x-1 items-center">
        {[1,2,3].map(n => (
          <button
            key={n}
            className={`px-2 py-1 border rounded ${page===n ? 'bg-blue-600 text-white' : ''}`}
            onClick={() => setPage(n)}
          >
            {n}
          </button>
        ))}
        <span className="ml-2 text-sm">Page: {page}</span>
      </div>

      {/* Popover */}
      <div className="relative inline-block">
        <button className="border px-2 py-1 rounded" onClick={()=>setPopoverOpen(!popoverOpen)}>Popover</button>
        {popoverOpen && (
          <div className="absolute z-10 mt-1 border bg-white dark:bg-gray-700 p-2 rounded shadow">
            Popover text
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="space-y-1">
        <div className="w-64 h-2 bg-gray-200 rounded">
          <div className="h-full bg-blue-600" style={{ width: `${rangeValue}%` }} />
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-300">{rangeValue}%</span>
      </div>

      {/* Radio Group */}
      <div className="space-x-2">
        {['one','two','three'].map(val => (
          <label key={val} className="inline-flex items-center space-x-1">
            <input type="radio" name="rad" value={val} checked={radioValue===val} onChange={()=>setRadioValue(val)} />
            <span>{val}</span>
          </label>
        ))}
      </div>

      {/* Slider */}
      <div className="space-y-1">
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValue}
          onChange={e => setRangeValue(Number(e.target.value))}
          className="w-64"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300">Value: {rangeValue}</span>
      </div>

      {/* Snippet */}
      <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto">npm install my-library</pre>

      {/* Spacer */}
      <div className="my-4" />

      {/* Spinner */}
      <div className="flex items-center space-x-2">
        <button
          className="px-2 py-1 border rounded"
          onClick={() => setLoading(!loading)}
        >
          {loading ? 'Stop' : 'Start'} Spinner
        </button>
        {loading && (
          <div className="border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8 animate-spin" />
        )}
      </div>

      {/* Switch */}
      <label className="flex items-center space-x-2">
        <span>Switch</span>
        <input type="checkbox" checked={switchOn} onChange={e=>setSwitchOn(e.target.checked)} className="hidden" />
        <span onClick={()=>setSwitchOn(!switchOn)} className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${switchOn ? 'bg-green-400' : ''}`}>\
          <span className={`bg-white w-4 h-4 rounded-full transform ${switchOn ? 'translate-x-5' : ''}`} />\
        </span>
      </label>

      {/* Table */}
      <table className="table-auto border-collapse w-full max-w-md text-left">
        <thead>
          <tr><th className="border p-2">Name</th><th className="border p-2">Age</th></tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Alice</td><td className="border p-2">24</td></tr>
          <tr><td className="border p-2">Bob</td><td className="border p-2">27</td></tr>
        </tbody>
      </table>

      {/* Tabs */}
      <div className="space-y-2">
        <div className="flex space-x-2">
          <button className={`px-3 py-1 border rounded ${tab==='tab1'?'bg-blue-600 text-white':''}`} onClick={()=>setTab('tab1')}>Tab 1</button>
          <button className={`px-3 py-1 border rounded ${tab==='tab2'?'bg-blue-600 text-white':''}`} onClick={()=>setTab('tab2')}>Tab 2</button>
        </div>
        {tab==='tab1' ? <div>Content 1</div> : <div>Content 2</div>}
      </div>

      {/* Toast */}
      <button className="px-3 py-1 bg-orange-600 text-white rounded" onClick={()=>{setToast(true);setTimeout(()=>setToast(false),2000);}}>Show Toast</button>
      {toast && <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-1 rounded shadow">Toast message</div>}

      {/* Input OTP */}
      <div className="flex space-x-2">
        {otp.map((val,idx)=>(
          <input key={idx} value={val} onChange={e=>handleOtpChange(idx,e.target.value)} className="border w-8 text-center" />
        ))}
      </div>

      {/* Textarea */}
      <textarea
        className="border rounded p-1 w-64"
        rows={3}
        placeholder="Textarea"
        value={textareaValue}
        onChange={e => setTextareaValue(e.target.value)}
      />

      {/* Time Input */}
      <input
        type="time"
        className="border p-1 rounded"
        value={timeValue}
        onChange={e => setTimeValue(e.target.value)}
      />

      {/* Tooltip */}
      <div className="relative inline-block group">
        <button className="border px-2 py-1 rounded">Hover me</button>
        <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">Tooltip</span>
      </div>
    </div>
  );
};

export default MasterDashboard;
