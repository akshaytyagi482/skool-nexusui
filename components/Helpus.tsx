"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
{
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    text: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
];

export default function BetterSection() {
  const ITEMS_PER_PAGE = 3; // show one row of 3
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);

  const next = () => page < totalPages - 1 && setPage(page + 1);
  const prev = () => page > 0 && setPage(page - 1);

  return (
    <section className="pt-28 pb-20 px-4 max-w-5xl mx-auto">

      {/* Heading */}
      <h2 className="text-4xl sm:text-6xl font-semibold text-center mb-20 leading-tight">
        HELP US MAKE IT <span className="text-[#6A33FF] font-bold">BETTER.</span>
      </h2>

      {/* SLIDER WRAPPER */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-all duration-500 ease-out"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${page * (100 / totalPages)}%)`,
          }}
        >

          {/* SLIDE PAGE */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className="w-full grid grid-cols-1 sm:grid-cols-3 gap-12 px-4"
            >
              {testimonials
                .slice(i * ITEMS_PER_PAGE, i * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
                .map((t, idx) => (
                  <div key={idx} className="space-y-6">

                    {/* TEXT */}
                    <p className="text-gray-700 text-[15px] leading-relaxed pr-5">
                      {t.text}
                    </p>

                    {/* GOOGLE ROW */}
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-300">
                      <Image
                        src="/google.svg"
                        alt="Google"
                        width={24}
                        height={24}
                        className="opacity-90"
                      />
                      <span className="text-[14px]">Google</span>
                    </div>

                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-start gap-10 mt-12 px-2">
        <button
          onClick={prev}
          className={`text-[15px] ${
            page === 0
              ? "opacity-40 cursor-not-allowed"
              : "text-[#E44] hover:text-red-600"
          }`}
        >
          Previous
        </button>

        <button
          onClick={next}
          className={`text-[15px] flex items-center gap-1 ${
            page === totalPages - 1
              ? "opacity-40 cursor-not-allowed"
              : "text-[#6A33FF] hover:text-purple-700"
          }`}
        >
          Next <span className="text-lg">→</span>
        </button>
      </div>

    </section>
  );
}
