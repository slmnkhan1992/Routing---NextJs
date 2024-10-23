import React from 'react'
import Link from 'next/link'
import Nav from '@/components/page'

const Contact = () => {
  return (
    <>
   <Nav />
    <br />
    <div className="w-[100vw] h-[85vh] flex items-center justify-center">
      <div className="p-6 lg:p-12 h-[70vh] md:w-[50vw] text-xl shadow-lg space-y-2 font-semibold">
          <p><span className='text-blue-700'>Name:</span> Muhammad Salman Khan</p>
          <p><span className='text-blue-700'>Roll No:</span> 00169287</p>
          <p><span className='text-blue-700'>Campus:</span> Main</p>
          <p><span className='text-blue-700'>Days/Time:</span> Wednesday - 07:00 PM - 10:00 PM</p>
          <p><span className='text-blue-700'>Center:</span> Governer House Karachi</p>
          <p><span className='text-blue-700'>Email:</span> m.shariqkhan68@gmail.com</p>
          <p><span className='text-blue-700'>Contact No:</span> 03158236086</p>
      </div>
    </div>
    </>
  )
}

export default Contact