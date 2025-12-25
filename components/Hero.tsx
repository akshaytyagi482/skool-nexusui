import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 max-md:gap-30 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="
  font-plusjakarta
  text-[40px] leading-[52px]
  md:text-[72px] md:leading-[88px]
  tracking-[-0.02em]
  font-medium
">
  Transforming <br />
  Schools with <br />
  <span className="text-accent font-semibold">
    Smart ERP
  </span>{' '}
  Solutions
</h1>

          <p
  className="
    mt-6
    max-w-xl
    text-[20px]
    leading-[32px]
    font-normal
    text-gray-600
  "
>
  A Unified Platform for Seamless Management & Digital
  Transformation of Educational Institutions.
</p>

          <div className="mt-8 flex gap-4">
            <a
  className="
    bg-accent
    text-white
    px-4 py-2
    md:px-6 md:py-3
    rounded-lg
    text-[16px]
    font-medium
  "
>
  Book a Free Demo
</a>

           <a
  className="
    border border-gray-300
    text-gray-700
    px-4 py-2
    md:px-6 md:py-3
    rounded-lg
    text-[16px]
    font-medium
  "
>
  Explore Features →
</a>

          </div>
        </div>

        {/* RIGHT IMAGES CLUSTER */}
        <div className="relative flex flex-col items-center">

          {/* TOP TEXT + LOGO */}
          <div className="absolute z-10 max-sm:-top-18 -top-10 text-center">
            <p className="text-sm text-gray-500">From Team That Brought You</p>
            <Image
              src="/opener.svg"
              alt="Nexus logo"
              width={220}
              height={80}
              className="mx-auto"
            />
          </div>

          {/* LAPTOP IMAGE */}
          <div className="relative w-full flex justify-center">
            <Image
              src="/medium.svg"
              alt="Laptop dashboard"
              width={700}
              height={420}
              className="w-full max-w-xl object-contain"
            />
          </div>

          {/* BADGE UNDER LAPTOP */}
          <div className="absolute max-sm:bottom-0 bottom-6">
            <Image
              src="/end.svg"
              alt="AI-Powered Insights badge"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
