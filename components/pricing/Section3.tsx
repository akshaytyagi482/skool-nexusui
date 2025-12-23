import React from 'react'
import Slider2 from './Slider2'
import Image from 'next/image'

const Section3 = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">

    {/* LEFT SIDE – Slider Component */}
    <div className="w-full lg:w-1/2">
      {/* Replace this with your actual slider component */}
      <Slider2 title='Skool Nexus Basic' subtitle='Ideal for small school & startup' />
    </div>

    {/* RIGHT SIDE – Image */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <Image
        src="/pricing/computer2.svg"
        alt="Skool Nexus Basic Preview"
        className="w-full object-contain"
      />
    </div>

  </div>
</section>

  )
}

export default Section3