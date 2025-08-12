"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import Link from 'next/link';
import { UserService } from '@/service/user/user.service';
import { StringHelper } from '@/helper/string.helper';

export default function CardService() {
    const [services, setServices] = useState([])
    const car_wash_data = {
        "imageUrl": "/blogList.jpg",
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
    const slug = car_wash_data.title.toLowerCase().replace(/\s+/g, '-'); //"/\s+/g" regex expression "\s+" one or more special charecter, "g" applies globally

    useEffect(() => {
        const services = async () => {
            const res = await UserService.findAll(`/admin/services`)
            setServices(res.data.data);
            console.log(res.data.data);
            

        }
        services()
    },[])

    
    return (
        <div className='no-underline text-black'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
                {
                    services.map(service =>
                        <Link key={service.id} href={`/services/${slug}`} className='shadow-sm rounded-xl p-3  self-stretch space-y-2 relative'>
                            <div >
                                <Image src={service.imageUrl? service.imageUrl:car_wash_data.imageUrl} alt='blog image' height={249} width={326} className='rounded-xl w-full' />
                            </div>
                            <h1 className='font-bold'>{service.name} </h1>
                            <div className=' text-sm text-[#93979A] '>
                                <h3 className='h-15'>{StringHelper.textShorten(service.description)}</h3>
                                <div className='flex gap-1 mt-2 items-center'>
                                    <IoLocationOutline />
                                    <h3>{service.location} </h3>
                                </div>

                            </div>

                            <div className=' text-sm text-[#93979A] flex items-center gap-1'>
                                <CiTimer />
                                <p>{service.available_time
}</p>
                            </div>
                        </Link>
                    )
                }

            </div>

        </div>
    )
}
