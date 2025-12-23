"use client";

import { useState } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  subtitle: string;
  icon: string; // SVG path e.g. "/icons/pic1.svg"
}

const initialFeatures: Feature[] = [
  {
    title: "Dashboard",
    subtitle: "Real-time analytics & school performance insights.",
    icon: "/features/pic1.svg",
  },
  {
    title: "Inventory",
    subtitle: "Manage school assets, books, and resources efficiently.",
    icon: "/features/pic2.svg",
  },
  {
    title: "Admission",
    subtitle: "Automate student admissions & enrollment process.",
    icon: "/features/pic3.svg",
  },
  {
    title: "Student Details",
    subtitle: "Maintain comprehensive student records.",
    icon: "/features/pic4.svg",
  },
  {
    title: "Parents Portal",
    subtitle: "Parent portals for tracking student progress & communication.",
    icon: "/features/pic5.svg",
  },
  {
    title: "Employee Management",
    subtitle: "Manage teachers & staff, attendance, and payroll.",
    icon: "/features/pic6.svg",
  },
  {
    title: "Card Management",
    subtitle: "Issue & manage student ID and library cards.",
    icon: "/features/pic7.svg",
  },
  {
    title: "Certificate Management",
    subtitle: "Generate digital certificates for students & staff.",
    icon: "/features/pic8.svg",
  },
  {
    title: "Human Resource",
    subtitle: "HR management, payroll, and leave tracking.",
    icon: "/pic9.svg",
  },
];


// IF YOU HAVE MORE FEATURES → just push here
const extraFeatures: Feature[] = [
  {
    title: "Academic Management",
    subtitle: "Curriculum planning, lesson management, and grading.",
    icon: "/pic10.svg",
  },
  {
    title: "Homework Management",
    subtitle: "Digital homework assignments & submission tracking.",
    icon: "/pic11.svg",
  },
  {
    title: "Exam Master",
    subtitle: "Exam scheduling, online tests, and results.",
    icon: "/pic12.svg",
  },
  {
    title: "Attendance Management",
    subtitle: "Track attendance digitally with biometric & RFID integration.",
    icon: "/pic13.svg",
  },
  {
    title: "Library Management",
    subtitle: "Complete library management system with book tracking.",
    icon: "/pic14.svg",
  },
  {
    title: "Event Management",
    subtitle: "Organize & manage school functions and events.",
    icon: "/pic15.svg",
  },
  {
    title: "Student Accounting",
    subtitle: "Fee collection, billing & student finance tracking.",
    icon: "/pic16.svg",
  },
  {
    title: "Office Accounting",
    subtitle: "Manage payroll, expenses & overall school accounting.",
    icon: "/pic17.svg",
  },
  {
    title: "Messaging System",
    subtitle: "Automated SMS, email, and app notifications.",
    icon: "/pic18.svg",
  },
  {
    title: "Reports & Analytics",
    subtitle: "Generate real-time school performance & financial reports.",
    icon: "/pic19.svg",
  },
  {
    title: "Alumni Management",
    subtitle: "Manage alumni engagement & records.",
    icon: "/pic20.svg",
  },
  {
    title: "Supervision",
    subtitle: "Monitor teacher performance & academic progress.",
    icon: "/pic21.svg",
  },
];


export default function FeaturesSection() {
  const [showMore, setShowMore] = useState(false);

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
        A Complete School Management Solution
      </h2>

      <p className="text-gray-500 mt-2">
        Comprehensive tools and features designed specifically for
educational institutions
      </p>

      {/* GRID */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {allFeatures.map((f, i) => (
          <div
  key={i}
  className="border border-gray-200 rounded-xl p-6 text-left hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition bg-white"
>
  {/* Icon */}
  <div className="relative w-10 h-10 rounded-lg bg-indigo-50 mb-4">
    <Image
      src={f.icon}
      alt={f.title}
      className="w-full"
      width={25}
      height={25}
    />
  </div>

  {/* Title */}
  <h3 className="font-semibold text-gray-800">
    {f.title}
  </h3>

  {/* Subtitle */}
  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
    {f.subtitle}
  </p>

  {/* Learn more */}
  <button className="mt-4 text-sm text-indigo-600 font-medium inline-flex items-center gap-1 hover:underline">
    Learn more
    <span className="text-lg">›</span>
  </button>
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
            height={10}
                />
        </button>
      )}
    </section>
  );
}
