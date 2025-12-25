import Image from "next/image";

export default function Plans() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-inter font-semibold text-gray-900">
          Our Pricing Plans are designed to be{" "}
          <span className="text-accent">affordable</span>,{" "}
          <span className="text-accent">flexible</span> and tailored to your needs
        </h2>

        <p className="mt-3 text-sm text-gray-500">
          10+ Satisfied Schools
        </p>
        <p className="flex mt-4 gap-2 at-center justify-center ">
          <span className="bg-accent px-2 py-1 text-white">Monthly</span>
          <span className="text-black px-2 py-1">Yearly</span>
        </p>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

          {/* BASIC */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h3 className="font-semibold text-lg">Basic</h3>
            <p className="text-sm text-gray-500">
              Ideal for small schools & startups
            </p>

            <p className="mt-4 text-2xl font-bold">
              ₹999{" "}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </p>

            <button className="mt-4 w-full rounded-lg bg-accent/10 text-accent py-2 text-sm font-medium hover:bg-accent/20 transition">
              Get Started
            </button>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Up to 300 students</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Core modules (Admission, Attendance, Exams)</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Basic reporting</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Email support</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Mobile app access</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Regular updates</li>
              <li className="text-gray-400 flex items-center gap-2"><span>✖</span> Advanced analytics</li>
              <li className="text-gray-400 flex items-center gap-2"><span>✖</span> Custom branding</li>
              <li className="text-gray-400 flex items-center gap-2"><span>✖</span> API access</li>
              <li className="text-gray-400 flex items-center gap-2"><span>✖</span> Dedicated account manager</li>
            </ul>
          </div>

          {/* PRO (HIGHLIGHTED) */}
          <div className="rounded-2xl outline-none p-6 shadow-[0_18px_45px_rgba(35,155,251,0.35)]">
            <h3 className=" text-lg">Pro</h3>
            <p className="text-sm text-gray-500">
              Advanced features for growing institutions
            </p>

            <p className="mt-4 text-2xl font-bold">
              ₹1,999{" "}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </p>

            <button className="mt-4 w-full rounded-lg bg-accent text-white py-2 text-sm font-medium hover:opacity-90 transition">
              Get Started
            </button>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Up to 2,000 students</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> All Basic features</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> All modules included</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Advanced reporting & analytics</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Priority support</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Custom branding</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> API access</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Data migration assistance</li>
              <li className="text-gray-400 flex items-center gap-3"><span>✖</span> Dedicated account manager</li>
              <li className="text-gray-400 flex items-center gap-3"><span>✖</span> Custom development</li>
            </ul>
          </div>

          {/* ENTERPRISE */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h3 className="font-semibold text-lg">Enterprise</h3>
            <p className="text-sm text-gray-500">
              Full ERP Suite for multi-branch schools
            </p>

            <p className="mt-4 text-xl font-semibold">Custom</p>

            <button className="mt-4 w-full rounded-lg bg-accent/10 text-accent py-2 text-sm font-medium hover:bg-accent/20 transition">
              Contact Sales
            </button>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Unlimited students</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} />✅ All Pro features</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Multi-branch management</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Dedicated account manager</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Custom development</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> 24/7 premium support</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> On-site training</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Advanced security features</li>
              <li className="flex items-center gap-2"><Image src="/tick.svg" alt="tick" width={20} height={20} /> Custom integrations</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
