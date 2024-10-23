import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UploadArea from './components/UploadArea';
import ResultDisplay from './components/ResultDisplay';
import { motion } from 'framer-motion';
import { Shield, Zap, Users } from 'lucide-react';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<'genuine' | 'deepfake' | null>(null);

  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
    setResult(null);
  };

  const analyzeVideo = () => {
    if (!file) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult(Math.random() > 0.5 ? 'genuine' : 'deepfake');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633127365943-3e3a23163e14?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
          <div className="relative container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                DeepTrace
                <span className="text-blue-500">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                Advanced AI-powered deepfake detection for a safer digital world. Protect yourself from digital deception with our cutting-edge technology.
              </p>
            </motion.div>

            {!file && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <UploadArea onFileUpload={handleFileUpload} />
              </motion.div>
            )}

            {file && !result && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 max-w-2xl mx-auto"
              >
                <p className="text-gray-300 mb-4">Selected file: {file.name}</p>
                <button
                  onClick={analyzeVideo}
                  disabled={isAnalyzing}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <Zap className="animate-pulse" size={20} />
                  <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Video'}</span>
                </button>
              </motion.div>
            )}

            {result && <ResultDisplay result={result} />}
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 text-center">
              <Shield className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Protection</h3>
              <p className="text-gray-400">State-of-the-art AI algorithms to detect even the most sophisticated deepfakes</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 text-center">
              <Zap className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Analysis</h3>
              <p className="text-gray-400">Get instant results with our lightning-fast processing system</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 text-center">
              <Users className="mx-auto text-blue-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-4">User Privacy</h3>
              <p className="text-gray-400">Your data is secure with our encrypted analysis process</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;