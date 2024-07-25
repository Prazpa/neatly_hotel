import React from "react";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import ImgHotel from "/home/prapakorn/doc/neatly_hotel/public/imageHotel.jpg";

const noto = Noto_Serif({ subsets: ["latin"] });

interface idProps {
  id: string;
}

function Rooms({ id }: idProps) {
    return (
      <div id={id} className="h-auto w-full bg-white py-[50px] flex flex-col items-center ">
        <div>
          <span className={`${noto.className} text-[68px]`}>Rooms & Suites</span>
        </div>
  
        <div className="grid grid-cols-12 gap-4 max-w-[1000px] h-auto">
          <div className="col-span-12 bg-red-100">test</div>
          <div className="col-span-7 bg-red-200">test2</div>
          <div className="col-span-5 bg-red-300">test3</div>
  
          <div className="col-span-12 grid grid-cols-12 gap-4">
            <div className="col-span-5 bg-red-400">test4</div>
            <div className="col-span-7 grid grid-rows-2 gap-3">
              <div className="bg-red-500">test5</div>
              <div className="bg-red-600">test6</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Rooms;
