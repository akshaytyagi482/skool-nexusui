"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  // ---- FIRST 4 ----
  {
    icon: "/icons/icon2.svg",
    title: "Unified Dashboard",
    desc: "Manage admissions, attendance, timetables, exams, and accounting from a single interface with role-based access control.",
  },
  {
    icon: "/icons/icon1.svg",
    title: "Cloud Based Access",
    desc: "Secure 24/7 access from any device with automatic backups and 99.9% uptime SLA.",
  },
  {
    icon: "/icons/icon3.svg",
    title: "Transport Tracking",
    desc: "Real-time GPS bus tracking with parent alerts and route optimization.",
  },
  {
    icon: "/icons/icon4.svg",
    title: "Inventory Management",
    desc: "Barcode/RFID asset tracking for labs, libraries, and equipment",
  },

  // ---- NEXT 4 ----
  {
    icon: "/icons/icon5.svg",
    title: "Smart Timetabling",
    desc: "AI-generated schedules that optimize teacher workloads and classroom allocation.",
  },
  {
    icon: "/icons/icon6.svg",
    title: "Digital Lesson Plans",
    desc: "Standards-aligned planning tools with resource-sharing for teachers.",
  },
  {
    icon: "/icons/icon7.svg",
    title: "Automated Report Cards",
    desc: "Customizable templates with AI-powered performance insights and trend analysis.",
  },
  {
    icon: "/icons/icon8.svg",
    title: "API Access",
    desc: "Integrate with third-party tools (Zoom, Google Workspace, payment gateways).",
  },

  // ---- LAST 4 ----
  {
    icon: "/icons/icon9.svg",
    title: "Priority Support",
    desc: "Dedicated account manager + 24/7 chat/email support with 2-hour response time.",
  },
  {
    icon: "/icons/icon10.svg",
    title: "Enterprise Security",
    desc: "GDPR/COPPA compliant with biometric login, 2FA, and end-to-end encryption.",
  },
  {
    icon: "/icons/icon11.svg",
    title: "Data Migration",
    desc: "Free legacy system data transfer (Excel/SIS to ERP) with validation checks.",
  },
  {
    icon: "/icons/icon12.svg",
    title: "Custom Branding",
    desc: "White-label portals with your school’s logo, colors, and domain.",
  },
];

export default function FeatureSlider() {
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(features.length / ITEMS_PER_PAGE);

  const [page, setPage] = useState(0);

  const next = () => page < totalPages - 1 && setPage(page + 1);
  const prev = () => page > 0 && setPage(page - 1);

  return (
    <section className="pt-28 px-4 sm:px-6 flex flex-col gap-20 max-w-4xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-14">
        
        <h4 className="text-3xl sm:text-7xl mt-1">
          Skool Nexus <span className="text-accent">PRO</span>
        </h4>
        
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-all duration-500 ease-out"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${page * (100 / totalPages)}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-10 w-full px-2 sm:px-8"
            >
              {features
                .slice(i * ITEMS_PER_PAGE, i * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
                .map((ft, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="min-w-[36px]">
                      <Image
                        src={ft.icon}
                        alt={ft.title}
                        width={36}
                        height={36}
                        className="w-9 h-9"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[17px] mb-1">{ft.title}</h3>
                      <p className="text-gray-600 text-[14px] leading-relaxed">
                        {ft.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-start gap-10 mt-12 pl-1 sm:pl-8">
        <button
          onClick={prev}
          disabled={page === 0}
          className={`text-[15px] transition ${
            page === 0
              ? "opacity-40 cursor-not-allowed"
              : "text-[#ff5f5f] hover:text-red-500"
          }`}
        >
          Previous
        </button>

        <button
          onClick={next}
          disabled={page === totalPages - 1}
          className={`text-[15px] flex items-center gap-1 transition ${
            page === totalPages - 1
              ? "opacity-40 cursor-not-allowed"
              : "text-indigo-600 hover:text-indigo-800"
          }`}
        >
          Next <span className="text-lg">→</span>
        </button>
      </div>
      <Link className="text-accent mx-auto" href="/">Our Pricing Options</Link>
    </section>
  );
}
