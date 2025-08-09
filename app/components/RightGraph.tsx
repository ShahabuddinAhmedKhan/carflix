"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, XAxis } from "recharts"
import upTrend from "../../public/frame.png"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import Image from "next/image"

export const description = "A bar chart"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
    { month: "July", desktop: 198 },
    { month: "August", desktop: 245 },
    { month: "September", desktop: 187 },
    { month: "October", desktop: 160 },
    { month: "November", desktop: 226 },
    { month: "December", desktop: 192 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function RightGraph() {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-[14px] text-[#444950] mb-2">Total Subscriber</CardTitle>
                        <CardDescription >
                            <div className="flex gap-2">
                                <h1 className="font-bold text-[24px]  text-black">100</h1>
                                <div className="rounded-2xl bg-[#4CAF501A] flex gap-2 text-[#4CAF50] items-center justify-center p-1 px-4 border-1 border-[#4CAF50]">
                                    <p>6%</p>
                                    <Image src={upTrend} alt='up trend' height={20} width={20} ></Image>

                                </div>
                            </div>
                        </CardDescription>
                    </div>
                    <div className="border-gray-200 border-1 p-2 rounded-2xl ">
                        <select id="billing" className="text-gray-500" >
                            <option value="monthly" >Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>

                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" radius={8} >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.month === "August" ? "#1141CB" : "#EBF0FE"}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
