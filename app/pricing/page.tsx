import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Contactsales from '@/components/pricing/Contactsales'
import Hero from '@/components/pricing/Hero'
import Plans from '@/components/pricing/Plans'
import Section3 from '@/components/pricing/Section3'
import Section4 from '@/components/pricing/Section4'
import React from 'react'

const page = () => {
  return (
     <div className="min-h-screen flex flex-col">
            <Header />
             <Hero />
             <Plans />
             <Section3 /> 
              <Section4 />
              <Contactsales />
            <Footer />
            </div>
  )
}

export default page