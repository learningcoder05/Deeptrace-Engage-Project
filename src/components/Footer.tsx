import React from 'react';
import { Shield, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Shield className="text-blue-500 mr-2" size={24} />
              <h3 className="text-xl font-bold text-white">DeepTrace</h3>
            </div>
            <p className="text-gray-400 mb-4">Protecting digital authenticity through advanced AI technology.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest features and releases.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DeepTrace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;