import React, { useState } from 'react';
import { ChevronRight, Github } from 'lucide-react';

// Import all showcase components
import ShadcnDashboard from './components/ShadcnDashboard';
import ChakraDashboard from './components/ChakraDashboard';
import AceternityDashboard from './components/AceternityDashboard';
import FrankenDashboard from './components/FrankenDashboard';
import ParkDashboard from './components/ParkDashboard';
import ReactAriaDashboard from './components/ReactAriaDashboard';
import NextuiDashboard from './components/NextuiDashboard';
import TremorDashboard from './components/TremorDashboard'; 
import CultuiDashboard from './components/CultuiDashboard';
import BulmaDashboard from './components/BulmaDashboard';
import VercelDashboard from './components/VercelDashboard';

const App = () => {
  const [activeLibrary, setActiveLibrary] = useState('welcome');
  
  // Define all the libraries
  const libraries = [
    { id: 'welcome', name: 'Welcome' },
    { id: 'shadcn', name: 'shadcn/ui' },
    { id: 'chakra', name: 'Chakra UI' },
    { id: 'aceternity', name: 'Aceternity UI' },
    { id: 'franken', name: 'Franken UI' },
    { id: 'park', name: 'Park UI' },
    { id: 'reactaria', name: 'React Aria' },
    { id: 'nextui', name: 'Next UI' },
    { id: 'tremor', name: 'Tremor' },
    { id: 'cultui', name: 'Cult UI' },
    { id: 'bulma', name: 'Bulma' },
    { id: 'vercel', name: 'Vercel UI' }
  ];
  
  // Render the appropriate dashboard based on the active library
  const renderDashboard = () => {
    switch (activeLibrary) {
      case 'shadcn':
        return <ShadcnDashboard />;
      case 'chakra':
        return <ChakraDashboard />;
      case 'aceternity':
        return <AceternityDashboard />;
      case 'franken':
        return <FrankenDashboard />;
      case 'park':
        return <ParkDashboard />;
      case 'reactaria':
        return <ReactAriaDashboard />;
      case 'nextui':
        return <NextuiDashboard />;
      case 'tremor':
        return <TremorDashboard />;
      case 'cultui':
        return <CultuiDashboard />;
      case 'bulma':
        return <BulmaDashboard />;
      case 'vercel':
        return <VercelDashboard />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-6">Tailwind UI Library Showcases</h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
              Explore popular Tailwind CSS-based UI libraries through interactive dashboard examples.
              Select a library from the navigation to begin.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
              {libraries.slice(1).map((lib) => (
                <button
                  key={lib.id}
                  className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex flex-col items-center"
                  onClick={() => setActiveLibrary(lib.id)}
                >
                  <h2 className="text-xl font-bold mb-2">{lib.name}</h2>
                  <ChevronRight className="mt-2" />
                </button>
              ))}
            </div>
            <div className="mt-12 text-gray-400 flex items-center">
              <a 
                href="https://github.com/tailwind-ui-showcases" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 border-b border-gray-700 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <button 
            className="text-white font-bold text-xl"
            onClick={() => setActiveLibrary('welcome')}
          >
            UI Library Showcases
          </button>
          
          <div className="flex items-center space-x-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {libraries.slice(1).map((lib) => (
              <button
                key={lib.id}
                className={`px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors ${
                  activeLibrary === lib.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveLibrary(lib.id)}
              >
                {lib.name}
              </button>
            ))}
            
            <a 
              href="https://github.com/tailwind-ui-showcases" 
              target="_blank"
              rel="noopener noreferrer" 
              className="ml-2 p-1.5 rounded-md text-gray-300 hover:bg-gray-700 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
      
      {/* Frame for showcases */}
      <div className={`pt-14 ${activeLibrary === 'welcome' ? '' : 'h-screen overflow-auto'}`}>
        {renderDashboard()}
      </div>
    </div>
  );
};

export default App;
