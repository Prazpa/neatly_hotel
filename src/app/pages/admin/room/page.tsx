import Roomtable from "@/components/admin/Roommanagement/Roomtable";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";

function Roommanagementpage() {
  return (
    <div className="flex w-full gap-[50px]">
      <Sidebar />
      <div className="flex w-[900px] content-center items-center">
        <Roomtable />
      </div>
    </div>
  );
}

export default Roommanagementpage;
