"use client"
import React, { createContext, useState } from 'react'
import { blog_posts } from '../data/cardData'
import { profileData } from '../data/ProfileData'


export const SidebarContext = createContext(null)

export default function ContextProvider({ children }) {
  const [hidden, setHidden] = useState(false)
  const [post, setPost] = useState(blog_posts)
  const [data, setData] = useState(profileData)
  const info = {
    hidden,
    setHidden,
    post,
    setPost,
    data, 
    setData

  }
  return (
    <SidebarContext.Provider value={info}>
      {children}

    </SidebarContext.Provider>
  )
}
