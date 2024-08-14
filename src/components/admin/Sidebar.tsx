"use client";
import Link from "next/link";
import React from "react";
import noto from "@/assets/fonts";
import AdminLogo from "@/assets/svg/adminLogo";
import Bag from "@/assets/svg/bag";
import Manage from "@/assets/svg/manage";
import Hotel from "@/assets/svg/hotel";
import Rooms from "@/assets/svg/rooms";
import Logout from "@/assets/svg/logout";

function Sidebar() {  

  const mainPath = [
    { icon: <Bag />, label: "Customer Booking", href: "/pages/admin/booking" },
    { icon: <Manage />, label: "Room Management", href: "/pages/admin/room" },
    { icon: <Hotel />, label: "Hotel Information", href: "/pages/admin/hotel" },
    { icon: <Rooms />, label: "Room & Property", href: "/pages/admin/property" },
  ];

  return (
    <div className="h-auto w-[213px] bg-[#2F3E35]">
      <div className={`${noto.className} mt-[30px] flex justify-center`}>
        <AdminLogo />
        <Link href="/" className="mt-[10px] text-xl font-bold text-[#F1F5F3]">
          NEATLY
        </Link>
      </div>

      <div className="mt-[20px] flex justify-center">
        <span className="text-[16px] text-white">Admin Panel Control</span>
      </div>

      <div className="mt-[20px] flex flex-col text-[16px] text-white">
        {mainPath.map((item, index) => (
          <Link
            key={index}
            className={`flex h-[72px] cursor-pointer items-center gap-[10px] px-[10px] hover:bg-[#5D7B6A]`}
            href={item.href}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="sidebar-link mt-[90px] flex h-[72px] cursor-pointer items-center gap-[10px] px-[10px] text-[16px] text-white hover:bg-[#5D7B6A]"
      >
        <Logout />
        <span>Log Out</span>
      </Link>
    </div>
  );
}

export default Sidebar;
