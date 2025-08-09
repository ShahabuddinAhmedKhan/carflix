"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import upload from "../../public/Group.png";

export default function ClickToUpload() {
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleOneFileChange = (event) => {
        // Log the event to check if it's firing
    
        const file = event.target.files ? event.target.files[0] : null;
      
        
        if (file) {
          // Set the file name in the state (no need for base64 or preview URL)
          setPreviewUrl(file.name); // Save the file name instead of base64
        }
      };
  return (
    <div>
      <div className="bg-[#FAFBFC] border-1 border-dashed border-[#1141CB] p-4 rounded-sm flex flex-col items-center justify-center  h-[200px] space-y-[12px]">
                        {/* Image Preview */}
                        {previewUrl ? (
                            <Image src={`/${previewUrl}`} alt="upload image" width={80} height={80} /> // Display the file name here instead of the image preview
                        ) : (
                            <Image src={upload} alt="upload image" priority />
                        )}

                        <div className="text-[#B4B4B4]">
                            <h1 className="text-sm">Upload Your Lenience front Photo</h1>
                        <p className="text-xs">Only support .jpg, .png and .svg and zip files</p>
                        </div>
                        {/* Hidden file input */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleOneFileChange} // This should be triggered correctly
                            className="hidden"
                            id="thumbnail-upload-one"
                        // Register file input to form
                        />

                        <button
                            type="button"
                            onClick={() => document.getElementById("thumbnail-upload-one")?.click()} // Trigger file input click
                            className="bg-[#1141CB] text-white py-3 px-4 text-xs rounded-sm"
                        >
                            Click To Upload
                        </button>
                    </div>
    </div>
  )
}
