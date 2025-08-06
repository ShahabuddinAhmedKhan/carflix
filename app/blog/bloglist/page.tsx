import Link from 'next/link'
import React from 'react'
import Card from './Card'

export default function page() {
  return (
    <div className='md:ml-[280px] p-5'>
        {/* upper portion */}
      <div className="flex items-center h-full justify-between mb-5">
          <h2 className="text-[20px] lg:text-2xl font-semibold text-headerColor">Blog List</h2>
          <div>
            <Link href={"/blog"} type="submit" className="bg-[#1141CB] text-white py-3 px-4 text-xs rounded-sm">
              Create Blog
            </Link>
          </div>
        </div>
        {/* cards */}
        <div >
            <Card/>
        </div>
    </div>
  )
}
