"use client";

import noto from "@/assets/fonts";
import NavbarComponent from "@/components/Navbar";
import UploadPhoto from "@/components/UploadPhoto";
import { Inputs } from "@/types/Inputs";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ProfileProps {
  user: {
    id: number;
    fullname: string;
    username: string;
    email: string;
    password: string;
    id_number: string;
    dob: string;
    country: string;
    profile_pic: FileList | null;
  };
}

function Profile({ user }: ProfileProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      id_number: user.id_number,
      dob: user.dob,
      country: user.country,
      profile_pic: user.profile_pic,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "profile_pic" && value) {
        formData.append(key, value[0]);
      } else if (value) {
        formData.append(key, value as string | Blob);
      }
    });

    try {
      const response = await fetch("/api/auth/editProfile", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Edit profile successful", result);
      } else {
        console.error("Edit profile failed", result);
      }
    } catch (error) {
      console.error("Error during Edit profile", error);
    }
  };

  const Required = <span>This field is required</span>;

  return (
    <div>
      <NavbarComponent />
      <div className="flex h-auto w-full justify-center rounded-md bg-[url('/cover.jpg')] py-[80px]">
        <div className="flex w-[1000px] flex-col gap-5 bg-white p-[50px]">
          <div className="flex justify-between">
            <span className={`${noto.className} text-[68px]`}>Profile</span>
            <Button
              className="mt-[30px] w-[200px] rounded-md bg-orange-600 text-white"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Update Profile
            </Button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="flex flex-col gap-6">
              <span>Basic Information</span>
              <div className="flex flex-col gap-5">
                <div>
                  <Input
                    label="Full Name"
                    labelPlacement="outside"
                    {...register("fullname", { required: true })}
                    type="text"
                  />
                  {errors.fullname && Required}
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Input
                      label="Username"
                      labelPlacement="outside"
                      {...register("username", { required: true })}
                      type="text"
                      autoComplete="on"
                    />
                    {errors.username && Required}
                  </div>

                  <div>
                    <Input
                      label="Email"
                      labelPlacement="outside"
                      {...register("email", { required: true })}
                      type="email"
                      autoComplete="on"
                    />
                    {errors.email && Required}
                  </div>

                  <div>
                    <Input
                      label="ID Number"
                      labelPlacement="outside"
                      {...register("id_number", { required: true })}
                      type="text"
                    />
                    {errors.id_number && Required}
                  </div>

                  <div>
                    <Input
                      label="Date of Birth"
                      labelPlacement="outside"
                      {...register("dob", { required: true })}
                      type="date"
                    />
                    {errors.dob && Required}
                  </div>

                  <div>
                    <Input
                      label="Country"
                      labelPlacement="outside"
                      {...register("country", { required: true })}
                      type="text"
                      autoComplete="on"
                    />
                    {errors.country && Required}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span>Profile Picture</span>
              <UploadPhoto register={register} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
