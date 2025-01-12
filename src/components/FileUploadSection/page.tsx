'use client';
import React, { useState } from 'react'
import DropFile from '../DropFile/page'
import { Button } from '@/components/ui/button';
import { Progress } from '../ui/progress';
import { Download } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';

const FileUploadSection: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [images, setImages] = useState<{ title: string; base64: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
    setShowDetails(false);
    setImages([]);
    setLoading(false);
    // console.log("File selected:", file.name);
  };

  const handleShowDetails = async () => {
    if (uploadedFile) {
      setLoading(true);
      try {
        const formData=new FormData();
        formData.append('file', uploadedFile);

        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        // console.log('Response from backend:', response.data);

        setImages([
          { title: 'Heatmap', base64: response.data.pythonServiceMetadata.heatmap.heatmap_base64 },
          { title: 'Pairplot', base64: response.data.pythonServiceMetadata.pairplot.pairplot_base64 },
          { title: 'Scatterplots', base64: response.data.pythonServiceMetadata.scatterplots.scatterplots_base64 },
        ]);
        setShowDetails(true);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setLoading(false); 
      }
    }
  };

  return (
    <section id="fileUploadSection" className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Upload Your CSV File
        </h1>

        <DropFile onFileSelect={handleFileSelect} />

        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleShowDetails}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Upload & Show Details
          </Button>
        </div>

        {loading && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Loading, please wait...
            </h2>
            <Progress value={100} max={100} className="w-full" />
          </div>
        )}

        {showDetails && uploadedFile && (
          <>
            <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Uploaded File Details
              </h2>
              <p className="text-gray-600">
                <strong>Name:</strong> {uploadedFile.name}
              </p>
              <p className="text-gray-600">
                <strong>Size:</strong> {(uploadedFile.size / 1024).toFixed(2)} KB
              </p>
              <p className="text-gray-600">
                <strong>Type:</strong> {uploadedFile.type}
              </p>
            </div>

            {images.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Generated Visualizations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative border rounded-lg shadow-md p-2 group">
                      <Image
                        src={`data:image/png;base64,${image.base64}`}
                        alt={image.title}
                        className="max-w-full h-auto"
                      />
                      <a
                        href={`data:image/png;base64,${image.base64}`}
                        download={`${image.title}.png`}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2"
                        >
                          <Download size={20} />
                          Download
                        </Button>
                      </a>
                      <p className="text-center mt-2 text-sm text-gray-600">
                        {image.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
  
export default FileUploadSection;