import Image from 'next/image'
import React from 'react'

const Section4 = () => {
  return (
    <section className="w-full bg-[#FBF9E8] py-24 px-6">
  <div className="max-w-5xl mx-auto space-y-32">

    {/* ================= SECTION 1 ================= */}
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">

      {/* LEFT NAV */}
      <div className="space-y-4 text-sm">
        <h4 className="font-semibold">Account Creation</h4>

        <div className="flex items-center justify-between text-gray-600 cursor-pointer">
          <span>Basic Customization</span>
          <Image src="/icons/arrow-up-right.svg" width={16} height={16} className="w-4 h-4" alt=''/>
        </div>

        <div className="flex items-center justify-between text-gray-600 cursor-pointer">
          <span>Access Control</span>
          <Image src="/icons/arrow-up-right.svg" width={16} height={16} className="w-4 h-4" alt='' />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          How to Configure Skool Nexus for Your School in 15 Minutes
        </h2>

        <ul className="mt-6 list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Visit portal.skoolnexus.com/signup</li>
          <li>
            Use your school’s official email domain (e.g., @yourschool.edu)
          </li>
        </ul>

        <p className="mt-6 text-sm">
          <span className="font-semibold">Pro Tip:</span>{" "}
          Enable Two-Factor Authentication for added security.
        </p>

        <p className="mt-6 text-sm font-semibold">Read Time: 3 min</p>
      </div>
    </div>

    {/* ================= SECTION 2 ================= */}
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">

      {/* LEFT NAV */}
      <div className="space-y-4 text-sm">
        <h4 className="font-semibold">Data Migration</h4>
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Importing & Organizing Data
        </h2>

        <div className="mt-6 space-y-6 text-sm text-gray-700">

          <div>
            <p className="font-semibold">Option A: Bulk Import</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Download our CSV template (Settings &gt; Data Management).</li>
              <li>Map columns (e.g., “Student Name” → “Full_Name”).</li>
              <li>Validate data with our Error Checker before finalizing.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Option B: Manual Entry</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use Quick Add for small groups (&lt;50 students).</li>
              <li>Tag students by grade/class for easy filtering.</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm">
          <span className="font-semibold">Pro Tip:</span>{" "}
          “Duplicate Entry” error? Use Merge Tool to resolve conflicts.
        </p>

        <p className="mt-6 text-sm font-semibold">Read Time: 8 min</p>
      </div>
    </div>

    {/* ================= SECTION 3 ================= */}
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">

      {/* LEFT NAV */}
      <div className="space-y-4 text-sm">
        <h4 className="font-semibold">Attendance</h4>

        <div className="flex items-center justify-between text-gray-600 cursor-pointer">
          <span>Exams</span>
          <Image src="/icons/arrow-up-right.svg" width={16} height={16} className="w-4 h-4" alt='' />
        </div>

        <div className="flex items-center justify-between text-gray-600 cursor-pointer">
          <span>Finances</span>
          <Image src="/icons/arrow-up-right.svg" width={16} height={16} className="w-4 h-4" alt='' />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Automating Daily Operations
        </h2>

        <ul className="mt-6 list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>
            Link RFID/biometric devices (Modules &gt; Attendance &gt; Devices).
          </li>
          <li>
            Set auto-alerts for absentees (SMS/email to parents).
          </li>
        </ul>

        <p className="mt-6 text-sm">
          <span className="font-semibold">Pro Tip:</span>{" "}
          Enable Two-Factor Authentication for added security.
        </p>

        <p className="mt-6 text-sm font-semibold">Read Time: 5 min</p>
      </div>
    </div>

  </div>
</section>

  )
}

export default Section4