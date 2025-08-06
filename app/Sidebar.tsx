"use client"
import React, { useContext } from 'react'
import logo from "../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarContext } from './context/ContextProvider'
import { ImCross } from "react-icons/im";


export default function Sidebar() {
  const path = usePathname()
  const {hidden, setHidden} = useContext(SidebarContext) as any

  const handleHidden = () => {
    setHidden(false)
  }
  

  const isActive = (href) => {
    if (href === "/") {
      return path === "/"
    }
    return path.startsWith(href)
  }
  const linkClasses = (href) => `flex px-[24px] py-[16px] text-[14px]  gap-[6px]  mx-4 rounded-lg ${isActive(href) ? "bg-[#1141CB1A] text-[#1141CB]" : ""}`
  return (
    <div className={`absolute top-0 transition-left duration-100 ease-in-out  ${hidden? "left-0" : "-left-300"} md:left-0   z-14 flex w-screen md:w-[280px]`}>
      <div className='w-[280px]  bg-[#FAFBFC]  justify-between h-screen border-1 border-gray-200   md:flex md:flex-col flex-1/2'>
        <div className=''>
          <div className={`relative  flex ${hidden? "justify-between px-5": "justify-center"}  pt-[21px] pb-[17px]`}>
            <Image src={logo} alt="logo" width={138} height={29} priority className="object-contain" />
            <ImCross onClick={handleHidden} className={"md:hidden block"}/>

          </div>

          <div className='flex flex-col'>
            <Link href={"/dashboard"} className={linkClasses("/dashboard")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.84961 13.7412H12.1382" stroke="#1141CB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.98816 4.22874C10.2137 4.2293 10.434 4.29685 10.6211 4.42282L15.2068 7.48184C15.3843 7.60333 15.529 7.76686 15.6279 7.95784C15.7268 8.14883 15.7769 8.36133 15.7738 8.57639L15.7678 14.4849C15.7671 15.1939 15.2288 15.7708 14.5678 15.7708H5.42578C5.27328 15.7701 5.12244 15.7391 4.98199 15.6797C4.84155 15.6202 4.71428 15.5335 4.60758 15.4246C4.48476 15.3006 4.38778 15.1534 4.32224 14.9916C4.2567 14.8299 4.22391 14.6567 4.22578 14.4821L4.23178 8.57114C4.22917 8.35709 4.27928 8.14569 4.37771 7.95559C4.47614 7.76549 4.61985 7.60255 4.79615 7.48114L9.3524 4.42452C9.54009 4.29743 9.76149 4.22928 9.98816 4.22874ZM9.98803 2.92871C9.50344 2.92919 9.02999 3.07411 8.62815 3.34495L4.07187 6.40158C3.71898 6.64218 3.43051 6.96568 3.23174 7.34371C3.03296 7.72174 2.92997 8.14277 2.93178 8.56987L2.92578 14.4809C2.92434 15.9108 4.04406 17.0708 5.42578 17.0708H14.5678C15.9475 17.0708 17.0663 15.9141 17.0678 14.4863L17.0738 8.57775C17.0765 8.14863 16.9734 7.72547 16.7736 7.3457C16.5738 6.96592 16.2834 6.64126 15.9283 6.40043L11.3425 3.34143C10.9418 3.07282 10.4704 2.92916 9.98803 2.92871Z" fill="#1141CB" />
              </svg>

              <span  >Dashboard</span>
            </Link>
            <Link href={"/manage"} className={linkClasses("/manage")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.3337 1.66699V5.00033M6.66699 1.66699V5.00033" stroke="#1141CB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.8333 3.3335H9.16667C6.02397 3.3335 4.45262 3.3335 3.47631 4.3098C2.5 5.28612 2.5 6.85746 2.5 10.0002V11.6668C2.5 14.8095 2.5 16.3809 3.47631 17.3572C4.45262 18.3335 6.02397 18.3335 9.16667 18.3335H10.8333C13.976 18.3335 15.5474 18.3335 16.5237 17.3572C17.5 16.3809 17.5 14.8095 17.5 11.6668V10.0002C17.5 6.85746 17.5 5.28612 16.5237 4.3098C15.5474 3.3335 13.976 3.3335 10.8333 3.3335Z" stroke="#1141CB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 8.3335H17.5" stroke="#1141CB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 13.75C7.5 13.75 8.75 14.1667 9.16667 15.4167C9.16667 15.4167 10.9804 12.0833 13.3333 11.25" stroke="#1141CB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span  >Manage Bookings</span>
            </Link>
            <Link href={"/schedule"} className={linkClasses("/schedule")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_7495_4591)">
                  <path d="M10 6.6665V9.99984L11.25 11.2498" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.2875 13.7111C17.6512 14.4475 18.333 14.8157 18.333 15.4166C18.333 16.0176 17.6512 16.3858 16.2875 17.1221L15.3589 17.6236C14.3117 18.1891 13.7881 18.4719 13.5363 18.2663C12.9197 17.7628 13.8803 16.4634 14.1166 16.0031C14.3561 15.5366 14.3518 15.2882 14.1166 14.8302C13.8803 14.3699 12.9197 13.0705 13.5363 12.567C13.7881 12.3614 14.3117 12.6441 15.3589 13.2096L16.2875 13.7111Z" stroke="#434343" strokeWidth="1.5" />
                  <path d="M10.8554 18.2903C10.5743 18.319 10.289 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003C18.3337 10.5711 18.2762 11.1285 18.167 11.667" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_7495_4591">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span  >Schedule Calendar</span>
            </Link>
            <Link href={"/blog"} className={linkClasses("/blog")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.90625 12.6277H6.25C6.68148 12.6277 7.03125 12.2779 7.03125 11.8464C7.03125 11.4149 6.68148 11.0652 6.25 11.0652H3.90625C3.47477 11.0652 3.125 11.4149 3.125 11.8464C3.125 12.2779 3.47477 12.6277 3.90625 12.6277ZM3.90625 9.50266H6.25C6.68148 9.50266 7.03125 9.15289 7.03125 8.72141C7.03125 8.28992 6.68148 7.94016 6.25 7.94016H3.90625C3.47477 7.94016 3.125 8.28992 3.125 8.72141C3.125 9.15289 3.47477 9.50266 3.90625 9.50266ZM8.49379 11.8464C8.49379 12.2779 8.84355 12.6277 9.27504 12.6277C10.9087 12.6277 12.4445 11.9915 13.5997 10.8363L19.313 5.1225C20.2289 4.2066 20.2291 2.72398 19.313 1.80793C18.3992 0.894102 16.9123 0.894102 15.9984 1.80793L10.2851 7.52176C9.13 8.67695 8.49379 10.2128 8.49379 11.8464ZM17.1033 2.91281C17.4079 2.6082 17.9036 2.6082 18.2081 2.91281C18.5134 3.21805 18.5136 3.7123 18.2081 4.01766L12.4948 9.73148C11.8417 10.3846 11.0251 10.8149 10.1373 10.9841C10.3066 10.0964 10.7369 9.27977 11.3899 8.62664L17.1033 2.91281Z" fill="#444950" />
                <path d="M2.34375 18.8774C2.92016 18.8778 3.47642 18.6654 3.90594 18.281L4.9859 17.3149H12.9688C15.1227 17.3149 16.875 15.5626 16.875 13.4087V11.6562C16.875 11.2247 16.5252 10.875 16.0938 10.875C15.6623 10.875 15.3125 11.2247 15.3125 11.6562V13.4087C15.3125 14.701 14.2611 15.7524 12.9688 15.7524H4.6875C4.49532 15.7524 4.30988 15.8233 4.16664 15.9514L2.86438 17.1163C2.72121 17.2443 2.53583 17.3151 2.34375 17.3149C1.91297 17.3149 1.5625 16.9645 1.5625 16.5337V7.15869C1.5625 5.86635 2.61391 4.81494 3.90625 4.81494H10.4589C10.8904 4.81494 11.2402 4.46518 11.2402 4.03369C11.2402 3.60221 10.8904 3.25244 10.4589 3.25244H3.90625C1.7523 3.25244 0 5.00479 0 7.15869V16.5337C0 17.826 1.05141 18.8774 2.34375 18.8774Z" fill="#444950" />
              </svg>
              <span >Blog</span>
            </Link>

          </div>
        </div>
        <div className='flex px-[24px] py-[16px] text-[14px] gap-[6px] hover:bg-[#1141CB1A] hover:text-[#1141CB] mx-4 rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.07867 2.12735C9.2845 2.53899 9.11767 3.03955 8.706 3.24538L4.62733 5.28472C4.345 5.42588 4.16667 5.71443 4.16667 6.03008V13.97C4.16667 14.2856 4.345 14.5742 4.62733 14.7153L8.706 16.7547C9.11767 16.9605 9.2845 17.4611 9.07867 17.8727C8.87283 18.2843 8.37233 18.4512 7.96066 18.2453L3.88197 16.206C3.03501 15.7826 2.5 14.9169 2.5 13.97V6.03008C2.5 5.08315 3.03501 4.21749 3.88197 3.79401L7.96066 1.75466C8.37233 1.54884 8.87283 1.7157 9.07867 2.12735Z" fill="#121212" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.2644 7.14695C14.5758 7.01797 14.9342 7.08926 15.1726 7.3276L17.2559 9.41091C17.5813 9.73633 17.5813 10.264 17.2559 10.5894L15.1726 12.6727C14.9342 12.9111 14.5758 12.9824 14.2644 12.8534C13.953 12.7244 13.75 12.4206 13.75 12.0835V10.8335H8.33333C7.8731 10.8335 7.5 10.4604 7.5 10.0002C7.5 9.53991 7.8731 9.16683 8.33333 9.16683H13.75V7.91685C13.75 7.5798 13.953 7.27594 14.2644 7.14695Z" fill="#121212" />
          </svg>
          <h1>Log out</h1>

        </div>
      </div>
      <div onClick={handleHidden} className=' w-full bg-black opacity-30 flex-1 md:hidden'>


      </div>
    </div>
  )
}
