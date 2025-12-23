"use client";

import Image from "next/image";
import { useState } from "react";

const Star = ({ type }: { type: "full" | "half" }) => (
  <Image
    src={type === "full" ? "/icons/star-full.svg" : "/icons/star-half.svg"}
    width={16}
    height={16}
    className="w-4 h-4"
    alt=""
  />
);

export default function CommunitySection() {
    interface Testimonial {
  rating: number; // e.g. 4.5
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 4.5,
    text:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
    author: "John doe",
  },
  {
    rating: 5,
    text:
      "Ut commodo efficitur neque. Curabitur tempus urna at turpis condimentum lobortis. Per inceptos himenaeos.",
    author: "Sarah Wilson",
  },
];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const t = testimonials[index];
  const fullStars = Math.floor(t.rating);
  const hasHalf = t.rating % 1 !== 0;

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-semibold leading-tight">
          From Our <span className="block text-accent">Community</span>
        </h2>

        <div className="mt-12 flex flex-col md:flex-row gap-12 items-start">

          {/* LEFT IMAGE (STATIC) */}
          <div className="w-full md:w-1/2">
            <Image
              src="/about/community.svg" // your provided image
              alt="Community"
              width={400}
              height={300}
              className="rounded-xl w-full max-w-md"
            />
          </div>

          {/* RIGHT SLIDER */}
          <div className="w-full md:w-1/2 overflow-hidden relative">

            {/* Sliding content */}
            <div
              key={index}
              className="
                transition-all
                duration-500
                ease-out
                animate-fadeSlide
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: fullStars }).map((_, i) => (
                  <Star key={i} type="full" />
                ))}
                {hasHalf && <Star type="half" />}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.text}
              </p>

              {/* Author */}
              <p className="mt-4 text-sm font-medium text-gray-800">
                – {t.author}
              </p>
            </div>

            {/* Controls */}
            <div className="mt-6 flex gap-6 text-sm">
              <button
                onClick={prev}
                className="text-gray-400 hover:text-gray-600"
              >
                Previous
              </button>

              <button
                onClick={next}
                className="text-red-700 flex items-center gap-1"
              >
                Next <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-accent/40 font-semibold text-lg">
            50K+ Educators Trust <br /> Skool Nexus
          </p>

          <button className="mt-4 px-6 py-2 rounded-full border border-accent text-accent text-sm hover:bg-accent hover:text-white transition">
            Connect With Us
          </button>
        </div>

      </div>
    </section>
  );
}
