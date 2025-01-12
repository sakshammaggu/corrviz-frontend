'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import HomePageHeader from '@/components/HomePage/HomePageHeader/page';
import HomePageFooter from '@/components/HomePage/HomePageFooter/page';

const AboutUsPage: React.FC = () => {
    const router = useRouter();

    return (
        <div>
           <HomePageHeader />

            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-6 sm:px-8 lg:px-16">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
                        About Data Correlation and Relationship Analytics Tool
                    </h1>
                    <p className="text-lg sm:text-xl mb-12 text-gray-900">
                        <b>
                            A powerful tool designed to empower data analysts by offering intuitive visualizations of 
                            correlations and relationships between variables in datasets. Upload your CSV files and 
                            get insightful graphs such as heatmaps, pair plots, and scatter plots that simplify complex 
                            data analysis.
                        </b>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
                        <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                            <Image 
                                src="/images/heatmap.png"
                                alt="Correlation Heatmap"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2">Correlation Heatmap</h3>
                            <p className="text-orange-600 text-justify">
                                <b>
                                    Visualize the strength and direction of correlations between numerical variables in 
                                    your dataset. A heatmap that helps identify key relationships at a glance.
                                </b>
                            </p>
                        </div>
                        <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                            <Image 
                                src="/images/pairplot.png"
                                alt="Pair Plot"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2">Pair Plot</h3>
                            <p className="text-orange-600 text-justify">
                                <b>
                                    Explore pairwise relationships between variables through scatter plots, with 
                                    histograms to show distributions along the diagonal. Perfect for spotting patterns 
                                    and trends.
                                </b>
                            </p>
                        </div>
                        <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                            <Image 
                                src="/images/scatterplots.png"
                                alt="Scatter Plot"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2">Scatter Plot</h3>
                            <p className="text-orange-600 text-justify">
                                <b>
                                    Visualize the relationship between two variables with a scatter plot. Identify 
                                    clusters, trends, and outliers easily with this essential data visualization tool.
                                </b>
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto text-left">
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-black">How It Works</h2>
                        <p className="text-lg sm:text-xl mb-6 text-justify">
                            This tool allows you to upload your dataset in CSV format and automatically generates insightful 
                            visualizations. Here’s a closer look at how the three main features work:
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. Correlation Heatmap</h3>
                                <p className="text-gray-100 text-justify">
                                    A heatmap that visually represents the correlation matrix between different variables. 
                                    It provides a clear, color-coded overview of the strength and direction of the 
                                    relationships between multiple numerical features.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Pair Plot</h3>
                                <p className="text-gray-100 text-justify">
                                    Displays scatter plots for each pair of numerical variables, helping you identify trends 
                                    and relationships. The diagonal also shows histograms of the distributions of each variable.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. Scatter Plot</h3>
                                <p className="text-gray-100 text-justify">
                                    A basic yet powerful visualization that shows the relationship between two variables. 
                                    Perfect for identifying clusters, trends, and potential correlations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Button
                            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-lg transition duration-300"
                            onClick={() => router.push("/")}
                        >
                            Start Analyzing Your Data
                        </Button>
                    </div>
                </div>
            </section>

            <HomePageFooter />
        </div>
    );
};

export default AboutUsPage;