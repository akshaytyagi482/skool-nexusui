import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 max-md:gap-30 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            Transforming <br />
            Schools with <br />
            <span className="text-accent font-bold">Smart ERP</span> Solutions
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            A Unified Platform for Seamless Management & Digital
            Transformation of Educational Institutions.
          </p>

          <div className="mt-8 flex gap-4">
            <a className="bg-accent text-white md:px-6 md:py-3 px-4 py-2 rounded-lg ">
              Book a Free Demo
            </a>
            <a className="border border-gray-300  md:px-6 md:py-3 px-4 py-2 rounded-lg text-gray-700">
              Explore Features →
            </a>
          </div>

          <div className="mt-8 flex gap-6 items-center text-sm text-gray-500">
            <div>5+ Years in the Field</div>
            <div>10k+ Students</div>
            <div>10+ Schools</div>
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
