import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-transparent backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="text-blue-500 mr-2" size={28} />
            <h1 className="text-2xl font-bold text-white">DeepTrace</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;