import React from "react";
import { Noto_Serif } from "next/font/google";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

const noto = Noto_Serif({ subsets: ["latin"] });

interface idProps {
  id: string;
}

const Cover = ({ id }: idProps) => {
  return (
    <div
      id={id}
      className="flex h-[900px] flex-col items-center bg-[url('/cover.jpg')] py-[150px]"
    >
      <div className="h-[220px] w-auto px-[80px] text-center">
        <span className={`${noto.className} text-[88px] text-white`}>
          A Best Place for Your Neatly Experience
        </span>
      </div>

      <div className="my-[100px] flex h-[196px] w-[75%] flex-wrap items-center justify-around rounded-md bg-white px-[20px]">
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
          <Select
            className="h-[48px] w-[240px] rounded-lg border border-gray-500 text-gray-400"
            aria-label="Room and Guests"
          >
            <SelectItem key="1" className="bg-white">
              1 room, 1 guest
            </SelectItem>
            <SelectItem key="2" className="bg-white">
              1 room, 2 guests
            </SelectItem>
          </Select>
        </div>

        <div className="my-[0px] flex flex-col">
          <span className="text-white">___________</span>
          <Button type="submit" className="rounded-lg bg-orange-400 text-white">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
