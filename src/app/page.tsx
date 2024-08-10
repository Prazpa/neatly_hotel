"use client";

import NavbarComponent from "@/components/Navbar";
import Cover from "../components/home/Cover";
import Introduction from "../components/home/Introduction";
import ServiceSection from "../components/home/Service";
import RoomsSection from "../components/home/Rooms";
import ReviewsSection from "../components/home/Review";
import FooterComponent from "../components/Footer";


export default function Homepage() {
  return (
    <div>
      <NavbarComponent />
      <Cover id="cover" />
      <Introduction id="introduction" />
      <ServiceSection id="service" />
      <RoomsSection id="rooms" />
      <ReviewsSection />
      <FooterComponent />
    </div>
  );
}
