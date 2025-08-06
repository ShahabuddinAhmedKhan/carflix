"use client"
import React, { createContext, useState } from 'react'
import { blog_posts } from '../blog/bloglist/cardData'

export const SidebarContext = createContext(null)

export default function ContextProvider({ children }) {
  const [hidden, setHidden] = useState(false)
  const [post, setPost] = useState(blog_posts)
  const info = {
    hidden,
    setHidden,
    post,
    setPost

  }
  return (
    <SidebarContext.Provider value={info}>
      {children}

    </SidebarContext.Provider>
  )
}
