import React from 'react'

const Contactsales = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    
    {/* Text */}
    <h2 className="text-lg sm:text-3xl text-gray-500">
      Ready to transform your school management?
      <span className="text-accent block "> Contact Sales.</span>
    </h2>

    {/* Button */}
    <div className="mt-6">
      <button
        className="
          px-6
          py-2.5
          rounded-full
          border
          border-gray-300
          text-accent
          text-sm
          font-medium
          hover:bg-accent
          hover:text-white
          transition
        "
      >
        Contact Sales
      </button>
    </div>

  </div>
</section>

  )
}

export default Contactsales