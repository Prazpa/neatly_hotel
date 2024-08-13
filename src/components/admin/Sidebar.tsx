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
  return (
    <div className="h-auto w-[213px] bg-[#2F3E35]">
      <div className={`${noto.className} mt-[30px] flex justify-center`}>
        <AdminLogo />
        <Link
          href="/"
          className={`mt-[10px] text-xl font-bold text-[#F1F5F3] text-inherit`}
        >
          NEATLY
        </Link>
      </div>

      <div className="mt-[20px] flex justify-center">
        <span className="text-[16px] text-white">Admin Panel Control</span>
      </div>

      <div className="mt-[20px] flex flex-col text-[16px] text-white">
        <div className="flex h-[72px] items-center gap-[10px] px-[10px] hover:bg-[#5D7B6A]">
          <Bag />
          <span>Customer Booking</span>
        </div>

        <div className="flex h-[72px] items-center gap-[10px] px-[10px] hover:bg-[#5D7B6A]">
          <Manage />
          <span>Room Management</span>
        </div>

        <div className="flex h-[72px] items-center gap-[10px] px-[10px] hover:bg-[#5D7B6A]">
          <Hotel />
          <span>Hotel Information</span>
        </div>

        <div className="flex h-[72px] items-center gap-[10px] px-[10px] hover:bg-[#5D7B6A]">
          <Rooms />
          <span>Room & Property</span>
        </div>
      </div>

      <div className="mt-[90px] flex text-[16px] text-white h-[72px] items-center gap-[10px] px-[10px] hover:bg-[#5D7B6A]">
        <Logout />
        <span>Log Out</span>
      </div>
    </div>
  );
}

export default Sidebar;
