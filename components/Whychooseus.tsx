import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white">

      {/* TOP LABEL */}
      <div className="text-center pt-20">
        <p
  className="
    font-inter
    font-bold
    text-[16px]
    leading-[24px]
    tracking-[0.4px]
    text-center
    uppercase
    text-indigo-600
  "
>
  WHY CHOOSE US
</p>

        <h2
  className="
    mt-1
    text-center
    text-[24px] leading-8
    md:text-[36px] md:leading-11
    tracking-[-0.02em]
    font-semibold
  "
>
  Next-Gen ERP for Next-Gen Schools
</h2>

      </div>

      {/* ================================
          SECTION 1 — BIG IMAGE + OVERLAP
      ================================= */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 justify-center gap-10 px-5 ">

        {/* LEFT TEXT */}
        <div>
          <h3
  className="
    text-[28px] leading-9
    md:text-[44px] md:leading-[60px]
    tracking-[-0.02em]
    font-semibold
    text-gray-400
  "
>
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
            width={650}
            height={400}
            className="w-110 rounded-xl align-top justify-end shadow-md"
            alt=""
          />

          {/* Overlapping laptop UI */}
          <Image
            width={600}
            height={400}
            src="/portal.svg"
            className="
              absolute 
              top-90
              left-0 
              -translate-x-11/12 
              -bottom-30
              w-[80%] 
              md:w-full
              lg:w-[145%]
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
          <p
  className="
    mt-6
    text-[20px]
    leading-10
    tracking-[-0.01em]
    font-light
    text-gray-600
  "
>
  “Comprehensive school management, all-in-one <span
  className="
    text-[20px]
    leading-10
    tracking-[-0.01em]
    font-light
    align-middle
  "
>
  dashboard
</span>
, <span>admissions</span> to <span
  className="
    text-[20px]
    leading-10
    tracking-[-0.01em]
    font-light
    text-accent
    align-middle
  "
>
  alumni tracking
</span>
,
  academic administration, <span className="text-[20px]
    leading-10
    tracking-[-0.01em]
    font-light
    text-accent
    align-middle">financial accounting</span>, user-friendly interface, cloud-based platform,
   <span
  className="
    text-[20px]
    leading-10
    tracking-[-0.01em]
    font-light
    text-accent
    align-middle
  "
>anytime access</span>, customizable modules, flexible solutions, scalable for institutions,
  trusted by <span className="font-semibold ">10+ schools</span>, India-wide adoption,
  <span className="text-[20px]
    leading-10
    tracking-[-0.01em]
    font-medium
    text-accent
    align-middle">AI-powered analytics, data-driven insights,
  automation tools, streamlined workflows, complete management suite, seamless integration,</span>get started today.”
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
