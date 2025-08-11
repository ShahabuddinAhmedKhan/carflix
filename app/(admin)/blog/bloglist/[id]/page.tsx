"use client";

import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { SidebarContext } from "@/app/(admin)/context/ContextProvider";


// Dynamically import JoditEditor to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CreateBlog = () => {
    const { id } = useParams()
    console.log(id);

    const [filteredPost, setFilteredPost] = useState([])
    const { post, setPost } = useContext(SidebarContext)


    // useEffect(() => {


    //     // Ensure `singleId` is a valid number

    //     const newFilterePost = post.filter(post => post.id == id)
        
    //     setFilteredPost(newFilterePost)

    // }, [id, post])
    // console.log(filteredPost);

    useEffect(() => {
        
    },[])










    const { register,
        handleSubmit,
        control,
        reset,
        formState: { errors } } =
        useForm({
            defaultValues:
            {
                title: "",
                tag: "",
                content: ""
            }
        });
    useEffect(() => {
        if (filteredPost.length > 0) {
            const post = filteredPost[0];
            reset({
                title: post.title,
                tag: "",                  // or post.tag if you have one
                content: post.description
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



    // Handle form submission
    const onSubmit = data => {
        console.log(data);

        const updated = {
            ...filteredPost[0],
            title: data.title,
            description: data.content,
        };

        // map over the old list, swapping in `updated` at the right spot:
        const updatedList = post.map(p =>
            p.id === updated.id ? updated : p
        );

        // write it back
        setPost(updatedList);

        // now `updatedList` is your new array—log it if you want:
        console.log("Final:", updatedList);
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
                            <Image src={filteredPost?.length > 0 ? filteredPost[0]?.image : "/p.jpg"} alt="image" height={900} width={900} className="w-screen object-cover h-[315px] border-2" priority />



                        </div>
                    </div>

                    {/* Category */}
                    <div className="mb-5">
                        <Label className="text-base font-semibold text-headerColor mb-2">
                            Category
                        </Label>
                        <select
                            className="w-full px-3 py-2 border border-gray-200 rounded-md"
                            {...register("tag", { required: "Category is required" })}
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
                            defaultValue={filteredPost?.length > 0 && filteredPost[0].title}

                            {...register("title", { required: "Title is required" })}
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
                            defaultValue={filteredPost?.length > 0 ? filteredPost[0]?.description : ""}
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
