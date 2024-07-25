"use client";

import NavbarComponent from "@/components/Navbar/NavbarComponent";
import Cover from "./home/Cover";
import Introduction from "./home/Introduction";
import Service from "./home/Service";
import Rooms from "./home/Rooms";
import Footer from "@/components/Footer/Footer";


export default function Homepage() {

  return (
    <div>
      <NavbarComponent />
      <Cover id="cover"/>
      <Introduction id="introduction"/>
      <Service id="service"/>
      <Rooms id="rooms"/>
      <Footer />
    </div>
  );
}
