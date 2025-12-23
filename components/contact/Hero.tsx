import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
    
    {/* LEFT CONTENT */}
    <div>
      {/* Heading */}
      <h2 className="text-5xl md:text-8xl mx-auto w-fit  text-gray-900">
        CONTACT <span className="text-accent">US</span>
      </h2>

      {/* Top Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 text-sm">
        <div>
          <p className="font-medium flex items-center gap-2">
            📞 Phone
          </p>
          <p className="text-gray-600 mt-1">+91 7289890084</p>
          <p className="text-xs text-gray-400 mt-1">
            Monday–Friday, 9AM–6PM IST
          </p>
        </div>

        <div>
          <p className="font-medium flex items-center gap-2">
            ✉️ Email
          </p>
          <p className="text-gray-600 mt-1">support@skoolnexus.live</p>
          <p className="text-xs text-gray-400 mt-1">
            Monday–Friday, 9AM–6PM IST
          </p>
        </div>

        <div>
          <p className="font-medium flex items-center gap-2">
            📣 Sales
          </p>
          <p className="text-gray-600 mt-1">support@skoolnexus.live</p>
          <p className="text-xs text-gray-400 mt-1">
            Monday–Friday, 9AM–6PM IST
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14 text-sm">
        <div>
          <h4 className="font-semibold text-gray-900">
            Customer Support
          </h4>
          <p className="text-gray-500 mt-2 leading-relaxed">
            Our support team is available 24/7 to assist with any questions or
            technical issues. Whether you need troubleshooting help or guidance
            using Skool Nexus, we’re here to ensure a seamless experience.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">
            Feedback and Suggestions
          </h4>
          <p className="text-gray-500 mt-2 leading-relaxed">
            Your insights drive our innovation. We welcome suggestions to
            improve features and usability—every idea helps us serve you
            better.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">
            Media Inquiries
          </h4>
          <p className="text-gray-500 mt-2 leading-relaxed">
            For press collaborations, interviews, or brand partnerships,
            contact our media team at support@skoolnexus.live. We’re happy to
            share our story.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">
            Educator Community
          </h4>
          <p className="text-gray-500 mt-2 leading-relaxed">
            Join 10,000+ teachers, administrators, and education innovators in
            the Skool Nexus Network—a thriving hub for collaborative learning.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center lg:justify-end">
      <Image
        src="/contact/titanium.svg" // <-- your combined phone image
        alt="Skool Nexus Mobile Preview"
        className="relative
      lg:absolute
      lg:-top-36
      lg:left-0
      w-full
      max-w-md
      lg:max-w-lg
      object-contain"
      />
    </div>

  </div>
</section>

  )
}

export default Hero