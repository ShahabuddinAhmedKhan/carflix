import Link from 'next/link'
import React from 'react'
import Card from '../blog/bloglist/Card'
import CardService from './CardService'
import { Modal } from './Modal'

export default function page() {
  return (
    <div className='md:ml-[280px] p-5'>
        {/* upper portion */}
      <div className="flex items-center h-full justify-between mb-5">
          <h2 className="text-[20px] lg:text-2xl font-semibold text-headerColor">Services</h2>
          <div>
            <Modal/>

          </div>
        </div>
        {/* cards */}
        <div >
            <CardService/>
        </div>
    </div>
  )
}
