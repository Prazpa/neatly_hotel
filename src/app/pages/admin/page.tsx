"use client";

import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import noto from "@/assets/fonts";
import NavbarComponent from "@/components/Navbar";
import Image from "next/image";
import ImgHotel from "../../../../public/imageHotel.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import Homepage from "@/app/page";
import Link from "next/link";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const { data: session } = useSession();

  if (session?.user) {
    return <Homepage />;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.ok) {
        console.log("Login successful");
      } else {
        console.error("Login failed", result?.error);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="h-screen">
      <NavbarComponent />

      <div className="flex">
        <div className="flex gap-5 w-full">
          <div className="w-1/2">
            <Image src={ImgHotel} alt="Hotel" width={600} height={400} />
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
              <span className={`${noto.className} text-[60px]`}>Login</span>

              <Input
                label="Username or Email"
                labelPlacement="outside"
                autoComplete="on"
                type="text"
                placeholder="Enter your username or email"
                className="rounded-lg border border-black"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}

              <Input
                label="Password"
                labelPlacement="outside"
                autoComplete="on"
                type="password"
                placeholder="Enter your password"
                className="rounded-lg border border-black"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}

              <Button className="rounded-lg bg-orange-600 text-white" type="submit">
                Login
              </Button>

              <Button onClick={() => signIn("github")} className="bg-gray-800 text-white mt-4">
                Sign in with GitHub
              </Button>
            </form>
            <div className="flex gap-2 mt-[20px]">
              <span>Don’t have an account yet?</span>
              <Link href="/pages/register" className="text-orange-600">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
