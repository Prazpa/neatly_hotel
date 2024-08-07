import React from "react";
import noto from "@/assets/fonts";
import slice3 from "../../../../public/slice3.jpg";
import { idProps } from "@/types/idProps";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const images = [slice3, slice3, slice3, slice3, slice3, slice3, slice3];

const OPTIONS: EmblaOptionsType = { align: "start" };
const SLIDES = images;

const Introduction = ({ id }: idProps) => {
  return (
    <div id={id}>
      <div className="h-[1178px] w-full bg-white px-[80px] py-[100px]">
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

        <div className="visible">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
