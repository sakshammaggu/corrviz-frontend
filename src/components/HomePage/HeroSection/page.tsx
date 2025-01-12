"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HeroSection() {
    const router = useRouter();

    const scrollToDropSection = () => {
        const dropSection = document.getElementById("fileUploadSection"); 
        if (dropSection) {
          dropSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navigateToAboutUs = () => {
        router.push("/aboutUs");
    };

    return (
        <section className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto text-center" style={{ transform: "scale(0.94)" }}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                    Unlock the Power of Your Data
                </h1>

                <p className="text-lg sm:text-xl mb-8 text-gray-950">
                    <strong>A one-stop solution for visualizing data relationships and correlations with heatmaps, pair plots, and scatter plots.</strong>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                        <Image 
                            src="/images/heatmap.png" 
                            alt="Correlation Heatmap" 
                            width={400} 
                            height={300} 
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
                        />
                        <p className="mt-4 text-xl font-semibold text-gray-100">Correlation Heatmap</p>
                    </div>
                    <div className="text-center">
                        <Image 
                            src="/images/scatterplots.png" 
                            alt="Scatterplot" 
                            width={400} 
                            height={300} 
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
                        />
                        <p className="mt-4 text-xl font-semibold text-gray-100">Scatterplot</p>
                    </div>
                    <div className="text-center">
                        <Image 
                            src="/images/pairplot.png" 
                            alt="Pairplot" 
                            width={400} 
                            height={300} 
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
                        />
                        <p className="mt-4 text-xl font-semibold text-gray-100">Pairplot</p>
                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <Button 
                        onClick={scrollToDropSection}
                        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
                    >
                        Start Analyzing
                    </Button>
                    <Button 
                        onClick={navigateToAboutUs}
                        className="px-6 py-3 bg-white text-purple-600 text-lg rounded-lg border-2 border-purple-500 hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
}