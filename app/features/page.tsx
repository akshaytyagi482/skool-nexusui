import FeaturesSection from '@/components/features/Feature2'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/features/Hero'
import Featureon from '@/components/features/features'
import React from 'react'
import Ending from '@/components/features/Ending'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <Featureon />
        <FeaturesSection />
        <Ending />
        <Footer />
        </div>
  )
}

export default page