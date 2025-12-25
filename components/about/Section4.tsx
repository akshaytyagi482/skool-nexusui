import Image from 'next/image'
import React from 'react'

const Section4 = () => {
  return (
    <section className="w-full bg-[#FBF9E8] py-24 px-6">
  <div className="max-w-5xl mx-auto space-y-32">

    {/* ================= SECTION 1 ================= */}
    <div className='flex font-PlusJakarta flex-col gap-20'>
      <h2 className=" text-[36px] leading-[44px]
  md:text-[50px] md:leading-[112%]
  tracking-[-0.9px]
  font-normal font-PlusJakarta">
          How to Configure Skool Nexus for Your School in 15 Minutes
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
       
      {/* LEFT NAV */}
      <div className="space-y-4 text-sm">
        <h4 className="
  text-[24px]
  leading-[121%]
  tracking-[0.61px]
  font-medium
"
>Account Creation</h4>

        <div className="flex items-center border-b border-gray-400 justify-between text-gray-600 cursor-pointer">
          <span className="
  text-[16px]
  leading-[121%]
  tracking-[0.61px]
  font-light
"
>Basic Customization</span>
          <Image src="/icons/arrow-up-right.svg" width={16} height={16} className="w-4 h-4" alt=''/>
        </div>

        <div className="flex items-center border-b border-gray-400 justify-between text-gray-600 cursor-pointer">
          <span className="
  text-[16px]
  leading-[121%]
  tracking-[0.61px]
  font-light
"
>Access Control</span>
          <Image src="/icons/arrow-up-right.svg" width={16} height={16} className="w-4 h-4" alt='' />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div>

        <ul className="mt-6 list-disc list-inside text-sm text-gray-700 space-y-2">
          <li className="
  text-[20px]
  leading-[121%]
  tracking-[0.61px]
  font-medium
">Visit portal.skoolnexus.com/signup</li>
          <li className="
  text-[20px]
  leading-[121%]
  tracking-[0.61px]
  font-medium
">
            Use your school’s official email domain (e.g., @yourschool.edu)
          </li>
        </ul>

        <p className="
  mt-8 text-[18px]
  leading-[121%]
  tracking-[0.61px]
  font-medium
">
          <span className="font-semibold">Pro Tip:</span>{" "}
          Enable Two-Factor Authentication for added security.
        </p>

        <p className="mt-6 text-[16px] font-semibold">Read Time: 3 min</p>
      </div>
    </div>
    </div>

    {/* ================= SECTION 2 ================= */}
    <div className='flex font-PlusJakarta flex-col gap-20'>
<h2 className=" text-[36px] leading-[44px]
  md:text-[50px] md:leading-[112%]
  tracking-[-0.9px]
  font-normal font-PlusJakarta">
          Importing & Organizing Data
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">

      {/* LEFT NAV */}
      <div className="space-y-4 text-sm">
        <h4 className="
  text-[24px]
  leading-[121%]
  tracking-[0.61px]
  font-medium
">Data Migration</h4>
      </div>

      {/* RIGHT CONTENT */}
      <div>

        <div className="mt-6 space-y-6 text-sm text-gray-700">

            <ul className="list-disc mt-2 flex flex-col gap-15 space-y-1">
          <li>

            <p className="
  text-[24px]
  leading-[121%]
  tracking-[0.61px]
  font-bold
">Option A: Bulk Import</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li className="
  text-[20px]
  leading-[121%]
  tracking-[0.61px]
">Download our CSV template (Settings &gt; Data Management).</li>
              <li className="
  text-[20px]
  leading-[121%]
  tracking-[0.61px]
">Map columns (e.g., “Student Name” → “Full_Name”).</li>
              <li className="
  text-[20px]
  leading-[121%]
  tracking-[0.61px]
">Validate data with our Error Checker before finalizing.</li>
            </ul>
          </li>

          <li>
            <p className="
  text-[24px]
  leading-[121%]
  tracking-[0.61px]
  font-bold
">Option B: Manual Entry</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li className="
  text-[20px]
  leading-[121%]
  tracking-[0.61px]
">Use Quick Add for small groups (&lt;50 students).</li>
              <li className="
  text-[20px]
  leading-[121%]
  tracking-[0.61px]
">Tag students by grade/class for easy filtering.</li>
            </ul>
          </li>
  </ul>
        </div>

        <p className="
  mt-6 text-[18px]
  leading-[121%]
  tracking-[0.61px]
">
          <span className="font-semibold">Pro Tip:</span>{" "}
          “Duplicate Entry” error? Use Merge Tool to resolve conflicts.
        </p>

        <p className="
  mt-6 text-[18px]
  leading-[121%]
  tracking-[0.61px]
">Read Time: 8 min</p>
      </div>
    </div>
    </div>

    {/* ================= SECTION 3 ================= */}
     <div className='flex font-PlusJakarta flex-col gap-20'>
       <h2 className=" text-[36px] leading-[44px]
  md:text-[50px] md:leading-[112%]
  tracking-[-0.9px]
  font-normal font-PlusJakarta">
          Automating Daily Operations
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">

      {/* LEFT NAV */}
      <div className="space-y-4 text-sm">
        <h4 className="
  text-[24px]
  leading-[121%]
  tracking-[0.61px]
  font-medium
">Attendance</h4>

        <div className="flex items-center  border-b border-gray-400  justify-between text-gray-600 cursor-pointer">
          <span className="
  text-[16px]
  leading-[121%]
  tracking-[0.61px]
  font-light
">Exams</span>
          <Image src="/icons/arrow-up-right.svg" width={16} height={16} className="w-4 h-4" alt='' />
        </div>

        <div className="flex items-center  border-b border-gray-400  justify-between text-gray-600 cursor-pointer">
          <span className="
  text-[16px]
  leading-[121%]
  tracking-[0.61px]
  font-light
">Finances</span>
          <Image src="/icons/arrow-up-right.svg" width={16} height={16} className="w-4 h-4" alt='' />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div>

        <ul className="mt-6 list-disc list-inside text-sm text-gray-700 space-y-2">
          <li className="
  text-[20px]
  leading-[121%]
  tracking-[0.61px]
  font-medium
">
            Link RFID/biometric devices (Modules &gt; Attendance &gt; Devices).
          </li>
          <li className="
  text-[20px]
  leading-[121%]
  tracking-[0.61px]
  font-medium
">
            Set auto-alerts for absentees (SMS/email to parents).
          </li>
        </ul>

        <p className="
  mt-8 text-[18px]
  leading-[121%]
  tracking-[0.61px]
">
          <span className="font-semibold">Pro Tip:</span>{" "}
          Enable Two-Factor Authentication for added security.
        </p>

        <p className="mt-6 text-[18px]
  leading-[121%]
  tracking-[0.61px]">Read Time: 5 min</p>
      </div>
    </div>
    </div>
  </div>
</section>

  )
}

export default Section4