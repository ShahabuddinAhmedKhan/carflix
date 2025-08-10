import { serviceDetail } from '@/app/data/serviceDetail';
import Image from 'next/image';
import React from 'react';
import { DynamicBreadcrumb } from './DynamicBreadcrumb';
import Rate from './Rating';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiCarWashingFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export default function page() {
  const {
    image,
    serviceName,
    providerName,
    rating,
    location,
    availableTime,
    aboutProvider,
    teamSize,
    mobileAvailable,
    garageAvailable,
    carWashServices
  } = serviceDetail;

  return (
    <div className="md:ml-[280px] p-5">
      <div className="border-1 border-gray-200 rounded-md p-4 mt-5">
        <div className="mb-4">
          <DynamicBreadcrumb />
        </div>
        
        {/* Image Section */}
        <Image
          src={image ? image : "/p.jpg"}
          alt="image"
          height={900}
          width={900}
          className="w-screen object-cover h-[315px] border-2"
          priority
        />

        {/* Service Details Section */}
        <div className="mt-5 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{serviceName}</h2>
            <p className="text-lg text-gray-500">{providerName}</p>
            <div className="flex items-start mt-2 justify-between">
              <div className="flex items-center gap-2 text-lg">
                <Rate rating={rating} />
                <p>{rating}.0</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              {/* Car Wash Icon */}
              <div className="flex items-center gap-2 text-[#1141CB]">
                <RiCarWashingFill />
                <p className="text-gray-500">{providerName}</p>
              </div>

              {/* Location Icon */}
              <div className="flex items-center gap-2 text-[#1141CB]">
                <FaMapMarkerAlt />
                <p className="text-gray-500">{location}</p>
              </div>

              <div className="flex items-center gap-2 text-[#1141CB]">
                <IoMdTime  />
                <p className="text-sm text-gray-500">{availableTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* About The Provider Section */}
        <div>
          <h1 className="font-semibold mt-8">About The Provider</h1>
          <p className="mt-1 text-gray-500">{aboutProvider}</p>
        </div>

        {/* Availability and Team Info */}
        <div className="mt-4 text-gray-500 flex gap-3">
          <div className='flex gap-2 items-center'>
            <RiTeamFill className='text-[#1141CB]'/>
            <p className="font-medium">Team Size: {teamSize}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <RiTeamFill className='text-[#1141CB]'/>
            <p className="font-medium">Mobile Available: {mobileAvailable ? 'Yes' : 'No'}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <RiTeamFill className='text-[#1141CB]'/>
            <p className="font-medium">Garage Available:{garageAvailable ? 'Yes' : 'No'}</p>
          </div>
          
         
        </div>

        {/* Car Wash Services Section */}
        <div className="mt-6">
          {carWashServices.map((service, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{service.serviceType}</h3>
              <ul className="mt-2">
                {service.vehicles.map((vehicle, idx) => (
                  <li key={idx} className="flex justify-between">
                    <div className='flex gap-1 items-center'>
                      <FaCarSide className='text-[#1141CB]'/>
                      <p>{vehicle.vehicleType}</p>
                    </div>
                    <span>{vehicle.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
