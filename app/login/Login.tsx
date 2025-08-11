"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from 'react-hook-form'
import { UserService } from '@/service/user/user.service'
import { redirect, useRouter } from 'next/navigation'
import { CookieHelper } from '@/helper/cookie.helper'

const Login = () => {
  const {handleSubmit, register} = useForm()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const onSubmit = async (data) => {
    setLoading(true)
   
    
    const formData = data
    try {
      const res = await UserService.login(formData)
      
   
      if (res?.data?.success == true){
        const token = res.data.authorization.token
        setLoading(false)
        CookieHelper.set({key:"token", value: token})
        
        router.push("/dashboard")
      }
      
    } catch (error) {
      setLoading(false)
      console.log(error.message);
      
      
    }
    
  }
  return (
    <div>

      <div className=' flex flex-col justify-center items-center h-screen '>
        <div className='border-1  px-6 py-8 rounded-lg'>
          <h1 className='text-4xl font-extrabold mb-8 text-center'>Login!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='w-90 '>
            <div className='flex flex-col'>
              <label htmlFor="username" className='font-semibold text-sm mb-1'>Username</label>
              <input type="text" placeholder='Username' className='border-gray-200 border-1 w-full rounded-lg py-2 px-4' {...register("email")}/>
            </div>
            <div className='flex flex-col mt-3'>
              <label htmlFor="password" className='font-semibold text-sm mb-1'>Password</label>
              <input type="password" placeholder='Password' className='border-gray-200 border-1 w-full rounded-lg py-2 px-4' {...register("password")} />
            </div>
            <button type='submit' className={`disabled:bg-[#577df1] bg-[#1141CB] text-white py-3 px-4 text-lg mt-6 w-full rounded-lg `} disabled={loading}>{loading? "Logging...":"Login"}</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
