"use client"
import { useEffect, useState } from 'react'
import BlogButton from './BlogButton'
import Image from 'next/image'
import parse from "html-react-parser";
import { UserService } from '@/service/user/user.service';
import { formatDateAndTime } from './FormatTime';

export default function Card() {
const [post, setPost] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
    const fetchCards = async () => {
        setLoading(true)
        try {
            const res =await UserService.findAll(null, `/admin/blog`)
            setLoading(false)
            if (res){
                setPost(res.data.data.blogs);
            }
            
            
        } catch (error) {
            setLoading(false)
            console.log("error:",error);
            
        }
    }
    fetchCards()

},[])

if (loading) {
    return <h1 className='h-screen flex justify-center items-center'>Loading</h1>
}

console.log(post[0]);





  return (
    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
        {
            post?.map( (pos, idx) => 
            
                <div key={idx} className='shadow-sm rounded-xl p-3  self-stretch space-y-2 relative'>
                    <BlogButton pos = {pos}/>
                    <div >
                        <Image src={`https://sxgame.ddns.net/${pos?.thumbnail_url}`} alt='blog image' height={249} width={326} className='rounded-xl w-full'/>
                    </div>
                    <div className='flex justify-between text-sm text-[#93979A]'>
                        {formatDateAndTime(pos?.created_at)}
                        
                    </div>
                    <h1 className='font-bold'>{pos.title} </h1>
                    <div dangerouslySetInnerHTML={{ __html: pos.content }}>
                    </div>
                </div>
            )
        }
      
    </div>
  )
}
