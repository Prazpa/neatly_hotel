import NavbarComponent from "@/components/Navbar/NavbarComponent";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { Noto_Serif } from "next/font/google";

const noto = Noto_Serif({ subsets: ["latin"] });

function Register() {
  return (
    <div>
      <NavbarComponent />

      <div className="w-full  h-auto bg-[url('/cover.jpg')] flex justify-center py-[80px] rounded-md ">
        <div className="bg-white w-[1000px] flex flex-col p-[50px]">
          <div>
            <span className={`${noto.className} text-[68px]`}>Register</span>
          </div>

          <div className="flex flex-col gap-5">

            {/* Basic Information */}
            <div>
              <span className="text-gray-400 font-bold">Basic Information</span>
            </div>

            <div>
              <span>Full Name</span>
              <Input
                isRequired
                type="text"
                placeholder="Enter your name and last name"
                className="w-full border border-gray-300 rounded-sm"
              />
            </div>

            <div className="flex justify-between">
              <div>
                <span>Username</span>
                <Input
                  isRequired
                  type="text"
                  placeholder="Enter your username"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>

              <div>
                <span>Email</span>
                <Input
                  isRequired
                  type="email"
                  placeholder="Enter your email"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <span>Password</span>
                <Input
                  isRequired
                  type="password"
                  placeholder="Enter your password"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>

              <div>
                <span>ID Number</span>
                <Input
                  isRequired
                  type="number"
                  placeholder="Enter your ID Number"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <span>Date of Birth</span>
                <Input
                  isRequired
                  type="date"
                  placeholder="Select your date of birth"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>

              <div>
                <span>Country</span>
                <Input
                  isRequired
                  type="country"
                  placeholder="Select your country"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>
            </div>

            {/* Upload Image */}
            <div>
              <span className="text-gray-400 font-bold">Profile Picture</span>
              <Input
                isRequired
                type="file"
                placeholder="Upload photo"
                className="w-[100px] border border-black rounded-lg"
              />
            </div>

            {/* Creditcard */}
            <div>
              <span className="text-gray-400 font-bold">Credit Card</span>
            </div>

            <div className="flex justify-between">
              <div>
                <span>Card Number</span>
                <Input
                  isRequired
                  type="number"
                  placeholder="Enter your card number"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>

              <div>
                <span>Card Owner</span>
                <Input
                  isRequired
                  type="text"
                  placeholder="Enter your card name"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>
            </div>


            <div className="flex justify-between">
              <div>
                <span>Expiry Date</span>
                <Input
                  isRequired
                  type="date"
                  placeholder="MM/YY"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>

              <div>
                <span>CVC/CVV</span>
                <Input
                  isRequired
                  type="number"
                  placeholder="CVC/CVV"
                  className="w-[400px] border border-gray-300 rounded-sm"
                />
              </div>
            </div>
          </div>
          <Button className="bg-orange-600 text-white w-[400px] rounded-md">Register</Button>
        </div>

        
      </div>
    </div>
  );
}

export default Register;
