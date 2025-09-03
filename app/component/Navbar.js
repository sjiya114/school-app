"use client"
import { useState } from 'react';
import Link from 'next/link'
function Navbar() {
  const [hidden,setHidden]=useState(true);
  return (
    <>
      <div className='text-white bg-black  flex flex-row shadow-2xl shadow-zinc-600  max-w-screen-xl px-4 py-2 mt-6 mx-auto border-t-1  border-gray-400 rounded-4xl justify-between items-center  '   >
      <div className='flex flex-row font-bold font-stretch-extra-expanded  py-4  space-x-10'  >
      <Link href="/">Home</Link>
      <Link href="/AddSchool" >AddSchool</Link>
      <Link href="/ShowSchools" >AllSchools</Link>
      </div>
      </div>
    </>
    
  )
}
export default Navbar