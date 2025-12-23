import Image from "next/image";

export default function InfiniteLogos() {
  const logos = [
    "/company/icon1.svg",
    "/company/icon2.svg",
    "/company/icon3.svg",
    "/company/icon4.svg",
    "/company/icon5.svg",
    "/company/icon6.svg",
    "/company/icon7.svg",
    "/company/icon8.svg",
    "/company/icon9.svg",
  ];

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex w-max animate-scroll">
        
        {/* FIRST LOOP */}
        {logos.map((src, i) => (
          <div key={i} className="mx-12 flex items-center">
            <Image src={src} alt="logo" width={150} height={70} />
          </div>
        ))}

        {/* SECOND LOOP → important for infinite effect */}
        {logos.map((src, i) => (
          <div key={"dup-" + i} className="mx-12 flex items-center">
            <Image src={src} alt="logo" width={150} height={70} />
          </div>
        ))}

      </div>
    </div>
  );
}
