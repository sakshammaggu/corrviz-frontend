'use client';
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

import { Button } from '@/components/ui/button'; 
import HomePageHeader from '@/components/HomePage/HomePageHeader/page';
import HomePageFooter from '@/components/HomePage/HomePageFooter/page';

const ContactUsPage: React.FC = () => {
    return (
        <div>
            <HomePageHeader />

            <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-6 sm:px-8 lg:px-16">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Contact Us</h1>
                    <b>
                        <p className="text-lg sm:text-xl mb-12 text-gray-800">
                            Have more doubts or need assistance? We’re here to help! Feel free to reach out to us for any queries, 
                            issues, or suggestions. We value your feedback and strive to make our tool even better.
                        </p>
                    </b>

                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full flex flex-col items-center justify-center space-y-4">
                            <FaEnvelope className="text-blue-600 w-16 h-16" />
                            <div className="text-center">
                                <p className="text-lg font-semibold text-gray-700">Contact Email</p>
                                <a 
                                    href="mailto:support@corrviz.com" 
                                    className="text-blue-600 text-xl font-bold underline hover:text-blue-700"
                                >
                                    sakshammaggu80@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <b>
                            <p className="text-lg sm:text-xl mb-6 text-gray-800">
                                You can also check our FAQs for commonly asked questions or connect with us on our social media 
                                platforms.
                            </p>
                        </b>
                        <Link href="/" passHref>
                            <Button
                                type="button"
                                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-lg transition duration-300"
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <HomePageFooter />
        </div>
    );
};

export default ContactUsPage;