"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SidebarContext } from '../context/ContextProvider'

export default function Profile() {
    const context = useContext(SidebarContext)
    const data = context?.data

    return (
        // upper
        <div className='md:ml-[280px] pt-[20px] pl-[24px] pr-[36px]'>
            {/* top portion */}
            <div className='border-b-2'>
                <h1 className='text-2xl  font-semibold mb-[20px]'>Profile</h1>
                <div className='relative w-full h-[249px]  '>
                    <Image src={"/cover.png"} alt='cover' fill className='object-cover rounded-lg' />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-[31px] items-end relative -top-5 lg:-top-15'>
                        <div className='relative w-[clamp(70px,10vw,195px)] aspect-square  ml-[clamp(10px,5vw,78.5px)]'>
                            <Image src={"/dp.png"} alt='dp' fill className='object-cover rounded-full' />
                        </div>
                        <div>
                            <h1 className='font-semibold text-[clamp(10px,3vw,32px)]'>Ali Eyad</h1>
                            <p className='text-[clamp(8px,2vw,18px)] text-[#444950]'> Owner of Carflex Company</p>
                        </div>
                    </div>
                    <div >
                        <button className="bg-[#1141CB] text-white py-1 px-2  md:py-3 md:px-4 text-xs rounded-sm cursor-pointer flex items-center gap-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='w-[clamp(8px,2vw,18px)]'>
                                <path d="M18.125 6.02564C18.1258 5.4123 17.8876 4.83564 17.4534 4.40231L15.5967 2.54572C15.1626 2.11238 14.5876 1.87319 13.9734 1.87403C13.3601 1.87486 12.7842 2.11481 12.3525 2.54897L2.0575 12.8915C1.94 13.009 1.875 13.1674 1.875 13.3324V17.499C1.875 17.844 2.155 18.124 2.5 18.124H6.66667C6.83167 18.124 6.99088 18.0582 7.10754 17.9423L17.45 7.64653C17.885 7.21486 18.1242 6.63897 18.125 6.02564ZM6.40828 16.8748H3.125V13.5916L10.6191 6.06317L13.9376 9.38064L6.40828 16.8748ZM16.5684 6.76152L14.8234 8.49898L11.5009 5.17735L13.2383 3.43154C13.435 3.23404 13.6967 3.12567 13.9758 3.12484H13.9766C14.255 3.12484 14.5167 3.23315 14.7142 3.42981L16.5708 5.2865C16.7675 5.484 16.8758 5.74566 16.8758 6.02482C16.875 6.30316 16.7659 6.56485 16.5684 6.76152ZM18.125 17.4998C18.125 17.8448 17.845 18.1248 17.5 18.1248H11.6667C11.3217 18.1248 11.0417 17.8448 11.0417 17.4998C11.0417 17.1548 11.3217 16.8748 11.6667 16.8748H17.5C17.845 16.8748 18.125 17.1548 18.125 17.4998Z" fill="white" />
                            </svg>
                            <Link href={"/dashboard/profile/editProfile"} className='text-[clamp(8px,2vw,18px)]'>Edit Profile</Link>
                        </button>
                    </div>
                </div>

            </div>


            <div className='flex gap-[24px] mt-[32px]'>
                <div className='flex-1 '>
                    <h1 className='text-[clamp(12px,1vw,18px)] font-semibold'>About Us</h1>
                    <p className='text-[#62676C] text-[clamp(10px,1vw,16px)]'>{data?.about || 'we believe that keeping your car clean should be effortless, affordable, and eco-conscious. Founded with a passion for quality service and convenience, we\'ve redefined the traditional car wash experience by introducing a seamless, subscription-based model that puts your time and comfort first.'}</p>
                </div>
                <div className='flex-1'>
                    <h1 className='text-[clamp(12px,1vw,18px)] font-semibold'>Contact Details</h1>
                    <div className='text-[#62676C] text-[clamp(10px,1vw,16px)]'>
                        <div className='flex gap-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className='w-[clamp(8px,3vw,18px)]'>
                                <path d="M9.75 8.75C9.75 7.09314 8.40683 5.75 6.75 5.75C5.09314 5.75 3.75 7.09314 3.75 8.75C3.75 10.4068 5.09314 11.75 6.75 11.75C8.40683 11.75 9.75 10.4068 9.75 8.75Z" stroke="#1141CB" strokeWidth="1.125" strokeLinecap="square" />
                                <path d="M11.25 16.25C11.25 13.7647 9.23527 11.75 6.75 11.75C4.26472 11.75 2.25 13.7647 2.25 16.25" stroke="#1141CB" strokeWidth="1.125" strokeLinecap="square" />
                                <path d="M8.25 5.75C8.25 4.09314 9.59317 2.75 11.25 2.75C12.9068 2.75 14.25 4.09314 14.25 5.75C14.25 7.40686 12.9068 8.75 11.25 8.75M11.25 8.75C13.7353 8.75 15.75 10.7647 15.75 13.25M11.25 8.75C10.8521 8.75 10.4724 8.67252 10.125 8.5319" stroke="#1141CB" strokeWidth="1.125" strokeLinecap="square" />
                            </svg>
                            <p>Business Location: {data?.businessLocation || '4319 Wakefield Street, Philadelphia, PA 19126'}</p>
                        </div>
                        <div className='sm:flex gap-[13px]'>
                            <div className='flex gap-[4px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className='w-[clamp(8px,2vw,18px)]'>
                                    <path d="M12.7533 16.25C13.5815 16.25 14.2528 15.5784 14.2528 14.75C14.2528 13.9216 13.5815 13.25 12.7533 13.25C11.9252 13.25 11.2539 13.9216 11.2539 14.75C11.2539 15.5784 11.9252 16.25 12.7533 16.25Z" stroke="#1141CB" strokeWidth="1.125" />
                                    <path d="M5.25722 16.25C6.08532 16.25 6.75663 15.5784 6.75663 14.75C6.75663 13.9216 6.08532 13.25 5.25722 13.25C4.42912 13.25 3.75781 13.9216 3.75781 14.75C3.75781 15.5784 4.42912 16.25 5.25722 16.25Z" stroke="#1141CB" strokeWidth="1.125" />
                                    <path d="M9.00488 9.5L4.50664 2.75M4.50664 2.75L6.00606 10.25M4.50664 2.75H2.88039C2.73861 2.75 2.61903 2.87073 2.60146 3.0316L2.35143 5.32143C2.81718 5.32143 3.19473 5.75316 3.19473 6.28572C3.19473 6.81828 2.81718 7.25 2.35143 7.25C1.98426 7.25 1.62358 6.98167 1.50781 6.60715M14.2529 14.75C16.2645 14.75 16.502 14.054 16.502 12.1344C16.502 11.2156 16.502 10.7562 16.322 10.3683C16.134 9.96335 15.7953 9.71105 15.083 9.19482C14.3755 8.68212 13.8725 8.10575 13.3931 7.31179C12.7096 6.17947 12.3678 5.61331 11.8552 5.30666C11.3426 5 10.7381 5 9.5289 5H9.00488V10.25" stroke="#1141CB" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.75488 14.747C3.75488 14.747 2.88527 14.7547 2.61538 14.72C2.39047 14.63 2.11717 14.4189 1.94065 14.3015C1.40086 13.9426 1.50881 14.09 1.50881 13.766C1.50881 13.2595 1.50576 11.0047 1.50576 11.0047V10.2847C1.50576 10.2397 1.4595 10.2493 1.80564 10.2547H16.1101M6.75381 14.7515H11.252" stroke="#1141CB" strokeWidth="1.125" strokeLinecap="round" />
                                </svg>
                                <p>Email: {data?.email || 'carflex@gmail.com'}</p>
                            </div>
                            <div className='flex gap-[4px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className='w-[clamp(8px,2vw,18px)]'>
                                    <path d="M7.3359 2.82325L4.25385 4.92027C3.27293 5.58769 2.78246 5.9214 2.51623 6.42911C2.25 6.93681 2.25 7.53842 2.25 8.7416V13.9382C2.25 15.3816 2.25 16.1032 2.68934 16.5516C3.12868 17 3.83579 17 5.25 17H12.75C14.1642 17 14.8713 17 15.3106 16.5516C15.75 16.1032 15.75 15.3816 15.75 13.9382V8.7416C15.75 7.53842 15.75 6.93681 15.4838 6.42911C15.2175 5.9214 14.7271 5.58769 13.7461 4.92027L10.6641 2.82325C9.85747 2.27442 9.4542 2 9 2C8.5458 2 8.14253 2.27442 7.3359 2.82325Z" stroke="#1141CB" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.25 17V11.75C5.25 10.3358 5.25 9.6287 5.68934 9.18935C6.12868 8.75 6.83579 8.75 8.25 8.75H9.75C11.1642 8.75 11.8713 8.75 12.3106 9.18935C12.75 9.6287 12.75 10.3358 12.75 11.75V17" stroke="#1141CB" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.25 11H12.75" stroke="#1141CB" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.25 14H12.75" stroke="#1141CB" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.00675 5.75H9" stroke="#1141CB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>Phone: {data?.phone || '183454389'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                         {/* licences */}
             {data && data.licences && (
                 <div className="mt-[12px] mb-[37px]">
                     <h1 className='text-[clamp(12px,1vw,18px)] font-semibold'>Licences</h1>
                     <div className="lg:flex gap-[24px] mt-[12px]">
                         <div className='relative sm:w-[538px] sm:h-[339px] w-100 h-80'>
                             <Image 
                                 src={data.licences && data.licences.frontPhotoUrl || '/licence1.png'} 
                                 alt='front' 
                                 fill 
                                 className='object-contain'
                             />
                         </div>
                         <div className='relative sm:w-[538px] sm:h-[339px] w-100 h-80'>
                             <Image 
                                 src={data.licences && data.licences.backPhotoUrl || '/licence2.png'} 
                                 alt='back' 
                                 fill 
                                 className='object-contain'
                             />
                         </div>
                     </div>
                 </div>
             )}
        </div>
    )
}
