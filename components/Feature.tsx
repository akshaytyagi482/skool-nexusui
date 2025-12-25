"use client";

import { useState } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  icon: string; // SVG path e.g. "/icons/pic1.svg"
}

const initialFeatures: Feature[] = [
  { title: "Dashboard", icon: "/pic1.svg" },
  { title: "Inventory", icon: "/pic2.svg" },
  { title: "Admission", icon: "/pic3.svg" },
  { title: "Student Details", icon: "/pic4.svg" },
  { title: "Parents Portal", icon: "/pic5.svg" },
  { title: "Employee Management", icon: "/pic6.svg" },
  { title: "Card Management", icon: "/pic7.svg" },
  { title: "Certificate Management", icon: "/pic8.svg" },
];

// IF YOU HAVE MORE FEATURES → just push here
const extraFeatures: Feature[] = [
  { title: "Human Resource", icon: "/pic9.svg" },
  { title: "Academic Management", icon: "/pic10.svg" },
  { title: "Homework Management", icon: "/pic11.svg" },
];

export default function FeaturesSection() {
  const [showMore, setShowMore] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allFeatures = showMore
    ? [...initialFeatures, ...extraFeatures]
    : initialFeatures;

  return (
    <section className="w-full py-20 bg-white text-center">
      {/* TOP LABEL */}
      <p className="text-xs font-semibold tracking-widest text-indigo-600">
        FEATURES
      </p>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mt-1">
        A Fully Integrated ERP Solution
      </h2>

      <p className="text-gray-500 mt-2">
        For Schools & Educational Institutes
      </p>

      {/* GRID */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {allFeatures.map((f, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
            className={`border rounded-xl py-6 flex flex-col items-center gap-3 hover:shadow-[0_2px_15px_rgba(0,0,0,0.07)] transition cursor-pointer ${
              selectedIndex === i
                ? "border-accent bg-accent/10"
                : "border-gray-200"
            }`}
          >
            <div className="w-fit rounded-full flex items-center justify-center shadow-sm bg-gray-50">
              <Image
                src={f.icon}
                alt={f.title}
                width={40}
                height={40}
                className="object-fill"
              />
            </div>

            <p className="font-medium text-gray-700">{f.title}</p>
          </div>
        ))}
      </div>

      {/* SEE MORE BUTTON */}
      {extraFeatures.length > 0 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-10 px-6 py-3 rounded-lg text-sm text-accent bg-white border border-gray-300 hover:bg-gray-50 transition"
        >
          {showMore ? "Show Less" : `See More Features`}
        <Image
            src="/dropdown.svg"
            className="inline ml-2"
            alt="AI-Powered Insights badge"
            width={10}
                height={40}
                />
        </button>
      )}
    </section>
  );
}
