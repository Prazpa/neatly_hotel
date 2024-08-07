import React from "react";
import noto from "@/assets/fonts";
import { Button, Select, SelectItem, DatePicker} from "@nextui-org/react";
import { idProps } from "@/types/idProps";

const Cover = ({ id }: idProps) => {
  return (
    <div id={id} className="flex h-[800px] flex-col items-center bg-[url('/cover.jpg')]">
      <div className="h-[195px] w-auto px-[80px] text-center mt-[189px]">
        <span className={`${noto.className} text-[88px] text-white`}>
          A Best Place for Your Neatly Experience
        </span>
      </div>

      <div className="mt-[110px] flex h-[174px] w-[995px] py-[40px] flex-wrap justify-around rounded-sm bg-white px-[20px]">
        <div>
          <DatePicker label={"Check In"}  labelPlacement="outside" className="border-none h-[48px] w-[240px]  border text-gray-400" />
        </div>

        <div>
        <DatePicker label={"Check Out"}  labelPlacement="outside" className="border-none h-[48px] w-[240px]  border text-gray-400" />
        </div>

        <div className="flex flex-col gap-y-[7px]">
          <span className="text-[18px] text-[#3D4346]">Room and Guests</span>
          <Select
            className="h-[48px] w-[240px] rounded-lg border text-gray-400"
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

        <div className="flex flex-col mt-[30px]">
          <Button type="submit" className="rounded-lg bg-orange-400 text-white">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
