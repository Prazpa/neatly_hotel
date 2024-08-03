"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Noto_Serif } from "next/font/google";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import Image from "next/image";
import ImgHotel from "/home/prapakorn/doc/neatly_hotel/public/imageHotel.jpg";

const noto = Noto_Serif({ subsets: ["latin"] });

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
  
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful', data);
        // Handle successful login, e.g., redirect or show success message
      } else {
        console.error('Login failed', data);
        // Handle login failure, e.g., show error message
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };
  

  return (
    <div className="h-screen">
      <NavbarComponent />
      <div className="flex">
        <div>
            <Image src={ImgHotel} alt="1" width={600} height={400} />
          </div>
        <div className="w-[600px] flex flex-col justify-center items-center gap-5">
          
          <form className="w-[350px] flex flex-col items-center gap-5" onSubmit={handleLogin}>
            <div className="w-[350px]">
              <span className={`${noto.className} text-[60px]`}>Login</span>
            </div>

            <div>
              <span>Username or Email</span>
              <Input
                isRequired
                type="email"
                placeholder="Enter your username or email"
                className="w-[350px] border border-black rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <span>Password</span>
              <Input
                isRequired
                type="password"
                placeholder="Enter your password"
                className="w-[350px] border border-black rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button className="bg-orange-600 text-white rounded-lg w-[350px]" type="submit">Login</Button>
          </form>

          <div className="flex gap-2">
            <span>Don’t have an account yet?</span>
            <a href='/register' className="text-orange-600">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
