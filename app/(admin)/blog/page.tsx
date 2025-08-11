"use client";

import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import upload from "../../../public/Group.png"; // Default image
import Link from "next/link";


// Dynamically import JoditEditor to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CreateBlog = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const [datas, setDatas] = useState([])
  

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

  // Handle the file change (for selecting the image path)
  const handleFileChange = (event) => {
    // Log the event to check if it's firing



    const file = event.target.files ? event.target.files[0] : null;
    if (file) {


  
      

      // Save the file object to state for further processing if needed
      setThumbnail(file);

      
      // Set the file name in the state (no need for base64 or preview URL)
      setPreviewUrl(file.name); // Save the file name instead of base64
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {

    setDatas([{data: data, url : previewUrl}])
    
  };

  

  return (
    <div className="bg-white rounded-lg p-6 md:ml-[280px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center h-full justify-between mb-5">
          <h2 className="text-[20px] lg:text-2xl font-semibold text-headerColor">Create Blog</h2>
          <Link href={"/blog/bloglist"}>
            <button  type="submit" className="bg-[#1141CB] text-white py-3 px-4 text-xs rounded-sm cursor-pointer">
              Upload
            </button>
          </Link>
        </div>

        <div className="p-4 lg:p-6 border rounded-2xl">
          {/* Thumbnail Image */}
          <div className="border-1 border-gray-200 rounded-md p-4 mt-5">
            <h1 className="font-semibold">Thumbnail Image</h1>
            <div className="bg-[#FAFBFC] border-1 border-dashed p-4 mt-4 rounded-sm flex flex-col items-center">
              {/* Image Preview */}
              {previewUrl ? (
                <Image src={`/${previewUrl}`} alt="upload image" width={80} height={80}  /> // Display the file name here instead of the image preview
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
            {errors?.tag && <p className="text-red-500 text-sm">{errors.tag.message as any}</p>}
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
          {/* Sub title */}
          <div className="mb-5">
            <Label className="text-base font-semibold text-headerColor mb-2">
              Sub-Title
            </Label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-200 rounded-md"
              placeholder="Type blog Sub title"
              {...register("sub-title", )}
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
