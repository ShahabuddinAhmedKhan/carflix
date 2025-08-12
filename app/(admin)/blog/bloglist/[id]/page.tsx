"use client";

import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { SidebarContext } from "@/app/(admin)/context/ContextProvider";
import { UserService } from "@/service/user/user.service";
import upload from "../../../../../public/Group.png"; 

// Dynamically import JoditEditor to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CreateBlog = () => {
    const { id } = useParams()


    const [filteredPost, setFilteredPost] = useState(null)
    const { post, setPost } = useContext(SidebarContext)


    // useEffect(() => {


    //     // Ensure `singleId` is a valid number

    //     const newFilterePost = post.filter(post => post.id == id)

    //     setFilteredPost(newFilterePost)

    // }, [id, post])
    // console.log(filteredPost);

    useEffect(() => {
        const oneBlog = async (id) => {
            try {
                const res = await UserService.findOne(id)
                setFilteredPost(res.data.data);

            } catch (error) {
                console.log(error);

            }
        }
        oneBlog(id)

    }, [])












    const { register,
        handleSubmit,
        control,
        reset,
        formState: { errors } } =
        useForm({
            defaultValues:
            {
                title: "",
                category: "",
                content: "",
                sub_title: ""
            }
        });
    useEffect(() => {

        if (filteredPost) {



            reset({
                title: filteredPost.title,
                category: filteredPost.category,                  // or filteredPost.category if you have one
                content: filteredPost.content,
                sub_title: filteredPost.sub_title
            });
        }
    }, [filteredPost, reset]);



    const [datas, setDatas] = useState([])
    const router = useRouter()


    const [thumbnail, setThumbnail] = useState(null); // State for storing the thumbnail path
    const [previewUrl, setPreviewUrl] = useState(null); // State for image preview

    const config = {
        readonly: false,
        height: 200,
        enableDragAndDropFileToEditor: true,
        showXPathInStatusbar: false,
        showBrowserColorPicker: false,
        showCharsCounter: false,
        showWordsCounter: false,
        statusbar: false,
        enter: "P",
        cleanHTML: {
            fillEmptyParagraph: true,
        },
        list: {
            indent: 20,
        },
        uploader: {
            insertImageAsBase64URI: true,
            imagesExtensions: ["jpg", "png", "jpeg", "gif"],
            maximumImageFileSize: 1000000,
        },
        buttons: [
            "source",
            "|",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "|",
            "ul",
            "ol",
            "|",
            "paragraph",
            "fontsize",
            "brush",
            "|",
            "image",
            "link",
            "|",
            "align",
            "|",
            "undo",
            "redo",
        ],
    };

    const handleFileChange = (event) => {
        // Log the event to check if it's firing
        const fileView = event.target.files
        console.log(fileView);




        const file = event.target.files ? event.target.files[0] : null;
        if (file) {





            // Save the file object to state for further processing if needed
            setThumbnail(file);


            // Set the file name in the state (no need for base64 or preview URL)
            setPreviewUrl(file.name); // Save the file name instead of base64
        }
    };


    // Handle form submission
    const onSubmit = data => {
  
        
        data.thumbnail = thumbnail
        console.log(data);
        






        if (!filteredPost) return;



        const updated = {
            ...filteredPost,
            title: data.title,
            description: data.content,
        };

        const updatingBlog = async () => {
            const res = await UserService.update(data, `/admin/blog/${id}`)
            console.log(res);

        }

        // map over the old list, swapping in `updated` at the right spot:
        const updatedList = post.map(p =>
            p.id === updated.id ? updated : p
        );

        // write it back
        setPost(updatedList);

        // now `updatedList` is your new array—log it if you want:
        updatingBlog()

        router.push("/blog/bloglist")

        // navigate away or give feedback…
    };





    return (
        <div className="bg-white rounded-lg p-6 md:ml-[280px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center h-full justify-between mb-5">
                    <h2 className="text-[20px] lg:text-2xl font-semibold text-headerColor">Create Blog</h2>
                    <div>
                        <button type="submit" className="bg-[#1141CB] text-white py-3 px-4 text-xs rounded-sm cursor-pointer">
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="p-4 lg:p-6 border rounded-2xl">
                    {/* Thumbnail Image */}
                    <div className="border-1 border-gray-200 rounded-md p-4 mt-5">
                        <h1 className="font-semibold">Thumbnail Image</h1>
                        <div className="bg-[#FAFBFC] border-1 border-dashed p-4 mt-4 rounded-sm flex flex-col items-center">

                            {/* thumnail image */}
                            <div className="bg-[#FAFBFC] border-1 border-dashed p-4 mt-4 rounded-sm flex flex-col items-center">
                                    {/* Image Preview */}
                                    {previewUrl ? (
                                        <Image src={`/${previewUrl}`} alt="upload image" width={80} height={80} /> // Display the file name here instead of the image preview
                                    ) : (
                                        <Image src={upload} alt="upload image" priority />
                                    )}
                                    <p>Only support .jpg, .png</p>
                                    {/* Hidden file input */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange} // This should be triggered correctly
                                        className="hidden"
                                        id="thumbnail-upload"
                                    // Register file input to form
                                    />

                                    <button
                                        type="button"
                                        onClick={() => document.getElementById("thumbnail-upload")?.click()} // Trigger file input click
                                        className="bg-[#1141CB] text-white py-3 px-4 text-xs rounded-sm"
                                    >
                                        Click To Upload
                                    </button>
                                </div>

                        </div>
                    </div>

                    {/* Category */}
                    <div className="mb-5">
                        <Label className="text-base font-semibold text-headerColor mb-2">
                            Category
                        </Label>
                        <select
                            className="w-full px-3 py-2 border border-gray-200 rounded-md"
                            {...register("category", { required: "Category is required" })}
                        >
                            <option value="Car Wash">Car Wash</option>
                            <option value="Wheel Fix">Wheel Fix</option>
                            <option value="Store">Store</option>
                        </select>

                    </div>

                    {/* Title */}
                    <div className="mb-5">
                        <Label className="text-base font-semibold text-headerColor mb-2">
                            Title
                        </Label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md"
                            placeholder="Type blog title"
                            {...register("title", { required: "Title is required" })}
                        />
                        {errors?.title && <p className="text-red-500 text-sm">{errors?.title?.message as any}</p>}
                    </div>
                    {/* subtitle */}
                    <div className="mb-5">
                        <Label className="text-base font-semibold text-headerColor mb-2">
                            Sub Title
                        </Label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md"
                            placeholder="Type blog title"
                            {...register("sub_title", { required: "Title is required" })}
                        />
                        {errors?.title && <p className="text-red-500 text-sm">{errors?.title?.message as any}</p>}
                    </div>

                    {/* Blog Content (Jodit Editor) */}
                    <div className="mb-5">
                        <Label className="text-base font-semibold text-headerColor mb-2">
                            Blog Content
                        </Label>
                        <Controller
                            name="content"
                            defaultValue={filteredPost ? filteredPost.content : ""}
                            control={control}
                            render={({ field }) => (
                                <JoditEditor
                                    value={field.value}
                                    config={config as any}
                                    onBlur={(newContent) => field.onChange(newContent)} // Update form value
                                />
                            )}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
