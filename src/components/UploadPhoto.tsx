import React, { useRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "@/types/Inputs";
import { createClient } from "@supabase/supabase-js";

interface UploadPhotoProps {
  register: UseFormRegister<Inputs>;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const UploadPhoto: React.FC<UploadPhotoProps> = ({ register }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const dataURL = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      setImageSrc(dataURL);

      // Upload the file to Supabase Storage
      const { data, error } = await supabase.storage
        .from("photoupload")
        .upload(`public/${file.name}`, file);

      if (error) {
        console.error("Error uploading file:", error.message);
      } else {
        console.log("File uploaded successfully:", data);
      }
    }
  };

  return (
    <div
      className="flex h-[148px] w-[148px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-sm bg-[#F1F2F6]"
      onClick={handleDivClick}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Uploaded"
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <span className="z-99 text-orange-500">+</span>
          <span className="z-99 text-[14px] text-orange-500">Upload Photo</span>
        </>
      )}
      <input
        {...register("profile_pic")}
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default UploadPhoto;
