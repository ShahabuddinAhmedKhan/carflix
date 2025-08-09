"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import upTrend from "../../public/frame.png"
import Image from 'next/image'
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

export const description = "A line chart with dots"

const chartData = [
    { month: "January", dollar: 150, mobile: 80 },
    { month: "February", dollar: 130, mobile: 200 },
    { month: "March", dollar: 111, mobile: 120 },
    { month: "April", dollar: 73, mobile: 190 },
    { month: "May", dollar: 78, mobile: 130 },
    { month: "June", dollar: 90, mobile: 140 },
    { month: "July", dollar: 102, mobile: 160 },
    { month: "August", dollar: 115, mobile: 175 },
    { month: "September", dollar: 98, mobile: 150 },
    { month: "October", dollar: 105, mobile: 170 },
    { month: "November", dollar: 120, mobile: 110 },
    { month: "December", dollar: 140, mobile: 95 },
  ];

const chartConfig = {
    dollar: {
        label: "dollar",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function Graphs() {
    return (
        <Card>
            <CardHeader>

                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-[14px] text-[#444950] mb-2">Revenue Statistic</CardTitle>
                        <CardDescription >
                            <div className="flex gap-2">
                                <h1 className="font-bold text-[24px]  text-black">$500K</h1>
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
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            dataKey="dollar"
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value} `}  // formats ticks with dollar sign
                            dx={-10}
                            tickMargin={10

                            }
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="dollar"
                            type="natural"
                            stroke="#1141CB"
                            strokeWidth={2}
                            dot={{
                                fill: "#1141CB",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
