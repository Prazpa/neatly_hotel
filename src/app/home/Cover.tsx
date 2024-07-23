import React from 'react'
import { Noto_Serif } from "next/font/google";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

const noto = Noto_Serif({ subsets: ["latin"] });

const Cover = () => {
  return (
    <div>
        <div className="flex h-[900px] w-full flex-col items-center justify-center bg-[url('/cover.jpg')]">
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
              <SelectItem key="1" className="bg-white">
                1 room 1,guests
              </SelectItem>
              <SelectItem key="2" className="bg-white">
                1 room 2,guests
              </SelectItem>
            </Select>
          </div>

          <Button type="submit" className="rounded-lg bg-orange-400 text-white">
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cover