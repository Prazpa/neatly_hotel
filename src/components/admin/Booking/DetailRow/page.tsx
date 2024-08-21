"use client"
import React from "react";
import Sidebar from "@/components/admin/Sidebar";
import { users } from "@/providers/admin/Bookdata";

type DetailRowProps = {
  id: number;
};

const DetailRow: React.FC<DetailRowProps> = ({ id }) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex w-full gap-[50px]">
      <Sidebar />
      <div className="flex w-[900px] content-center items-center">
        <div>
          <h2>{user.customer_name}</h2>
          <p>Room Type: {user.roomtype}</p>
          <p>Amount: {user.amount}</p>
          <p>Check-in: {user.checkin}</p>
          <p>Check-out: {user.checkout}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default DetailRow;
