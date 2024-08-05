"use client";

import NavbarComponent from "@/components/Navbar";
import Cover from "./pages/home/Cover";
import Introduction from "./pages/home/Introduction";
import ServiceSection from "./pages/home/Service";
import RoomsSection from "./pages/home/Rooms";
import ReviewsSection from "./pages/home/Review";
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
