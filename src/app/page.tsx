"use client";

import NavbarComponent from "@/components/Navbar/NavbarComponent";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Noto_Serif } from "next/font/google";

const noto = Noto_Serif({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavbarComponent />

      {/* cover */}
      <div className="w-fulll flex h-[900px] flex-col items-center justify-center bg-[url('/cover.jpg')]">
        <span
          className={`${noto.className} h-[220px] w-auto px-[80px] text-center text-[88px] font-semibold text-white`}
        >
          A Best Place for Your Neatly Experience
        </span>

        <div className="my-[50px] flex h-[196px] w-[1120px] items-center justify-around rounded-md bg-white opacity-90">
          <div>
            <span>Check In</span>
            <Input
              type="date"
              className="h-[48px] w-[240px] rounded-lg border border-gray-500 text-gray-400"
            />
          </div>

          <div>
            <span>Check Out</span>
            <Input
              type="date"
              className="h-[48px] w-[240px] rounded-lg border border-gray-500 text-gray-400"
            />
          </div>

          <div>
            <span>Room and Guests</span>
            <Select className="h-[48px] w-[240px] rounded-lg border border-gray-500 text-gray-400">
              <SelectItem key="1" className="bg-white">1 room 1,guests</SelectItem>
              <SelectItem key="2" className="bg-white">1 room 2,guests</SelectItem>
            </Select>
          </div>

          <Button type="submit" className="rounded-lg bg-orange-400 text-white ">
            Search
          </Button>
        </div>

        {/* Footer */}
        <div className="w-full h-[485px] bg-[#2F3E35] text-white flex justify-between px-[80px]">
          <div>
            <h1>Neatly</h1>
            <span>Neatly Hotel</span>
            <span>The best hotel for rising your experience</span>
          </div>

          <div>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
