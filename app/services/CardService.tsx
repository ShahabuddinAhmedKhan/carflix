import React from 'react'
import BlogButton from '../blog/bloglist/BlogButton'
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";

export default function CardService() {
    const car_wash_data = {
        "imageUrl" : "/blogList.jpg",
        "title": "car wash",
        "description": "good service",
        "location": {
            "city": "Dhaka",
            "area": "Uttara"
        },
        "time": {
            "start": "14:00",
            "end": "15:00"
        }
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
                <div className='shadow-sm rounded-xl p-3  self-stretch space-y-2 relative'>
                    <div >
                        <Image src={car_wash_data.imageUrl} alt='blog image' height={249} width={326} className='rounded-xl w-full' />
                    </div>
                    <h1 className='font-bold'>{car_wash_data["title"]} </h1>
                    <div className=' text-sm text-[#93979A]'>
                        <h3>{car_wash_data["description"]}</h3>
                        <div className='flex gap-1 mt-2'>
                        <IoLocationOutline />
                        <h3>{car_wash_data.location.city} , {car_wash_data.location.city}</h3>
                        </div>
                        
                    </div>
                    
                    <div className=' text-sm text-[#93979A] flex gap-1'>
                    <CiTimer />
                        <p>{`${car_wash_data.time.start} PM  ${car_wash_data.time.end} PM`}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
