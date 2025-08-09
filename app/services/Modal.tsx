import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TimePicker from "./Time"
import SwitchMob from "./SwitchMob"
import { Textarea } from "@/components/ui/textarea"
import ClickToUpload from "./ClickToUpload"

export function Modal() {
    return (
        <div>
            <Dialog >
                <form>
                    <DialogTrigger asChild>
                        <Button className="bg-[#1141CB] text-white py-3 px-4 text-xs rounded-sm">
                            Create Service
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="
                     sm:max-w-3xl">
                        <DialogHeader>
                            <DialogTitle className="text-xl">Add New Service</DialogTitle>

                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {/* name */}
                            <div className="grid gap-3">
                                <Label htmlFor="name-1" className="font-semibold">Service Name</Label>
                                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                            </div>
                            {/* category */}
                            <div className="grid gap-3">
                                <Label htmlFor="username-1" className="font-semibold">Service Category</Label>
                                <Input id="username-1" name="username" defaultValue="@peduarte" />
                            </div>
                            {/* location */}
                            <div className="grid gap-3">
                                <Label htmlFor="name-1" className="font-semibold">Location</Label>
                                <Input id="name-1" name="name" defaultValue="New York" />
                            </div>
                            {/* time */}
                           
                            <div>
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="time-picker" className="font-semibold px-1">
                                        Time
                                    </Label>
                                    <TimePicker/>
                                </div>
                            </div>
                            {/* tema size  */}
                            <div className="grid gap-3">
                                <Label htmlFor="name-1" className="font-semibold">Team Size</Label>
                                <Input id="name-1" name="name" defaultValue="03" />
                            </div>
                            {/* Switch  */}
                            <div className="flex gap-4  items-center mt-2">
                                <div className="flex gap-2">
                                    <h1 className="font-semibold">Mobile</h1>
                                    <SwitchMob/>
                                </div>
                                <div className="flex gap-2">
                                    <h1 className="font-semibold">Garage</h1>
                                    <SwitchMob/>
                                </div>
                            </div>
                            {/* text area  */}
                            <div className="grid gap-3">
                                <Label htmlFor="name-1" className="font-semibold">Descriptions</Label>
                                <Textarea className="h-50" placeholder="Description..." />
                            </div>
                            {/* text area  */}
                            <div className="grid gap-3">
                                <Label htmlFor="name-1" className="font-semibold">Additional Image</Label>
                                <div>
                                    <ClickToUpload/>
                                </div>
                                
                            </div>
                            
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    )
}

