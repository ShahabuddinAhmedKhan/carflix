"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from 'next/link';
import { SidebarContext } from '../../context/ContextProvider';






export default function BlogButton({pos}) {
    const { id, date, time, title, description, image } = pos;
    const {post, setPost} = useContext(SidebarContext)

 
    
    
    
    const [hidden, setHidden] = useState(false)
    const handleHidden = () => {
        setHidden(!hidden)
    }

    const handleDelete = () => {
        const newPost = post?.filter(onePost => onePost.id != id)
        setPost(newPost);
        
    }



    return (
        <div>
            <div>
                <button onClick={handleHidden} className='absolute  w-full flex justify-end pr-8 pt-3 text-white lg:text-2xl z-3 cursor-pointer'>
                    <BsThreeDotsVertical />
                </button>
                <div className={`absolute ${hidden? "flex":"hidden" } w-full justify-end pr-12 pt-8`}>
                    <div className={` bg-white  border-2 flex-col  max-w-[98px] rounded-lg flex}`}>
                        <div className=' flex gap-1 items-center p-2'>
                            <Image src={"/edit.png"} alt='edit button' width={16} height={16} />
                            <Link href={`/blog/bloglist/${id}`} className='text-sm'>Edit</Link>
                        </div>
                        <hr />
                        <div className=' flex gap-1 items-center p-2'>
                            <Image src={"/trash.png"} alt='edit button' width={16} height={16} />
                            <button onClick={handleDelete} className='text-sm cursor-pointer'>Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
