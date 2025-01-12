"use client";
import React from 'react';
import Link from 'next/link';

export default function HomePageFooter() {
    return (
        <footer className="w-full bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="md:flex-1 mb-4 md:mb-0 md:text-left">
                    <h2 className="text-lg font-semibold mb-2">About Us</h2>
                    <p className="text-sm text-gray-400 text-justify">
                        CorrViz is a powerful 
                        <b><span className='text-orange-400'> Data Correlation and Relationship Analytics Tool </span></b>
                        that allows users to upload CSV files and generate correlation heatmaps, pair plots, and 
                        scatter plots for data analysis. This tool helps in visualizing the relationships and correlations 
                        between multiple variables in a dataset.
                    </p>
                </div>

                <div className="md:flex-1 flex flex-col items-center mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <ul className="space-y-2 text-sm text-center">
                        <li>
                            <Link href="/" className="text-gray-400 hover:text-purple-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutUs" className="text-gray-400 hover:text-purple-400 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contactUs" className="text-gray-400 hover:text-purple-400 transition">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="md:flex-1 md:text-right">
                    <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                    <p className="text-sm text-gray-400">
                        Email:{" "}
                        <Link href="mailto:sakshammaggu80@gmail.com" className="hover:text-purple-300 transition">
                            sakshammaggu80@gmail.com
                        </Link>
                    </p>
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} Data Relationship and Correlation Visualizer Tool. All rights reserved.
            </div>
        </footer>
    );
}