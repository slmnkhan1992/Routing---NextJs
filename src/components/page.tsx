import React from 'react'
import logo from './../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return (
        <>
        <div className='bg-red-900 flex h-16 w-full sticky top-0 shadow-[0_4px_20px_rgba(0,0,0)] overflow-hidden'>
            <div className='h-4/4 w-1/4 bg-blue-500 p-3 '>
            <h1 className='text-4xl font-bold text-white animate-pulse'>Salman & Co.</h1>
            </div>
            <div className='bg-black text-blue-500 text-xl tracking-widest h-4/4 w-3/4 text-center'>
                <ul className='py-5 space-x-10'>
                    <li className='inline hover:text-white hover:border-b-2 hover:border-blue-500'><Link href="/">Home</Link></li>
                    <li className='inline hover:text-white hover:border-b-2 hover:border-blue-500'><Link href="./contact">Contact</Link></li>
                    <li className='inline hover:text-white hover:border-b-2 hover:border-blue-500'><Link href="/jobs">Jobs</Link></li>
                    <li className='inline hover:text-white hover:border-b-2 hover:border-blue-500'><Link href="./loading">Loading</Link></li>
                    <li className='inline hover:text-white hover:border-b-2 hover:border-blue-500'><Link href="./er">Error</Link></li>
                </ul>
            </div>
            </div>
        </>
    )
}

export default Nav