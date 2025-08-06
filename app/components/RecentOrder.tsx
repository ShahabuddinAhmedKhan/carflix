import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function RecentOrder() {
    const orders = [
        {
            "serial": "01",
            "order_id": "#54637898",
            "customer": "Paula Mora",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 12, 2025"
        },
        {
            "serial": "02",
            "order_id": "#54637898",
            "customer": "David Elson",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "May 9, 2025"
        },
        {
            "serial": "03",
            "order_id": "#54637898",
            "customer": "Stephanie Sharkey",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 16, 2025"
        },
        {
            "serial": "04",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        },
        {
            "serial": "05",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        },
        {
            "serial": "06",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        },
        {
            "serial": "07",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        },
        {
            "serial": "08",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        },
        {
            "serial": "09",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        },
        {
            "serial": "10",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        },
        {
            "serial": "11",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        },
        {
            "serial": "12",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        },
        {
            "serial": "13",
            "order_id": "#54637898",
            "customer": "Mary Freund",
            "service_type": "Exterior Wash",
            "plan": "Schedule Service",
            "city": "New York City",
            "date": "Apr 18, 2025"
        }
    ]

    return (
        <div className='border-1 rounded-2xl p-3'>
            <div>
                <h1 className='text-[24px] font-bold pb-4'>Our Recent Orders</h1>
            </div>
            <div className='border-1 rounded-2xl'>
                <Table>

                    <TableHeader className=' h-12'>
                        <TableRow>
                            <TableHead className="w-[100px]">Serial</TableHead>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Service Type</TableHead>
                            <TableHead>Plan</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead  className="text-center ">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order["serial"]}>
                                <TableCell className="font-medium">{order["serial"]}</TableCell>
                                <TableCell>{order["order_id"]}</TableCell>
                                <TableCell>{order["customer"]}</TableCell>
                                <TableCell>{order["service_type"]}</TableCell>
                                <TableCell>{order["plan"]}</TableCell>
                                <TableCell>{order["city"]}</TableCell>
                                <TableCell >{order["date"]}</TableCell>
                                <TableCell className="text-center ">
                                    <div >
                                        <button className='mr-2  border-1 border-[#1141CB] text-[#1141CB] py-1 px-4 text-xs'>Reject</button>
                                        <button className=' bg-[#1141CB] text-white py-1 px-4 text-xs'>Accept</button>
                                    </div>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>

        </div>
    )
}
