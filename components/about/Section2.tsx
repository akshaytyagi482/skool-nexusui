import Image from 'next/image'
import React from 'react'

const Section2 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0a0620] via-[#120b3a] to-[#0a0620] py-24">
  <div
  className="
    hidden
    lg:block
    absolute
    right-0
    bottom-0
    pointer-events-none
  "
>
  <Image
    src="/about/phonecut.svg"
    alt="Skool Nexus Interface"
    width={400}
    height={600}
    className="w-lg"
  />
</div>
  <div className="max-w-6xl px-8 mx-auto relative">

    <div className="max-w-2xl flex flex-col justify-between gap-30 text-white relative z-10">
      <div>

      <h3 className="text-3xl  leading-[112%]
    tracking-[0.42px] font-plusjakarta">
        Founded in 2025
      </h3>

      <h2 className="text-3xl  leading-[112%]
    tracking-[0.42px]">
        Skool Nexus was born from a simple idea:
      </h2>

      <p className="text-sm sm:text-base  leading-[112%]
    tracking-[0.42px] font-plusjakarta  text-gray-300">
        school management shouldn&apos;t be harder than education itself. We saw
        administrators drowning in paperwork, teachers burdened by
        inefficiencies, and students lost in outdated systems—so we built a
        platform that turns chaos into clarity.
      </p>

      <p className="mt-6 text-sm text-gray-400  leading-[112%]
    tracking-[0.42px]">
        That&apos;s why we design every feature by walking the halls first—listening
        to administrators, teachers, and students. Why struggle with patchwork
        systems when you can have a platform that transforms school operations
        from burden to breakthrough?
      </p>
      </div>
 <div>
      <h3
  className="
    text-[32px]
    leading-[80%]
    font-sans
    font-plusjakarta
  "
>
  Today, we empower:
</h3>

<ul
  className="
    mt-4
    space-y-2
    list-disc
    list-inside
    text-[22px]
    leading-[100%]
    font-plusjakarta
    font-light
    text-gray-300
  "
>
  <li>10,000+ students to focus on learning, not logistics</li>
  <li>50+ schools to replace spreadsheets with smart automation</li>
  <li>Educators to reclaim 15+ hours weekly for what matters</li>
</ul>
 </div>

    </div>


    {/* ================= IMAGE (NORMAL FLOW ON MOBILE/TAB) ================= */}
    <div className="lg:hidden mt-14 flex justify-center">
      <Image
        src="/about/phone.svg"
        alt="Skool Nexus Interface"
        width={400}
        height={600}
        className="w-full max-w-sm sm:max-w-md"
      />
    </div>

  </div>
</section>

  )
}

export default Section2