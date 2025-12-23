import Image from 'next/image'
import React from 'react'

const Featureon = () => {
  return (
    <div className='min-h-screen w-full px-5'>
<div className='flex max-w-6xl max-md:flex-col min-h-80 mx-auto gap-5 max-md:gap-0 py-20 border-black max-md:py-8 border-b-2'>
 <div className='w-[50%] flex max-md:w-full flex-col justify-between'>
    <h2 className='text-5xl max-lg:text-4xl font-bold'>Seamless Journeys,
From Admission to Alumni.</h2>
<div className='max-lg:text-[12px] max-lg:py-5'>
    <p>Automated enrollment with digital forms & document tracking</p>
    <p>360° student profiles: academics, attendance, and activities</p>
    <p>Keep graduates engaged with event tracking and networking</p>
</div>
 </div>
  <Image src={"/features/step1.svg"} className='w-[50%] max-md:w-full' width={900} height={900} alt='image' />
</div>
<div className='flex max-w-6xl max-md:flex-col min-h-80 mx-auto gap-5 max-md:gap-0 py-20 border-black max-md:py-8 border-b-2'>
 <div className='w-[50%] flex max-md:w-full flex-col justify-between'>
    <h2 className='text-5xl max-lg:text-4xl font-bold'>Where Curriculum Meets Innovation.</h2>
<div className='max-lg:text-[12px] max-lg:py-5'>
    <p>AI-powered lesson planning and standards-aligned grading</p>
    <p>Digital assignments with auto-reminders and plagiarism checks</p>
    <p>From scheduling to analytics: stress-free exam cycles</p>
</div>
 </div>
  <Image src={"/features/step2.svg"} className='w-[50%] max-md:w-full' width={900} height={900} alt='image' />
</div>
<div className='flex max-w-6xl max-md:flex-col min-h-80 mx-auto gap-5 max-md:gap-0  py-20 border-black max-md:py-8 border-b-2'>
 <div className='w-[50%] flex max-md:w-full flex-col justify-between'>
    <h2 className='text-5xl max-lg:text-4xl font-bold'>People First,<br /> Paperwork Last.</h2>
<div className='max-lg:text-[12px] max-lg:py-5'>
    <p>Staff records, leave approvals, and contract tracking</p>
    <p>Generate and verify digital certificates in seconds</p>
    <p>Keep graduates engaged with event tracking and networking</p>
</div>
 </div>
  <Image src={"/features/step3.svg"} className='w-[50%] max-md:w-full' width={900} height={900} alt='image' />
</div>
<div className='flex max-w-6xl max-md:flex-col min-h-80 mx-auto gap-5 max-md:gap-0  py-20 border-black max-md:py-8 border-b-2'>
 <div className='w-[50%] flex max-md:w-full flex-col justify-between'>
    <h2 className='text-5xl max-lg:text-4xl font-bold'>Numbers That Work For You.</h2>
<div className='max-lg:text-[12px] max-lg:py-5'>
    <p>Barcode-tracked assets from lab equipment to textbooks</p>
    <p>Payroll, expenses, and tax compliance in one place</p>
    <p>Fee collection with UPI, cards, and auto-receipts</p>
</div>
 </div>
  <Image src={"/features/step4.svg"} className='w-[50%] max-md:w-full' width={900} height={900} alt='image' />
</div>
    </div>
  )
}
 
export default Featureon