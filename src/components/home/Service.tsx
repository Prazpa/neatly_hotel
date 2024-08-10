import React from "react";
import noto from "@/assets/fonts";
import { idProps } from "@/types/idProps";
import Spa from "@/assets/svg/spa";
import Sauna from "@/assets/svg/sauna";
import Fitness from "@/assets/svg/fitness";
import Lounge from "@/assets/svg/lounge";
import Wifi from "@/assets/svg/wifi";
import Parking from "@/assets/svg/parking";
import Operation from "@/assets/svg/operation";

const ServiceSection = ({ id }: idProps) => {
  const serviceData = [
    { label: "Spa", icon: Spa },
    { label: "Sauna", icon: Sauna },
    { label: "Fitness", icon: Fitness },
    { label: "Arrival Lounge", icon: Lounge },
    { label: "Free Wifi", icon: Wifi },
    { label: "Parking", icon: Parking },
    { label: "24 Hours Operation", icon: Operation },
  ];

  return (
    <div id={id} className="bg-[#465C50] h-[426px] px-[80px] py-[50px] flex flex-col gap-10">
      <h2 className={`${noto.className} text-center text-[60px] text-white`}>
        Service & Facilities
      </h2>
      <ul className="flex items-center justify-around text-white">
        {serviceData.map(({ label, icon: Icon }) => (
          <li key={label} className="flex flex-col items-center justify-center">
            <Icon />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSection;
