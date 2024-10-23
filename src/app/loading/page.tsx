
// const page = () => {
  //   return (
    //     <>
    //     <Nav />
    //     <br />
    //     <div>loading page</div>
    //     </>
    //   )
    // }
    
    // export default page
    
    
    "use client"; 
    
    import { useEffect, useState } from 'react';
    import React from 'react'
    import Nav from '@/components/page'

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const showcontent = false
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); 
    }, 3000); 
    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
    <Nav />
        {showContent ? (
    <div className="w-[100vw] h-[85vh] flex items-center justify-center bg-blue-100">
      <div className="p-6 lg:p-12 h-[80vh] md:w-[50vw] shadow-lg text-center content-center">
          <h2 className='text-3xl text-blue-500'>Hi, This is Muhammad Salman Khan </h2>
          <h2 className='text-2xl text-blue-500 my-8'>How can I help you </h2>

      </div>
    </div>
        ) : (
          <p className="text-xl font-semibold text-center mt-5">Loading....</p>
        )}
    </>
  );
}