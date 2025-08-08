"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import DP from "../public/dp.png"
import { TfiAlignJustify } from "react-icons/tfi";
import { SidebarContext } from './context/ContextProvider';

import Pop from './components/Pop';
import Link from 'next/link';

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.2969 4.28906V2.84766H12V3.5625H12.6961L12 3.55313V4.25625H12.0258L11.2969 4.28906Z" fill="black" />
                        <path d="M18.3516 18.1195H5.64844C4.51172 18.1195 3.58594 17.1937 3.58594 16.057C3.58594 15.6844 3.68672 15.3164 3.87891 14.9953L5.0625 13.0219V9.35859C5.0625 8.47734 5.26172 7.61719 5.65547 6.79922C6.02344 6.03281 6.54609 5.34141 7.20703 4.74141C8.51953 3.55078 10.2562 2.85938 11.9742 2.84766H12.0281C13.7484 2.85703 15.4922 3.54609 16.8094 4.74141C17.4703 5.34141 17.9953 6.03281 18.3656 6.79922C18.7617 7.61719 18.9609 8.47734 18.9609 9.35859V13.0242L20.1281 15.0023C20.3156 15.3187 20.4141 15.682 20.4141 16.05V16.0547C20.4141 17.1938 19.4883 18.1195 18.3516 18.1195ZM12.007 4.25625H11.9953C9.05156 4.27031 6.46875 6.65625 6.46875 9.35859V13.4109L5.08594 15.7172C5.025 15.8203 4.99219 15.9352 4.99219 16.0547C4.99219 16.418 5.2875 16.7109 5.64844 16.7109H18.3516C18.7148 16.7109 19.0078 16.4156 19.0078 16.0547V16.05C19.0078 15.9328 18.9773 15.818 18.9164 15.7172L17.5547 13.4086V9.35859C17.5547 6.65625 14.9672 4.27031 12.0187 4.25391L12.007 4.25625Z" fill="black" />
                        <path d="M12.7027 4.28906L11.9738 4.25391H11.9996V3.5625H11.3035L11.9996 3.55078V2.85938H12.7027V4.28906ZM11.9598 21.1523C10.8184 21.1523 9.72852 20.4961 9.1168 19.4367L10.3332 18.7336C10.6895 19.35 11.327 19.7461 11.9574 19.7461C12.7098 19.7461 13.3402 19.3828 13.6402 18.7734L14.9012 19.3969C14.634 19.9383 14.2168 20.3859 13.6941 20.693C13.1832 20.993 12.5832 21.1523 11.9598 21.1523ZM9.70273 8.28516L8.46289 7.61953C8.77227 7.04297 9.24805 6.55078 9.83633 6.19687C10.427 5.84297 11.0902 5.65078 11.7559 5.64609H11.8168L11.7465 7.05H11.8027H11.7699C10.9262 7.05937 10.0941 7.55391 9.70273 8.28516Z" fill="black" />
                    </svg>
                </div>
                <div className='flex gap-2 items-center p-3 shadow-2xs rounded-2xl '>
                    <Link href={"/dashboard/profile"} className='flex gap-4 items-center'>
                        <Image src={DP} alt='profile picture' height={32} width={32} className='rounded-lg' />


                        <h1>Ali Eyad</h1>
                    </Link>
                    <Pop />

                </div>

            </div>
        </div>
    )
}
