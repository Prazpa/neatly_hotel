"use client";

import NavbarComponent from "@/components/Navbar/NavbarComponent";
import Cover from "./home/Cover";
import Introduction from "./home/Introduction";
import Service from "./home/Service";
import Footer from "@/components/Footer/Footer";

export default function Homepage() {
  return (
    <div className="h-auto">
      <NavbarComponent />
      <Cover />
      <Introduction />
      <Service />
      <Footer />
    </div>
  );
}
