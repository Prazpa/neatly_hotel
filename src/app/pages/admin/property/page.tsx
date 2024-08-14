import Propertytable from "@/components/admin/property/Propertytable";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";

function page() {
  return (
    <div className="flex w-full gap-[50px]">
      <Sidebar />
      <div className="flex w-[900px] content-center items-center">
        <Propertytable />
      </div>
    </div>
  );
}

export default page;
