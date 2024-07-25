import React from "react";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import ImgHotel from "/home/prapakorn/doc/neatly_hotel/public/imageHotel.jpg";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Noto_Serif } from "next/font/google";


const noto = Noto_Serif({ subsets: ["latin"] });


const Login = () => {
  return (
    <div className="h-screen">
      <NavbarComponent />
      <div className="flex ">
        <Image src={ImgHotel} alt="Loginpage" height={300} width={600} />
        
        <div className="w-[600px] flex flex-col justify-center items-center gap-5">
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
          />
          </div>
          
          <div>
          <span>Password</span>
          <Input
            isRequired
            type="password"
            placeholder="Enter your password"
            className="w-[350px] border border-black rounded-lg"
          />
          </div>


          <Button className="bg-orange-600 text-white rounded-lg w-[350px]">Login</Button>       
          
          <div className="flex gap-2">
            <span>Don’t have an account yet?</span>
            <Link href={'/register'} className="text-orange-600">Register</Link>  
          </div>
          
          </div>

          
      </div>
    </div>
  );
};

export default Login;
