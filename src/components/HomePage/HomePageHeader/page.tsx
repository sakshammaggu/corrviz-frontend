"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LogoutButton from '@/components/LogoutButton/page';
import { Button } from '@/components/ui/button';

export default function HomePageHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                <div className="flex items-center space-x-2">
                    <Link href="/">
                        <Image
                            onClick={() => {
                                window.location.href = '/';
                            }}
                            src="/images/projectLogo.png" 
                            alt="CorrViz Logo"
                            width={80}
                            height={50}
                        />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center justify-center flex-1 space-x-6">
                    <Link href="/" className="text-lg font-medium hover:text-purple-400 transition duration-300">Home</Link>
                    <Link href="/aboutUs" className="text-lg font-medium hover:text-purple-400 transition duration-300">About Us</Link>
                    <Link href="/contactUs" className="text-lg font-medium hover:text-purple-400 transition duration-300">Contact Us</Link>
                </nav>

                <div className="hidden md:flex space-x-4">
                    {isAuthenticated ? (
                        <LogoutButton />
                    ) : (
                        <>
                            <Link href="/login" className="text-md font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
                                Login
                            </Link>
                            <Link href="/signup" className="text-md font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>

                {/* Sidebar Button */}
                <div className="md:hidden flex items-center">
                    <Button
                        type="button"
                        onClick={toggleSidebar}
                        className="text-purple-400 focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </Button>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 z-40 flex">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={toggleSidebar}
                    ></div>

                    <div className="ml-auto w-64 bg-gray-900 h-full shadow-lg p-6 relative">
                        <Button
                            type="button"
                            onClick={toggleSidebar}
                            className="text-white mb-6 absolute top-4 right-4 focus:outline-none"
                            aria-label="Close sidebar"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </Button>

                        <nav className="space-y-4">
                            <Link href="/" className="block text-lg font-medium text-white hover:text-purple-400 transition duration-300">Home</Link>
                            <Link href="/aboutUs" className="block text-lg font-medium text-white hover:text-purple-400 transition duration-300">About Us</Link>
                            <Link href="/contactUs" className="block text-lg font-medium text-white hover:text-purple-400 transition duration-300">Contact Us</Link>

                            {isAuthenticated ? (
                                <LogoutButton />
                            ) : (
                                <>
                                    <Link href="/login" className="block text-md font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">Login</Link>
                                    <Link href="/signup" className="block text-md font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">Sign Up</Link>
                                </>
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}