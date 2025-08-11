"use client"
import Link from "next/link"
import { SlashIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useParams } from "next/navigation"

export function DynamicBreadcrumb() {
  const params = useParams()
  let id: string[] = [];
  
  if (typeof params.id === 'string') {
    id = params.id.split("-");
  } else if (Array.isArray(params.id)) {
    // If `params.id` is an array, handle it by using the first item
    id = params.id[0].split("-");
  }

  const text = id[0].charAt(0).toUpperCase() + id[0].slice(1) + " " + id[1].charAt(0).toUpperCase() + id[1].slice(1);


  

  
  return (
    <Breadcrumb >
      <BreadcrumbList className="text-xl font-semibold">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" >Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/services">Our Services</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-xl font-semibold">{text}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
