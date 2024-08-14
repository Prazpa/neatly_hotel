import Sidebar from "@/components/admin/Sidebar";
import Booktable from "@/components/admin/Booking/booktable";
import React from "react";

function Bookingpage() {
  return (
    <div className="flex w-full gap-[50px]">
      <Sidebar />
      <div className="flex w-[900px] content-center items-center">
        <Booktable />
      </div>
    </div>
  );
}

export default Bookingpage;
