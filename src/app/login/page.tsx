'use client';
import React from 'react';

import LoginForm from '@/components/LoginForm/page';
import HomePageHeader from '@/components/HomePage/HomePageHeader/page';
import HomePageFooter from '@/components/HomePage/HomePageFooter/page';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HomePageHeader />
      <div className="my-8 flex justify-center items-center flex-grow">
        <LoginForm />
      </div>
      <HomePageFooter />
    </div>
  );
};

export default LoginPage;