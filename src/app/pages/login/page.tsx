"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import noto from "@/assets/fonts";
import NavbarComponent from "@/components/Navbar";
import Image from "next/image";
import ImgHotel from "../../../../public/imageHotel.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn, signOut, useSession } from "next-auth/react";
import Homepage from "@/app/page";

// Define the form inputs type
interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  // React Hook Form setup
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  // NextAuth session check
  const { data: session } = useSession();

  // If the user is already signed in, show the sign out option
  if (session?.user) {
    return (
      <Homepage />
    );
  }

  // Handle form submission for email/password login
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Login successful", responseData);
        if (session?.user) {
          return (
            <Homepage />
          );
        }
      } else {
        console.error("Login failed", responseData);
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
                type="email"
                placeholder="Enter your email"
                className="rounded-lg border border-black"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}

              <Input
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
              <a href="/pages/register" className="text-orange-600">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
