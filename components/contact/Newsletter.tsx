import Image from 'next/image'
import React from 'react'

const Newsletter = () => {
  return (
    <section className="w-full bg-white px-5 pb-10">
  <div className="max-w-6xl mx-auto">
    <div className="bg-accent rounded-2xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
      
      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-white text-2xl md:text-3xl font-semibold">
          Join our weekly Newsletter
        </h2>
        <p className="text-indigo-100 mt-2 text-sm md:text-base">
          Stay Up to Date with Latest News, announcements, and articles
        </p>
      </div>

      {/* RIGHT INPUT */}
      <div className="w-full md:max-w-md">
        <div className="flex items-center  max-[375px]:flex-col max-[375px]:gap-4 bg-white/10 border border-white/30 rounded-lg px-3 py-2">
          
          {/* Email Icon */}
          <span className="text-white max-[375px]:hidden mr-2"><Image src={"/contact/mail.svg"} width={20} height={20} alt='mail' /></span>

          {/* Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent text-white max-[375px]:border-0
    max-[375px]:border-b
    max-[375px]:border-gray-300 placeholder-indigo-200 focus:outline-none text-sm"
          />

          {/* Button */}
          <button className="ml-2 bg-white text-indigo-600 max-sm:p-2 text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-50 transition">
            Subscribe
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Newsletter