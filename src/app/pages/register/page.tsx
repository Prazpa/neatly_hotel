"use client";
import React from "react";
import noto from "@/assets/fonts";
import NavbarComponent from "@/components/Navbar";
import { Button, Input,  } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import imgAddphoto from "../../../../public/Addphoto.png";

type Inputs = {
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
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();

    // Add all form fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (key === "profile_pic" && value) {
        formData.append(key, value[0]);
      } else if (value) {
        formData.append(key, value as string | Blob);
      }
    });

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Registration successful", result);
      } else {
        console.error("Registration failed", result);
      }
    } catch (error) {
      console.error("Error during registration", error);
    }
  };

  const Required = <span>This field is required</span>;

  return (
    <div>
      <NavbarComponent />
      <div className="flex h-auto w-full justify-center rounded-md bg-[url('/cover.jpg')] py-[80px]">
        <div className="flex w-[1000px] flex-col gap-5 bg-white p-[50px]">
          <div>
            <span className={`${noto.className} text-[68px]`}>Register</span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-6">
              <span>Basic Information</span>
              <div className="flex flex-col gap-5">
                <div>
                  <Input
                    label="Full Name"
                    labelPlacement="outside"
                    {...register("fullname", { required: true })}
                    type="text"
                    placeholder="Enter your name and last name"
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
                      placeholder="Enter your username"
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
                      placeholder="Enter your email"
                      autoComplete="on"
                    />
                    {errors.email && Required}
                  </div>

                  <div>
                    <Input
                      label="Password"
                      labelPlacement="outside"
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="Enter your password"
                      autoComplete="on"
                    />
                    {errors.password && Required}
                  </div>

                  <div>
                    <Input
                      label="ID Number"
                      labelPlacement="outside"
                      {...register("id_number", { required: true })}
                      type="text"
                      placeholder="Enter your ID Number"
                    />
                    {errors.id_number && Required}
                  </div>

                  <div>
                    <Input
                      label="Date of Birth"
                      labelPlacement="outside"
                      {...register("dob", { required: true })}
                      type="date"
                      placeholder="Select your date of birth"
                    />
                    {errors.dob && Required}
                  </div>

                  <div>
                    <Input
                      label="Country"
                      labelPlacement="outside"
                      {...register("country", { required: true })}
                      type="country"
                      placeholder="Enter your country"
                      autoComplete="on"
                    />
                    {errors.country && Required}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span>Profile Picture</span>
              <div>
                <Image src={imgAddphoto} alt="add" width={100} height={100} />
              </div>

              <Input
                {...register("profile_pic")}
                type="file"
                placeholder="Upload photo"
              />
            </div>

            <div className="flex flex-col gap-5">
              <span>Credit Card</span>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Input
                    label="Card Number"
                    labelPlacement="outside"
                    {...register("card_number", { required: true })}
                    type="text"
                    placeholder="Enter your card number"
                  />
                  {errors.card_number && Required}
                </div>

                <div>
                  <Input
                    label="Card Owner"
                    labelPlacement="outside"
                    {...register("card_owner", { required: true })}
                    type="text"
                    placeholder="Enter your card name"
                  />
                  {errors.card_owner && Required}
                </div>

                <div>
                  <Input
                    label="Expiry Date"
                    labelPlacement="outside"
                    {...register("expiry_date", { required: true })}
                    type="date"
                    placeholder="MM/YY"
                  />
                  {errors.expiry_date && Required}
                </div>

                <div>
                  <Input
                    label="CVC/CVV"
                    labelPlacement="outside"
                    {...register("cvc", { required: true })}
                    type="text"
                    placeholder="CVC/CVV"
                  />
                  {errors.cvc && Required}
                </div>
              </div>
            </div>

            <Button
              className="w-[400px] rounded-md bg-orange-600 text-white"
              type="submit"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
