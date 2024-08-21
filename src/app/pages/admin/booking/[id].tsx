"use client";

import React from "react";
import { useRouter } from "next/router";
import DetailRow from "@/components/admin/Booking/DetailRow/page";

const BookingDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Loading...</div>;

  return <DetailRow id={Number(id)} />;
};

export default BookingDetailPage;
