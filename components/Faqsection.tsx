"use client";

import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "What is Skool Nexus, and how does it help schools?",
    a: "Skool Nexus is a comprehensive school ERP (Enterprise Resource Planning) system designed to streamline and automate all aspects of school management. It helps educational institutions manage admissions, attendance, academics, examinations, finance, HR, and more from a single platform, reducing administrative burden and improving efficiency.",
  },
  {
    q: "How can I integrate Skool Nexus into my existing system?",
    a: "Skool Nexus supports API-based integration, enabling seamless connectivity with your existing tools, portals, and workflows.",
  },
  {
    q: "Is my data secure with Skool Nexus?",
    a: "Absolutely. Skool Nexus uses enterprise-grade encryption, role-based access, and GDPR-compliant data protection standards.",
  },
  {
    q: "Can I customize the ERP for my school’s unique needs?",
    a: "Yes, Skool Nexus is fully customizable — from modules to workflows, dashboards, reports, and more.",
  },
  {
    q: "What kind of support does Skool Nexus provide?",
    a: "We offer 24/7 support through chat, email, and phone, along with onboarding assistance and training.",
  },
  {
    q: "How long does it take to implement Skool Nexus?",
    a: "Most schools are fully onboarded within 1–2 weeks depending on size and data migration needs.",
  },
  {
    q: "Can parents and students access the system?",
    a: "Yes. Students and parents get dedicated login portals and mobile app access.",
  },
  {
    q: "Does Skool Nexus work on mobile devices?",
    a: "Yes, Skool Nexus is fully mobile-responsive and also provides Android/iOS apps.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="py-24 px-4 max-w-3xl mx-auto">

      {/* Top Heading */}
      <div className="text-center mb-14">
        <p className="text-xs text-[#6247EA] font-semibold mb-2">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-[15px]">
          Find answers to common questions about Skool Nexus ERP
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-2">
        {faqs.map((item, i) => (
          <div key={i} className="border-b border-gray-200 py-3">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-[18px] font-medium">{item.q}</span>
              {open === i ? (
                <FiChevronUp className="text-gray-600" size={20} />
              ) : (
                <FiChevronDown className="text-gray-600" size={20} />
              )}
            </button>

            {/* DROPDOWN CONTENT */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-[14px] text-gray-600 leading-relaxed pb-3">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-20">
        <p className="text-[30px] text-gray-500">
          Still have questions? We're here to{" "}
          <span className="text-[#6A33FF] font-medium">help</span>.
        </p>

        <button className="mt-6 px-6 py-2 border text-accent border-gray-500 rounded-full text-[14px] hover:bg-gray-50 transition">
          Contact Support
        </button>
      </div>
    </section>
  );
}
