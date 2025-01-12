"use client";
import React, { useState } from "react";

interface DropFileProps {
    onFileSelect: (file: File) => void;
}

const DropFile: React.FC<DropFileProps> = ({ onFileSelect }) => {
    const [dragging, setDragging] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setSelectedFile(file);
            onFileSelect(file); 
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            onFileSelect(file);
        }
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 ${
                dragging ? "bg-blue-100 border-blue-500" : "bg-gray-100 border-gray-400"
            }`}
        >
            <input
                type="file"
                accept=".csv"
                onChange={handleFileSelect}
                className="hidden"
                id="fileInput"
            />
            <label htmlFor="fileInput" className="cursor-pointer">
                {selectedFile ? (
                    <p className="text-sm text-gray-700">
                        Selected File: <span className="font-medium">{selectedFile.name}</span>
                    </p>
                ) : (
                    <p className="text-sm text-gray-600">
                        Drag and drop a file here, or <span className="text-blue-500">click to select a file</span>.
                    </p>
                )}
            </label>
        </div>
    );
}

export default DropFile;