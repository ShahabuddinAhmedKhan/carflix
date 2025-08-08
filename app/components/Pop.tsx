import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { notificationData } from '../data/NotificationData'
import Image from 'next/image'


export default function Pop() {
    const [open, setOpen] = useState(false)
    console.log(open);
    
    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <button  id='cross'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M10.5 5.25003C10.5 5.25003 7.92231 8.75 7 8.75C6.07763 8.75 3.5 5.25 3.5 5.25" stroke="#6C7278" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-[467px] mt-9 mr-11 p-0 ">
                    <div className='flex justify-between p-4'>
                        <h1 className='font-bold text-lg'>Notifications</h1>
                        <button className='cursor-pointer' onClick={() => setOpen(false)}>
                            <svg className='bg-[#1C222B]/4 rounded-full p-[6px]' xmlns="http://www.w3.org/2000/svg w-[20px]" width="30" height="30" viewBox="0 0 20 20" fill="none">
                                <path d="M16.2882 14.9615C16.4644 15.1376 16.5633 15.3765 16.5633 15.6256C16.5633 15.8746 16.4644 16.1135 16.2882 16.2896C16.1121 16.4657 15.8733 16.5647 15.6242 16.5647C15.3751 16.5647 15.1362 16.4657 14.9601 16.2896L9.99997 11.3279L5.03825 16.2881C4.86213 16.4642 4.62326 16.5631 4.37418 16.5631C4.12511 16.5631 3.88624 16.4642 3.71012 16.2881C3.534 16.1119 3.43506 15.8731 3.43506 15.624C3.43506 15.3749 3.534 15.136 3.71012 14.9599L8.67184 9.99977L3.71168 5.03805C3.53556 4.86193 3.43662 4.62306 3.43662 4.37399C3.43662 4.12492 3.53556 3.88605 3.71168 3.70993C3.8878 3.53381 4.12668 3.43486 4.37575 3.43486C4.62482 3.43486 4.86369 3.53381 5.03981 3.70993L9.99997 8.67165L14.9617 3.70915C15.1378 3.53303 15.3767 3.43408 15.6257 3.43408C15.8748 3.43408 16.1137 3.53303 16.2898 3.70915C16.4659 3.88527 16.5649 4.12414 16.5649 4.37321C16.5649 4.62228 16.4659 4.86115 16.2898 5.03727L11.3281 9.99977L16.2882 14.9615Z" fill="#455468" />
                            </svg>
                        </button>
                    </div>
                    <hr />
                    <div >
                        {
                            notificationData.map(data =>
                                <div key={data.id} className='flex gap-[14px]  mt-2 p-[16px]'>
                                    <Image src={data.avatarUrl} alt='notification dp' height={48} width={48} className='rounded-full' />
                                    <div className='flex justify-between w-full'>
                                        <div className=''>
                                            <h1 className='font-bold'>{data.userName}</h1>
                                            <p className='text-sm text-[#4A4C56]'>{data.content}</p>
                                        </div>
                                        <p className='text-[#777980] text-sm'>{data.timeAgo}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <hr />
                    <button className='flex justify-center p-[16px] gap-[8px] w-full cursor-pointer'>
                        <h1 className='text-[#1141CB] font-bold'>View All</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923C21.7991 11.3853 21.8721 11.4952 21.9231 11.6182C22.0241 11.8622 22.0241 12.1384 21.9231 12.3824C21.8721 12.5054 21.7991 12.6153 21.7061 12.7083Z" fill="#1141CB" />
                        </svg>
                    </button>

                </PopoverContent>
            </Popover>

        </div>
    )
}
