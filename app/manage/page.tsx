"use client"
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { orders } from '@/data/Works'
import { Button } from "@/components/ui/button"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const [filteredOrder, setFilteredOrder] = useState(orders)
    const [active, setActive] = useState(0)


    const totalPages = Math.ceil(filteredOrder.length / itemsPerPage)


    const startIdx = (currentPage - 1) * itemsPerPage
    const currentOrders = filteredOrder.slice(startIdx, startIdx + itemsPerPage)

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) 
            return
        setCurrentPage(page)
    }
    const handleFilter =(status) => {
        setCurrentPage(1)
        if (status == "Completed"){
            const ongoing = orders.filter(order => order.status == "Completed")
            setFilteredOrder(ongoing)
            setActive(3)
           
        }
        else if (status == "Ongoing"){
            const ongoing = orders.filter(order => order.status == "Ongoing")
            setFilteredOrder(ongoing)
            setActive(2)
          
        }
        else{
            setFilteredOrder(orders)
            setActive(1)
          
            
        }
       
        
    }
    
    return (
        <div className='border-1 rounded-2xl p-3 md:ml-[300px] mt-10'>
            <div>
                <h1 className='text-[24px] font-bold pb-4'>Our Works</h1>
            </div>
           

            <div className='space-x-2 mb-3'>
                <button onClick={() => handleFilter("All")} className={active == 1? "bg-[#1141CB] text-white py-1 px-4 text-xs rounded-[5px]" : 'border border-[#1141CB] text-[#1141CB] py-1 px-4 text-xs rounded-[5px]'  }>All Work</button>
                <button onClick={() => handleFilter("Ongoing")} className={active == 2? "bg-[#1141CB] text-white py-1 px-4 text-xs rounded-[5px]" : 'border border-[#1141CB] text-[#1141CB] py-1 px-4 text-xs rounded-[5px]'  }>Ongoing Work</button>
                <button onClick={() => handleFilter("Completed")} className={active == 3? "bg-[#1141CB] text-white py-1 px-4 text-xs rounded-[5px]" : 'border border-[#1141CB] text-[#1141CB] py-1 px-4 text-xs rounded-[5px]'  }>Completed Work</button>
            </div>
 
            <div className='border-1 rounded-2xl'>
                <Table>
                    <TableHeader className='h-12'>
                        <TableRow className='bg-[#FAFBFC]'>
                            <TableHead className="w-[100px]">Serial</TableHead>
                            <TableHead>Order ID</TableHead>
                            <TableHead>User Name</TableHead>
                            <TableHead>Service Name</TableHead>
                            <TableHead>Service Type</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Service Date</TableHead>
                            <TableHead className="">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentOrders.map((order, idx) => (
                            <TableRow key={idx}>
                                <TableCell className='pl-5'>{startIdx + idx + 1}</TableCell>
                                <TableCell>{order.orderId}</TableCell>
                                <TableCell>{order.userName}</TableCell>
                                <TableCell>{order.serviceName}</TableCell>
                                <TableCell>{order.serviceType}</TableCell>
                                <TableCell>{order.location}</TableCell>
                                <TableCell>{order.serviceDate}</TableCell>
                                
                                    <TableCell className={order.status == "Completed"? "bg-[#F1FCE9] text-[#3F9917]   w-[85px] rounded-sm" : "bg-[#F9C80E]/10 text-[#B89200]   w-[85px] rounded-sm" }>
                                    <div className=' m-3 text-center'>{order.status} </div></TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination controls */}
            <div className="flex  items-center mt-4 ">
                <Button
                    variant="outline"
                    onClick={() => {


                        goToPage(currentPage - 1)
                    }}
                    disabled={currentPage === 1}
                >
                    <FaArrowCircleLeft />
                </Button>

                <div className="flex gap-2 px-4">
                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNum = index + 1;

                        // Show only first 3 pages and last page
                        if (
                            pageNum <= 3 || // show first 3
                            pageNum === totalPages || // always show last
                            pageNum === currentPage // always show current (optional)
                        ) {
                            return (
                                <Button
                                    key={pageNum}
                                    variant={pageNum === currentPage ? "default" : "outline"}
                                    onClick={() => goToPage(pageNum)}
                                    className={`px-3 py-1 text-sm ${pageNum === currentPage ? 'bg-[#1141CB] text-white' : ''}`}
                                >
                                    {pageNum}
                                </Button>
                            );
                        }

                        // Show ellipsis after 3
                        if (pageNum === 4) {
                            return <span key="ellipsis" className="px-2 text-gray-500">...</span>;
                        }

                        return null;
                    })}
                </div>


                <Button
                    variant="outline"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <FaArrowCircleRight />
                </Button>

            </div>
        </div>
    )
}
