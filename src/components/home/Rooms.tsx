import React from "react";
import noto from "@/assets/fonts"
import { idProps } from "@/types/idProps";

function RoomsSection({ id }: idProps) {
  return (
    <div id={id} className=" h-auto w-full bg-white py-[80px] flex flex-col items-center ">
      <div>
        <span className={`${noto.className} text-[60px]`}>Rooms & Suites</span>
      </div>

      <div className="grid grid-cols-12 gap-4 min-w-[600px] max-w-[1000px]">
        <div className="col-span-12 bg-[url('/superiorGarden.jpg')] h-[540px] p-[50px] flex flex-col justify-end items-start ">
          <div className="text-white text-[44px]">
            <span className={`${noto.className}`}>Superior Garden View</span>
          </div>
          <div className="text-white">
            <span>Explore Room</span>
          </div>
        </div>
 
        <div className="col-span-7 bg-[url('/deluxe.jpg')] h-[400px] p-[50px] flex flex-col justify-end items-start">
          <div className="text-white text-[44px]">
            <span className={`${noto.className}`}>Deluxe</span>
          </div>
          <div className="text-white">
            <span>Explore Room</span>
          </div>
        </div>

        <div className="col-span-5 bg-red-300 h-[400px] p-[50px] flex flex-col justify-end items-start">
          <div className="text-white text-[44px]">
            <span className={`${noto.className}`}>Superior</span>
          </div>
          <div className="text-white">
            <span>Explore Room</span>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-5 bg-red-400 h-[700px] p-[50px] flex flex-col justify-end items-start  ">
            <div className="text-white text-[44px]">
              <span className={`${noto.className}`}>Premier Sea View</span>
            </div>
            <div className="text-white">
              <span>Explore Room</span>
            </div>
          </div>
          <div className="col-span-7 grid grid-rows-2 gap-3">
            <div className="bg-red-500 h-[338px] p-[50px] flex flex-col justify-end items-start">
              <div className="text-white text-[44px]">
                <span className={`${noto.className}`}>Supreme</span>
              </div>
              <div className="text-white">
                <span>Explore Room</span>
              </div>
            </div>

            <div className="bg-red-600 h-[338px] p-[50px] flex flex-col justify-end items-start">
              <div className="text-white text-[44px]">
                <span className={`${noto.className}`}>Suite</span>
              </div>
              <div className="text-white">
                <span>Explore Room</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsSection;
