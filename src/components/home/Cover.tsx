"use client";
import React, { useState } from "react";
import {
  Button,
  Select,
  SelectItem,
  DatePicker,
  DateValue,
} from "@nextui-org/react";
import { idProps } from "@/types/idProps";
import noto from "@/assets/fonts";


const Cover = ({ id }: idProps) => {
  const [checkInDate, setCheckInDate] = useState<DateValue | undefined>(
    undefined,
  );
  const [checkOutDate, setCheckOutDate] = useState<DateValue | undefined>(
    undefined,
  );
  const [showWarning, setShowWarning] = useState("");

  const handleCheckInChange = (date: DateValue | undefined) => {
    if (checkOutDate && date && date > checkOutDate) {
      setShowWarning("Check-In Date is after Check-Out Date"); // Show warning message
      setCheckInDate(undefined); // Clear the invalid date
    } else {
      setShowWarning(""); // Hide warning message
      setCheckInDate(date); // Set the valid date
    }
  };

  const handleCheckOutChange = (date: DateValue | undefined) => {
    if (checkInDate && date && date < checkInDate) {
      setShowWarning("Check-Out Date is before Check-In Date"); // Show warning message
      setCheckOutDate(undefined); // Clear the invalid date
    } else {
      setShowWarning(""); // Hide warning message
      setCheckOutDate(date); // Set the valid date
    }
  };

  return (
    <div
      id={id}
      className="flex h-[800px] flex-col items-center bg-[url('/cover.jpg')]"
    >
      <div className="mt-[189px] h-[195px] w-auto px-[80px] text-center">
        <span className={`${noto.className} text-[88px] text-white`}>
          A Best Place for Your Neatly Experience
        </span>
      </div>

      <div className="mt-[110px] flex h-[174px] w-[995px] flex-wrap justify-around rounded-sm bg-white px-[20px] py-[40px]">
        <div>
          <DatePicker
            label="Check In"
            labelPlacement="outside"
            size="md"
            className={`w-[240px]`}
            variant="bordered"
            radius="sm"
            calendarWidth={300}
            value={checkInDate}
            onChange={handleCheckInChange}
            showMonthAndYearPickers={true}
          />
        </div>

        <div className="overflow-hidden">
          <div className="flex flex-col">
            <DatePicker
              label="Check Out"
              labelPlacement="outside"
              size="md"
              className={`w-[240px]`}
              variant="bordered"
              radius="sm"
              calendarWidth={300}
              value={checkOutDate}
              onChange={handleCheckOutChange}
              showMonthAndYearPickers={true}
            />
          </div>
          <div className="mt-2 text-[10px] text-red-500">
            {showWarning && <span>{showWarning}</span>}
          </div>
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

        <div className="mt-[30px] flex flex-col">
          <Button type="submit" className="rounded-lg bg-orange-400 text-white">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
