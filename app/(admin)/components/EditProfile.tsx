"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "../context/ContextProvider";
import Image from 'next/image'
import { Textarea } from "@/components/ui/textarea";
import upload from "../../public/Group.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EditProfile() {
    const { data, setData } = useContext(SidebarContext)

    const route = useRouter()

    const [previewUrl, setPreviewUrl] = useState(null);
    const [previewUrlt, setPreviewUrlt] = useState(null);

    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        defaultValues: {
            businessLocation: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            address: '',
            nid: '',
            about: '',
        },
    });

    useEffect(() => {
        if (data) {
            reset({
                businessLocation: data.businessLocation || '',
                email: data.email || '',
                phone: data.phone || '',
                dateOfBirth: data.dateOfBirth || '',
                address: data.address || '',
                nid: data.nid || '',
                about: data.about || '',
            })
        }
    }, [data, reset]) // Added reset to dependencies

    // {
    //     "businessLocation": "4319 Wakefield Street, Philadelphia, PA 19126",
    //     "dateOfBirth": "9th January, 1998",
    //     "email": "carflex@gmail.com",
    //     "address": "2825 Winding Way, Providence, RI 02908",
    //     "phone": "183454389",
    //     "nid": "183454389",
    //     "about": "We believe that keeping your car clean should be effortless, affordable, and eco‐conscious. Founded with a passion for quality service and convenience, we’ve redefined the traditional car wash experience by introducing a seamless, subscription‐based model that puts your time and comfort first. Our team of experienced technicians is trained to provide both instant and scheduled services, all tailored to fit your lifestyle. Using high‐quality products and modern techniques, we ensure a sparkling finish without harming your car or the environment.",
    //     "licences": {
    //         "frontPhotoUrl": "/licence1.png",
    //         "backPhotoUrl": "/licence2.png"
    //     }
    // }



    // ========================================

    // {
    //     "businessLocation": "4319 Wakefieldsdbvsb Street, Philadelpgweggehia, PA 19126",
    //     "email": "carflex@gwegwegembsbbail.com",
    //     "phone": "18gwegeg3454389",
    //     "dateOfBirth": "2025-08-13",
    //     "address": "2825 Winegbsbdbweggding Way, Providence, RI 02908",
    //     "nid": "1834543wbsdbbgweeg89",
    //     "about": "We believe that keeping your car clean should be effortless, affordable, and eco‐conscious. Founded with a passion for quality service and convenience, we’ve redefined the traditional car wash experience byfewgwg introducing a seamless, subscription‐based model that puts your time and comfort first. Our team of experienced technicians is trained to provide both instant and schsdbbdeduled services, all tailored to fit your lifestyle. Using high‐quality products and modern techniques, we ensure a sparkling finish without harming your car or the environment."
    //     previewUrl ='blogList.jpg' previewUrlt ='cover.png'
    // }

    const onSubmit = (data) => {
        const newData = {...data}
        newData.licences = {
            frontPhotoUrl: `/${previewUrl}`,
            backPhotoUrl: `/${previewUrlt}`,
          };
          
        console.log(newData);
        
        setData(newData);
        route.push("/dashboard/profile")
        
        
    }
    console.log(data);

    const handleOneFileChange = (event) => {
        // Log the event to check if it's firing
    
        const file = event.target.files ? event.target.files[0] : null;
      
        
        if (file) {
          // Set the file name in the state (no need for base64 or preview URL)
          setPreviewUrl(file.name); // Save the file name instead of base64
        }
      };
    const handleTwoFileChange = (event) => {
        // Log the event to check if it's firing
    
        const file = event.target.files ? event.target.files[0] : null;

        
        if (file) {
          // Set the file name in the state (no need for base64 or preview URL)
          setPreviewUrlt(file.name); // Save the file name instead of base64
        }
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='md:ml-[280px] pt-[20px] pl-[24px] pr-[36px]'>
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
                        <button type="submit" className="bg-[#1141CB] text-white py-1 px-2  md:py-3 md:px-4 text-xs rounded-sm cursor-pointer flex items-center gap-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='w-[clamp(8px,2vw,18px)]'>
                                <path d="M18.125 6.02564C18.1258 5.4123 17.8876 4.83564 17.4534 4.40231L15.5967 2.54572C15.1626 2.11238 14.5876 1.87319 13.9734 1.87403C13.3601 1.87486 12.7842 2.11481 12.3525 2.54897L2.0575 12.8915C1.94 13.009 1.875 13.1674 1.875 13.3324V17.499C1.875 17.844 2.155 18.124 2.5 18.124H6.66667C6.83167 18.124 6.99088 18.0582 7.10754 17.9423L17.45 7.64653C17.885 7.21486 18.1242 6.63897 18.125 6.02564ZM6.40828 16.8748H3.125V13.5916L10.6191 6.06317L13.9376 9.38064L6.40828 16.8748ZM16.5684 6.76152L14.8234 8.49898L11.5009 5.17735L13.2383 3.43154C13.435 3.23404 13.6967 3.12567 13.9758 3.12484H13.9766C14.255 3.12484 14.5167 3.23315 14.7142 3.42981L16.5708 5.2865C16.7675 5.484 16.8758 5.74566 16.8758 6.02482C16.875 6.30316 16.7659 6.56485 16.5684 6.76152ZM18.125 17.4998C18.125 17.8448 17.845 18.1248 17.5 18.1248H11.6667C11.3217 18.1248 11.0417 17.8448 11.0417 17.4998C11.0417 17.1548 11.3217 16.8748 11.6667 16.8748H17.5C17.845 16.8748 18.125 17.1548 18.125 17.4998Z" fill="white" />
                            </svg>
                            <p className='text-[clamp(8px,2vw,18px)]'>Save Changes</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* middle */}
            <div className="flex gap-[24px] mt-[12px]">
                <div className="flex-1 w-full">
                    <h1 className='text-[clamp(12px,1vw,18px)] font-semibold'>Contact Details</h1>
                    <div className="grid w-full  items-center gap-3 mt-[12px]">
                        <Label className=' text-[#62676C] text-[clamp(10px,1vw,14px)] font-semibold'>Business Location</Label>
                        <Input
                            type="text"
                            placeholder="Business Location"
                            className=' text-[clamp(12px,1vw,16px)]'
                            {...register("businessLocation")}
                        />
                    </div>
                    <div className="grid w-full  items-center gap-3 mt-[12px]">
                        <Label className=' text-[#62676C] text-[clamp(10px,1vw,14px)] font-semibold'>Email</Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            className=' text-[clamp(12px,1vw,16px)]'
                            {...register("email")}
                        />
                    </div>
                    <div className="grid w-full  items-center gap-3 mt-[12px]">
                        <Label className=' text-[#62676C] text-[clamp(10px,1vw,14px)] font-semibold'>Phone</Label>
                        <Input
                            type="tel"
                            placeholder="Phone"
                            className=' text-[clamp(12px,1vw,16px)]'
                            {...register("phone")}
                        />
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="grid w-full  items-center gap-3 ">
                        <h1 className='text-[clamp(12px,1vw,18px)] font-semibold'>Personal Informations</h1>
                        <Label className=' text-[#62676C] text-[clamp(10px,1vw,14px)] font-semibold'>Date of Birth</Label>
                        <Input
                            type="date"
                            placeholder="Date of Birth"
                            className=' text-[clamp(12px,1vw,16px)]'
                            {...register("dateOfBirth")}
                        />
                    </div>
                    <div className="grid w-full  items-center gap-3 mt-[12px]">
                        <Label className=' text-[#62676C] text-[clamp(10px,1vw,14px)] font-semibold'>Address</Label>
                        <Input
                            type="text"
                            placeholder="Address"
                            className=' text-[clamp(12px,1vw,16px)]'
                            {...register("address")}
                        />
                    </div>
                    <div className="grid w-full  items-center gap-3 mt-[12px]">
                        <Label className=' text-[#62676C] text-[clamp(10px,1vw,14px)] font-semibold'>NID</Label>
                        <Input
                            type="text"
                            placeholder="NID"
                            className=' text-[clamp(12px,1vw,16px)]'
                            {...register("nid")}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-[12px]">
                <h1 className='text-[clamp(12px,1vw,18px)] font-semibold'>About</h1>

                <Textarea
                    placeholder="About"
                    className="mt-[12px]"
                    {...register("about")} />
            </div>
            {/* licences */}
            <div className="mt-[12px] mb-[37px]">
                <h1 className='text-[clamp(12px,1vw,18px)] font-semibold'>Licences</h1>
                <div className="flex gap-[24px]">
                    <div className="bg-[#FAFBFC] border-1 border-dashed border-[#1141CB] p-4 mt-4 rounded-sm flex flex-col items-center justify-center flex-1 h-[263px] space-y-[12px]">
                        {/* Image Preview */}
                        {previewUrl ? (
                            <Image src={`/${previewUrl}`} alt="upload image" width={80} height={80} /> // Display the file name here instead of the image preview
                        ) : (
                            <Image src={upload} alt="upload image" priority />
                        )}

                        <div className="text-[#B4B4B4]">
                            <h1 className="text-sm">Upload Your Lenience front Photo</h1>
                        <p className="text-xs">Only support .jpg, .png and .svg and zip files</p>
                        </div>
                        {/* Hidden file input */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleOneFileChange} // This should be triggered correctly
                            className="hidden"
                            id="thumbnail-upload-one"
                        // Register file input to form
                        />

                        <button
                            type="button"
                            onClick={() => document.getElementById("thumbnail-upload-one")?.click()} // Trigger file input click
                            className="bg-[#1141CB] text-white py-3 px-4 text-xs rounded-sm"
                        >
                            Click To Upload
                        </button>
                    </div>
                    {/* second url */}
                    <div className="bg-[#FAFBFC] border-1 border-dashed p-4 mt-4 rounded-sm flex flex-col items-center justify-center flex-1 h-[263px] space-y-[12px] border-[#1141CB]">
                        {/* Image Preview */}
                        {previewUrlt ? (
                            <Image src={`/${previewUrlt}`} alt="upload image" width={80} height={80} /> // Display the file name here instead of the image preview
                        ) : (
                            <Image src={upload} alt="upload image" priority />
                        )}

                        <div className="text-[#B4B4B4]">
                            <h1 className="text-sm">Upload Your Lenience front Photo</h1>
                        <p className="text-xs">Only support .jpg, .png and .svg and zip files</p>
                        </div>
                        {/* Hidden file input */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleTwoFileChange} // This should be triggered correctly
                            className="hidden"
                            id="thumbnail-upload-two"
                        // Register file input to form
                        />

                        <button
                            type="button"
                            onClick={() => document.getElementById("thumbnail-upload-two")?.click()} // Trigger file input click
                            className="bg-[#1141CB] text-white py-3 px-4 text-xs rounded-sm"
                        >
                            Click To Upload
                        </button>
                    </div>
                    {/* second url */}
                  
                </div>


            </div>
        </form>
    )
}