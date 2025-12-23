import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Logo */}
    <div className="flex justify-center mb-4">
      <Image
        src="/logo.svg" // replace with your logo path
        alt="Skool Nexus Logo"
        className="h-8 w-auto"
      />
    </div>

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
      Empowering Education Through Technology
    </h2>

    {/* Subtitle */}
    <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
      Learn about our mission to transform educational institutions with
      innovative solutions
    </p>

    {/* Static Case Study Tag */}
    <div className="mt-4">
        <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
      See how we've helped schools like yours
    </p>
      <div className="inline-block text-xs font-medium px-4 py-1.5 bg-accent text-white">
        Case Study
      </div>
    </div>

    {/* Images */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
      
      {/* Image 1 */}
      <div className="bg-gray-100 rounded-xl p-4 flex justify-center">
        <Image
          src="/feature-1.svg"
          alt="Dashboard Preview"
          className="w-full max-w-xs object-contain"
        />
      </div>

      {/* Image 2 */}
      <div className="bg-gray-100 rounded-xl p-4 flex justify-center">
        <Image
          src="/feature-2.svg"
          alt="Laptop Preview"
          className="w-full max-w-xs object-contain"
        />
      </div>

      {/* Image 3 */}
      <div className="bg-gray-100 rounded-xl flex justify-center">
        <Image
          src="/feature-3.svg"
          alt="Mobile Preview"
          className="w-full max-w-74 object-contain"
        />
      </div>

    </div>
  </div>
</section>

  )
}

export default Hero