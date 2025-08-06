"use client"
import { useContext } from 'react'
import BlogButton from './BlogButton'
import Image from 'next/image'
import { SidebarContext } from '@/app/context/ContextProvider'
import parse from "html-react-parser";

export default function Card() {
const {post, setPost} = useContext(SidebarContext)




  return (
    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
        {
            post.map( (pos, idx) => 
            
                <div key={idx} className='shadow-sm rounded-xl p-3  self-stretch space-y-2 relative'>
                    <BlogButton pos = {pos}/>
                    <div >
                        <Image src={pos["image"]} alt='blog image' height={249} width={326} className='rounded-xl w-full'/>
                    </div>
                    <div className='flex justify-between text-sm text-[#93979A]'>
                        <h3>{pos["date"]}</h3>
                        <h3>{pos["time"]}</h3>
                    </div>
                    <h1 className='font-bold'>{pos["title"]} </h1>
                    <div>
                        {parse(pos["description"])}
                    </div>
                </div>
            )
        }
      
    </div>
  )
}
