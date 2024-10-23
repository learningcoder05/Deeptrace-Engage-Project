import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { motion } from 'framer-motion';

interface UploadAreaProps {
  onFileUpload: (file: File) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'video/*': [] },
    multiple: false,
  });

  return (
    <motion.div
      {...getRootProps()}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`max-w-2xl mx-auto border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition duration-300 ease-in-out ${
        isDragActive 
          ? 'border-blue-500 bg-gray-800/50' 
          : 'border-gray-600 hover:border-blue-500 bg-gray-800/30'
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto mb-4 text-blue-500" size={64} />
      <p className="text-xl text-gray-300 font-semibold">
        {isDragActive
          ? 'Drop the video here'
          : 'Drag and drop a video file here, or click to select'}
      </p>
      <p className="text-sm text-gray-400 mt-2">Supported formats: MP4, AVI, MOV</p>
    </motion.div>
  );
};

export default UploadArea;