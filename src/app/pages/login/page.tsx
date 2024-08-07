"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import noto from "@/assets/fonts"
import NavbarComponent from "@/components/Navbar";
import Image from "next/image";
import ImgHotel from "../../../../public/imageHotel.jpg";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data);
      } else {
        console.error("Login failed", data);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="h-screen">
      <NavbarComponent />

      <div className="flex h-full w-full">
        <div className=" flex gap-5">
          <div>
            <Image src={ImgHotel} alt="1" width={600} height={400} />
          </div>
          
          <div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <span className={`${noto.className} text-[60px]`}>Login</span>
              <Input
                isRequired
                type="email"
                placeholder="Enter your username or email"
                className="rounded-lg border border-black"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                isRequired
                type="password"
                placeholder="Enter your password"
                className="rounded-lg border border-black"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button
                className="rounded-lg bg-orange-600 text-white"
                type="submit"
              >
                Login
              </Button>
            </form>
            <div className="flex gap-2">
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
