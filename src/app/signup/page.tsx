'use client';
import React from 'react';

import SignupForm from '@/components/SignupForm/page';
import HomePageHeader from '@/components/HomePage/HomePageHeader/page';
import HomePageFooter from '@/components/HomePage/HomePageFooter/page';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HomePageHeader />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <SignupForm />
      </div>
      <HomePageFooter />
    </div>
  );
};

export default LoginPage;