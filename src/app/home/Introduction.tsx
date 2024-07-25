import React from "react";
import { Noto_Serif } from "next/font/google";

import Image from "next/image";

import slice1 from "/home/prapakorn/doc/neatly_hotel/public/slice1.jpg";
import slice2 from "/home/prapakorn/doc/neatly_hotel/public/slice2.jpg";
import slice3 from "/home/prapakorn/doc/neatly_hotel/public/slice3.jpg";



export const noto = Noto_Serif({ subsets: ["latin"] });

interface idProps {
  id: string;
}

const Introduction = ({ id }: idProps) => {
  return (
    <div id={id}>
      <div className="h-[1178px] w-full px-[80px] bg-white py-[100px]">
        <span
          className={`${noto.className} h-[220px] w-auto px-[80px] text-center text-[60px] text-black`}
        >
          Neatly Hotel
        </span>
        <p className="mx-[200px] my-[50px] w-[800px]">
          Set in Bangkok, Thailand. Neatly Hotel offers 5-star accommodation
          with an outdoor pool, kids' club, sports facilities and a fitness
          centre. There is also a spa, an indoor pool and saunas.
          <br />
          <br />
          All units at the hotel are equipped with a seating area, a flat-screen
          TV with satellite channels, a dining area and a private bathroom with
          free toiletries, a bathtub and a hairdryer. Every room in Neatly Hotel
          features a furnished balcony. Some rooms are equipped with a coffee
          machine.
          <br />
          <br />
          Free WiFi and entertainment facilities are available at property and
          also rentals are provided to explore the area.
        </p>

        <div className="flex justify-around py-[50px]">
          <Image src={slice1} alt="1" width={300} height={400}/>
          <Image src={slice2} alt="2" width={300} height={400}/>
          <Image src={slice3} alt="3" width={300} height={400}/>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
