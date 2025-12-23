import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/contact/Hero'
import Newsletter from '@/components/contact/Newsletter'
import Contactus from '@/components/contact/contactus'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <Contactus />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default page