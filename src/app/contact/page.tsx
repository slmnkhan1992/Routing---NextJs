import React from 'react'
import Link from 'next/link'
import Nav from '@/components/page'

const Contact = () => {
  return (
    <>
   <Nav />
    <br />
    <div className="w-[100vw] h-[85vh] flex items-center justify-center bg-blue-100">
      <div className="p-6 lg:p-12 h-[70vh] md:w-[50vw] text-xl shadow-lg space-y-2 font-semibold">
          <p><span className='text-blue-500'>Name:</span> Muhammad Salman Khan</p>
          <p><span className='text-blue-500'>Roll No:</span> 00169694</p>
          <p><span className='text-blue-500'>Days/Time:</span> Wednesday - 07:00 PM - 10:00 PM</p>
          <p><span className='text-blue-500'>Center:</span> Governer House Karachi</p>
          <p><span className='text-blue-500'>Email:</span> slmnkhan2050@gmail.com</p>
          <p><span className='text-blue-500'>Contact No:</span> 03132556275</p>
      </div>
    </div>
    </>
  )
}

export default Contact