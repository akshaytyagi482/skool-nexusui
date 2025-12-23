import React from 'react'
import Slider from './Slider'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto min-h-screen relative flex max-lg:flex-col max-lg:gap-5 items-center justify-center text-center pt-10  px-2">
      <div className='w-full lg:w-1/2'>
      <Slider title='Skool Nexus Pro' istrue={true} subtitle='Advanced feature for growing institutions' />
      </div>
      <div className='w-full lg:w-1/2'>
      <Image src={"/pricing/computer.svg"} width={400} height={400} alt='computer' className='w-full object-contain' /></div>
    </section>
  )
}

export default Hero