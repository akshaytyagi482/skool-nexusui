import React from 'react'

const Ending = () => {
  return (
    <section className="w-full py-20 bg-white px-6">
  <div className="max-w-5xl mx-auto">
    <div className="bg-accent rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] py-14 px-6 text-center">
      
      {/* Heading */}
      <h2 className="text-white text-2xl md:text-3xl font-semibold">
        Ready to Transform Your School?
      </h2>

      {/* Subtitle */}
      <p className="text-indigo-100 mt-3 text-sm md:text-base">
        Join hundreds of schools already using our platform to streamline their operations
      </p>

      {/* CTA Button */}
      <button className="mt-8 bg-white text-accent font-medium px-6 py-3 rounded-lg text-sm hover:bg-indigo-50 transition">
        Get Started Today
      </button>
    </div>
  </div>
</section>

  )
}

export default Ending