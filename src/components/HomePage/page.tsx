import React from 'react'
import HomePageHeader from './HomePageHeader/page'
import FileUploadSection from '../FileUploadSection/page'
import HomePageFooter from './HomePageFooter/page'
import HeroSection from './HeroSection/page'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HomePageHeader />
      <HeroSection />
      <FileUploadSection />
      <HomePageFooter />
    </div>
  )
}