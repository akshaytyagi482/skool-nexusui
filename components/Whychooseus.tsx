import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white">

      {/* TOP LABEL */}
      <div className="text-center pt-20">
        <p className="text-xs tracking-widest text-indigo-600 font-semibold">
          WHY CHOOSE US
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-1">
          Next-Gen ERP for Next-Gen Schools
        </h2>
      </div>

      {/* ================================
          SECTION 1 — BIG IMAGE + OVERLAP
      ================================= */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 justify-center gap-10 px-5 ">

        {/* LEFT TEXT */}
        <div>
          <h3 className="text-4xl text-gray-400 leading-tight">
            Manage, Automate, and <br />
            Elevate Your Institution <br />
            with our comprehensive <br />
            school management <br />
            solution.
          </h3>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex w-full">
          {/* Main big image */}
          <Image
            src="/erp-dev.svg"
            width={600}
            height={400}
            className="w-100 rounded-xl align-top justify-end shadow-md"
            alt=""
          />

          {/* Overlapping laptop UI */}
          <Image
            width={600}
            height={400}
            src="/portal.svg"
            className="
              absolute 
              top-80
              left-0 
              -translate-x-11/12 
              -bottom-30
              w-[78%] 
              md:w-full
              lg:w-[140%]
              max-md:left-55
              rounded-xl 
            "
            alt=""
          />
        </div>
      </div>

      {/* Add spacing so next section doesn't overlap */}
      <div className="h-32 md:h-40"></div>

      {/* ================================
          SECTION 2 — MOBILE RIGHT
      ================================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-5 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="mt-6 text-gray-600 leading-relaxed">
            “Comprehensive school management, all-in-one dashboard, admissions to alumni tracking,
            academic administration, financial accounting, user-friendly interface, cloud-based platform,
            anytime access, customizable modules, flexible solutions, scalable for institutions, 
            trusted by 10+ schools, India-wide adoption, AI-powered analytics, data-driven insights,
            automation tools, streamlined workflows, complete management suite, seamless integration.”
          </p>
        </div>

        {/* RIGHT MOBILE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            width={600}
            height={400}
            src="/mobile-ui.svg"
            className=" md:w-52 lg:w-140 drop-shadow-xl"
            alt=""
          />
        </div>

      </div>

      <div className="py-20"></div>
    </section>
  );
}
