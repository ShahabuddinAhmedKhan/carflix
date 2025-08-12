"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TimePicker from "./Time";
import SwitchMob from "./SwitchMob";  // Import the updated SwitchMob component
import { Textarea } from "@/components/ui/textarea";
import ClickToUpload from "./ClickToUpload";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useState } from "react";
import { UserService } from "@/service/user/user.service";
import { useRouter } from "next/navigation";

export function Modal() {
    const [open, setOpen] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [file, setFile] = useState(null)
    const router = useRouter()

    
    const { handleSubmit, reset, register, control } = useForm({
        defaultValues: {
            service_name: "",
            service_category: "",
            location: "",
            available_time: "",
            team_size: "",
            mobile: false,
            garage: false,
            descriptions: "",
            additional_image: "",
        },
    });

    const onSubmit = (data) => {
        if (Array.isArray(data.available_time) && data.available_time.length === 2) {
            const [start, end] = data.available_time;
            const startTime = dayjs(start).format("HH:mm:ss");
            const endTime = dayjs(end).format("HH:mm:ss");
            data.available_time = `${startTime} AM ${endTime} PM`;
        }
        data.additional_image = file;
        const createService = async() => {
            const res = await UserService.create(data,"/admin/services" )
            console.log(res);
            

        }
      
        createService()
        console.log(data);
        setOpen(false); // Close dialog after submit
        reset(); // Reset form
        router.push("/services")

    };

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button className="bg-[#1141CB] text-white py-3 px-4 text-xs rounded-sm">
                        Create Service
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle className="text-xl">Add New Service</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {/* Service Name */}
                            <div className="grid gap-3">
                                <Label htmlFor="serviceName" className="font-semibold">Service Name</Label>
                                <Input
                                    id="serviceName"
                                    name="serviceName"
                                    {...register("service_name")}
                                />
                            </div>

                            {/* Service Category */}
                            <div className="grid gap-3">
                                <Label htmlFor="serviceCategory" className="font-semibold">Service Category</Label>
                                <Input
                                    id="serviceCategory"
                                    name="serviceCategory"
                                    {...register("service_category")}
                                />
                            </div>

                            {/* Location */}
                            <div className="grid gap-3">
                                <Label htmlFor="location" className="font-semibold">Location</Label>
                                <Input
                                    id="location"
                                    name="location"
                                    {...register("location")}
                                />
                            </div>

                            {/* Time Picker */}
                            <div className="grid gap-3">
                                <Label htmlFor="time-picker" className="font-semibold">Time</Label>
                                <Controller
                                    name="available_time"
                                    control={control}
                                    render={({ field }) => (
                                        <TimePicker
                                            {...field}
                                            onChange={(value) => field.onChange(value)}
                                            value={field.value ? [dayjs(field.value[0]), dayjs(field.value[1])] : null}
                                        />
                                    )}
                                />
                            </div>

                            {/* Team Size */}
                            <div className="grid gap-3">
                                <Label htmlFor="teamSize" className="font-semibold">Team Size</Label>
                                <Input
                                    id="teamSize"
                                    name="teamSize"
                                    {...register("team_size")}
                                />
                            </div>

                            {/* Switch (Mobile / Garage) */}
                            <div className="flex gap-4 items-center mt-2">
                                <div className="flex gap-2">
                                    <h1 className="font-semibold">Mobile</h1>
                                    <Controller
                                        name="mobile"
                                        control={control}
                                        render={({ field }) => (
                                            <SwitchMob {...field} />
                                        )}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <h1 className="font-semibold">Garage</h1>
                                    <Controller
                                        name="garage"
                                        control={control}
                                        render={({ field }) => (
                                            <SwitchMob {...field} />
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div className="grid gap-3">
                                <Label htmlFor="descriptions" className="font-semibold">Descriptions</Label>
                                <Textarea
                                    className="h-[200px]"
                                    id="descriptions"
                                    placeholder="Description..."
                                    {...register("descriptions")}
                                />
                            </div>

                            {/* Additional Image */}
                            <div className="grid gap-3">
                                <Label htmlFor="image" className="font-semibold">Additional Image</Label>
                                <ClickToUpload setPreviewUrl={setPreviewUrl} previewUrl={previewUrl} setFile = {setFile}/>
                            </div>
                        </div>
                        <DialogFooter className="sm:justify-between mt-4">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit" className="bg-[#1141CB] text-white" >Save</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
