import Sidebar from "@/components/admin/Sidebar";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";


function Hotelpage() {

  
  return (
    <div className="flex w-full gap-[50px]">
      <Sidebar />
      <div className="flex w-[900px] flex-col content-center ">
        <div className="flex items-center gap-[600px]">
          <span className="w-[200px]">Hotel Information</span>
          <Button>Update</Button>
        </div>
        <Input
          label="Hotel Name"
          labelPlacement="outside"
          placeholder="Neatly Hotel"
        />
        <Textarea label="Description" labelPlacement="outside"/>
        <span>Hotel logo</span>
        <Input type="file"/>
      </div>
    </div>
  );
}

export default Hotelpage;
