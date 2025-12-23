import React from 'react'
import Slider from './Slider'

const Section4 = () => {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
  {/* ================= BACKGROUND DECORATION ================= */}

  {/* Left Desktop */}
  <img
    src="/pricing/left.svg"
    alt=""
    className="
      pointer-events-none
      hidden
      xl:block
      absolute
      top-1/2
      -translate-y-1/2
      w-2xl
      opacity-90
    "
  />

  {/* Right Laptop */}
  <img
    src="/pricing/right1.svg"
    alt=""
    className="
      pointer-events-none
      hidden
      lg:block
      absolute
      top-0
      right-10
      w-[350px]
      opacity-95
    "
  />

  {/* Bottom Mobile */}
  <img
    src="/pricing/right2.svg"
    alt=""
    className="
      pointer-events-none
      hidden
      xl:block
      absolute
      right-[120px]
        bottom-15
      w-[300px]
      opacity-90
    "
  />

  {/* ================= MAIN CONTENT ================= */}
  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <Slider title='Skool Nexus Enterprise' subtitle='For ERP Suite for multi branch schools' />
  </div>
</section>

  )
}

export default Section4