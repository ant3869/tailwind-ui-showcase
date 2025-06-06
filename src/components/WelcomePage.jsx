import React from 'react';
import { ChevronRight, Github } from 'lucide-react';

const WelcomePage = ({ libraries, setActiveLibrary }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-gray-100 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 animate-gradient overflow-hidden">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-lg">
        Tailwind UI Library Showcase
      </h1>
      <p className="text-lg md:text-2xl mb-10 text-center max-w-3xl text-gray-300">
        Explore popular Tailwind CSS-based UI libraries through interactive dashboard examples. Select a library to dive in.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 z-10">
        {libraries.slice(1).map((lib) => (
          <button
            key={lib.id}
            className="p-6 bg-gray-800/80 backdrop-blur rounded-xl hover:bg-gray-700 transform hover:-translate-y-1 hover:scale-105 transition flex flex-col items-center"
            onClick={() => setActiveLibrary(lib.id)}
          >
            <h2 className="text-xl font-semibold mb-2">{lib.name}</h2>
            <ChevronRight className="mt-1" />
          </button>
        ))}
      </div>
      <div className="mt-12 z-10">
        <a
          href="https://github.com/ant3869/tailwind-ui-showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <Github className="mr-2 h-5 w-5" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default WelcomePage;
