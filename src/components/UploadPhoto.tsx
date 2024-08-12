import React, { useRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Inputs {
  fullname: string;
  username: string;
  email: string;
  password: string;
  id_number: string;
  dob: string;
  country: string;
  profile_pic: FileList | null;
  card_number: string;
  card_owner: string;
  expiry_date: string;
  cvc: string;
}

interface UploadPhotoProps {
  register: UseFormRegister<Inputs>;
}

const UploadPhoto: React.FC<UploadPhotoProps> = ({ register }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="w-[148px] h-[148px] bg-[#F1F2F6] flex flex-col justify-center items-center rounded-sm cursor-pointer overflow-hidden"
      onClick={handleDivClick}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="Uploaded" className="w-full h-full object-cover" />
      ) : (
        <>
          <span className="text-orange-500 z-99">+</span>
          <span className="text-orange-500 z-99 text-[14px]">Upload Photo</span>
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
