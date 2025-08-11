"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import DP from "../public/dp.png"
import { TfiAlignJustify } from "react-icons/tfi";

import Link from 'next/link';
import Pop from './(admin)/components/Pop';
import { SidebarContext } from './(admin)/context/ContextProvider';

export default function Navbar() {
    const { hidden, setHidden } = useContext(SidebarContext) as any
    const handleSidebar = () => {
        setHidden(!hidden)

    }
    return (
        <div className='flex justify-between items-center border-b-1 border-gray-200'>
            <div onClick={handleSidebar} className='ml-8'>
                <TfiAlignJustify />
            </div>
            <div className='flex gap-5 items-center justify-end py-4 pr-11 '>
                <div className='rounded-full p-3 shadow-2xl '>
                    <Pop />
                </div>
                <div className='flex gap-2 items-center p-3 shadow-2xs rounded-2xl '>
                    <Link href={"/dashboard/profile"} className='flex gap-4 items-center'>
                        <Image src={DP} alt='profile picture' height={32} width={32} className='rounded-lg' />


                        <h1>Ali Eyad</h1>
                        <button  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M10.5 5.25003C10.5 5.25003 7.92231 8.75 7 8.75C6.07763 8.75 3.5 5.25 3.5 5.25" stroke="#6C7278" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>


                </div>

            </div>
        </div>
    )
}
