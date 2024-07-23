import React from "react";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import ImgHotel from "/home/prapakorn/doc/neatly_hotel/public/imageHotel.jpg";
import { Button } from "@nextui-org/react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div>
      <NavbarComponent />
      <div className="flex">
        <Image src={ImgHotel} alt="Loginpage" height={400} width={600} />
        
        <div className="w-[600px] flex flex-col items-center gap-5">
          <span>Login</span>
          <Input
            isRequired
            type="email"
            placeholder="Email"
            className="max-w-xs border border-black rounded-lg"
          />

          <Input
            isRequired
            type="password"
            placeholder="Password"
            className="max-w-xs border border-black rounded-lg"
          />

          <Button className="bg-orange-500 text-white rounded-lg ">Login</Button>       
          </div>
      </div>
    </div>
  );
};

export default Login;
