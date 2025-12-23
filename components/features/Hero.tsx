import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center text-center pt-20  px-4">
      
      {/* HERO TEXT */}
      <h1 className="text-[24px] sm:text-4xl font-medium leading-tight text-black">
        Work Less, Achieve More –
      </h1>

      <h2 className="text-[30px] sm:text-6xl font-bold leading-tight mt-1 text-black">
        The Smarter Way to Run Schools
      </h2>

      {/* iMAC IMAGE */}
      <div className="w-full relative lg:-top-20 md:-top-20 sm:-top-14 flex justify-center ">
        <Image
          src="/imac.svg"
          alt="iMac Display"
          width={900}
          height={600}
          priority
          className="w-[90%] sm:w-[70%] lg:w-[55%] object-contain"
        />
      </div>
    </section>
  );
}
