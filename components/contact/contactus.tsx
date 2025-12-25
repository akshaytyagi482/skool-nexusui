import Image from 'next/image'
import React from 'react'

const Contactus = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
      Tired of juggling timetables, attendance, and parent communication?
    </h2>

    {/* Subheading */}
    <p className="text-gray-500 font-Plusjakarta mt-3 max-w-2xl mx-auto text-sm md:text-base">
      Let Skool Nexus automate the chaos. Schedule a free demo to see how
      500+ schools streamlined their operations—with answers to all your
      questions.
    </p>

    {/* CTA */}
    <div className="mt-6">
      <button className="bg-indigo-600 text-white text-sm underline px-5 py-2 rounded-md hover:bg-indigo-700 transition">
        Schedule Demo
      </button>
    </div>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* LEFT CARD (Image placeholder) */}
    <div className="bg-white min-h-[360px]">
      <Image
        src="/contact/leftbox.svg"
        width={420}
        height={320}
        alt="Testimonial"
        className="w-full h-full object-contain"
      />
    </div>

    {/* RIGHT CARD (Form) */}
    <div className="bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.1)] p-8">
      <form className="w-full h-full flex flex-col justify-between max-lg:gap-5 text-left">
        {/* Full Name */}
        <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
        <div className='flex flex-col gap-4'>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Ph no."
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        </div>
            </div>


        {/* Institution */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Institution name*
          </label>
          <input
            type="text"
            placeholder="Institution name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message*
          </label>
          <textarea
            rows={1}
            placeholder="Tell us about your requirements..."
            className="w-full
    border-0
    border-b
    border-gray-300
    rounded-none
    px-0
    py-2
    text-sm
    focus:outline-none
    focus:border-indigo-600
    focus:ring-0
    resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-accent text-white text-sm py-3 rounded-md flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
        >
          <Image src="/contact/sendicon.svg" width={22} height={22} alt="Send Icon" />
          Send Message
        </button>
      </form>
    </div>

  </div>
</section>

  )
}

export default Contactus