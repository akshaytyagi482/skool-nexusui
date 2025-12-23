import Image from "next/image";

export default function WhyChooseUs2() {
  return (
   <section className="w-full flex justify-center items-center pt-20 max-lg:pb-72 max-md:pb-10 pb-128 px-4">
  <div className="w-full max-w-[] mx-auto relative">
  {/* LAPTOP (DESKTOP) */}
  <div
    className="
      hidden md:block
      absolute
      max-w-[1400px]
      -bottom-180
      z-20
      max-lg:bottom-[-500px]
        pointer-events-none
    "
  >
    <Image
      src="/laptopside.png"
      alt="Laptop"
      width={1650}
      height={750}
      className="object-contain z-20"
    />
  </div>

  {/* BOX */}
  <div
    className="
      relative
      w-full
      max-w-[1400px]
      rounded-[32px] mx-auto
      px-8 md:px-20
      py-16 md:pt-20
      md:pb-40
      text-white
      z-10
    "
  >
    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#201043] via-[#0A031A] to-[#000] opacity-[0.92]"></div>

    <Image
      src="/texture.jpg"
      alt="texture"
      fill
      className="object-cover rounded-[32px] opacity-[0.18]"
    />

    <div className="relative z-10">

      {/* HEADING */}
      <h2 className="text-[42px] md:text-[50px] font-bold mb-14">
        Why Choose Us ?
      </h2>

      {/* STATS */}
      <div className="flex flex-wrap gap-12 md:gap-20 mb-16">
            <div>
              <p className="text-[40px] font-bold leading-none">5+</p>
              <p className="text-sm opacity-80">Years<br />in the Field</p>
            </div>

            <div>
              <p className="text-[40px] font-bold leading-none">10k+</p>
              <p className="text-sm opacity-80">Students<br />have Benefitted</p>
            </div>

            <div>
              <p className="text-[40px] font-bold leading-none">10+</p>
              <p className="text-sm opacity-80">Schools<br />have joined us</p>
            </div>
          </div>


      {/* STACKED IMAGE + STORY */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* STACKED IMAGES */}
        <div className="relative flex md:block">
          <Image
            src="/stacked-images.svg"
            alt="Photos"
            width={520}
            height={520}
            className="
              rounded-xl
              w-[480px]
              md:absolute
             md:top-[60px]
md:left-[-80px]
md:w-[600px]
            "
          />
        </div>


            {/* STORY */}
            <div className="max-w-lg relative">
              <h3 className="text-[26px] font-semibold mb-4">Our Story</h3>

              <p className="text-[16px] opacity-90 leading-[1.7] mb-6">
                Founded in 2025, Skool Nexus emerged from a vision to revolutionize
                school management systems. We recognized the challenges faced by
                educational institutions in the digital age and set out to create
                a comprehensive solution that would streamline administrative tasks
                and enhance the learning experience.
              </p>

              <a href="#" className="underline z-40 text-[15px] font-medium">
                Read Article
              </a>
            </div>

          </div>

          {/* LAPTOP (MOBILE) */}
          <div className="mt-20 max-md:w-full md:hidden w-full flex justify-center">
            <Image
              src="/laptopside.png"
              alt="Laptop"
              width={700}
              height={450}
              className="object-contain"
            />
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
