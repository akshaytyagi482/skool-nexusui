"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function StepsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Desktop drag-to-scroll logic
  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
  const slider = sliderRef.current;
  if (!slider) return;

  slider.dataset.down = "true";
  slider.dataset.startX = String(e.pageX - slider.offsetLeft);
  slider.dataset.scrollLeft = String(slider.scrollLeft);
};

const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const slider = sliderRef.current;
  if (!slider || slider.dataset.down !== "true") return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const startX = Number(slider.dataset.startX);
  const scrollLeftStart = Number(slider.dataset.scrollLeft);

  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeftStart - walk;
};

const onDragEnd = () => {
  const slider = sliderRef.current;
  if (!slider) return;
  slider.dataset.down = "false";
};

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <h2 className="text-center text-[32px] md:text-[40px] font-semibold text-[#0F0F0F]">
          Discover, learn, thrive with SkoolNexus
        </h2>

        <p className="text-center text-[#6B7280] mt-2 mb-14 tracking-wide">
          IN 4 Simple Steps
        </p>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex gap-14 overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            cursor-grab active:cursor-grabbing
            select-none
            scrollbar-hide
          "
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseLeave={onDragEnd}
          onMouseUp={onDragEnd}
        >

          {/* CARD TEMPLATE FUNCTION */}
          {[
            {
              step: "Step 1",
              title: "Register & Set Up Your Institution",
              desc: `Create your account, configure school profile,
                     and customize the platform to match your institution's needs.`,
              img: "/step1.svg",
            },
            {
              step: "Step 2",
              title: "Sync & Manage Student, Staff & Admin Data",
              desc: `Import existing data or start fresh. Organize student records,
                     staff profiles, and administrative information.`,
              img: "/step2.svg",
            },
            {
              step: "Step 3",
              title: "Automate Attendance, Exams & Finances",
              desc: `Set up automated workflows for attendance tracking,
                     exam management, and finance operations.`,
              img: "/step3.svg",
            },
            {
              step: "Step 4",
              title: "Get AI-Based Insights & Reports in Real-Time",
              desc: `Access powerful analytics and reports to make data-driven decisions
                     and improve educational outcomes.`,
              img: "/step4.svg",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-[320px] snap-start flex-shrink-0"
            >
              <div className="rounded-xl overflow-hidden mb-6">
                <Image
                  src={card.img}
                  width={400}
                  height={260}
                  alt={card.step}
                  className="rounded-xl"
                />
              </div>

              <p className="text-[#6B7280] text-sm mb-1">{card.step}</p>
              <h3 className="text-[20px] font-semibold leading-[1.4] mb-3">
                {card.title}
              </h3>

              <p className="text-[#4B5563] leading-[1.6] text-[15px] mb-4">
                {card.desc}
              </p>

              <a href="#" className="text-[#0F0F0F] underline text-[14px] font-medium">
                Read article
              </a>
            </div>
          ))}
        </div>

      </div>
      <div className="flex w-full text-accent mt-25 justify-center items-end">
        <Link href="/">View more resources</Link>
      </div>
    </section>
  );
}
