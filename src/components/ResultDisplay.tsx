import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResultDisplayProps {
  result: 'genuine' | 'deepfake';
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mt-8 max-w-2xl mx-auto rounded-xl backdrop-blur-lg ${
        result === 'genuine' 
          ? 'bg-green-900/30 border border-green-500/30' 
          : 'bg-red-900/30 border border-red-500/30'
      }`}
    >
      <div className="p-6">
        {result === 'genuine' ? (
          <div className="flex items-center text-green-400">
            <CheckCircle className="mr-3" size={24} />
            <span className="text-xl font-semibold">Video Authenticated</span>
          </div>
        ) : (
          <div className="flex items-center text-red-400">
            <AlertCircle className="mr-3" size={24} />
            <span className="text-xl font-semibold">Potential Deepfake Detected</span>
          </div>
        )}
        
        <p className="mt-4 text-gray-300 leading-relaxed">
          {result === 'genuine'
            ? 'Our advanced AI analysis indicates this video is authentic. However, we always recommend verifying content from multiple trusted sources.'
            : 'Our system has detected patterns consistent with deepfake manipulation. We recommend treating this content with caution and verifying its authenticity through other reliable sources.'}
        </p>

        <div className="mt-6 p-4 rounded-lg bg-gray-800/50">
          <div className="flex items-center text-blue-400 mb-3">
            <Info size={20} className="mr-2" />
            <h4 className="font-semibold">Recommended Actions:</h4>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Verify the video's source and credibility
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Look for visual inconsistencies
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Cross-reference with trusted sources
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Report suspicious content
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultDisplay;