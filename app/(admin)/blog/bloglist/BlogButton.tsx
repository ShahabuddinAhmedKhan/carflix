"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from 'next/link';
import { SidebarContext } from '../../context/ContextProvider';
import { UserService } from '@/service/user/user.service';






export default function BlogButton({ pos }) {
    const { id, date, time, title, description, image } = pos;
    const { post, setPost } = useContext(SidebarContext)





    const [hidden, setHidden] = useState(false)
    const handleHidden = () => {
        console.log("clicked");
        
        setHidden(!hidden)
    }

    const handleDelete = async (id) => {
        

        try {
            const postDelete = await UserService.delete(`/admin/blog/${id}`)
            console.log(postDelete);
            const newPost = post?.filter(onePost => onePost.id != id)
            setPost(newPost);


        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div className="relative">
            <div>
                <button onClick={handleHidden} className='absolute  w-full flex justify-end pr-5 pt-5 text-white lg:text-2xl z-50 cursor-pointer'>
                    <BsThreeDotsVertical />
                </button>
                <div className={`absolute ${hidden ? "flex" : "hidden"} w-full justify-end pr-8 pt-11 z-40`}>
                    <div className={` bg-white  border-2 flex-col  max-w-[98px] rounded-lg flex}`}>
                        <div className=' flex gap-1 items-center p-2'>
                            <Image src={"/edit.png"} alt='edit button' width={16} height={16} />
                            <Link href={`/blog/bloglist/${id}`} className='text-sm'>Edit</Link>
                        </div>
                        <hr />
                        <div className=' flex gap-1 items-center p-2'>
                            <Image src={"/trash.png"} alt='edit button' width={16} height={16} />
                            <button onClick={() => handleDelete(id)} className='text-sm cursor-pointer'>Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
